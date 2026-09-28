import { useEffect, useRef, useState } from 'react'
import ChatHeader from './ChatHeader'
import SuggestedQuestions from './SuggestedQuestions'
import ChatHistory from './ChatHistory'
import './rag-chat.css'

function formatTime() {
  const now = new Date()
  let hours = now.getHours()
  const minutes = now.getMinutes().toString().padStart(2, '0')
  const ampm = hours >= 12 ? 'PM' : 'AM'
  hours = hours % 12
  hours = hours ? hours : 12
  return `${hours}:${minutes} ${ampm}`
}

export default function RagChatWidget() {
  const [messages, setMessages] = useState([])
  const [isLoading, setIsLoading] = useState(false)
  const [isOpen, setIsOpen] = useState(false)
  const [unreadBadge, setUnreadBadge] = useState(0)
  const wasOpenRef = useRef(false)

  useEffect(() => {
    if (!wasOpenRef.current && isOpen) {
      wasOpenRef.current = true
      setUnreadBadge(0)
    }
    if (isOpen) setUnreadBadge(0)
  }, [isOpen])

  const sendMessage = async (query) => {
    if (isLoading) return

    setMessages((prev) => [
      ...prev,
      { role: 'user', content: query, timestamp: formatTime() },
    ])
    setIsLoading(true)

    try {
      const res = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ query }),
      })
      const data = await res.json()
      if (!res.ok) throw new Error(data.error || 'Request failed')

      setMessages((prev) => [
        ...prev,
        {
          role: 'assistant',
          content: data.content,
          timestamp: data.timestamp,
        },
      ])

      if (!isOpen) setUnreadBadge((n) => n + 1)
    } catch (err) {
      setMessages((prev) => [
        ...prev,
        {
          role: 'assistant',
          content:
            err.message ||
            'Sorry, I encountered an error while processing your question.',
          timestamp: formatTime(),
        },
      ])
    } finally {
      setIsLoading(false)
    }
  }

  const clearChat = () => setMessages([])
  const toggleOpen = () => setIsOpen((v) => !v)

  return (
    <div id="rag-chat-root">
      <div
        className={`rag-chat-panel ${isOpen ? 'is-open' : 'is-closed'}`}
        aria-hidden={!isOpen}
      >
        <ChatHeader
          onClose={toggleOpen}
          onClear={clearChat}
          onSendInput={sendMessage}
          disabled={isLoading}
        />

        <div className="rag-chat-body">
          {messages.length === 0 && !isLoading ? (
            <div className="rag-chat-scroll flex-1 px-4 py-[18px]">
              <SuggestedQuestions onSelect={sendMessage} />
            </div>
          ) : (
            <div className="min-h-0 flex-1 overflow-hidden">
              <ChatHistory messages={messages} isLoading={isLoading} />
            </div>
          )}

          <div className="rag-disclaimer">
            <p>
              TechNova is TechnoSense&apos;s AI assistant. Responses are
              informational and may not always be complete — confirm critical
              details with our team.
            </p>
          </div>
        </div>
      </div>

      <button
        id="ai-assistant-toggle"
        type="button"
        className={`ai-assistant-button${isOpen ? ' is-open' : ''}`}
        aria-label={isOpen ? 'Close TechNova' : 'Ask TechNova: open assistant'}
        title="Ask TechNova"
        onClick={toggleOpen}
      >
        <span className="ai-assistant-icon" aria-hidden="true">
          <strong className="technova-mark">TN</strong>
        </span>
        {!isOpen && <span className="ai-assistant-label">Ask TechNova</span>}
        {unreadBadge > 0 && !isOpen && (
          <span className="ai-assistant-badge">
            {unreadBadge > 9 ? '9+' : unreadBadge}
          </span>
        )}
      </button>
    </div>
  )
}

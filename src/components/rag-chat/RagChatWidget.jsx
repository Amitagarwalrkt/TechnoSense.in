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
            <div className="rag-chat-scroll" style={{ flex: 1, padding: '18px 16px' }}>
              <SuggestedQuestions onSelect={sendMessage} />
            </div>
          ) : (
            <div style={{ flex: 1, minHeight: 0, overflow: 'hidden' }}>
              <ChatHistory messages={messages} isLoading={isLoading} />
            </div>
          )}

          <div className="rag-disclaimer">
            <p>
              AI-generated responses are for informational purposes only and do
              not constitute official advice.
            </p>
          </div>
        </div>
      </div>

      <button
        id="ai-assistant-toggle"
        type="button"
        className={`ai-assistant-button${isOpen ? ' is-open' : ''}`}
        aria-label={isOpen ? 'Close assistant' : 'Ask TechNova: open assistant'}
        title="Ask TechNova"
        onClick={toggleOpen}
      >
        <strong className="technova-mark">T</strong>
        {!isOpen && <span className="ai-assistant-label">Ask TechNova</span>}
        {unreadBadge > 0 && !isOpen && (
          <span
            style={{
              position: 'absolute',
              top: -2,
              right: -2,
              minWidth: 18,
              height: 18,
              padding: '0 5px',
              borderRadius: 999,
              background: '#111827',
              color: '#fff',
              fontSize: 10,
              fontWeight: 700,
              display: 'grid',
              placeItems: 'center',
              boxShadow: '0 0 0 2px #fff',
            }}
          >
            {unreadBadge > 9 ? '9+' : unreadBadge}
          </span>
        )}
      </button>
    </div>
  )
}

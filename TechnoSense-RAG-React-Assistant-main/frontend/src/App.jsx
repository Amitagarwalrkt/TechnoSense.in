import { useState, useEffect, useRef } from 'react'
import ChatHeader from './components/ChatHeader'
import SuggestedQuestions from './components/SuggestedQuestions'
import ChatHistory from './components/ChatHistory'
import ChatInput from './components/ChatInput'

function formatTime() {
  const now = new Date()
  let hours = now.getHours()
  const minutes = now.getMinutes().toString().padStart(2, '0')
  const ampm = hours >= 12 ? 'PM' : 'AM'
  hours = hours % 12
  hours = hours ? hours : 12
  return `${hours}:${minutes} ${ampm}`
}

export default function App() {
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
    if (isOpen) {
      setUnreadBadge(0)
    }
  }, [isOpen])

  const sendMessage = async (query) => {
    if (isLoading) return

    const userTimestamp = formatTime()
    const userMsg = {
      role: 'user',
      content: query,
      timestamp: userTimestamp,
    }

    setMessages((prev) => [...prev, userMsg])
    setIsLoading(true)

    try {
      const res = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ query }),
      })

      const data = await res.json()

      if (!res.ok) {
        throw new Error(data.error || 'Request failed')
      }

      const assistantMsg = {
        role: 'assistant',
        content: data.content,
        timestamp: data.timestamp,
      }

      setMessages((prev) => [...prev, assistantMsg])

      if (!isOpen) {
        setUnreadBadge((n) => n + 1)
      }
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

  const clearChat = () => {
    setMessages([])
  }

  const toggleOpen = () => {
    setIsOpen((v) => !v)
  }

  return (
    <div className="h-screen w-screen overflow-hidden bg-[radial-gradient(circle_at_20%_10%,#fee2e2_0%,transparent_55%),radial-gradient(circle_at_80%_90%,#fff1f2_0%,transparent_55%),#fafafa]">
      <div className="h-full flex flex-col items-center justify-center p-8 pointer-events-none select-none">
        <div className="text-7xl mb-6 opacity-80">🏢</div>
        <h1 className="text-3xl md:text-4xl font-extrabold text-slate-800 tracking-tight mb-2 text-center">
          Welcome to TechnoSense
        </h1>
        <p className="text-base md:text-lg text-slate-500 max-w-xl text-center leading-relaxed">
          This is your company website. Look for the chat button in the bottom-right corner
          to talk to our AI assistant and learn more about our services.
        </p>
      </div>

      <div className="fixed bottom-6 right-6 z-[9999] flex flex-col items-end gap-4">
        <div
          className={`w-[400px] max-w-[calc(100vw-3rem)] h-[620px] max-h-[calc(100vh-6rem)]
                      bg-white rounded-2xl shadow-[0_30px_70px_-18px_rgba(220,38,38,0.35)]
                      ring-1 ring-slate-200 overflow-hidden
                      flex flex-col origin-bottom-right
                      transition-all duration-300 ease-out ${
                        isOpen
                          ? 'opacity-100 scale-100 translate-y-0 pointer-events-auto'
                          : 'opacity-0 scale-95 translate-y-4 pointer-events-none'
                      }`}
        >
          <ChatHeader
            onClose={toggleOpen}
            onClear={clearChat}
            onSendInput={sendMessage}
            disabled={isLoading}
          />

          <div className="flex-1 flex flex-col min-h-0 bg-white">
            {messages.length === 0 && !isLoading ? (
              <div className="flex-1 overflow-y-auto px-6 py-6">
                <SuggestedQuestions onSelect={sendMessage} />
              </div>
            ) : (
              <div className="flex-1 min-h-0 overflow-hidden">
                <ChatHistory messages={messages} isLoading={isLoading} />
              </div>
            )}

            <div className="shrink-0 px-6 py-3 text-center border-t border-slate-100 bg-slate-50/60">
              <p className="text-[12.5px] text-slate-500 leading-snug">
                AI-generated responses are for informational purposes only and do
                not constitute official advice.
              </p>
            </div>
          </div>
        </div>

        <button
          onClick={toggleOpen}
          className="relative group"
          aria-label={isOpen ? 'Close chat' : 'Open chat'}
        >
          <div
            className={`absolute inset-0 rounded-full blur-xl transition-opacity duration-500 ${
              isOpen ? 'opacity-40' : 'opacity-60 group-hover:opacity-80'
            }`}
            style={{
              background: 'linear-gradient(135deg, #f87171 0%, #b91c1c 100%)',
            }}
          />
          <div
            className="relative w-11 h-11 md:w-12 md:h-12 rounded-full flex items-center justify-center
                        shadow-2xl transition-all duration-300 ease-out hover:scale-105 active:scale-95
                        text-white overflow-hidden"
            style={{
              background: 'linear-gradient(135deg, #ef4444 0%, #dc2626 55%, #b91c1c 100%)',
            }}
          >
            <svg
              width="26"
              height="26"
              viewBox="0 0 64 64"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              aria-label="TechnoSense T logo"
            >
              <text
                x="50%"
                y="54%"
                dominantBaseline="middle"
                textAnchor="middle"
                fontFamily="Inter, -apple-system, 'Segoe UI', Roboto, sans-serif"
                fontWeight="900"
                fontSize="44"
                fill="#ffffff"
                letterSpacing="-2"
              >
                T
              </text>
            </svg>
          </div>

          {unreadBadge > 0 && !isOpen && (
            <span className="absolute -top-0.5 -right-0.5 min-w-[19px] h-[19px] px-1 rounded-full
                             bg-slate-900 text-white text-[10px] font-bold flex items-center justify-center
                             ring-2 ring-white shadow-lg animate-bounce">
              {unreadBadge > 9 ? '9+' : unreadBadge}
            </span>
          )}
        </button>
      </div>
    </div>
  )
}

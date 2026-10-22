
import { useEffect, useRef } from 'react'
import ChatMessage from './ChatMessage'
import TypingIndicator from './TypingIndicator'

export default function ChatHistory({ messages, isLoading }) {
  const scrollRef = useRef(null)
  const previousMessageCountRef = useRef(0)

  const lastMessage = messages[messages.length - 1]

  const showTypingIndicator =
    isLoading &&
    (lastMessage?.role !== 'assistant' || !lastMessage.content)

  // New messages and streamed response chunks must not force scrolling.
  useEffect(() => {
    const container = scrollRef.current
    if (!container) return

    // Record message count without changing the scroll position.
    previousMessageCountRef.current = messages.length
  }, [messages, isLoading])

  if (messages.length === 0 && !isLoading) {
    return null
  }

  return (
    <div
      ref={scrollRef}
      className="rag-chat-scroll h-full overflow-y-auto px-4 pt-4 pb-2"
      tabIndex={0}
      role="log"
      aria-live="polite"
      aria-relevant="additions"
    >
      {messages.map((msg, idx) => (
        <ChatMessage
          key={idx}
          message={msg}
        />
      ))}

      {showTypingIndicator && <TypingIndicator />}
    </div>
  )
}

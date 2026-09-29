import { useEffect, useRef } from 'react'
import ChatMessage from './ChatMessage'
import TypingIndicator from './TypingIndicator'

export default function ChatHistory({ messages, isLoading }) {
  const scrollRef = useRef(null)
  const previousHeightRef = useRef(0)

  useEffect(() => {
    const container = scrollRef.current

    if (!container) return

    /*
     * Don't instantly jump to the bottom.
     * Smoothly follow newly rendered/typed content.
     */
    const scrollSmoothly = () => {
      const currentHeight = container.scrollHeight

      // Only scroll when the content actually changed
      if (currentHeight !== previousHeightRef.current) {
        previousHeightRef.current = currentHeight

        container.scrollTo({
          top: currentHeight,
          behavior: 'smooth',
        })
      }
    }

    // Wait for React to finish rendering the new content
    const frame = requestAnimationFrame(() => {
      scrollSmoothly()
    })

    return () => cancelAnimationFrame(frame)
  }, [messages, isLoading])

  if (messages.length === 0 && !isLoading) {
    return null
  }

  return (
    <div
      ref={scrollRef}
      className="rag-chat-scroll h-full px-4 pt-4 pb-2"
    >
      {messages.map((msg, idx) => (
        <ChatMessage
          key={idx}
          message={msg}
        />
      ))}

      {isLoading && <TypingIndicator />}
    </div>
  )
}
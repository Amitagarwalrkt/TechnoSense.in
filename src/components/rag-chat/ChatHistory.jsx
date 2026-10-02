import { useEffect, useRef } from 'react'
import ChatMessage from './ChatMessage'
import TypingIndicator from './TypingIndicator'

export default function ChatHistory({ messages, isLoading, scrollRequest }) {
  const scrollRef = useRef(null)
  const previousHeightRef = useRef(0)
  const isAtBottomRef = useRef(true)
  const previousScrollRequestRef = useRef(0)
  const userScrollIntentRef = useRef(false)
  const touchStartYRef = useRef(null)
  const lastMessage = messages[messages.length - 1]
  const showTypingIndicator =
    isLoading && (lastMessage?.role !== 'assistant' || !lastMessage.content)

  useEffect(() => {
    const container = scrollRef.current
    if (!container) return undefined

    const isAtBottom = () =>
      container.scrollHeight - container.scrollTop - container.clientHeight <= 48

    const updateScrollPosition = () => {
      if (userScrollIntentRef.current) {
        isAtBottomRef.current = isAtBottom()
        userScrollIntentRef.current = false
      } else if (isAtBottom()) {
        isAtBottomRef.current = true
      }
    }

    const handleWheel = () => {
      userScrollIntentRef.current = true
    }

    const handleTouchStart = (event) => {
      touchStartYRef.current = event.touches[0]?.clientY ?? null
    }

    const handleTouchMove = (event) => {
      const currentY = event.touches[0]?.clientY
      if (currentY == null || touchStartYRef.current == null) return
      if (Math.abs(currentY - touchStartYRef.current) > 4) {
        userScrollIntentRef.current = true
        touchStartYRef.current = currentY
      }
    }

    const handleKeyDown = (event) => {
      if (['ArrowUp', 'ArrowDown', 'PageUp', 'PageDown', 'Home', 'End', ' '].includes(event.key)) {
        userScrollIntentRef.current = true
      }
    }

    const handlePointerDown = (event) => {
      if (event.clientX >= container.getBoundingClientRect().right - 12) {
        userScrollIntentRef.current = true
      }
    }

    updateScrollPosition()
    container.addEventListener('scroll', updateScrollPosition, { passive: true })
    container.addEventListener('wheel', handleWheel, { passive: true })
    container.addEventListener('touchstart', handleTouchStart, { passive: true })
    container.addEventListener('touchmove', handleTouchMove, { passive: true })
    container.addEventListener('keydown', handleKeyDown)
    container.addEventListener('pointerdown', handlePointerDown)
    return () => {
      container.removeEventListener('scroll', updateScrollPosition)
      container.removeEventListener('wheel', handleWheel)
      container.removeEventListener('touchstart', handleTouchStart)
      container.removeEventListener('touchmove', handleTouchMove)
      container.removeEventListener('keydown', handleKeyDown)
      container.removeEventListener('pointerdown', handlePointerDown)
    }
  }, [])

  useEffect(() => {
    const container = scrollRef.current

    if (!container) return

    const followNewContent = () => {
      const currentHeight = container.scrollHeight
      const shouldJumpToLatest = scrollRequest > previousScrollRequestRef.current

      previousScrollRequestRef.current = scrollRequest

      if (shouldJumpToLatest) isAtBottomRef.current = true
      if (currentHeight !== previousHeightRef.current) {
        previousHeightRef.current = currentHeight
        if (isAtBottomRef.current || shouldJumpToLatest) container.scrollTop = currentHeight
      }
    }

    const frame = requestAnimationFrame(() => {
      followNewContent()
    })

    return () => cancelAnimationFrame(frame)
  }, [messages, isLoading, scrollRequest])

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

      {showTypingIndicator && <TypingIndicator />}
    </div>
  )
}
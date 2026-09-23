export default function TypingIndicator() {
  return (
    <div className="rag-msg">
      <div className="rag-avatar" aria-hidden="true">
        <span className="rag-avatar-t">T</span>
      </div>
      <div className="rag-bubble-col">
        <div className="rag-bubble px-4 py-3.5">
          <div className="flex h-4 items-center gap-[5px]">
            <span className="rag-typing-dot" />
            <span className="rag-typing-dot [animation-delay:0.15s]" />
            <span className="rag-typing-dot [animation-delay:0.3s]" />
          </div>
        </div>
      </div>
    </div>
  )
}

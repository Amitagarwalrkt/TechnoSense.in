export default function TypingIndicator() {
  return (
    <div className="rag-msg">
      <div className="rag-avatar" aria-hidden="true">
        <span className="rag-avatar-t">T</span>
      </div>
      <div className="rag-bubble-col">
        <div className="rag-bubble" style={{ padding: '14px 16px' }}>
          <div style={{ display: 'flex', gap: 5, alignItems: 'center', height: 16 }}>
            <span className="rag-typing-dot" />
            <span className="rag-typing-dot" style={{ animationDelay: '0.15s' }} />
            <span className="rag-typing-dot" style={{ animationDelay: '0.3s' }} />
          </div>
        </div>
      </div>
    </div>
  )
}

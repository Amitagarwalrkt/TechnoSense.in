import { useState } from 'react'

export default function ChatHeader({ onClose, onClear, onSendInput, disabled }) {
  const [value, setValue] = useState('')

  const submit = (e) => {
    e.preventDefault()
    const trimmed = value.trim()
    if (!trimmed || disabled) return
    onSendInput(trimmed)
    setValue('')
  }

  const onKey = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault()
      submit(e)
    }
  }

  return (
    <div className="rag-chat-header">
      <div className="rag-chat-header-top">
        <div className="rag-chat-brand">
          <span className="rag-chat-brand-mark" aria-hidden="true">T</span>
          <h1>Ask TechNova</h1>
        </div>

        <div className="rag-chat-actions">
          <button
            type="button"
            className="rag-chat-icon-btn"
            onClick={onClear}
            title="New chat"
            aria-label="New chat"
          >
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="23 4 23 10 17 10" />
              <polyline points="1 20 1 14 7 14" />
              <path d="M3.51 9a9 9 0 0 1 14.85-3.36L23 10M1 14l4.64 4.36A9 9 0 0 0 20.49 15" />
            </svg>
          </button>
          <button
            type="button"
            className="rag-chat-icon-btn"
            onClick={onClose}
            title="Minimize"
            aria-label="Minimize chat"
          >
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.8" strokeLinecap="round">
              <line x1="5" y1="12" x2="19" y2="12" />
            </svg>
          </button>
        </div>
      </div>

      <p>Instant answers about TechnoSense services, solutions, and more.</p>

      <form onSubmit={submit}>
        <div className="rag-chat-input-wrap">
          <input
            type="text"
            value={value}
            onChange={(e) => setValue(e.target.value)}
            onKeyDown={onKey}
            placeholder="Ask a question…"
            disabled={disabled}
            aria-label="Ask a question"
          />
          <button
            type="submit"
            className="rag-chat-send"
            disabled={disabled || !value.trim()}
            aria-label="Send"
          >
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
              <line x1="5" y1="12" x2="19" y2="12" />
              <polyline points="12 5 19 12 12 19" />
            </svg>
          </button>
        </div>
      </form>
    </div>
  )
}

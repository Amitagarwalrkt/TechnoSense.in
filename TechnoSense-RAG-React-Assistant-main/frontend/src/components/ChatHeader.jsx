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
    <div
      className="relative shrink-0 px-5 pt-4 pb-4 text-white rounded-t-2xl overflow-hidden"
      style={{
        background: 'linear-gradient(160deg, #ef4444 0%, #dc2626 55%, #991b1b 100%)',
      }}
    >
      <div className="absolute inset-0 pointer-events-none opacity-20"
        style={{
          backgroundImage:
            'radial-gradient(circle at 10% 0%, rgba(255,255,255,0.8) 0, transparent 45%), radial-gradient(circle at 95% 110%, rgba(255,255,255,0.4) 0, transparent 55%)',
        }}
      />

      <div className="relative flex items-center justify-between mb-2">
        <div className="flex items-center gap-1.5">
          <svg width="28" height="28" viewBox="0 0 64 64" fill="none" aria-hidden="true">
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
          <h1 className="text-[24px] font-extrabold tracking-tight leading-none">
            Ask TechnoSense
          </h1>
        </div>

        <div className="flex items-center gap-0.5 -mr-1">
          <button
            onClick={onClear}
            className="p-1.5 rounded-md text-white/85 hover:bg-white/15 hover:text-white
                       transition-all duration-150"
            title="New chat (refresh)"
            aria-label="New chat"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="23 4 23 10 17 10" />
              <polyline points="1 20 1 14 7 14" />
              <path d="M3.51 9a9 9 0 0 1 14.85-3.36L23 10M1 14l4.64 4.36A9 9 0 0 0 20.49 15" />
            </svg>
          </button>
          <button
            onClick={onClose}
            className="p-1.5 rounded-md text-white/85 hover:bg-white/15 hover:text-white
                       transition-all duration-150"
            title="Minimize"
            aria-label="Minimize chat"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
              <line x1="5" y1="12" x2="19" y2="12" />
            </svg>
          </button>
        </div>
      </div>

      <p className="relative text-[13px] leading-snug text-white/85 mb-3 font-medium">
        Your on-demand assistant — instant answers about TechnoSense services,
        solutions, and more.
      </p>

      <form onSubmit={submit} className="relative">
        <div className="relative flex items-center bg-white rounded-xl shadow-[0_6px_20px_rgba(0,0,0,0.14)] ring-1 ring-black/5 focus-within:ring-2 focus-within:ring-white/40 transition-all">
          <input
            type="text"
            value={value}
            onChange={(e) => setValue(e.target.value)}
            onKeyDown={onKey}
            placeholder="Ask a question"
            disabled={disabled}
            className="flex-1 bg-transparent px-4 py-3 text-[14px] text-slate-800 outline-none placeholder:text-slate-400 disabled:opacity-60 disabled:cursor-not-allowed"
          />
          <button
            type="submit"
            disabled={disabled || !value.trim()}
            className="mr-1.5 w-8 h-8 rounded-full bg-slate-300 text-white
                       disabled:bg-slate-300 disabled:cursor-not-allowed
                       enabled:bg-brand-600 enabled:hover:bg-brand-700
                       transition-all duration-200 flex items-center justify-center shadow-sm"
            aria-label="Send"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
              <line x1="5" y1="12" x2="19" y2="12" />
              <polyline points="12 5 19 12 12 19" />
            </svg>
          </button>
        </div>
      </form>
    </div>
  )
}

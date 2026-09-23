export default function TypingIndicator() {
  return (
    <div className="flex gap-2.5 mb-2 animate-fade-in">
      <div className="flex-shrink-0 w-9 h-9 rounded-full flex items-center justify-center border border-brand-100 bg-white shadow-sm">
        <svg width="20" height="20" viewBox="0 0 64 64" fill="none" aria-hidden="true">
          <text
            x="50%"
            y="54%"
            dominantBaseline="middle"
            textAnchor="middle"
            fontFamily="Inter, -apple-system, 'Segoe UI', Roboto, sans-serif"
            fontWeight="900"
            fontSize="40"
            fill="#dc2626"
            letterSpacing="-2"
          >
            T
          </text>
        </svg>
      </div>
      <div className="px-4 py-3 rounded-2xl rounded-tl-sm bg-white border border-brand-100 shadow-sm">
        <div className="flex gap-1 items-center h-5">
          <span className="w-2 h-2 rounded-full bg-brand-500 animate-bounce" style={{ animationDelay: '0ms' }} />
          <span className="w-2 h-2 rounded-full bg-brand-500 animate-bounce" style={{ animationDelay: '150ms' }} />
          <span className="w-2 h-2 rounded-full bg-brand-500 animate-bounce" style={{ animationDelay: '300ms' }} />
        </div>
      </div>
    </div>
  )
}

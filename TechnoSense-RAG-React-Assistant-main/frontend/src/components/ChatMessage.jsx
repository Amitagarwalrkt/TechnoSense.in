import ReactMarkdown from 'react-markdown'

export default function ChatMessage({ message }) {
  const isUser = message.role === 'user'
  const avatar = isUser ? '🧑‍💻' : null

  return (
    <div
      className={`flex gap-2.5 mb-2 animate-slide-up ${
        isUser ? 'flex-row-reverse' : 'flex-row'
      }`}
    >
      {isUser ? (
        <div className="flex-shrink-0 w-9 h-9 rounded-full bg-brand-100 flex items-center justify-center text-base">
          {avatar}
        </div>
      ) : (
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
      )}

      <div
        className={`max-w-[80%] ${
          isUser ? 'items-end' : 'items-start'
        } flex flex-col`}
      >
        <div
          className={`px-4 py-3 rounded-2xl text-sm leading-relaxed ${
            isUser
              ? 'bg-brand-600 text-white rounded-tr-sm shadow-[0_4px_12px_-4px_rgba(220,38,38,0.45)]'
              : 'bg-white border border-brand-100 text-slate-800 rounded-tl-sm shadow-sm'
          }`}
        >
          {isUser ? (
            <p className="whitespace-pre-wrap m-0">{message.content}</p>
          ) : (
            <div className="prose prose-sm max-w-none prose-p:my-2 prose-ul:my-2 prose-li:my-0.5 prose-headings:text-slate-800 prose-strong:text-brand-700 prose-a:text-brand-600">
              <ReactMarkdown>{message.content}</ReactMarkdown>
            </div>
          )}
        </div>
        {message.timestamp && (
          <span className="text-[11px] text-slate-400 mt-1 px-1">
            {message.timestamp}
          </span>
        )}
      </div>
    </div>
  )
}

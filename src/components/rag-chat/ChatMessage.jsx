import ReactMarkdown from 'react-markdown'

export default function ChatMessage({ message }) {
  const isUser = message.role === 'user'

  return (
    <div className={`rag-msg ${isUser ? 'is-user' : ''}`}>
      {isUser ? (
        <div className="rag-avatar is-user" aria-hidden="true">🧑‍💻</div>
      ) : (
        <div className="rag-avatar" aria-hidden="true">
          <span className="rag-avatar-t">T</span>
        </div>
      )}

      <div className="rag-bubble-col">
        <div className="rag-bubble">
          {isUser ? (
            <p className="whitespace-pre-wrap">{message.content}</p>
          ) : (
            <ReactMarkdown>{message.content}</ReactMarkdown>
          )}
        </div>
        {message.timestamp && <span className="rag-time">{message.timestamp}</span>}
      </div>
    </div>
  )
}

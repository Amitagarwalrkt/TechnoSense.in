import ReactMarkdown from 'react-markdown'

const markdownComponents = {
  p: ({ children }) => <p className="rag-md-p">{children}</p>,
  ul: ({ children }) => <ul className="rag-md-list">{children}</ul>,
  ol: ({ children }) => <ol className="rag-md-list is-ordered">{children}</ol>,
  li: ({ children }) => <li className="rag-md-li"><span className="rag-md-li-body">{children}</span></li>,
  strong: ({ children }) => <strong className="rag-md-strong">{children}</strong>,
  em: ({ children }) => <em className="rag-md-em">{children}</em>,
  h1: ({ children }) => <h3 className="rag-md-heading">{children}</h3>,
  h2: ({ children }) => <h3 className="rag-md-heading">{children}</h3>,
  h3: ({ children }) => <h3 className="rag-md-heading">{children}</h3>,
  a: ({ href, children }) => (
    <a className="rag-md-link" href={href} target="_blank" rel="noopener noreferrer">
      {children}
    </a>
  ),
}

export default function ChatMessage({ message }) {
  const isUser = message.role === 'user'

  return (
    <div className={`rag-msg ${isUser ? 'is-user' : ''}`}>
      {isUser ? (
        <div className="rag-avatar is-user" aria-hidden="true">🧑‍💻</div>
      ) : (
        <div className="rag-avatar" aria-hidden="true">
          <span className="rag-avatar-t">TN</span>
        </div>
      )}

      <div className="rag-bubble-col">
        <div className={`rag-bubble${isUser ? '' : ' has-markdown'}`}>
          {isUser ? (
            <p className="rag-md-p whitespace-pre-wrap">{message.content}</p>
          ) : (
            <div className="rag-md">
              <ReactMarkdown components={markdownComponents}>
                {message.content}
              </ReactMarkdown>
            </div>
          )}
        </div>
        {message.timestamp && <span className="rag-time">{message.timestamp}</span>}
      </div>
    </div>
  )
}

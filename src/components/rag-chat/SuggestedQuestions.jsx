const SUGGESTED = [
  'What services does TechnoSense offer?',
  'Tell me about cloud consulting and DevOps',
  'I need help with careers and openings',
  'How do I contact the TechnoSense team?',
]

export default function SuggestedQuestions({ onSelect }) {
  return (
    <div>
      <h2 className="rag-suggest-title">How can TechNova help?</h2>
      <p className="rag-suggest-sub">Pick a prompt or type your own question below.</p>

      {SUGGESTED.map((text) => (
        <button
          key={text}
          type="button"
          className="rag-suggest-btn"
          onClick={() => onSelect(text)}
        >
          {text}
        </button>
      ))}
    </div>
  )
}

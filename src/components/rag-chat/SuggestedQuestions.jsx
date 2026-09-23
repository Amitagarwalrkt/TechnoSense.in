const SUGGESTED = [
  'I want to learn about TechnoSense products and services',
  'I need technical support',
  'I have a question about careers & openings',
  'I want to know about technology partnerships',
]

export default function SuggestedQuestions({ onSelect }) {
  return (
    <div>
      <h2 className="rag-suggest-title">Want help getting started?</h2>
      <p className="rag-suggest-sub">Tell us a little bit about what you&apos;re looking for.</p>

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

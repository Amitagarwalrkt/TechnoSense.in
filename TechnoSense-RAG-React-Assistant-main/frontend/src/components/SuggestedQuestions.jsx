const SUGGESTED = [
  'I want to learn about TechnoSense products and services',
  'I need technical support',
  'I have a question about careers & openings',
  'I want to know about technology partnerships',
]

export default function SuggestedQuestions({ onSelect }) {
  return (
    <div className="mb-5 animate-fade-in">
      <h2 className="text-[22px] font-bold text-slate-800 tracking-tight mb-1">
        Want help getting started?
      </h2>
      <p className="text-[17px] text-slate-500 mb-5 leading-snug">
        Tell us a little bit about what you're looking for.
      </p>

      <div className="flex flex-col gap-3">
        {SUGGESTED.map((text, i) => (
          <button
            key={i}
            onClick={() => onSelect(text)}
            className="group relative w-full text-left px-4 py-3.5 rounded-2xl
                       bg-gradient-to-br from-red-50 via-white to-rose-50
                       shadow-[inset_0_0_0_1px_rgba(239,68,68,0.18)]
                       hover:shadow-[inset_0_0_0_1.5px_rgba(239,68,68,0.55),0_6px_20px_-8px_rgba(220,38,38,0.35)]
                       transition-all duration-200 active:scale-[0.99]"
          >
            <span
              className="absolute inset-0 rounded-2xl pointer-events-none opacity-80 group-hover:opacity-100 transition-opacity"
              style={{
                padding: '1.5px',
                background:
                  'linear-gradient(135deg, rgba(239,68,68,0.75) 0%, rgba(244,114,182,0.15) 55%, rgba(139,92,246,0.25) 100%)',
                WebkitMask:
                  'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
                WebkitMaskComposite: 'xor',
                maskComposite: 'exclude',
              }}
            />
            <span className="relative block text-[15px] text-slate-800 font-semibold leading-snug">
              {text}
            </span>
          </button>
        ))}
      </div>
    </div>
  )
}

import { useState } from 'react'

const FAQS = [
  {
    id: 'faq-1',
    question: 'What sets TechnoSense NextGen Solutions apart from other IT service providers?',
    answer:
      'TechnoSense combines deep industry expertise, a commitment to excellence, and a proven track record on global projects. Our team brings enterprise-grade experience across cloud, infrastructure, security, and application delivery so every engagement is practical, measurable, and built for production.',
  },
  {
    id: 'faq-2',
    question: 'What types of businesses can benefit from TechnoSense services?',
    answer:
      'We work with startups, mid-market companies, and large enterprises. Engagements are tailored to your goals — whether you need to modernize infrastructure, adopt cloud, strengthen security, or accelerate digital transformation with clear ownership and delivery milestones.',
  },
  {
    id: 'faq-3',
    question: 'How does TechnoSense ensure the security of clients’ IT infrastructure?',
    answer:
      'Security is built into every engagement. We apply industry best practices across network protection, identity, endpoint security, vulnerability assessment, and ongoing monitoring so risks are identified early and systems stay resilient against evolving threats.',
  },
  {
    id: 'faq-4',
    question: 'What support options do you provide after implementation?',
    answer:
      'After go-live we provide ongoing support and maintenance — including upgrades, performance tuning, issue resolution, and operational guidance — so your platforms stay stable, secure, and aligned with business needs over time.',
  },
  {
    id: 'faq-5',
    question: 'How can I get started with TechnoSense services?',
    answer:
      'Reach out through Contact Us or call our team. We schedule a consultation, understand your requirements, and propose a practical plan with scope, timeline, and next steps that match your business objectives.',
  },
]

export default function FaqSection() {
  const [openId, setOpenId] = useState(FAQS[0].id)

  const toggle = (id) => {
    setOpenId((current) => (current === id ? null : id))
  }

  return (
    <section className="faq-section faq-premium" aria-labelledby="faqTitle">
      <div className="faq-premium-bg" aria-hidden="true" />
      <div className="container">
        <div className="section-header faq-premium-header">
          <div className="faq-header-meta">
            <div className="section-label">FAQ</div>
            <span className="faq-count-badge">
              <i className="fas fa-circle-question" /> {FAQS.length} Common Questions
            </span>
          </div>
          <h2 id="faqTitle" className="section-title faq-premium-title">
            Frequent <span className="faq-title-accent">Questions</span>
          </h2>
          <div className="faq-heading-line" aria-hidden="true" />
          <p className="section-description">
            Clear answers about our IT services, security practices, and how we
            support your business from day one through long-term partnership.
          </p>
        </div>

        <div className="faq-premium-panel">
          <div className="faq-accordion" role="list">
            {FAQS.map((item, index) => {
              const isOpen = openId === item.id
              const panelId = `${item.id}-panel`
              const buttonId = `${item.id}-button`

              return (
                <div
                  key={item.id}
                  className={`faq-premium-item${isOpen ? ' is-open' : ''}`}
                  role="listitem"
                >
                  <h3 className="faq-item-heading">
                    <button
                      id={buttonId}
                      type="button"
                      className={`faq-accordion-toggle${isOpen ? '' : ' is-collapsed'}`}
                      aria-expanded={isOpen}
                      aria-controls={panelId}
                      onClick={() => toggle(item.id)}
                    >
                      <span className="faq-item-badge">
                        {String(index + 1).padStart(2, '0')}
                      </span>
                      <span className="faq-question-text">{item.question}</span>
                      <span className="faq-toggle-icon" aria-hidden="true">
                        <i className={`fas ${isOpen ? 'fa-minus' : 'fa-plus'}`} />
                      </span>
                    </button>
                  </h3>

                  <div
                    id={panelId}
                    role="region"
                    aria-labelledby={buttonId}
                    className={`faq-answer-panel${isOpen ? ' is-open' : ''}`}
                    aria-hidden={!isOpen}
                  >
                    <div className="faq-answer-body">
                      <p>{item.answer}</p>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>

          <div className="faq-panel-footer">
            <div className="faq-footer-copy">
              <span className="faq-footer-icon">
                <i className="fas fa-headset" />
              </span>
              <div>
                <strong>Still have questions?</strong>
                <p>Our experts respond within one business day.</p>
              </div>
            </div>
            <a href="/contact-us" className="btn-cyberguard faq-premium-btn">
              Contact Us <i className="fas fa-arrow-right" />
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

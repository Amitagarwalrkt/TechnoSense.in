import { useEffect, useState } from 'react'
import { Link, Route, Routes, useLocation, useNavigate } from 'react-router-dom'
import './app.css'

const pageFiles = {
  '/about-us': 'about-us.html',
  '/career': 'career.html',
  '/cloud-adoption-strategy': 'cloud-adoption-strategy.html',
  '/cloud-consulting': 'cloud-consulting.html',
  '/contact-us': 'contact-us.html',
  '/demo': 'demo.html',
  '/development-services': 'development-services.html',
  '/devops': 'devops.html',
  '/enterprise-mobility-solutions': 'enterprise-mobility-solutions.html',
  '/implementation-migration': 'implementation-migration.html',
  '/infrastructure-management': 'infrastructure-management.html',
  '/it-infra-roadmap-consulting': 'it-infra-roadmap-consulting.html',
  '/maf-mcs-cloud': 'maf-mcs-cloud.html',
  '/managed-services': 'managed-services.html',
  '/microsoft-o365': 'microsoft-o365.html',
  '/mobile-devices-management': 'mobile-devices-management.html',
  '/network-security-compliances': 'network-security-compliances.html',
  '/O365-licensing-setup': 'O365-licensing-setup.html',
  '/onsite-offshore-resources': 'onsite-offshore-resources.html',
  '/oracle-apex': 'oracle-apex.html',
  '/oracle-database-installation': 'oracle-database-installation.html',
  '/oracle-database-management': 'oracle-database-management.html',
  '/security-solutions': 'security-solutions.html',
  '/server-setup-migration': 'server-setup-migration.html',
  '/setup-platform-migrations': 'setup-platform-migrations.html',
  '/version-upgrades': 'version-upgrades.html',
  '/web-mobile-application-development': 'web-mobile-application-development.html'
}

const normalizePath = (path) => path.replace(/\\/g, '/').replace(/\.html$/, '').replace(/\/$/, '') || '/'

function LegacyPage({ file }) {
  const [markup, setMarkup] = useState('')
  const [scripts, setScripts] = useState([])
  const [error, setError] = useState('')

  useEffect(() => {
    let cancelled = false
    setMarkup('')
    setScripts([])
    setError('')
    fetch(`/${file}`)
      .then((response) => {
        if (!response.ok) throw new Error(`Unable to load ${file}`)
        return response.text()
      })
      .then((html) => {
        if (cancelled) return
        const documentNode = new DOMParser().parseFromString(html, 'text/html')
        const pageScripts = [...documentNode.body.querySelectorAll('script')].map((script) => ({
          src: script.getAttribute('src'),
          text: script.textContent,
          type: script.getAttribute('type')
        }))
        documentNode.querySelectorAll('script').forEach((script) => script.remove())
        documentNode.querySelectorAll('link[rel="stylesheet"]').forEach((link) => link.remove())
        setScripts(pageScripts)
        setMarkup(documentNode.body?.innerHTML || '')
      })
      .catch((loadError) => !cancelled && setError(loadError.message))

    return () => { cancelled = true }
  }, [file])

  useEffect(() => {
    if (!markup) return
    window.scrollTo({ top: 0, behavior: 'auto' })
    const injectedScripts = []
    let chain = Promise.resolve()
    scripts.forEach(({ src, text, type }) => {
      chain = chain.then(() => new Promise((resolveScript) => {
        const script = document.createElement('script')
        if (type) script.type = type
        if (src) {
          script.src = new URL(src, window.location.origin).href
          script.onload = resolveScript
          script.onerror = resolveScript
        } else {
          script.textContent = text
          resolveScript()
        }
        document.body.appendChild(script)
        injectedScripts.push(script)
      }))
    })
    const timer = window.setTimeout(() => {
      if (window.jQuery && window.theme) {
        window.jQuery(window).trigger('load')
      }
    }, 0)
    return () => {
      window.clearTimeout(timer)
      injectedScripts.forEach((script) => script.remove())
    }
  }, [markup, scripts])

  if (error) return <div className="react-page-error">{error}</div>
  if (!markup) return <div className="react-page-loading" aria-live="polite">Loading page...</div>
  return <div className="legacy-page" dangerouslySetInnerHTML={{ __html: markup }} />
}

function Assistant() {
  const responses = [
    'That is interesting! Tell me more about your project.',
    'I understand. How can I assist you further?',
    'Great question! Let me help you with that.',
    'I am here to help. What would you like to know?',
    'That is a good point. Let me provide more information.'
  ]
  const [messages, setMessages] = useState([{ text: "Hello! I'm your TechnoSense AI Assistant. I'm here to help you work smarter.", user: false }])
  const [draft, setDraft] = useState('')
  const [typing, setTyping] = useState(false)

  const sendMessage = () => {
    const text = draft.trim()
    if (!text || typing) return
    setDraft('')
    setMessages((current) => [...current, { text, user: true }])
    setTyping(true)
    window.setTimeout(() => {
      setTyping(false)
      setMessages((current) => [...current, { text: responses[Math.floor(Math.random() * responses.length)], user: false }])
    }, 1500)
  }

  return <div className="assistant-page">
    <aside className="assistant-sidebar"><div className="assistant-brand">✦ TechnoSense</div><span className="assistant-label">Workspace</span><nav><a className="active" href="#assistant">✦ <span>AI Assistant</span></a><a href="#dashboard">▣ <span>Dashboard</span></a><a href="#activity">◷ <span>Recent activity</span></a></nav><span className="assistant-label">Support</span><nav><a href="#settings">⚙ <span>Settings</span></a><a href="#help">? <span>Help center</span></a></nav><div className="assistant-side-bottom"><strong>Build smarter with AI</strong><span>Your intelligent workspace for faster, simpler work.</span></div></aside>
    <main className="assistant-main"><header><div><h1>AI Assistant</h1><p>Your intelligent workspace companion</p></div><div className="assistant-profile"><span>Welcome</span><div className="assistant-avatar"><i className="fa-solid fa-user" /></div></div></header><section className="assistant-content"><div className="assistant-welcome"><div className="assistant-spark">✦</div><h2>How can I help you today?</h2><p>Ask anything, explore ideas, or get help with your work.</p></div><div className="assistant-suggestions"><button onClick={() => setDraft('Help me brainstorm ideas')}><b>✧ Brainstorm ideas</b><span>Generate creative ideas for your next project</span></button><button onClick={() => setDraft('Summarize this content')}><b>▤ Summarize content</b><span>Turn long text into clear, concise notes</span></button><button onClick={() => setDraft('Write something for me')}><b>⌘ Write something</b><span>Draft emails, posts, and more</span></button></div><div className="assistant-chat">{messages.map((message, index) => <div className={`assistant-message ${message.user ? 'user' : ''}`} key={`${message.text}-${index}`}>{!message.user && <div className="assistant-logo">✦</div>}<div className="assistant-bubble">{message.text}</div></div>)}{typing && <div className="assistant-message"><div className="assistant-logo">✦</div><div className="assistant-typing"><span /><span /><span /></div></div>}</div><div className="assistant-input"><input value={draft} onChange={(event) => setDraft(event.target.value)} onKeyDown={(event) => event.key === 'Enter' && sendMessage()} placeholder="Message your AI assistant..." aria-label="Message your AI assistant" /><button onClick={sendMessage} aria-label="Send">↑</button></div><div className="assistant-disclaimer">AI Assistant is a demo preview. Responses may not always be accurate.</div></section></main>
  </div>
}

function Home() {
  return <div className="react-home-marker" aria-hidden="true" />
}

function App() {
  const location = useLocation()
  const navigate = useNavigate()

  useEffect(() => {
    document.body.classList.toggle('react-route-active', location.pathname !== '/')
    return () => document.body.classList.remove('react-route-active')
  }, [location.pathname])

  useEffect(() => {
    const handleLink = (event) => {
      const anchor = event.target.closest('a')
      if (!anchor || !anchor.href || anchor.target === '_blank') return
      const url = new URL(anchor.href)
      if (url.origin !== window.location.origin) return
      const path = normalizePath(url.pathname)
      if (path === '/' || pageFiles[path] || path === '/assistent') {
        event.preventDefault()
        navigate(path)
      }
    }
    document.addEventListener('click', handleLink)
    return () => document.removeEventListener('click', handleLink)
  }, [navigate])

  return <Routes location={location}>
    <Route path="/" element={<Home />} />
    <Route path="/assistent" element={<Assistant />} />
    {Object.entries(pageFiles).map(([path, file]) => <Route key={path} path={path} element={<LegacyPage file={file} />} />)}
    <Route path="*" element={<LegacyPage file={pageFiles[normalizePath(location.pathname)] || 'index.html'} />} />
  </Routes>
}

export default App

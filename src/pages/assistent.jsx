export default function Assistent() {
  return (
<div className="shell">
  <aside>
    <div className="brand"><div className="logo"><strong className="technova-mark">T</strong></div> TechNova</div>
    <div className="menu-label">Workspace</div>
    <nav>
      <a className="active" href="#"><strong className="technova-mark">T</strong> <span>TechNova</span></a>
      <a href="#"> <span>Dashboard</span></a>
      <a href="#"> <span>Recent activity</span></a>
    </nav>
    <div className="menu-label" style={{marginTop: 30}}>Support</div>
    <nav><a href="#"> <span>Settings</span></a><a href="#">? <span>Help center</span></a></nav>
    <div className="side-bottom"><strong>Build smarter with AI</strong><span>Your intelligent workspace for faster, simpler work.</span><a href="https://www.linkedin.com/company/technosense-nextgen-solutions/posts/?feedView=all" target="_blank" rel="noopener" title="LinkedIn"><i className="fab fa-linkedin-in" /> LinkedIn</a></div>
  </aside>
  <main>
    <header><div><h1>TechNova</h1><p>Your intelligent workspace companion</p></div><div className="profile"><span>Welcome</span><div className="avatar"><strong className="technova-mark">T</strong></div></div></header>
    <section className="content">
      <div className="welcome"><div className="spark"><strong className="technova-mark">T</strong></div><h2>How can I help you today?</h2><p>Ask anything, explore ideas, or get help with your work.</p></div>
      <div className="suggestions"><div className="suggestion"><b>Brainstorm ideas</b><span>Generate creative ideas for your next project</span></div><div className="suggestion"><b>Summarize content</b><span>Turn long text into clear, concise notes</span></div><div className="suggestion"><b>Write something</b><span>Draft emails, posts, and more</span></div></div>
      <div className="chat"><div className="message"><div className="logo" style={{width: 28, height: 28, borderRadius: 9, fontSize: 14}}><strong className="technova-mark">T</strong></div><div className="bubble">Hello! I'm TechNova. I'm here to help you work smarter.</div></div></div>
      <div className="input-wrap"><input type="text" placeholder="Message TechNova..." aria-label="Message TechNova" /><button aria-label="Send">↑</button></div><div className="disclaimer">TechNova is a demo preview. Responses may not always be accurate.</div>
    </section>
  </main>
</div>

  )
}






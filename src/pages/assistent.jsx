export default function Assistent() {
  return (
<div className="shell show">
  <aside>
    <div className="brand"><div className="logo"><strong className="technova-mark">TN</strong></div> TechNova</div>
    <div className="menu-label">Workspace</div>
    <nav>
      <a className="active" href="#"><strong className="technova-mark">TN</strong> <span>TechNova</span></a>
      <a href="#"> <span>Dashboard</span></a>
      <a href="#"> <span>Recent activity</span></a>
    </nav>
    <div className="menu-label" style={{marginTop: 30}}>Support</div>
    <nav><a href="#"> <span>Settings</span></a><a href="#">? <span>Help center</span></a></nav>
    <div className="side-bottom"><strong>Build smarter with AI</strong><span>TechNova — TechnoSense&apos;s intelligent assistant for faster answers.</span><a href="https://www.linkedin.com/company/technosense-nextgen-solutions/posts/?feedView=all" target="_blank" rel="noopener" title="LinkedIn"><i className="fab fa-linkedin-in" /> LinkedIn</a></div>
  </aside>
  <main>
    <header><div><h1>TechNova</h1><p>Official AI assistant for TechnoSense NextGen Solutions</p></div><div className="profile"><span>Welcome</span><div className="avatar"><strong className="technova-mark">TN</strong></div></div></header>
    <section className="content">
      <div className="welcome"><div className="spark"><strong className="technova-mark">TN</strong></div><h2>How can TechNova help you today?</h2><p>Ask about services, cloud, careers, or how to get started with TechnoSense.</p></div>
      <div className="suggestions"><div className="suggestion"><b>Explore services</b><span>Learn what TechnoSense can deliver for your business</span></div><div className="suggestion"><b>Cloud &amp; DevOps</b><span>Get clarity on migration, adoption, and automation</span></div><div className="suggestion"><b>Talk to sales</b><span>Find the right next step and contact path</span></div></div>
      <div className="chat"><div className="message"><div className="logo" style={{width: 28, height: 28, borderRadius: 9, fontSize: 11}}><strong className="technova-mark">TN</strong></div><div className="bubble">Hello! I&apos;m TechNova, TechnoSense&apos;s AI assistant. How can I help you today?</div></div></div>
      <div className="input-wrap"><input type="text" placeholder="Message TechNova..." aria-label="Message TechNova" /><button aria-label="Send">↑</button></div><div className="disclaimer">TechNova is a demo preview. For live answers, use Ask TechNova on the main site.</div>
    </section>
  </main>
</div>

  )
}

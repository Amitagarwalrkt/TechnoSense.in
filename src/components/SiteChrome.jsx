export default function SiteChrome({ children }) {
  return <div className="body">
    <header className="modern-navbar" id="navbar">
      <nav className="navbar-main">
        <div className="container">
          <div className="navbar-wrapper">
            <div className="navbar-logo">
              <a href="/" aria-label="TechnoSense Home">
                <img src="img/logos/technosense-logo.png" alt="TechnoSense" className="logo-img" />
              </a>
            </div>
            <ul className="navbar-menu" id="navbarMenu">
              <li><a href="/" className="nav-link">Home</a></li>
              <li><a href="/about-us" className="nav-link">About Us</a></li>
              <li><a href="/cloud-consulting" className="nav-link">Services</a></li>
              <li><a href="/blog" className="nav-link">Blog</a></li>
              <li><a href="/career" className="nav-link">Career</a></li>
              <li><a href="/contact-us" className="nav-link">Contact Us</a></li>
            </ul>
            <div className="navbar-cta"><a href="/contact-us" className="btn-nav-cta">Get a Quote</a></div>
            <button className="navbar-toggle" id="navbarToggle" aria-label="Toggle navigation"><span /><span /><span /></button>
          </div>
        </div>
      </nav>
    </header>
    <main className="main site-chrome-content">{children}</main>
    <footer className="footer-texts-more-lighten footer-premium site-chrome-footer">
      <div className="container footer-premium-main">
        <div className="footer-premium-grid">
          <div className="footer-brand-col">
            <a href="/" className="footer-logo-wrap" aria-label="TechnoSense Home"><img src="img/logos/technosense-logo.png" alt="TechnoSense" className="footer-logo-img" /></a>
            <p className="footer-brand-desc">NextGen IT solutions for cloud, infrastructure, DevOps, and digital transformation.</p>
          </div>
          <div className="footer-links-col"><h5 className="footer-col-title">Useful Links</h5><ul className="footer-link-list"><li><a href="/about-us">About Us</a></li><li><a href="/blog">Blog</a></li><li><a href="/contact-us">Contact Us</a></li></ul></div>
          <div className="footer-contact-col"><h5 className="footer-col-title">Contact Info</h5><ul className="footer-contact-list"><li><span className="footer-contact-label">Phone</span><p><a href="tel:+91-9911191139">+91-9911191139</a></p></li><li><span className="footer-contact-label">Email</span><p><a href="mailto:info@technosense.in">info@technosense.in</a></p></li></ul></div>
        </div>
      </div>
    </footer>
  </div>
}

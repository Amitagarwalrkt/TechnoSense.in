export default function WebsiteDevelopment() {
  return (
<div className="body">
  <header className="modern-navbar" id="navbar">
    <nav className="navbar-main">
      <div className="container">
        <div className="navbar-wrapper">
          <div className="navbar-logo">
            <a href="/">
              <img src="img/logos/technosense-logo.png" alt="TechnoSense" className="logo-img" />
            </a>
          </div>
          <ul className="navbar-menu" id="navbarMenu">
            <li><a href="/" className="nav-link">Home</a></li>
            <li><a href="/about-us" className="nav-link">About Us</a></li>
            <li className="nav-dropdown">
              <a href="#" className="nav-link dropdown-toggle">Our Services <i className="fas fa-chevron-down" /></a>
              <ul className="dropdown-menu">
                <li className="dropdown-submenu">
                  <a href="/infrastructure-management" className="dropdown-item">Infrastructure Management <i className="fas fa-chevron-right" /></a>
                  <ul className="submenu">
                    <li><a href="/infrastructure-management">Infrastructure Management</a></li>
                    <li><a href="/it-infra-roadmap-consulting">IT &amp; Infra Roadmap Consulting</a></li>
                    <li><a href="/setup-platform-migrations">Setup &amp; Platform Migrations</a></li>
                    <li><a href="/network-security-compliances">Network Security &amp; Compliances</a></li>
                  </ul>
                </li>
                <li className="dropdown-submenu">
                  <a href="/cloud-consulting" className="dropdown-item">Cloud Consulting <i className="fas fa-chevron-right" /></a>
                  <ul className="submenu">
                    <li><a href="/cloud-adoption-strategy">Cloud Adoption Strategy</a></li>
                    <li><a href="/implementation-migration">Implementation &amp; Migration</a></li>
                    <li><a href="/devops">DevOps</a></li>
                  </ul>
                </li>
                <li className="dropdown-submenu">
                  <a href="/development-services" className="dropdown-item">Development Services <i className="fas fa-chevron-right" /></a>
                  <ul className="submenu">
                    <li><a href="/oracle-apex">Oracle ApEx</a></li>
                    <li><a href="/website-development">Website Development</a></li>
                    <li><a href="/mobile-app-development">Mobile App Development</a></li>
                    <li><a href="/web-mobile-application-development">Web &amp; Mobile Application Development</a></li>
                    <li><a href="/maf-mcs-cloud">MAF &amp; MCS Cloud</a></li>
                  </ul>
                </li>
                <li className="dropdown-submenu">
                  <a href="/oracle-database-management" className="dropdown-item">Database <i className="fas fa-chevron-right" /></a>
                  <ul className="submenu">
                    <li><a href="/oracle-database-installation">Oracle Database Installation</a></li>
                    <li><a href="/version-upgrades">Version Upgrades</a></li>
                    <li><a href="/server-setup-migration">Server Setup &amp; Migration</a></li>
                    <li><a href="/managed-services">Managed Services</a></li>
                  </ul>
                </li>
                <li className="dropdown-submenu">
                  <a href="/microsoft-o365" className="dropdown-item">Microsoft O365 <i className="fas fa-chevron-right" /></a>
                  <ul className="submenu">
                    <li><a href="/O365-licensing-setup">O365 Licensing &amp; Setup</a></li>
                    <li><a href="/security-solutions">Security Solutions</a></li>
                    <li><a href="/mobile-devices-management">Mobile Devices Management</a></li>
                  </ul>
                </li>
                <li><a href="/onsite-offshore-resources" className="dropdown-item">Onsite &amp; Offshore Resources Placements</a></li>
                <li><a href="/enterprise-mobility-solutions" className="dropdown-item">Enterprise Mobility Solutions</a></li>
              </ul>
            </li>
            <li><a href="/blog" className="nav-link">Blog</a></li>
            <li><a href="/career" className="nav-link">Career</a></li>
            <li><a href="/contact-us" className="nav-link">Contact Us</a></li>
          </ul>
          <div className="navbar-cta">
            <a href="/contact-us" className="btn-nav-cta">Get a Quote</a>
          </div>
          <button className="navbar-toggle" id="navbarToggle" aria-label="Toggle navigation">
            <span /><span /><span />
          </button>
        </div>
      </div>
    </nav>
  </header>
  <div role="main" className="main">
    <section className="inner-page-hero">
      <div className="container">
        <div className="section-label">Development Services</div>
        <h1 className="inner-page-title">Website <span>Development</span></h1>
        <p className="inner-page-desc">Corporate sites, customer portals, and e-commerce platforms - designed to convert and built to stay fast in production.</p>
      </div>
    </section>
    <div className="container dev-page">
      <div className="dev-intro">
        <div className="dev-intro-copy">
          <div className="section-label">Websites we actually ship</div>
          <h2>A site that looks premium and works like a product.</h2>
          <p>TechnoSense designs and develops websites for enterprises and growing businesses - from a sharp marketing site to a logged-in portal with forms, dashboards, and integrations.</p>
          <p>We own the full path: discovery, UI, front-end, back-end, hosting, and handover. No template dump. No half-finished launch.</p>
          <ul className="dev-points">
            <li><i className="fas fa-check" /> Responsive layouts that stay clean on phone, tablet, and desktop</li>
            <li><i className="fas fa-check" /> Fast pages, clear CTAs, and SEO-ready structure</li>
            <li><i className="fas fa-check" /> Admin-friendly content so your team can update without a developer</li>
          </ul>
          <div className="dev-hero-actions">
            <a href="/contact-us" className="btn-cyberguard">Start a Website Project <i className="fas fa-arrow-right" /></a>
            <a href="/mobile-app-development" className="btn btn-outline-dark">We also build apps</a>
          </div>
        </div>
        <div className="dev-intro-media">
          <img src="img/services/website-development.png" alt="Website development" loading="eager" />
        </div>
      </div>
      <div className="dev-section-head">
        <div>
          <div className="section-label">What we build</div>
          <h2>Website work we take end to end</h2>
        </div>
      </div>
      <div className="dev-grid">
        <article className="dev-card">
          <div className="dev-card-icon"><i className="fas fa-briefcase" /></div>
          <h3>Corporate websites</h3>
          <p>Service pages, case-style stories, careers, and contact flows that match how your sales team actually talks to clients.</p>
        </article>
        <article className="dev-card">
          <div className="dev-card-icon"><i className="fas fa-shopping-cart" /></div>
          <h3>E-commerce</h3>
          <p>Product catalogues, checkout, payments, and order emails - built so customers finish the purchase, not abandon it.</p>
        </article>
        <article className="dev-card">
          <div className="dev-card-icon"><i className="fas fa-id-card" /></div>
          <h3>Customer portals</h3>
          <p>Login areas for tickets, documents, status, and self-service. Connected to the systems you already run.</p>
        </article>
        <article className="dev-card">
          <div className="dev-card-icon"><i className="fas fa-paint-brush" /></div>
          <h3>UI redesigns</h3>
          <p>Existing sites that look dated get a premium visual system without throwing away the content and URLs that already rank.</p>
        </article>
        <article className="dev-card">
          <div className="dev-card-icon"><i className="fas fa-plug" /></div>
          <h3>Integrations</h3>
          <p>CRM, payment gateways, email, and internal APIs wired into the site so leads and orders don├óΓé¼Γäót sit in a spreadsheet.</p>
        </article>
        <article className="dev-card">
          <div className="dev-card-icon"><i className="fas fa-shield-alt" /></div>
          <h3>Secure hosting</h3>
          <p>SSL, backups, and a deployment path your team can trust. We don├óΓé¼Γäót hand over a folder and disappear.</p>
        </article>
      </div>
      <div className="dev-section-head">
        <div>
          <div className="section-label">How we work</div>
          <h2>Four steps from brief to live site</h2>
        </div>
      </div>
      <div className="dev-steps">
        <article className="dev-step">
          <em>01</em>
          <h3>Discover</h3>
          <p>Audience, pages, and the one action the site must drive - quote, demo, or purchase.</p>
        </article>
        <article className="dev-step">
          <em>02</em>
          <h3>Design</h3>
          <p>Layout, type, and components in your brand - reviewed on real screens before code starts.</p>
        </article>
        <article className="dev-step">
          <em>03</em>
          <h3>Build</h3>
          <p>Front-end, forms, CMS, and integrations. You see staging, not a surprise on launch day.</p>
        </article>
        <article className="dev-step">
          <em>04</em>
          <h3>Launch</h3>
          <p>Go-live, analytics, training, and a support window so the first weeks stay smooth.</p>
        </article>
      </div>
      <div className="dev-section-head">
        <div>
          <div className="section-label">Stack</div>
          <h2>Tools we use when they fit the job</h2>
        </div>
      </div>
      <div className="dev-stack">
        <span>HTML / CSS</span>
        <span>JavaScript</span>
        <span>PHP</span>
        <span>Java</span>
        <span>.NET</span>
        <span>WordPress</span>
        <span>Oracle APEX</span>
        <span>REST APIs</span>
      </div>
      <div className="dev-cta-band">
        <div>
          <div className="section-label">Next step</div>
          <h2>Need a website that can go live?</h2>
          <p>Tell us the pages, timeline, and whether you need a portal or a public site. We├óΓé¼Γäóll come back with a practical plan.</p>
        </div>
        <a href="/contact-us" className="btn-cyberguard">Get a Quote <i className="fas fa-arrow-right" /></a>
      </div>
      <div className="dev-sister">
        <div>
          <div className="section-label">Also building apps</div>
          <h2>Android, iOS, and cross-platform apps</h2>
          <p>If the website needs a companion app - or the product lives on mobile - we build that too.</p>
        </div>
        <a href="/mobile-app-development" className="btn-cyberguard">Mobile App Development <i className="fas fa-arrow-right" /></a>
      </div>
    </div>
  </div>
  <footer id="footer" className="footer-texts-more-lighten footer-premium">
    <div className="footer-premium-bg" aria-hidden="true" />
    <div className="container footer-premium-main">
      <div className="footer-premium-grid">
        <div className="footer-brand-col">
          <a href="/" className="footer-logo-wrap" aria-label="TechnoSense Home">
            <img src="img/logos/technosense-logo.png" alt="TechnoSense" className="footer-logo-img" />
          </a>
          <p className="footer-brand-desc">NextGen IT solutions - websites, mobile apps, cloud, and infrastructure delivered with enterprise-grade reliability.</p>
        </div>
        <div className="footer-links-col">
          <h5 className="footer-col-title">Useful Links</h5>
          <ul className="footer-link-list">
            <li><a href="/"><i className="fas fa-chevron-right" /> Home</a></li>
            <li><a href="/about-us"><i className="fas fa-chevron-right" /> About Us</a></li>
            <li><a href="/website-development"><i className="fas fa-chevron-right" /> Website Development</a></li>
            <li><a href="/mobile-app-development"><i className="fas fa-chevron-right" /> Mobile App Development</a></li>
            <li><a href="/contact-us"><i className="fas fa-chevron-right" /> Contact Us</a></li>
          </ul>
        </div>
        <div className="footer-contact-col">
          <h5 className="footer-col-title">Contact Info</h5>
          <ul className="footer-contact-list">
            <li>
              <span className="footer-contact-icon"><i className="fas fa-envelope" /></span>
              <div>
                <span className="footer-contact-label">Email</span>
                <p><a href="mailto:info@technosense.in">info@technosense.in</a></p>
              </div>
            </li>
            <li>
              <span className="footer-contact-icon"><i className="fas fa-phone-alt" /></span>
              <div>
                <span className="footer-contact-label">Phone</span>
                <p><a href="tel:+91-9911191139">+91-9911191139</a></p>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <div className="footer-premium-bar">
      <div className="container footer-premium-bar-inner">
        <p>TechnoSense NextGen Solutions Pvt Limited (c) 2024. All Rights Reserved.</p>
      </div>
    </div>
  </footer>
</div>

  )
}






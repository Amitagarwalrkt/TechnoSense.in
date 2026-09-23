export default function MobileAppDevelopment() {
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
        <h1 className="inner-page-title">Mobile App <span>Development</span></h1>
        <p className="inner-page-desc">Android, iOS, and cross-platform apps for customers, field teams, and internal operations - built to stay stable after launch.</p>
      </div>
    </section>
    <div className="container dev-page">
      <div className="dev-intro">
        <div className="dev-intro-copy">
          <div className="section-label">Apps people actually use</div>
          <h2>From idea to a store-ready app, without the guesswork.</h2>
          <p>TechnoSense builds mobile apps that fit real workflows - customer self-service, sales visits, approvals, and notifications - not a demo that only looks good in a screenshot.</p>
          <p>We cover native and cross-platform delivery, plus the API and admin panel the app needs to stay useful after the first release.</p>
          <ul className="dev-points">
            <li><i className="fas fa-check" /> Android and iOS, or one codebase when that is the smarter call</li>
            <li><i className="fas fa-check" /> Login, roles, offline-friendly flows, and push notifications</li>
            <li><i className="fas fa-check" /> Store submission support and a release plan your team can follow</li>
          </ul>
          <div className="dev-hero-actions">
            <a href="/contact-us" className="btn-cyberguard">Start an App Project <i className="fas fa-arrow-right" /></a>
            <a href="/website-development" className="btn btn-outline-dark">We also build websites</a>
          </div>
        </div>
        <div className="dev-intro-media">
          <img src="img/services/app-development.png" alt="App development" loading="eager" />
        </div>
      </div>
      <div className="dev-section-head">
        <div>
          <div className="section-label">What we build</div>
          <h2>App work we take from prototype to release</h2>
        </div>
      </div>
      <div className="dev-grid">
        <article className="dev-card">
          <div className="dev-card-icon"><i className="fas fa-mobile-alt" /></div>
          <h3>Customer apps</h3>
          <p>Booking, tracking, catalogues, and account screens that stay simple on a small screen.</p>
        </article>
        <article className="dev-card">
          <div className="dev-card-icon"><i className="fas fa-users" /></div>
          <h3>Field &amp; sales apps</h3>
          <p>Visit logs, check-ins, offline forms, and sync when the network comes back.</p>
        </article>
        <article className="dev-card">
          <div className="dev-card-icon"><i className="fas fa-building" /></div>
          <h3>Internal tools</h3>
          <p>Approvals, attendance, tickets, and dashboards for teams that should not live in email.</p>
        </article>
        <article className="dev-card">
          <div className="dev-card-icon"><i className="fas fa-bell" /></div>
          <h3>Notifications</h3>
          <p>Push, SMS, and in-app alerts tied to real events - order updates, approvals, reminders.</p>
        </article>
        <article className="dev-card">
          <div className="dev-card-icon"><i className="fas fa-lock" /></div>
          <h3>Secure access</h3>
          <p>Login, roles, and device-aware controls so the right person sees the right data.</p>
        </article>
        <article className="dev-card">
          <div className="dev-card-icon"><i className="fas fa-sync-alt" /></div>
          <h3>App + website together</h3>
          <p>One back-end for the site and the app, so customers get the same account on both.</p>
        </article>
      </div>
      <div className="dev-section-head">
        <div>
          <div className="section-label">How we work</div>
          <h2>Four steps from flow to store release</h2>
        </div>
      </div>
      <div className="dev-steps">
        <article className="dev-step">
          <em>01</em>
          <h3>Scope</h3>
          <p>Users, screens, and the one job the first version must do well.</p>
        </article>
        <article className="dev-step">
          <em>02</em>
          <h3>Prototype</h3>
          <p>Clickable flows on phone size before we lock engineering time.</p>
        </article>
        <article className="dev-step">
          <em>03</em>
          <h3>Build</h3>
          <p>App, API, and admin. You test on real devices, not only a browser mock.</p>
        </article>
        <article className="dev-step">
          <em>04</em>
          <h3>Release</h3>
          <p>Store listings, rollout, and a support window for the first production issues.</p>
        </article>
      </div>
      <div className="dev-section-head">
        <div>
          <div className="section-label">Stack</div>
          <h2>Platforms we deliver on</h2>
        </div>
      </div>
      <div className="dev-stack">
        <span>Android</span>
        <span>iOS</span>
        <span>Flutter</span>
        <span>React Native</span>
        <span>Java</span>
        <span>.NET APIs</span>
        <span>PHP APIs</span>
        <span>Firebase</span>
      </div>
      <div className="dev-cta-band">
        <div>
          <div className="section-label">Next step</div>
          <h2>Have an app brief ready?</h2>
          <p>Share the users, the platforms, and whether you already have a website or API. We├óΓé¼Γäóll map a first release that can actually ship.</p>
        </div>
        <a href="/contact-us" className="btn-cyberguard">Get a Quote <i className="fas fa-arrow-right" /></a>
      </div>
      <div className="dev-sister">
        <div>
          <div className="section-label">Also building websites</div>
          <h2>Corporate sites, portals, and e-commerce</h2>
          <p>If the product starts on the web - or the app needs a marketing site - that page is here.</p>
        </div>
        <a href="/website-development" className="btn-cyberguard">Website Development <i className="fas fa-arrow-right" /></a>
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






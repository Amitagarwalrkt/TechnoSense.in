import SiteFooter from '../components/SiteFooter'
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
        <p className="inner-page-desc">Flutter-first cross-platform apps — plus native Android and iOS where it matters — backed by Node.js APIs that stay reliable after launch.</p>
      </div>
    </section>
    <div className="container dev-page">
      <div className="dev-intro">
        <div className="dev-intro-copy">
          <div className="section-label">Apps for customers &amp; field teams</div>
          <h2>Android, iOS, and Flutter apps built for real workflows.</h2>
          <p>TechnoSense builds mobile products for customers, field and sales teams, and internal operations — booking, tracking, approvals, and notifications that hold up outside a demo screenshot.</p>
          <p>We default to Flutter for shared Android and iOS codebases, and go native when device APIs or performance demand it. Node.js backends, secure auth, and push notifications ship with the app — not as a follow-up project.</p>
          <ul className="dev-points">
            <li><i className="fas fa-check" /> Flutter-first delivery with Dart; native Android / iOS when the use case needs it</li>
            <li><i className="fas fa-check" /> Secure auth, roles, offline-friendly flows, and push notifications</li>
            <li><i className="fas fa-check" /> Node.js / REST APIs and store submission support with a release plan your team can follow</li>
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
      <div className="dev-tech-strip" aria-label="Primary mobile stack">
        <span>Flutter</span>
        <span>Dart</span>
        <span>Android</span>
        <span>iOS</span>
        <span>Node.js</span>
      </div>
      <div className="dev-section-head">
        <div>
          <div className="section-label">What we build</div>
          <h2>App work we take from prototype to store release</h2>
        </div>
      </div>
      <div className="dev-grid">
        <article className="dev-card">
          <div className="dev-card-icon"><i className="fas fa-mobile-alt" /></div>
          <h3>Customer apps</h3>
          <p>Booking, tracking, catalogues, and account screens that stay clear on a small screen and sync to your backend.</p>
        </article>
        <article className="dev-card">
          <div className="dev-card-icon"><i className="fas fa-rocket" /></div>
          <h3>Flutter apps</h3>
          <p>One Dart codebase for Android and iOS — faster iteration, consistent UI, and a single release pipeline when cross-platform is the right call.</p>
        </article>
        <article className="dev-card">
          <div className="dev-card-icon"><i className="fas fa-users" /></div>
          <h3>Field &amp; sales apps</h3>
          <p>Visit logs, check-ins, offline forms, and sync when the network comes back — built for teams on the move.</p>
        </article>
        <article className="dev-card">
          <div className="dev-card-icon"><i className="fas fa-building" /></div>
          <h3>Internal tools</h3>
          <p>Approvals, attendance, tickets, and mobile dashboards for teams that should not live in email threads.</p>
        </article>
        <article className="dev-card">
          <div className="dev-card-icon"><i className="fas fa-bell" /></div>
          <h3>Push notifications</h3>
          <p>Push, SMS, and in-app alerts tied to real events — order updates, approvals, reminders — via Firebase or your own stack.</p>
        </article>
        <article className="dev-card">
          <div className="dev-card-icon"><i className="fas fa-lock" /></div>
          <h3>Secure auth</h3>
          <p>Login, roles, tokens, and device-aware controls so the right person sees the right data — on every release.</p>
        </article>
      </div>
      <div className="dev-highlight">
        <div className="dev-highlight-icon"><i className="fas fa-server" /></div>
        <div>
          <h3>App + API as one delivery</h3>
          <p>Flutter or native clients ship with Node.js REST APIs, Firebase where it fits, and the same account model as your website — so customers and field teams stay in sync.</p>
        </div>
      </div>
      <div className="dev-section-head">
        <div>
          <div className="section-label">How we work</div>
          <h2>Four steps from brief to store release</h2>
        </div>
      </div>
      <div className="dev-steps">
        <article className="dev-step">
          <em>01</em>
          <h3>Discover</h3>
          <p>Users, platforms, and the one job the first version must do well — Flutter, native, or both.</p>
        </article>
        <article className="dev-step">
          <em>02</em>
          <h3>Design</h3>
          <p>Clickable flows on phone size, brand UI, and navigation reviewed before engineering locks in.</p>
        </article>
        <article className="dev-step">
          <em>03</em>
          <h3>Build</h3>
          <p>Flutter / native app, Node.js APIs, and admin. You test on real devices, not only a browser mock.</p>
        </article>
        <article className="dev-step">
          <em>04</em>
          <h3>Launch</h3>
          <p>Store listings, rollout, and a support window for the first production issues after go-live.</p>
        </article>
      </div>
      <div className="dev-section-head">
        <div>
          <div className="section-label">Stack</div>
          <h2>Platforms and backends we deliver on</h2>
        </div>
      </div>
      <div className="dev-stack">
        <span>Flutter</span>
        <span>React Native</span>
        <span>Android</span>
        <span>iOS</span>
        <span>Dart</span>
        <span>Node.js</span>
        <span>Firebase</span>
        <span>REST APIs</span>
      </div>
      <div className="dev-cta-band">
        <div>
          <div className="section-label">Next step</div>
          <h2>Have a Flutter or native app brief ready?</h2>
          <p>Share the users, platforms, and whether you already have a website or API. We&apos;ll map a first release that can actually ship.</p>
        </div>
        <a href="/contact-us" className="btn-cyberguard">Get a Quote <i className="fas fa-arrow-right" /></a>
      </div>
      <div className="dev-sister">
        <div>
          <div className="section-label">Also building websites</div>
          <h2>React, Next.js, and Node.js web products</h2>
          <p>If the product starts on the web — or the app needs a marketing site or portal — that page is here.</p>
        </div>
        <a href="/website-development" className="btn-cyberguard">Website Development <i className="fas fa-arrow-right" /></a>
      </div>
    </div>
  </div>
  <SiteFooter />
</div>

  )
}






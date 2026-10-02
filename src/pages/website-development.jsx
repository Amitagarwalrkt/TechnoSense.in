import SiteFooter from '../components/SiteFooter'
import ResourcesMenuItem from '../components/ResourcesMenuItem'
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
            <ResourcesMenuItem />
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
        <p className="inner-page-desc">Modern websites and web apps built with React, Next.js, and Node.js — fast, SEO-ready, and engineered for production.</p>
      </div>
    </section>
    <div className="container dev-page">
      <div className="dev-intro">
        <div className="dev-intro-copy">
          <div className="section-label">Product-quality web</div>
          <h2>Sites and portals that perform like software products.</h2>
          <p>TechnoSense designs and ships marketing sites, customer portals, and admin dashboards with the same discipline as a product launch — clear UX, measurable performance, and secure APIs behind the UI.</p>
          <p>We work in React and Next.js on the front end, Node.js and typed APIs on the back end, with TypeScript where it reduces risk. SEO structure, Core Web Vitals, and deployment are part of the delivery — not an afterthought.</p>
          <ul className="dev-points">
            <li><i className="fas fa-check" /> React / Next.js front ends with TypeScript when the product warrants it</li>
            <li><i className="fas fa-check" /> SEO-ready routes, metadata, and performance budgets that hold in production</li>
            <li><i className="fas fa-check" /> Secure REST APIs, auth, and integrations wired to your existing systems</li>
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
      <div className="dev-tech-strip" aria-label="Primary web stack">
        <span>React</span>
        <span>Next.js</span>
        <span>Node.js</span>
        <span>TypeScript</span>
        <span>REST APIs</span>
      </div>
      <div className="dev-section-head">
        <div>
          <div className="section-label">What we build</div>
          <h2>Web work we take end to end</h2>
        </div>
      </div>
      <div className="dev-grid">
        <article className="dev-card">
          <div className="dev-card-icon"><i className="fas fa-briefcase" /></div>
          <h3>Corporate websites</h3>
          <p>Service pages, careers, and contact flows that match how your sales team talks to clients — responsive, on-brand, and easy to maintain.</p>
        </article>
        <article className="dev-card">
          <div className="dev-card-icon"><i className="fas fa-layer-group" /></div>
          <h3>Next.js marketing &amp; product sites</h3>
          <p>Server-rendered and static pages with React components, fast loads, and clean URLs built for search and conversion.</p>
        </article>
        <article className="dev-card">
          <div className="dev-card-icon"><i className="fas fa-shopping-cart" /></div>
          <h3>E-commerce</h3>
          <p>Catalogues, checkout, payments, and order emails — structured so customers finish the purchase, not abandon it.</p>
        </article>
        <article className="dev-card">
          <div className="dev-card-icon"><i className="fas fa-id-card" /></div>
          <h3>Customer portals</h3>
          <p>Authenticated areas for tickets, documents, status, and self-service — connected to the systems you already run.</p>
        </article>
        <article className="dev-card">
          <div className="dev-card-icon"><i className="fas fa-tachometer-alt" /></div>
          <h3>Admin dashboards</h3>
          <p>Internal React UIs for ops, content, and reporting — role-aware screens your team can use without a developer on every change.</p>
        </article>
        <article className="dev-card">
          <div className="dev-card-icon"><i className="fas fa-plug" /></div>
          <h3>API integrations</h3>
          <p>CRM, payments, email, and internal REST APIs wired into the site so leads and orders do not sit in a spreadsheet.</p>
        </article>
      </div>
      <div className="dev-highlight">
        <div className="dev-highlight-icon"><i className="fas fa-bolt" /></div>
        <div>
          <h3>Performance, SEO, and secure delivery</h3>
          <p>We budget for Core Web Vitals, structured metadata, HTTPS, and API auth from the first sprint — so launch day is a go-live, not a recovery project.</p>
        </div>
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
          <p>Audience, pages, integrations, and the one action the site must drive — quote, demo, or purchase.</p>
        </article>
        <article className="dev-step">
          <em>02</em>
          <h3>Design</h3>
          <p>Layout, type, and component system in your brand — reviewed on real screens before code starts.</p>
        </article>
        <article className="dev-step">
          <em>03</em>
          <h3>Build</h3>
          <p>React / Next.js UI, Node.js APIs, forms, and integrations. You review on staging, not on launch day.</p>
        </article>
        <article className="dev-step">
          <em>04</em>
          <h3>Launch</h3>
          <p>Go-live, analytics, handover, and a support window so the first weeks in production stay smooth.</p>
        </article>
      </div>
      <div className="dev-section-head">
        <div>
          <div className="section-label">Stack</div>
          <h2>Modern web stack — plus enterprise options when required</h2>
        </div>
      </div>
      <div className="dev-stack">
        <span>React</span>
        <span>Next.js</span>
        <span>Node.js</span>
        <span>TypeScript</span>
        <span>JavaScript</span>
        <span>Tailwind CSS</span>
        <span>REST APIs</span>
        <span>MongoDB</span>
        <span>SQL</span>
        <span>WordPress</span>
        <span>.NET</span>
        <span>Oracle APEX</span>
      </div>
      <div className="dev-cta-band">
        <div>
          <div className="section-label">Next step</div>
          <h2>Ready for a React / Next.js site that can ship?</h2>
          <p>Tell us the pages, timeline, and whether you need a portal, dashboard, or public marketing site. We&apos;ll return a practical build plan.</p>
        </div>
        <a href="/contact-us" className="btn-cyberguard">Get a Quote <i className="fas fa-arrow-right" /></a>
      </div>
      <div className="dev-sister">
        <div>
          <div className="section-label">Also building apps</div>
          <h2>Flutter and native mobile with Node.js backends</h2>
          <p>If the website needs a companion app — or the product lives on mobile — we build Android, iOS, and Flutter apps too.</p>
        </div>
        <a href="/mobile-app-development" className="btn-cyberguard">Mobile App Development <i className="fas fa-arrow-right" /></a>
      </div>
    </div>
  </div>
  <SiteFooter />
</div>

  )
}






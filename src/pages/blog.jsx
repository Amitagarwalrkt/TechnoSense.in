import SiteFooter from '../components/SiteFooter'
export default function Blog() {
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
            <li><a href="/blog" className="nav-link active">Blog</a></li>
            <li><a href="/career" className="nav-link">Career</a></li>
            <li><a href="/contact-us" className="nav-link">Contact Us</a></li>
          </ul>
          <div className="navbar-cta">
            <a href="/contact-us" className="btn-nav-cta">Get a Quote</a>
          </div>
          <button className="navbar-toggle" id="navbarToggle" aria-label="Toggle navigation">
            <span />
            <span />
            <span />
          </button>
        </div>
      </div>
    </nav>
  </header>
  <div role="main" className="main">
    <section className="inner-page-hero blog-hero">
      <div className="container">
        <div className="section-label">Insights</div>
        <h1 className="inner-page-title">TechnoSense <span>Blog</span></h1>
        <p className="inner-page-desc">Practical guides on cloud, DevOps, infrastructure, and security - written by teams delivering enterprise projects every day.</p>
      </div>
    </section>
    <div className="container blog-page">
      <article className="blog-featured">
        <a href="/it-infrastructure-modernization-strategy" className="blog-featured-media">
          <img src="img/blog/it-infrastructure-modernization-cover.jpg" alt="IT Infrastructure Modernization Strategy for Enterprises in 2026" loading="eager" decoding="async" />
          <span className="blog-featured-badge">Featured</span>
        </a>
        <div className="blog-featured-body">
          <div className="blog-meta">
            <span className="blog-tag">Infrastructure</span>
            <span><i className="far fa-calendar-alt" /> Sep 24, 2026</span>
            <span><i className="far fa-clock" /> 16 min read</span>
          </div>
          <h2 className="blog-featured-title">
            <a href="/it-infrastructure-modernization-strategy">IT Infrastructure Modernization Strategy for Enterprises in 2026</a>
          </h2>
          <p className="blog-featured-excerpt">Learn how enterprises can modernize IT infrastructure, cloud, databases, security and DevOps through a structured modernization roadmap.</p>
          <a href="/it-infrastructure-modernization-strategy" className="blog-read-link">Read Article <i className="fas fa-arrow-right" /></a>
        </div>
      </article>
      <div className="blog-toolbar">
        <div className="blog-filters" role="tablist" aria-label="Blog categories">
          <button type="button" className="blog-filter is-active" data-filter="all">All</button>
          <button type="button" className="blog-filter" data-filter="infrastructure">Infrastructure</button>
          <button type="button" className="blog-filter" data-filter="cloud">Cloud</button>
        </div>
        <p className="blog-count"><span id="blogVisibleCount">2</span> articles</p>
      </div>
      <div className="blog-layout">
        <div className="blog-grid" id="blogGrid">
          <article className="blog-card" data-category="infrastructure">
            <a href="/it-infrastructure-modernization-strategy" className="blog-card-media">
              <img src="img/blog/it-infrastructure-modernization-cover.jpg" alt="IT Infrastructure Modernization Strategy for Enterprises in 2026" loading="lazy" decoding="async" />
            </a>
            <div className="blog-card-body">
              <div className="blog-meta">
                <span className="blog-tag">Infrastructure</span>
                <span>Sep 24, 2026</span>
              </div>
              <h3 className="blog-card-title"><a href="/it-infrastructure-modernization-strategy">IT Infrastructure Modernization Strategy for Enterprises in 2026</a></h3>
              <p className="blog-card-excerpt">A structured roadmap covering assessment, architecture, security, databases, DevOps, and controlled migration for enterprise estates.</p>
              <a href="/it-infrastructure-modernization-strategy" className="blog-read-link">Read More <i className="fas fa-arrow-right" /></a>
            </div>
          </article>
          <article className="blog-card" data-category="cloud">
            <a href="/enterprise-cloud-migration-strategy" className="blog-card-media">
              <img src="img/blog/enterprise-cloud-migration-cover.jpg" alt="Enterprise cloud migration strategy and infrastructure roadmap for businesses" loading="lazy" decoding="async" />
            </a>
            <div className="blog-card-body">
              <div className="blog-meta">
                <span className="blog-tag">Cloud</span>
                <span>Sep 17, 2026</span>
              </div>
              <h3 className="blog-card-title"><a href="/enterprise-cloud-migration-strategy">Enterprise Cloud Migration Strategy: A Practical Roadmap</a></h3>
              <p className="blog-card-excerpt">Readiness, workload waves, database migration, security, and post go-live ownership - written for enterprise IT leaders.</p>
              <a href="/enterprise-cloud-migration-strategy" className="blog-read-link">Read More <i className="fas fa-arrow-right" /></a>
            </div>
          </article>
        </div>
        <aside className="blog-sidebar">
          <div className="blog-side-card">
            <h3 className="blog-side-title">Categories</h3>
            <ul className="blog-side-list">
              <li><button type="button" className="blog-side-link" data-filter="infrastructure"><span>Infrastructure</span><em>1</em></button></li>
              <li><button type="button" className="blog-side-link" data-filter="cloud"><span>Cloud</span><em>1</em></button></li>
            </ul>
          </div>
          <div className="blog-side-card">
            <h3 className="blog-side-title">Popular Reads</h3>
            <ul className="blog-popular">
              <li>
                <a href="/it-infrastructure-modernization-strategy">
                  <img src="img/blog/it-infrastructure-modernization-cover.jpg" alt="IT Infrastructure Modernization Strategy for Enterprises in 2026" loading="lazy" />
                  <span>
                    <strong>IT Infrastructure Modernization Strategy</strong>
                    <small>Sep 24, 2026</small>
                  </span>
                </a>
              </li>
              <li>
                <a href="/enterprise-cloud-migration-strategy">
                  <img src="img/blog/enterprise-cloud-migration-cover.jpg" alt loading="lazy" />
                  <span>
                    <strong>Enterprise Cloud Migration Strategy</strong>
                    <small>Sep 17, 2026</small>
                  </span>
                </a>
              </li>
            </ul>
          </div>
          <div className="blog-side-cta">
            <span className="blog-side-cta-label">Need help?</span>
            <h3>Talk to our IT experts</h3>
            <p>Cloud, infra, DevOps, or security - get a clear plan for your next initiative.</p>
            <a href="/contact-us" className="btn-cyberguard">Get a Quote <i className="fas fa-arrow-right" /></a>
          </div>
        </aside>
      </div>
    </div>
  </div>
  <SiteFooter />
</div>

  )
}






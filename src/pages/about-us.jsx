import SiteFooter from '../components/SiteFooter'
import ResourcesMenuItem from '../components/ResourcesMenuItem'
export default function AboutUs() {
  return (
<div className="body">
  {/* Modern Navbar */}
  <header className="modern-navbar" id="navbar">
    {/* Main Navbar */}
    <nav className="navbar-main">
      <div className="container">
        <div className="navbar-wrapper">
          {/* Logo */}
          <div className="navbar-logo">
            <a href="/">
              <img src="img/logos/technosense-logo.png" alt="TechnoSense" className="logo-img" />
            </a>
          </div>
          {/* Navigation Menu */}
          <ul className="navbar-menu" id="navbarMenu">
            <li><a href="/" className="nav-link">Home</a></li>
            <li><a href="/about-us" className="nav-link">About Us</a></li>
            {/* Our Services Dropdown */}
            <li className="nav-dropdown">
              <a href="#" className="nav-link dropdown-toggle">Our Services <i className="fas fa-chevron-down" /></a>
              <ul className="dropdown-menu">
                <li className="dropdown-submenu">
                  <a href="/infrastructure-management" className="dropdown-item">Infrastructure
                    Management <i className="fas fa-chevron-right" /></a>
                  <ul className="submenu">
                    <li><a href="/infrastructure-management">Infrastructure Management</a>
                    </li>
                    <li><a href="/it-infra-roadmap-consulting">IT &amp; Infra Roadmap
                        Consulting</a></li>
                    <li><a href="/setup-platform-migrations">Setup &amp; Platform Migrations</a>
                    </li>
                    <li><a href="/network-security-compliances">Network Security &amp;
                        Compliances</a></li>
                  </ul>
                </li>
                <li className="dropdown-submenu">
                  <a href="/cloud-consulting" className="dropdown-item">Cloud Consulting <i className="fas fa-chevron-right" /></a>
                  <ul className="submenu">
                    <li><a href="/cloud-adoption-strategy">Cloud Adoption Strategy</a></li>
                    <li><a href="/implementation-migration">Implementation &amp; Migration</a>
                    </li>
                    <li><a href="/devops">DevOps</a></li>
                  </ul>
                </li>
                <li className="dropdown-submenu">
                  <a href="/development-services" className="dropdown-item">Development Services
                    <i className="fas fa-chevron-right" /></a>
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
                    <li><a href="/oracle-database-installation">Oracle Database
                        Installation</a></li>
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
                    <li><a href="/mobile-devices-management">Mobile Devices Management</a>
                    </li>
                  </ul>
                </li>
                <li><a href="/onsite-offshore-resources" className="dropdown-item">Onsite &amp; Offshore
                    Resources Placements</a></li>
                <li><a href="/enterprise-mobility-solutions" className="dropdown-item">Enterprise
                    Mobility Solutions</a></li>
              </ul>
            </li>
            <ResourcesMenuItem />
            <li><a href="/career" className="nav-link">Career</a></li>
            <li><a href="/contact-us" className="nav-link">Contact Us</a></li>
          </ul>
          {/* CTA Button */}
          <div className="navbar-cta">
            <a href="/contact-us" className="btn-nav-cta">Get a Quote</a>
          </div>
          {/* Mobile Menu Toggle */}
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
    <div className="inner-page-hero">
      <div className="container">
        <div className="section-label">About TechnoSense</div>
        <h1 className="inner-page-title">Who We <span>Are</span></h1>
        <p className="inner-page-desc">A next-generation technology company delivering intelligent, scalable, and high-impact digital solutions for modern enterprises.</p>
      </div>
    </div>
    {/* Who We Are / What We Do Section */}
    <section className="who-we-are-section">
      <div className="container-fluid p-0">
        <div className="row g-0">
          {/* Who We Are - Left Side (White Background) */}
          <div className="col-lg-6 who-we-are-left">
            <div className="who-we-are-content">
              <div className="logo-section mb-4">
                <h1 className="company-logo-text">TECHNOSENSE</h1>
                <p className="tagline">Discover | Innovate | Automate</p>
              </div>
              <h2 className="section-heading mb-4">Who We Are</h2>
              <div className="content-block">
                <div className="content-line" />
                <p>A next-generation technology company focused on delivering intelligent, scalable, and high-impact digital solutions for modern enterprises.</p>
              </div>
              <div className="content-block">
                <div className="content-line" />
                <p>Founded by next-generation technology experts with extensive experience in emerging technologies, cloud engineering, and modern infrastructure, we thrive to deliver modern tech solutions with precision and visible outcomes.</p>
              </div>
              <div className="content-block">
                <div className="content-line" />
                <h3 className="promise-heading">OUR PROMISE</h3>
                <p className="promise-text"><em>"We combine deep technology expertise with smart execution to deliver measurable business outcomes."</em></p>
              </div>
            </div>
          </div>
          {/* What We Do - Right Side (Light Blue-Grey Background) */}
          <div className="col-lg-6 what-we-do-right">
            <div className="what-we-do-content">
              <h2 className="section-heading mb-4">What We Do</h2>
              <div className="services-grid">
                <div className="service-block">
                  <div className="service-icon-block">
                    <i className="fas fa-database" />
                  </div>
                  <h3 className="service-block-title">Oracle Technology</h3>
                  <p className="service-block-desc">Stack Solutions</p>
                </div>
                <div className="service-block">
                  <div className="service-icon-block">
                    <i className="fas fa-cloud" />
                  </div>
                  <h3 className="service-block-title">Enterprise Cloud &amp; DevOps</h3>
                  <p className="service-block-desc">Scalable Solutions</p>
                </div>
                <div className="service-block">
                  <div className="service-icon-block">
                    <i className="fab fa-microsoft" />
                  </div>
                  <h3 className="service-block-title">Microsoft O365</h3>
                  <p className="service-block-desc">Licensing, Migration, Management</p>
                </div>
                <div className="service-block">
                  <div className="service-icon-block">
                    <i className="fas fa-server" />
                  </div>
                  <h3 className="service-block-title">IT Infrastructure Modernization</h3>
                  <p className="service-block-desc">Consulting</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section className="vision-premium" aria-labelledby="visionTitle">
      <div className="vision-premium-bg" aria-hidden="true" />
      <div className="container">
        <div className="vision-premium-layout">
          <div className="vision-side-title">
            <span className="vision-side-label">Our Values</span>
            <h2 id="visionTitle">Our <span>Values</span></h2>
            <p>The principles that guide how we work, partner, and deliver - every engagement, every day.</p>
          </div>
          <ol className="vision-values-list">
            <li>
              <span className="vision-num">01</span>
              <span className="vision-value">Integrity</span>
            </li>
            <li>
              <span className="vision-num">02</span>
              <span className="vision-value">Discipline</span>
            </li>
            <li>
              <span className="vision-num">03</span>
              <span className="vision-value">Transparency</span>
            </li>
            <li>
              <span className="vision-num">04</span>
              <span className="vision-value">Meritocracy</span>
            </li>
            <li>
              <span className="vision-num">05</span>
              <span className="vision-value">Customer Centricity</span>
            </li>
            <li>
              <span className="vision-num">06</span>
              <span className="vision-value">Learning and Innovation</span>
            </li>
          </ol>
        </div>
      </div>
    </section>
  </div>
  <SiteFooter />
</div>

  )
}






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
                    <li><a href="/web-mobile-application-development">Web &amp; Mobile
                        Application Development</a></li>
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
            <li><a href="/blog" className="nav-link">Blog</a></li>
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
            <span className="vision-side-label">Our Vision</span>
            <h2 id="visionTitle">Our <span>Vision</span></h2>
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
  <footer id="footer" className="footer-texts-more-lighten footer-premium">
    <div className="footer-premium-bg" aria-hidden="true" />
    <div className="footer-premium-glow footer-premium-glow--1" aria-hidden="true" />
    <div className="footer-premium-glow footer-premium-glow--2" aria-hidden="true" />
    <div className="container footer-premium-main">
      <div className="footer-premium-grid">
        <div className="footer-brand-col">
          <a href="/" className="footer-logo-wrap" aria-label="TechnoSense Home">
            <img src="img/logos/technosense-logo.png" alt="TechnoSense" className="footer-logo-img" />
          </a>
          <p className="footer-brand-desc">NextGen IT solutions - cloud, infrastructure, DevOps, and digital transformation delivered with enterprise-grade reliability.</p>
          <div className="footer-social-row">
            <a href="https://www.linkedin.com/company/technosense-nextgen-solutions/posts/?feedView=all" className="footer-social-link" target="_blank" rel="noopener noreferrer" title="LinkedIn"><i className="fab fa-linkedin-in" /></a>
            <a href="https://www.instagram.com/" className="footer-social-link" target="_blank" rel="noopener noreferrer" title="Instagram"><i className="fab fa-instagram" /></a>
            <a href="https://www.twitter.com/" className="footer-social-link" target="_blank" rel="noopener noreferrer" title="Twitter"><i className="fab fa-x-twitter" /></a>
            <a href="https://www.facebook.com/" className="footer-social-link" target="_blank" rel="noopener noreferrer" title="Facebook"><i className="fab fa-facebook-f" /></a>
          </div>
        </div>
        <div className="footer-links-col">
          <h5 className="footer-col-title">Useful Links</h5>
          <ul className="footer-link-list">
            <li><a href="/"><i className="fas fa-chevron-right" /> Home</a></li>
            <li><a href="/about-us"><i className="fas fa-chevron-right" /> About Us</a></li>
            <li><a href="/contact-us"><i className="fas fa-chevron-right" /> Contact Us</a></li>
            <li><a href="/career"><i className="fas fa-chevron-right" /> Careers</a></li>
            <li><a href="/cloud-consulting"><i className="fas fa-chevron-right" /> Cloud Solutions</a></li>
            <li><a href="/devops"><i className="fas fa-chevron-right" /> DevOps Consulting</a></li>
            <li><a href="/development-services"><i className="fas fa-chevron-right" /> Development Services</a></li>
            <li><a href="/enterprise-mobility-solutions"><i className="fas fa-chevron-right" /> Enterprise Mobility</a></li>
          </ul>
        </div>
        <div className="footer-services-col">
          <h5 className="footer-col-title">Our Services</h5>
          <div className="footer-service-block">
            <a href="/cloud-consulting" className="footer-service-title">Cloud Consulting</a>
            <p><a href="/cloud-adoption-strategy">Cloud Adoption Strategy</a> · <a href="/implementation-migration">Implementation &amp; Migration</a> · <a href="/devops">DevOps</a></p>
          </div>
          <div className="footer-service-block">
            <a href="/development-services" className="footer-service-title">Development Services</a>
            <p><a href="/oracle-apex">Oracle ApEx</a> · <a href="/web-mobile-application-development">Web &amp; Mobile Apps</a> · <a href="/maf-mcs-cloud">MAF &amp; MCS Cloud</a></p>
          </div>
          <div className="footer-service-block">
            <a href="/oracle-database-management" className="footer-service-title">Database</a>
            <p><a href="/oracle-database-installation">Oracle Installation</a> · <a href="/oracle-database-installation">Version Upgrades</a> · <a href="/oracle-database-installation">Server Setup &amp; Migration</a> · <a href="/oracle-database-installation">Managed Services</a></p>
          </div>
        </div>
        <div className="footer-contact-col">
          <h5 className="footer-col-title">Contact Info</h5>
          <ul className="footer-contact-list">
            <li>
              <span className="footer-contact-icon"><i className="fas fa-map-marker-alt" /></span>
              <div>
                <span className="footer-contact-label">Address</span>
                <p>48, 7th Floor, ETT tower - 2B-36, Sector 132 Noida.</p>
              </div>
            </li>
            <li>
              <span className="footer-contact-icon"><i className="fas fa-phone-alt" /></span>
              <div>
                <span className="footer-contact-label">Phone</span>
                <p><a href="tel:+91-9911191139">+91-9911191139</a></p>
              </div>
            </li>
            <li>
              <span className="footer-contact-icon"><i className="fas fa-envelope" /></span>
              <div>
                <span className="footer-contact-label">Email</span>
                <p><a href="mailto:info@technosense.in">info@technosense.in</a></p>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <div className="footer-premium-bar">
      <div className="container footer-premium-bar-inner">
        <p>TechnoSense NextGen Solutions Pvt Limited (c) 2024. All Rights Reserved.</p>
        <a href="#" className="footer-back-top" aria-label="Back to top">Back to top <i className="fas fa-arrow-up" /></a>
      </div>
    </div>
  </footer>
</div>

  )
}






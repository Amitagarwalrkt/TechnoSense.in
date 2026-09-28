import SiteFooter from '../components/SiteFooter'
import FaqSection from '../components/FaqSection'

export default function Index() {
  return (
<div>
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
              <li><a href="/blog" className="nav-link active">Blog</a></li>
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
      {/* Hero Section */}
      <section className="cyberguard-hero">
        <div className="hero-bg-grid" aria-hidden="true" />
        <div className="hero-glow hero-glow--1" aria-hidden="true" />
        <div className="hero-glow hero-glow--2" aria-hidden="true" />
        <div className="hero-diagonal-slice" aria-hidden="true" />
        <div className="hero-noise" aria-hidden="true" />
        <div className="container position-relative">
          <div className="row align-items-center hero-row g-4 g-lg-5">
            {/* Left: Content */}
            <div className="col-lg-6 hero-content-col">
              <div className="hero-content-wrapper">
                <div className="hero-badge">
                  <span className="hero-badge-dot" />
                  NextGen IT Solutions
                </div>
                <div className="hero-eyebrow">Discover � Innovate � Automate</div>
                <div className="hero-title-container">
                  <h1 className="hero-title">
                    Transform Your Business with
                    <span className="hero-title-accent">Cutting-Edge IT Solutions</span>
                  </h1>
                </div>
                <div className="hero-subtitle-container">
                  <p className="hero-subtitle typewriter-text" data-text="Empowering organizations worldwide with cloud transformation, infrastructure management, and digital innovation - delivered by experts who've shipped multimillion-dollar projects globally.">
                    Empowering organizations worldwide with cloud transformation, infrastructure management, and digital innovation - delivered by experts who've shipped multimillion-dollar projects globally.</p>
                </div>
                <div className="hero-buttons-container">
                  <a href="/contact-us" className="btn-cyberguard hero-btn-primary">
                    Get Started <i className="fas fa-arrow-right" />
                  </a>
                  <a href="/about-us" className="btn-cyberguard btn-cyberguard-outline hero-btn-secondary">Explore Services</a>
                </div>
                <div className="hero-mini-trust">
                  <p>Trusted by <strong>50+ enterprises</strong> across India &amp; globally</p>
                </div>
              </div>
            </div>
            {/* Right: Visual */}
            <div className="col-lg-6 hero-visual-col">
              <div className="hero-visual-stage">
                <div className="hero-orbit-ring hero-orbit-ring--1" aria-hidden="true" />
                <div className="hero-orbit-ring hero-orbit-ring--2" aria-hidden="true" />
                <div className="hero-glass-panel hero-glass-panel--main">
                  <div className="hero-panel-header">
                    <span className="hero-panel-dot" />
                    <span className="hero-panel-dot" />
                    <span className="hero-panel-dot" />
                    <span className="hero-panel-label">TechnoSense Platform</span>
                  </div>
                  <div className="hero-panel-body">
                    <img src="img/hero.webp" alt="IT Infrastructure" className="hero-panel-img" loading="eager" />
                    <div className="hero-panel-overlay">
                      <div className="hero-panel-stat">
                        <i className="fas fa-chart-line" />
                        <div>
                          <strong>99.9%</strong>
                          <span>Uptime SLA</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="hero-float-card hero-float-card--1">
                  <div className="hero-float-icon"><i className="fas fa-cloud" /></div>
                  <div>
                    <strong>Cloud Consulting</strong>
                    <span>AWS � Azure � Hybrid</span>
                  </div>
                </div>
                <div className="hero-float-card hero-float-card--2">
                  <div className="hero-float-icon"><i className="fas fa-shield-alt" /></div>
                  <div>
                    <strong>Security &amp; Compliance</strong>
                    <span>Enterprise-grade protection</span>
                  </div>
                </div>
                <div className="hero-float-card hero-float-card--3">
                  <div className="hero-float-icon"><i className="fas fa-code-branch" /></div>
                  <div>
                    <strong>DevOps &amp; Automation</strong>
                    <span>CI/CD � IaC � Monitoring</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Bottom stats strip */}
          <div className="hero-stats-strip">
            <div className="hero-stat-block">
              <strong data-count={100}>100+</strong>
              <span>Projects Delivered</span>
            </div>
            <div className="hero-stat-block">
              <strong>100%</strong>
              <span>Success Rate</span>
            </div>
          </div>
        </div>
      </section></div>
    {/* CTA Section */}
    <section className="cta-section">
      <div className="container">
        <div className="cta-premium-card">
          <div className="cta-premium-left">
            <div className="cta-premium-icon" aria-hidden="true">
              <i className="fas fa-headset" />
            </div>
            <div className="cta-premium-copy">
              <span className="cta-premium-label">24/7 Support Available</span>
              <p className="cta-text mb-0">Need IT Infrastructure Support &amp; Solutions?</p>
            </div>
          </div>
          <a href="/contact-us" className="btn-cyberguard cta-premium-btn">
            Get a Quote <i className="fas fa-arrow-right" />
          </a>
        </div>
      </div>
    </section>
    {/* About Section */}
    <section className="about-section about-premium">
      <video autoPlay muted loop playsInline className="about-video-bg">
        <source src="img/video/map.mp4" type="video/mp4" />
      </video>
      <div className="about-premium-overlay" aria-hidden="true" />
      <div className="about-premium-grid" aria-hidden="true" />
      <div className="container">
        <div className="row align-items-center about-premium-row">
          <div className="col-lg-5 about-premium-visual">
            <div className="about-visual-stage">
              <div className="about-orbit-ring about-orbit-ring--1" aria-hidden="true" />
              <div className="about-orbit-ring about-orbit-ring--2" aria-hidden="true" />
              <div className="about-glass-badge">
                <div className="about-glass-badge-icon"><i className="fas fa-globe-americas" /></div>
                <div>
                  <strong>Global Delivery</strong>
                  <span>India � USA � Europe � APAC</span>
                </div>
              </div>
              <div className="about-float-stat about-float-stat--1">
                <strong>100+</strong>
                <span>Projects Delivered</span>
              </div>
              <div className="about-float-stat about-float-stat--2">
                <strong>50+</strong>
                <span>Enterprise Clients</span>
              </div>
              <div className="about-float-stat about-float-stat--3">
                <strong>15+</strong>
                <span>Years Expertise</span>
              </div>
            </div>
          </div>
          <div className="col-lg-7">
            <div className="about-content about-premium-card">
              <div className="about-premium-label">
                <span className="about-label-dot" />
                About TechnoSense
              </div>
              <h2>Welcome To <span className="about-title-accent">TechnoSense NextGen Solutions</span></h2>
              <p className="lead">A highly motivated and skilled team with experience working for global
                giants worldwide, delivering multimillion-dollar projects worldwide.</p>
              <p>At Technosense, we provide cutting-edge IT infrastructure management solutions
                designed for modern business needs. With strong technical expertise and a commitment
                to excellence, we help organizations optimize their infrastructure, improve
                operational efficiency, and accelerate growth.</p>
              <p>Our expert team specializes in IT infrastructure management, network security, cloud
                computing, and system integration. Using the latest technologies and industry best
                practices, we design and manage reliable IT solutions that align with our clients'
                strategic goals.</p>
              <div className="about-feature-row">
                <div className="about-feature-item">
                  <i className="fas fa-users-cog" />
                  <span>Expert Team</span>
                </div>
                <div className="about-feature-item">
                  <i className="fas fa-project-diagram" />
                  <span>Global Projects</span>
                </div>
                <div className="about-feature-item">
                  <i className="fas fa-headset" />
                  <span>24/7 Support</span>
                </div>
              </div>
              <a href="/about-us" className="btn-cyberguard about-premium-btn">
                View More <i className="fas fa-arrow-right" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
    {/* Services Section */}
    <section className="services-section services-premium" id="services-section">
      <div className="services-premium-bg" aria-hidden="true" />
      <div className="services-premium-glow services-premium-glow--1" aria-hidden="true" />
      <div className="services-premium-glow services-premium-glow--2" aria-hidden="true" />
      <div className="container">
        <div className="section-header services-premium-header">
          <div className="services-header-meta">
            <div className="section-label">Our Services</div>
            <span className="services-count-badge"><i className="fas fa-layer-group" /> 6 Core Solutions</span>
          </div>
          <h2 className="section-title">Comprehensive IT Solutions for <span className="services-title-accent">Modern Businesses</span></h2>
          <p className="section-description">Discover the TechnoSense NextGen Solutions advantage as we
            navigate the intricate landscape of IT infrastructure, cloud adoption, and digital
            innovation with precision and expertise. With a track record of delivering
            multimillion-dollar projects worldwide, our team brings unparalleled insight and commitment
            to every endeavor.</p>
        </div>
        <div className="services-premium-grid" id="servicesGrid">
          <div className="service-card">
            <span className="service-card-num">01</span>
            <div className="service-icon"><i className="fas fa-server" /></div>
            <h3 className="service-title">Infrastructure Management</h3>
            <p className="service-description">Comprehensive IT infrastructure solutions including
              roadmap consulting, platform migrations, and network security compliance.</p>
            <ul className="service-list">
              <li><i className="fas fa-check" /> Infrastructure Management</li>
              <li><i className="fas fa-check" /> IT &amp; Infra Roadmap Consulting</li>
              <li><i className="fas fa-check" /> Setup &amp; Platform Migrations</li>
              <li><i className="fas fa-check" /> Network Security &amp; Compliances</li>
            </ul>
            <div className="service-card-footer">
              <a href="/infrastructure-management" className="service-link">Learn More <i className="fas fa-arrow-right" /></a>
            </div>
          </div>
          <div className="service-card">
            <span className="service-card-num">02</span>
            <div className="service-icon"><i className="fas fa-cloud" /></div>
            <h3 className="service-title">Cloud Consulting</h3>
            <p className="service-description">Strategic cloud adoption and migration services to help
              your business leverage the power of cloud computing.</p>
            <ul className="service-list">
              <li><i className="fas fa-check" /> Cloud Adoption Strategy</li>
              <li><i className="fas fa-check" /> Implementation &amp; Migration</li>
              <li><i className="fas fa-check" /> DevOps Solutions</li>
            </ul>
            <div className="service-card-footer">
              <a href="/cloud-consulting" className="service-link">Learn More <i className="fas fa-arrow-right" /></a>
            </div>
          </div>
          <div className="service-card">
            <span className="service-card-num">03</span>
            <div className="service-icon"><i className="fas fa-code" /></div>
            <h3 className="service-title">Development Services</h3>
            <p className="service-description">Custom application development services for web, mobile,
              and enterprise solutions using cutting-edge technologies.</p>
            <ul className="service-list">
              <li><i className="fas fa-check" /> Website Development</li>
              <li><i className="fas fa-check" /> Mobile App Development</li>
              <li><i className="fas fa-check" /> Oracle ApEx</li>
              <li><i className="fas fa-check" /> MAF &amp; MCS Cloud</li>
            </ul>
            <div className="service-card-footer">
              <a href="/development-services" className="service-link">Learn More <i className="fas fa-arrow-right" /></a>
            </div>
          </div>
          <div className="service-card">
            <span className="service-card-num">04</span>
            <div className="service-icon"><i className="fas fa-database" /></div>
            <h3 className="service-title">Database Management</h3>
            <p className="service-description">Expert database installation, migration, and managed
              services to ensure optimal performance and reliability.</p>
            <ul className="service-list">
              <li><i className="fas fa-check" /> Oracle Database Installation</li>
              <li><i className="fas fa-check" /> Version Upgrades</li>
              <li><i className="fas fa-check" /> Server Setup &amp; Migration</li>
              <li><i className="fas fa-check" /> Managed Services</li>
            </ul>
            <div className="service-card-footer">
              <a href="/oracle-database-management" className="service-link">Learn More <i className="fas fa-arrow-right" /></a>
            </div>
          </div>
          <div className="service-card">
            <span className="service-card-num">05</span>
            <div className="service-icon"><i className="fab fa-microsoft" /></div>
            <h3 className="service-title">Microsoft O365</h3>
            <p className="service-description">Complete Microsoft 365 solutions including licensing,
              setup, security, and mobile device management.</p>
            <ul className="service-list">
              <li><i className="fas fa-check" /> O365 Licensing &amp; Setup</li>
              <li><i className="fas fa-check" /> Security Solutions</li>
              <li><i className="fas fa-check" /> Mobile Devices Management</li>
            </ul>
            <div className="service-card-footer">
              <a href="/O365-licensing-setup" className="service-link">Learn More <i className="fas fa-arrow-right" /></a>
            </div>
          </div>
          <div className="service-card">
            <span className="service-card-num">06</span>
            <div className="service-icon"><i className="fas fa-users" /></div>
            <h3 className="service-title">Resource Placements</h3>
            <p className="service-description">Onsite and offshore resource placements to provide you
              with skilled professionals when and where you need them.</p>
            <div className="service-card-footer">
              <a href="/onsite-offshore-resources" className="service-link">Learn More <i className="fas fa-arrow-right" /></a>
            </div>
          </div>
        </div>
      </div>
    </section>
    {/* Partners Section */}
    <section className="partners-section partners-premium" aria-labelledby="partnersTitle">
      <div className="partners-premium-bg" aria-hidden="true" />
      <div className="partners-premium-glow partners-premium-glow--1" aria-hidden="true" />
      <div className="partners-premium-glow partners-premium-glow--2" aria-hidden="true" />
      <div className="container">
        <div className="section-header partners-premium-header">
          <div className="partners-header-meta">
            <div className="section-label">Strategic Partners</div>
            <span className="partners-count-badge"><i className="fas fa-handshake" /> 5 Global Alliances</span>
          </div>
          <h2 className="section-title partners-title" id="partnersTitle">Trusted <span className="partners-title-accent">Alliances</span></h2>
          <p className="section-description partners-subtitle">We collaborate with technology leaders to deliver secure, scalable, enterprise-grade outcomes.</p>
        </div>
        <div className="partners-premium-grid" aria-label="Partner logos">
          <div className="partner-card partner-card--aws" role="listitem" aria-label="AWS Partner">
            <span className="partner-tag">Cloud Platform</span>
            <div className="partner-logo-wrap">
              <img src="img/partners/aws.svg" alt="AWS Partner" loading="lazy" decoding="async" />
            </div>
            <span className="partner-name">Amazon Web Services</span>
          </div>
          <div className="partner-card partner-card--microsoft" role="listitem" aria-label="Microsoft">
            <span className="partner-tag">Productivity Suite</span>
            <div className="partner-logo-wrap">
              <img src="img/partners/microsoft.svg" alt="Microsoft" loading="lazy" decoding="async" />
            </div>
            <span className="partner-name">Microsoft</span>
          </div>
          <div className="partner-card partner-card--redington" role="listitem" aria-label="Redington">
            <span className="partner-tag">Distribution</span>
            <div className="partner-logo-wrap">
              <img src="img/partners/redington.svg" alt="Redington" loading="lazy" decoding="async" />
            </div>
            <span className="partner-name">Redington</span>
          </div>
          <div className="partner-card partner-card--fortinet" role="listitem" aria-label="Fortinet">
            <span className="partner-tag">Cybersecurity</span>
            <div className="partner-logo-wrap">
              <img src="img/partners/fortinet.svg" alt="Fortinet" loading="lazy" decoding="async" />
            </div>
            <span className="partner-name">Fortinet</span>
          </div>
          <div className="partner-card partner-card--nutanix" role="listitem" aria-label="Nutanix">
            <span className="partner-tag">Hybrid Cloud Provider</span>
            <div className="partner-logo-wrap">
              <img src="img/partners/nutanix.svg" alt="Nutanix" loading="lazy" decoding="async" />
            </div>
            <span className="partner-name">Nutanix</span>
          </div>
        </div>
        <div className="partners-trust-strip">
          <div className="partners-trust-item">
            <i className="fas fa-certificate" />
            <span>Enterprise Certified</span>
          </div>
          <div className="partners-trust-item">
            <i className="fas fa-shield-alt" />
            <span>Security-First Delivery</span>
          </div>
          <div className="partners-trust-item">
            <i className="fas fa-globe" />
            <span>Global Scale Solutions</span>
          </div>
        </div>
      </div>
    </section>
    {/* Clients Section */}
    <section className="clients-section clients-premium" aria-labelledby="clientsTitle">
      <div className="container">
        <div className="section-header clients-premium-header">
          <div className="clients-header-meta">
            <div className="section-label">Trusted By</div>
            <span className="clients-count-badge"><i className="fas fa-building" /> 6 Enterprise Clients</span>
          </div>
          <h2 className="section-title clients-title" id="clientsTitle">Our <span className="clients-title-accent">Clients</span></h2>
        </div>
        <div className="clients-logo-wall" role="list" aria-label="Client logos">
          <figure className="clients-logo-item" role="listitem">
            <img src="img/clients/emaar-india.svg" alt="EMAAR India" loading="lazy" decoding="async" />
          </figure>
          <figure className="clients-logo-item" role="listitem">
            <img src="img/clients/valvoline.svg" alt="Valvoline" loading="lazy" decoding="async" />
          </figure>
          <figure className="clients-logo-item" role="listitem">
            <img src="img/clients/airtel.webp?v=20260921" alt="Airtel" loading="lazy" decoding="async" />
          </figure>
          <figure className="clients-logo-item" role="listitem">
            <img src="img/clients/altuis.svg" alt="Altuis" loading="lazy" decoding="async" />
          </figure>
          <figure className="clients-logo-item" role="listitem">
            <img src="img/clients/britannia.svg" alt="Britannia" loading="lazy" decoding="async" />
          </figure>
          <figure className="clients-logo-item clients-logo-item--crazibrain" role="listitem">
            <img src="img/clients/crazibrain.png" alt="Crazi Brain" loading="lazy" decoding="async" />
          </figure>
        </div>
      </div>
    </section>
    {/* Stats Section */}
    <section className="stats-section stats-premium">
      <div className="stats-premium-bg" aria-hidden="true" />
      <div className="stats-premium-glow stats-premium-glow--1" aria-hidden="true" />
      <div className="stats-premium-glow stats-premium-glow--2" aria-hidden="true" />
      <div className="container">
        <div className="stats-premium-bar">
          <div className="stat-item">
            <span className="stat-number">100+</span>
            <span className="stat-accent-line" aria-hidden="true" />
            <span className="stat-label">Projects Delivered</span>
          </div>
          <div className="stat-item">
            <span className="stat-number">100%</span>
            <span className="stat-accent-line" aria-hidden="true" />
            <span className="stat-label">Success Rate</span>
          </div>
        </div>
      </div>
    </section>
    {/* Experience Section */}
    <section className="experience-section experience-premium">
      <div className="experience-premium-bg" aria-hidden="true" />
      <div className="container">
        <div className="row align-items-center experience-premium-row">
          <div className="col-lg-6 mb-5 mb-lg-0">
            <div className="experience-visual-stage">
              <div className="experience-video-frame">
                <video autoPlay muted loop playsInline className="about-image">
                  <source src="img/video/server.mp4" type="video/mp4" />
                </video>
                <div className="experience-video-overlay" aria-hidden="true" />
                <div className="experience-video-badge">
                  <i className="fas fa-server" />
                  <span>Enterprise Infrastructure</span>
                </div>
              </div>
              <div className="experience-float-stat">
                <strong>99.9%</strong>
                <span>Uptime SLA</span>
              </div>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="experience-content">
              <div className="experience-label">
                <span className="experience-label-dot" />
                Why TechnoSense
              </div>
              <h2>Why Choose <span className="experience-title-accent">TechnoSense?</span></h2>
              <div className="experience-heading-line" aria-hidden="true" />
              <p className="lead">With extensive experience delivering numerous successful global projects, Technosense provides complete Cloud and Infrastructure services, starting from roadmap consulting to implementation and long-term support.</p>
              <p>We engage from the pre-implementation stage, helping clients assess readiness, choose the right application suite, and execute tailored solutions that drive process optimization and maximize returns on digital investments.</p>
              <ul className="experience-highlights">
                <li><i className="fas fa-check" /> End-to-end cloud &amp; infrastructure services</li>
                <li><i className="fas fa-check" /> Pre-implementation to post-go-live support</li>
                <li><i className="fas fa-check" /> Global SMEs with cross-domain expertise</li>
              </ul>
              <a href="/contact-us" className="btn-cyberguard experience-cta">
                Get Started <i className="fas fa-arrow-right" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
    {/* Process Section */}
    <section className="process-section process-premium">
      <div className="process-premium-bg" aria-hidden="true" />
      <div className="container">
        <div className="section-header process-premium-header">
          <div className="process-header-meta">
            <div className="section-label">Our Process</div>
            <span className="process-count-badge"><i className="fas fa-route" /> 4 Delivery Stages</span>
          </div>
          <h2 className="section-title process-premium-title">
            <span className="process-title-main">End-to-End Delivery:</span>
            <span className="process-roller-line">
              <span className="roller"><span id="rolltext">Pre Implementation<br />Implementation<br />Maintenance<br />Support</span></span>
            </span>
          </h2>
          <div className="process-heading-line" aria-hidden="true" />
          <p className="section-description">Comprehensive IT services from pre-implementation to ongoing support, ensuring your business gets maximum value from technology investments.</p>
        </div>
        <div className="process-premium-grid">
          <div className="process-item">
            <span className="process-step-num">01</span>
            <div className="process-step-dot" aria-hidden="true" />
            <div className="process-icon"><i className="fas fa-clipboard-check" /></div>
            <h4 className="process-title">Pre Implementation</h4>
            <ul className="process-list">
              <li>Client Readiness Assessments</li>
              <li>Gap Analysis &amp; Fitment</li>
              <li>Cloud &amp; Infra assessments</li>
              <li>Rightsizing licensing Needs</li>
            </ul>
          </div>
          <div className="process-item">
            <span className="process-step-num">02</span>
            <div className="process-step-dot" aria-hidden="true" />
            <div className="process-icon"><i className="fas fa-cogs" /></div>
            <h4 className="process-title">Implementation</h4>
            <ul className="process-list">
              <li>Roadmap Designing</li>
              <li>Functional Solution Designing</li>
              <li>Set Ups</li>
              <li>Data Conversion &amp; Testing</li>
              <li>Training &amp; Roll Out</li>
            </ul>
          </div>
          <div className="process-item">
            <span className="process-step-num">03</span>
            <div className="process-step-dot" aria-hidden="true" />
            <div className="process-icon"><i className="fas fa-tools" /></div>
            <h4 className="process-title">Maintenance</h4>
            <ul className="process-list">
              <li>Version &amp; Platform Upgrades</li>
              <li>Enhancements &amp; Extensions Development</li>
              <li>Release Management &amp; Audits</li>
            </ul>
          </div>
          <div className="process-item">
            <span className="process-step-num">04</span>
            <div className="process-step-dot" aria-hidden="true" />
            <div className="process-icon"><i className="fas fa-headset" /></div>
            <h4 className="process-title">Support</h4>
            <ul className="process-list">
              <li>Application support</li>
              <li>DB &amp; Business Ops Support</li>
              <li>Help Desk &amp; Support Management</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
    {/* Skills Section */}
    <section className="skills-section">
      <div className="container">
        <div className="row">
          {/* Text and Skill Bars Layout */}
          <div className="col-lg-6 mb-5 mb-lg-0">
            <div className="skills-content">
              <h2>Skills That Make a Meaningful Difference</h2>
              <p className="section-description text-start mb-4">We bring cutting-edge expertise and
                proven methodologies to help your business achieve exceptional results in IT
                infrastructure and digital transformation.</p>
              <div className="skill-item">
                <div className="skill-label">
                  <span>Cloud Solutions</span>
                  <span className="skill-percentage">95%</span>
                </div>
                <div className="skill-progress">
                  <div className="skill-progress-bar" data-percentage={95} style={{width: '0%'}} />
                </div>
              </div>
              <div className="skill-item">
                <div className="skill-label">
                  <span>Infrastructure Management</span>
                  <span className="skill-percentage">90%</span>
                </div>
                <div className="skill-progress">
                  <div className="skill-progress-bar" data-percentage={90} style={{width: '0%'}} />
                </div>
              </div>
              <div className="skill-item">
                <div className="skill-label">
                  <span>Development Services</span>
                  <span className="skill-percentage">88%</span>
                </div>
                <div className="skill-progress">
                  <div className="skill-progress-bar" data-percentage={88} style={{width: '0%'}} />
                </div>
              </div>
            </div>
          </div>
          {/* Video Layout */}
          <div className="col-lg-6">
            <div className="skills-video-wrapper">
              <video autoPlay muted loop playsInline className="skills-video">
                <source src="img/video/cloude.mp4" type="video/mp4" />
              </video>
            </div>
          </div>
        </div>
      </div>
    </section>
    <FaqSection />
  </div>
  <SiteFooter />
  {/* Vendor */}
  {/* Cloudflare email decode script removed - not needed for local development */}
  {/*  */}
  {/* Theme Base, Components and Settings */}
  {/* Theme Initialization Files */}
</div>

  )
}






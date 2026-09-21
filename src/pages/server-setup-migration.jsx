export default function ServerSetupMigration() {
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
        <div className="section-label">Our Services</div>
        <h1 className="inner-page-title">Server Setup &amp; <span>Migration</span></h1>
        <p className="inner-page-desc">Expert server setup and migration for stable, scalable infrastructure.</p>
      </div>
    </div>
    <div className="container pb-1 inner-page-card">
      <div className="row pt-4">
        <div className="col">
          <div className="overflow-hidden mb-3">
            <h2 className="word-rotator slide font-weight-bold text-8 mb-0 appear-animation" data-appear-animation="maskUp">
              <span>Server Setup</span>
              <span className="word-rotator-words bg-primary">
                <b className="is-visible"> &amp; Migration</b>
                <b>&amp; Migration</b>
              </span>
            </h2>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-md-12">
          <p className="text-justify mb-2">
            A highly motivated and skilled team having working experience with global giants worldwide and having delivered multimillion projects across the globe. At Technosense, we are
            dedicated to delivering cutting-edge IT infrastructure management solutions tailored to meet
            the evolving needs of modern businesses. With a deep understanding of technology and a
            commitment to excellence, we empower organizations to optimize their IT infrastructure,
            enhance operational efficiency, and drive business growth.</p>
          <p className="text-justify mb-2">
            Our team of highly skilled professionals brings a wealth of experience and expertise in IT
            infrastructure management, network security, cloud computing, and system integration.
            Leveraging the latest technologies and industry best practices, we design, implement, and
            manage robust IT solutions that align with our clients' strategic objectives.
            At the heart of our approach is a focus on delivering measurable results and unparalleled
            customer satisfaction. We partner closely with our clients to gain a thorough understanding
            of their unique challenges and objectives, allowing us to develop tailored solutions that
            address their specific needs.
          </p>
          <p className="text-justify">
            Whether you are a small business looking to streamline your IT operations or a large
            enterprise seeking to optimize your infrastructure for scalability and performance, we have
            the knowledge, experience, and resources to help you succeed. Our comprehensive suite of
            services includes:
          </p>
          <ul>
            <li>Network Design and Optimization</li>
            <li>Data Center Management</li>
            <li>Cloud Migration and Management</li>
            <li>Cybersecurity Solutions</li>
            <li>IT Consulting and Strategy</li>
            <li>Remote Monitoring and Support</li>
            <li>Disaster Recovery Planning</li>
            <li>Vendor Management and Procurement</li>
          </ul>
          <p className="text-justify mb-2">  At Technosense we are committed to excellence in everything we do. We pride ourselves on our ability to deliver innovative solutions that drive tangible business results and provide our clients with a competitive edge in today's rapidly evolving digital landscape.</p>
          <p className="text-justify">    Contact us today to learn more about how we can help your organization achieve its IT infrastructure goals and unlock new opportunities for growth. Let us be your trusted partner on the journey to IT excellence.</p>
        </div>
      </div>
    </div>
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






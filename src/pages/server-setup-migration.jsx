import SiteFooter from '../components/SiteFooter'
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
  <SiteFooter />
</div>

  )
}






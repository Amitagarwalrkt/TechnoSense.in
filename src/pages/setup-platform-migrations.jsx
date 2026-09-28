import SiteFooter from '../components/SiteFooter'
export default function SetupPlatformMigrations() {
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
        <h1 className="inner-page-title">Setup &amp; Platform <span>Migrations</span></h1>
        <p className="inner-page-desc">Smooth platform setup and migration with minimal downtime and maximum confidence.</p>
      </div>
    </div>
    <div className="container pb-1 inner-page-card">
      <div className="row pt-4">
        <div className="col">
          <div className="overflow-hidden mb-3">
            <h2 className="word-rotator slide font-weight-bold text-8 mb-0 appear-animation" data-appear-animation="maskUp">
              <span>Setup &amp; Platform Migrations</span>
            </h2>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-md-12">
          <p className="text-justify mb-2">
            Setting up a modern IT environment and migrating workloads from legacy systems requires precision, planning, and deep technical expertise. At TechnoSense NextGen Solutions, we provide end-to-end setup and platform migration services that help businesses transition seamlessly to new architectures without disruption.
          </p>
          <p className="text-justify mb-2">
            With extensive experience working across diverse infrastructures, cloud platforms, and enterprise applications, our team ensures every migration is secure, structured, and optimized for long-term performance. Whether you are upgrading hardware, shifting to a new operating system, or modernizing your application platform, we make the transition smooth and risk-free.
          </p>
          <p className="text-justify mb-2">
            Our approach focuses on reducing downtime, ensuring data integrity, and delivering a fully configured, high-performance environment that aligns with your business goals.
          </p>
          <h4 className="mb-2 mt-4">What We Deliver</h4>
          <h5 className="mb-2 mt-3">1. End-to-End Environment Setup</h5>
          <p className="text-justify mb-2">
            We set up servers, networks, storage systems, and application environments tailored to your operational needs. This includes configuration, optimization, compliance checks, and complete readiness for deployment.
          </p>
          <h5 className="mb-2 mt-3">2. Legacy System Upgrades</h5>
          <p className="text-justify mb-2">
            We help modernize outdated infrastructure by migrating workloads to new platforms, improving performance, scalability, and security while eliminating technical debt.
          </p>
          <h5 className="mb-2 mt-3">3. Cross-Platform Migrations</h5>
          <p className="text-justify mb-2">
            Whether moving between cloud providers, on-premises to cloud, or one technology stack to another, we handle complex cross-platform transitions with precision and minimal downtime.
          </p>
          <h5 className="mb-2 mt-3">4. Data &amp; Application Migration</h5>
          <p className="text-justify mb-2">
            Secure migration of applications, databases, and business-critical data with full verification, validation, and performance testing to ensure everything works seamlessly in the new environment.
          </p>
          <h5 className="mb-2 mt-3">5. Risk-Free Migration Strategy</h5>
          <p className="text-justify mb-2">
            From pre-migration assessment to execution and post-migration support, we follow a structured framework to minimize risks and ensure a smooth transition.
          </p>
          <h4 className="mb-2 mt-4">Why Choose Us?</h4>
          <ul className="mb-2">
            <li>Zero data loss, minimal downtime</li>
            <li>Expert team with global project experience</li>
            <li>Detailed migration planning and execution</li>
            <li>Future-ready, scalable environments</li>
            <li>End-to-end support before, during, and after migration</li>
          </ul>
        </div>
      </div>
    </div>
  </div>
  <SiteFooter />
</div>

  )
}






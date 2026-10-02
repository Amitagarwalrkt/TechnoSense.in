import SiteFooter from '../components/SiteFooter'
import ResourcesMenuItem from '../components/ResourcesMenuItem'
export default function VersionUpgrades() {
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
        <div className="section-label">Our Services</div>
        <h1 className="inner-page-title">Version <span>Upgrades</span></h1>
        <p className="inner-page-desc">Safe, planned upgrades that keep your platforms current without disrupting operations.</p>
      </div>
    </div>
    <div className="container pb-1 inner-page-card">
      <div className="row pt-4">
        <div className="col">
          <div className="overflow-hidden mb-3">
            <h2 className="word-rotator slide font-weight-bold text-8 mb-0 appear-animation" data-appear-animation="maskUp">
              <span>Version Upgrades</span>
            </h2>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-md-12">
          <p className="text-justify mb-2">
            Keeping your database up to date is essential for maintaining performance, security, and long-term stability. Our Database Version Upgrade services ensure that your systems seamlessly transition from older database versions to the latest, fully supported releases without impacting business operations.
          </p>
          <p className="text-justify mb-2">
            We follow a structured, risk-free upgrade process that includes assessment, planning, testing, and final deployment-ensuring your data remains safe, accurate, and fully optimized throughout the entire upgrade cycle.
          </p>
          <h4 className="mb-2 mt-4">What We Deliver</h4>
          <h5 className="mb-2 mt-3">Pre-Upgrade Assessment</h5>
          <p className="text-justify mb-2">
            A detailed evaluation of your existing database environment to identify compatibility issues, risks, and required changes before upgrading.
          </p>
          <h5 className="mb-2 mt-3">Seamless Database Upgrade Execution</h5>
          <p className="text-justify mb-2">
            Upgrading your database to the latest stable version using industry-best practices to ensure zero data loss and minimal downtime.
          </p>
          <h5 className="mb-2 mt-3">Application Compatibility Testing</h5>
          <p className="text-justify mb-2">
            Validating that all applications, integrations, and custom components work smoothly with the upgraded database.
          </p>
          <h5 className="mb-2 mt-3">Performance Optimization</h5>
          <p className="text-justify mb-2">
            Tuning the upgraded database for improved speed, storage efficiency, and overall system performance.
          </p>
          <h5 className="mb-2 mt-3">Backup &amp; Rollback Strategy</h5>
          <p className="text-justify mb-2">
            Implementing a secure backup and rollback plan before the upgrade to ensure complete safety in case of unexpected issues.
          </p>
          <h5 className="mb-2 mt-3">Post-Upgrade Validation</h5>
          <p className="text-justify mb-2">
            Testing, verifying, and monitoring the upgraded environment to confirm stability, security, and optimal performance.
          </p>
        </div>
      </div>
    </div>
  </div>
  <SiteFooter />
</div>

  )
}






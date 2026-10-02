import SiteFooter from '../components/SiteFooter'
import ResourcesMenuItem from '../components/ResourcesMenuItem'
export default function OracleDatabaseInstallation() {
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
        <h1 className="inner-page-title">Oracle Installation &amp; Database <span>Services</span></h1>
        <p className="inner-page-desc">Professional Oracle installation and database services delivered with enterprise precision.</p>
      </div>
    </div>
    <div className="container pb-1 inner-page-card">
      <div className="row pt-4">
        <div className="col">
          <div className="overflow-hidden mb-3">
            <h2 className="word-rotator slide font-weight-bold text-8 mb-0 appear-animation" data-appear-animation="maskUp">
              <span>Oracle Installation &amp; Database Services</span>
            </h2>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-md-12">
          <p className="text-justify mb-2">
            TechnoSense specializes in delivering reliable, secure, and high-performance Oracle Database solutions for businesses of all sizes. Our team brings strong expertise from working on global Oracle projects, ensuring smooth installation, configuration, migration, and ongoing database management.
          </p>
          <p className="text-justify mb-2">
            We follow Oracle best practices to set up optimized database environments that support your business operations with maximum efficiency and minimal downtime.
          </p>
          <h4 className="mb-2 mt-4">Services We Provide</h4>
          <h5 className="mb-2 mt-3">Oracle Database Installation</h5>
          <p className="text-justify mb-2">
            End-to-end installation of Oracle databases on on-premise servers or cloud platforms, including configuration, tuning, and environment setup.
          </p>
          <h5 className="mb-2 mt-3">Database Upgrades &amp; Patching</h5>
          <p className="text-justify mb-2">
            Upgrading old Oracle versions to the latest release with zero data loss, improved performance, and enhanced security.
          </p>
          <h5 className="mb-2 mt-3">Database Migration</h5>
          <p className="text-justify mb-2">
            Seamless migration of databases across servers, platforms, or cloud environments (Oracle Cloud, AWS, Azure).
          </p>
          <h5 className="mb-2 mt-3">Performance Tuning</h5>
          <p className="text-justify mb-2">
            Identifying bottlenecks and optimizing queries, indexing, memory, and storage to improve overall database performance.
          </p>
          <h5 className="mb-2 mt-3">Backup &amp; Recovery Solutions</h5>
          <p className="text-justify mb-2">
            Setting up reliable backup strategies, recovery plans, and disaster-resilient database architectures to ensure business continuity.
          </p>
          <h5 className="mb-2 mt-3">High Availability &amp; Clustering</h5>
          <p className="text-justify mb-2">
            Implementing Real Application Clusters (RAC), Data Guard, and other Oracle technologies to ensure 24/7 uptime.
          </p>
          <h5 className="mb-2 mt-3">Security &amp; Compliance</h5>
          <p className="text-justify mb-2">
            Configuring user roles, auditing, encryption, and security policies to protect your data and meet compliance requirements.
          </p>
          <h5 className="mb-2 mt-3">Ongoing Managed DB Services</h5>
          <p className="text-justify mb-2">
            24/7 monitoring, health checks, issue resolution, and preventive maintenance to keep your Oracle databases running smoothly.
          </p>
        </div>
      </div>
    </div>
  </div>
  <SiteFooter />
</div>

  )
}






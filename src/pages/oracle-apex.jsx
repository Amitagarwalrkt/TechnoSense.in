import SiteFooter from '../components/SiteFooter'
import ResourcesMenuItem from '../components/ResourcesMenuItem'
export default function OracleApex() {
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
        <h1 className="inner-page-title">Oracle ADF and <span>ApEx</span></h1>
        <p className="inner-page-desc">Rapid, secure Oracle ApEx applications built for business agility.</p>
      </div>
    </div>
    <div className="container pb-1 inner-page-card">
      <div className="row pt-4">
        <div className="col">
          <div className="overflow-hidden mb-3">
            <h2 className="word-rotator slide font-weight-bold text-8 mb-0 appear-animation" data-appear-animation="maskUp">
              <span>Oracle ADF and ApEx</span>
            </h2>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-md-12">
          <p className="text-justify mb-2">
            TechnoSense brings deep expertise in both Oracle ADF (Application Development Framework) and Oracle APEX (Application Express), enabling organizations to build secure, scalable, and high-performance enterprise applications.
          </p>
          <p className="text-justify mb-2">
            Our team has years of experience delivering Oracle-based solutions across web, mobile, and cloud environments, ensuring fast development cycles and reliable outcomes.
          </p>
          <h4 className="mb-2 mt-4">Oracle ADF (Application Development Framework)</h4>
          <p className="text-justify mb-2">
            ADF is a powerful Java EE framework used for building enterprise-grade applications with strong security, reusable components, and end-to-end MVC architecture.
          </p>
          <h5 className="mb-2 mt-3">What We Deliver with ADF</h5>
          <ul className="mb-2">
            <li>Rapid development using pre-built components and templates</li>
            <li>Scalable full-stack enterprise applications</li>
            <li>Seamless integration with Oracle databases and middleware</li>
            <li>Rich UI development using ADF Faces (150+ components like charts, tabs, dialogs)</li>
            <li>Secure, maintainable, and customizable applications</li>
          </ul>
          <h4 className="mb-2 mt-4">Oracle APEX (Application Express)</h4>
          <p className="text-justify mb-2">
            Oracle APEX is a low-code development platform used to quickly build modern, responsive, database-driven applications with minimal coding effort.
          </p>
          <h5 className="mb-2 mt-3">What We Deliver with APEX</h5>
          <ul className="mb-2">
            <li>Fast development of business applications with low-code tooling</li>
            <li>Customized dashboards, forms, and workflows directly on Oracle Database</li>
            <li>Secure, scalable, cloud-ready applications</li>
            <li>Easy modernization of legacy systems into web-based applications</li>
            <li>Lower development and maintenance costs due to reusable components</li>
          </ul>
          <h4 className="mb-2 mt-4">Why Choose TechnoSense?</h4>
          <ul className="mb-2">
            <li>Strong expertise in Oracle technologies (ADF, APEX, Oracle DB)</li>
            <li>Faster development cycles using reusable architecture</li>
            <li>Cross-platform application development (web, mobile, cloud)</li>
            <li>Highly scalable and secure enterprise solutions</li>
            <li>Reduced development &amp; maintenance effort</li>
          </ul>
        </div>
      </div>
    </div>
  </div>
  <SiteFooter />
</div>

  )
}






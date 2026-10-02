import SiteFooter from '../components/SiteFooter'
import ResourcesMenuItem from '../components/ResourcesMenuItem'
export default function EnterpriseMobilitySolutions() {
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
        <h1 className="inner-page-title">Enterprise Mobility <span>Solutions</span></h1>
        <p className="inner-page-desc">Secure, scalable mobility solutions that keep your workforce connected anywhere.</p>
      </div>
    </div>
    <div className="container pb-1 inner-page-card">
      <div className="row pt-4">
        <div className="col">
          <div className="overflow-hidden mb-3">
            <h2 className="word-rotator slide font-weight-bold text-8 mb-0 appear-animation" data-appear-animation="maskUp">
              <span>Enterprise Mobility Solutions</span>
            </h2>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-md-12">
          <p className="text-justify mb-2">
            Our Enterprise Mobility Solutions help businesses empower their workforce with secure, flexible, and efficient mobile access to business applications and data. We enable organizations to move beyond traditional workplace models by providing tools that allow employees to work anytime, anywhere, on any device-without compromising security or performance.
          </p>
          <p className="text-justify mb-2">
            We design and deliver mobility solutions that improve productivity, streamline workflows, enhance customer engagement, and support modern digital operations across all departments.
          </p>
          <h4 className="mb-2 mt-4">What We Deliver</h4>
          <h5 className="mb-2 mt-3">Mobile App Development for Enterprises</h5>
          <p className="text-justify mb-2">
            Building secure, scalable mobile applications that support business workflows, field operations, approvals, reporting, customer service, and more.
          </p>
          <h5 className="mb-2 mt-3">Mobile Device &amp; Application Management</h5>
          <p className="text-justify mb-2">
            Implementing strong device and app management (MDM/MAM) to ensure secure access, compliance policies, and centralized control over corporate data.
          </p>
          <h5 className="mb-2 mt-3">Workflow &amp; Process Automation</h5>
          <p className="text-justify mb-2">
            Turning manual processes into smart digital workflows accessible on mobile devices to reduce delays and improve efficiency.
          </p>
          <h5 className="mb-2 mt-3">Secure Access to Business Data</h5>
          <p className="text-justify mb-2">
            Providing encrypted, authenticated access to critical enterprise data and applications, ensuring security for both BYOD and corporate devices.
          </p>
          <h5 className="mb-2 mt-3">Integration with Enterprise Systems</h5>
          <p className="text-justify mb-2">
            Connecting mobile apps with ERP, CRM, HRMS, Oracle, SAP, and cloud platforms to enable real-time data and seamless operations.
          </p>
          <h5 className="mb-2 mt-3">User Experience &amp; UI/UX Design</h5>
          <p className="text-justify mb-2">
            Creating intuitive, user-friendly mobile interfaces that help employees perform tasks faster and more effectively.
          </p>
          <h5 className="mb-2 mt-3">Analytics &amp; Reporting</h5>
          <p className="text-justify mb-2">
            Offering real-time insights and dashboards accessible via mobile to support decision-making on the go.
          </p>
        </div>
      </div>
    </div>
  </div>
  <SiteFooter />
</div>

  )
}






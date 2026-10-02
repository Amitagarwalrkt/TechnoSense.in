import SiteFooter from '../components/SiteFooter'
import ResourcesMenuItem from '../components/ResourcesMenuItem'
export default function SecuritySolutions() {
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
        <h1 className="inner-page-title">Security <span>Solutions</span></h1>
        <p className="inner-page-desc">Enterprise-grade security controls that protect users, data, and applications.</p>
      </div>
    </div>
    <div className="container pb-1 inner-page-card">
      <div className="row pt-4">
        <div className="col">
          <div className="overflow-hidden mb-3">
            <h2 className="word-rotator slide font-weight-bold text-8 mb-0 appear-animation" data-appear-animation="maskUp">
              <span>Security Solutions</span>
            </h2>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-md-12">
          <p className="text-justify mb-2">
            Our O365 Security Solutions help businesses protect their users, data, and applications with strong, enterprise-grade security controls built into Microsoft 365. We ensure your environment is fully secured against cyber threats by configuring policies, monitoring risks, and implementing best practices across identity, email, devices, and cloud applications.
          </p>
          <p className="text-justify mb-2">
            With advanced protection features and continuous monitoring, we help your organization stay compliant, safe, and resilient.
          </p>
          <h4 className="mb-2 mt-4">What We Deliver</h4>
          <h5 className="mb-2 mt-3">Identity &amp; Access Protection</h5>
          <p className="text-justify mb-2">
            Configuring multi-factor authentication (MFA), conditional access policies, and secure login controls to protect user identities from unauthorized access.
          </p>
          <h5 className="mb-2 mt-3">Email Security &amp; Threat Protection</h5>
          <p className="text-justify mb-2">
            Setting up anti-phishing, anti-spam, malware filters, and Microsoft Defender for Office 365 to safeguard your emails and communication channels.
          </p>
          <h5 className="mb-2 mt-3">Data Loss Prevention (DLP)</h5>
          <p className="text-justify mb-2">
            Implementing DLP policies to prevent accidental or unauthorized sharing of sensitive information inside or outside the organization.
          </p>
          <h5 className="mb-2 mt-3">Device &amp; Endpoint Security</h5>
          <p className="text-justify mb-2">
            Securing laptops, mobiles, and other devices using Intune policies, encryption, compliance rules, and remote wipe capabilities.
          </p>
          <h5 className="mb-2 mt-3">Information Protection &amp; Encryption</h5>
          <p className="text-justify mb-2">
            Applying sensitivity labels, encryption, and rights management to protect critical files, documents, and emails.
          </p>
          <h5 className="mb-2 mt-3">Security Monitoring &amp; Reporting</h5>
          <p className="text-justify mb-2">
            Using Microsoft Security Center and Compliance Center to monitor threats, analyze alerts, and provide continuous security improvements.
          </p>
        </div>
      </div>
    </div>
  </div>
  <SiteFooter />
</div>

  )
}






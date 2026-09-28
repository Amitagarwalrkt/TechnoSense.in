import SiteFooter from '../components/SiteFooter'
export default function MafMcsCloud() {
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
        <h1 className="inner-page-title">MAF &amp; MCS <span>Cloud</span></h1>
        <p className="inner-page-desc">Mobile Application Framework and MCS cloud solutions for connected enterprises.</p>
      </div>
    </div>
    <div className="container pb-1 inner-page-card">
      <div className="row pt-4">
        <div className="col">
          <div className="overflow-hidden mb-3">
            <h2 className="word-rotator slide font-weight-bold text-8 mb-0 appear-animation" data-appear-animation="maskUp">
              <span>MAF &amp; MCS Cloud</span>
            </h2>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-md-12">
          <p className="text-justify mb-2">
            TechnoSense delivers complete mobile application solutions using Oracle Mobile Application Framework (MAF) and Oracle Mobile Cloud Service (MCS). Our expertise ensures that businesses can build, deploy, and manage secure enterprise mobile applications across devices with ease and consistency.
          </p>
          <h4 className="mb-2 mt-4">Oracle MAF (Mobile Application Framework)</h4>
          <p className="text-justify mb-2">
            MAF is a cross-platform framework that allows organizations to build mobile apps for both Android and iOS using a single codebase. It provides built-in templates, drag-and-drop UI components, strong security features, and seamless integration with back-end systems.
          </p>
          <h4 className="mb-2 mt-4">Oracle MCS (Mobile Cloud Service)</h4>
          <p className="text-justify mb-2">
            MCS is a cloud-based platform that provides all backend services required for enterprise mobile applications. This includes APIs, data storage, user management, analytics, and secure integration with enterprise systems.
          </p>
          <h4 className="mb-2 mt-4">What TechnoSense Delivers</h4>
          <h5 className="mb-2 mt-3">Cross-Platform Mobile App Development</h5>
          <p className="text-justify mb-2">
            Developing secure and scalable mobile apps using a single codebase for Android and iOS through Oracle MAF.
          </p>
          <h5 className="mb-2 mt-3">Backend Integration with MCS</h5>
          <p className="text-justify mb-2">
            Connecting mobile apps with enterprise databases, APIs, authentication systems, and cloud services using Oracle MCS.
          </p>
          <h5 className="mb-2 mt-3">Secure &amp; Managed Mobile Backends</h5>
          <p className="text-justify mb-2">
            Ensuring authentication, offline support, data synchronization, and usage analytics through MCS features.
          </p>
          <h5 className="mb-2 mt-3">Enterprise Mobility Enablement</h5>
          <p className="text-justify mb-2">
            Extending business processes and workflows to mobile devices for employees, partners, and customers.
          </p>
          <h5 className="mb-2 mt-3">Enhanced Productivity &amp; Efficiency</h5>
          <p className="text-justify mb-2">
            Providing mobile access to key business functions, improving data accuracy, and making day-to-day operations faster.
          </p>
        </div>
      </div>
    </div>
  </div>
  <SiteFooter />
</div>

  )
}






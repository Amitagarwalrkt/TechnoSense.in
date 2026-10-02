import SiteFooter from '../components/SiteFooter'
import ResourcesMenuItem from '../components/ResourcesMenuItem'
export default function OnsiteOffshoreResources() {
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
        <h1 className="inner-page-title">Onsite &amp; Offshore Resources <span>Placement</span></h1>
        <p className="inner-page-desc">Flexible onsite and offshore resource placement to scale your delivery capacity.</p>
      </div>
    </div>
    <div className="container pb-1 inner-page-card">
      <div className="row pt-4">
        <div className="col">
          <div className="overflow-hidden mb-3">
            <h2 className="word-rotator slide font-weight-bold text-8 mb-0 appear-animation" data-appear-animation="maskUp">
              <span>Onsite &amp; Offshore Resources Placement</span>
            </h2>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-md-12">
          <p className="text-justify mb-2">
            We provide skilled IT professionals through both onsite and offshore models to help businesses scale their teams quickly and cost-effectively. Our resource placement services ensure you get qualified experts who can seamlessly integrate into your projects, support ongoing operations, and deliver high-quality results.
          </p>
          <p className="text-justify mb-2">
            With access to a strong talent pool and proven industry expertise, we help organizations reduce hiring timelines, control operational costs, and maintain flexibility in their workforce.
          </p>
          <h4 className="mb-2 mt-4">What We Deliver</h4>
          <h5 className="mb-2 mt-3">Onsite Resource Deployment</h5>
          <p className="text-justify mb-2">
            Providing experienced IT professionals who work directly at your location, offering full-time support, collaboration, and project execution as part of your internal team.
          </p>
          <h5 className="mb-2 mt-3">Offshore Resource Placement</h5>
          <p className="text-justify mb-2">
            Delivering highly skilled remote specialists who work from our offshore development centers, ensuring high productivity with optimized cost benefits.
          </p>
          <h5 className="mb-2 mt-3">Skilled IT Expertise</h5>
          <p className="text-justify mb-2">
            Offering professionals across various domains such as software development, cloud, DevOps, database management, testing, infrastructure, and project management.
          </p>
          <h5 className="mb-2 mt-3">Flexible Engagement Models</h5>
          <p className="text-justify mb-2">
            Hourly, monthly, or project-based resource availability based on your business needs and timelines.
          </p>
          <h5 className="mb-2 mt-3">End-to-End Management Support</h5>
          <p className="text-justify mb-2">
            Handling onboarding, coordination, reporting, and performance tracking so your projects continue smoothly without administrative burden.
          </p>
          <h5 className="mb-2 mt-3">Cost-Effective Scaling</h5>
          <p className="text-justify mb-2">
            Helping you expand or reduce team size quickly without long-term commitments or recruitment challenges.
          </p>
        </div>
      </div>
    </div>
  </div>
  <SiteFooter />
</div>

  )
}






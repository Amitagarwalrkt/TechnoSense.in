import SiteFooter from '../components/SiteFooter'
export default function Devops() {
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
        <h1 className="inner-page-title">DevOps <span>Consulting</span></h1>
        <p className="inner-page-desc">Automate delivery pipelines and strengthen reliability with modern DevOps practices.</p>
      </div>
    </div>
    <div className="container pb-1 inner-page-card">
      <div className="row pt-4">
        <div className="col">
          <div className="overflow-hidden mb-3">
            <h2 className="word-rotator slide font-weight-bold text-8 mb-0 appear-animation" data-appear-animation="maskUp">
              <span>DevOps Consulting</span>
            </h2>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-md-12">
          <p className="text-justify mb-2">
            Our DevOps consulting services help organizations speed up development, improve collaboration, and deliver high-quality software with greater reliability. By combining automation, agile processes, and continuous delivery practices, we help teams release features faster and operate with higher efficiency.
          </p>
          <p className="text-justify mb-2">
            We eliminate the gaps between development and operations, ensuring smooth workflows, faster deployments, and improved system performance.
          </p>
          <h4 className="mb-2 mt-4">We can help you with:</h4>
          <h5 className="mb-2 mt-3">CI/CD Pipeline Setup</h5>
          <p className="text-justify mb-2">
            Building automated pipelines for continuous integration and continuous delivery to accelerate release cycles.
          </p>
          <h5 className="mb-2 mt-3">Infrastructure as Code (IaC)</h5>
          <p className="text-justify mb-2">
            Automating infrastructure provisioning using tools like Terraform, Ansible, and CloudFormation.
          </p>
          <h5 className="mb-2 mt-3">Containerization &amp; Orchestration</h5>
          <p className="text-justify mb-2">
            Implementing Docker and Kubernetes for scalable, consistent, and efficient application deployment.
          </p>
          <h5 className="mb-2 mt-3">Automated Monitoring &amp; Logging</h5>
          <p className="text-justify mb-2">
            Setting up real-time monitoring, logging, and alerting systems to ensure performance, reliability, and quick issue detection.
          </p>
          <h5 className="mb-2 mt-3">Cloud DevOps Enablement</h5>
          <p className="text-justify mb-2">
            Integrating DevOps practices across AWS, Azure, or GCP to optimize cloud-based development and operations.
          </p>
          <h5 className="mb-2 mt-3">Security Integration (DevSecOps)</h5>
          <p className="text-justify mb-2">
            Embedding security checks into development pipelines to ensure secure code and risk-free deployments.
          </p>
          <h5 className="mb-2 mt-3">End-to-End Automation</h5>
          <p className="text-justify mb-2">
            Automating repetitive tasks across development, testing, deployment, and operations to reduce errors and improve speed.
          </p>
        </div>
      </div>
    </div>
  </div>
  <SiteFooter />
</div>

  )
}






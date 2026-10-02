import SiteFooter from '../components/SiteFooter'
import ResourcesMenuItem from '../components/ResourcesMenuItem'
export default function Career() {
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
                    <li><a href="/website-development">Website Development</a></li>
                    <li><a href="/mobile-app-development">Mobile App Development</a></li>
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
        <div className="section-label">Join Us</div>
        <h1 className="inner-page-title">Build Your <span>Career</span></h1>
        <p className="inner-page-desc">Grow with a team delivering cloud, infrastructure, and digital transformation worldwide.</p>
      </div>
    </div>
    <div className="container pb-1 inner-page-card">
      <div className="row pt-4">
        <div className="col">
          <div className="overflow-hidden mb-3">
            <h2 className="word-rotator slide font-weight-bold text-8 mb-0 appear-animation" data-appear-animation="maskUp">
              <span>Careers</span>
            </h2>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-md-12">
          <p className="text-justify mb-4">
            Join TechnoSense and be part of a team that is shaping the future of technology. We are always looking for passionate, talented, and driven professionals who want to grow, innovate, and make an impact in the IT industry.
          </p>
          <p className="text-justify mb-5">
            At TechnoSense, you will work on real-world projects, collaborate with experts, and contribute to solutions that help businesses transform digitally across the globe. We believe in continuous learning, open culture, and creating opportunities that bring out the best in every individual.
          </p>
          <h3 className="font-weight-bold text-6 mb-4">Why Work With Us?</h3>
          <div className="row mb-5">
            <div className="col-md-6 mb-4">
              <div className="feature-box feature-box-style-2">
                <div className="feature-box-icon">
                  <i className="fas fa-chart-line text-primary" />
                </div>
                <div className="feature-box-info">
                  <h4 className="font-weight-bold mb-2">Growth &amp; Learning</h4>
                  <p className="mb-0">Access to challenging projects, mentorship, and continuous skill development.</p>
                </div>
              </div>
            </div>
            <div className="col-md-6 mb-4">
              <div className="feature-box feature-box-style-2">
                <div className="feature-box-icon">
                  <i className="fas fa-lightbulb text-primary" />
                </div>
                <div className="feature-box-info">
                  <h4 className="font-weight-bold mb-2">Innovative Work Environment</h4>
                  <p className="mb-0">A culture that encourages new ideas, creativity, and problem-solving.</p>
                </div>
              </div>
            </div>
            <div className="col-md-6 mb-4">
              <div className="feature-box feature-box-style-2">
                <div className="feature-box-icon">
                  <i className="fas fa-globe text-primary" />
                </div>
                <div className="feature-box-info">
                  <h4 className="font-weight-bold mb-2">Global Exposure</h4>
                  <p className="mb-0">Work with international clients, advanced technologies, and enterprise-level solutions.</p>
                </div>
              </div>
            </div>
            <div className="col-md-6 mb-4">
              <div className="feature-box feature-box-style-2">
                <div className="feature-box-icon">
                  <i className="fas fa-balance-scale text-primary" />
                </div>
                <div className="feature-box-info">
                  <h4 className="font-weight-bold mb-2">Work-Life Balance</h4>
                  <p className="mb-0">Flexible, supportive, and employee-friendly policies.</p>
                </div>
              </div>
            </div>
            <div className="col-md-6 mb-4">
              <div className="feature-box feature-box-style-2">
                <div className="feature-box-icon">
                  <i className="fas fa-arrow-up text-primary" />
                </div>
                <div className="feature-box-info">
                  <h4 className="font-weight-bold mb-2">Career Advancement</h4>
                  <p className="mb-0">Clear growth paths with opportunities to lead, specialize, and build expertise.</p>
                </div>
              </div>
            </div>
          </div>
          <h3 className="font-weight-bold text-6 mb-4">We Hire For</h3>
          <div className="row mb-5">
            <div className="col-md-6">
              <ul className="list list-icons list-primary">
                <li><i className="fas fa-check" /> Software Developers (Java, .NET, PHP, Full Stack)</li>
                <li><i className="fas fa-check" /> Cloud &amp; DevOps Engineers</li>
                <li><i className="fas fa-check" /> Database Administrators</li>
                <li><i className="fas fa-check" /> Network &amp; Infrastructure Specialists</li>
              </ul>
            </div>
            <div className="col-md-6">
              <ul className="list list-icons list-primary">
                <li><i className="fas fa-check" /> QA &amp; Testing Professionals</li>
                <li><i className="fas fa-check" /> Project Managers &amp; Business Analysts</li>
                <li><i className="fas fa-check" /> Support &amp; Managed Services Teams</li>
              </ul>
            </div>
          </div>
          <div className="career-apply-card">
            <div className="career-apply-copy">
              <span className="career-apply-label">Join the team</span>
              <h4 className="career-apply-title">Apply Now</h4>
              <p>If you are ready to take your career to the next level, share your resume with us. We look forward to welcoming you to the TechnoSense team.</p>
            </div>
            <a href="mailto:info@technosense.in" className="btn-cyberguard career-apply-btn">
              <i className="fas fa-envelope" />
              info@technosense.in
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
  <SiteFooter />
</div>

  )
}






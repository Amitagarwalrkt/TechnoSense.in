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
                    <li><a href="/web-mobile-application-development">Web &amp; Mobile
                        Application Development</a></li>
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
  <footer id="footer" className="footer-texts-more-lighten footer-premium">
    <div className="footer-premium-bg" aria-hidden="true" />
    <div className="footer-premium-glow footer-premium-glow--1" aria-hidden="true" />
    <div className="footer-premium-glow footer-premium-glow--2" aria-hidden="true" />
    <div className="container footer-premium-main">
      <div className="footer-premium-grid">
        <div className="footer-brand-col">
          <a href="/" className="footer-logo-wrap" aria-label="TechnoSense Home">
            <img src="img/logos/technosense-logo.png" alt="TechnoSense" className="footer-logo-img" />
          </a>
          <p className="footer-brand-desc">NextGen IT solutions - cloud, infrastructure, DevOps, and digital transformation delivered with enterprise-grade reliability.</p>
          <div className="footer-social-row">
            <a href="https://www.linkedin.com/company/technosense-nextgen-solutions/posts/?feedView=all" className="footer-social-link" target="_blank" rel="noopener noreferrer" title="LinkedIn"><i className="fab fa-linkedin-in" /></a>
            <a href="https://www.instagram.com/" className="footer-social-link" target="_blank" rel="noopener noreferrer" title="Instagram"><i className="fab fa-instagram" /></a>
            <a href="https://www.twitter.com/" className="footer-social-link" target="_blank" rel="noopener noreferrer" title="Twitter"><i className="fab fa-x-twitter" /></a>
            <a href="https://www.facebook.com/" className="footer-social-link" target="_blank" rel="noopener noreferrer" title="Facebook"><i className="fab fa-facebook-f" /></a>
          </div>
        </div>
        <div className="footer-links-col">
          <h5 className="footer-col-title">Useful Links</h5>
          <ul className="footer-link-list">
            <li><a href="/"><i className="fas fa-chevron-right" /> Home</a></li>
            <li><a href="/about-us"><i className="fas fa-chevron-right" /> About Us</a></li>
            <li><a href="/contact-us"><i className="fas fa-chevron-right" /> Contact Us</a></li>
            <li><a href="/career"><i className="fas fa-chevron-right" /> Careers</a></li>
            <li><a href="/cloud-consulting"><i className="fas fa-chevron-right" /> Cloud Solutions</a></li>
            <li><a href="/devops"><i className="fas fa-chevron-right" /> DevOps Consulting</a></li>
            <li><a href="/development-services"><i className="fas fa-chevron-right" /> Development Services</a></li>
            <li><a href="/enterprise-mobility-solutions"><i className="fas fa-chevron-right" /> Enterprise Mobility</a></li>
          </ul>
        </div>
        <div className="footer-services-col">
          <h5 className="footer-col-title">Our Services</h5>
          <div className="footer-service-block">
            <a href="/cloud-consulting" className="footer-service-title">Cloud Consulting</a>
            <p><a href="/cloud-adoption-strategy">Cloud Adoption Strategy</a> · <a href="/implementation-migration">Implementation &amp; Migration</a> · <a href="/devops">DevOps</a></p>
          </div>
          <div className="footer-service-block">
            <a href="/development-services" className="footer-service-title">Development Services</a>
            <p><a href="/oracle-apex">Oracle ApEx</a> · <a href="/web-mobile-application-development">Web &amp; Mobile Apps</a> · <a href="/maf-mcs-cloud">MAF &amp; MCS Cloud</a></p>
          </div>
          <div className="footer-service-block">
            <a href="/oracle-database-management" className="footer-service-title">Database</a>
            <p><a href="/oracle-database-installation">Oracle Installation</a> · <a href="/oracle-database-installation">Version Upgrades</a> · <a href="/oracle-database-installation">Server Setup &amp; Migration</a> · <a href="/oracle-database-installation">Managed Services</a></p>
          </div>
        </div>
        <div className="footer-contact-col">
          <h5 className="footer-col-title">Contact Info</h5>
          <ul className="footer-contact-list">
            <li>
              <span className="footer-contact-icon"><i className="fas fa-map-marker-alt" /></span>
              <div>
                <span className="footer-contact-label">Address</span>
                <p>48, 7th Floor, ETT tower - 2B-36, Sector 132 Noida.</p>
              </div>
            </li>
            <li>
              <span className="footer-contact-icon"><i className="fas fa-phone-alt" /></span>
              <div>
                <span className="footer-contact-label">Phone</span>
                <p><a href="tel:+91-9911191139">+91-9911191139</a></p>
              </div>
            </li>
            <li>
              <span className="footer-contact-icon"><i className="fas fa-envelope" /></span>
              <div>
                <span className="footer-contact-label">Email</span>
                <p><a href="mailto:info@technosense.in">info@technosense.in</a></p>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <div className="footer-premium-bar">
      <div className="container footer-premium-bar-inner">
        <p>TechnoSense NextGen Solutions Pvt Limited (c) 2024. All Rights Reserved.</p>
        <a href="#" className="footer-back-top" aria-label="Back to top">Back to top <i className="fas fa-arrow-up" /></a>
      </div>
    </div>
  </footer>
</div>

  )
}






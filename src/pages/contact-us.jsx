export default function ContactUs() {
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
        <div className="section-label">Get In Touch</div>
        <h1 className="inner-page-title">Contact <span>Us</span></h1>
        <p className="inner-page-desc">Have a project in mind or need IT support? Reach out - our team responds within one business day.</p>
      </div>
    </div>
    <div className="container pb-1 inner-page-card">
      <div className="row py-4">
        <div className="col-lg-6">
          <div className>
            <h4 className="mt-2 mb-1">Our <strong>Office</strong></h4>
            <ul className="list list-icons list-icons-style-2 mt-2 office-contact-list">
              <li>
                <i className="fas fa-map-marker-alt top-6" aria-hidden="true" />
                <span className="office-detail"><strong className="text-dark">Address:</strong> 48, 7th Floor, ETT tower - 2B-36, Sector 132 Noida.</span>
              </li>
              <li>
                <i className="fas fa-phone top-6" aria-hidden="true" />
                <span className="office-detail"><strong className="text-dark">Phone:</strong> <a href="tel:+919911191139">+91-9911 191 139</a></span>
              </li>
              <li>
                <i className="fas fa-envelope top-6" aria-hidden="true" />
                <span className="office-detail"><strong className="text-dark">Email:</strong> <a href="mailto:info@technosense.in">info@technosense.in</a></span>
              </li>
            </ul>
          </div>
          {/* <div >
								<h4 class="pt-5">Business <strong>Hours</strong></h4>
								<ul class="list list-icons list-dark mt-2">
									<li><i class="far fa-clock top-6"></i> Monday - Friday - 9am to 5pm</li>
									<li><i class="far fa-clock top-6"></i> Saturday - 9am to 2pm</li>
									<li><i class="far fa-clock top-6"></i> Sunday - Closed</li>
								</ul>
							</div> */}
        </div>
        <div className="col-lg-6">
          <h2 className="font-weight-bold text-8 mt-2 mb-0">Contact Us</h2>
          <p className="mb-4" style={{color: '#6B7280'}}>Feel free to ask for details, don't save any questions!</p>
          <form className="contact-form" action="send-message.php" method="POST">
            <div className="contact-form-success alert alert-success d-none mt-4">
              <strong>Success!</strong> Your message has been sent to us.
            </div>
            <div className="contact-form-error alert alert-danger d-none mt-4">
              <strong>Error!</strong> There was an error sending your message.
              <span className="mail-error-message text-1 d-block" />
            </div>
            <div className="row">
              <div className="form-group col-lg-6">
                <label className="form-label mb-1 text-2">Full Name</label>
                <input type="text" defaultValue="" placeholder="Enter Your Name" data-msg-required="Please enter your name." maxLength={100} className="form-control text-3 h-auto py-2" name="name" required />
              </div>
              <div className="form-group col-lg-6">
                <label className="form-label mb-1 text-2">Email Address</label>
                <input type="email" defaultValue="" placeholder="Enter Your Email" data-msg-required="Please enter your email address." data-msg-email="Please enter a valid email address." maxLength={100} className="form-control text-3 h-auto py-2" name="email" required />
              </div>
            </div>
            <div className="row">
              <div className="form-group col-lg-6">
                <label className="form-label mb-1 text-2">Phone Number</label>
                <input type="tel" defaultValue="" placeholder="Enter Your Phone Number" data-msg-required="Please enter your phone number." maxLength={30} className="form-control text-3 h-auto py-2" name="phone" required />
              </div>
              <div className="form-group col-lg-6">
                <label className="form-label mb-1 text-2">Your Requirement</label>
                <input type="text" defaultValue="" placeholder="Your Requirement" data-msg-required="Please enter your requirement." maxLength={200} className="form-control text-3 h-auto py-2" name="requirement" required />
              </div>
            </div>
            <div className="row">
              <div className="form-group col">
                <label className="form-label mb-1 text-2">Message</label>
                <textarea maxLength={5000} data-msg-required="Please enter your message." rows={4} placeholder="Enter Your Message" className="form-control text-3 h-auto py-2" name="message" required defaultValue={""} />
              </div>
            </div>
            <div className="row">
              <div className="form-group col">
                <input type="submit" defaultValue="Send Message" className="btn btn-primary btn-modern" data-loading-text="Loading..." />
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
  <footer id="footer" className="footer-texts-more-lighten">
    <div className="container">
      <div className="row py-4 mt-4">
        <div className="col-md-6 col-lg-3 mb-5 mb-lg-0">
          <h5 className="text-4 text-color-light mb-3">CONTACT INFO</h5>
          <ul className="list list-unstyled">
            <li className="pb-1 mb-2">
              <span className="d-block font-weight-normal line-height-1 text-color-light">ADDRESS</span> 
              48, 7th Floor, ETT tower - 2B-36, Sector 132 Noida.
            </li>
            <li className="pb-1 mb-2">
              <span className="d-block font-weight-normal line-height-1 text-color-light">PHONE</span>
              <a href="tel:+91-9911191139">+91-9911191139</a>
            </li>
            <li className="pb-1 mb-2">
              <span className="d-block font-weight-normal line-height-1 text-color-light">EMAIL</span>
              <a href="mailto:info@technosense.in"> info@technosense.in</a>
            </li>
            {/* <li class="pb-1 mb-2">
								<span class="d-block font-weight-normal line-height-1 text-color-light">WORKING DAYS/HOURS </span>
								Mon - Sun / 10:00AM - 05:00PM
							</li> */}
          </ul>
          <ul className="social-icons social-icons-clean-with-border social-icons-medium">
            <li className="social-icons-linkedin">
              <a href="https://www.linkedin.com/company/technosense-nextgen-solutions/posts/?feedView=all" className="no-footer-css" target="_blank" title="LinkedIn"><i className="fab fa-linkedin-in" /></a>
            </li>
            <li className="social-icons-instagram">
              <a href="http://www.instagram.com/" className="no-footer-css" target="_blank" title="Instagram"><i className="fab fa-instagram" /></a>
            </li>
            <li className="social-icons-twitter mx-2">
              <a href="http://www.twitter.com/" className="no-footer-css" target="_blank" title="Twitter"><i className="fab fa-x-twitter" /></a>
            </li>
            <li className="social-icons-facebook">
              <a href="http://www.facebook.com/" className="no-footer-css" target="_blank" title="Facebook"><i className="fab fa-facebook-f" /></a>
            </li>
          </ul>
        </div>
        <div className="col-md-6 col-lg-2 mb-5 mb-lg-0">
          <h5 className="text-4 text-color-light mb-3">USEFUL LINKS</h5>
          <ul className="list list-unstyled mb-0">
            <li className="mb-0"><a href="/">Home</a></li>
            <li className="mb-0"><a href="/about-us">About Us</a></li>
            <li className="mb-0"><a href="/contact-us">Contact Us</a></li>
            <li className="mb-0"><a href="/career">Careers</a></li>
            <li className="mb-0"><a href="/cloud-consulting">Cloud Solutions</a></li>
            <li className="mb-0"><a href="/devops">DevOps Consulting</a></li>
            <li className="mb-0"><a href="/development-services">Development Services</a></li>
            <li className="mb-0"><a href="/enterprise-mobility-solutions">Enterprise Mobility Solutions</a></li>
          </ul>
        </div>
        <div className="col-md-6 col-lg-4 mb-5 mb-md-0">
          <h5 className="text-4 text-color-light mb-3">Our Service</h5>
          <article className="mb-3">
            <a href="/cloud-consulting" className="text-color-light text-3-5">Cloud Consulting</a>
            <p className="line-height-2 mb-0"><a href="/cloud-adoption-strategy">Cloud Adoption Strategy,</a>  <a href="/implementation-migration">Implementation &amp; Migration, </a> <a href="/devops">DevOps</a></p>
          </article>
          <article className="mb-3">
            <a href="/development-services" className="text-color-light text-3-5">Development Services</a>
            <p className="line-height-2 mb-0"><a href="/oracle-apex">Oracle ApEx, </a>  <a href="/web-mobile-application-development">Web &amp; Mobile Application Development, </a> <a href="/maf-mcs-cloud">MAF &amp; MCS Cloud</a></p>
          </article>
          <article>
            <a href="/oracle-database-management" className="text-color-light text-3-5">Database</a>
            <p className="line-height-2 mb-0"> <a href="/oracle-database-installation">Oracle Database Installation, </a> <a href="/oracle-database-installation">Version Upgrades, </a> <a href="/oracle-database-installation">Server Setup &amp; Migration, </a> <a href="/oracle-database-installation">Managed Services</a></p>
          </article>
        </div>
      </div>
    </div>
    <div className="container">
      <div className="footer-copyright footer-copyright-style-2 pt-2 pb-2">
        <div className="row">
          <div className="col-12 text-center">
            <h5 className="mb-0 text-light">TechnoSense NextGen Solutions Pvt Limited (c) 2024. All Rights Reserved</h5>
          </div>
        </div>
      </div>
    </div>
  </footer>
</div>

  )
}






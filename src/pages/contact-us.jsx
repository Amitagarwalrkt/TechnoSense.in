import SiteFooter from '../components/SiteFooter'
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
  <SiteFooter />
</div>

  )
}






export default function SiteFooter() {
  return (
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
            <p className="footer-brand-desc">
              NextGen IT solutions - cloud, infrastructure, DevOps, and digital transformation delivered with
              enterprise-grade reliability.
            </p>
            <div className="footer-social-row">
              <a
                href="https://www.linkedin.com/company/technosense-nextgen-solutions/posts/?feedView=all"
                className="footer-social-link"
                target="_blank"
                rel="noopener noreferrer"
                title="LinkedIn"
              >
                <i className="fab fa-linkedin-in" />
              </a>
              <a
                href="https://www.instagram.com/"
                className="footer-social-link"
                target="_blank"
                rel="noopener noreferrer"
                title="Instagram"
              >
                <i className="fab fa-instagram" />
              </a>
              <a
                href="https://www.twitter.com/"
                className="footer-social-link"
                target="_blank"
                rel="noopener noreferrer"
                title="Twitter"
              >
                <i className="fab fa-x-twitter" />
              </a>
              <a
                href="https://www.facebook.com/"
                className="footer-social-link"
                target="_blank"
                rel="noopener noreferrer"
                title="Facebook"
              >
                <i className="fab fa-facebook-f" />
              </a>
            </div>
          </div>
          <div className="footer-links-col">
            <h5 className="footer-col-title">Useful Links</h5>
            <ul className="footer-link-list">
              <li>
                <a href="/">
                  <i className="fas fa-chevron-right" /> Home
                </a>
              </li>
              <li>
                <a href="/about-us">
                  <i className="fas fa-chevron-right" /> About Us
                </a>
              </li>
              <li>
                <a href="/blog">
                  <i className="fas fa-chevron-right" /> Blog
                </a>
              </li>
              <li>
                <a href="/contact-us">
                  <i className="fas fa-chevron-right" /> Contact Us
                </a>
              </li>
              <li>
                <a href="/career">
                  <i className="fas fa-chevron-right" /> Careers
                </a>
              </li>
              <li>
                <a href="/cloud-consulting">
                  <i className="fas fa-chevron-right" /> Cloud Solutions
                </a>
              </li>
              <li>
                <a href="/devops">
                  <i className="fas fa-chevron-right" /> DevOps Consulting
                </a>
              </li>
              <li>
                <a href="/development-services">
                  <i className="fas fa-chevron-right" /> Development Services
                </a>
              </li>
              <li>
                <a href="/enterprise-mobility-solutions">
                  <i className="fas fa-chevron-right" /> Enterprise Mobility
                </a>
              </li>
            </ul>
          </div>
          <div className="footer-services-col">
            <h5 className="footer-col-title">Our Services</h5>
            <div className="footer-service-block">
              <a href="/cloud-consulting" className="footer-service-title">
                Cloud Consulting
              </a>
              <p>
                <a href="/cloud-adoption-strategy">Cloud Adoption Strategy</a>
                {' · '}
                <a href="/implementation-migration">Implementation &amp; Migration</a>
                {' · '}
                <a href="/devops">DevOps</a>
              </p>
            </div>
            <div className="footer-service-block">
              <a href="/development-services" className="footer-service-title">
                Development Services
              </a>
              <p>
                <a href="/website-development">Website Development</a>
                {' · '}
                <a href="/mobile-app-development">Mobile Apps</a>
                {' · '}
                <a href="/oracle-apex">Oracle ApEx</a>
              </p>
            </div>
            <div className="footer-service-block">
              <a href="/oracle-database-management" className="footer-service-title">
                Database
              </a>
              <p>
                <a href="/oracle-database-installation">Oracle Installation</a>
                {' · '}
                <a href="/version-upgrades">Version Upgrades</a>
                {' · '}
                <a href="/server-setup-migration">Server Setup &amp; Migration</a>
                {' · '}
                <a href="/managed-services">Managed Services</a>
              </p>
            </div>
          </div>
          <div className="footer-contact-col">
            <h5 className="footer-col-title">Contact Info</h5>
            <ul className="footer-contact-list">
              <li>
                <span className="footer-contact-icon">
                  <i className="fas fa-map-marker-alt" />
                </span>
                <div>
                  <span className="footer-contact-label">Address</span>
                  <p>48, 7th Floor, ETT tower - 2B-36, Sector 132 Noida.</p>
                </div>
              </li>
              <li>
                <span className="footer-contact-icon">
                  <i className="fas fa-phone-alt" />
                </span>
                <div>
                  <span className="footer-contact-label">Phone</span>
                  <p>
                    <a href="tel:+91-9911191139">+91-9911191139</a>
                  </p>
                </div>
              </li>
              <li>
                <span className="footer-contact-icon">
                  <i className="fas fa-envelope" />
                </span>
                <div>
                  <span className="footer-contact-label">Email</span>
                  <p>
                    <a href="mailto:info@technosense.in">info@technosense.in</a>
                  </p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="footer-premium-bar">
        <div className="container footer-premium-bar-inner">
          <p>TechnoSense NextGen Solutions Pvt Limited © 2024. All Rights Reserved.</p>
          <button
            type="button"
            className="footer-back-top"
            aria-label="Back to top"
            onClick={() => window.scrollTo({
              top: 0,
              behavior: window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 'auto' : 'smooth',
            })}
          >
            Back to top <i className="fas fa-arrow-up" />
          </button>
        </div>
      </div>
    </footer>
  )
}

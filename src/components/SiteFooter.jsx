
const certifications = [
  {
    title: 'ISO 27001',
    subtitle: 'Certified',
    href: '/certificates/iso-iec%2027001-2022.pdf',
  },
]

export default function SiteFooter() {
  return (
    <footer id="footer" className="footer-texts-more-lighten footer-premium">
      <div className="footer-premium-bg" aria-hidden="true" />
      <div className="footer-premium-glow footer-premium-glow--1" aria-hidden="true" />
      <div className="footer-premium-glow footer-premium-glow--2" aria-hidden="true" />

      <div className="container footer-premium-main">
        <div className="footer-premium-grid">

          {/* Brand, Certification and Social Links */}
          <div className="footer-brand-col">
            <a href="/" className="footer-logo-wrap" aria-label="TechnoSense Home">
              <img
                src="/img/logos/technosense-logo.png"
                alt="TechnoSense"
                className="footer-logo-img"
              />
            </a>

            <p className="footer-brand-desc">
              NextGen IT solutions - cloud, infrastructure, DevOps, and digital
              transformation delivered with enterprise-grade reliability.
            </p>

            <h5 className="footer-col-title footer-cert-heading">
              Certifications
            </h5>

            <div className="footer-certification-list">
              {certifications.map((certificate) => (
                <a
                  key={certificate.title}
                  href={certificate.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="footer-certification-item"
                  aria-label={`View ${certificate.title} certificate PDF`}
                  title={`View ${certificate.title} certificate`}
                >
                  <span className="footer-cert-icon" aria-hidden="true">
                    <svg
                      viewBox="0 0 48 48"
                      width="31"
                      height="31"
                      fill="none"
                    >
                      <path
                        d="M24 3L29 6L35 6L38 12L43 16L41 23L43 29L37 34L35 40L28 40L24 45L18 41L12 41L10 34L4 30L7 23L5 17L11 12L13 6L20 6Z"
                        fill="#211C42"
                        stroke="#A99BFF"
                        strokeWidth="2"
                      />
                      <path
                        d="M24 9L28 12L33 12L35 17L39 20L37 25L38 29L33 32L31 37L26 36L23 40L19 36L14 36L13 31L9 28L11 23L10 19L15 16L16 12L21 12Z"
                        fill="#7060C8"
                        stroke="#E2DCFF"
                        strokeWidth="1"
                      />
                      <path
                        d="M16 23L21 28L32 17"
                        stroke="#FFFFFF"
                        strokeWidth="3"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </span>

                  <span className="footer-cert-title">
                    {certificate.title}
                  </span>

                  <span className="footer-cert-subtitle">
                    {certificate.subtitle}
                  </span>
                </a>
              ))}
            </div>

            <div className="footer-social-row">
              <a
                href="https://www.linkedin.com/company/technosense-nextgen-solutions/posts/?feedView=all"
                className="footer-social-link"
                target="_blank"
                rel="noopener noreferrer"
                title="LinkedIn"
                aria-label="LinkedIn"
              >
                <i className="fab fa-linkedin-in" />
              </a>

              <a
                href="https://www.instagram.com/"
                className="footer-social-link"
                target="_blank"
                rel="noopener noreferrer"
                title="Instagram"
                aria-label="Instagram"
              >
                <i className="fab fa-instagram" />
              </a>

              <a
                href="https://www.twitter.com/"
                className="footer-social-link"
                target="_blank"
                rel="noopener noreferrer"
                title="Twitter"
                aria-label="Twitter"
              >
                <i className="fab fa-x-twitter" />
              </a>
                            
              <a
                href="https://wa.me/919911191139"
                className="footer-social-link"
                target="_blank"
                rel="noopener noreferrer"
                title="WhatsApp"
                aria-label="WhatsApp"
              >
                <i className="fab fa-whatsapp" />
              </a>

            </div>
          </div>

          {/* Useful Links */}
          <div className="footer-links-col">
            <h5 className="footer-col-title">Useful Links</h5>

            <ul className="footer-link-list">
              <li><a href="/">Home</a></li>
              <li><a href="/about-us">About Us</a></li>
              <li><a href="/blog">Blog</a></li>
              <li><a href="/contact-us">Contact Us</a></li>
              <li><a href="/career">Careers</a></li>
              <li><a href="/cloud-consulting">Cloud Solutions</a></li>
              <li><a href="/devops">DevOps Consulting</a></li>
              <li><a href="/development-services">Development Services</a></li>
              <li><a href="/enterprise-mobility-solutions">Enterprise Mobility</a></li>
            </ul>
          </div>

          {/* Our Services */}
          <div className="footer-services-col">
            <h5 className="footer-col-title">Our Services</h5>

            <div className="footer-service-block">
              <a href="/cloud-consulting" className="footer-service-title">
                Cloud Consulting
              </a>
              <p>
                <a href="/cloud-adoption-strategy">Cloud Adoption Strategy</a>
                {' · '}
                <a href="/implementation-migration">
                  Implementation &amp; Migration
                </a>
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
              <a
                href="/oracle-database-management"
                className="footer-service-title"
              >
                Database
              </a>
              <p>
                <a href="/oracle-database-installation">Oracle Installation</a>
                {' · '}
                <a href="/version-upgrades">Version Upgrades</a>
                {' · '}
                <a href="/server-setup-migration">
                  Server Setup &amp; Migration
                </a>
                {' · '}
                <a href="/managed-services">Managed Services</a>
              </p>
            </div>
          </div>

          {/* Contact Information */}
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
                    <a href="mailto:info@technosense.in">
                      info@technosense.in
                    </a>
                  </p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Copyright Bar */}
      <div className="footer-premium-bar">
        <div className="container footer-premium-bar-inner">
          <p>
            TechnoSense NextGen Solutions Pvt Limited © 2024. All Rights Reserved.
          </p>

          <button
            type="button"
            className="footer-back-top"
            aria-label="Back to top"
            onClick={() =>
              window.scrollTo({
                top: 0,
                behavior: window.matchMedia(
                  '(prefers-reduced-motion: reduce)'
                ).matches
                  ? 'auto'
                  : 'smooth',
              })
            }
          >
            Back to top <i className="fas fa-arrow-up" />
          </button>
        </div>
      </div>
    </footer>
  )
}

export default function Demo() {
  return (
<div className="body">
  <header id="header" className="header-effect-shrink" data-plugin-options="{'stickyEnabled': true, 'stickyEffect': 'shrink', 'stickyEnableOnBoxed': true, 'stickyEnableOnMobile': false, 'stickyChangeLogo': true, 'stickyStartAt': 120, 'stickyHeaderContainerHeight': 70}">
    <div className="header-body border-top-0">
      <div className="header-top" style={{height: '40px !important'}}>
        <div className="container">
          <div className="header-row">
            <div className="header-column justify-content-start">
              <div className="header-row">
                <nav className="header-nav-top">
                  <ul className="nav nav-pills">
                    <li className="nav-item nav-item-left-border nav-item-left-border-remove nav-item-left-border-sm-show">
                      <span className="ws-nowrap"><i className="fas fa-phone" />  +91-9911191139 </span>
                    </li>
                    <li className="nav-item nav-item-left-border nav-item-left-border-remove nav-item-left-border-sm-show">
                      <span className="ws-nowrap"><i className="fas fa-envelope" />
                        info@technosense.in
                      </span></li></ul></nav>
              </div>
            </div>
            <div className="header-column justify-content-end">
              <div className="header-row">
                <ul className="header-social-icons social-icons d-none d-sm-block social-icons-clean">
                  <li className="social-icons-facebook"><a href="http://www.facebook.com/" target="_blank" title="Facebook"><i className="fab fa-facebook-f" /></a>
                  </li>
                  <li className="social-icons-twitter"><a href="http://www.twitter.com/" target="_blank" title="Twitter"><i className="fab fa-x-twitter" /></a>
                  </li>
                  <li className="social-icons-linkedin"><a href="https://www.linkedin.com/company/technosense-consulting-services/?viewAsMember=true" target="_blank" title="Linkedin"><i className="fab fa-linkedin-in" /></a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="header-container container">
        <div className="header-row">
          <div className="header-column">
            <div className="header-row">
              <div className="header-logo">
                <a href="/">
                  <img alt="Porto" src="technosense/logo.png" style={{top: 4}} />
                </a>
              </div>
            </div>
          </div>
          <div className="header-column justify-content-end">
            <div className="header-row">
              <div className="header-nav header-nav-line header-nav-top-line header-nav-top-line-with-border order-2 order-lg-1">
                <div className="header-nav-main header-nav-main-square header-nav-main-effect-2 header-nav-main-sub-effect-1">
                  <nav className="collapse">
                    <ul className="nav nav-pills" id="mainNav">
                      <li className> <a className="active" href="/"> Home </a>
                      </li>
                      <li className> <a className href="/about-us">
                          About Us </a>
                      </li>
                      <li className="dropdown"> <a className="dropdown-item dropdown-toggle" href="#">
                          Our Services </a>
                        <ul className="dropdown-menu">
                          <li className="dropdown-submenu"> <a className="dropdown-item" href="/infrastructure-management">Infrastructure Management </a>
                            <ul className="dropdown-menu">
                              <li><a className="dropdown-item" href="/infrastructure-management">Infrastructure
                                  Management</a></li>
                              <li><a className="dropdown-item" href="/it-infra-roadmap-consulting"> IT &amp;  Infra
                                  Roadmap Consulting</a>
                              </li>
                              <li><a className="dropdown-item" href="/setup-platform-migrations">Setup
                                  &amp; Platform Migrations </a></li>
                              <li><a className="dropdown-item" href="/network-security-compliances"> Network Security
                                  &amp; Compliances </a></li>
                            </ul>
                          </li>
                          <li className="dropdown-submenu"> <a className="dropdown-item" href="/cloud-consulting">
                              Cloud Consulting </a>
                            <ul className="dropdown-menu">
                              <li><a className="dropdown-item" href="/cloud-adoption-strategy"> Cloud
                                  Adoption Strategy</a></li>
                              <li><a className="dropdown-item" href="/implementation-migration"> Implementation
                                  &amp; Migration </a>
                              </li>
                              <li><a className="dropdown-item" href="/devops"> DevOps
                                </a></li>
                            </ul>
                          </li>
                          <li className="dropdown-submenu"> <a className="dropdown-item" href="/development-services">
                              Development Services </a>
                            <ul className="dropdown-menu">
                              <li><a className="dropdown-item" href="/oracle-apex"> Oracle
                                  ApEx</a></li>
                              <li><a className="dropdown-item" href="/web-mobile-application-development"> Web &amp; Mobile
                                  Application Development </a>
                              </li>
                              <li><a className="dropdown-item" href="/maf-mcs-cloud"> MAF &amp;
                                  MCS Cloud </a></li>
                            </ul>
                          </li>
                          <li className="dropdown-submenu"> <a className="dropdown-item" href="/oracle-database-management">
                              Database </a>
                            <ul className="dropdown-menu">
                              <li><a className="dropdown-item" href="/oracle-database-installation"> Oracle
                                  Database Installation </a></li>
                              <li><a className="dropdown-item" href="/version-upgrades"> Version
                                  Upgrades </a>
                              </li>
                              <li><a className="dropdown-item" href="/server-setup-migration"> Server
                                  Setup &amp; Migration </a></li>
                              <li><a className="dropdown-item" href="/managed-services"> Managed Services
                                </a></li>
                            </ul>
                          </li>
                          <li className="dropdown-submenu"> <a className="dropdown-item" href="#">
                              Microsoft O365 </a>
                            <ul className="dropdown-menu">
                              <li><a className="dropdown-item" href="/O365-licensing-setup"> O365
                                  Licensing &amp; Setup</a></li>
                              <li><a className="dropdown-item" href="/security-solutions"> Security
                                  Solutions </a>
                              </li>
                              <li><a className="dropdown-item" href="/mobile-devices-management"> Mobile
                                  Devices Management</a></li>
                            </ul>
                          </li>
                          <li className> <a className="dropdown-item" href="/onsite-offshore-resources">Onsite &amp;
                              Offshore Resources
                              Placements </a></li>
                        </ul>
                      </li>
                      <li className="dropdown"> <a className="dropdown-item dropdown-toggle" href="#">
                          IT Solutions </a>
                        <ul className="dropdown-menu">
                          <li> <a className="dropdown-item" href="/cloud-consulting"> Cloud Solutions </a>
                          </li>
                          <li><a className="dropdown-item" href="/devops">DevOps
                              Consulting </a></li>
                          <li><a className="dropdown-item" href="/development-services">Development
                              Services </a></li>
                          <li><a className="dropdown-item" href="/page-user-profile">Enterprise Mobility
                              Solutions</a></li>
                        </ul>
                      </li>
                      <li className> <a className href="/about-us">
                          Career </a>
                      </li>
                      <li className> <a className href="/about-us">
                          Contact Us</a>
                      </li>
                    </ul>
                  </nav>
                </div>
                <button className="btn header-btn-collapse-nav" data-bs-toggle="collapse" data-bs-target=".header-nav-main nav">
                  <i className="fas fa-bars" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </header>
  <div role="main" className="main">
    <div className="owl-carousel owl-carousel-light owl-carousel-light-init-fadeIn owl-theme manual dots-inside dots-horizontal-center show-dots-hover dots-light nav-style-1 nav-inside nav-inside-plus nav-dark nav-lg nav-font-size-lg show-nav-hover mb-0 slider_height" data-plugin-options="{'autoplayTimeout': 7000}">
      <div className="owl-stage-outer">
        <div className="owl-stage">
          {/* Carousel Slide 1 */}
          <div className="owl-item position-relative overlay overlay-show overlay-op-7" style={{backgroundImage: 'url(technosense/slider-1.png)', backgroundSize: '100% 100%', backgroundPosition: 'center'}}>
          </div>
          {/* Carousel Slide 2 */}
          <div className="owl-item position-relative overlay overlay-show overlay-op-7" style={{backgroundImage: 'url(technosense/slider.png)', backgroundSize: 'cover', backgroundPosition: 'center'}}>
          </div>
        </div>
      </div>
      <div className="owl-dots mb-5">
        <button role="button" className="owl-dot active"><span /></button>
        <button role="button" className="owl-dot"><span /></button>
      </div>
    </div>
    <div className="home-intro mb-0" id="home-intro">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-8">
            <p>
              The fastest way to grow your business with the leader in <span className="highlighted-word highlighted-word-animation-1 text-color-primary font-weight-semibold text-5">TechnoSense</span>
              <span>Check out our options and features included.</span>
            </p>
          </div>
          <div className="col-lg-4">
            <div className="get-started text-start text-lg-end">
              <a href="#" className="btn btn-primary btn-lg text-3 font-weight-semibold px-4 py-3">Get
                Started Now!</a>
              <div className="learn-more">or <a href="/">learn more.</a></div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <section className="section section-parallax section-height-3 border-0 m-0" data-plugin-parallax data-plugin-options="{'speed': 7, 'parallaxHeight': '150%', 'offset': 100}" data-image-src="img/parallax/parallax-corporate-1-1.jpg">
      <div className="container pb-5 mb-5">
        <div className="row text-center pb-5 mb-5">
          <div className="col-md-12">
            <h1 className="word-rotator slide font-weight-bold text-8 mb-3 appear-animation" data-appear-animation="fadeInUpShorter">
              <span>TechnoSense NextGen Solutions Pvt Limitedis </span>
              <span className="word-rotator-words bg-dark">
                <b className="is-visible">incredibly</b>
                <b>especially</b>
                <b>extremely</b>
              </span>
              <span> beautiful and fully responsive.</span>
            </h1>
            <p className="lead appear-animation" data-appear-animation="fadeInUpShorter" data-appear-animation-delay={300}>
              A highly motivated and skilled team having working experience with big giants like
              Oracle and HCL and having delivered multimillion projects across the globe. <br />
              At <strong>Technosense</strong>, we are dedicated to delivering cutting-edge IT
              infrastructure management solutions tailored to meet the evolving needs of modern
              businesses. With a deep understanding of technology and a commitment to excellence, we
              empower organizations to optimize their IT infrastructure, enhance operational
              efficiency, and drive business growth. <br />
              Our team of highly skilled professionals brings a wealth of experience and expertise in
              IT infrastructure management, network security, cloud computing, and system integration.
              Leveraging the latest technologies and industry best practices, we design, implement,
              and manage robust IT solutions that align with our clients' strategic objectives.
            </p>
          </div>
        </div>
      </div>
    </section>
    <section className="section  section-with-shape-divider bg-color-grey border-0 pb-5 m-0">
      <div className="shape-divider" style={{height: 123}}>
        <svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 1920 123" preserveAspectRatio="xMinYMin">
          <polygon fill="#F4F4F4" points="0,90 221,60 563,88 931,35 1408,93 1920,41 1920,-1 0,-1 " />
          <polygon fill="#FFFFFF" points="0,75 219,44 563,72 930,19 1408,77 1920,25 1920,-1 0,-1 " />
        </svg>
      </div>
      <div className="container mt-4">
        <div className="row justify-content-center">
          <div className="col-lg-11 col-xl-10 text-center">
            <h2 className="custom-highlight-text-1 d-inline-block line-height-5 text-4 positive-ls-3 font-weight-medium text-color-primary mb-2 appear-animation" data-appear-animation="fadeInUpShorter" data-appear-animation-delay={250}>WHAT WE DO
            </h2>
            <h3 className="text-9 line-height-3 text-transform-none font-weight-semibold mb-3 pb-1 appear-animation" data-appear-animation="fadeInUpShorter" data-appear-animation-delay={500}>Our Services
            </h3>
            <p className="text-3-5 pb-3 mb-4 appear-animation" data-appear-animation="fadeInUpShorter" data-appear-animation-delay={750}>Discover the TechnoSense NextGen Solutions Pvt Limitedadvantage as we navigate the
              intricate landscape of IT infrastructure, cloud adoption, and digital innovation with
              precision and expertise. With a track record of delivering multimillion-dollar projects
              worldwide, our team brings unparalleled insight and commitment to every endeavor. </p>
          </div>
        </div>
        <div className="row row-gutter-sm justify-content-center appear-animation" data-appear-animation="fadeInUpShorter" data-appear-animation-delay={1000}>
          <div className="col-sm-12 col-md-6 col-lg-4 mb-4">
            <a href="/demo-business-consulting-3-services-detail" className="custom-link-hover-effects text-decoration-none" data-cursor-effect-hover="plus">
              <div className="card box-shadow-4">
                <div className="card-body custom-view-more px-4">
                  <h3 className="h3_services"> Infrastructure Management </h3>
                  <ol className="ol_service">
                    <li> Infrastructure Management</li>
                    <li> IT &amp;Infra Roadmap Consulting</li>
                    <li> Setup &amp;Platform Migrations </li>
                    <li> Network Security &amp; Compliances </li>
                  </ol>
                </div>
              </div>
            </a>
          </div>
          <div className="col-sm-9 col-md-6 col-lg-4 mb-4">
            <a href="/demo-business-consulting-3-services-detail" className="custom-link-hover-effects text-decoration-none" data-cursor-effect-hover="plus">
              <div className="card box-shadow-4">
                <div className="card-body custom-view-more px-4">
                  <h3 className="h3_services">Cloud Consulting </h3>
                  <ol className="ol_service">
                    <li>Cloud Adoption Strategy</li>
                    <li>Implementation &amp; Migration </li>
                    <li>DevOps</li>
                  </ol>
                </div>
              </div>
            </a>
          </div>
          <div className="col-sm-9 col-md-6 col-lg-4 mb-4">
            <a href="/demo-business-consulting-3-services-detail" className="custom-link-hover-effects text-decoration-none" data-cursor-effect-hover="plus">
              <div className="card box-shadow-4">
                <div className="card-body custom-view-more px-4">
                  <h3 className="h3_services"> Development Services </h3>
                  <ol className="ol_service">
                    <li>Oracle ApEx</li>
                    <li>Web &amp; Mobile Application Development </li>
                    <li>MAF &amp; MCS Cloud</li>
                  </ol>
                </div>
              </div>
            </a>
          </div>
          <div className="col-sm-9 col-md-6 col-lg-4 mb-4">
            <a href="/demo-business-consulting-3-services-detail" className="custom-link-hover-effects text-decoration-none" data-cursor-effect-hover="plus">
              <div className="card box-shadow-4">
                <div className="card-body custom-view-more px-4">
                  <h3 className="h3_services"> Database </h3>
                  <ol className="ol_service">
                    <li>Oracle Database Installation </li>
                    <li>Version Upgrades </li>
                    <li>Server Setup &amp; Migration</li>
                    <li>Managed Services </li>
                  </ol>
                </div>
              </div>
            </a>
          </div>
          <div className="col-sm-9 col-md-6 col-lg-4 mb-4">
            <a href="/demo-business-consulting-3-services-detail" className="custom-link-hover-effects text-decoration-none" data-cursor-effect-hover="plus">
              <div className="card box-shadow-4">
                <div className="card-body custom-view-more px-4">
                  <h3 className="h3_services"> Microsoft O365 </h3>
                  <ol className="ol_service">
                    <li>O365 Licensing &amp; Setup</li>
                    <li>Security Solutions </li>
                    <li>Mobile Devices Management</li>
                  </ol>
                </div>
              </div>
            </a>
          </div>
          <div className="col-sm-9 col-md-6 col-lg-4 mb-4">
            <a href="/demo-business-consulting-3-services-detail" className="custom-link-hover-effects text-decoration-none" data-cursor-effect-hover="plus">
              <div className="card box-shadow-4">
                <div className="card-body custom-view-more px-4">
                  <h3 className="h3_services"> Onsite &amp; Offshore Resources Placements </h3>
                </div>
              </div>
            </a>
          </div>
        </div>
      </div>
    </section>
    <section style={{backgroundColor: 'antiquewhite', padding: '50px 0px'}}>
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <p className="text-justify mb-2 font-16">
              With Vast experience in and over a dozen successful projects across globe with 100%
              report card.Technosense offers comprehensive services for Cloud and Infrastructure starting from
              Roadmap consulting to implementation and support. </p>
            <p className="text-justify mb-2 font-16">Technosense comes in right from the beginning at pre
              implementation stage and assist clients in accessing their readiness, planning for
              suitable application suite and facilitates their transformation by implementing right
              fit solutions giving them best chances of process optimization and maximum returns on
              their digitization investments. </p>
            <p className="text-justify mb-0 font-16">With a pool expert SMEs having global assignments
              experience in variety of business domains we ensure our presence with the customer
              throughout the journey, even at the support stageto ensure seamless functioning of the
              application suites.
            </p>
          </div>
        </div>
      </div>
    </section>
    <section id="services" className="section custom-section-full-width bg-color-transparent border-0 mt-0 mb-1" style={{backgroundImage: 'url(img/demos/it-services/backgrounds/dots-background-2.png)', backgroundRepeat: 'no-repeat', backgroundPosition: 'bottom right'}}>
      <div className="container container-xl-custom">
        <div className="row">
          <div className="col">
            <div className="overflow-hidden mb-2">
            </div>
            <div className="overflow-hidden mb-1">
              <h2 className="text-color-dark font-weight-bold text-center text-8 line-height-2 mb-0 appear-animation" data-appear-animation="maskUp" data-appear-animation-delay={500}>Services We
                Provide:</h2>
            </div>
          </div>
        </div>
        <div className="row pt-4">
          <div className="col-md-6 col-lg-3 text-center mb-5 mb-lg-0 appear-animation" data-appear-animation="fadeInUpShorter" data-appear-animation-delay={650}>
            <img src="technosense/1.png" className="mb-2" width={64} alt />
            <h4 className="text-color-primary font-weight-bold text-6 mb-3"> Pre Implementation</h4>
            <ul className="ul_sustome">
              <li> Client Readiness Assessments</li>
              <li> Gap Analysis &amp; Fitment</li>
              <li> Cloud &amp; Infra assessments</li>
              <li> Rightsizing licensing Needs</li>
            </ul>
          </div>
          <div className="col-md-6 col-lg-3 text-center mt-lg-5 mb-5 mb-lg-0 appear-animation" data-appear-animation="fadeInUpShorter" data-appear-animation-delay={850}>
            <img src="technosense/2.png" className="mb-2" width={64} alt />
            <h4 className="text-color-dark font-weight-bold text-6 mb-3"> Implementation </h4>
            <ul className="ul_sustome">
              <li>Roadmap Designing</li>
              <li>Functional Solution Designing </li>
              <li>Set Ups </li>
              <li>Data Conversion &amp; Testing </li>
              <li>Training &amp; Roll Out</li>
            </ul>
          </div>
          <div className="col-md-6 col-lg-3 text-center mb-5 mb-md-0 appear-animation" data-appear-animation="fadeInUpShorter" data-appear-animation-delay={1050}>
            <img src="technosense/3.png" className="mb-2" width={64} alt />
            <h4 className="text-color-primary font-weight-bold text-6 mb-3"> Maintenance </h4>
            <ul className="ul_sustome">
              <li> Version &amp; Platform Upgrades</li>
              <li> Enhancements &amp; Extensions Development</li>
              <li> Release Management &amp; Audits</li>
            </ul>
          </div>
          <div className="col-md-6 col-lg-3 text-center mt-lg-5 appear-animation" data-appear-animation="fadeInUpShorter" data-appear-animation-delay={1250}>
            <img src="technosense/4.png" className="mb-2" width={64} alt />
            <h4 className="text-color-dark font-weight-bold text-6 mb-3"> Support</h4>
            <ul className="ul_sustome">
              <li> Application support</li>
              <li> DB &amp; Business Ops Support</li>
              <li> Help Desk &amp; Support Management</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
    <section style={{backgroundColor: 'whitesmoke', padding: '50px 0px'}}>
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-7 mb-5 mb-lg-0">
            <h2 className="text-9 line-height-3 text-transform-none font-weight-semibold mb-4">Skills That
              Make a Meaningful Difference for Your Business</h2>
            <p className="text-3-5 pb-3 mb-4">Cras a elit sit amet leo accumsan volutpat. Suspendisse
              hendreriast ehicula leo, vel efficitur felis ultrices non. Cras a elit sit amet leo acun
              volutpat. </p>
            <div className="progress-bars">
              <div className="progress-label d-flex justify-content-between">
                <span className="text-color-dark font-weight-semibold text-2">STRATEGY
                  ACCELERATION</span>
                <span className="text-color-dark font-weight-semibold text-2">90%</span>
              </div>
              <div className="progress progress-xs progress-no-border-radius bg-color-grey mb-4">
                <div className="progress-bar progress-bar-primary" data-appear-progress-animation="90%">
                </div>
              </div>
              <hr className="my-0" />
              <div className="progress-label d-flex justify-content-between pt-2">
                <span className="text-color-dark font-weight-semibold text-2">REVENUE GROWTH</span>
                <span className="text-color-dark font-weight-semibold text-2">80%</span>
              </div>
              <div className="progress progress-xs progress-no-border-radius bg-color-grey mb-4">
                <div className="progress-bar progress-bar-primary" data-appear-progress-animation="80%">
                </div>
              </div>
              <hr className="my-0" />
              <div className="progress-label d-flex justify-content-between pt-2">
                <span className="text-color-dark font-weight-semibold text-2">FIREWALK SALES</span>
                <span className="text-color-dark font-weight-semibold text-2">50%</span>
              </div>
              <div className="progress progress-xs progress-no-border-radius bg-color-grey mb-4">
                <div className="progress-bar progress-bar-primary" data-appear-progress-animation="50%">
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-5">
            <img src="img/demos/business-consulting-3/generic/generic-4.jpg" className="img-fluid" alt />
          </div>
        </div>
      </div>
    </section>
    <section style={{backgroundColor: 'whitesmoke'}}> 
      <div className="container">
        <div className="row">
          <div className="col-md-12 text-center">
            <h2 className="text-9 line-height-3 text-transform-none font-weight-semibold mb-4">OUR IT
              INFRASTRUCTURE SERVICES</h2>
          </div>
          <div className="col">
            <div className="tabs tabs-bottom tabs-center tabs-simple">
              <ul className="nav nav-tabs">
                <li className="nav-item">
                  <a className="nav-link active" href="#tabsNavigationSimpleIcons1" data-bs-toggle="tab">
                    <span className="featured-boxes featured-boxes-style-6 p-0 m-0">
                      <span className="featured-box featured-box-primary featured-box-effect-6 p-0 m-0">
                        <span className="box-content p-0 m-0">
                          <i className="icon-featured fas fa-user" />
                        </span>
                      </span>
                    </span>
                    <p className="mb-0 pb-0">Cloud Solutions</p>
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#tabsNavigationSimpleIcons2" data-bs-toggle="tab">
                    <span className="featured-boxes featured-boxes-style-6 p-0 m-0">
                      <span className="featured-box featured-box-primary featured-box-effect-6 p-0 m-0">
                        <span className="box-content p-0 m-0">
                          <i className="icon-featured fas fa-file" />
                        </span>
                      </span>
                    </span>
                    <p className="mb-0 pb-0">DevOps Consulting</p>
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#tabsNavigationSimpleIcons3" data-bs-toggle="tab">
                    <span className="featured-boxes featured-boxes-style-6 p-0 m-0">
                      <span className="featured-box featured-box-primary featured-box-effect-6 p-0 m-0">
                        <span className="box-content p-0 m-0">
                          <i className="icon-featured fab fa-google-plus-g" />
                        </span>
                      </span>
                    </span>
                    <p className="mb-0 pb-0">Development Services</p>
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#tabsNavigationSimpleIcons4" data-bs-toggle="tab">
                    <span className="featured-boxes featured-boxes-style-6 p-0 m-0">
                      <span className="featured-box featured-box-primary featured-box-effect-6 p-0 m-0">
                        <span className="box-content p-0 m-0">
                          <i className="icon-featured fas fa-adjust" />
                        </span>
                      </span>
                    </span>
                    <p className="mb-0 pb-0">Enterprise Mobility Solutions</p>
                  </a>
                </li>
              </ul>
              <div className="tab-content">
                <div className="tab-pane active" id="tabsNavigationSimpleIcons1">
                  <div className="text-center">
                    <h4>Cloud Solutions</h4>
                  </div>
                  <div className="row">
                    <div className="col-md-4">
                      <img src="technosense/cloud-solutions.png" alt />
                    </div>
                    <div className="col-md-8">
                      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur
                        pellentesque neque eget diam posuere porta. Quisque ut nulla at nunc
                        <a href="#">vehicula</a> lacinia.</p>
                      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur
                        pellentesque neque eget diam posuere porta. Quisque ut nulla at nunc
                        <a href="#">vehicula</a> lacinia. Proin adipiscing porta tellus, ut
                        feugiat nibh adipiscing sit amet. In eu justo a felis faucibus
                        ornare vel id metus. Vestibulum ante ipsum primis in faucibus orci
                        luctus et ultrices posuere cubilia Curae; In eu libero ligula. Fusce
                        eget metus lorem, ac viverra leo. Nullam convallis, arcu vel
                        pellentesque sodales, nisi est varius diam, ac ultrices sem ante
                        quis sem. Proin ultricies volutpat sapien, nec scelerisque ligula
                        mollis lobortis.</p>
                    </div>
                  </div>
                </div>
                <div className="tab-pane" id="tabsNavigationSimpleIcons2">
                  <div className="text-center">
                    <h4>HTML5 / CSS3 / JS</h4>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur
                      pellentesque neque eget diam posuere porta. Quisque ut nulla at nunc <a href="#">vehicula</a> lacinia.</p>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur
                      pellentesque neque eget diam posuere porta. Quisque ut nulla at nunc <a href="#">vehicula</a> lacinia. Nibh adipiscing sit amet. In eu justo
                      a felis faucibus ornare vel id metus. Vestibulum ante ipsum primis in
                      faucibus orci luctus et ultrices posuere cubilia Curae; In eu libero
                      ligula. Fusce eget metus lorem, ac viverra leo. Nullam convallis, arcu
                      vel pellentesque sodales, nisi est varius diam, ac ultrices sem ante
                      quis sem. Proin ultricies volutpat sapien, nec scelerisque ligula mollis
                      lobortis.</p>
                  </div>
                </div>
                <div className="tab-pane" id="tabsNavigationSimpleIcons3">
                  <div className="text-center">
                    <h4>500+ Google Fonts</h4>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur
                      pellentesque neque eget diam posuere porta. Quisque ut nulla at nunc <a href="#">vehicula</a> lacinia.</p>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur
                      pellentesque neque eget diam posuere porta. Quisque ut nulla at nunc <a href="#">vehicula</a> lacinia. Proin adipiscing porta tellus. In eu
                      justo a felis faucibus ornare vel id metus. Vestibulum ante ipsum primis
                      in faucibus orci luctus et ultrices posuere cubilia Curae; In eu libero
                      ligula. Fusce eget metus lorem, ac viverra leo. Nullam convallis, arcu
                      vel pellentesque sodales, nisi est varius diam, ac ultrices sem ante
                      quis sem. Proin ultricies volutpat sapien, nec scelerisque ligula mollis
                      lobortis.</p>
                  </div>
                </div>
                <div className="tab-pane" id="tabsNavigationSimpleIcons4">
                  <div className="text-center">
                    <h4>Colors</h4>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur
                      pellentesque neque eget diam posuere porta. Quisque ut nulla at nunc <a href="#">vehicula</a> lacinia.</p>
                    <p>Lorem ipsum dolor sit amet. Quisque ut nulla at nunc <a href="#">vehicula</a> lacinia. Proin adipiscing porta tellus, ut
                      feugiat nibh adipiscing sit amet. In eu justo a felis faucibus ornare
                      vel id metus. Vestibulum ante ipsum primis in faucibus orci luctus et
                      ultrices posuere cubilia Curae; In eu libero ligula. Fusce eget metus
                      lorem, ac viverra leo. Nullam convallis, arcu vel pellentesque sodales,
                      nisi est varius diam, ac ultrices sem ante quis sem. Proin ultricies
                      volutpat sapien, nec scelerisque ligula mollis lobortis.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section>
      <div className="container container-xl-custom">
        <div className="row py-5 my-5">
          <div className="col-lg-5 col-xl-4 position-relative mb-5 mb-lg-0 appear-animation" data-appear-animation="fadeInRightShorterPlus" data-appear-animation-delay={250} data-plugin-options="{'accY': -400}">
            <div className="position-absolute z-index-0 appear-animation" data-appear-animation="fadeInRightShorter" data-appear-animation-delay={500} style={{top: 102, left: '-246px'}}>
            </div>
            <h2 className="text-color-default positive-ls-3 line-height-3 text-4 mb-2">COMMON QUESTIONS</h2>
            <h3 className="text-transform-none text-color-dark font-weight-black text-10 line-height-2 mb-4">
              Frequent Questions</h3>
            <img src="img/demos/architecture-2/divider.jpg" className="img-fluid opacity-5 mb-4 mt-2" alt />
            <p className="custom-font-tertiary text-5 line-height-4 mb-4 mt-2">TechnoSense NextGen Solutions Pvt LimitedFAQ: Unlocking the Potential of Your IT Infrastructure</p>
            <a href="/demo-architecture-2-contact" className="btn btn-primary custom-btn-style-1 font-weight-bold text-3 px-5 py-3">CONTACT
              US</a>
          </div>
          <div className="col-lg-7 col-xl-8 appear-animation" data-appear-animation="fadeInRightShorterPlus" data-appear-animation-delay={500} data-plugin-options="{'accY': -400}">
            <div className="custom-accordion-style-1 accordion accordion-modern" id="FAQAccordion">
              <div className="card card-default">
                <div className="card-header">
                  <h4 className="card-title m-0">
                    <a className="accordion-toggle text-color-dark font-weight-bold" data-bs-toggle="collapse" href="#collapseFAQOne">
                      What sets TechnoSense NextGen Solutions Pvt Limitedapart from other IT service providers?
                    </a>
                  </h4>
                </div>
                <div id="collapseFAQOne" className="collapse show" data-bs-parent="#FAQAccordion">
                  <div className="card-body ps-4">
                    <p className="mb-0">TechnoSense NextGen Solutions Pvt Limiteddistinguishes itself through a combination of deep industry expertise, a commitment to excellence, and a track record of delivering successful projects globally. Our team's extensive experience with industry leaders like Oracle and HCL ensures that we bring cutting-edge solutions to every client engagement.</p>
                  </div>
                </div>
              </div>
              <div className="card card-default">
                <div className="card-header">
                  <h4 className="card-title m-0">
                    <a className="accordion-toggle text-color-dark font-weight-bold" data-bs-toggle="collapse" href="#collapseFAQTwo">
                      What types of businesses can benefit from TechnoSense NextGen Solutions Pvt Limitedservices?
                    </a>
                  </h4>
                </div>
                <div id="collapseFAQTwo" className="collapse" data-bs-parent="#FAQAccordion">
                  <div className="card-body ps-4">
                    <p className="mb-0">TechnoSense NextGen Solutions Pvt Limitedcaters to businesses of all sizes, from startups to large enterprises. Our flexible approach allows us to tailor solutions to meet the unique needs and challenges of each organization, whether they're looking to streamline IT operations, optimize infrastructure, or drive digital transformation.</p>
                  </div>
                </div>
              </div>
              <div className="card card-default">
                <div className="card-header">
                  <h4 className="card-title m-0">
                    <a className="accordion-toggle text-color-dark font-weight-bold" data-bs-toggle="collapse" href="#collapseFAQFour">
                      How does TechnoSense NextGen Solutions Pvt Limitedensure the security of clients' IT infrastructure?
                    </a>
                  </h4>
                </div>
                <div id="collapseFAQFour" className="collapse" data-bs-parent="#FAQAccordion">
                  <div className="card-body ps-4">
                    <p className="mb-0">Security is a top priority at Technosense, and we employ industry-leading practices and technologies to safeguard our clients' IT environments. From network security assessments to robust cybersecurity solutions, we work proactively to mitigate risks and protect against threats.</p>
                  </div>
                </div>
              </div>
              <div className="card card-default">
                <div className="card-header">
                  <h4 className="card-title m-0">
                    <a className="accordion-toggle text-color-dark font-weight-bold" data-bs-toggle="collapse" href="#collapseFAQFive">
                      What support options does TechnoSense NextGen Solutions Pvt Limitedprovide after implementation?
                    </a>
                  </h4>
                </div>
                <div id="collapseFAQFive" className="collapse" data-bs-parent="#FAQAccordion">
                  <div className="card-body ps-4">
                    <p className="mb-0">TechnoSense NextGen Solutions Pvt Limitedoffers ongoing support and maintenance services to ensure the continued success of our clients' IT initiatives. From version upgrades to performance tuning, our support team is available to address any issues and keep systems running smoothly.</p>
                  </div>
                </div>
              </div>
              <div className="card card-default">
                <div className="card-header">
                  <h4 className="card-title m-0">
                    <a className="accordion-toggle text-color-dark font-weight-bold" data-bs-toggle="collapse" href="#collapseFAQTSix">
                      How can I get started with TechnoSense NextGen Solutions Pvt Limitedservices?
                    </a>
                  </h4>
                </div>
                <div id="collapseFAQTSix" className="collapse" data-bs-parent="#FAQAccordion">
                  <div className="card-body ps-4">
                    <p className="mb-0">Getting started with TechnoSense NextGen Solutions Pvt Limitedis easy. Simply reach out to our team via our website or contact information provided, and we'll schedule a consultation to discuss your specific needs and how we can help. From there, we'll work together to develop a customized plan that aligns with your business objectives.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
  <footer id="footer" className="footer-texts-more-lighten legacy-footer">
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
        <div className="col-md-6 col-lg-3">
          <h5 className="text-4 text-color-light mb-3">SUBSCRIBE NEWSLETTER</h5>
          <p className="mb-2">Get all the latest information on events, sales and offers. Sign up for newsletter:</p>
          <div className="alert alert-success d-none" id="newsletterSuccess">
            <strong>Success!</strong> You've been added to our email list.
          </div>
          <div className="alert alert-danger d-none" id="newsletterError" />
          <form id="newsletterForm" className="form-style-5 opacity-10" action="https://www.okler.net/previews/porto/10.2.0/php/newsletter-subscribe.php" method="POST">
            <div className="row">
              <div className="form-group col">
                <input className="form-control" placeholder="Email Address" name="newsletterEmail" id="newsletterEmail" type="text" />
              </div>
            </div>
            <div className="row">
              <div className="form-group col">
                <button className="btn btn-primary btn-rounded btn-px-4 btn-py-2 font-weight-bold" type="submit">SUBSCRIBE</button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
    <div className="container">
      <div className="footer-copyright footer-copyright-style-2 pt-2 pb-2">
        <div className="row">
          <div className="col-12 text-center">
            <h5 className="mb-0 text-light">TechnoSense NextGen Solutions Pvt Limited├é(c) 2024. All Rights Reserved</h5>
          </div>
        </div>
      </div>
    </div>
  </footer>
</div>

  )
}






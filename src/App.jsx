import { lazy, Suspense, useEffect, useLayoutEffect } from 'react'
import { Route, Routes, Navigate, useLocation, useNavigate } from 'react-router-dom'
import './app.css'
import RagChatWidget from './components/rag-chat/RagChatWidget'
const AboutUs = lazy(() => import('./pages/about-us'))
const Assistent = lazy(() => import('./pages/assistent'))
const Blog = lazy(() => import('./pages/blog'))
const BlogCloudAdoption = lazy(() => import('./pages/blog-cloud-adoption'))
const Career = lazy(() => import('./pages/career'))
const CloudAdoptionStrategy = lazy(() => import('./pages/cloud-adoption-strategy'))
const CloudConsulting = lazy(() => import('./pages/cloud-consulting'))
const ContactUs = lazy(() => import('./pages/contact-us'))
const Demo = lazy(() => import('./pages/demo'))
const DevelopmentServices = lazy(() => import('./pages/development-services'))
const Devops = lazy(() => import('./pages/devops'))
const DotMap = lazy(() => import('./pages/dotMap'))
const EnterpriseCloudMigrationStrategy = lazy(() => import('./pages/enterprise-cloud-migration-strategy'))
const EnterpriseMobilitySolutions = lazy(() => import('./pages/enterprise-mobility-solutions'))
const ImplementationMigration = lazy(() => import('./pages/implementation-migration'))
const HomePage = lazy(() => import('./pages/index'))
const InfrastructureManagement = lazy(() => import('./pages/infrastructure-management'))
const ItInfrastructureModernizationStrategy = lazy(() => import('./pages/it-infrastructure-modernization-strategy'))
const ItInfraRoadmapConsulting = lazy(() => import('./pages/it-infra-roadmap-consulting'))
const MafMcsCloud = lazy(() => import('./pages/maf-mcs-cloud'))
const ManagedServices = lazy(() => import('./pages/managed-services'))
const MicrosoftO365 = lazy(() => import('./pages/microsoft-o365'))
const MobileAppDevelopment = lazy(() => import('./pages/mobile-app-development'))
const MobileDevicesManagement = lazy(() => import('./pages/mobile-devices-management'))
const NetworkSecurityCompliances = lazy(() => import('./pages/network-security-compliances'))
const O365LicensingSetup = lazy(() => import('./pages/O365-licensing-setup'))
const OnsiteOffshoreResources = lazy(() => import('./pages/onsite-offshore-resources'))
const OracleApex = lazy(() => import('./pages/oracle-apex'))
const OracleDatabaseInstallation = lazy(() => import('./pages/oracle-database-installation'))
const OracleDatabaseManagement = lazy(() => import('./pages/oracle-database-management'))
const SecuritySolutions = lazy(() => import('./pages/security-solutions'))
const ServerSetupMigration = lazy(() => import('./pages/server-setup-migration'))
const SetupPlatformMigrations = lazy(() => import('./pages/setup-platform-migrations'))
const VersionUpgrades = lazy(() => import('./pages/version-upgrades'))
const WebsiteDevelopment = lazy(() => import('./pages/website-development'))

const routes = {
  '/about-us': AboutUs, '/assistent': Assistent, '/blog': Blog,
  '/blog-cloud-adoption': BlogCloudAdoption, '/career': Career,
  '/cloud-adoption-strategy': CloudAdoptionStrategy, '/cloud-consulting': CloudConsulting,
  '/contact-us': ContactUs, '/demo': Demo, '/development-services': DevelopmentServices,
  '/devops': Devops, '/dotMap': DotMap,
  '/enterprise-cloud-migration-strategy': EnterpriseCloudMigrationStrategy,
  '/enterprise-mobility-solutions': EnterpriseMobilitySolutions,
  '/implementation-migration': ImplementationMigration, '/infrastructure-management': InfrastructureManagement,
  '/it-infrastructure-modernization-strategy': ItInfrastructureModernizationStrategy,
  '/it-infra-roadmap-consulting': ItInfraRoadmapConsulting, '/maf-mcs-cloud': MafMcsCloud,
  '/managed-services': ManagedServices, '/microsoft-o365': MicrosoftO365,
  '/mobile-app-development': MobileAppDevelopment, '/mobile-devices-management': MobileDevicesManagement,
  '/network-security-compliances': NetworkSecurityCompliances, '/O365-licensing-setup': O365LicensingSetup,
  '/onsite-offshore-resources': OnsiteOffshoreResources, '/oracle-apex': OracleApex,
  '/oracle-database-installation': OracleDatabaseInstallation, '/oracle-database-management': OracleDatabaseManagement,
  '/security-solutions': SecuritySolutions, '/server-setup-migration': ServerSetupMigration,
  '/setup-platform-migrations': SetupPlatformMigrations, '/version-upgrades': VersionUpgrades,
  '/website-development': WebsiteDevelopment
}

function ReactPage({ Page, handlesContactForm = false }) {
  useEffect(() => {
    if (!handlesContactForm) return undefined
    const form = document.querySelector('.contact-form')
    if (!form) return undefined
    const success = form.querySelector('.contact-form-success')
    const error = form.querySelector('.contact-form-error')
    const errorMessage = form.querySelector('.mail-error-message')
    const submit = async (event) => {
      event.preventDefault()
      success?.classList.add('d-none')
      error?.classList.add('d-none')
      try {
        const formData = new FormData(form)
        const response = await fetch('/send-message.php', {
          method: 'POST',
          headers: { 'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8' },
          body: new URLSearchParams(formData)
        })
        const result = await response.json().catch(() => ({}))
        if (!response.ok || result.response !== 'success') throw new Error(result.errorMessage || 'Unable to send your message.')
        success?.classList.remove('d-none')
        form.reset()
      } catch (submitError) {
        if (errorMessage) errorMessage.textContent = submitError.message
        error?.classList.remove('d-none')
      }
    }
    form.addEventListener('submit', submit)
    return () => form.removeEventListener('submit', submit)
  }, [handlesContactForm])
  return <Page />
}

function App() {
  const location = useLocation()
  const navigate = useNavigate()
  useLayoutEffect(() => {
    window.scrollTo(0, 0)
  }, [location.pathname])
  useEffect(() => {
    window.scrollTo(0, 0)
    const frame = window.requestAnimationFrame(() => window.scrollTo(0, 0))
    return () => window.cancelAnimationFrame(frame)
  }, [location.pathname])

  useEffect(() => {
    document.body.classList.remove('mobile-nav-open')
    const normalizedPath = location.pathname.replace(/\.html$/, '').replace(/\/$/, '') || '/'
    if (location.pathname !== normalizedPath && (normalizedPath === '/' || routes[normalizedPath])) {
      navigate(normalizedPath, { replace: true })
      return undefined
    }
    document.body.classList.toggle('react-route-active', location.pathname !== '/')
    const handleLink = (event) => {
      const anchor = event.target.closest('a')
      if (!anchor || anchor.target === '_blank' || !anchor.href) return
      if (anchor.getAttribute('href')?.trim() === '#') {
        event.preventDefault()
        return
      }
      if (
        window.innerWidth <= 991 &&
        (anchor.matches('.nav-dropdown > .nav-link') ||
          (anchor.matches('.dropdown-submenu > .dropdown-item') &&
            anchor.parentElement.querySelector(':scope > .submenu')))
      ) return
      const url = new URL(anchor.href)
      if (url.origin !== window.location.origin) return
      const path = url.pathname.replace(/\.html$/, '').replace(/\/$/, '') || '/'
      if (path === '/' || routes[path]) { event.preventDefault(); navigate(path) }
    }
    document.addEventListener('click', handleLink)
    return () => { document.body.classList.remove('react-route-active'); document.removeEventListener('click', handleLink) }
  }, [location.pathname, navigate])

  useEffect(() => {
    const closeSubmenus = (item) => {
      item.querySelectorAll('.dropdown-submenu').forEach((submenu) => submenu.classList.remove('active'))
      item.querySelectorAll('.submenu').forEach((submenu) => submenu.classList.remove('open'))
    }

    const closeMenu = () => {
      document.querySelectorAll('.navbar-menu').forEach((menu) => menu.classList.remove('active'))
      document.querySelectorAll('.navbar-toggle').forEach((button) => button.classList.remove('active'))
      document.querySelectorAll('.nav-dropdown, .dropdown-submenu').forEach((item) => item.classList.remove('active'))
      document.querySelectorAll('.submenu').forEach((submenu) => submenu.classList.remove('open'))
      document.body.classList.remove('mobile-nav-open')
    }

    const handleToggleClick = (event) => {
      const legacyToggle = event.target.closest('.header-btn-collapse-nav')
      if (legacyToggle) {
        const target = legacyToggle.getAttribute('data-bs-target')
        const menu = target ? document.querySelector(target) : null
        if (menu) menu.classList.toggle('show')
        return
      }

      const toggle = event.target.closest('.navbar-toggle')
      if (!toggle) return
      const menu = toggle.closest('.navbar-wrapper')?.querySelector('.navbar-menu')
      if (!menu) return
      const isOpen = menu.classList.contains('active')
      closeMenu()
      if (!isOpen) {
        menu.classList.add('active')
        toggle.classList.add('active')
        document.body.classList.add('mobile-nav-open')
      }
    }

    const handleDropdownClick = (event) => {
      if (window.innerWidth > 991) return
      const navToggleLink = event.target.closest('.nav-dropdown > .nav-link')
      if (navToggleLink) {
        event.preventDefault()
        const parent = navToggleLink.closest('.nav-dropdown')
        if (!parent) return
        const isExpanded = parent.classList.contains('active')
        document.querySelectorAll('.nav-dropdown').forEach((item) => {
          if (item !== parent) {
            item.classList.remove('active')
            closeSubmenus(item)
          }
        })
        if (isExpanded) {
          parent.classList.remove('active')
          closeSubmenus(parent)
        } else {
          parent.classList.add('active')
        }
        return
      }

      const submenuLink = event.target.closest('.dropdown-submenu > .dropdown-item')
      if (submenuLink) {
        event.preventDefault()
        const parent = submenuLink.closest('.dropdown-submenu')
        if (!parent) return
        const subMenu = parent.querySelector(':scope > .submenu')
        if (!subMenu) return
        const isOpen = subMenu.classList.contains('open')
        document.querySelectorAll('.dropdown-submenu').forEach((item) => {
          if (item !== parent) {
            item.classList.remove('active')
            item.querySelectorAll('.submenu').forEach((submenu) => submenu.classList.remove('open'))
          }
        })
        subMenu.classList.toggle('open', !isOpen)
        parent.classList.toggle('active', !isOpen)
      }
    }

    document.addEventListener('click', handleToggleClick)
    document.addEventListener('click', handleDropdownClick)

    const handleOutsideClick = (event) => {
      const clickedInsideNav = event.target.closest('.navbar-menu') || event.target.closest('.navbar-toggle') || event.target.closest('.nav-dropdown') || event.target.closest('.dropdown-submenu')
      if (!clickedInsideNav && window.innerWidth <= 991) {
        closeMenu()
      }
    }

    const handleResize = () => {
      if (window.innerWidth > 991) closeMenu()
    }

    document.addEventListener('click', handleOutsideClick)
    window.addEventListener('resize', handleResize)

    return () => {
      document.removeEventListener('click', handleToggleClick)
      document.removeEventListener('click', handleDropdownClick)
      document.removeEventListener('click', handleOutsideClick)
      window.removeEventListener('resize', handleResize)
      closeMenu()
    }
  }, [])

  return (
    <>
      <Suspense fallback={<div className="react-page-loading">Loading...</div>}>
        <Routes>
          <Route path="/" element={<ReactPage Page={HomePage} />} />
          <Route
            path="/web-mobile-application-development"
            element={<Navigate to="/development-services" replace />}
          />
          {Object.entries(routes).map(([path, Page]) => (
            <Route
              key={path}
              path={path}
              element={<ReactPage Page={Page} handlesContactForm={path === '/contact-us'} />}
            />
          ))}
          <Route path="*" element={<ReactPage Page={routes['/website-development']} />} />
        </Routes>
      </Suspense>
      <RagChatWidget />
    </>
  )
}

export default App

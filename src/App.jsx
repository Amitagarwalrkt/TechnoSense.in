import { lazy, Suspense, useEffect, useLayoutEffect } from 'react'
import { Route, Routes, useLocation, useNavigate } from 'react-router-dom'
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
const WebMobileApplicationDevelopment = lazy(() => import('./pages/web-mobile-application-development'))
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
  '/it-infra-roadmap-consulting': ItInfraRoadmapConsulting, '/maf-mcs-cloud': MafMcsCloud,
  '/managed-services': ManagedServices, '/microsoft-o365': MicrosoftO365,
  '/mobile-app-development': MobileAppDevelopment, '/mobile-devices-management': MobileDevicesManagement,
  '/network-security-compliances': NetworkSecurityCompliances, '/O365-licensing-setup': O365LicensingSetup,
  '/onsite-offshore-resources': OnsiteOffshoreResources, '/oracle-apex': OracleApex,
  '/oracle-database-installation': OracleDatabaseInstallation, '/oracle-database-management': OracleDatabaseManagement,
  '/security-solutions': SecuritySolutions, '/server-setup-migration': ServerSetupMigration,
  '/setup-platform-migrations': SetupPlatformMigrations, '/version-upgrades': VersionUpgrades,
  '/web-mobile-application-development': WebMobileApplicationDevelopment, '/website-development': WebsiteDevelopment
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
    const normalizedPath = location.pathname.replace(/\.html$/, '').replace(/\/$/, '') || '/'
    if (location.pathname !== normalizedPath && (normalizedPath === '/' || routes[normalizedPath])) {
      navigate(normalizedPath, { replace: true })
      return undefined
    }
    document.body.classList.toggle('react-route-active', location.pathname !== '/')
    const handleLink = (event) => {
      const anchor = event.target.closest('a')
      if (!anchor || anchor.target === '_blank' || !anchor.href) return
      const url = new URL(anchor.href)
      if (url.origin !== window.location.origin) return
      const path = url.pathname.replace(/\.html$/, '').replace(/\/$/, '') || '/'
      if (path === '/' || routes[path]) { event.preventDefault(); navigate(path) }
    }
    document.addEventListener('click', handleLink)
    return () => { document.body.classList.remove('react-route-active'); document.removeEventListener('click', handleLink) }
  }, [location.pathname, navigate])
  return (
    <>
      <Suspense fallback={<div className="react-page-loading">Loading...</div>}>
        <Routes>
          <Route path="/" element={<ReactPage Page={HomePage} />} />
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

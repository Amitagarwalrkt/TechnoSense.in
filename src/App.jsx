import { useEffect, useLayoutEffect } from 'react'
import { Route, Routes, useLocation, useNavigate } from 'react-router-dom'
import './app.css'
import RagChatWidget from './components/rag-chat/RagChatWidget'
import AboutUs from './pages/about-us'
import Assistent from './pages/assistent'
import Blog from './pages/blog'
import BlogCloudAdoption from './pages/blog-cloud-adoption'
import Career from './pages/career'
import CloudAdoptionStrategy from './pages/cloud-adoption-strategy'
import CloudConsulting from './pages/cloud-consulting'
import ContactUs from './pages/contact-us'
import Demo from './pages/demo'
import DevelopmentServices from './pages/development-services'
import Devops from './pages/devops'
import DotMap from './pages/dotMap'
import EnterpriseCloudMigrationStrategy from './pages/enterprise-cloud-migration-strategy'
import EnterpriseMobilitySolutions from './pages/enterprise-mobility-solutions'
import ImplementationMigration from './pages/implementation-migration'
import HomePage from './pages/index'
import InfrastructureManagement from './pages/infrastructure-management'
import ItInfraRoadmapConsulting from './pages/it-infra-roadmap-consulting'
import MafMcsCloud from './pages/maf-mcs-cloud'
import ManagedServices from './pages/managed-services'
import MicrosoftO365 from './pages/microsoft-o365'
import MobileAppDevelopment from './pages/mobile-app-development'
import MobileDevicesManagement from './pages/mobile-devices-management'
import NetworkSecurityCompliances from './pages/network-security-compliances'
import O365LicensingSetup from './pages/O365-licensing-setup'
import OnsiteOffshoreResources from './pages/onsite-offshore-resources'
import OracleApex from './pages/oracle-apex'
import OracleDatabaseInstallation from './pages/oracle-database-installation'
import OracleDatabaseManagement from './pages/oracle-database-management'
import SecuritySolutions from './pages/security-solutions'
import ServerSetupMigration from './pages/server-setup-migration'
import SetupPlatformMigrations from './pages/setup-platform-migrations'
import VersionUpgrades from './pages/version-upgrades'
import WebMobileApplicationDevelopment from './pages/web-mobile-application-development'
import WebsiteDevelopment from './pages/website-development'

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
      <RagChatWidget />
    </>
  )
}

export default App

import { useLocation } from 'react-router-dom'

const blogRoutes = new Set([
  '/blog',
  '/blog-cloud-adoption',
  '/enterprise-cloud-migration-strategy',
  '/it-infrastructure-modernization-strategy',
])

export default function ResourcesMenuItem() {
  const { pathname } = useLocation()
  const isBlogRoute = blogRoutes.has(pathname)

  return (
    <li className="nav-dropdown">
      <a
        href="#"
        className={`nav-link dropdown-toggle${isBlogRoute ? ' active' : ''}`}
        aria-haspopup="true"
      >
        Resources <i className="fas fa-chevron-down" />
      </a>
      <ul className="dropdown-menu">
        <li>
          <a
            href="/blog"
            className={`dropdown-item${pathname === '/blog' ? ' active' : ''}`}
            aria-current={pathname === '/blog' ? 'page' : undefined}
          >
            Blog
          </a>
        </li>
      </ul>
    </li>
  )
}
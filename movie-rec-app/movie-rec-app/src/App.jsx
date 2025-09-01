import { Routes, Route, NavLink, useNavigate } from 'react-router-dom'
import { useState } from 'react'
import './App.css'
import { ROUTES } from './utils/constants'
import { useAuth } from './context/AuthContext'

// Pages
import Login from './pages/Login'
import Signup from './pages/Signup'
import Index from './pages/Index'
import IndexNew from './pages/IndexNew'
import Home from './pages/Home'
const MovieDetails = () => <div className="page"><h2>Movie Details</h2></div>

// Sidebar for Genres
import GenreSidebar from './components/GenreSidebar'

function Navbar() {
  const { user, logout } = useAuth()
  const navigate = useNavigate()
  const [navOpen, setNavOpen] = useState(false)

  const handleLogout = () => {
    logout()
    navigate(ROUTES.HOME)
    setNavOpen(false)
  }

  const closeNav = () => setNavOpen(false)

  return (
    <nav className="navbar">
      <div className="nav-left">
        <button className="btn icon" aria-label="Open navigation" onClick={() => setNavOpen(v => !v)}>☰</button>
        <NavLink to={ROUTES.HOME} className="brand" onClick={closeNav}>MovieRec</NavLink>
      </div>

      {/* Mobile nav drawer */}
      <div className={navOpen ? 'nav-backdrop show' : 'nav-backdrop'} onClick={closeNav} />
      <div className={navOpen ? 'nav-drawer open' : 'nav-drawer'}>
        <div className="nav-drawer-content">
          <NavLink to={ROUTES.HOME} onClick={closeNav}>Home</NavLink>
          {user ? (
            <button className="btn" onClick={handleLogout}>Logout</button>
          ) : (
            <>
              <NavLink to={ROUTES.LOGIN} onClick={closeNav}>Login</NavLink>
              <NavLink to={ROUTES.SIGNUP} onClick={closeNav}>Sign Up</NavLink>
            </>
          )}
        </div>
      </div>
    </nav>
  )
}

function AppLayout({ children, showSidebar = true }) {
  const [sidebarOpen, setSidebarOpen] = useState(() => (typeof window !== 'undefined' ? window.innerWidth > 900 : true))
  return (
    <div className="app-layout">
      <Navbar onToggleSidebar={() => setSidebarOpen((v) => !v)} />
      <div className={showSidebar ? "content" : "content no-sidebar"}>
        {showSidebar && (
          <aside className={sidebarOpen ? "sidebar open" : "sidebar"}>
            <GenreSidebar />
          </aside>
        )}
        <main className="main">
          {children}
        </main>
      </div>
    </div>
  )
}

function App() {
  return (
    <Routes>
      {/* Ensure root path shows Index (index page) */}
      <Route path="/" element={<AppLayout showSidebar={false}><Index /></AppLayout>} />

      {/* existing routes */}
      <Route path={ROUTES.HOME} element={<AppLayout showSidebar={false}><Index /></AppLayout>} />
      <Route path="/home" element={<AppLayout><Home /></AppLayout>} /> {/* use Home for Discover */}
      <Route path={ROUTES.LOGIN} element={<AppLayout showSidebar={false}><Login /></AppLayout>} />
      <Route path={ROUTES.SIGNUP} element={<AppLayout showSidebar={false}><Signup /></AppLayout>} />
      <Route path={ROUTES.MOVIE_DETAILS} element={<AppLayout><MovieDetails /></AppLayout>} />
      <Route path="/index-new" element={<AppLayout showSidebar={false}><IndexNew /></AppLayout>} />
      <Route path="*" element={<AppLayout showSidebar={false}><Index /></AppLayout>} />
    </Routes>
  )
}

export default App



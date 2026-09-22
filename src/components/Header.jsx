import { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'

function Header(props) {
  var siteInfo = props.siteInfo
  var [menuOpen, setMenuOpen] = useState(false)

  var navClass = function (isActive) {
    var base = 'px-4 py-2 rounded-full text-sm font-semibold transition-colors '
    if (isActive) {
      return base + 'bg-ember text-ink'
    }
    return base + 'text-mist hover:text-white'
  }

  return (
    <header className="sticky top-0 z-40 border-b border-line/60 bg-ink/90 backdrop-blur">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between gap-4">
        <Link to="/" className="flex items-center gap-3 shrink-0">
          <span className="w-10 h-10 rounded-full bg-gradient-to-br from-ember to-ember-light flex items-center justify-center text-ink font-extrabold">
            ع
          </span>
          <span className="flex flex-col leading-tight">
            <span className="text-lg font-extrabold">{siteInfo ? siteInfo.name : 'عدسة'}</span>
            <span className="text-xs text-mist">{siteInfo ? siteInfo.tagline : ''}</span>
          </span>
        </Link>

        <nav className="hidden md:flex items-center gap-2 bg-panel border border-line rounded-full p-1">
          <NavLink to="/" end className={function (params) { return navClass(params.isActive) }}>
            الرئيسية
          </NavLink>
          <NavLink to="/blog" className={function (params) { return navClass(params.isActive) }}>
            المدونة
          </NavLink>
          <NavLink to="/about" className={function (params) { return navClass(params.isActive) }}>
            من نحن
          </NavLink>
        </nav>

        <div className="flex items-center gap-3">
          <Link
            to="/blog"
            className="hidden sm:flex w-10 h-10 rounded-full border border-line items-center justify-center text-mist hover:text-white hover:border-ember/50 transition-colors"
            aria-label="بحث"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <circle cx="11" cy="11" r="7" />
              <line x1="21" y1="21" x2="16.65" y2="16.65" />
            </svg>
          </Link>
          <Link
            to="/blog"
            className="hidden sm:inline-flex bg-ember hover:bg-ember-light text-ink font-bold text-sm px-5 py-2.5 rounded-full transition-colors"
          >
            ابدأ القراءة
          </Link>
          <button
            type="button"
            className="md:hidden w-10 h-10 rounded-full border border-line flex items-center justify-center"
            onClick={function () { setMenuOpen(!menuOpen) }}
            aria-label="القائمة"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <line x1="3" y1="6" x2="21" y2="6" />
              <line x1="3" y1="12" x2="21" y2="12" />
              <line x1="3" y1="18" x2="21" y2="18" />
            </svg>
          </button>
        </div>
      </div>

      {menuOpen ? (
        <div className="md:hidden border-t border-line px-4 py-4 flex flex-col gap-2">
          <NavLink to="/" end className={function (params) { return navClass(params.isActive) }} onClick={function () { setMenuOpen(false) }}>
            الرئيسية
          </NavLink>
          <NavLink to="/blog" className={function (params) { return navClass(params.isActive) }} onClick={function () { setMenuOpen(false) }}>
            المدونة
          </NavLink>
          <NavLink to="/about" className={function (params) { return navClass(params.isActive) }} onClick={function () { setMenuOpen(false) }}>
            من نحن
          </NavLink>
        </div>
      ) : null}
    </header>
  )
}

export default Header

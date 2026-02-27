// Header.jsx
// Componente de navegación principal
// Muestra el logo y los enlaces a las secciones de la SPA.
import React, { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Menu, X } from 'lucide-react'

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const location = useLocation()

  const navigation = [
    { name: 'Inicio', href: '/' },
    { name: 'Síndrome de Turner', href: '/acerca' },
    { name: 'Quienes somos', href: '/quienes-somos' },
    { name: 'Comunidad', href: '/comunidad' },
    { name: 'Miembros', href: '/miembros' },
    { name: 'Transparencia', href: '/transparencia' },
    { name: 'Contactos', href: '/contacto' }
  ]

  const isActive = (href) => location.pathname === href

  return (
    <header style={{backgroundColor: '#CF6D9B'}} className="shadow-lg sticky top-0 z-50">
      <nav className="max-w-[100rem] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo compacto */}
          <div className="flex-shrink-0">
            <Link to="/" className="flex items-center space-x-2">
              <img 
                src="/images/logo/logo.png" 
                alt="FEPAST Logo" 
                className="w-10 h-10 object-contain"
              />
              <span className="text-2xl font-black text-white">
                FEPAST
              </span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:block">
            <div className="flex items-center space-x-2 xl:space-x-4">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  style={{
                    backgroundColor: isActive(item.href) ? '#821C53' : 'transparent',
                    color: 'white'
                  }}
                  className="px-3 xl:px-4 py-2 rounded-full text-sm xl:text-base font-semibold transition-all duration-200 hover:bg-[#821C53] whitespace-nowrap"
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-white focus:outline-none"
            >
              {isMenuOpen ? (
                <X className="block h-6 w-6" />
              ) : (
                <Menu className="block h-6 w-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  style={{
                    backgroundColor: isActive(item.href) ? '#821C53' : 'transparent',
                    color: 'white'
                  }}
                  className="block px-3 py-2 rounded-md text-base font-semibold transition-colors duration-200 hover:bg-[#821C53]"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>
        )}
      </nav>
    </header>
  )
}

export default Header
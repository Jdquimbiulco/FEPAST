// Footer.jsx
// Pie de página de FEPAST
// Muestra información de contacto, redes y enlaces institucionales.
import React from 'react'
import { Link } from 'react-router-dom'
import { Mail, Phone, MapPin, Facebook, Instagram, Twitter } from 'lucide-react'

// SVG TikTok
const TikTokIcon = (props) => (
  <svg viewBox="0 0 24 24" fill="currentColor" height="1.5em" width="1.5em" {...props}>
    <path d="M12.75 2v14.25a2.25 2.25 0 1 1-2.25-2.25h.75V11.5a.75.75 0 0 0-.75-.75h-.75a3.75 3.75 0 1 0 3.75 3.75V2h-1.5z" />
    <path d="M16.5 4.5v7.5a.75.75 0 0 0 .75.75h.75a3.75 3.75 0 1 0 3.75-3.75V4.5h-1.5v4.5a2.25 2.25 0 1 1-2.25-2.25h-.75V4.5z" />
  </svg>
)

const Footer = () => {
  return (
    <footer className="bg-[#821C53] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Logo y descripción */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <img src="/images/logo/logo.png" alt="FEPAST Logo" className="w-10 h-10 object-contain bg-white rounded-full" />
              <span className="text-2xl font-bold">FEPAST</span>
            </div>
            <p className="mb-4 max-w-md">
              Fundación dedicada al estudio, prevención y apoyo integral para personas con Síndrome de Turner y sus familias.
            </p>
            <div className="flex space-x-4">
              <a href="https://www.facebook.com/profile.php?id=100081895457164" className="hover:text-[#CF6D9B] transition-colors duration-200">
                <Facebook className="w-6 h-6" />
              </a>
              <a href="https://www.instagram.com/turner_ecuador/" className="hover:text-[#CF6D9B] transition-colors duration-200">
                <Instagram className="w-6 h-6" />
              </a>
              <a href="https://x.com/EcuadorTurner" className="hover:text-[#CF6D9B] transition-colors duration-200">
                <Twitter className="w-6 h-6" />
              </a>
            </div>
          </div>

          {/* Enlaces rápidos */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Enlaces Rápidos</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/acerca" className="hover:text-[#CF6D9B] transition-colors duration-200">Acerca</Link>
              </li>
              <li>
                <Link to="/comunidad" className="hover:text-[#CF6D9B] transition-colors duration-200">Comunidad</Link>
              </li>
              <li>
                <Link to="/miembros" className="hover:text-[#CF6D9B] transition-colors duration-200">Miembros</Link>
              </li>
              <li>
                <Link to="/transparencia" className="hover:text-[#CF6D9B] transition-colors duration-200">Transparencia</Link>
              </li>
              <li>
                <Link to="/contacto" className="hover:text-[#CF6D9B] transition-colors duration-200">Contacto</Link>
              </li>
            </ul>
          </div>

          {/* Información de contacto */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contacto</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-2">
                <Mail className="w-5 h-5" />
                <span>grupoturnerecuador@hotmail.com</span>
              </div>
              <div className="flex items-center space-x-2">
                <Phone className="w-5 h-5" />
                <span>+593 099 065 3327</span>
              </div>
              <div className="flex items-start space-x-2">
                <MapPin className="w-5 h-5 mt-1" />
                <a href="https://maps.app.goo.gl/5GRwNBx3vkT8HaSq9" target="_blank" rel="noopener noreferrer" className="hover:text-[#CF6D9B] transition-colors duration-200">
                  Quito, Ecuador
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="border-t border-[#CF6D9B] mt-8 pt-8 text-center">
          <p className="text-[#F0C9DB]">
            &copy; 2026 FEPAST. Todos los derechos reservados. Sitio web creado con amor y dedicación.
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer

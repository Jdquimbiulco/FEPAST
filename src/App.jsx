// App.jsx
// Componente raíz de la SPA FEPAST
// Define la estructura principal y las rutas de la aplicación.
import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Home from './pages/Home'
import About from './pages/About'
import QuienesSomos from './pages/QuienesSomos'
import Comunidad from './pages/Comunidad'
import Miembros from './pages/Miembros'
import Transparencia from './pages/Transparencia'
import Contact from './pages/Contact'
import Noticias from './pages/Noticias'
import NoticiaDetalle from './pages/NoticiaDetalle'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/acerca" element={<About />} />
          <Route path="/quienes-somos" element={<QuienesSomos />} />
          <Route path="/comunidad" element={<Comunidad />} />
          <Route path="/miembros" element={<Miembros />} />
          <Route path="/transparencia" element={<Transparencia />} />
          <Route path="/noticias" element={<Noticias />} />
          <Route path="/noticias/:slug" element={<NoticiaDetalle />} />
          <Route path="/contacto" element={<Contact />} />
        </Routes>
      </main>
      <Footer />
    </div>
  )
}

export default App
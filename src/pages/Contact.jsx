import React from 'react'
import { Phone, MessageCircle, MapPin, Mail, Clock, Send } from 'lucide-react'

const Contact = () => {
  const contactCards = [
    {
      icon: MessageCircle,
      title: 'Escríbenos',
      subtitle: 'WhatsApp',
      href: 'https://wa.me/593990653327',
      value: 'Chat directo'
    },
    {
      icon: Phone,
      title: '+593 099 065 3327',
      subtitle: 'Llámanos',
      href: 'tel:+593990653327',
      value: 'Atención inmediata'
    },
    {
      icon: MapPin,
      title: 'Ubícanos',
      subtitle: 'Av. Mariscal Sucre S29-28 y, Quito 170701',
      href: 'https://maps.app.goo.gl/fddMmJNJJLWDoZJ59',
      value: 'Ver dirección'
    }
  ]

  return (
    <div>
      {/* Hero */}
      <section className="py-20" style={{backgroundColor: '#CF6D9B'}}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-black text-white mb-6">Contacto</h1>
          <p className="text-xl md:text-2xl text-white max-w-3xl mx-auto">Estamos aquí para ayudarte y acompañarte.</p>
        </div>
      </section>

      {/* Cards */}
      <section className="py-14" style={{backgroundColor: '#A43570'}}>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-center text-white text-4xl font-black mb-10">¡Estamos Aquí Para Ti!</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {contactCards.map((card) => {
              const Icon = card.icon
              return (
                <a
                  key={card.title}
                  href={card.href}
                  className="bg-white rounded-2xl p-6 text-[#A43570] hover:bg-[#F0C9DB] transition duration-200 shadow-md border-2 border-[#F0C9DB]"
                >
                  <div className="flex items-center justify-center gap-2 text-2xl font-black">
                    <Icon className="w-8 h-8" />
                    <span>{card.title}</span>
                  </div>
                  <p className="text-center mt-2 text-sm font-semibold text-[#821C53]">{card.subtitle} · {card.value}</p>
                </a>
              )
            })}
          </div>
        </div>
      </section>

      {/* Formulario e info */}
      <section className="py-16" style={{backgroundColor: '#F0C9DB'}}>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="bg-white rounded-2xl p-8 shadow-md border-2 border-[#F0C9DB] flex items-center justify-center">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3989.7713649629986!2d-78.55275019999999!3d-0.277974!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x91d599d56d59e67f%3A0x6fccb54693a712ea!2sFEPAST!5e0!3m2!1ses-419!2sec!4v1771797995156!5m2!1ses-419!2sec"
              width="100%"
              height="350"
              style={{ border: 0, borderRadius: '1rem' }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Mapa FEPAST"
            ></iframe>
          </div>

          <div id="ubicacion" className="bg-white rounded-2xl p-8 shadow-md border-2 border-[#F0C9DB]">
            <h3 className="text-2xl font-black text-[#A43570] mb-6">Información de contacto</h3>
            <div className="space-y-5 text-[#821C53]">
              <div className="flex items-start gap-3">
                <Phone className="w-5 h-5 text-[#A43570] mt-1" />
                <div>
                  <p className="font-semibold">Teléfono</p>
                  <p>+593 099 065 3327</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <MessageCircle className="w-5 h-5 text-[#A43570] mt-1" />
                <div>
                  <p className="font-semibold">WhatsApp</p>
                  <a href="https://wa.me/593990653327" target="_blank" rel="noopener noreferrer" className="hover:text-[#CF6D9B] transition-colors">Chat directo</a>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Mail className="w-5 h-5 text-[#A43570] mt-1" />
                <div>
                  <p className="font-semibold">Correo</p>
                  <p>grupoturnerecuador@hotmail.com</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-[#A43570] mt-1" />
                <div>
                  <p className="font-semibold">Dirección</p>
                  <a href="https://maps.app.goo.gl/fddMmJNJJLWDoZJ59" target="_blank" rel="noopener noreferrer" className="hover:text-[#CF6D9B] transition-colors">Av. Mariscal Sucre S29-28 y, Quito 170701</a>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Clock className="w-5 h-5 text-[#A43570] mt-1" />
                <div>
                  <p className="font-semibold">Horario</p>
                  <p>Lunes a Viernes · 08:00 - 18:00</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Contact

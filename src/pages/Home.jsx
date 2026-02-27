// Home.jsx
// Página principal de FEPAST
// Muestra información introductoria, slider, y enlaces a secciones clave.
import React from 'react'
import { Link } from 'react-router-dom'
import { Heart, Users, BookOpen, Phone, ArrowRight, Star, Shield, Lightbulb, BookCheck } from 'lucide-react'
import Slider from '../components/Slider'

const Home = () => {
  const features = [
    {
      icon: Heart,
      image: '/images/features/apoyo.jpg', // Agregar imagen aquí
      title: "Sensibilización",
      description: "Generamos conciencia y comprensión sobre el Síndrome de Turner a través de campañas, educación y mensajes que nacen desde el respeto y la esperanza, sembrando empatía, derribando prejuicios e inspirando a construir una sociedad más informada, humana y solidaria."
    },
    {
      icon: Users,
      image: '/images/features/comunidad.png', // Agregar imagen aquí
      title: "Comunidad Unida",
      description: "Fortalecemos una red solidaria que abraza a mujeres y niñas con Síndrome de Turner, a sus familias y a quienes caminan a su lado, creando espacios de encuentro donde el apoyo mutuo, la escucha y el amor se transforman en fuerza, inclusión y bienestar compartido."
    },
    {
      icon: BookOpen,
      image: '/images/features/educacion.jpg', // Agregar imagen aquí
      title: "Desarrollo Personal",
      description: "Impulsamos el aprendizaje, la autonomía y el empoderamiento de mujeres y niñas con Síndrome de Turner, creando espacios de formación y acompañamiento donde descubren su potencial, fortalecen sus capacidades y construyen, con confianza y esperanza, su propio camino."
    },
    {
      icon: Shield,
      image: '/images/features/salud.jpg', // Agregar imagen aquí
      title: "Salud Integral",
      description: "Promovemos la atención médica y el bienestar integral de mujeres y niñas con Síndrome de Turner, acompañándolas con cuidado y compromiso para que accedan de manera equitativa a servicios de salud, apoyo emocional y orientación profesional que fortalezcan su bienestar y mejoren su calidad de vida."
    },
        {
      icon: BookCheck,
      image: '/images/features/politica.jpg', // Agregar imagen aquí
      title: "Política Pública",
      description: "Impulsamos la participación activa para que las voces de las mujeres y niñas con Síndrome de Turner sean escuchadas y consideradas en la construcción de políticas públicas, promoviendo derechos, atención integral e inclusión social, con el firme propósito de transformar realidades en todo el país."
    }
  ]

  const testimonials = [
    {
      name: "María González",
      text: "FEPAST me ayudó a entender mejor el síndrome de mi hija y nos conectó con otras familias increíbles.",
      rating: 5
    },
    {
      name: "Dr. Carlos Mendez",
      text: "Una fundación comprometida con la excelencia en el apoyo y la investigación del Síndrome de Turner.",
      rating: 5
    },
    {
      name: "Ana Rodríguez",
      text: "Gracias a FEPAST, mi familia encontró esperanza y las herramientas necesarias para seguir adelante.",
      rating: 5
    }
  ]

  return (
    <div>
      {/* Slider Section */}
      <Slider />

      {/* Hero Section */}
      <section className="relative text-white overflow-hidden" style={{backgroundColor: '#CF6D9B'}}>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32">
          <div className="text-center">
            <h1 className="text-5xl md:text-7xl font-black mb-6 leading-tight">
              ¡Bienvenidos a FEPAST!
            </h1>
            <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto font-medium">
              Somos la Fundación Ecuatoriana para la Ayuda al Síndrome de Turner. 
              Inspiramos y acompañamos a mujeres y niñas con Síndrome de Turner en todo Ecuador.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/acerca" className="btn-primary inline-flex items-center justify-center">
                Conoce Más
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
              <Link to="/contacto" className="btn-secondary inline-flex items-center justify-center">
                <Phone className="mr-2 w-5 h-5" />
                Contáctanos
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20" style={{background: 'linear-gradient(to bottom, #F0C9DB, #fdf8fb)'}}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-black mb-6" style={{color: '#821C53'}}>
              ¿Cómo te acompañamos?
            </h2>
            <div className="max-w-3xl mx-auto space-y-4">
              <p className="text-xl font-medium leading-relaxed" style={{color: '#2d2d2d'}}>
                En FEPAST, nuestro compromiso con las mujeres y niñas con Síndrome de Turner es profundo e inquebrantable. Cada día trabajamos con amor y convicción para construir una comunidad donde ninguna persona se sienta sola, y donde cada historia sea escuchada, acompañada y valorada.
              </p>

              <p className="text-xl font-medium leading-relaxed" style={{color: '#2d2d2d'}}>
                Súmate, comparte, infórmate y sé parte de una red que transforma vidas a través del apoyo, la empatía y la esperanza.
              </p>
            </div>
          </div>

          <div className="space-y-16">
            {features.map((feature, index) => {
              const IconComponent = feature.icon
              const isEven = index % 2 === 0 // Par: imagen izquierda, Impar: imagen derecha
              
              return (
                <div 
                  key={index} 
                  className={`group rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 ${
                    isEven ? 'md:flex-row' : 'md:flex-row-reverse'
                  } flex flex-col md:flex items-center`}
                  style={{
                    backgroundColor: isEven ? '#ffffff' : '#fdf8fb',
                    border: '1px solid rgba(207, 109, 155, 0.15)'
                  }}
                >
                  {/* Imagen con padding */}
                  {feature.image && (
                    <div className="md:w-1/2 w-full p-6 md:p-8 flex-shrink-0">
                      <div className="h-64 md:h-96 overflow-hidden rounded-2xl shadow-md">
                        <img 
                          src={feature.image} 
                          alt={feature.title}
                          className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
                        />
                      </div>
                    </div>
                  )}
                  
                  {/* Contenido */}
                  <div className="md:w-1/2 w-full p-10 md:p-16">
                    {/* Título con ícono al lado */}
                    <div className="flex items-center gap-4 mb-6">
                      <div 
                        className="w-16 h-16 md:w-20 md:h-20 rounded-xl flex items-center justify-center shadow-lg flex-shrink-0 transform group-hover:rotate-6 transition-all duration-500" 
                        style={{
                          backgroundColor: '#A43570',
                          boxShadow: '0 8px 30px rgba(164, 53, 112, 0.25)'
                        }}
                      >
                        <IconComponent className="w-8 h-8 md:w-10 md:h-10 text-white" />
                      </div>
                      <h3 className="text-2xl md:text-4xl font-black leading-tight" style={{color: '#821C53'}}>
                        {feature.title}
                      </h3>
                    </div>
                    <p className="text-lg md:text-xl font-medium leading-relaxed text-gray-700">
                      {feature.description}
                    </p>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* About Preview Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Sobre el Síndrome de Turner
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                El Síndrome de Turner es una condición genética que afecta únicamente a las mujeres, 
                caracterizada por la ausencia total o parcial de un cromosoma X. Afecta aproximadamente 
                a 1 de cada 2,500 niñas nacidas vivas.
              </p>
              <div className="space-y-4 mb-8">
                <div className="flex items-start space-x-3">
                  <Lightbulb className="w-6 h-6 text-purple-500 mt-1" />
                  <div>
                    <h4 className="font-semibold text-gray-900">Diagnóstico Temprano</h4>
                    <p className="text-gray-600">La detección temprana permite un mejor manejo de los síntomas.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <Heart className="w-6 h-6 text-pink-500 mt-1" />
                  <div>
                    <h4 className="font-semibold text-gray-900">Tratamiento Integral</h4>
                    <p className="text-gray-600">Existe tratamiento efectivo para mejorar la calidad de vida.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <Users className="w-6 h-6 text-indigo-500 mt-1" />
                  <div>
                    <h4 className="font-semibold text-gray-900">Apoyo Familiar</h4>
                    <p className="text-gray-600">El apoyo familiar y comunitario es fundamental.</p>
                  </div>
                </div>
              </div>
              <Link to="/acerca" className="btn-primary">
                Saber Más
              </Link>
            </div>
            <div className="relative">
              <div className="rounded-2xl overflow-hidden shadow-xl">
                <img 
                  src="/images/features/fotoComunidad.jpg" 
                  alt="Juntos Somos Más Fuertes" 
                  className="w-full h-96 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent flex items-end justify-center">
                  <div className="p-8 text-white text-center w-full">
                    <h3 className="text-3xl font-black mb-2">Juntos Somos Más Fuertes</h3>
                    <p className="text-lg font-medium">Construyendo esperanza, un paso a la vez</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Home
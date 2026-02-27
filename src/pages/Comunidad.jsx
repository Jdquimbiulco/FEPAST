import React from 'react';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Users, MessageCircle, Calendar, Heart, ArrowRight } from 'lucide-react';

export default function Comunidad() {
  const [noticias, setNoticias] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const url = `https://admin.turnerecuador.org/wp-json/wp/v2/noticias?_embed&t=${Date.now()}`;
    fetch(url)
      .then(res => {
        if (!res.ok) throw new Error('Error al cargar noticias');
        return res.json();
      })
      .then(data => {
        setNoticias(Array.isArray(data) ? data : []);
        setLoading(false);
      })
      .catch(err => {
        setError(err.message);
        setLoading(false);
      });
  }, []);

  return (


    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative text-white overflow-hidden" style={{backgroundColor: '#CF6D9B'}}>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="text-center">
            <h1 className="text-5xl md:text-6xl font-black mb-6">
              Comunidad FEPAST
            </h1>
            <p className="text-xl md:text-2xl max-w-3xl mx-auto">
              Únete a nuestra red de apoyo, comparte experiencias y encuentra esperanza
            </p>
          </div>
        </div>
      </section>

      {/* Noticias FEPAST - después del hero */}
      <section className="relative z-10 mt-8 mb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white/90 rounded-3xl shadow-2xl border border-[#CF6D9B] p-10 md:p-16">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-extrabold mb-4 bg-gradient-to-r from-pink-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent drop-shadow-lg">
                Noticias FEPAST
              </h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Mantente informado sobre las últimas novedades de nuestra comunidad
              </p>
            </div>
            {loading ? (
              <div className="text-center py-12">
                <div className="inline-block animate-spin rounded-full h-12 w-12 border-b-2 border-primary-600"></div>
                <p className="mt-4 text-gray-600">Cargando noticias...</p>
              </div>
            ) : error ? (
              <div className="text-center py-12">
                <p className="text-red-600">Error: {error}</p>
              </div>
            ) : noticias.length === 0 ? (
              <div className="text-center py-12">
                <p className="text-gray-600 text-lg">No hay noticias publicadas aún.</p>
              </div>
            ) : (
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {noticias.map(noticia => {
                  if (!noticia || !noticia.title || !noticia.slug) return null;
                  const imagenDestacada = noticia._embedded?.['wp:featuredmedia']?.[0]?.source_url;
                  const fecha = noticia.date ? new Date(noticia.date).toLocaleDateString('es-ES', { year: 'numeric', month: 'long', day: 'numeric' }) : '';
                  const titulo = noticia.title?.rendered || 'Sin título';
                  const resumen = noticia.excerpt?.rendered || '<p>Sin descripción</p>';
                  return (
                    <article key={noticia.id || Math.random()} className="card-hover bg-gradient-to-br from-white via-pink-50 to-purple-50 rounded-xl overflow-hidden shadow-lg border border-[#F0C9DB] hover:shadow-2xl transition-shadow duration-300">
                      {imagenDestacada && (
                        <div className="h-48 overflow-hidden">
                          <img src={imagenDestacada} alt={titulo} className="w-full h-full object-cover hover:scale-110 transition-transform duration-300" />
                        </div>
                      )}
                      <div className="p-6">
                        {fecha && (
                          <div className="flex items-center text-sm text-gray-500 mb-3">
                            <Calendar className="w-4 h-4 mr-2" />
                            <span>{fecha}</span>
                          </div>
                        )}
                        <h3 className="text-2xl font-bold mb-3 text-[#821C53] hover:text-[#A43570] transition">
                          <Link to={`/noticias/${noticia.slug}`}>
                            <span dangerouslySetInnerHTML={{ __html: titulo }} />
                          </Link>
                        </h3>
                        <div className="text-gray-600 mb-4 line-clamp-3" dangerouslySetInnerHTML={{ __html: resumen }} />
                        <Link to={`/noticias/${noticia.slug}`} className="inline-flex items-center text-[#A43570] hover:text-[#821C53] font-semibold group">
                          Leer más
                          <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                        </Link>
                      </div>
                    </article>
                  );
                })}
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Contenido */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4" style={{color: '#821C53'}}>
              Juntos Somos Más Fuertes
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Nuestra comunidad está formada por familias, pacientes, profesionales de la salud y aliados comprometidos con mejorar la calidad de vida de personas con Síndrome de Turner.
            </p>
          </div>

          {/* Características de la Comunidad */}
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <div className="bg-gray-50 p-8 rounded-xl">
              <div className="w-16 h-16 rounded-full flex items-center justify-center mb-4" style={{backgroundColor: '#A43570'}}>
                <Users className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-4" style={{color: '#821C53'}}>Grupos de Apoyo</h3>
              <p className="text-gray-600 mb-4">
                Participa en nuestros grupos de apoyo donde familias comparten experiencias, consejos y se brindan apoyo mutuo.
              </p>
            </div>

            <div className="bg-gray-50 p-8 rounded-xl">
              <div className="w-16 h-16 rounded-full flex items-center justify-center mb-4" style={{backgroundColor: '#A43570'}}>
                <Calendar className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-4" style={{color: '#821C53'}}>Eventos y Talleres</h3>
              <p className="text-gray-600 mb-4">
                Asiste a nuestros eventos, conferencias y talleres educativos diseñados para empoderar a nuestra comunidad.
              </p>
            </div>

            <div className="bg-gray-50 p-8 rounded-xl">
              <div className="w-16 h-16 rounded-full flex items-center justify-center mb-4" style={{backgroundColor: '#A43570'}}>
                <MessageCircle className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-4" style={{color: '#821C53'}}>Red de Contactos</h3>
              <p className="text-gray-600 mb-4">
                Conecta con otras familias, encuentra especialistas y accede a recursos valiosos para el tratamiento.
              </p>
            </div>
          </div>

          {/* CTA */}
          <div className="text-center bg-gradient-to-r from-pink-50 to-purple-50 p-12 rounded-2xl">
            <Heart className="w-16 h-16 mx-auto mb-6" style={{color: '#A43570'}} />
            <h2 className="text-3xl font-bold mb-4" style={{color: '#821C53'}}>
              ¿Quieres Formar Parte?
            </h2>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              Únete a nuestra comunidad hoy mismo y descubre el apoyo y la información que necesitas.
            </p>
            <Link 
              to="/contacto"
              style={{backgroundColor: '#A43570'}}
              className="inline-block text-white px-8 py-4 rounded-full font-bold text-lg shadow-lg hover:opacity-90 transition-all duration-300 hover:scale-105"
            >
              Contáctanos
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Calendar, User, ArrowRight } from 'lucide-react';

export default function Noticias() {
  const [noticias, setNoticias] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Agregar timestamp para evitar caché del navegador
    const url = `https://admin.turnerecuador.org/wp-json/wp/v2/noticias?_embed&t=${Date.now()}`;
    
    fetch(url)
      .then(res => {
        if (!res.ok) throw new Error('Error al cargar noticias');
        return res.json();
      })
      .then(data => {
        console.log('Datos de la API:', data);
        setNoticias(Array.isArray(data) ? data : []);
        setLoading(false);
      })
      .catch(err => {
        console.error('Error al cargar noticias:', err);
        setError(err.message);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="inline-block animate-spin rounded-full h-12 w-12 border-b-2 border-primary-600"></div>
          <p className="mt-4 text-gray-600">Cargando noticias...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <p className="text-red-600">Error: {error}</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 via-purple-50 to-indigo-50 py-16">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold mb-4 bg-gradient-to-r from-pink-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent">
            Noticias y Actualizaciones
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Mantente informado sobre las últimas novedades de FEPAST
          </p>
        </div>

        {/* Lista de Noticias */}
        {noticias.length === 0 ? (
          <div className="text-center py-12">
            <p className="text-gray-600 text-lg">No hay noticias publicadas aún.</p>
          </div>
        ) : (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {noticias.map(noticia => {
              // Validar que tenga los campos necesarios
              if (!noticia || !noticia.title || !noticia.slug) {
                console.warn('Noticia inválida:', noticia);
                return null;
              }

              // Obtener imagen destacada
              const imagenDestacada = noticia._embedded?.['wp:featuredmedia']?.[0]?.source_url;
              
              // Formatear fecha
              const fecha = noticia.date ? new Date(noticia.date).toLocaleDateString('es-ES', {
                year: 'numeric',
                month: 'long',
                day: 'numeric'
              }) : '';

              // Obtener título y excerpt de forma segura
              const titulo = noticia.title?.rendered || 'Sin título';
              const resumen = noticia.excerpt?.rendered || '<p>Sin descripción</p>';

              return (
                <article key={noticia.id || Math.random()} className="card-hover bg-white rounded-xl overflow-hidden shadow-lg">
                  {/* Imagen */}
                  {imagenDestacada && (
                    <div className="h-48 overflow-hidden">
                      <img 
                        src={imagenDestacada} 
                        alt={titulo}
                        className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
                      />
                    </div>
                  )}
                  
                  {/* Contenido */}
                  <div className="p-6">
                    {/* Fecha */}
                    {fecha && (
                      <div className="flex items-center text-sm text-gray-500 mb-3">
                        <Calendar className="w-4 h-4 mr-2" />
                        <span>{fecha}</span>
                      </div>
                    )}

                    {/* Título */}
                    <h2 className="text-2xl font-bold mb-3 text-gray-800 hover:text-primary-600 transition">
                      <Link to={`/noticias/${noticia.slug}`}>
                        <span dangerouslySetInnerHTML={{ __html: titulo }} />
                      </Link>
                    </h2>

                    {/* Excerpt */}
                    <div 
                      className="text-gray-600 mb-4 line-clamp-3"
                      dangerouslySetInnerHTML={{ __html: resumen }}
                    />

                    {/* Leer más */}
                    <Link 
                      to={`/noticias/${noticia.slug}`}
                      className="inline-flex items-center text-primary-600 hover:text-primary-700 font-semibold group"
                    >
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
  );
}

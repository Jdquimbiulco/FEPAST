import { useState, useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { Calendar, ArrowLeft, Share2 } from 'lucide-react';

export default function NoticiaDetalle() {
  const { slug } = useParams();
  const navigate = useNavigate();
  const [noticia, setNoticia] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Agregar timestamp para evitar caché del navegador
    const url = `https://admin.turnerecuador.org/wp-json/wp/v2/noticias?slug=${slug}&_embed&t=${Date.now()}`;
    
    fetch(url)
      .then(res => {
        if (!res.ok) throw new Error('Error al cargar la noticia');
        return res.json();
      })
      .then(data => {
        if (data.length === 0) {
          setError('Noticia no encontrada');
        } else {
          setNoticia(data[0]);
        }
        setLoading(false);
      })
      .catch(err => {
        setError(err.message);
        setLoading(false);
      });
  }, [slug]);

  const compartir = () => {
    if (navigator.share) {
      navigator.share({
        title: noticia?.title.rendered,
        url: window.location.href
      });
    } else {
      navigator.clipboard.writeText(window.location.href);
      alert('Enlace copiado al portapapeles');
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="inline-block animate-spin rounded-full h-12 w-12 border-b-2 border-primary-600"></div>
          <p className="mt-4 text-gray-600">Cargando noticia...</p>
        </div>
      </div>
    );
  }

  if (error || !noticia) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <p className="text-red-600 text-xl mb-4">{error || 'Noticia no encontrada'}</p>
          <Link to="/noticias" className="btn-primary">
            Volver a Noticias
          </Link>
        </div>
      </div>
    );
  }

  const imagenDestacada = noticia._embedded?.['wp:featuredmedia']?.[0]?.source_url;
  const fecha = new Date(noticia.date).toLocaleDateString('es-ES', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 via-purple-50 to-indigo-50 py-16">
      <article className="container mx-auto px-4 max-w-4xl">
        {/* Botón volver */}
        <button
          onClick={() => navigate('/noticias')}
          className="inline-flex items-center text-gray-600 hover:text-primary-600 mb-8 group"
        >
          <ArrowLeft className="w-5 h-5 mr-2 group-hover:-translate-x-1 transition-transform" />
          Volver a Noticias
        </button>

        {/* Contenido de la noticia */}
        <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
          {/* Imagen destacada */}
          {imagenDestacada && (
            <div className="w-full h-96 overflow-hidden">
              <img 
                src={imagenDestacada} 
                alt={noticia.title.rendered}
                className="w-full h-full object-cover"
              />
            </div>
          )}

          <div className="p-8 md:p-12">
            {/* Fecha y compartir */}
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center text-gray-500">
                <Calendar className="w-5 h-5 mr-2" />
                <span>{fecha}</span>
              </div>
              <button
                onClick={compartir}
                className="flex items-center text-primary-600 hover:text-primary-700"
              >
                <Share2 className="w-5 h-5 mr-2" />
                Compartir
              </button>
            </div>

            {/* Título */}
            <h1 
              className="text-4xl md:text-5xl font-bold mb-8 text-gray-900"
              dangerouslySetInnerHTML={{ __html: noticia.title.rendered }}
            />

            {/* Contenido */}
            <div 
              className="prose prose-lg max-w-none
                prose-headings:text-gray-900 
                prose-p:text-gray-700 
                prose-a:text-primary-600 
                prose-strong:text-gray-900
                prose-img:rounded-lg
                prose-img:shadow-lg"
              dangerouslySetInnerHTML={{ __html: noticia.content.rendered }}
            />
          </div>
        </div>

        {/* Botón volver al final */}
        <div className="text-center mt-12">
          <Link to="/noticias" className="btn-primary">
            Ver todas las noticias
          </Link>
        </div>
      </article>
    </div>
  );
}

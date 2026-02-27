import React, { useEffect, useState } from 'react'
// Transparencia.jsx
// Página de transparencia de FEPAST
// Muestra documentos públicos, principios institucionales y contacto.
// Documentos se obtienen desde WordPress vía API REST, incluyendo archivos adjuntos y campos ACF.
import { FileText, Download, Eye, CheckCircle } from 'lucide-react'

const Transparencia = () => {
    // Estado para documentos públicos
  const [documentos, setDocumentos] = useState([]);
    // Estado para carga y errores
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [mediaMap, setMediaMap] = useState({});
  // mediaMap: Mapea cada documento a sus archivos adjuntos (media)

  useEffect(() => {
      // Fetch principal: obtiene documentos desde WordPress
    fetch(`https://admin.turnerecuador.org/wp-json/wp/v2/documentos?_embed&per_page=20&orderby=date&order=desc&_=${Date.now()}`)
      .then(res => {
          // Manejo de errores HTTP
        if (!res.ok) throw new Error('Error al cargar documentos');
        return res.json();
      })
      .then(async data => {
          // data: array de documentos
        setDocumentos(Array.isArray(data) ? data : []);
          // Para cada documento, obtener archivos media adjuntos
        // Obtener archivos adjuntos para cada documento
        const mediaMapTemp = {};
        await Promise.all((Array.isArray(data) ? data : []).map(async (doc) => {
          const mediaRes = await fetch(`https://admin.turnerecuador.org/wp-json/wp/v2/media?parent=${doc.id}`);
          if (mediaRes.ok) {
            const mediaData = await mediaRes.json();
            if (Array.isArray(mediaData) && mediaData.length > 0) {
              mediaMapTemp[doc.id] = mediaData;
            }
          }
        }));
        setMediaMap(mediaMapTemp);
        setLoading(false);
      })
      .catch(err => {
          // Manejo de errores de red/API
        setError(err.message);
        setLoading(false);
      });
  }, []);

  const principios = [
      // Principios institucionales FEPAST
    {
      icon: Eye,
      titulo: "Transparencia",
      descripcion: "Compartimos información clara y accesible sobre nuestras actividades y finanzas."
    },
    {
      icon: CheckCircle,
      titulo: "Rendición de Cuentas",
      descripcion: "Asumimos responsabilidad por nuestras acciones y resultados."
    },
    {
      icon: FileText,
      titulo: "Integridad",
      descripcion: "Actuamos con honestidad y ética en todas nuestras operaciones."
    }
  ]

  return (
      // Render principal: hero, principios, documentos y contacto
    <div>
      {/* Hero Section */}
      <section className="py-20" style={{backgroundColor: '#CF6D9B'}}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-black text-white mb-6">
            Transparencia
          </h1>
          <p className="text-xl md:text-2xl text-white max-w-3xl mx-auto">
            En FEPAST trabajamos con transparencia y rendición de cuentas. 
            Aquí encontrarás toda la información sobre nuestra gestión.
          </p>
        </div>
      </section>

      {/* Principios */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-black text-center mb-12" style={{color: '#821C53'}}>
            Nuestros Principios
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {principios.map((principio, index) => {
              const IconComponent = principio.icon
              return (
                <div key={index} className="text-center p-8 rounded-2xl" style={{backgroundColor: '#fdf8fb'}}>
                  <div 
                    className="w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6"
                    style={{backgroundColor: '#A43570'}}
                  >
                    <IconComponent className="w-10 h-10 text-white" />
                  </div>
                  <h3 className="text-2xl font-black mb-4" style={{color: '#821C53'}}>
                    {principio.titulo}
                  </h3>
                  <p className="text-lg text-gray-700">
                    {principio.descripcion}
                  </p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Documentos */}
        {/* Sección de documentos públicos. Muestra lista de documentos y archivos adjuntos/ACF. */}
      <section className="py-16" style={{backgroundColor: '#F0C9DB'}}>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-black text-center mb-12" style={{color: '#821C53'}}>
            Documentos Públicos
          </h2>
          {loading ? (
            <div className="text-center py-12">
              <div className="inline-block animate-spin rounded-full h-12 w-12 border-b-2 border-[#A43570]"></div>
              <p className="mt-4 text-gray-600">Cargando documentos...</p>
            </div>
          ) : error ? (
            <div className="text-center py-12">
              <p className="text-red-600">Error: {error}</p>
            </div>
          ) : documentos.length === 0 ? (
            <div className="text-center py-12">
              <p className="text-gray-600 text-lg">No hay documentos publicados aún.</p>
            </div>
          ) : (
            <div className="bg-white rounded-2xl shadow-lg p-0 overflow-hidden">
              <ul className="divide-y divide-[#F0C9DB]">
                {documentos.map((doc, index) => {
                                                      // Render de cada documento
                                    // Log para depuración
                                    console.log('Documento:', doc);
                                    if (doc.acf) console.log('ACF:', doc.acf);
                  const titulo = doc.title?.rendered || 'Documento sin título';
                  const descripcion = doc.excerpt?.rendered || doc.content?.rendered || '';
                  const fecha = doc.date ? new Date(doc.date).toLocaleDateString('es-ES', { year: 'numeric', month: 'long', day: 'numeric' }) : '';
                  const media = mediaMap[doc.id] || [];
                                    // media: archivos adjuntos por media
                                    // doc.acf.archivo_publico: archivos públicos por ACF
                  return (
                    <li key={index} className="p-6 hover:bg-[#fdf8fb] transition-colors">
                      <div className="flex items-center gap-3 mb-1">
                        <FileText className="w-5 h-5 text-[#A43570]" />
                        <span className="font-bold text-lg text-[#A43570]" dangerouslySetInnerHTML={{ __html: titulo }} />
                        <span className="ml-auto text-xs text-gray-500">{fecha}</span>
                      </div>
                      {descripcion && (
                        <div className="text-gray-700 text-sm mb-2" dangerouslySetInnerHTML={{ __html: descripcion }} />
                      )}
                      {media.length > 0 ? (
                        <ul className="flex flex-col gap-2">
                          {/* Archivos adjuntos por media */}
                          {media.map((file, i) => (
                                                      // Render de archivo adjunto (media)
                            <li key={i} className="flex items-center justify-between border border-[#F0C9DB] rounded-lg px-4 py-2">
                              <span className="font-medium text-gray-900">{file.title?.rendered || file.slug}</span>
                              <span className="text-xs text-gray-600 mr-4">{file.media_details?.filesize ? `${Math.round(file.media_details.filesize/1024)} KB` : ''}</span>
                              <a 
                                href={file.source_url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center space-x-2 px-3 py-1 rounded-lg font-semibold text-white text-sm transition-colors"
                                style={{backgroundColor: '#A43570'}}
                              >
                                <Download className="w-4 h-4" />
                                <span>Descargar</span>
                              </a>
                            </li>
                          ))}
                          {/* Archivos públicos por ACF */}
                          {Array.isArray(doc.acf?.archivo_publico) && doc.acf.archivo_publico.length > 0 && doc.acf.archivo_publico.map((acfFile, j) => (
                                                      // Render de archivo público por ACF
                            <li key={"acf-"+j} className="flex items-center justify-between border border-[#F0C9DB] rounded-lg px-4 py-2">
                              <span className="font-medium text-gray-900">{acfFile.title || acfFile.filename || acfFile.url}</span>
                              <span className="text-xs text-gray-600 mr-4">{acfFile.filesize ? `${Math.round(acfFile.filesize/1024)} KB` : ''}</span>
                              <a 
                                href={acfFile.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center space-x-2 px-3 py-1 rounded-lg font-semibold text-white text-sm transition-colors"
                                style={{backgroundColor: '#A43570'}}
                              >
                                <Download className="w-4 h-4" />
                                <span>Descargar</span>
                              </a>
                            </li>
                          ))}
                        </ul>
                      )
                      /* Si no hay media ni archivos públicos ACF */
                      : (
                        <div className="text-gray-500 italic text-xs">No hay archivos adjuntos.</div>
                                              {/* Si no hay archivos adjuntos ni ACF */}
                      )}
                    </li>
                  );
                })}
              </ul>
            </div>
          )}
        </div>
      </section>

      {/* Contacto para Transparencia */}
      <section className="py-16 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-black mb-6" style={{color: '#821C53'}}>
            ¿Necesitas más información?
          </h2>
          <p className="text-lg text-gray-700 mb-8">
            Si tienes preguntas sobre nuestra gestión o necesitas información adicional, 
            no dudes en contactarnos. Estamos comprometidos con la transparencia total.
          </p>
          <a 
            href="/contacto"
            className="inline-block px-8 py-4 rounded-lg text-white font-bold text-lg transition-transform hover:scale-105"
            style={{backgroundColor: '#A43570'}}
          >
            Contactar
          </a>
        </div>
      </section>
    </div>
  )
}

export default Transparencia

import { ImageWithFallback } from "./figma/ImageWithFallback";

export function GallerySection() {
  const images = [
    {
      url: "https://images.unsplash.com/photo-1579154204449-47c454770447?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtZWRpY2FsJTIwZ2VuZXRpY3MlMjByZXNlYXJjaHxlbnwxfHx8fDE3NTcyOTk4MzJ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      alt: "Investigación médica genética",
      title: "Investigación Genética",
      description: "Avances en el estudio del Síndrome de Turner"
    },
    {
      url: "https://images.unsplash.com/photo-1584432810601-6c7f27d2362b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmZW1hbGUlMjBkb2N0b3IlMjBoZWFsdGhjYXJlfGVufDF8fHx8MTc1NzI5OTg1MHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      alt: "Doctora especialista en salud femenina",
      title: "Atención Especializada",
      description: "Profesionales dedicados al cuidado integral"
    },
    {
      url: "https://images.unsplash.com/photo-1556159916-26bf2ce06da9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdXBwb3J0JTIwZ3JvdXAlMjB3b21lbnxlbnwxfHx8fDE3NTcyOTk5MTd8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      alt: "Grupo de apoyo de mujeres",
      title: "Grupos de Apoyo",
      description: "Comunidad y soporte entre familias"
    },
    {
      url: "https://images.unsplash.com/photo-1631217872822-1c2546d6b864?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtZWRpY2FsJTIwY29uc3VsdGF0aW9uJTIwZG9jdG9yfGVufDF8fHx8MTc1NzIwMTc4OXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      alt: "Consulta médica especializada",
      title: "Consultas Médicas",
      description: "Seguimiento personalizado y continuo"
    },
    {
      url: "https://images.unsplash.com/photo-1593231945511-9e141a85b017?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3b21lbiUyMGhlYWx0aCUyMGF3YXJlbmVzc3xlbnwxfHx8fDE3NTcyOTk5NDF8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      alt: "Concienciación sobre salud femenina",
      title: "Concienciación",
      description: "Educación y awareness sobre el síndrome"
    },
    {
      url: "https://images.unsplash.com/photo-1723649379227-498e2ebf25c6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoYXBweSUyMG1lZGljYWwlMjB0ZWFtfGVufDF8fHx8MTc1NzI5OTg1NHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      alt: "Equipo médico especializado",
      title: "Equipo Multidisciplinario",
      description: "Profesionales trabajando juntos"
    }
  ];

  return (
    <section id="galeria" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl mb-4">Galería</h2>
          <p className="text-muted-foreground max-w-3xl mx-auto">
            Conoce más sobre nuestro trabajo, equipo y la comunidad que apoyamos 
            en la lucha contra el Síndrome de Turner.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {images.map((image, index) => (
            <div key={index} className="group relative overflow-hidden rounded-xl shadow-lg hover:shadow-xl transition-all duration-300">
              <div className="aspect-[4/3] overflow-hidden">
                <ImageWithFallback
                  src={image.url}
                  alt={image.alt}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                  <h3 className="text-xl mb-2">{image.title}</h3>
                  <p className="text-sm opacity-90">{image.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="bg-muted/50 rounded-2xl p-8 max-w-4xl mx-auto">
            <h3 className="text-2xl mb-4">¿Tienes una Historia que Compartir?</h3>
            <p className="text-muted-foreground mb-6">
              Nos encantaría conocer tu experiencia y la de tu familia. Compartir historias 
              ayuda a crear conciencia y brinda esperanza a otras familias.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button 
                className="px-6 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors"
                onClick={() => document.getElementById('contactanos')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Comparte tu Historia
              </button>
              <button 
                className="px-6 py-3 border border-border rounded-lg hover:bg-muted transition-colors"
                onClick={() => document.getElementById('contactanos')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Enviar Foto
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
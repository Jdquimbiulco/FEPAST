import { ImageWithFallback } from "./figma/ImageWithFallback";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from "./ui/carousel";
import { useEffect, useState } from "react";
import { Dialog, DialogContent } from "./ui/dialog";

export function GallerySection() {
  const images = [
    {
      url: "https://images.unsplash.com/photo-1579154204449-47c454770447?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtZWRpY2FsJTIwZ2VuZXRpY3MlMjByZXNlYXJjaHxlbnwxfHx8fDE3NTcyOTk4MzJ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      alt: "Investigación médica genética",
      title: "Investigación Genética",
      description: "Avances en el estudio del Síndrome de Turner"
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
      url: "https://images.unsplash.com/photo-1723649379227-498e2ebf25c6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoYXBweSUyMG1lZGljYWwlMjB0ZWFtfGVufDF8fHx8MTc1NzI5OTg1NHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      alt: "Equipo médico especializado",
      title: "Equipo Multidisciplinario",
      description: "Profesionales trabajando juntos"
    }
  ];

  const [selectedImage, setSelectedImage] = useState<typeof images[0] | null>(null);
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!api) {
      return;
    }

    setCount(api.scrollSnapList().length);
    setCurrent(api.selectedScrollSnap() + 1);

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap() + 1);
    });
  }, [api]);

  return (
    <section id="galeria" className="py-20" style={{backgroundColor: '#CF6D9B'}}>
      <div className="container mx-auto px-4"> {/* Carrusel ocupa toda la fila */}
        <div className="w-full mx-auto px-4 max-w-full mt-2"> {/* Ajusté el ancho para que ocupe toda la fila */}
          <Carousel
            setApi={setApi}
            opts={{
              align: "center",
              loop: true,
              slidesToScroll: 1,
            }}
            className="w-full"
          >
            <CarouselContent className="">
              {images.map((image, index) => (
                <CarouselItem key={index} className="flex justify-center items-center basis-full">
                  <div 
                    className="group relative overflow-hidden rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer w-full h-14 md:h-18 lg:h-20 flex items-center justify-center"
                    onClick={() => setSelectedImage(image)}
                  >
                    <ImageWithFallback
                      src={image.url}
                      alt={image.alt}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
                        <h3 className="text-lg font-semibold mb-1">{image.title}</h3>
                        <p className="text-sm opacity-90 line-clamp-2">{image.description}</p>
                      </div>
                    </div>
                    <div className="absolute top-3 right-3 bg-black/50 rounded-full p-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <svg 
                        className="w-4 h-4 text-white" 
                        fill="none" 
                        stroke="currentColor" 
                        viewBox="0 0 24 24"
                      >
                        <path 
                          strokeLinecap="round" 
                          strokeLinejoin="round" 
                          strokeWidth={2} 
                          d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" 
                        />
                      </svg>
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious 
              className="border-white/20 bg-white/10 text-white hover:bg-white/20 hover:text-white -left-8 md:-left-12 backdrop-blur-sm" 
            />
            <CarouselNext 
              className="border-white/20 bg-white/10 text-white hover:bg-white/20 hover:text-white -right-8 md:-right-12 backdrop-blur-sm" 
            />
          </Carousel>
          <div className="flex justify-center mt-6 space-x-2"> {/* Indicadores del carrusel */}
            {Array.from({ length: count }).map((_, index) => (
              <button
                key={index}
                onClick={() => api?.scrollTo(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index + 1 === current 
                    ? 'bg-white scale-110' 
                    : 'bg-white/40 hover:bg-white/80'
                }`}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Modal para imagen ampliada */}
      <Dialog open={!!selectedImage} onOpenChange={(open) => !open && setSelectedImage(null)}>
        <DialogContent className="max-w-4xl w-full p-0 bg-transparent border-none">
          {selectedImage && (
            <div className="relative bg-white rounded-lg overflow-hidden">
              <button
                onClick={() => setSelectedImage(null)}
                className="absolute top-4 right-4 z-10 bg-black/50 hover:bg-black/70 text-white rounded-full p-2 transition-colors"
              >
                <svg 
                  className="w-6 h-6" 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    strokeWidth={2} 
                    d="M6 18L18 6M6 6l12 12" 
                  />
                </svg>
              </button>
              
              <div className="relative">
                <ImageWithFallback
                  src={selectedImage.url}
                  alt={selectedImage.alt}
                  className="w-full max-h-[80vh] object-contain"
                />
                
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6 text-white">
                  <h3 className="text-2xl font-bold mb-2">{selectedImage.title}</h3>
                  <p className="text-lg opacity-90">{selectedImage.description}</p>
                </div>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
}
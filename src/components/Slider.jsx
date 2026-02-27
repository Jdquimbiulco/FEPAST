// Slider.jsx
// Componente de slider/carrousel
// Muestra imágenes destacadas en la página principal.
import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Slider() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      image: '/images/slider/Slide1.jfif',
      alt: 'FEPAST - Fundación Ecuatoriana Síndrome de Turner',
      title: 'Apoyamos a niñas y mujeres con Síndrome de Turner',
      buttonText: 'Conoce Más',
      buttonLink: '/quienes-somos'
    },
    {
      image: '/images/slider/Slide2.png',
      alt: 'FEPAST - Apoyo y comunidad',
      isClickable: true,
      buttonLink: '/acerca'
    },
    {
      image: '/images/slider/Slide3.jpg',
      alt: 'FEPAST - Educación y recursos',
      title: 'Juntos por una mejor calidad de vida para estas niñas y mujeres',
      smallTitle: true,
      buttonText: 'Quiero ayudar',
      buttonLink: '/contacto'
    }
  ];

  // Auto-avanzar cada 8 segundos
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 8000);

    return () => clearInterval(interval);
  }, [slides.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  return (
    <div className="relative w-full h-[500px] md:h-[600px] overflow-hidden group">
      {/* Slides */}
      <div className="relative h-full">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-700 ${
              index === currentSlide ? 'opacity-100' : 'opacity-0'
            }`}
          >
            {/* Imagen */}
            <img
              src={slide.image}
              alt={slide.alt}
              className="w-full h-full object-cover"
            />
            
            {/* Overlay oscuro para mejor legibilidad */}
            <div className="absolute inset-0 bg-black/20"></div>
            
            {/* Si el slide es clickable, hacer toda la imagen un link */}
            {slide.isClickable ? (
              <Link 
                to={slide.buttonLink}
                title="Click para conocer sobre el Síndrome de Turner"
                className="absolute inset-0 z-10 cursor-pointer group/slide"
              >
                <div className="absolute inset-0 bg-black/0 group-hover/slide:bg-black/10 transition-colors duration-300"></div>
              </Link>
            ) : (
              /* Contenido del slide con texto y botones */
              <div className="absolute inset-0 z-10 flex items-start justify-start px-8 md:px-16 lg:px-24 pt-20 md:pt-28 pointer-events-none">
                <div className="max-w-2xl text-white pointer-events-auto">
                  {slide.title && (
                    <h2 className={`font-black mb-6 leading-tight drop-shadow-lg ${
                      slide.smallTitle 
                        ? 'text-3xl md:text-4xl lg:text-5xl' 
                        : 'text-4xl md:text-5xl lg:text-6xl'
                    }`}>
                      {slide.title}
                    </h2>
                  )}
                  
                  {slide.description && (
                    <p className="text-xl md:text-2xl mb-8 font-medium drop-shadow-lg">
                      {slide.description}
                    </p>
                  )}
                  
                  {slide.buttonText && (
                    <Link 
                      to={slide.buttonLink}
                      style={{backgroundColor: '#A43570'}}
                      className="inline-block text-white px-8 py-4 rounded-full font-bold text-lg shadow-lg hover:opacity-90 transition-all duration-300 hover:scale-105"
                    >
                      {slide.buttonText}
                    </Link>
                  )}
                </div>
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Botones de navegación */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 z-30 bg-white/80 hover:bg-white text-gray-800 rounded-full p-3 shadow-lg transition-all duration-300 opacity-0 group-hover:opacity-100"
        aria-label="Slide anterior"
      >
        <ChevronLeft className="w-6 h-6" />
      </button>

      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 z-30 bg-white/80 hover:bg-white text-gray-800 rounded-full p-3 shadow-lg transition-all duration-300 opacity-0 group-hover:opacity-100"
        aria-label="Slide siguiente"
      >
        <ChevronRight className="w-6 h-6" />
      </button>

      {/* Indicadores */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-30 flex gap-3">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentSlide
                ? 'bg-white w-8'
                : 'bg-white/60 hover:bg-white/80'
            }`}
            aria-label={`Ir al slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
}

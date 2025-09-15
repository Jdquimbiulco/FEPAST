import { Button } from "./ui/button";
import { ImageWithFallback } from "./figma/ImageWithFallback";

export function HeroSection() {
  return (
    <section id="inicio" className="min-h-screen flex items-center" style={{background: 'linear-gradient(135deg, #F0C9DB 0%, #CF6D9B 50%, #A43570 100%)'}}>
      <div className="container mx-auto px-4 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h1 className="text-4xl md:text-6xl font-bold mb-6" style={{color: '#821C53'}}>
              Síndrome de Turner
            </h1>
            <p className="text-xl max-w-lg text-white/90 font-medium">
              Información completa, apoyo y recursos para pacientes, familias y profesionales de la salud sobre el síndrome de Turner.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                size="lg" 
                onClick={() => document.getElementById('informacion')?.scrollIntoView({ behavior: 'smooth' })}
                className="bg-white text-primary hover:bg-gray-100 font-semibold"
              >
                Conoce Más
              </Button>
              <Button 
                variant="outline" 
                size="lg" 
                onClick={() => document.getElementById('contactanos')?.scrollIntoView({ behavior: 'smooth' })}
                className="border-white text-white hover:bg-white/10 font-semibold"
              >
                Obtener Ayuda
              </Button>
            </div>
          </div>
          
          <div className="relative">
            <div className="w-full h-96 rounded-2xl overflow-hidden shadow-2xl">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1681911046068-79bd605f8663?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtZWRpY2FsJTIwZ2VuZXRpY3MlMjBoZWFsdGhjYXJlfGVufDF8fHx8MTc1NzI5OTY5OXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Investigación médica genética"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
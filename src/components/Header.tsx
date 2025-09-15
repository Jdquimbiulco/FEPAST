import { Button } from "./ui/button";

export function Header() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="fixed top-0 w-full backdrop-blur-sm border-b z-50" style={{backgroundColor: 'rgba(240, 201, 219, 0.95)', borderColor: '#CF6D9B'}}>
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 rounded-full flex items-center justify-center" style={{backgroundColor: '#A43570'}}>
              <span className="text-white font-semibold">ST</span>
            </div>
            <span className="font-semibold text-lg" style={{color: '#821C53'}}>Síndrome de Turner</span>
          </div>
          
          <nav className="hidden md:flex space-x-8">
            <Button 
              variant="ghost" 
              onClick={() => scrollToSection('inicio')}
              className="font-medium transition-colors"
              style={{color: '#A43570'}}
              onMouseEnter={(e) => e.target.style.color = '#821C53'}
              onMouseLeave={(e) => e.target.style.color = '#A43570'}
            >
              Inicio
            </Button>
            <Button 
              variant="ghost" 
              onClick={() => scrollToSection('quienes-somos')}
              className="font-medium transition-colors"
              style={{color: '#A43570'}}
              onMouseEnter={(e) => e.target.style.color = '#821C53'}
              onMouseLeave={(e) => e.target.style.color = '#A43570'}
            >
              Quienes Somos
            </Button>
            <Button 
              variant="ghost" 
              onClick={() => scrollToSection('informacion')}
              className="font-medium transition-colors"
              style={{color: '#A43570'}}
              onMouseEnter={(e) => e.target.style.color = '#821C53'}
              onMouseLeave={(e) => e.target.style.color = '#A43570'}
            >
              Información
            </Button>
            <Button 
              variant="ghost" 
              onClick={() => scrollToSection('galeria')}
              className="font-medium transition-colors"
              style={{color: '#A43570'}}
              onMouseEnter={(e) => e.target.style.color = '#821C53'}
              onMouseLeave={(e) => e.target.style.color = '#A43570'}
            >
              Galería
            </Button>
            <Button 
              variant="ghost" 
              onClick={() => scrollToSection('contactanos')}
              className="font-medium transition-colors"
              style={{color: '#A43570'}}
              onMouseEnter={(e) => e.target.style.color = '#821C53'}
              onMouseLeave={(e) => e.target.style.color = '#A43570'}
            >
              Contáctanos
            </Button>
          </nav>

          <div className="md:hidden">
            <Button variant="ghost" size="sm">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
}
import { Button } from "./ui/button";

export function Header() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="fixed top-0 w-full bg-background/90 backdrop-blur-sm border-b border-border z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center">
              <span className="text-primary-foreground font-semibold">ST</span>
            </div>
            <span className="font-semibold text-lg">Síndrome de Turner</span>
          </div>
          
          <nav className="hidden md:flex space-x-8">
            <Button 
              variant="ghost" 
              onClick={() => scrollToSection('inicio')}
              className="hover:text-primary"
            >
              Inicio
            </Button>
            <Button 
              variant="ghost" 
              onClick={() => scrollToSection('quienes-somos')}
              className="hover:text-primary"
            >
              Quienes Somos
            </Button>
            <Button 
              variant="ghost" 
              onClick={() => scrollToSection('informacion')}
              className="hover:text-primary"
            >
              Información
            </Button>
            <Button 
              variant="ghost" 
              onClick={() => scrollToSection('galeria')}
              className="hover:text-primary"
            >
              Galería
            </Button>
            <Button 
              variant="ghost" 
              onClick={() => scrollToSection('contactanos')}
              className="hover:text-primary"
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
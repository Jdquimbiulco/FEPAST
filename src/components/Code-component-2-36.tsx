export function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-primary-foreground text-primary rounded-full flex items-center justify-center">
                <span className="font-semibold">ST</span>
              </div>
              <span className="font-semibold text-lg">Síndrome de Turner</span>
            </div>
            <p className="text-primary-foreground/80 text-sm">
              Brindando información, apoyo y recursos para pacientes, 
              familias y profesionales de la salud.
            </p>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Información</h3>
            <ul className="space-y-2 text-sm text-primary-foreground/80">
              <li><a href="#informacion" className="hover:text-primary-foreground transition-colors">¿Qué es?</a></li>
              <li><a href="#informacion" className="hover:text-primary-foreground transition-colors">Síntomas</a></li>
              <li><a href="#informacion" className="hover:text-primary-foreground transition-colors">Diagnóstico</a></li>
              <li><a href="#informacion" className="hover:text-primary-foreground transition-colors">Tratamiento</a></li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Recursos</h3>
            <ul className="space-y-2 text-sm text-primary-foreground/80">
              <li><a href="#galeria" className="hover:text-primary-foreground transition-colors">Galería</a></li>
              <li><a href="#quienes-somos" className="hover:text-primary-foreground transition-colors">Quiénes Somos</a></li>
              <li><a href="#contactanos" className="hover:text-primary-foreground transition-colors">Apoyo</a></li>
              <li><a href="#contactanos" className="hover:text-primary-foreground transition-colors">Línea de Ayuda</a></li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Contacto</h3>
            <ul className="space-y-2 text-sm text-primary-foreground/80">
              <li>info@sindromededturner.org</li>
              <li>+52 55 1234 5678</li>
              <li>800-TURNER-1</li>
              <li>Av. Universidad 123, CDMX</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-sm text-primary-foreground/80 mb-4 md:mb-0">
              © 2024 Síndrome de Turner. Todos los derechos reservados.
            </div>
            
            <div className="flex space-x-6 text-sm text-primary-foreground/80">
              <a href="#" className="hover:text-primary-foreground transition-colors">
                Política de Privacidad
              </a>
              <a href="#" className="hover:text-primary-foreground transition-colors">
                Términos de Uso
              </a>
              <a href="#" className="hover:text-primary-foreground transition-colors">
                Aviso Legal
              </a>
            </div>
          </div>
          
          <div className="mt-4 text-center">
            <p className="text-xs text-primary-foreground/60">
              Esta página web es solo para fines informativos y no sustituye el consejo médico profesional. 
              Siempre consulte a un profesional de la salud para el diagnóstico y tratamiento.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
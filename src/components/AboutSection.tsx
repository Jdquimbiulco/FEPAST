import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { ImageWithFallback } from "./figma/ImageWithFallback";

export function AboutSection() {
  return (
    <section id="quienes-somos" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl mb-4">Quiénes Somos</h2>
          <p className="text-muted-foreground max-w-3xl mx-auto">
            Somos una organización dedicada a brindar información, apoyo y recursos sobre el 
            Síndrome de Turner para pacientes, familias y profesionales de la salud.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <h3 className="text-2xl mb-6">Nuestra Misión</h3>
            <p className="text-muted-foreground mb-6">
              Proporcionar información precisa y actualizada sobre el Síndrome de Turner, 
              conectar a familias con recursos especializados y promover la conciencia 
              sobre esta condición genética para mejorar la calidad de vida de quienes 
              la padecen.
            </p>
            <ul className="space-y-3 text-muted-foreground">
              <li className="flex items-start">
                <span className="text-primary mr-2">•</span>
                Educación médica especializada
              </li>
              <li className="flex items-start">
                <span className="text-primary mr-2">•</span>
                Apoyo emocional y psicológico
              </li>
              <li className="flex items-start">
                <span className="text-primary mr-2">•</span>
                Red de contactos profesionales
              </li>
              <li className="flex items-start">
                <span className="text-primary mr-2">•</span>
                Recursos para familias
              </li>
            </ul>
          </div>

          <div className="relative">
            <div className="w-full h-80 rounded-2xl overflow-hidden shadow-lg">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1723649379227-498e2ebf25c6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoYXBweSUyMG1lZGljYWwlMjB0ZWFtfGVufDF8fHx8MTc1NzI5OTg1NHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Equipo médico especializado"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <Card>
            <CardHeader>
              <CardTitle>Experiencia</CardTitle>
              <CardDescription>15+ años en investigación</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                Más de una década de experiencia en el estudio y tratamiento 
                del Síndrome de Turner.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Familias Apoyadas</CardTitle>
              <CardDescription>1000+ familias</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                Hemos brindado apoyo y orientación a más de mil familias 
                en su camino con el Síndrome de Turner.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Red Médica</CardTitle>
              <CardDescription>50+ especialistas</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                Contamos con una amplia red de especialistas en endocrinología, 
                genética y cardiología.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
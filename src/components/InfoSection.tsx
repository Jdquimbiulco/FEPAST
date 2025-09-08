import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs";
import { ImageWithFallback } from "./figma/ImageWithFallback";

export function InfoSection() {
  return (
    <section id="informacion" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl mb-4">Información sobre el Síndrome de Turner</h2>
          <p className="text-muted-foreground max-w-3xl mx-auto">
            El Síndrome de Turner es una condición genética que afecta únicamente a las mujeres, 
            causada por la ausencia completa o parcial de un cromosoma X.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          <div className="relative">
            <div className="w-full h-80 rounded-2xl overflow-hidden shadow-lg">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1681911046064-e663d5192921?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaHJvbW9zb21lJTIwZG5hJTIwbWVkaWNhbHxlbnwxfHx8fDE3NTcyOTk4NTh8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Cromosomas y ADN médico"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          <div>
            <h3 className="text-2xl mb-6">¿Qué es el Síndrome de Turner?</h3>
            <p className="text-muted-foreground mb-6">
              Es una condición cromosómica que se presenta cuando falta uno de los cromosomas X 
              o cuando uno de ellos está incompleto. Afecta aproximadamente a 1 de cada 2,500 
              nacimientos de niñas.
            </p>
            
            <div className="space-y-4">
              <div className="flex items-start">
                <span className="bg-primary/10 text-primary px-2 py-1 rounded-md mr-3 mt-1 text-sm">45,X</span>
                <div>
                  <p className="text-sm">Monosomía completa (45% de casos)</p>
                </div>
              </div>
              <div className="flex items-start">
                <span className="bg-primary/10 text-primary px-2 py-1 rounded-md mr-3 mt-1 text-sm">Mosaico</span>
                <div>
                  <p className="text-sm">Algunas células tienen 45,X y otras 46,XX</p>
                </div>
              </div>
              <div className="flex items-start">
                <span className="bg-primary/10 text-primary px-2 py-1 rounded-md mr-3 mt-1 text-sm">Estructural</span>
                <div>
                  <p className="text-sm">Un cromosoma X está parcialmente ausente</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <Tabs defaultValue="sintomas" className="w-full">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="sintomas">Síntomas</TabsTrigger>
            <TabsTrigger value="diagnostico">Diagnóstico</TabsTrigger>
            <TabsTrigger value="tratamiento">Tratamiento</TabsTrigger>
            <TabsTrigger value="pronostico">Pronóstico</TabsTrigger>
          </TabsList>

          <TabsContent value="sintomas" className="mt-8">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle>Físicos</CardTitle>
                  <CardDescription>Características físicas comunes</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>• Baja estatura</li>
                    <li>• Cuello corto y ancho</li>
                    <li>• Tórax ancho</li>
                    <li>• Edema en manos y pies</li>
                    <li>• Implantación baja del cabello</li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Reproductivos</CardTitle>
                  <CardDescription>Desarrollo sexual</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>• Desarrollo sexual retrasado</li>
                    <li>• Amenorrea primaria</li>
                    <li>• Infertilidad</li>
                    <li>• Ovarios disgenéticos</li>
                    <li>• Falta de caracteres sexuales secundarios</li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Médicos</CardTitle>
                  <CardDescription>Complicaciones asociadas</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>• Problemas cardíacos</li>
                    <li>• Problemas renales</li>
                    <li>• Pérdida auditiva</li>
                    <li>• Problemas oculares</li>
                    <li>• Osteoporosis</li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="diagnostico" className="mt-8">
            <Card>
              <CardContent className="pt-6">
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h3 className="text-xl mb-4">Pruebas Diagnósticas</h3>
                    <ul className="space-y-3 text-muted-foreground">
                      <li>
                        <strong>Cariotipo:</strong> Análisis cromosómico completo para identificar 
                        la ausencia o alteración del cromosoma X.
                      </li>
                      <li>
                        <strong>FISH:</strong> Hibridación fluorescente in situ para detectar 
                        mosaicismo de bajo grado.
                      </li>
                      <li>
                        <strong>Array-CGH:</strong> Análisis de microdeleciones y microduplicaciones 
                        en el cromosoma X.
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-xl mb-4">Detección Prenatal</h3>
                    <ul className="space-y-3 text-muted-foreground">
                      <li>
                        <strong>Ecografía:</strong> Higroma quístico, edema fetal, 
                        malformaciones cardíacas.
                      </li>
                      <li>
                        <strong>Amniocentesis:</strong> Análisis cromosómico del líquido amniótico.
                      </li>
                      <li>
                        <strong>ADN libre:</strong> Detección no invasiva en sangre materna.
                      </li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="tratamiento" className="mt-8">
            <div className="grid md:grid-cols-2 gap-8">
              <Card>
                <CardHeader>
                  <CardTitle>Terapia Hormonal</CardTitle>
                  <CardDescription>Tratamientos hormonales especializados</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>• Hormona del crecimiento para mejorar la estatura</li>
                    <li>• Estrógenos para el desarrollo sexual</li>
                    <li>• Progesterona para la menstruación</li>
                    <li>• Seguimiento endocrinológico regular</li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Cuidados Multidisciplinarios</CardTitle>
                  <CardDescription>Enfoque integral de tratamiento</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>• Cardiología para problemas cardíacos</li>
                    <li>• Nefrología para función renal</li>
                    <li>• Audiología para pérdida auditiva</li>
                    <li>• Psicología para apoyo emocional</li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="pronostico" className="mt-8">
            <Card>
              <CardContent className="pt-6">
                <div className="text-center mb-8">
                  <h3 className="text-2xl mb-4">Esperanza de Vida y Calidad</h3>
                  <p className="text-muted-foreground max-w-2xl mx-auto">
                    Con el tratamiento adecuado y el seguimiento médico regular, las mujeres 
                    con Síndrome de Turner pueden tener una vida plena y saludable.
                  </p>
                </div>
                
                <div className="grid md:grid-cols-3 gap-6">
                  <div className="text-center">
                    <div className="bg-green-100 text-green-700 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                      <span className="text-2xl">95%</span>
                    </div>
                    <h4 className="text-lg mb-2">Supervivencia</h4>
                    <p className="text-sm text-muted-foreground">
                      Con cuidado médico apropiado, la esperanza de vida es similar 
                      a la población general.
                    </p>
                  </div>

                  <div className="text-center">
                    <div className="bg-blue-100 text-blue-700 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                      <span className="text-2xl">85%</span>
                    </div>
                    <h4 className="text-lg mb-2">Calidad de Vida</h4>
                    <p className="text-sm text-muted-foreground">
                      La mayoría desarrolla independencia y puede participar 
                      plenamente en la sociedad.
                    </p>
                  </div>

                  <div className="text-center">
                    <div className="bg-purple-100 text-purple-700 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                      <span className="text-2xl">70%</span>
                    </div>
                    <h4 className="text-lg mb-2">Vida Independiente</h4>
                    <p className="text-sm text-muted-foreground">
                      Pueden vivir de forma independiente, trabajar y formar 
                      relaciones significativas.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
}
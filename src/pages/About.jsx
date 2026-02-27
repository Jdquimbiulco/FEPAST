import React from 'react'
import { Heart, Users, BookOpen, Activity, AlertCircle, CheckCircle, Info, Stethoscope, Syringe, GraduationCap, Ear, Smile, Star, ArrowDown } from 'lucide-react'

const About = () => {
  const symptoms = [
    { icon: <ArrowDown className="w-6 h-6 text-[#A43570] mt-1 flex-shrink-0" />, text: "Baja estatura" },
    { icon: <Smile className="w-6 h-6 text-[#A43570] mt-1 flex-shrink-0" />, text: "Ausencia o desarrollo incompleto de la pubertad" },
    { icon: <Heart className="w-6 h-6 text-[#A43570] mt-1 flex-shrink-0" />, text: "Problemas cardíacos congénitos" },
    { icon: <GraduationCap className="w-6 h-6 text-[#A43570] mt-1 flex-shrink-0" />, text: "Dificultades de aprendizaje específicas" },
    { icon: <Stethoscope className="w-6 h-6 text-[#A43570] mt-1 flex-shrink-0" />, text: "Problemas renales" },
    { icon: <Ear className="w-6 h-6 text-[#A43570] mt-1 flex-shrink-0" />, text: "Pérdida auditiva" },
    { icon: <AlertCircle className="w-6 h-6 text-[#A43570] mt-1 flex-shrink-0" />, text: "Cuello alado (pterygium colli)" },
    { icon: <Star className="w-6 h-6 text-[#A43570] mt-1 flex-shrink-0" />, text: "Línea de implantación del cabello baja" },
  ]

  const treatments = [
    {
      icon: <Syringe className="w-6 h-6 text-white" />, title: "Terapia de Crecimiento", description: "Hormona de crecimiento para mejorar la estatura final"
    },
    {
      icon: <Heart className="w-6 h-6 text-white" />, title: "Terapia Hormonal", description: "Estrógenos para el desarrollo sexual y prevención de osteoporosis"
    },
    {
      icon: <Stethoscope className="w-6 h-6 text-white" />, title: "Seguimiento Cardíaco", description: "Evaluaciones regulares del corazón y sistema cardiovascular"
    },
    {
      icon: <GraduationCap className="w-6 h-6 text-white" />, title: "Apoyo Educativo", description: "Intervenciones específicas para dificultades de aprendizaje"
    },
    {
      icon: <Ear className="w-6 h-6 text-white" />, title: "Evaluación Auditiva", description: "Controles regulares de la audición y tratamiento si es necesario"
    },
    {
      icon: <Smile className="w-6 h-6 text-white" />, title: "Apoyo Psicológico", description: "Counseling para el bienestar emocional y social"
    }
  ]

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[#821C53] via-[#A43570] to-[#CF6D9B] text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Síndrome de Turner
          </h1>
          <p className="text-xl md:text-2xl text-purple-100 max-w-3xl mx-auto">
            Información completa sobre esta condición genética que afecta a 1 de cada 2,500 niñas nacidas vivas
          </p>
        </div>
      </section>

      {/* What is Turner Syndrome */}
      <section className="py-16 bg-[#F0C9DB]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                ¿Qué es el Síndrome de Turner?
              </h2>
              <div className="space-y-4 text-lg text-gray-600">
                <p>
                  El Síndrome de Turner es una condición genética que ocurre cuando uno de los cromosomas X 
                  está completamente o parcialmente ausente. Esta condición afecta únicamente a las mujeres 
                  y puede causar una variedad de problemas médicos y de desarrollo.
                </p>
                <p>
                  Fue descrito por primera vez por el Dr. Henry Turner en 1938 y se estima que afecta a 
                  aproximadamente 1 de cada 2,500 niñas nacidas vivas en todo el mundo.
                </p>
                <p>
                  Con el diagnóstico temprano y el tratamiento adecuado, las mujeres con Síndrome de Turner 
                  pueden llevar vidas plenas y saludables.
                </p>
              </div>
            </div>
            <div className="bg-white/80 rounded-2xl p-8 shadow-md">
              <div className="text-center">
                <div className="w-24 h-24 bg-gradient-to-r from-[#A43570] to-[#CF6D9B] rounded-full flex items-center justify-center mx-auto mb-6">
                  <Activity className="w-12 h-12 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-800 mb-4">Datos Importantes</h3>
                <div className="space-y-3 text-left">
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    <span className="text-gray-700">1 de cada 2,500 niñas</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    <span className="text-gray-700">Condición cromosómica</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    <span className="text-gray-700">Tratable con diagnóstico temprano</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    <span className="text-gray-700">Vida plena posible</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Symptoms Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Signos y Síntomas
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Los síntomas pueden variar ampliamente entre las personas, pero estos son los más comunes
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {symptoms.map((symptom, index) => (
              <div key={index} className="bg-[#F0C9DB] p-6 rounded-lg shadow-md card-hover">
                <div className="flex items-start space-x-3">
                  {symptom.icon}
                  <span className="text-gray-800 font-medium">{symptom.text}</span>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 bg-blue-50 border border-blue-200 rounded-lg p-6">
            <div className="flex items-start space-x-3">
              <Info className="w-6 h-6 text-blue-500 mt-1 flex-shrink-0" />
              <div>
                <h3 className="font-semibold text-blue-900 mb-2">Importante</h3>
                <p className="text-blue-800">
                  No todas las personas con Síndrome de Turner presentan todos estos síntomas. 
                  La severidad y combinación de síntomas puede variar significativamente de una persona a otra. 
                  Es importante consultar con profesionales médicos para un diagnóstico y tratamiento adecuados.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Treatment Section */}
      <section className="py-16 bg-[#F0C9DB]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Tratamientos Disponibles
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Con el tratamiento adecuado, las personas con Síndrome de Turner pueden llevar vidas plenas y saludables
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {treatments.map((treatment, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-lg card-hover">
                <div className="w-12 h-12 bg-gradient-to-r from-[#A43570] to-[#CF6D9B] rounded-lg flex items-center justify-center mb-4">
                  {treatment.icon}
                </div>
                <h3 className="text-xl font-semibold text-[#821C53] mb-3">{treatment.title}</h3>
                <p className="text-gray-600">{treatment.description}</p>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <div className="bg-gradient-to-r from-[#A43570] to-[#CF6D9B] text-white rounded-2xl p-8">
              <h3 className="text-2xl font-bold mb-4">¿Necesitas más información?</h3>
              <p className="text-purple-100 mb-6">
                En FEPAST acompañamos y orientamos a familias y personas con Síndrome de Turner para sobrellevar los desafíos de esta condición. Si necesitas apoyo, información o deseas unirte a nuestra comunidad, puedes contactarnos y te ayudaremos a encontrar recursos, compartir experiencias y sentirte acompañado.
              </p>
              <a href="/contacto" className="bg-white text-[#A43570] px-8 py-3 rounded-lg font-semibold transition-all duration-300 hover:bg-[#F0C9DB] hover:scale-105 inline-block">
                Contactar a FEPAST
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Statistics Section */}
      <section className="py-16 bg-gradient-to-r from-[#CF6D9B] to-[#F0C9DB]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Estadísticas y Datos
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-purple-600 mb-2">1:2,500</div>
              <p className="text-gray-700">Incidencia en niñas recién nacidas</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-pink-600 mb-2">95%</div>
              <p className="text-gray-700">Puede mejorar con tratamiento temprano</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-indigo-600 mb-2">100%</div>
              <p className="text-gray-700">Afecta únicamente a mujeres</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-purple-600 mb-2">15%</div>
              <p className="text-gray-700">Presenta mosaicismo</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default About
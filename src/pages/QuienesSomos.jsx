import React from 'react';
import { Gavel, Heart, Hand, Users } from 'lucide-react';

export default function QuienesSomos() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative text-white overflow-hidden" style={{backgroundColor: '#CF6D9B'}}>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="text-center">
            <h1 className="text-5xl md:text-6xl font-black mb-6">
              Quiénes Somos
            </h1>
            <p className="text-xl md:text-2xl max-w-3xl mx-auto">
              Conoce más sobre nuestra fundación y nuestro compromiso con las personas con Síndrome de Turner
            </p>
          </div>
        </div>
      </section>

      {/* Historia */}
      <section className="py-16 bg-white">
        <div className="bg-[#F0C9DB] rounded-2xl border border-[#CF6D9B] shadow-lg p-8 space-y-6 w-full max-w-7xl mx-auto">
          <h2 className="text-4xl font-black mb-6 text-center text-[#821C53]">UNA HISTORIA DE AMOR</h2>
          <div className="space-y-4">
            <p className="text-lg text-[#821C53] leading-relaxed text-justify">El 22 de mayo de 1994 llegó a este mundo una hermosa niña, sus padres Max Campos y Lily Cazorla deciden llamarla Joselyn. Inicia el camino por mejorar la calidad de vida de Joselyn, con la intención de sembrar grandeza desde esta condición hacia el mundo .... así... <span className="font-semibold">NACE LA FUNDACIÓN ECUATORIANA PARA LA AYUDA AL SÍNDROME DE TURNER FEPAST</span>.</p>
            <p className="text-lg text-[#821C53] leading-relaxed text-justify">En el año 2011, Lilian Alcívar, una líder con síndrome de Turner, continúa este sueño de brindar una mejor calidad de vida a mujeres y niñas que viven con esta condición.</p>
            <hr className="my-4 border-[#CF6D9B]" />
            <p className="text-base text-gray-700 text-justify">FEPAST nace desde una realidad que durante mucho tiempo fue invisibilizada. Surgió del dolor, de la incertidumbre y de la lucha constante de familias que se encontraron solas, sin información suficiente, sin acompañamiento y muchas veces sin respuestas claras del sistema.</p>
            <p className="text-base text-gray-700 text-justify">Lo que al inicio fue una búsqueda individual de orientación y apoyo, paso a paso se transformó en un espacio de encuentro. Personas con historias distintas, pero con una causa común, comenzaron a reconocerse unas a otras, a escucharse y a comprender que unidas podían ser más fuertes. Así, desde la empatía y la necesidad urgente de ser escuchados, nació FEPAST.</p>
            <p className="text-base text-gray-700 text-justify">El camino no ha sido sencillo. FEPAST ha recorrido una ruta marcada por desafíos: la falta de conocimiento sobre esta patología, las barreras en el acceso a la salud, la ausencia de políticas públicas adecuadas y el cansancio emocional de quienes cuidan y acompañan. Sin embargo, cada obstáculo se convirtió en un motor para seguir adelante.</p>
            <p className="text-base text-gray-700 text-justify">Con el tiempo, FEPAST se fue consolidando como una voz colectiva. Se fortaleció a través del trabajo colaborativo, la formación constante, el diálogo con instituciones y la articulación con otras organizaciones. Cada paso dado ha estado guiado por el compromiso de defender derechos, visibilizar realidades y generar conciencia en la sociedad.</p>
            <p className="text-base text-gray-700 text-justify">Hoy, FEPAST representa más que una organización: es una red de apoyo, un espacio de contención y una plataforma de incidencia. Su historia es la prueba de que cuando las experiencias personales se transforman en acción colectiva, es posible abrir caminos, generar cambios y sembrar esperanza.</p>
            <p className="text-base text-gray-700 text-justify">FEPAST continúa avanzando con la convicción de que nadie debe enfrentar su realidad en soledad y de que cada historia merece ser escuchada, respetada y acompañada.</p>
          </div>
        </div>
      </section>

      {/* Valores */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12" style={{color: '#821C53'}}>
            Nuestros Valores
          </h2>
          <div className="grid md:grid-cols-4 gap-8">
            {/* Justicia */}
            <div className="text-center">
              <div className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4" style={{backgroundColor: '#A43570'}}>
                <Gavel className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-2">Justicia</h3>
              <p className="text-gray-600">Promovemos la equidad y la defensa de los derechos de todas las personas.</p>
            </div>
            {/* Empatía */}
            <div className="text-center">
              <div className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4" style={{backgroundColor: '#A43570'}}>
                <Heart className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-2">Empatía</h3>
              <p className="text-gray-600">Nos ponemos en el lugar del otro para comprender y acompañar con sensibilidad.</p>
            </div>
            {/* Respeto */}
            <div className="text-center">
              <div className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4" style={{backgroundColor: '#A43570'}}>
                <Hand className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-2">Respeto</h3>
              <p className="text-gray-600">Valoramos la dignidad y diversidad de cada persona, fomentando un trato igualitario.</p>
            </div>
            {/* Sororidad */}
            <div className="text-center">
              <div className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4" style={{backgroundColor: '#A43570'}}>
                <Users className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-2">Sororidad</h3>
              <p className="text-gray-600">Impulsamos la solidaridad y el apoyo mutuo entre mujeres y niñas.</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

import React from 'react';
import { Link } from 'react-router-dom';
import { UserPlus, Shield, Gift, Star } from 'lucide-react';

export default function Miembros() {
  // Lista de miembros (ejemplo, puedes editar los datos)
  const miembros = [
    {
      nombre: 'ALCIVAR VALENCIA LILIAN ALEXANDRA',
      cargo: 'DIRECTORA EJECUTIVA',
      imagen: '/images/miembros/Lilian.jpg',
    },
    {
      nombre: 'POGO RAMOS TATIANA VANESSA',
      cargo: 'PRESIDENTA',
      imagen: '/images/miembros/Tatiana.jpg',
    },
    {
      nombre: 'MORALES MARMOL IRMA SILVANA',
      cargo: 'VICEPRESIDENTA',
      imagen: '/images/miembros/Irma.jpg',
    },
    {
      nombre: 'HERRERA TAPIA ANA MARCELA',
      cargo: 'SECRETARIA',
      imagen: '/images/miembros/herrera-tapia-ana-marcela.jpg',
    },
    {
      nombre: 'BRITO PAKIN KATY MERCEDES',
      cargo: 'TESORERA',
      imagen: '/images/miembros/Katy.jpg',
    },
    {
      nombre: 'CAMPOS CAZORLA JOSELYN ALEJANDRA',
      cargo: 'VOCAL PRINCIPAL',
      imagen: '/images/miembros/Joselyn.jpg',
    },
    {
      nombre: 'BENITEZ PONCE SANDY PAOLA',
      cargo: 'VOCAL PRINCIPAL',
      imagen: '/images/miembros/Sandy.jpg',
    },
    {
      nombre: 'OCAÑA CAYAMBE NATALY LIZETH',
      cargo: 'VOCAL PRINCIPAL',
      imagen: '/images/miembros/ocana-cayambe-nataly-lizeth.jpg',
    },
    {
      nombre: 'CARPIO ARIAS MARIA NATALIA',
      cargo: 'VOCAL SUPLENTE',
      imagen: '/images/miembros/MariaNat.jpg',
    },
    {
      nombre: 'BOLAÑOS PILACUAN EVELYN DAMARIS',
      cargo: 'VOCAL SUPLENTE',
      imagen: '/images/miembros/Evelin.jpg',
    },
    {
      nombre: 'ESTEVEZ FERNANDEZ MARIA BERNARDA',
      cargo: 'VOCAL SUPLENTE',
      imagen: '/images/miembros/Maria.jpg',
    },
    {
      nombre: 'VELEZ INTRIAGO BEATRIZ DANIELA',
      cargo: 'PROCURADORA SÍNDICA',
      imagen: '/images/miembros/Beatriz.jpg',
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative text-white overflow-hidden" style={{backgroundColor: '#CF6D9B'}}>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="text-center">
            <h1 className="text-5xl md:text-6xl font-black mb-6">
              Miembros FEPAST
            </h1>
            <p className="text-xl md:text-2xl max-w-3xl mx-auto">
              Conoce a quienes forman parte de nuestra fundación
            </p>
          </div>
        </div>
      </section>

      {/* Lista de miembros */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-[#F0C9DB] via-[#F0C9DB] to-[#CF6D9B] rounded-3xl shadow-lg py-10">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-extrabold mb-2 text-[#821C53] drop-shadow-lg tracking-tight">
              Nuestro Equipo
            </h2>
            <p className="text-lg md:text-xl text-[#821C53]/80 max-w-2xl mx-auto mb-2">
              Estos son los miembros que conforman FEPAST.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-10">
            {miembros.map((miembro, idx) => (
              <div
                key={idx}
                className="bg-gradient-to-br from-[#F0C9DB] via-white to-[#F0C9DB] p-8 rounded-3xl shadow-xl flex flex-col items-center transition-all duration-300 border-2 border-[#CF6D9B] group hover:shadow-3xl hover:scale-105 hover:bg-gradient-to-br hover:from-[#F0C9DB] hover:via-[#F0C9DB] hover:to-[#A43570]"
                style={{ minHeight: 440 }}
              >
                <img
                  src={miembro.imagen}
                  alt={miembro.nombre}
                  className="w-64 h-64 rounded-2xl object-cover mb-6 border-4 border-[#A43570] shadow-lg group-hover:scale-110 transition-transform duration-300 bg-[#F0C9DB]"
                  onError={e => { e.target.src = 'https://via.placeholder.com/250x250?text=Miembro'; }}
                />
                <h3 className="text-xl md:text-2xl font-bold mb-1 text-[#821C53] text-center leading-tight tracking-tight break-words transition-colors group-hover:text-white group-hover:drop-shadow-lg">
                  {miembro.nombre}
                </h3>
                <p className="text-base md:text-lg font-semibold text-center mt-1 tracking-wide transition-colors group-hover:text-white group-hover:drop-shadow-lg" style={{color: '#A43570'}}>
                  {miembro.cargo}
                </p>
                <div className="w-16 h-1 rounded-full mt-4 bg-gradient-to-r from-[#A43570] via-[#CF6D9B] to-[#821C53] opacity-70 group-hover:opacity-100 transition-all"></div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

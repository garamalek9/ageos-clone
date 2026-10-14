import React from 'react';
import droneCupWinners from '../assets/events/drone-cup-winners.jpg';

const Hero = () => {
  return (
    <section 
      className="relative h-screen flex items-center justify-center bg-cover bg-center bg-no-repeat overflow-hidden"
      style={{ backgroundImage: `url(${droneCupWinners})` }}
    >
      {/* Overlay sombre */}
      <div className="absolute inset-0 bg-black bg-opacity-70"></div>

      {/* Contenu centré */}
      <div className="relative z-10 text-center px-4 max-w-5xl">
        <h1 className="text-5xl md:text-7xl font-extrabold text-white mb-4 drop-shadow-2xl">
          AGEOS Tunisia
        </h1>
        <h2 className="text-3xl md:text-5xl font-bold text-yellow-400 mb-8 drop-shadow-2xl">
          African Association for Geospatial Development
        </h2>
        <p className="text-xl md:text-3xl text-white mb-10 font-medium drop-shadow-lg">
          Célébrons l'innovation géospatiale<br />
          Rejoignez-nous pour promouvoir le développement géospatial en Afrique
        </p>
        <button className="bg-yellow-400 text-black font-bold text-xl py-4 px-10 rounded-full hover:bg-yellow-300 transition transform hover:scale-110 shadow-2xl">
          Devenir Membre
        </button>
      </div>

      {/* Flèche scroll down */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <svg className="w-12 h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>
    </section>
  );
};

export default Hero;
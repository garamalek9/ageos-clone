import React from 'react';
import ageosHeaderLogo from '../assets/events/ageos-header-logo.png'; // ← Import correct !

const Missions = () => {
  const missions = [
    "Sensibiliser à l'apport de l'information spatiale en tant que vecteur de développement.",
    "Renforcer les liens entre les acteurs académiques, publics et privés du secteur géospatial.",
    "Appuyer les acteurs publics du domaine géospatial.",
    "Mener une veille sur le marché géospatial en Tunisie.",
    "Participer à l’évolution de la législation nationale régissant le secteur géospatial.",
    "Participer à la promotion du secteur géospatial à l’échelle de l’Afrique."
  ];

  const comite = [
    { initial: "N", nom: "Nesrine Chehata", poste: "Présidente" },
    { initial: "O", nom: "Omar Gaafar", poste: "Vice-président" },
    { initial: "H", nom: "Hedia Chakroun", poste: "Secrétaire générale" },
    { initial: "M", nom: "Mohamed Rajhi", poste: "Trésorier" },
    { initial: "M", nom: "Mohamed Chouchane", poste: "Responsable communication et relations publiques" }
  ];

  return (
    <section className="py-20 bg-white min-h-screen">
      <div className="container mx-auto px-4 max-w-7xl">

        {/* Header avec le grand logo central */}
        <div className="text-center mb-20">
          <div className="inline-block bg-white rounded-3xl shadow-2xl p-8 md:p-12 border border-gray-100">
            <img 
              src={ageosHeaderLogo} 
              alt="AGEOS - African Association for Geospatial Development" 
              className="w-full max-w-2xl md:max-w-4xl drop-shadow-xl"
            />
          </div>

          <h1 className="text-5xl md:text-6xl font-extrabold text-blue-900 mt-12 mb-6">
            Missions & Vision
          </h1>

          <div className="text-center text-gray-700">
            <p className="text-xl font-semibold">AGEOS : African Association for Geospatial Development</p>
            <p className="text-lg text-green-700 font-bold mt-2">Publication au JORT le 03 Novembre 2016</p>
          </div>
        </div>

        {/* Description générale */}
        <div className="bg-gray-50 rounded-3xl shadow-inner p-10 mb-20 max-w-5xl mx-auto">
          <p className="text-xl text-gray-700 text-center leading-relaxed">
            AGEOS regroupe des universitaires, étudiants et professionnels des secteurs publics et privés actifs dans le domaine du géospatial.
          </p>
        </div>

        {/* Nos Missions */}
        <h2 className="text-5xl md:text-6xl font-extrabold text-blue-900 text-center mb-16">
          Nos Missions
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 mb-24">
          {missions.map((mission, index) => (
            <div 
              key={index}
              className="bg-white rounded-3xl shadow-xl p-8 relative overflow-hidden hover:shadow-2xl transition-shadow duration-300"
            >
              {/* Numéro bleu arrondi débordant */}
              <div className="absolute -top-6 -left-6 w-24 h-24 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center text-white text-5xl font-bold shadow-lg">
                {index + 1}
              </div>

              <div className="pt-12">
                <p className="text-lg text-gray-800 font-medium leading-relaxed">
                  {mission}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Comité Directeur */}
        <h2 className="text-5xl md:text-6xl font-extrabold text-blue-900 text-center mb-16">
          Comité Directeur
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 max-w-6xl mx-auto">
          {comite.map((membre, index) => (
            <div 
              key={index}
              className="relative bg-gradient-to-br from-blue-700 to-blue-900 rounded-3xl p-10 text-center text-white shadow-2xl overflow-hidden group"
            >
              {/* Effet cercle jaune flou derrière */}
              <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 w-32 h-32 bg-yellow-300/20 rounded-full blur-3xl group-hover:bg-yellow-300/30 transition"></div>

              {/* Cercle avec initiale */}
              <div className="relative z-10 w-32 h-32 mx-auto mb-8 bg-blue-400/50 rounded-full border-8 border-white/30 flex items-center justify-center text-6xl font-bold shadow-xl">
                {membre.initial}
              </div>

              <h3 className="text-2xl md:text-3xl font-bold mb-3">{membre.nom}</h3>
              <p className="text-yellow-300 text-xl font-semibold">{membre.poste}</p>
            </div>
          ))}
        </div>

        {/* Bouton final */}
        <div className="text-center mt-24">
          <button className="bg-yellow-400 text-black font-bold text-xl py-5 px-14 rounded-full hover:bg-yellow-300 transform hover:scale-105 transition shadow-2xl">
            Devenir Membre
          </button>
        </div>

      </div>
    </section>
  );
};

export default Missions;
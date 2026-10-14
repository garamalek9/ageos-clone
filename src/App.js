import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import SocialSidebar from './components/SocialSidebar';
import Footer from './components/Footer';

// Import des composants existants
import Hero from './components/Hero';
import Banner from './components/Banner';        // Si tu veux le garder sur l'accueil
import Events from './components/Events';
import Highlights from './components/Highlights';
import Missions from './components/Missions';     // Le composant Missions complet

// Pages individuelles
const Accueil = () => (
  <>
    <Hero />
    {/* <Banner />  Décommente si tu veux le banner sous le Hero */}
    <Events />
    <Highlights />
  </>
);

const Actualites = () => (
  <section className="py-16 bg-gray-100 min-h-screen">
    <div className="container mx-auto px-4 max-w-5xl">
      <h2 className="text-4xl font-bold text-center text-blue-900 mb-12">Actualités AGEOS</h2>
      <p className="text-lg text-gray-700 text-center mb-12">
        Retrouvez ici les dernières nouvelles, newsletters GEOS_News, annonces d'événements et partenariats d'AGEOS.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {/* Exemples d'actualités - remplace par du vrai contenu plus tard */}
        <div className="bg-white rounded-xl shadow-md p-6 hover:shadow-xl transition">
          <h3 className="text-2xl font-bold text-blue-800 mb-4">Open Geo AI Hack 4th Edition</h3>
          <p className="text-gray-600">11-12 Novembre 2023 • Novation City Sousse</p>
        </div>
        <div className="bg-white rounded-xl shadow-md p-6 hover:shadow-xl transition">
          <h3 className="text-2xl font-bold text-blue-800 mb-4">Climadapt Hackathon</h3>
          <p className="text-gray-600">04-05 Octobre 2025 • Innovation pour l'adaptation climatique</p>
        </div>
        {/* Ajoute d'autres actualités ici */}
      </div>
    </div>
  </section>
);

const MissionsPage = () => <Missions />;

const Sensibilisation = () => (
  <section className="py-16 bg-gray-100 min-h-screen">
    <div className="container mx-auto px-4 max-w-5xl">
      <h2 className="text-4xl font-bold text-center text-blue-900 mb-12">Sensibilisation</h2>
      <p className="text-lg text-gray-700 text-center mb-12">
        AGEOS organise régulièrement des journées de sensibilisation (Geo-Education Day) dans les universités et écoles d'ingénieurs pour promouvoir les technologies géospatiales auprès des jeunes.
      </p>
      {/* Tu pourras ajouter une galerie d'événements de sensibilisation ici */}
    </div>
  </section>
);

const Formations = () => (
  <section className="py-16 bg-gray-100 min-h-screen">
    <div className="container mx-auto px-4 max-w-5xl">
      <h2 className="text-4xl font-bold text-center text-blue-900 mb-12">Formations</h2>
      <p className="text-lg text-gray-700 text-center mb-12">
        Formations certifiantes en SIG, photogrammétrie drone, ArcGIS Pro, QGIS, et projets internationaux comme GEOMAG (Erasmus+).
      </p>
    </div>
  </section>
);

const Projets = () => (
  <section className="py-16 bg-gray-100 min-h-screen">
    <div className="container mx-auto px-4 max-w-5xl">
      <h2 className="text-4xl font-bold text-center text-blue-900 mb-12">Projets</h2>
      <p className="text-lg text-gray-700 text-center mb-12">
        Découvrez nos projets en cours : portail OpenGeoData, Zriba Citizen GIS, optimisation de la collecte des déchets, etc.
      </p>
    </div>
  </section>
);

const Membres = () => (
  <section className="py-16 bg-gray-100 min-h-screen">
    <div className="container mx-auto px-4 max-w-5xl text-center">
      <h2 className="text-4xl font-bold text-blue-900 mb-12">Devenir Membre</h2>
      <p className="text-xl text-gray-700 mb-12 max-w-3xl mx-auto">
        Rejoignez la communauté AGEOS pour participer à nos événements, formations et contribuer au développement géospatial en Tunisie et en Afrique.
      </p>
      <button className="bg-yellow-400 text-black font-bold text-xl py-4 px-12 rounded-full hover:bg-yellow-300 transition transform hover:scale-110 shadow-2xl">
        Devenir Membre
      </button>
    </div>
  </section>
);

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-black text-white relative">
        <Navbar />
        <SocialSidebar />

        <main className="pt-20"> {/* Espace pour la navbar fixe */}
          <Routes>
            <Route path="/" element={<Accueil />} />
            <Route path="/actualites" element={<Actualites />} />
            <Route path="/missions" element={<MissionsPage />} />
            <Route path="/sensibilisation" element={<Sensibilisation />} />
            <Route path="/formations" element={<Formations />} />
            <Route path="/projets" element={<Projets />} />
            <Route path="/membres" element={<Membres />} />
          </Routes>
        </main>

        <Footer />
      </div>
    </Router>
  );
}

export default App;
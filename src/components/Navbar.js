// Mise à jour du Navbar pour utiliser react-router-dom
import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="bg-white shadow-md fixed top-0 left-0 right-0 z-50">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        {/* Logo + Texte à gauche */}
        <div className="flex items-center">
          <Link to="/">
            <img 
              src="https://geoportail.commune-zriba.com.tn/assets/img/ageos_logo.jpg" 
              alt="AGEOS Logo" 
              className="h-12 md:h-16 mr-4"
            />
          </Link>
        </div>

        {/* Menu navigation à droite */}
        <ul className="hidden md:flex space-x-8 text-blue-900 font-semibold text-lg">
          <li><Link to="/" className="hover:text-blue-600 transition">Accueil</Link></li>
          <li><Link to="/actualites" className="hover:text-blue-600 transition">Actualités</Link></li>
          <li><Link to="/missions" className="hover:text-blue-600 transition">Missions</Link></li>
          <li><Link to="/sensibilisation" className="hover:text-blue-600 transition">Sensibilisation</Link></li>
          <li><Link to="/formations" className="hover:text-blue-600 transition">Formations</Link></li>
          <li><Link to="/projets" className="hover:text-blue-600 transition">Projets</Link></li>
          <li><Link to="/membres" className="hover:text-blue-600 transition">Membres ▼</Link></li>
        </ul>

        {/* Menu mobile (hamburger) - tu peux l'améliorer avec un état pour ouvrir/fermer */}
        <div className="md:hidden">
          <button className="text-blue-900 text-3xl">☰</button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
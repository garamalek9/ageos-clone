import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import ageosLogo from '../assets/events/ageos-header-logo.png';

const navigation = [
  { label: 'Accueil', to: '/' },
  { label: 'À propos', to: '/missions' },
  { label: 'Actualités', to: '/actualites' },
  { label: 'Sensibilisation', to: '/sensibilisation' },
  { label: 'Formations', to: '/formations' },
  { label: 'Projets', to: '/projets' },
];

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const linkClass = ({ isActive }) =>
    `transition-colors hover:text-teal-700 ${isActive ? 'text-teal-800' : 'text-slate-700'}`;

  return (
    <nav className="fixed inset-x-0 top-0 z-50 border-b border-slate-200/80 bg-white/95 shadow-sm backdrop-blur">
      <div className="mx-auto flex h-[76px] max-w-7xl items-center justify-between px-4 md:px-6">
        <Link to="/" aria-label="AGEOS — accueil" onClick={() => setMenuOpen(false)}>
          <img src={ageosLogo} alt="AGEOS" className="ageos-logo" />
        </Link>

        <div className="hidden items-center gap-6 lg:flex">
          {navigation.map((item) => (
            <NavLink key={item.to} to={item.to} end={item.to === '/'} className={linkClass}>
              {item.label}
            </NavLink>
          ))}
          <NavLink
            to="/membres"
            className="ageos-nav-cta rounded-full px-5 py-2.5 font-semibold text-white transition"
          >
            Rejoindre AGEOS
          </NavLink>
        </div>

        <button
          type="button"
          className="inline-flex h-11 w-11 items-center justify-center rounded-lg text-2xl text-slate-800 hover:bg-slate-100 focus:outline-none focus:ring-2 focus:ring-teal-700 lg:hidden"
          aria-label={menuOpen ? 'Fermer le menu' : 'Ouvrir le menu'}
          aria-expanded={menuOpen}
          aria-controls="mobile-navigation"
          onClick={() => setMenuOpen((open) => !open)}
        >
          {menuOpen ? '×' : '☰'}
        </button>
      </div>

      {menuOpen && (
        <div id="mobile-navigation" className="mobile-navigation border-t border-slate-200 bg-white px-5 py-4 shadow-lg lg:hidden">
          <div className="mx-auto flex max-w-7xl flex-col gap-1">
            {navigation.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                end={item.to === '/'}
                className={({ isActive }) =>
                  `rounded-lg px-3 py-3 font-medium ${isActive ? 'bg-teal-50 text-teal-800' : 'text-slate-700 hover:bg-slate-50'}`
                }
                onClick={() => setMenuOpen(false)}
              >
                {item.label}
              </NavLink>
            ))}
            <NavLink
              to="/membres"
              className="ageos-nav-cta mt-2 rounded-full px-5 py-3 text-center font-semibold text-white"
              onClick={() => setMenuOpen(false)}
            >
              Rejoindre AGEOS
            </NavLink>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;

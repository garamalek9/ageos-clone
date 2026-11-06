import React from 'react';
import { Link } from 'react-router-dom';
import ageosLogo from '../assets/events/ageos-header-logo.png';

const Footer = () => (
  <footer className="bg-slate-950 px-5 py-12 text-slate-300">
    <div className="mx-auto grid max-w-7xl gap-10 sm:grid-cols-2 lg:grid-cols-[1.3fr_0.8fr_0.8fr_1fr]">
      <div>
        <Link to="/" aria-label="AGEOS — accueil">
          <img src={ageosLogo} alt="AGEOS" className="w-48 rounded bg-white p-2" />
        </Link>
        <p className="mt-5 max-w-sm leading-7 text-slate-400">
          L’Association for Geospatial Development rassemble et valorise les acteurs du géospatial.
        </p>
      </div>
      <div>
        <h2 className="font-bold text-white">Explorer</h2>
        <ul className="mt-4 space-y-3">
          <li><Link className="hover:text-white" to="/missions">Nos missions</Link></li>
          <li><Link className="hover:text-white" to="/actualites">Actualités</Link></li>
          <li><Link className="hover:text-white" to="/projets">Projets</Link></li>
          <li><Link className="hover:text-white" to="/membres">Devenir membre</Link></li>
        </ul>
      </div>
      <div>
        <h2 className="font-bold text-white">Suivre AGEOS</h2>
        <ul className="mt-4 space-y-3">
          {[
            ['Facebook', 'https://www.facebook.com/AGEOS.Tunisie/'],
            ['LinkedIn', 'https://www.linkedin.com/company/ageos-tunisia'],
            ['Instagram', 'https://www.instagram.com/ageos.tunisie/'],
            ['YouTube', 'https://www.youtube.com/c/AGEOS-Tunisie'],
          ].map(([label, href]) => (
            <li key={label}>
              <a href={href} target="_blank" rel="noopener noreferrer" className="hover:text-white">
                {label} <span aria-hidden="true">↗</span>
              </a>
            </li>
          ))}
        </ul>
      </div>
      <div>
        <h2 className="font-bold text-white">Nous contacter</h2>
        <address className="mt-4 space-y-3 text-sm not-italic leading-6 text-slate-400">
          <p>
            5, impasse 1, rue Ahmed Ouertani<br />
            Menzah 9, 1013 Tunis, Tunisie
          </p>
          <p>
            <a className="hover:text-white" href="tel:+21620444171">+216 20 444 171</a>
          </p>
          <p>
            <a className="hover:text-white" href="mailto:info@ageos.org">info@ageos.org</a>
          </p>
          <p>
            <a
              className="font-semibold text-teal-300 hover:text-white"
              href="https://ageos.org/accueil"
              target="_blank"
              rel="noopener noreferrer"
            >
              Site officiel <span aria-hidden="true">↗</span>
            </a>
          </p>
        </address>
      </div>
    </div>
    <div className="mx-auto mt-10 max-w-7xl border-t border-white/10 pt-5 text-sm text-slate-500">
      © {new Date().getFullYear()} AGEOS — Association for Geospatial Development
    </div>
  </footer>
);

export default Footer;

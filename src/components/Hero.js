import React from 'react';
import { Link } from 'react-router-dom';

const Hero = () => (
  <section className="home-hero px-4 py-14 md:py-20 lg:py-24" aria-labelledby="home-hero-title">
    <div className="home-hero__inner mx-auto grid max-w-7xl items-center gap-10 lg:grid-cols-2 lg:gap-16">
      <div className="home-hero__content max-w-2xl">
        <p className="home-hero__eyebrow mb-5 inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-semibold">
          <span className="home-hero__dot h-2 w-2 rounded-full" aria-hidden="true" />
          Association for Geospatial Development
        </p>
        <h1 id="home-hero-title" className="home-hero__title text-4xl font-extrabold leading-tight tracking-tight sm:text-5xl lg:text-6xl">
          Le géospatial au service des <span>territoires.</span>
        </h1>
        <p className="home-hero__description mt-6 max-w-xl text-lg leading-8 text-slate-600">
          AGEOS rassemble les acteurs du secteur pour promouvoir l’information géographique et
          mettre les technologies spatiales au service du développement en Tunisie et en Afrique.
        </p>
        <div className="home-hero__actions mt-8 flex flex-wrap gap-3">
          <Link
            to="/missions"
            className="home-hero__primary inline-flex items-center justify-center gap-2 rounded-lg px-6 py-3 font-semibold text-white focus:outline-none focus:ring-2 focus:ring-offset-2"
          >
            Découvrir AGEOS <span aria-hidden="true">→</span>
          </Link>
          <Link
            to="/actualites"
            className="home-hero__secondary inline-flex items-center justify-center rounded-lg border px-6 py-3 font-semibold focus:outline-none focus:ring-2 focus:ring-offset-2"
          >
            Nos actualités
          </Link>
        </div>
        <div className="home-hero__topics mt-8 flex flex-wrap gap-x-6 gap-y-2 text-sm">
          <span>Observation de la Terre</span>
          <span>Géomatique</span>
          <span>Innovation</span>
        </div>
      </div>
      <figure className="home-hero__visual overflow-hidden rounded-2xl border">
        <img
          src="/images/space-summit-paris-poster.png"
          alt="Affiche AGEOS pour le Sommet international de l’espace à Paris"
          fetchPriority="high"
          className="home-hero__poster aspect-[4/3] w-full object-contain"
        />
        <figcaption className="home-hero__caption flex flex-wrap items-center justify-between gap-2 px-5 py-4 text-sm">
          <span className="font-semibold">AGEOS au Sommet international de l’espace</span>
          <a
            href="https://ageos.org/actualites"
            target="_blank"
            rel="noopener noreferrer"
            className="font-semibold"
          >
            Actualités AGEOS <span aria-hidden="true">↗</span>
          </a>
        </figcaption>
      </figure>
    </div>
  </section>
);

export default Hero;

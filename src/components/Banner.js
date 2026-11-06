import React from 'react';

const Banner = () => (
  <section className="mx-auto grid max-w-6xl gap-8 overflow-hidden rounded-3xl bg-slate-900 p-5 text-white shadow-2xl md:grid-cols-[1.1fr_0.9fr] md:items-center md:p-8">
    <a
      href="https://ageos.org/actualites"
      target="_blank"
      rel="noopener noreferrer"
      className="group relative block overflow-hidden rounded-2xl focus:outline-none focus:ring-4 focus:ring-teal-300"
      aria-label="Voir les actualités AGEOS"
    >
      <img
        src="/images/opengeoai-hack-2023.png"
        alt="Affiche officielle de l’OpenGeoAI Hack, 4e édition"
        loading="lazy"
        className="aspect-video w-full object-cover transition duration-500 group-hover:scale-105"
      />
      <span className="absolute bottom-4 right-4 rounded-full bg-white px-4 py-2 text-sm font-bold text-slate-900 shadow-lg">
        Voir les actualités <span aria-hidden="true">↗</span>
      </span>
    </a>
    <div className="py-3 md:py-6">
      <p className="text-sm font-bold uppercase tracking-[0.2em] text-teal-300">Archives AGEOS · 2023</p>
      <h2 className="mt-3 text-3xl font-extrabold md:text-4xl">OpenGeoAI Hack</h2>
      <p className="mt-4 leading-7 text-slate-300">
        La quatrième édition a réuni des défis autour de l’OpenGeoData et de la GeoAI à Novation City,
        à Sousse.
      </p>
      <div className="mt-7 flex flex-wrap gap-3">
        <a
          href="https://ageos.org/actualites"
          target="_blank"
          rel="noopener noreferrer"
          className="rounded-full bg-teal-400 px-6 py-3 font-bold text-slate-950 transition hover:-translate-y-0.5 hover:bg-teal-300"
        >
          Explorer les événements <span aria-hidden="true">↗</span>
        </a>
        <a
          href="mailto:info@ageos.org?subject=Demande%20d%E2%80%99adh%C3%A9sion%20AGEOS"
          className="rounded-full border border-white/40 px-6 py-3 font-semibold text-white transition hover:-translate-y-0.5 hover:bg-white/10"
        >
          Devenir membre
        </a>
      </div>
    </div>
  </section>
);

export default Banner;

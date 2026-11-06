import React from 'react';
import droneCupWinners from '../assets/events/drone-cup-winners.jpg';

const Highlights = () => (
  <section className="bg-slate-50 px-4 py-16 md:py-20">
    <div className="mx-auto max-w-6xl">
      <div className="mb-8 text-center">
        <p className="text-sm font-bold uppercase tracking-[0.2em] text-teal-700">En images</p>
        <h2 className="mt-3 text-3xl font-extrabold text-slate-900 md:text-4xl">AGEOS en vidéo</h2>
        <p className="mt-3 text-slate-600">Retrouvez les événements et les activités de l’association sur sa chaîne officielle.</p>
      </div>
      <a
        href="https://www.youtube.com/c/AGEOS-Tunisie"
        target="_blank"
        rel="noopener noreferrer"
        className="group relative mx-auto flex aspect-video max-w-5xl items-end overflow-hidden rounded-2xl bg-slate-900 shadow-xl focus:outline-none focus:ring-4 focus:ring-teal-600"
      >
        <img
          src={droneCupWinners}
          alt=""
          loading="lazy"
          className="absolute inset-0 h-full w-full object-cover opacity-65 transition duration-700 group-hover:scale-105 group-hover:opacity-75"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-transparent to-slate-950/10" />
        <span className="absolute left-1/2 top-1/2 flex h-16 w-16 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-red-600 text-2xl text-white shadow-lg transition group-hover:scale-110" aria-hidden="true">
          ▶
        </span>
        <span className="relative p-6 text-lg font-bold text-white md:p-10 md:text-2xl">
          Voir la chaîne AGEOS sur YouTube <span aria-hidden="true">↗</span>
        </span>
      </a>
    </div>
  </section>
);

export default Highlights;

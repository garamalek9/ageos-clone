import React from 'react';

const archives = [
  {
    title: 'OpenGeoAI Hackathon',
    image: '/images/opengeoai-hack-2023.png',
    alt: 'Affiche de l’OpenGeoAI Hackathon organisé par AGEOS',
    description: 'Un rendez-vous autour de l’intelligence artificielle et de l’information géospatiale.',
  },
  {
    title: 'Drone Day',
    image: '/images/drone-day-2023.png',
    alt: 'Affiche du Drone Day organisé par AGEOS',
    description: 'Découverte des usages des drones et des données aériennes.',
  },
  {
    title: 'GeoEducation',
    image: '/images/geoeducation-2023.png',
    alt: 'Affiche d’une activité GeoEducation d’AGEOS',
    description: 'Des activités de sensibilisation à la géomatique et à ses applications.',
  },
];

const Events = () => (
  <section className="bg-white px-4 py-16 md:py-20" aria-labelledby="events-title">
    <div className="mx-auto max-w-6xl">
      <div className="max-w-2xl">
        <p className="text-sm font-bold uppercase tracking-[0.2em] text-teal-700">En images</p>
        <h2 id="events-title" className="mt-3 text-3xl font-extrabold text-slate-900 md:text-4xl">
          Les archives AGEOS
        </h2>
        <p className="mt-4 leading-7 text-slate-600">
          Retour sur quelques initiatives qui illustrent la diversité des activités de l’association.
        </p>
      </div>

      <div className="mt-9 grid gap-6 md:grid-cols-3">
        {archives.map(({ title, image, alt, description }) => (
          <article key={title} className="overflow-hidden rounded-2xl border border-slate-200 bg-white">
            <img src={image} alt={alt} loading="lazy" className="aspect-[4/3] w-full object-cover" />
            <div className="p-5">
              <h3 className="text-lg font-bold text-slate-900">{title}</h3>
              <p className="mt-2 text-sm leading-6 text-slate-600">{description}</p>
            </div>
          </article>
        ))}
      </div>
    </div>
  </section>
);

export default Events;

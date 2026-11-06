import React from 'react';

const registrationUrl = 'https://arcg.is/0e5CC13';

const speakers = [
  {
    name: 'Dr Pascal Igri Moudi',
    role: 'Modérateur · Salle régionale de situation multirisques',
    organization: 'CEEAC / ECAS · Cameroun',
  },
  {
    name: 'Stijn Vermoote',
    role: 'Partenariats et relations avec les parties prenantes',
    organization: 'Centre européen pour les prévisions météorologiques à moyen terme (ECMWF)',
  },
  {
    name: 'Luca Parodi',
    role: 'Réduction des risques de catastrophe et prévisions climatiques',
    organization: 'Organisation des Nations Unies pour l’alimentation et l’agriculture (FAO)',
  },
  {
    name: 'Lorenzo Alfieri',
    role: 'Chercheur principal, unité Hydraulique et Hydrologie',
    organization: 'CIMA Research Foundation',
  },
];

const seriesStatistics = [
  ['450+', 'participants inscrits dans le monde'],
  ['15+', 'experts internationaux'],
  ['5', 'modérateurs'],
  ['4', 'agences des Nations Unies représentées'],
  ['10+', 'réseaux africains et organisations régionales'],
  ['5', 'webinaires sur le cycle de gestion des catastrophes'],
];

const schedule = ['13 octobre', '27 octobre', '10 novembre', '24 novembre', '8 décembre'];

const FeaturedNews = () => (
  <section className="bg-slate-50 px-4 py-14 md:py-18" aria-labelledby="resilience-title">
    <div className="mx-auto max-w-7xl">
      <div className="mb-7 flex flex-wrap items-end justify-between gap-4">
        <div>
          <p className="text-sm font-bold uppercase tracking-[0.16em] text-teal-800">
            À la une · AGEOS & UN-SPIDER
          </p>
          <h2 id="resilience-title" className="mt-2 text-2xl font-bold text-slate-950 md:text-3xl">
            Space for Resilience
          </h2>
        </div>
        <span className="rounded-full bg-amber-100 px-4 py-2 text-sm font-semibold text-amber-900">
          Webinaire 2 · 27 octobre 2026
        </span>
      </div>

      <article className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
        <img
          src="/images/space-for-resilience-webinar-2.jpg"
          alt="Affiche du webinaire 2 Space for Resilience, le 27 octobre 2026, avec ses quatre intervenants"
          className="max-h-[34rem] w-full bg-[#292f68] object-contain"
          fetchPriority="high"
        />

        <div className="p-6 md:p-9">
          <div className="flex flex-wrap gap-2 text-sm font-semibold">
            <span className="rounded-full bg-teal-50 px-3 py-1.5 text-teal-900">
              Mardi 27 octobre · 14 h (Tunis, UTC+1)
            </span>
            <span className="rounded-full bg-slate-100 px-3 py-1.5 text-slate-700">En ligne · Gratuit</span>
            <span className="rounded-full bg-slate-100 px-3 py-1.5 text-slate-700">Présentations en anglais</span>
          </div>

          <h3 className="mt-5 text-2xl font-bold leading-snug text-slate-950 md:text-3xl">
            Prévention, préparation aux risques et systèmes d’alerte précoce
          </h3>
          <p className="mt-3 text-lg font-medium leading-7 text-slate-700">
            Des données à la préparation : bâtir des communautés préparées grâce aux technologies spatiales
          </p>
          <p className="mt-4 max-w-4xl leading-7 text-slate-600">
            Après le succès de la première session, ce deuxième webinaire montre comment les technologies
            spatiales et les données géospatiales peuvent renforcer la préparation des communautés et
            l’anticipation des risques. Plus de 450 participants dans le monde ont déjà rejoint la série.
          </p>

          <div className="mt-8">
            <h4 className="text-lg font-bold text-slate-900">Rencontrez les intervenants</h4>
            <ul className="mt-4 grid gap-3 sm:grid-cols-2">
              {speakers.map(({ name, role, organization }) => (
                <li key={name} className="rounded-xl border border-slate-200 bg-slate-50 p-4">
                  <p className="font-bold text-slate-900">{name}</p>
                  <p className="mt-1 text-sm leading-5 text-slate-700">{role}</p>
                  <p className="mt-1 text-sm leading-5 text-slate-500">{organization}</p>
                </li>
              ))}
            </ul>
          </div>

          <div className="mt-8 grid gap-6 lg:grid-cols-[1fr_1.2fr]">
            <div className="rounded-xl bg-slate-900 p-5 text-white">
              <h4 className="font-bold">La série en chiffres</h4>
              <dl className="mt-4 grid grid-cols-2 gap-4">
                {seriesStatistics.map(([value, label]) => (
                  <div key={label}>
                    <dt className="text-2xl font-extrabold text-teal-300">{value}</dt>
                    <dd className="mt-1 text-xs leading-5 text-slate-200">{label}</dd>
                  </div>
                ))}
              </dl>
            </div>

            <div className="rounded-xl border border-slate-200 p-5">
              <h4 className="font-bold text-slate-900">Un cycle de cinq webinaires</h4>
              <p className="mt-2 text-sm leading-6 text-slate-600">
                D’octobre à décembre 2026, un rendez-vous en ligne toutes les deux semaines, à 14 h (Tunis).
              </p>
              <ol className="mt-4 grid grid-cols-2 gap-2 sm:grid-cols-3">
                {schedule.map((date, index) => (
                  <li
                    key={date}
                    className={`rounded-lg px-3 py-2 text-sm font-semibold ${
                      index === 1 ? 'bg-teal-800 text-white' : 'bg-slate-100 text-slate-700'
                    }`}
                  >
                    <span className="block text-xs font-medium opacity-75">Webinaire {index + 1}</span>
                    {date}
                  </li>
                ))}
              </ol>
            </div>
          </div>

          <div className="mt-7 flex flex-wrap items-center gap-4">
            <a
              href={registrationUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-lg bg-teal-800 px-6 py-3 font-semibold text-white transition-colors hover:bg-teal-900 focus:outline-none focus:ring-2 focus:ring-teal-700 focus:ring-offset-2"
            >
              S’inscrire gratuitement <span aria-hidden="true">↗</span>
            </a>
            <p className="text-sm leading-6 text-slate-600">
              Organisé par AGEOS, Bureau régional d’appui d’UN-SPIDER, en partenariat avec UNOOSA / UN-SPIDER.
            </p>
          </div>
        </div>
      </article>
    </div>
  </section>
);

export default FeaturedNews;

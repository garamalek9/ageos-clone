import React from 'react';
import { Link } from 'react-router-dom';

const missions = [
  'Sensibiliser à l’apport de l’information spatiale en tant que vecteur de développement.',
  'Renforcer les liens entre les acteurs académiques, publics et privés du secteur géospatial.',
  'Appuyer les acteurs publics du domaine géospatial.',
  'Mener une veille sur le marché géospatial en Tunisie.',
  'Participer à l’évolution de la législation nationale régissant le secteur géospatial.',
  'Participer à la promotion du secteur géospatial à l’échelle de l’Afrique.',
];

const committee = [
  { name: 'Nesrine Chehata', role: 'Présidente' },
  { name: 'Ismail Laribi', role: 'Vice-président' },
  { name: 'Jihene Ghiloufi', role: 'Trésorière' },
  { name: 'Saida Hammami', role: 'Secrétaire générale' },
  { name: 'Souha Zriba', role: 'Secrétaire générale adjointe' },
];

const Missions = () => (
  <section className="min-h-screen bg-slate-50 px-4 py-16 md:py-20">
    <div className="mx-auto max-w-7xl">
      <header className="mx-auto mb-14 max-w-4xl text-center">
        <p className="text-sm font-bold uppercase tracking-[0.2em] text-teal-700">À propos d’AGEOS</p>
        <h1 className="mt-3 text-4xl font-extrabold tracking-tight text-slate-900 md:text-5xl">
          Le géospatial, moteur de développement
        </h1>
        <p className="mt-6 text-lg leading-8 text-slate-600">
          AGEOS — African Association for Geospatial Development — rassemble des universitaires,
          des étudiants et des professionnels des secteurs privé et public actifs dans le domaine
          du géospatial. Son objectif commun : promouvoir l’information géographique et les
          technologies géospatiales.
        </p>
        <p className="mt-4 font-semibold text-slate-700">Association publiée au JORT le 3 novembre 2016</p>
      </header>

      <div className="rounded-3xl bg-slate-900 px-7 py-10 text-white md:px-12 md:py-14">
        <div className="mb-9 max-w-2xl">
          <p className="text-sm font-bold uppercase tracking-[0.2em] text-teal-300">Notre engagement</p>
          <h2 className="mt-3 text-3xl font-extrabold md:text-4xl">Nos missions</h2>
        </div>
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {missions.map((mission, index) => (
            <article key={mission} className="lift-card reveal-on-scroll rounded-2xl border border-white/10 bg-white/5 p-6">
              <span className="text-sm font-bold text-amber-300">0{index + 1}</span>
              <p className="mt-3 leading-7 text-slate-100">{mission}</p>
            </article>
          ))}
        </div>
      </div>

      <section className="mt-16" aria-labelledby="committee-heading">
        <div className="mx-auto mb-9 max-w-3xl text-center">
          <p className="text-sm font-bold uppercase tracking-[0.2em] text-teal-700">L’association</p>
          <h2 id="committee-heading" className="mt-3 text-3xl font-extrabold text-slate-900 md:text-4xl">
            Bureau AGEOS · 2026–2028
          </h2>
          <p className="mt-4 leading-7 text-slate-600">
            L’équipe élue pour poursuivre les actions d’AGEOS en Tunisie et en Afrique.
          </p>
        </div>
        <img
          src="/images/ageos-board-2026-2028.png"
          alt="Affiche officielle présentant le bureau AGEOS 2026–2028"
          loading="lazy"
          className="mx-auto mb-8 max-h-[34rem] w-full rounded-2xl bg-slate-900 object-contain"
        />
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {committee.map((member) => (
            <article key={member.name} className="lift-card reveal-on-scroll rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
              <h3 className="text-xl font-bold text-slate-900">{member.name}</h3>
              <p className="mt-1 font-semibold text-teal-800">{member.role}</p>
            </article>
          ))}
        </div>
      </section>

      <div className="mt-14 flex flex-col items-start justify-between gap-6 rounded-3xl border border-slate-200 bg-white p-8 shadow-sm md:flex-row md:items-center md:p-10">
        <div>
          <h2 className="text-2xl font-bold text-slate-900">Une communauté ouverte et engagée</h2>
          <p className="mt-2 max-w-2xl leading-7 text-slate-600">
            Échangez avec AGEOS, découvrez ses activités et participez au développement de l’écosystème géospatial.
          </p>
        </div>
        <Link
          to="/membres"
          className="shrink-0 rounded-full bg-amber-400 px-6 py-3 font-bold text-slate-950 transition hover:bg-amber-300"
        >
          Nous rejoindre
        </Link>
      </div>
    </div>
  </section>
);

export default Missions;

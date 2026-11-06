import React from 'react';
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import SocialSidebar from './components/SocialSidebar';
import Footer from './components/Footer';
import Hero from './components/Hero';
import Events from './components/Events';
import Highlights from './components/Highlights';
import FeaturedNews from './components/FeaturedNews';
import LatestNews from './components/LatestNews';
import Missions from './components/Missions';
import MotionEffects from './components/MotionEffects';
import HomeCharts from './components/HomeCharts';

const PageIntro = ({ eyebrow, title, children }) => (
  <header className="mx-auto mb-10 max-w-3xl text-center sm:mb-12">
    <p className="mb-3 text-sm font-bold uppercase tracking-[0.2em] text-teal-700">{eyebrow}</p>
    <h1 className="break-words text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl md:text-5xl">{title}</h1>
    {children && <p className="mt-4 text-base leading-7 text-slate-600 sm:mt-5 sm:text-lg sm:leading-8">{children}</p>}
  </header>
);

const Actualites = () => (
  <section className="min-h-[70vh] bg-slate-50 px-4 py-12 sm:py-16 md:py-20">
    <div className="mx-auto max-w-6xl">
      <PageIntro eyebrow="La vie de l’association" title="Actualités AGEOS">
        Nos nouvelles, nos rencontres et les initiatives qui font avancer le géospatial.
      </PageIntro>
      <FeaturedNews />
      <LatestNews />
      <div className="mt-14">
        <div className="mb-6 flex flex-wrap items-end justify-between gap-4">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-teal-700">Archives</p>
            <h2 className="mt-2 text-2xl font-extrabold text-slate-900">Quelques rendez-vous AGEOS</h2>
          </div>
          <a
            href="https://ageos.org/actualites"
            target="_blank"
            rel="noopener noreferrer"
            className="font-semibold text-teal-800 underline decoration-teal-300 underline-offset-4 hover:text-teal-950"
          >
            Toutes les actualités <span aria-hidden="true">↗</span>
          </a>
        </div>
        <div className="grid gap-4 md:grid-cols-3">
          {[
            ['11–12 novembre 2023', 'OpenGeoAI Hack', 'Quatrième édition autour de l’OpenGeoData et de la GeoAI.'],
            ['10 juin 2023', 'Tunisia Drone Day', 'Une journée dédiée aux drones, à leurs applications et à leur réglementation.'],
            ['4 février 2023', 'Geo-Education Day · SUP’COM', 'Rencontre autour des technologies géospatiales, organisée avec IEEE GRSS.'],
          ].map(([date, title, description]) => (
            <article key={title} className="reveal-on-scroll rounded-2xl border border-slate-200 bg-white p-6">
              <p className="text-sm font-semibold text-teal-700">{date}</p>
              <h3 className="mt-2 text-xl font-bold text-slate-900">{title}</h3>
              <p className="mt-2 leading-6 text-slate-600">{description}</p>
            </article>
          ))}
        </div>
      </div>
    </div>
  </section>
);

const Sensibilisation = () => (
  <section className="min-h-[70vh] bg-slate-50 px-4 py-12 sm:py-16 md:py-20">
    <div className="mx-auto max-w-4xl">
      <PageIntro eyebrow="Partager la connaissance" title="Sensibilisation">
        AGEOS fait découvrir les métiers et les usages du géospatial aux étudiants et aux jeunes.
      </PageIntro>
      <p className="mx-auto -mt-5 mb-9 max-w-3xl text-center leading-7 text-slate-600">
        En complément de ses activités de veille technologique, AGEOS sensibilise à l’importance
        du géospatial comme vecteur de développement.
      </p>
      <div className="grid gap-5 md:grid-cols-2">
        {[
          ['Découvrir les technologies', 'Rencontres, journées de sensibilisation et échanges autour des technologies géospatiales et de leurs usages.'],
          ['Faire connaître les métiers', 'Présenter les applications du SIG, de l’observation de la Terre et des drones aux étudiants et au grand public.'],
          ['Partager la veille', 'Rendre accessibles les évolutions des données et des outils géospatiaux.'],
          ['Créer des passerelles', 'Rapprocher les étudiants, les universités, les acteurs publics et les professionnels du secteur.'],
        ].map(([title, description]) => (
          <article key={title} className="reveal-on-scroll rounded-2xl border border-slate-200 bg-white p-7 shadow-sm">
            <h2 className="text-xl font-bold text-slate-900">{title}</h2>
            <p className="mt-3 leading-7 text-slate-600">{description}</p>
          </article>
        ))}
      </div>
      <div className="mt-12 rounded-3xl bg-slate-900 p-5 text-white sm:p-8 md:p-10">
        <p className="text-sm font-bold uppercase tracking-[0.2em] text-teal-300">Dans les archives AGEOS</p>
        <h2 className="mt-3 text-2xl font-extrabold">Des rendez-vous pour apprendre et échanger</h2>
        <ul className="mt-6 grid gap-4 leading-7 text-slate-200 md:grid-cols-2">
          <li><strong className="text-white">Geo-Education Day · SUP’COM</strong> — une journée de découverte des technologies géospatiales, organisée avec IEEE GRSS en février 2023.</li>
          <li><strong className="text-white">Tunisia Drone Day</strong> — une initiative de sensibilisation aux applications des drones et aux enjeux de leur réglementation.</li>
        </ul>
        <Link to="/actualites" className="mt-7 inline-flex font-semibold text-amber-300 hover:text-amber-200">
          Parcourir les actualités <span className="ml-2" aria-hidden="true">→</span>
        </Link>
      </div>
    </div>
  </section>
);

const Formations = () => (
  <section className="min-h-[70vh] bg-slate-50 px-4 py-12 sm:py-16 md:py-20">
    <div className="mx-auto max-w-5xl">
      <PageIntro eyebrow="Apprendre et pratiquer" title="Formations">
        AGEOS organise des activités de formation dans des domaines de pointe du géospatial, pour les
        étudiants, les professionnels et ses membres.
      </PageIntro>
      <div className="grid gap-5 md:grid-cols-2">
        {[
          ['Systèmes d’information géographique', 'Collecter, organiser et analyser les données territoriales avec des outils SIG.'],
          ['Webmapping', 'Créer et partager des cartes interactives pour rendre les données géographiques accessibles.'],
          ['Télédétection', 'Exploiter les images satellitaires et les données d’observation de la Terre.'],
          ['Photogrammétrie par drone', 'Acquérir des données terrain et produire des restitutions géospatiales.'],
        ].map(([title, description]) => (
          <article key={title} className="lift-card reveal-on-scroll rounded-2xl border border-slate-200 bg-white p-5 shadow-sm sm:p-7">
            <span className="text-sm font-bold uppercase tracking-widest text-teal-700">Formation</span>
            <h2 className="mt-3 text-xl font-bold text-slate-900">{title}</h2>
            <p className="mt-3 leading-7 text-slate-600">{description}</p>
          </article>
        ))}
      </div>
      <div className="mt-10 rounded-2xl bg-teal-50 p-5 text-center sm:p-6">
        <p className="leading-7 text-slate-700">
          Le programme, les dates et les modalités des prochaines sessions sont communiqués directement
          par l’association.
        </p>
        <a href="mailto:info@ageos.org?subject=Informations%20sur%20les%20formations%20AGEOS" className="mt-3 inline-flex font-semibold text-teal-800 hover:text-teal-950">
          Demander le calendrier des formations <span className="ml-2" aria-hidden="true">→</span>
        </a>
      </div>
    </div>
  </section>
);

const Projets = () => (
  <section className="min-h-[70vh] bg-slate-50 px-4 py-12 sm:py-16 md:py-20">
    <div className="mx-auto max-w-5xl">
      <PageIntro eyebrow="Agir par la donnée" title="Projets">
        AGEOS mène des projets et des collaborations pour valoriser les données géographiques et
        soutenir la résilience des territoires.
      </PageIntro>
      <div className="grid gap-5 md:grid-cols-2">
        {[
          ['SIG participatif · Beni Khalled', 'Dans le cadre d’un projet pilote soutenu par l’Accelerator Lab du PNUD, AGEOS a contribué à optimiser les circuits de collecte des déchets avec la commune de Beni Khalled.'],
          ['GEOMAG · Erasmus+', 'Le projet européen GEOMAG a donné lieu à des expérimentations de formations professionnelles en webmapping et en télédétection.'],
          ['Risques et alerte précoce', 'Observation de la Terre, GeoAI et analyse spatiale pour cartographier les aléas, l’exposition et la vulnérabilité des territoires.'],
          ['Résilience des infrastructures', 'Modélisation 3D, jumeaux numériques et données UAV pour appuyer la préparation et l’analyse des risques.'],
        ].map(([title, description]) => (
          <article key={title} className="lift-card reveal-on-scroll rounded-2xl border border-slate-200 bg-white p-5 sm:p-7">
            <p className="text-sm font-bold uppercase tracking-widest text-teal-700">Projet & expertise</p>
            <h2 className="mt-2 text-xl font-bold text-slate-900">{title}</h2>
            <p className="mt-3 leading-7 text-slate-600">{description}</p>
          </article>
        ))}
      </div>
      <a
        href="https://un-spider.org/network/regional-support-offices/african-association-geospatial-development-ageos"
        target="_blank"
        rel="noopener noreferrer"
        className="mt-8 inline-flex font-semibold text-teal-800 underline decoration-teal-300 underline-offset-4 hover:text-teal-950"
      >
        Découvrir l’expertise AGEOS présentée par UN-SPIDER <span className="ml-2" aria-hidden="true">↗</span>
      </a>
    </div>
  </section>
);

const Membres = () => (
  <section className="min-h-[70vh] bg-slate-50 px-4 py-12 sm:py-16 md:py-20">
    <div className="mx-auto max-w-4xl">
      <PageIntro eyebrow="Rejoindre le réseau" title="Devenir membre">
        Faites partie d’une communauté engagée pour le développement géospatial en Tunisie et en Afrique.
      </PageIntro>
      <div className="rounded-3xl bg-slate-900 px-5 py-8 text-center text-white sm:px-8 sm:py-10 md:px-16 md:py-12">
        <p className="mx-auto max-w-2xl text-base leading-7 text-slate-200 sm:text-lg sm:leading-8">
          Vous êtes étudiant, professionnel ou simplement intéressé par le géospatial ? Suivez les
          activités d’AGEOS et contactez l’association pour connaître les modalités d’adhésion.
        </p>
        <a
          href="mailto:info@ageos.org?subject=Demande%20d%E2%80%99adh%C3%A9sion%20AGEOS"
          className="mt-8 inline-flex rounded-full bg-amber-400 px-7 py-3 font-bold text-slate-950 transition hover:bg-amber-300 focus:outline-none focus:ring-2 focus:ring-amber-300 focus:ring-offset-2 focus:ring-offset-slate-900"
        >
          Écrire à info@ageos.org <span className="ml-2" aria-hidden="true">↗</span>
        </a>
        <p className="mt-4 text-sm text-slate-300">Vous pouvez également appeler le +216 20 444 171.</p>
      </div>
    </div>
  </section>
);

const Accueil = () => (
  <>
    <Hero />
    <FeaturedNews />
    <HomeCharts />
    <section className="bg-white px-4 py-16 md:py-20">
      <div className="mx-auto max-w-7xl">
        <div className="mb-9 max-w-3xl">
          <p className="text-sm font-bold uppercase tracking-[0.2em] text-teal-700">Domaines d’expertise</p>
          <h2 className="mt-3 text-3xl font-extrabold text-slate-900 md:text-4xl">
            Des données spatiales aux décisions concrètes
          </h2>
          <p className="mt-4 leading-7 text-slate-600">
            Les compétences AGEOS couvrent l’ensemble du cycle de gestion des risques, de la prévention
            à la préparation, la réponse et le relèvement.
          </p>
        </div>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {[
            ['Observation de la Terre', 'Suivre les changements environnementaux à partir d’images satellitaires.'],
            ['GeoAI & analyse spatiale', 'Évaluer les aléas, les vulnérabilités et l’exposition des territoires.'],
            ['Alerte précoce', 'Développer des outils de surveillance et des tableaux de bord pour anticiper les risques.'],
            ['Cartographie participative', 'Associer les communautés à la production de connaissances territoriales.'],
          ].map(([title, description]) => (
            <article key={title} className="reveal-on-scroll rounded-2xl border border-slate-200 bg-slate-50 p-6">
              <h3 className="font-bold text-slate-900">{title}</h3>
              <p className="mt-2 text-sm leading-6 text-slate-600">{description}</p>
            </article>
          ))}
        </div>
        <a
          href="https://un-spider.org/network/regional-support-offices/african-association-geospatial-development-ageos"
          target="_blank"
          rel="noopener noreferrer"
          className="mt-6 inline-flex font-semibold text-teal-800 underline decoration-teal-300 underline-offset-4 hover:text-teal-950"
        >
          En savoir plus auprès d’UN-SPIDER <span className="ml-2" aria-hidden="true">↗</span>
        </a>
      </div>
    </section>
    <Events />
    <Highlights />
    <section className="bg-teal-800 px-4 py-16 text-center text-white">
      <p className="text-sm font-bold uppercase tracking-[0.2em] text-teal-100">Ensemble, faisons avancer le secteur</p>
      <h2 className="mx-auto mt-3 max-w-3xl text-3xl font-extrabold md:text-4xl">
        Le développement géospatial se construit en réseau.
      </h2>
      <Link
        to="/membres"
        className="mt-7 inline-flex rounded-full bg-amber-400 px-7 py-3 font-bold text-slate-950 transition hover:bg-amber-300"
      >
        Rejoindre AGEOS
      </Link>
    </section>
  </>
);

function App() {
  return (
    <BrowserRouter>
    <div className="min-h-screen bg-slate-50 text-slate-900">
      <MotionEffects />
      <Navbar />
      <SocialSidebar />
      <main className="pt-[76px]">
        <Routes>
          <Route path="/" element={<Accueil />} />
          <Route path="/actualites" element={<Actualites />} />
          <Route path="/missions" element={<Missions />} />
          <Route path="/sensibilisation" element={<Sensibilisation />} />
          <Route path="/formations" element={<Formations />} />
          <Route path="/projets" element={<Projets />} />
          <Route path="/membres" element={<Membres />} />
        </Routes>
      </main>
      <Footer />
    </div>
    </BrowserRouter>
  );
}

export default App;

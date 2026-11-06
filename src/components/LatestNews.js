import React from 'react';

const updates = [
  {
    category: 'Équipe AGEOS · Nouvelle étape',
    title: 'Bienvenue à Asma Chermitti, responsable administrative et financière',
    image: '/images/ageos-asma-chermitti.png',
    alt: 'Affiche AGEOS de bienvenue à Asma Chermitti, responsable administrative et financière',
    description:
      'Après cinq années d’engagement à AGEOS, Asma rejoint l’équipe exécutive avec un premier contrat de travail permanent pour l’association.',
    detail:
      'Membre active, responsable logistique, puis trésorière, elle a aussi contribué à la coordination des activités Geo4Kids. AGEOS célèbre cette étape de développement et lui souhaite beaucoup de réussite.',
  },
  {
    category: 'Gouvernance · Mandat 2026–2028',
    title: 'AGEOS présente son nouveau bureau',
    image: '/images/ageos-board-2026-2028.png',
    alt: 'Affiche du bureau AGEOS 2026–2028 avec les cinq membres et leurs responsabilités',
    description:
      'Une nouvelle équipe prend le relais afin de poursuivre les actions de l’association en Tunisie et en Afrique.',
    detail:
      'Nesrine Chehata, présidente · Ismail Laribi, vice-président · Jihene Ghiloufi, trésorière · Saida Hammami, secrétaire générale · Souha Zriba, secrétaire générale adjointe.',
  },
  {
    category: 'Conférence · Tunisia Global Forum 2026',
    title: 'Ismail Laribi présente « GeoAI: Powering the Cities of Tomorrow »',
    image: '/images/tunisia-global-forum-talk.png',
    alt: 'Programme de la scène Open Talks du Tunisia Global Forum avec Ismail Laribi et son intervention sur la GeoAI',
    description:
      'Le vice-président d’AGEOS et spécialiste des jumeaux numériques intervient au rendez-vous annuel de la diaspora tunisienne organisé par ATUGE.',
    detail: '21 juillet · 13 h · Salle Leptis · Radisson Blu Hotel.',
  },
  {
    category: 'Partenariat · Géospatial et villes résilientes',
    title: 'AGEOS à l’Integration Day 2026 de l’ESSTED',
    image: '/images/integration-day-essted-2026.png',
    alt: 'Programme de l’Integration Day 2026 de l’ESSTED',
    description:
      'Dr Saida Hammami, secrétaire générale d’AGEOS, anime un atelier sur le rôle du géospatial dans la résilience des villes face au changement climatique.',
    detail: '13 h 30 – 16 h 30 · Salle 404 · ESSTED',
  },
  {
    category: 'Nouveau projet · Climat et photographie',
    title: 'صور المناخ – ExpoClimat : sensibiliser au climat par l’art',
    image: '/images/expoclimat-ageos.png',
    alt: 'Affiche du projet AGEOS صور المناخ, sensibilisation au climat par l’art',
    description:
      'Sélectionné dans le cadre du PAGECTE, le projet de 15 mois mobilise la photographie documentaire et participative pour raconter les effets du changement climatique et les réponses locales.',
    detail:
      'Expositions à Sousse, Djerba, Tozeur et au Kef, puis exposition nationale à Tunis et création d’une plateforme numérique.',
  },
  {
    category: 'Coopération internationale · ASPEX 2026',
    title: 'AGEOS relie les écosystèmes spatiaux tunisien, africain et japonais',
    image: '/images/aspex-2026-ageos.png',
    alt: 'Signature du partenariat AGEOS, Cross U et Axelspace à ASPEX 2026',
    description:
      'À Abidjan, AGEOS, Cross U et Axelspace ont signé un accord tripartite pour développer l’usage des données satellitaires, la formation, les projets pilotes et l’accompagnement des startups.',
    detail:
      'AGEOS a aussi mis en lumière ArdhiPilot, lauréat du premier prix du challenge SpatiELLES à ASPEX 2026.',
  },
];

const additionalUpdates = [
  {
    id: 'copuos',
    title: 'AGEOS participe à la 69e session du COPUOS',
    category: 'Coopération spatiale · Nations Unies · 2026',
    description:
      'AGEOS a participé à la session du Comité des Nations Unies pour l’utilisation pacifique de l’espace extra-atmosphérique, à la fois comme nouveau bureau régional d’appui UN-SPIDER pour la Tunisie et comme intervenant lors d’un événement parallèle.',
    detail:
      'L’association a présenté son expérience en renforcement des capacités géospatiales, innovation et mobilisation des jeunes. AGEOS a également soutenu le pitch d’EcoSat Vision, lauréat du deuxième prix du hackathon ActInSpace Tunisia 2026.',
    images: [
      {
        src: '/images/ageos-copuos-2026-panel.png',
        alt: 'Écran de la session COPUOS présentant les intervenants UNOOSA, UN-SPIDER et AGEOS',
      },
      {
        src: '/images/ageos-copuos-2026-meeting.png',
        alt: 'Réunion de travail d’AGEOS et de partenaires internationaux lors de la session COPUOS',
      },
    ],
  },
  {
    id: 'general-assembly',
    title: 'Assemblée générale AGEOS : bilan 2025 et perspectives 2026',
    category: 'Vie associative · Juin 2026',
    description:
      'AGEOS revient sur une année d’actions en faveur de la culture géospatiale, de l’innovation et de l’usage des technologies spatiales au service du développement durable.',
    detail:
      'Parmi les priorités annoncées pour 2026 : ClearSchools, initiative d’éducation environnementale avec les écoles et les collectivités ; GeoDahar, consacré au patrimoine du Dahar et au géotourisme ; et ExpoClimat, qui associe photographie, science et sensibilisation.',
    images: [
      {
        src: '/images/geodahar-mapdahar-consultation.png',
        alt: 'Visuel AGEOS du projet GeoDahar et de son application cartographique MapDahar',
      },
      {
        src: '/images/expoclimat-ageos.png',
        alt: 'Visuel AGEOS du projet ExpoClimat de sensibilisation au changement climatique',
      },
    ],
  },
  {
    id: 'communication-volunteers',
    title: 'AGEOS recrutait des bénévoles pour son équipe communication',
    category: 'Archives · Appel à bénévoles',
    description:
      'L’association recherchait des graphistes, community managers, créateurs de contenu et bénévoles pour la communication et la promotion des événements.',
    detail:
      'Les candidatures étaient à transmettre avec un CV et un portfolio à contact-rh@ageos.org. L’appel, dont la date limite était le 26 juin 2026, est clôturé.',
    images: [
      {
        src: '/images/ageos-communication-recruitment.png',
        alt: 'Affiche AGEOS de recrutement de bénévoles pour l’équipe communication',
      },
    ],
  },
  {
    id: 'pagecte',
    title: 'AGEOS contribue au plaidoyer climatique et environnemental',
    category: 'Ateliers · PAGECTE · août–septembre 2026',
    description:
      'AGEOS a pris part aux échanges régionaux sur le rôle des organisations de la société civile dans le plaidoyer climatique. Les ateliers ont mis en commun les vulnérabilités des territoires et les moyens de faire entendre les réalités locales auprès des décideurs.',
    detail:
      'Une réflexion stratégique consacrée au rôle des OSC a notamment eu lieu à Zarzis le 28 août. Le 4 septembre, AGEOS a participé à l’atelier régional District 2 couvrant le Grand Tunis, Nabeul et Zaghouan, dans le cadre du partenariat entre le ministère de l’Environnement et la GIZ.',
    images: [
      {
        src: '/images/zarzis-pagecte-workshop-slide.png',
        alt: 'Présentation de l’atelier PAGECTE consacré au plaidoyer environnemental et climatique à Zarzis',
      },
      {
        src: '/images/zarzis-pagecte-workshop-1.png',
        alt: 'Participants réunis autour des tables lors de l’atelier stratégique à Zarzis',
      },
      {
        src: '/images/zarzis-pagecte-workshop-2.png',
        alt: 'Échanges entre participants de l’atelier de plaidoyer climatique à Zarzis',
      },
      {
        src: '/images/zarzis-pagecte-workshop-3.png',
        alt: 'Atelier participatif PAGECTE avec les contributions des participants',
      },
    ],
  },
  {
    id: 'space-summit',
    title: 'AGEOS au Sommet international de l’espace à Paris',
    category: 'Coopération spatiale · 9–10 septembre 2026',
    description:
      'Représentée par sa présidente, Pr Nesrine Chehata, AGEOS a participé aux échanges sur l’observation de la Terre, l’IA, le climat, l’accès aux données et les partenariats internationaux.',
    detail:
      'Le sommet a rassemblé des représentants de 90 pays et organisations internationales ainsi qu’environ 1 100 entreprises du secteur spatial. AGEOS y a défendu une coopération qui relie les technologies spatiales aux besoins des territoires africains.',
    images: [
      {
        src: '/images/space-summit-paris-poster.png',
        alt: 'Affiche AGEOS annonçant sa participation au Sommet international de l’espace à Paris',
      },
      {
        src: '/images/space-summit-paris-audience.png',
        alt: 'Vue de l’auditoire du Sommet international de l’espace au Grand Palais',
      },
      {
        src: '/images/space-summit-paris-delegation.png',
        alt: 'Membres de la délégation tunisienne au Sommet international de l’espace',
      },
      {
        src: '/images/space-summit-paris-meeting.png',
        alt: 'Rencontre de participantes au Sommet international de l’espace à Paris',
      },
    ],
  },
  {
    id: 'correct-the-map',
    title: 'Pourquoi le choix d’une projection cartographique compte',
    category: 'Cartographie · Correct the Map · septembre 2026',
    description:
      'Une carte plane déforme toujours certaines propriétés du globe. La campagne Correct the Map défend notamment la projection Equal Earth, qui représente plus fidèlement les surfaces relatives des continents.',
    detail:
      'Le 4 septembre 2026, l’Assemblée générale des Nations Unies a adopté la résolution présentée par le Togo au nom du groupe africain : 164 voix pour, une contre et six abstentions.',
    images: [
      {
        src: '/images/world-map-equal-earth.png',
        alt: 'Carte du monde utilisant la projection Equal Earth, qui conserve les proportions des surfaces',
      },
      {
        src: '/images/world-map-mercator.png',
        alt: 'Carte du monde utilisant la projection de Mercator, avec ses déformations de surface',
      },
    ],
  },
];

const updateImages = [
  {
    id: 'mapdahar',
    title: 'Consultation MapDahar : application cartographique web pour le DMO Dahar',
    category: 'Appel à consultation · Projet GeoDahar',
    image: '/images/geodahar-mapdahar-consultation.png',
    alt: 'Affiche de consultation AGEOS pour les termes de référence de l’application cartographique web MapDahar',
    description:
      'AGEOS a lancé une consultation pour développer une application de cartographie web destinée à valoriser les géosites, itinéraires géotouristiques, points d’intérêt et patrimoines naturel et culturel du Dahar.',
    detail:
      'Le projet GeoDahar est porté avec la FTADD et l’ASPG. Il est financé par le SECO dans le cadre du programme Destination Durable Tunisie, mis en œuvre par Helvetas.',
    deadline: 'Date limite passée : 30 septembre 2026 à minuit',
    documentUrl: 'https://drive.google.com/file/d/17X7cc8E0udNGrjJ5RNY2xnxnOq_3-fkX/view?usp=sharing',
    email: 'daf@ageos.org',
  },
];

const NewsGallery = ({ images, label }) => (
  <div className="mt-4 grid grid-cols-2 gap-2" aria-label={label}>
    {images.map(({ src, alt }, index) => (
      <img
        key={src}
        src={src}
        alt={alt}
        loading="lazy"
        className={`w-full rounded-lg bg-slate-100 object-cover ${
          images.length === 2
            ? 'aspect-[4/3]'
            : index === 0
              ? 'col-span-2 aspect-[16/9]'
              : 'aspect-[4/3]'
        }`}
      />
    ))}
  </div>
);

const LatestNews = () => (
  <section className="bg-white px-4 py-16 md:py-20" aria-labelledby="latest-news-title">
    <div className="mx-auto max-w-7xl">
      <div className="max-w-3xl">
        <p className="text-sm font-bold uppercase tracking-[0.2em] text-teal-700">La vie de l’association</p>
        <h2 id="latest-news-title" className="mt-3 text-3xl font-extrabold text-slate-900 md:text-4xl">
          Les dernières initiatives d’AGEOS
        </h2>
        <p className="mt-4 leading-7 text-slate-600">
          Projets, partenariats et actualités géospatiales, présentés par thème.
        </p>
      </div>

      <div className="mt-9 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        {updates.map(({ category, title, image, alt, description, detail }) => (
          <article
            key={title}
            className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition-shadow hover:shadow-md"
          >
            <img src={image} alt={alt} loading="lazy" className="aspect-[4/3] w-full bg-slate-100 object-contain" />
            <div className="p-5 md:p-6">
              <p className="text-xs font-bold uppercase leading-5 tracking-wide text-teal-800">{category}</p>
              <h3 className="mt-2 text-xl font-bold leading-snug text-slate-900">{title}</h3>
              <p className="mt-3 text-sm leading-6 text-slate-600">{description}</p>
              <p className="mt-3 border-t border-slate-100 pt-3 text-sm font-medium leading-6 text-slate-700">
                {detail}
              </p>
            </div>
          </article>
        ))}
      </div>

      <div className="mt-16 border-t border-slate-200 pt-12">
        <div className="max-w-3xl">
          <p className="text-sm font-bold uppercase tracking-[0.2em] text-teal-700">Autres actualités</p>
          <h2 className="mt-3 text-2xl font-extrabold text-slate-900 md:text-3xl">
            Gouvernance, coopération et autres actualités
          </h2>
          <p className="mt-3 leading-7 text-slate-600">
            Les annonces complémentaires et leurs photos sont regroupées ici. Ouvrez chaque rubrique pour
            consulter le récit et la galerie.
          </p>
        </div>

        <div className="mt-8 grid gap-6 xl:grid-cols-3">
          {updateImages.map(({ id, title, category, image, alt, description, detail, deadline, documentUrl, email }) => (
            <article
              key={id}
              className="overflow-hidden rounded-2xl border border-amber-200 bg-amber-50 shadow-sm xl:col-span-3 xl:grid xl:grid-cols-[minmax(220px,0.72fr)_1.28fr]"
            >
              <img src={image} alt={alt} loading="lazy" className="h-full max-h-[38rem] w-full bg-white object-contain" />
              <div className="p-6 md:p-8">
                <p className="text-xs font-bold uppercase tracking-wide text-teal-800">{category}</p>
                <h3 className="mt-2 text-2xl font-bold leading-snug text-slate-900">{title}</h3>
                <p className="mt-3 leading-7 text-slate-700">{description}</p>
                <p className="mt-3 leading-7 text-slate-600">{detail}</p>
                <p className="mt-4 inline-flex rounded-full bg-amber-200 px-4 py-2 text-sm font-bold text-amber-950">
                  {deadline}
                </p>
                <div className="mt-5 flex flex-wrap gap-x-5 gap-y-2 text-sm font-semibold">
                  <a
                    href={documentUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-teal-800 underline decoration-teal-300 underline-offset-4 hover:text-teal-950"
                  >
                    Consulter les termes de référence <span aria-hidden="true">↗</span>
                  </a>
                  <a href={`mailto:${email}`} className="text-teal-800 hover:text-teal-950">
                    Contacter AGEOS <span aria-hidden="true">↗</span>
                  </a>
                </div>
              </div>
            </article>
          ))}

          {additionalUpdates.map(({ id, title, category, description, detail, images }) => (
            <article key={id} className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm md:p-6">
              <p className="text-xs font-bold uppercase leading-5 tracking-wide text-teal-800">{category}</p>
              <h3 className="mt-2 text-xl font-bold leading-snug text-slate-900">{title}</h3>
              <p className="mt-3 text-sm leading-6 text-slate-600">{description}</p>
              <details className="group mt-4 border-t border-slate-100 pt-4">
                <summary className="cursor-pointer list-none text-sm font-semibold text-teal-800 marker:content-none focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-teal-600">
                  <span className="group-open:hidden">Lire la suite et voir les photos <span aria-hidden="true">＋</span></span>
                  <span className="hidden group-open:inline">Réduire <span aria-hidden="true">−</span></span>
                </summary>
                <p className="mt-3 text-sm leading-6 text-slate-600">{detail}</p>
                <NewsGallery images={images} label={`Galerie : ${title}`} />
              </details>
            </article>
          ))}
        </div>
      </div>

      <p className="mt-8 text-sm text-slate-500">
        Informations reprises des annonces AGEOS et des visuels partagés par l’association.
      </p>
    </div>
  </section>
);

export default LatestNews;

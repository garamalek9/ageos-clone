import React from 'react';

const trendValues = [100, 108, 104, 116, 124];
const trendYears = ['2021', '2022', '2023', '2024', '2025'];
const themes = [
  { label: 'Observation de la Terre', value: 84 },
  { label: 'Géomatique', value: 68 },
  { label: 'Formation', value: 53 },
  { label: 'GeoAI', value: 42 },
];

const chartWidth = 520;
const chartHeight = 220;
const chartPadding = { top: 24, right: 20, bottom: 38, left: 44 };
const trendPoints = trendValues.map((value, index) => ({
  x: chartPadding.left + (index * (chartWidth - chartPadding.left - chartPadding.right)) / (trendValues.length - 1),
  y: chartPadding.top + ((130 - value) / 40) * (chartHeight - chartPadding.top - chartPadding.bottom),
}));
const trendPath = trendPoints.map(({ x, y }, index) => `${index === 0 ? 'M' : 'L'} ${x} ${y}`).join(' ');

const HomeCharts = () => (
  <section className="home-charts px-4 py-16 md:py-20" aria-labelledby="home-charts-title">
    <div className="mx-auto max-w-7xl">
      <div className="home-charts__heading">
        <div>
          <p className="home-charts__eyebrow">Données & territoires</p>
          <h2 id="home-charts-title">Le géospatial en perspective</h2>
          <p className="home-charts__intro">
            Des exemples de visualisations pour illustrer comment les données peuvent éclairer
            l’évolution des territoires.
          </p>
        </div>
        <p className="home-charts__notice">
          <span aria-hidden="true">i</span>
          Graphiques de démonstration : les chiffres sont indicatifs, non officiels et à confirmer
          auprès d’AGEOS.
        </p>
      </div>

      <div className="home-charts__grid">
        <article className="home-chart-card">
          <div className="home-chart-card__header">
            <div>
              <p className="home-chart-card__eyebrow">Suivi territorial</p>
              <h3>Évolution d’un indicateur</h3>
            </div>
            <span className="home-chart-card__badge">Exemple</span>
          </div>
          <p className="home-chart-card__description">Indice illustratif · base 100 en 2021</p>
          <div className="home-chart-card__plot">
            <svg
              viewBox={`0 0 ${chartWidth} ${chartHeight}`}
              role="img"
              aria-label="Graphique illustratif : l’indice passe de 100 en 2021 à 124 en 2025, avec des valeurs intermédiaires indicatives."
            >
              {[90, 100, 110, 120, 130].map((value) => {
                const y = chartPadding.top + ((130 - value) / 40) * (chartHeight - chartPadding.top - chartPadding.bottom);
                return (
                  <g key={value}>
                    <line
                      x1={chartPadding.left}
                      x2={chartWidth - chartPadding.right}
                      y1={y}
                      y2={y}
                      className="home-chart-card__gridline"
                    />
                    <text x={chartPadding.left - 10} y={y + 4} textAnchor="end" className="home-chart-card__axis-label">
                      {value}
                    </text>
                  </g>
                );
              })}
              <path
                d={`${trendPath} L ${trendPoints[trendPoints.length - 1].x} ${chartHeight - chartPadding.bottom} L ${trendPoints[0].x} ${chartHeight - chartPadding.bottom} Z`}
                className="home-chart-card__area"
              />
              <path d={trendPath} className="home-chart-card__line" />
              {trendPoints.map(({ x, y }, index) => (
                <g key={trendYears[index]}>
                  <circle cx={x} cy={y} r="5" className="home-chart-card__point" />
                  <text
                    x={x}
                    y={chartHeight - 10}
                    textAnchor="middle"
                    className="home-chart-card__axis-label"
                  >
                    {trendYears[index]}
                  </text>
                </g>
              ))}
            </svg>
          </div>
          <p className="home-chart-card__footnote">Valeurs d’exemple uniquement — série réelle à définir.</p>
        </article>

        <article className="home-chart-card">
          <div className="home-chart-card__header">
            <div>
              <p className="home-chart-card__eyebrow">Domaines géospatiaux</p>
              <h3>Thématiques en données</h3>
            </div>
            <span className="home-chart-card__badge">Exemple</span>
          </div>
          <p className="home-chart-card__description">Valeurs d’illustration · échelle sur 100</p>
          <div className="home-chart-card__bars" role="img" aria-label="Graphique illustratif des thématiques : Observation de la Terre 84, Géomatique 68, Formation 53 et GeoAI 42. Valeurs non officielles.">
            {themes.map(({ label, value }) => (
              <div className="home-chart-bar" key={label}>
                <div className="home-chart-bar__labels">
                  <span>{label}</span>
                  <span>{value}</span>
                </div>
                <div className="home-chart-bar__track" aria-hidden="true">
                  <span style={{ width: `${value}%` }} />
                </div>
              </div>
            ))}
          </div>
          <p className="home-chart-card__footnote">Répartition fictive, à remplacer par des données validées par AGEOS.</p>
        </article>
      </div>
    </div>
  </section>
);

export default HomeCharts;

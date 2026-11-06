import { fireEvent, render, screen } from '@testing-library/react';
import App from './App';

jest.mock('react-router-dom', () => {
  const React = jest.requireActual('react');
  const Link = ({ to, children, ...props }) => React.createElement('a', { href: to, ...props }, children);
  const NavLink = ({ to, children, className, end, ...props }) => {
    const path = globalThis.window.location.pathname;
    const isActive = path === to || (!end && path.startsWith(`${to}/`));
    const activeClass = typeof className === 'function' ? className({ isActive }) : className;
    return React.createElement('a', { href: to, className: activeClass, ...props }, children);
  };

  return {
    BrowserRouter: ({ children }) => children,
    Link,
    NavLink,
    useLocation: () => ({ pathname: globalThis.window.location.pathname }),
    Route: ({ element }) => element,
    Routes: ({ children }) => {
      const route = React.Children.toArray(children).find(
        (child) => child.props.path === globalThis.window.location.pathname
      );
      return route ? route.props.element : null;
    },
  };
}, { virtual: true });

test('renders the AGEOS home page', () => {
  window.history.pushState({}, '', '/');
  render(<App />);

  expect(screen.getByRole('heading', { name: /le géospatial au service des territoires/i })).toBeInTheDocument();
  expect(screen.getByRole('link', { name: 'Découvrir AGEOS' })).toHaveAttribute('href', '/missions');
  expect(
    screen.getAllByRole('img', { name: /affiche AGEOS pour le Sommet international de l’espace/i }).some(
      (image) => image.getAttribute('src') === '/images/space-summit-paris-poster.png'
    )
  ).toBe(true);
  expect(screen.getByRole('link', { name: 'Nos actualités' })).toHaveAttribute('href', '/actualites');
  expect(screen.getByRole('heading', { name: 'Le géospatial en perspective' })).toBeInTheDocument();
  expect(screen.getByText(/graphiques de démonstration.*chiffres sont indicatifs/i)).toBeInTheDocument();
  expect(screen.getByRole('img', { name: /indice passe de 100 en 2021 à 124 en 2025/i })).toBeInTheDocument();
  expect(screen.getByRole('heading', { name: 'Space for Resilience' })).toBeInTheDocument();
  expect(screen.getByRole('link', { name: /s’inscrire gratuitement/i })).toHaveAttribute(
    'href',
    'https://arcg.is/0e5CC13'
  );
});

test('shows AGEOS’s latest news on the news page', () => {
  window.history.pushState({}, '', '/actualites');
  render(<App />);

  expect(screen.getByRole('heading', { name: 'Actualités AGEOS' })).toBeInTheDocument();
  expect(screen.getByRole('heading', { name: 'Space for Resilience' })).toBeInTheDocument();
  expect(screen.getByText('participants inscrits dans le monde')).toBeInTheDocument();
  expect(screen.getByText('450+')).toBeInTheDocument();
  expect(screen.getByRole('heading', { name: /integration day 2026 de l’essted/i })).toBeInTheDocument();
  expect(screen.getByRole('heading', { name: /expoclimat/i })).toBeInTheDocument();
  expect(screen.getByRole('heading', { name: /écosystèmes spatiaux tunisien/i })).toBeInTheDocument();
  expect(screen.getByRole('heading', { name: /bienvenue à asma chermitti/i })).toBeInTheDocument();
  expect(screen.getByRole('heading', { name: /nouveau bureau/i })).toBeInTheDocument();
  expect(screen.getByRole('heading', { name: /geoai: powering the cities of tomorrow/i })).toBeInTheDocument();
  expect(screen.getByRole('heading', { name: /consultation mapdahar/i })).toBeInTheDocument();
  expect(screen.getByText(/date limite passée : 30 septembre 2026/i)).toBeInTheDocument();
  expect(screen.getByRole('link', { name: /consulter les termes de référence/i })).toHaveAttribute(
    'href',
    'https://drive.google.com/file/d/17X7cc8E0udNGrjJ5RNY2xnxnOq_3-fkX/view?usp=sharing'
  );
  expect(screen.getByRole('heading', { name: /plaidoyer climatique et environnemental/i })).toBeInTheDocument();
  expect(screen.getByRole('heading', { name: /69e session du copuos/i })).toBeInTheDocument();
  expect(screen.getByRole('heading', { name: /bilan 2025 et perspectives 2026/i })).toBeInTheDocument();
  expect(screen.getByRole('heading', { name: /bénévoles pour son équipe communication/i })).toBeInTheDocument();
  expect(screen.getByRole('heading', { name: /sommet international de l’espace à paris/i })).toBeInTheDocument();
  expect(screen.getByRole('heading', { name: /projection cartographique compte/i })).toBeInTheDocument();
  const galleryToggle = screen.getAllByText(/lire la suite et voir les photos/i)[0];
  fireEvent.click(galleryToggle);
  expect(screen.getByRole('img', { name: /atelier pagecte consacré au plaidoyer/i })).toBeInTheDocument();
  expect(screen.getByRole('heading', { name: 'Quelques rendez-vous AGEOS' })).toBeInTheDocument();
});

test('includes the official project examples and AGEOS contact details', () => {
  window.history.pushState({}, '', '/projets');
  render(<App />);

  expect(screen.getByRole('heading', { name: /sig participatif · beni khalled/i })).toBeInTheDocument();
  expect(screen.getByRole('heading', { name: /geomag · erasmus/i })).toBeInTheDocument();
  expect(screen.getByRole('link', { name: 'info@ageos.org' })).toHaveAttribute('href', 'mailto:info@ageos.org');
});

test('shows the AGEOS board and verified social channels', () => {
  window.history.pushState({}, '', '/missions');
  render(<App />);

  expect(screen.getByRole('heading', { name: 'Bureau AGEOS · 2026–2028' })).toBeInTheDocument();
  expect(screen.getByRole('heading', { name: 'Nesrine Chehata' })).toBeInTheDocument();
  expect(screen.getByRole('heading', { name: 'Ismail Laribi' })).toBeInTheDocument();
  expect(screen.getByRole('heading', { name: 'Jihene Ghiloufi' })).toBeInTheDocument();
  expect(screen.getByRole('heading', { name: 'Souha Zriba' })).toBeInTheDocument();
  expect(screen.getByRole('link', { name: 'AGEOS sur Instagram' })).toHaveAttribute(
    'href',
    'https://www.instagram.com/ageos.tunisie/'
  );
  expect(screen.getByRole('link', { name: 'AGEOS sur Facebook' }).querySelector('svg')).toBeInTheDocument();
  expect(screen.getByRole('link', { name: 'AGEOS sur LinkedIn' }).querySelector('svg')).toBeInTheDocument();
  expect(screen.getByRole('link', { name: 'AGEOS sur Instagram' }).querySelector('svg')).toBeInTheDocument();
  expect(screen.getByRole('link', { name: 'AGEOS sur YouTube' })).toHaveAttribute(
    'href',
    'https://www.youtube.com/c/AGEOS-Tunisie'
  );
  expect(screen.getByRole('link', { name: 'AGEOS sur YouTube' }).querySelector('svg')).toBeInTheDocument();
});

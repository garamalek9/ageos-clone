import React from 'react';

const socialNetworks = [
  { label: 'Facebook', href: 'https://www.facebook.com/AGEOS.Tunisie/' },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/company/ageos-tunisia' },
  { label: 'Instagram', href: 'https://www.instagram.com/ageos.tunisie/' },
  { label: 'YouTube', href: 'https://www.youtube.com/c/AGEOS-Tunisie' },
];

const SocialIcon = ({ network }) => {
  const commonProps = {
    'aria-hidden': true,
    className: 'social-rail__icon',
    fill: 'currentColor',
    viewBox: '0 0 24 24',
  };

  if (network === 'Facebook') {
    return (
      <svg {...commonProps}>
        <path d="M13.5 21v-8h2.7l.4-3.1h-3.1V7.9c0-.9.3-1.5 1.6-1.5h1.7V3.6c-.3 0-1.3-.1-2.5-.1-2.5 0-4.2 1.5-4.2 4.3v2.1H7.3V13h2.8v8z" />
      </svg>
    );
  }

  if (network === 'LinkedIn') {
    return (
      <svg {...commonProps}>
        <path d="M20.45 20.45h-3.56v-5.57c0-1.33-.02-3.04-1.85-3.04-1.85 0-2.13 1.45-2.13 2.94v5.67H9.35V9h3.42v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46zM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12M7.12 20.45H3.56V9h3.56z" />
      </svg>
    );
  }

  if (network === 'Instagram') {
    return (
      <svg {...commonProps} fill="none" stroke="currentColor" strokeWidth="2">
        <rect x="3" y="3" width="18" height="18" rx="5" />
        <circle cx="12" cy="12" r="4" />
        <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
      </svg>
    );
  }

  return (
    <svg {...commonProps}>
      <path d="M23.5 6.2a3 3 0 0 0-2.1-2.1C19.5 3.6 12 3.6 12 3.6s-7.5 0-9.4.5A3 3 0 0 0 .5 6.2 31 31 0 0 0 0 12a31 31 0 0 0 .5 5.8 3 3 0 0 0 2.1 2.1c1.9.5 9.4.5 9.4.5s7.5 0 9.4-.5a3 3 0 0 0 2.1-2.1A31 31 0 0 0 24 12a31 31 0 0 0-.5-5.8ZM9.6 15.6V8.4l6.2 3.6z" />
    </svg>
  );
};

export const SocialLinks = ({ className = '' }) => (
  <div className={`social-links ${className}`} aria-label="Réseaux sociaux AGEOS">
    {socialNetworks.map((social) => (
      <a
        key={social.label}
        href={social.href}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={`AGEOS sur ${social.label}`}
        className={`social-rail__link social-rail__link--${social.label.toLowerCase()} flex h-12 w-12 items-center justify-center rounded-full text-white focus:outline-none focus:ring-2 focus:ring-offset-2`}
      >
        <SocialIcon network={social.label} />
        <span className="social-rail__tooltip" aria-hidden="true">{social.label}</span>
        <span className="social-rail__mobile-label">{social.label}</span>
      </a>
    ))}
  </div>
);

const SocialSidebar = () => (
  <aside className="social-rail fixed right-4 top-1/2 z-40 hidden -translate-y-1/2 flex-col gap-3 xl:flex">
    <SocialLinks />
  </aside>
);

export default SocialSidebar;

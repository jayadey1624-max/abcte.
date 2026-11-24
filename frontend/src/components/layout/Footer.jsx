import React from 'react';
import { useApp } from '../../context/AppContext';

export const Footer = () => {
  const { navigateTo } = useApp();

  return (
    <footer className="w-full mt-auto bg-surface-container-lowest border-t border-outline-variant/40 flex flex-col items-center gap-6 py-16 px-margin-mobile text-center">
      <div
        onClick={() => navigateTo('home')}
        className="font-display-lg text-headline-md text-on-surface cursor-pointer hover:opacity-80 transition-opacity"
      >
        ABC Textiles
      </div>
      <p className="font-body-md text-caption text-on-surface-variant max-w-md">
        Purveyors of quiet luxury fabrics, bespoke weaves, and generational craftsmanship since 1994.
      </p>
      <div className="flex flex-wrap justify-center gap-8 my-2">
        <button
          onClick={() => navigateTo('heritage')}
          className="font-body-md text-caption uppercase tracking-wider text-on-surface-variant hover:text-primary transition-colors"
        >
          Craftsmanship & Heritage
        </button>
        <button
          onClick={() => navigateTo('collections')}
          className="font-body-md text-caption uppercase tracking-wider text-on-surface-variant hover:text-primary transition-colors"
        >
          Collections
        </button>
        <button
          onClick={() => navigateTo('catalogue')}
          className="font-body-md text-caption uppercase tracking-wider text-on-surface-variant hover:text-primary transition-colors"
        >
          Fabric Catalogue
        </button>
        <button
          onClick={() => navigateTo('showroom')}
          className="font-body-md text-caption uppercase tracking-wider text-on-surface-variant hover:text-primary transition-colors"
        >
          Book Consultation
        </button>
        <button
          onClick={() => navigateTo('contact')}
          className="font-body-md text-caption uppercase tracking-wider text-on-surface-variant hover:text-primary transition-colors"
        >
          Contact & Showroom
        </button>
        <button
          onClick={() => navigateTo('admin')}
          className="font-body-md text-caption uppercase tracking-wider text-on-surface-variant hover:text-primary transition-colors"
        >
          Admin Portal
        </button>
      </div>
      <p className="font-body-md text-caption text-on-surface-variant/70 border-t border-outline-variant/30 pt-6 w-full max-w-md">
        © 2026 ABC Textiles. All rights reserved. Designed with Atelier Weave.
      </p>
    </footer>
  );
};

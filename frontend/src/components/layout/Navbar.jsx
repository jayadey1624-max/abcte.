import React from 'react';
import { useApp } from '../../context/AppContext';

export const Navbar = () => {
  const { currentPage, navigateTo, cartItems, mobileMenuOpen, setMobileMenuOpen } = useApp();

  const navLinks = [
    { id: 'collections', label: 'Collections' },
    { id: 'catalogue', label: 'Catalogue' },
    { id: 'showroom', label: 'Showroom' },
    { id: 'heritage', label: 'Our Story' },
    { id: 'contact', label: 'Contact' },
    { id: 'admin', label: 'Admin Workspace' }
  ];

  return (
    <header className="bg-surface/85 backdrop-blur-md fixed top-0 w-full z-50 border-b border-outline-variant/30 transition-all">
      <div className="flex justify-between items-center px-margin-mobile md:px-margin-desktop h-16 w-full max-w-container-max mx-auto">
        <button
          aria-label="Menu"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="text-on-surface-variant hover:opacity-70 transition-opacity p-1"
        >
          <span className="material-symbols-outlined text-2xl">{mobileMenuOpen ? 'close' : 'menu'}</span>
        </button>

        <button
          onClick={() => navigateTo('home')}
          className="font-display-lg text-headline-md text-primary tracking-tight text-center hover:opacity-85 transition-opacity"
        >
          ABC Textiles
        </button>

        <div className="flex items-center gap-3">
          <button
            onClick={() => navigateTo('catalogue')}
            aria-label="Shopping Bag / Samples"
            className="text-on-surface-variant hover:opacity-70 transition-opacity relative p-1"
          >
            <span className="material-symbols-outlined text-2xl">shopping_bag</span>
            {cartItems.length > 0 && (
              <span className="absolute -top-1 -right-1 bg-primary text-on-primary text-[10px] font-semibold w-4 h-4 rounded-full flex items-center justify-center">
                {cartItems.length}
              </span>
            )}
          </button>
        </div>
      </div>

      {/* Desktop Nav Links */}
      <nav className="hidden md:flex justify-center gap-8 py-3 bg-surface/90 backdrop-blur-md border-b border-outline-variant/30 text-on-surface-variant font-label-md text-label-md">
        {navLinks.map((link) => (
          <button
            key={link.id}
            onClick={() => navigateTo(link.id)}
            className={`transition-colors pb-1 uppercase tracking-wider text-xs ${
              currentPage === link.id
                ? 'text-primary font-semibold border-b-2 border-primary'
                : 'hover:text-primary'
            }`}
          >
            {link.label}
          </button>
        ))}
      </nav>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-surface-container-lowest border-b border-outline-variant shadow-lg px-6 py-6 flex flex-col gap-4 animate-in slide-in-from-top duration-200">
          <button
            onClick={() => navigateTo('home')}
            className={`text-left py-2 font-display-lg text-lg ${currentPage === 'home' ? 'text-primary font-bold' : 'text-on-surface-variant'}`}
          >
            Home
          </button>
          {navLinks.map((link) => (
            <button
              key={link.id}
              onClick={() => navigateTo(link.id)}
              className={`text-left py-2 font-label-md text-sm uppercase tracking-wider ${
                currentPage === link.id ? 'text-primary font-bold border-l-2 border-primary pl-2' : 'text-on-surface-variant'
              }`}
            >
              {link.label}
            </button>
          ))}
        </div>
      )}
    </header>
  );
};

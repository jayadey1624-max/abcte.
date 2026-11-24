import React from 'react';
import { useApp } from '../../context/AppContext';

export const AdminLayout = ({ children, activeAdminTab, onTabChange }) => {
  const { navigateTo } = useApp();

  return (
    <div className="min-h-screen flex bg-background text-on-background">
      {/* Desktop Sidebar */}
      <aside className="w-64 border-r border-outline-variant/30 bg-surface-container-low hidden md:flex flex-col justify-between p-6 fixed h-full z-40">
        <div className="space-y-8">
          <div className="flex items-center gap-3 cursor-pointer" onClick={() => navigateTo('home')}>
            <span className="material-symbols-outlined text-2xl text-primary">grain</span>
            <span className="font-display-lg text-lg tracking-tight text-primary font-semibold">ABC Textiles</span>
          </div>

          <nav className="space-y-1">
            <button
              onClick={() => {
                if (onTabChange) onTabChange('dashboard');
                navigateTo('admin');
              }}
              className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg text-label-md font-medium text-left transition-colors ${
                activeAdminTab === 'dashboard'
                  ? 'bg-surface-container text-primary font-semibold border-l-4 border-primary'
                  : 'text-on-surface-variant hover:text-primary hover:bg-surface-container/40'
              }`}
            >
              <span className="material-symbols-outlined text-xl">dashboard</span>
              Dashboard
            </button>

            <button
              onClick={() => {
                if (onTabChange) onTabChange('meetings');
                navigateTo('admin-meetings');
              }}
              className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg text-label-md font-medium text-left transition-colors ${
                activeAdminTab === 'meetings'
                  ? 'bg-surface-container text-primary font-semibold border-l-4 border-primary'
                  : 'text-on-surface-variant hover:text-primary hover:bg-surface-container/40'
              }`}
            >
              <span className="material-symbols-outlined text-xl">event_available</span>
              Meetings & Bookings
            </button>

            <button
              onClick={() => navigateTo('catalogue')}
              className="w-full flex items-center gap-3 px-4 py-3 rounded-lg text-label-md font-medium text-left text-on-surface-variant hover:text-primary hover:bg-surface-container/40 transition-colors"
            >
              <span className="material-symbols-outlined text-xl">layers</span>
              Catalogue View
            </button>

            <button
              onClick={() => navigateTo('showroom')}
              className="w-full flex items-center gap-3 px-4 py-3 rounded-lg text-label-md font-medium text-left text-on-surface-variant hover:text-primary hover:bg-surface-container/40 transition-colors"
            >
              <span className="material-symbols-outlined text-xl">storefront</span>
              Showroom Portal
            </button>
          </nav>
        </div>

        <div className="pt-6 border-t border-outline-variant/30 space-y-2">
          <button
            onClick={() => navigateTo('home')}
            className="w-full flex items-center gap-3 px-4 py-2.5 text-xs uppercase tracking-wider text-on-surface-variant hover:text-primary transition-colors"
          >
            <span className="material-symbols-outlined text-sm">arrow_back</span>
            Back to Client Site
          </button>
          <div className="flex items-center gap-3 px-4 py-2 bg-surface-container-high/50 rounded-lg">
            <div className="w-8 h-8 rounded-full bg-primary text-on-primary flex items-center justify-center text-xs font-bold">
              AD
            </div>
            <div className="text-left text-xs">
              <p className="font-semibold text-primary">Master Admin</p>
              <p className="text-on-surface-variant">admin@abctextiles.com</p>
            </div>
          </div>
        </div>
      </aside>

      {/* Main Container */}
      <div className="flex-1 md:ml-64 flex flex-col min-h-screen">
        {/* Top Header */}
        <header className="h-16 px- margin-mobile md:px-margin-desktop bg-surface/85 backdrop-blur-md sticky top-0 z-30 border-b border-outline-variant/30 flex items-center justify-between px-6">
          <div className="flex items-center gap-3">
            <button
              onClick={() => navigateTo('home')}
              className="md:hidden text-primary p-1"
              title="Return Home"
            >
              <span className="material-symbols-outlined">arrow_back</span>
            </button>
            <h1 className="font-headline-md text-lg md:text-headline-md text-primary font-medium">
              ABC Textiles Admin Workspace
            </h1>
          </div>

          <div className="flex items-center gap-4">
            <button
              onClick={() => {
                if (onTabChange) onTabChange('meetings');
                navigateTo('admin-meetings');
              }}
              className="relative text-on-surface-variant hover:text-primary transition-colors p-2"
              title="Meeting notifications"
            >
              <span className="material-symbols-outlined">notifications</span>
              <span className="absolute top-1 right-1 w-2.5 h-2.5 bg-error rounded-full"></span>
            </button>
            <div className="w-8 h-8 rounded-full bg-secondary-container flex items-center justify-center text-primary font-medium text-xs">
              AD
            </div>
          </div>
        </header>

        {/* Content Body */}
        <main className="flex-1 p-6 md:p-10 max-w-container-max w-full mx-auto">
          {children}
        </main>
      </div>
    </div>
  );
};

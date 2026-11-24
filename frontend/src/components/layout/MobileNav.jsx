import React from 'react';
import { useApp } from '../../context/AppContext';

export const MobileNav = () => {
  const { currentPage, navigateTo } = useApp();

  const items = [
    { id: 'collections', label: 'Collections', icon: 'grid_view' },
    { id: 'catalogue', label: 'Catalogue', icon: 'palette' },
    { id: 'showroom', label: 'Bookings', icon: 'calendar_today' },
    { id: 'contact', label: 'Showroom', icon: 'storefront' },
    { id: 'admin', label: 'Admin', icon: 'admin_panel_settings' }
  ];

  return (
    <nav className="md:hidden bg-surface/90 backdrop-blur-xl fixed bottom-0 left-0 w-full flex justify-around items-center h-20 px-2 z-50 pb-safe border-t border-outline-variant/30 shadow-sm">
      {items.map((item) => {
        const isActive = currentPage === item.id;
        return (
          <button
            key={item.id}
            onClick={() => navigateTo(item.id)}
            className={`flex flex-col items-center justify-center transition-all px-3 py-1.5 ${
              isActive
                ? 'text-primary bg-secondary-container/50 rounded-full -translate-y-0.5'
                : 'text-on-secondary-container hover:text-primary'
            }`}
          >
            <span
              className="material-symbols-outlined text-[22px]"
              style={isActive ? { fontVariationSettings: "'FILL' 1" } : {}}
            >
              {item.icon}
            </span>
            <span className="font-label-md text-[11px] mt-0.5 tracking-tight font-medium">
              {item.label}
            </span>
          </button>
        );
      })}
    </nav>
  );
};

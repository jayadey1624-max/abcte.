import React from 'react';
import { useApp } from '../../context/AppContext';

export const OurCollectionsPage = () => {
  const { collections, navigateTo } = useApp();

  return (
    <div className="w-full max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop py-12 flex flex-col gap-20">
      {/* Header */}
      <section className="text-center md:text-left space-y-4 max-w-3xl">
        <span className="font-label-md text-xs uppercase tracking-widest text-on-surface-variant">
          Atelier Archive
        </span>
        <h1 className="font-display-lg text-headline-lg-mobile md:text-headline-lg text-primary">
          Curated Collections
        </h1>
        <p className="font-body-lg text-body-lg text-on-surface-variant leading-relaxed">
          Discover our meticulously crafted fabrics, where traditional techniques meet contemporary design. Each collection tells a unique story of texture, color, and unparalleled quality.
        </p>
      </section>

      {/* Collection Cards */}
      <div className="grid grid-cols-1 gap-20">
        {collections.map((col) => (
          <article
            key={col.id}
            className="relative group h-[520px] md:h-[600px] w-full overflow-hidden rounded-2xl shadow-sm border border-outline-variant/30"
          >
            <div
              className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
              style={{ backgroundImage: `url('${col.image}')` }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/30 to-transparent" />

            <div className="absolute bottom-0 left-0 p-8 md:p-12 w-full text-white flex flex-col md:flex-row md:items-end md:justify-between gap-6">
              <div className="space-y-4 max-w-xl">
                <div className="flex items-center gap-3">
                  <span className="font-label-md text-xs tracking-wider uppercase bg-white/20 backdrop-blur-md px-3 py-1 rounded-full text-white">
                    {col.season}
                  </span>
                  <span className="text-xs uppercase tracking-wider opacity-80">
                    {col.fabricCount}
                  </span>
                </div>
                <h2 className="font-display-lg text-headline-lg-mobile md:text-headline-lg text-white">
                  {col.title}
                </h2>
                <p className="font-body-md text-body-md text-white/90 leading-relaxed max-w-lg">
                  {col.description}
                </p>
              </div>

              <button
                onClick={() => navigateTo('catalogue', col.categoryFilter)}
                className="bg-surface text-primary font-label-md text-label-md px-7 py-3.5 rounded hover:bg-white transition-colors flex items-center justify-center gap-2 shrink-0 self-start md:self-auto uppercase tracking-wider"
              >
                View Collection
                <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
              </button>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
};

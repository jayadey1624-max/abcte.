import React, { useState } from 'react';
import { useApp } from '../../context/AppContext';
import { FabricCard } from '../../components/ui/FabricCard';
import { FabricDetailModal } from '../../components/ui/FabricDetailModal';

export const FabricCataloguePage = () => {
  const { fabrics, selectedCategory, setSelectedCategory, searchQuery, setSearchQuery } = useApp();
  const [activeModalFabric, setActiveModalFabric] = useState(null);
  const [filterDrawerOpen, setFilterDrawerOpen] = useState(false);
  const [priceSort, setPriceSort] = useState('default');

  const categories = ['All', 'Linen', 'Silk', 'Cotton', 'Wool', 'Synthetic'];

  const filteredFabrics = fabrics.filter((fabric) => {
    const matchesCategory = selectedCategory === 'All' || fabric.category.toLowerCase() === selectedCategory.toLowerCase();
    const matchesQuery = fabric.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         fabric.category.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         fabric.composition.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesQuery;
  }).sort((a, b) => {
    if (priceSort === 'low-high') return a.pricePerYard - b.pricePerYard;
    if (priceSort === 'high-low') return b.pricePerYard - a.pricePerYard;
    return 0;
  });

  return (
    <div className="pt-8 pb-32 px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto min-h-screen">
      {/* Header */}
      <div className="mb-10 text-left">
        <span className="font-label-md text-xs uppercase tracking-widest text-on-surface-variant">
          Complete Swatch Library
        </span>
        <h1 className="font-display-lg text-headline-lg-mobile md:text-headline-lg text-primary mt-1">
          Fabric Catalogue
        </h1>
        <p className="font-body-md text-body-md text-on-surface-variant max-w-xl mt-2">
          Explore artisanal weaves, hand-spun fibers, and premium compositions. Order samples directly to your studio.
        </p>
      </div>

      {/* Search & Filter Bar */}
      <section className="mb-8 flex flex-col md:flex-row items-center gap-4">
        <div className="relative flex-1 w-full group">
          <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-outline-variant group-focus-within:text-primary transition-colors">
            search
          </span>
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search fabrics by name, material, or weave..."
            className="w-full bg-surface-container-low border-b border-outline-variant/50 focus:border-primary px-12 py-3.5 outline-none font-body-md text-body-md transition-all rounded-t-DEFAULT"
          />
          {searchQuery && (
            <button
              onClick={() => setSearchQuery('')}
              className="absolute right-4 top-1/2 -translate-y-1/2 text-on-surface-variant hover:text-primary"
            >
              <span className="material-symbols-outlined text-sm">close</span>
            </button>
          )}
        </div>

        <div className="flex items-center gap-3 w-full md:w-auto justify-end">
          <select
            value={priceSort}
            onChange={(e) => setPriceSort(e.target.value)}
            className="bg-surface-container-low border border-outline-variant/40 px-3 py-3 rounded text-caption font-label-md uppercase tracking-wider text-on-surface outline-none"
          >
            <option value="default">Sort by: Featured</option>
            <option value="low-high">Price: Low to High</option>
            <option value="high-low">Price: High to Low</option>
          </select>

          <button
            onClick={() => setFilterDrawerOpen(!filterDrawerOpen)}
            className="p-3 border border-outline-variant/50 hover:border-primary rounded-DEFAULT transition-colors flex items-center justify-center bg-surface-container-lowest"
            title="Filter by material"
          >
            <span className="material-symbols-outlined text-on-surface-variant hover:text-primary">tune</span>
          </button>
        </div>
      </section>

      {/* Categories / Chips */}
      <section className="mb-10 overflow-x-auto no-scrollbar -mx-margin-mobile px-margin-mobile md:mx-0 md:px-0">
        <div className="flex gap-3 w-max pb-2">
          {categories.map((cat) => {
            const isActive = selectedCategory === cat;
            return (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-6 py-2 rounded-full font-label-md text-label-md transition-all uppercase tracking-wider text-xs ${
                  isActive
                    ? 'border border-primary bg-primary text-on-primary shadow-sm'
                    : 'border border-outline-variant hover:border-primary text-on-surface-variant hover:text-primary bg-surface-container-lowest'
                }`}
              >
                {cat}
              </button>
            );
          })}
        </div>
      </section>

      {/* Product Count Indicator */}
      <div className="flex justify-between items-center mb-6 text-caption text-on-surface-variant font-label-md uppercase tracking-wider">
        <span>Showing {filteredFabrics.length} materials</span>
        {selectedCategory !== 'All' && (
          <button
            onClick={() => setSelectedCategory('All')}
            className="underline hover:text-primary"
          >
            Clear filter
          </button>
        )}
      </div>

      {/* Product Grid */}
      {filteredFabrics.length > 0 ? (
        <section className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-4 gap-y-12 md:gap-gutter">
          {filteredFabrics.map((fabric) => (
            <FabricCard
              key={fabric.id}
              fabric={fabric}
              onSelect={(item) => setActiveModalFabric(item)}
            />
          ))}
        </section>
      ) : (
        <div className="py-20 text-center flex flex-col items-center justify-center space-y-4">
          <span className="material-symbols-outlined text-5xl text-outline-variant">texture</span>
          <p className="font-headline-md text-xl text-primary">No fabrics found matching your criteria</p>
          <button
            onClick={() => {
              setSelectedCategory('All');
              setSearchQuery('');
            }}
            className="bg-primary text-on-primary px-6 py-2.5 rounded text-xs uppercase tracking-wider font-label-md"
          >
            Reset Filters
          </button>
        </div>
      )}

      {/* Fabric Quick View Modal */}
      {activeModalFabric && (
        <FabricDetailModal
          fabric={activeModalFabric}
          onClose={() => setActiveModalFabric(null)}
        />
      )}
    </div>
  );
};

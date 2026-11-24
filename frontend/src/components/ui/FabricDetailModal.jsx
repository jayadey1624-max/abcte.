import React from 'react';
import { useApp } from '../../context/AppContext';

export const FabricDetailModal = ({ fabric, onClose }) => {
  const { addToCart, navigateTo } = useApp();
  if (!fabric) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-in fade-in duration-200">
      <div
        className="bg-surface-container-lowest max-w-3xl w-full rounded-2xl overflow-hidden shadow-2xl border border-outline-variant/40 relative flex flex-col md:flex-row max-h-[90vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 w-9 h-9 rounded-full bg-surface/80 backdrop-blur-md flex items-center justify-center text-primary hover:bg-surface transition-colors"
          aria-label="Close modal"
        >
          <span className="material-symbols-outlined">close</span>
        </button>

        {/* Modal Left Image */}
        <div className="md:w-1/2 aspect-square md:aspect-auto bg-surface-container relative">
          <img
            src={fabric.image}
            alt={fabric.name}
            className="w-full h-full object-cover"
          />
        </div>

        {/* Modal Right Content */}
        <div className="md:w-1/2 p-6 md:p-8 flex flex-col justify-between space-y-6">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="font-label-md text-xs uppercase tracking-wider text-on-surface-variant bg-surface-container-high px-2 py-0.5 rounded">
                {fabric.category}
              </span>
              <span className="font-label-md text-xs uppercase tracking-wider text-tertiary-container bg-tertiary-fixed/30 px-2 py-0.5 rounded">
                {fabric.spec}
              </span>
            </div>

            <h2 className="font-display-lg text-headline-md text-primary mb-2">
              {fabric.name}
            </h2>
            <p className="font-headline-md text-lg text-primary font-medium mb-4">
              ${fabric.pricePerYard} <span className="text-sm font-normal text-on-surface-variant">/ linear yard</span>
            </p>

            <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed mb-6">
              {fabric.description}
            </p>

            {/* Specifications List */}
            <div className="border-t border-b border-outline-variant/30 py-4 space-y-2 text-caption font-body-md text-on-surface-variant">
              <div className="flex justify-between">
                <span>Composition:</span>
                <span className="text-primary font-medium">{fabric.composition}</span>
              </div>
              <div className="flex justify-between">
                <span>Usable Width:</span>
                <span className="text-primary font-medium">{fabric.width}</span>
              </div>
              <div className="flex justify-between">
                <span>Care Instructions:</span>
                <span className="text-primary font-medium">Dry Clean / Professional Atelier</span>
              </div>
            </div>
          </div>

          <div className="space-y-3">
            <button
              onClick={() => {
                addToCart(fabric);
                onClose();
              }}
              className="w-full bg-primary text-on-primary py-3.5 px-6 rounded-md font-label-md text-label-md uppercase tracking-wider hover:bg-tertiary-container hover:text-tertiary-fixed transition-colors flex items-center justify-center gap-2"
            >
              <span className="material-symbols-outlined text-sm">shopping_bag</span>
              Order Swatch Sample
            </button>
            <button
              onClick={() => {
                onClose();
                navigateTo('showroom');
              }}
              className="w-full border border-outline text-primary py-3 px-6 rounded-md font-label-md text-xs uppercase tracking-wider hover:border-primary transition-colors flex items-center justify-center gap-2"
            >
              Book Showroom Viewing
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

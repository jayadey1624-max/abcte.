import React, { useState } from 'react';
import { useApp } from '../../context/AppContext';

export const FabricCard = ({ fabric, onSelect }) => {
  const { addToCart } = useApp();
  const [selectedSwatch, setSelectedSwatch] = useState(fabric.swatches[0]);

  return (
    <article className="group cursor-pointer flex flex-col justify-between">
      <div>
        <div
          onClick={() => onSelect ? onSelect(fabric) : null}
          className="relative w-full aspect-[4/5] overflow-hidden bg-surface-container-high mb-4 rounded-sm"
        >
          <img
            src={fabric.image}
            alt={fabric.name}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            loading="lazy"
          />
          <div className="absolute top-2 right-2 bg-surface/80 backdrop-blur-sm text-primary text-[10px] font-semibold px-2 py-0.5 rounded-full uppercase tracking-wider">
            {fabric.category}
          </div>
        </div>

        <div className="flex flex-col gap-1">
          <div className="flex justify-between items-start gap-2">
            <h3
              onClick={() => onSelect ? onSelect(fabric) : null}
              className="font-headline-md text-body-lg text-primary truncate hover:text-tertiary-container transition-colors"
            >
              {fabric.name}
            </h3>
            <span className="font-body-md text-caption text-on-surface-variant shrink-0 mt-0.5">
              {fabric.spec}
            </span>
          </div>

          <div className="flex justify-between items-center text-caption text-on-surface-variant">
            <p className="uppercase tracking-wider text-[11px] font-medium">{fabric.width}</p>
            <span className="font-medium text-primary">${fabric.pricePerYard} / yd</span>
          </div>

          {/* Interactive Swatches */}
          <div className="flex items-center justify-between mt-2 pt-2 border-t border-outline-variant/30">
            <div className="flex gap-2">
              {fabric.swatches.map((swatch, idx) => (
                <button
                  key={idx}
                  type="button"
                  onClick={(e) => {
                    e.stopPropagation();
                    setSelectedSwatch(swatch);
                  }}
                  className={`w-4 h-4 rounded-full ring-1 ring-outline-variant/40 transition-all ${
                    selectedSwatch === swatch ? 'ring-2 ring-primary scale-110' : 'hover:scale-105'
                  }`}
                  style={{ backgroundColor: swatch }}
                  title={`Color swatch ${idx + 1}`}
                />
              ))}
            </div>

            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                addToCart(fabric, selectedSwatch);
              }}
              className="text-xs uppercase tracking-wider font-semibold text-primary hover:text-tertiary-container flex items-center gap-1 transition-colors"
            >
              <span className="material-symbols-outlined text-sm">add</span> Sample
            </button>
          </div>
        </div>
      </div>
    </article>
  );
};

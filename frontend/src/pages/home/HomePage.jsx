import React from 'react';
import { useApp } from '../../context/AppContext';

export const HomePage = () => {
  const { navigateTo, fabrics } = useApp();

  const featured = fabrics.slice(0, 4);

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative w-full h-[650px] md:h-[720px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 w-full h-full">
          <img
            alt="Premium Silk Texture"
            className="object-cover w-full h-full object-center"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuDPWvQaGM2ZnaGsHKHQw1GSFBpRj_sHVaH-d8A2bsTJ80nZn-71jqP9C4c8QTlumtrGNChieqziQ2h9O73arIyPFA_4b8mjt6cDWbBmXV-i6tkLb8QGQ3LjzW-V2umUNhhQLqwU4tw1G7ljrJtHR9KYXNmN7zd_mebHLuGgRi3t4-2YHObtmMNxRbi_OYhDsiWlR3DTt0E6SsOtYEfsluql0evDwKuEaJ5cEonBRJ3b6cMzOR1KY5BX"
          />
          <div className="absolute inset-0 bg-surface/35 backdrop-blur-[2px]"></div>
        </div>

        <div className="relative z-10 max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop text-center flex flex-col items-center">
          <span className="font-label-md text-xs uppercase tracking-widest text-primary mb-3 bg-surface/60 px-4 py-1 rounded-full border border-outline-variant/40">
            Generations of Craftsmanship
          </span>
          <h1 className="font-display-lg text-headline-lg-mobile md:text-display-lg text-primary max-w-3xl mb-6">
            Crafting Elegance in Every Thread
          </h1>
          <p className="font-body-lg text-body-lg text-on-surface-variant max-w-xl mb-10 leading-relaxed">
            Premium textiles for the modern designer. Minimalist, tactile, and rooted in the quiet luxury of heritage craftsmanship.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 items-center justify-center">
            <button
              onClick={() => navigateTo('collections')}
              className="bg-primary text-on-primary font-label-md text-label-md px-8 py-4 rounded hover:bg-tertiary-container hover:text-tertiary-fixed transition-colors tracking-wide uppercase shadow-sm"
            >
              Explore Collection
            </button>
            <button
              onClick={() => navigateTo('contact')}
              className="border border-outline text-primary font-label-md text-label-md px-8 py-4 rounded hover:border-primary hover:text-tertiary transition-colors tracking-wide uppercase bg-surface/80 backdrop-blur-sm"
            >
              Contact Us
            </button>
          </div>
        </div>
      </section>

      {/* Featured Products (Horizontal Scroll) */}
      <section className="py-24 md:py-32 bg-surface">
        <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop mb-12 flex justify-between items-end">
          <div>
            <h2 className="font-headline-md text-headline-lg-mobile md:text-headline-md text-primary mb-2">
              Featured Collections
            </h2>
            <p className="font-body-md text-body-md text-on-surface-variant">
              Discover our most sought-after materials.
            </p>
          </div>
          <button
            onClick={() => navigateTo('catalogue')}
            className="hidden md:flex items-center gap-2 font-label-md text-label-md text-primary hover:text-tertiary-container transition-colors uppercase"
          >
            View All <span className="material-symbols-outlined text-sm">arrow_forward</span>
          </button>
        </div>

        <div className="w-full overflow-x-auto hide-scrollbar pl-margin-mobile md:pl-margin-desktop pr-margin-mobile md:pr-margin-desktop pb-8">
          <div className="flex gap-gutter w-max">
            {featured.map((item) => (
              <div
                key={item.id}
                onClick={() => navigateTo('catalogue')}
                className="w-[280px] md:w-[340px] group cursor-pointer"
              >
                <div className="w-full aspect-[4/5] overflow-hidden mb-4 bg-surface-container rounded-sm">
                  <img
                    alt={item.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    src={item.image}
                  />
                </div>
                <h3 className="font-headline-md text-body-lg text-primary mb-1 group-hover:text-tertiary-container transition-colors">
                  {item.name}
                </h3>
                <p className="font-body-md text-caption text-on-surface-variant">
                  {item.category} — {item.spec}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Story (Asymmetric Layout) */}
      <section className="py-24 md:py-32 bg-surface-container-lowest border-y border-outline-variant/30">
        <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-center">
            <div className="md:col-span-5 md:col-start-2 order-2 md:order-1 flex flex-col justify-center">
              <span className="font-label-md text-xs uppercase tracking-widest text-on-surface-variant mb-3">
                Since 1994
              </span>
              <h2 className="font-headline-md text-headline-lg-mobile md:text-headline-lg text-primary mb-6">
                Heritage in Motion
              </h2>
              <p className="font-body-md text-body-md text-on-surface-variant mb-8 leading-relaxed">
                For over three decades, ABC Textiles has bridged the gap between traditional weaving techniques and contemporary design needs. Our mills operate with a singular focus: to produce materials that look exquisite and perform flawlessly.
              </p>
              <button
                onClick={() => navigateTo('heritage')}
                className="inline-flex items-center gap-2 font-label-md text-label-md text-primary hover:text-tertiary-container transition-colors uppercase border-b border-primary pb-1 w-max"
              >
                Read Our Story <span className="material-symbols-outlined text-sm">arrow_forward</span>
              </button>
            </div>
            <div className="md:col-span-6 order-1 md:order-2">
              <div className="aspect-square md:aspect-[4/3] overflow-hidden rounded-xl bg-surface-container">
                <img
                  alt="Traditional Loom"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuAa7hZmK71--wKw36AuDATwA_HLEhcdAscZgptnFjw8LnFfCABSlMzD4zgsQFG65bfVKzDn33c4acRIzB0XPZmz09oeHGvptVcIPaiBjcEJI8dtNHEFhe8RYx6sHJfxg67fWTAZB5quzWY0AIm-QWEMosyEL5UhtcRMF5urOaH_cZEmHQktGs24BaUX45i2KZUXtejVRk4DMImQv76LyfrGaJnu66WBOftwbHRjiUMuUMDnEsKA-t10"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why ABC Textiles (Bento Grid) */}
      <section className="py-24 md:py-32 bg-surface">
        <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop">
          <h2 className="font-headline-md text-headline-lg-mobile md:text-headline-md text-primary mb-16 text-center">
            The ABC Difference
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-gutter">
            {/* Feature 1 */}
            <div className="bg-surface-container-low p-8 border border-outline-variant/50 rounded-xl flex flex-col items-start hover:border-outline transition-colors duration-300">
              <span className="material-symbols-outlined text-4xl text-primary mb-6">diamond</span>
              <h3 className="font-headline-md text-body-lg text-primary mb-3">Uncompromising Quality</h3>
              <p className="font-body-md text-caption text-on-surface-variant leading-relaxed">
                Every yard is inspected with rigorous standards, ensuring flawless consistency and superior tactile feel.
              </p>
            </div>
            {/* Feature 2 */}
            <div className="bg-surface-container-low p-8 border border-outline-variant/50 rounded-xl flex flex-col items-start hover:border-outline transition-colors duration-300 md:-translate-y-8">
              <span className="material-symbols-outlined text-4xl text-primary mb-6">history_edu</span>
              <h3 className="font-headline-md text-body-lg text-primary mb-3">Rich Heritage</h3>
              <p className="font-body-md text-caption text-on-surface-variant leading-relaxed">
                Rooted in generations of textile expertise, we honor traditional methods while innovating for the future.
              </p>
            </div>
            {/* Feature 3 */}
            <div className="bg-surface-container-low p-8 border border-outline-variant/50 rounded-xl flex flex-col items-start hover:border-outline transition-colors duration-300">
              <span className="material-symbols-outlined text-4xl text-primary mb-6">eco</span>
              <h3 className="font-headline-md text-body-lg text-primary mb-3">Sustainable Practices</h3>
              <p className="font-body-md text-caption text-on-surface-variant leading-relaxed">
                Committed to environmentally conscious production, sourcing ethical yarns and minimizing our footprint.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

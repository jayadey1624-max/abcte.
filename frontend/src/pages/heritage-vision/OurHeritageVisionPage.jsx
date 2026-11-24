import React from 'react';
import { useApp } from '../../context/AppContext';

export const OurHeritageVisionPage = () => {
  const { navigateTo } = useApp();

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative w-full h-[530px] md:h-[707px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-surface-dim z-0">
          <img
            alt="Textile Workshop"
            className="w-full h-full object-cover opacity-80 mix-blend-multiply"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuDihKIIJtEgyjJG6L3vSPJsWEeN_PuqfGcy5grNT8gx6H2sOa50sQyCSDMJLYdYJOayrnNhUXg0SF6lqUHKoT-3NU6HlxaQbtGLi8YSqSFyAGnlN-ckuCZieIFC1G8Yb4ismfDjtbJmMNhccucHANynnIc-I3alUSp0xR5xST5GAti-i1h1GOY0_B2G4DcMUXdhU4vrcsIAPqFRJqG1t3JTbQCT1zCBq_b-ESRh42IpbByp2k7pbRaC"
          />
        </div>
        <div className="relative z-10 text-center px-margin-mobile max-w-3xl mx-auto">
          <span className="font-label-md text-xs uppercase tracking-widest text-on-surface bg-surface/70 px-4 py-1.5 rounded-full mb-4 inline-block">
            Our Heritage & Vision
          </span>
          <h1 className="font-display-lg text-headline-lg-mobile md:text-display-lg text-on-surface mb-6">
            Mastering the Art of Textiles
          </h1>
          <p className="font-body-lg text-body-lg text-on-surface-variant max-w-xl mx-auto leading-relaxed">
            For over three decades, we have dedicated ourselves to the quiet luxury of exceptional fabrics.
          </p>
        </div>
      </section>

      {/* Our Heritage Section */}
      <section className="py-24 px-margin-mobile md:px-margin-desktop bg-surface max-w-container-max mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-gutter">
          <div className="md:col-span-4 md:col-start-2">
            <h2 className="font-headline-lg text-headline-lg-mobile md:text-headline-lg text-primary mb-8 border-b border-outline-variant pb-4">
              Our Heritage
            </h2>
          </div>
          <div className="md:col-span-6 md:col-start-6">
            <p className="font-body-lg text-body-lg text-on-surface-variant mb-6 leading-relaxed">
              Founded in the heart of the historic textile district, ABC Textiles began as a small, family-run workshop focused solely on the finest natural fibers. From the very beginning, our commitment has been to craftsmanship over mass production. We believe that true luxury lies in the details—the slight irregularities of hand-spun yarn, the rich depth of artisanal dyes, and the enduring quality of a carefully woven bolt.
            </p>
            <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed mb-8">
              Over 30 years later, while our capabilities have expanded and our techniques have modernized, our foundational ethos remains untouched. We still source our materials with uncompromising rigor and weave our fabrics with a profound respect for the generations of artisans who came before us. Every thread tells a story of dedication, precision, and a relentless pursuit of perfection.
            </p>
            <div className="flex gap-4">
              <button
                onClick={() => navigateTo('collections')}
                className="bg-primary text-on-primary font-label-md text-xs uppercase tracking-wider px-6 py-3 rounded"
              >
                Explore Archives
              </button>
              <button
                onClick={() => navigateTo('showroom')}
                className="border border-outline text-primary font-label-md text-xs uppercase tracking-wider px-6 py-3 rounded hover:border-primary"
              >
                Book Atelier Visit
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision Blocks */}
      <section className="py-12 bg-surface-container-lowest border-y border-outline-variant/30">
        <div className="max-w-container-max mx-auto grid grid-cols-1 md:grid-cols-2">
          {/* Mission */}
          <div className="bg-primary text-on-primary p-12 md:p-24 flex flex-col justify-center">
            <span className="font-label-md text-label-md uppercase tracking-widest text-on-primary/70 mb-6">
              Our Mission
            </span>
            <h3 className="font-headline-md text-headline-md mb-6 leading-snug">
              To elevate everyday living through uncompromising textile quality.
            </h3>
            <p className="font-body-md text-body-md text-on-primary/80 leading-relaxed">
              We strive to provide designers and creators with materials that inspire, focusing on sustainable practices and enduring craftsmanship.
            </p>
          </div>

          {/* Vision */}
          <div className="bg-surface-container p-12 md:p-24 flex flex-col justify-center border-t md:border-t-0 md:border-l border-outline-variant/30">
            <span className="font-label-md text-label-md uppercase tracking-widest text-on-surface-variant mb-6">
              Our Vision
            </span>
            <h3 className="font-headline-md text-headline-md text-primary mb-6 leading-snug">
              A world where the tactile beauty of textiles is recognized as fundamental to human comfort.
            </h3>
            <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
              We envision a future where traditional weaving techniques seamlessly integrate with modern innovation, preserving heritage while embracing the new.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

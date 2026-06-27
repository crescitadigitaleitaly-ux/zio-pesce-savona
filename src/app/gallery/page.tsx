'use client';

import { useState } from 'react';

/* ───────── Gallery data ───────── */
const galleryImages = [
  {
    src: '/images/interior/un-dehor-grande-dove.jpg',
    alt: 'Dehor di Zio Pesce, terrazza esterna illuminata',
    category: 'restaurant',
  },
  {
    src: '/images/interior/un-dehor-grande-dove (1).jpg',
    alt: 'Vista serale del dehor di Zio Pesce',
    category: 'restaurant',
  },
  {
    src: '/images/interior/caption.jpg',
    alt: 'Terrazza con vista serale su Savona',
    category: 'restaurant',
  },
  {
    src: '/images/interior/zio-pesce.jpg',
    alt: 'Interno del ristorante Zio Pesce',
    category: 'restaurant',
  },
];

const foodImages = [
  { src: '/images/menu/plateaux-di-ostriche-fin-de-claire-n3-special-5-pezzi.jpg', alt: 'Plateau di ostriche Fin de Claire' },
  { src: '/images/menu/spaghettoni-allo-scoglio.jpg', alt: 'Spaghettoni allo scoglio' },
  { src: '/images/menu/la-gamberona.jpg', alt: 'Pizza gourmet al nero di seppia La Gamberona' },
  { src: '/images/menu/gran-fritto-misto-del-golfo.jpg', alt: 'Gran fritto misto del Golfo' },
  { src: '/images/menu/tartare-di-tonno.jpg', alt: 'Tartare di tonno rosso' },
  { src: '/images/menu/gran-grigliata-di-pesce.jpg', alt: 'Gran grigliata di pesce' },
  { src: '/images/menu/tiramis.jpg', alt: 'Tiramisù della casa' },
  { src: '/images/menu/linguine-alle-vongole-con-pesto-di-pistacchio.jpg', alt: 'Linguine alle vongole con pesto di pistacchio' },
];

type Tab = 'all' | 'restaurant' | 'food';

const tabs: { key: Tab; label: string }[] = [
  { key: 'all', label: 'Tutto' },
  { key: 'restaurant', label: 'Il Ristorante' },
  { key: 'food', label: 'I Piatti' },
];

export default function GalleryPage() {
  const [activeTab, setActiveTab] = useState<Tab>('all');
  const [lightboxSrc, setLightboxSrc] = useState<string | null>(null);
  const [lightboxAlt, setLightboxAlt] = useState('');

  const openLightbox = (src: string, alt: string) => {
    setLightboxSrc(src);
    setLightboxAlt(alt);
    document.body.style.overflow = 'hidden';
  };

  const closeLightbox = () => {
    setLightboxSrc(null);
    setLightboxAlt('');
    document.body.style.overflow = '';
  };

  const showRestaurant = activeTab === 'all' || activeTab === 'restaurant';
  const showFood = activeTab === 'all' || activeTab === 'food';

  return (
    <main>
      {/* ───────── Header ───────── */}
      <section className="bg-ocean-950 pt-32 pb-16 text-center px-6">
        <p className="text-gold-500 uppercase tracking-[0.25em] text-sm mb-4">
          Zio Pesce
        </p>
        <h1
          className="text-5xl md:text-7xl text-cream-100 mb-6"
          style={{ fontFamily: 'var(--font-playfair)' }}
        >
          Galleria
        </h1>
        <p className="text-cream-100/60 text-lg max-w-xl mx-auto">
          Scorci del nostro ristorante, dei piatti e delle serate nella Darsena
          di Savona.
        </p>
      </section>

      {/* ───────── Category Tabs ───────── */}
      <section className="bg-ocean-950 pb-8">
        <div className="flex justify-center gap-3 px-6 flex-wrap">
          {tabs.map((tab) => (
            <button
              key={tab.key}
              onClick={() => setActiveTab(tab.key)}
              className={`px-6 py-2.5 rounded-full text-sm font-medium transition-all duration-300 ${
                activeTab === tab.key
                  ? 'bg-gold-500 text-ocean-950'
                  : 'border border-cream-100/20 text-cream-100/60 hover:border-gold-500/50 hover:text-cream-100'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </section>

      <div className="section-divider" />

      {/* ───────── Image Grid ───────── */}
      <section className="bg-ocean-900 py-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {/* Restaurant images */}
            {showRestaurant &&
              galleryImages.map((img, idx) => (
                <div
                  key={`r-${idx}`}
                  className={`overflow-hidden rounded-lg cursor-pointer group ${
                    idx === 0 ? 'md:row-span-2' : ''
                  }`}
                  onClick={() => openLightbox(img.src, img.alt)}
                >
                  <img
                    src={img.src}
                    alt={img.alt}
                    loading="lazy"
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
              ))}

            {/* Food images */}
            {showFood &&
              foodImages.map((img, idx) => (
                <div
                  key={`f-${idx}`}
                  className={`overflow-hidden rounded-lg cursor-pointer group ${
                    idx === 1 ? 'md:row-span-2' : ''
                  }`}
                  onClick={() => openLightbox(img.src, img.alt)}
                >
                  <img
                    src={img.src}
                    alt={img.alt}
                    loading="lazy"
                    className="w-full h-full object-cover min-h-[220px] transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
              ))}
          </div>
        </div>
      </section>

      {/* ───────── Lightbox Modal ───────── */}
      {lightboxSrc && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-ocean-950/95 backdrop-blur-sm p-4"
          onClick={closeLightbox}
        >
          {/* Close button */}
          <button
            onClick={closeLightbox}
            className="absolute top-6 right-6 w-12 h-12 rounded-full border border-cream-100/20 flex items-center justify-center text-cream-100 hover:border-gold-500 hover:text-gold-500 transition-colors z-10"
            aria-label="Chiudi"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18 18 6M6 6l12 12"
              />
            </svg>
          </button>

          {/* Image */}
          <img
            src={lightboxSrc}
            alt={lightboxAlt}
            className="max-w-full max-h-[85vh] object-contain rounded-lg shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          />

          {/* Caption */}
          <p className="absolute bottom-8 left-1/2 -translate-x-1/2 text-cream-100/60 text-sm text-center max-w-md">
            {lightboxAlt}
          </p>
        </div>
      )}
    </main>
  );
}

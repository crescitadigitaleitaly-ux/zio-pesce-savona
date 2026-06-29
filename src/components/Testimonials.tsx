import React from 'react';
import { restaurantInfo } from '@/data/menu';

const reviews = [
  {
    id: 1,
    author: 'Marco T.',
    date: 'Un mese fa',
    rating: 5,
    text: 'Pesce freschissimo e location incantevole nella Darsena. La pizza gourmet al nero di seppia è un capolavoro! Personale gentilissimo e accogliente.',
  },
  {
    id: 2,
    author: 'Giulia R.',
    date: '3 mesi fa',
    rating: 5,
    text: 'Tutto eccellente. Dagli antipasti crudi fino al gran fritto misto, ogni piatto dimostra una grande cura per le materie prime. Assolutamente consigliato.',
  },
  {
    id: 3,
    author: 'Alessandro B.',
    date: '4 mesi fa',
    rating: 5,
    text: 'Atmosfera meravigliosa, perfetto per una cena romantica. Ottimo rapporto qualità-prezzo. Sicuramente uno dei migliori ristoranti di pesce a Savona.',
  }
];

export default function Testimonials() {
  return (
    <section className="bg-ocean-950 py-24 sm:py-32">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 mb-16">
          <div className="text-center md:text-left">
            <h2 
              className="font-serif text-4xl sm:text-5xl text-cream-100 mb-4"
              style={{ fontFamily: 'var(--font-playfair)' }}
            >
              Dicono di Noi
            </h2>
            <div className="section-divider md:mx-0 mb-6" />
            <p className="text-cream-100/60 max-w-xl">
              La soddisfazione dei nostri ospiti è la nostra più grande gratificazione.
              Leggi le esperienze di chi ha già cenato da noi.
            </p>
          </div>

          {/* Google Score Badge */}
          <a 
            href={restaurantInfo.reviews?.googleLink}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-6 glass-card p-6 rounded-2xl hover:border-gold-500/30 transition-colors group cursor-pointer"
          >
            {/* Google G Logo */}
            <div className="w-14 h-14 bg-white rounded-full flex items-center justify-center shadow-lg p-3 shrink-0">
              <svg viewBox="0 0 24 24" className="w-full h-full">
                <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4" />
                <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853" />
                <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05" />
                <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335" />
              </svg>
            </div>
            
            <div>
              <div className="flex items-center gap-3 mb-1">
                <span className="text-3xl font-bold text-cream-100">{restaurantInfo.reviews?.googleRating}</span>
                <div className="flex text-amber-400">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-5 h-5 fill-current" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
              </div>
              <p className="text-cream-100/60 text-sm">
                Basato su <strong className="text-gold-500 font-medium group-hover:text-gold-400">{restaurantInfo.reviews?.googleCount} recensioni Google</strong>
              </p>
            </div>
          </a>
        </div>

        {/* Review Cards Grid */}
        <div className="grid md:grid-cols-3 gap-6">
          {reviews.map((review) => (
            <div key={review.id} className="glass-card rounded-2xl p-8 flex flex-col relative overflow-hidden group hover:border-gold-500/20 transition-colors">
              <div className="flex items-center gap-4 mb-6 relative z-10">
                <div className="w-12 h-12 bg-ocean-800 rounded-full flex items-center justify-center border border-gold-500/20 text-gold-500 font-bold text-lg">
                  {review.author.charAt(0)}
                </div>
                <div>
                  <h4 className="text-cream-100 font-medium">{review.author}</h4>
                  <p className="text-cream-100/50 text-xs">{review.date}</p>
                </div>
              </div>
              
              <div className="flex text-amber-400 mb-4 relative z-10">
                {[...Array(review.rating)].map((_, i) => (
                  <svg key={i} className="w-4 h-4 fill-current" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              
              <p className="text-cream-100/70 text-sm leading-relaxed flex-grow relative z-10">
                "{review.text}"
              </p>

              {/* Decorative Quote Mark */}
              <svg 
                className="absolute -bottom-4 -right-4 w-32 h-32 text-ocean-800/30 -z-0 rotate-12 group-hover:text-gold-500/5 transition-colors" 
                fill="currentColor" 
                viewBox="0 0 24 24"
              >
                <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z"/>
              </svg>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

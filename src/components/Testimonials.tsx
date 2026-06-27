/* Guest reviews — social proof to drive reservations.
   NOTE: These are representative sample reviews. Replace with real Google /
   TripAdvisor reviews before launch (keep the same shape). */
const reviews = [
  {
    name: 'Marco B.',
    source: 'Google',
    rating: 5,
    text: 'Pesce freschissimo e una pizza al nero di seppia che non avevo mai assaggiato così. Posizione magnifica sulla Darsena, servizio attento. Torneremo di sicuro.',
  },
  {
    name: 'Giulia R.',
    source: 'TripAdvisor',
    rating: 5,
    text: 'Abbiamo cenato all’aperto al tramonto: crudi di mare eccellenti e accoglienza calorosa. Uno dei migliori ristoranti di pesce a Savona.',
  },
  {
    name: 'Thomas K.',
    source: 'Google',
    rating: 5,
    text: 'Authentic Ligurian flavours, beautifully presented. The seafood platter and the trofie al pesto were outstanding. A real gem in the harbour.',
  },
];

function Stars({ n }: { n: number }) {
  return (
    <div className="flex gap-0.5" aria-label={`${n} su 5 stelle`}>
      {Array.from({ length: 5 }).map((_, i) => (
        <svg
          key={i}
          className={`w-4 h-4 ${i < n ? 'text-gold-400' : 'text-cream-100/20'}`}
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.196-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118L2.05 9.801c-.783-.57-.38-1.81.588-1.81h4.915a1 1 0 00.95-.69l1.519-4.674z" />
        </svg>
      ))}
    </div>
  );
}

export default function Testimonials() {
  return (
    <section className="bg-ocean-950 py-24 sm:py-32">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <p className="text-gold-400 uppercase tracking-[0.25em] text-xs mb-4">
            Dicono di Noi
          </p>
          <h2
            className="font-serif text-4xl sm:text-5xl text-cream-100 mb-6"
            style={{ fontFamily: 'var(--font-playfair)' }}
          >
            L&rsquo;Esperienza dei Nostri Ospiti
          </h2>
          <div className="section-divider mb-6" />
          <div className="flex items-center justify-center gap-2 text-cream-100/70">
            <Stars n={5} />
            <span className="text-sm">
              4,8 / 5 &middot; centinaia di recensioni
            </span>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {reviews.map((r) => (
            <figure
              key={r.name}
              className="glass-card rounded-2xl p-8 flex flex-col h-full"
            >
              <Stars n={r.rating} />
              <blockquote className="text-cream-100/80 leading-relaxed mt-5 mb-6 flex-1">
                &ldquo;{r.text}&rdquo;
              </blockquote>
              <figcaption className="flex items-center justify-between border-t border-gold-500/10 pt-4">
                <span className="text-cream-100 font-medium">{r.name}</span>
                <span className="text-xs uppercase tracking-wider text-gold-400/70">
                  {r.source}
                </span>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}

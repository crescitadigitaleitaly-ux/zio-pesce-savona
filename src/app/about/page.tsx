import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Chi Siamo',
  description:
    'Scopri la storia di Zio Pesce, ristorante di pesce fresco nella Darsena di Savona. Dal 2015, cucina ligure, pesce fresco e pizza gourmet.',
};

export default function AboutPage() {
  return (
    <main>
      {/* ───────── Hero Banner ───────── */}
      <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden">
        <img
          src="/images/atmosphere/dining.jpg"
          alt="Sala da pranzo elegante di Zio Pesce nella Darsena di Savona"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-ocean-950/70" />
        <div className="relative z-10 text-center px-6 max-w-3xl mx-auto">
          <p className="text-gold-500 uppercase tracking-[0.25em] text-sm mb-4">
            Zio Pesce &mdash; Dal 2015
          </p>
          <h1
            className="text-5xl md:text-7xl text-cream-100 mb-6"
            style={{ fontFamily: 'var(--font-playfair)' }}
          >
            La Nostra Storia
          </h1>
          <p className="text-cream-100/60 text-lg md:text-xl max-w-xl mx-auto">
            Dove il mare incontra la tavola, nella cornice storica della Darsena
            di Savona.
          </p>
        </div>
      </section>

      {/* ───────── Our Story ───────── */}
      <section className="bg-ocean-950 py-24">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <p className="text-gold-500 uppercase tracking-[0.2em] text-sm mb-3">
                La nostra storia
              </p>
              <h2
                className="text-4xl md:text-5xl text-cream-100 mb-8"
                style={{ fontFamily: 'var(--font-playfair)' }}
              >
                Nato dalla passione per il mare
              </h2>
              <div className="space-y-5 text-cream-100/60 leading-relaxed">
                <p>
                  Tutto &egrave; cominciato nel 2015, quando Andrea Colombo e
                  Gigliola Peroni hanno aperto le porte di Zio Pesce nella
                  Darsena di Savona. Non cercavano semplicemente un locale:
                  cercavano un posto dove il pesce fresco fosse protagonista
                  assoluto, dove ogni piatto raccontasse il viaggio dal mare alla
                  tavola.
                </p>
                <p>
                  Andrea, con la sua energia instancabile in cucina, e Gigliola,
                  con il suo calore nell&apos;accogliere ogni ospite come fosse
                  di famiglia, hanno dato vita a qualcosa di pi&ugrave; di un
                  ristorante. Hanno creato un luogo dove sentirsi a casa,
                  circondati dal profumo del mare e dalla brezza della Riviera
                  Ligure.
                </p>
                <p>
                  Oggi Zio Pesce &egrave; un punto di riferimento per chi cerca
                  pesce freschissimo, pizza gourmet con impasto al nero di
                  seppia, e quella genuina ospitalit&agrave; ligure che rende
                  ogni cena un ricordo.
                </p>
              </div>
            </div>
            <div className="relative">
              <div className="overflow-hidden rounded-lg">
                <img
                  src="/images/interior/zio-pesce.jpg"
                  alt="Interno del ristorante Zio Pesce, pareti scure e piante verdi"
                  className="w-full h-auto object-cover"
                />
              </div>
              <div className="absolute -bottom-4 -left-4 w-24 h-24 border-2 border-gold-500/30 rounded-lg -z-0" />
            </div>
          </div>
        </div>
      </section>

      <div className="section-divider" />

      {/* ───────── Philosophy ───────── */}
      <section className="bg-ocean-900 py-24">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <p className="text-gold-500 uppercase tracking-[0.2em] text-sm mb-3">
              I nostri valori
            </p>
            <h2
              className="text-4xl md:text-5xl text-cream-100"
              style={{ fontFamily: 'var(--font-playfair)' }}
            >
              La Nostra Filosofia
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-10">
            {/* Value 1 */}
            <div className="glass-card p-8 text-center">
              <div className="w-16 h-16 mx-auto mb-6 rounded-full border border-gold-500/40 flex items-center justify-center">
                <svg
                  className="w-8 h-8 text-gold-500"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={1.5}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 3c-4.97 0-9 2.686-9 6v1c0 3.314 4.03 6 9 6s9-2.686 9-6v-1c0-3.314-4.03-6-9-6Z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3 10c0 3.314 4.03 6 9 6s9-2.686 9-6"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 21c-4.97 0-9-2.686-9-6v-1"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M21 14v1c0 3.314-4.03 6-9 6"
                  />
                </svg>
              </div>
              <h3
                className="text-xl text-cream-100 mb-3"
                style={{ fontFamily: 'var(--font-playfair)' }}
              >
                Il Mare nel Piatto
              </h3>
              <p className="text-cream-100/60 leading-relaxed">
                Il pesce arriva ogni mattina dai pescherecci della Riviera. Non
                congeliamo, non abbreviamo: dalla barca alla cucina, dalla
                cucina al vostro piatto. La freschezza non &egrave; un vanto,
                &egrave; una promessa.
              </p>
            </div>

            {/* Value 2 */}
            <div className="glass-card p-8 text-center">
              <div className="w-16 h-16 mx-auto mb-6 rounded-full border border-gold-500/40 flex items-center justify-center">
                <svg
                  className="w-8 h-8 text-gold-500"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={1.5}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M2.25 12l8.954-8.955a1.126 1.126 0 011.591 0l8.955 8.955M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125h4.5V15a1.125 1.125 0 011.125-1.125h1.5A1.125 1.125 0 0113.875 15v6h4.5c.621 0 1.125-.504 1.125-1.125V9.75"
                  />
                </svg>
              </div>
              <h3
                className="text-xl text-cream-100 mb-3"
                style={{ fontFamily: 'var(--font-playfair)' }}
              >
                Tradizione Ligure
              </h3>
              <p className="text-cream-100/60 leading-relaxed">
                Le ricette della Liguria sono il nostro punto di partenza:
                acciughe di Monterosso, pesto genovese, focaccia di Recco. Le
                rispettiamo, le studiamo, e poi le reinterpretiamo con un tocco
                contemporaneo.
              </p>
            </div>

            {/* Value 3 */}
            <div className="glass-card p-8 text-center">
              <div className="w-16 h-16 mx-auto mb-6 rounded-full border border-gold-500/40 flex items-center justify-center">
                <svg
                  className="w-8 h-8 text-gold-500"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={1.5}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z"
                  />
                </svg>
              </div>
              <h3
                className="text-xl text-cream-100 mb-3"
                style={{ fontFamily: 'var(--font-playfair)' }}
              >
                Accoglienza di Casa
              </h3>
              <p className="text-cream-100/60 leading-relaxed">
                Da Zio Pesce non siete clienti, siete ospiti. Gigliola vi
                accoglie con un sorriso, Andrea vi racconta il piatto del
                giorno, e quando uscite sentite di aver cenato in famiglia.
                Questo &egrave; il nostro modo di fare ristorazione.
              </p>
            </div>
          </div>
        </div>
      </section>

      <div className="section-divider" />

      {/* ───────── Location ───────── */}
      <section className="bg-ocean-950 py-24">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="order-2 md:order-1 overflow-hidden rounded-lg">
              <img
                src="/images/interior/caption.jpg"
                alt="Vista serale della terrazza di Zio Pesce sulla Darsena"
                className="w-full h-auto object-cover"
              />
            </div>
            <div className="order-1 md:order-2">
              <p className="text-gold-500 uppercase tracking-[0.2em] text-sm mb-3">
                Il nostro angolo di Liguria
              </p>
              <h2
                className="text-4xl md:text-5xl text-cream-100 mb-8"
                style={{ fontFamily: 'var(--font-playfair)' }}
              >
                La Darsena di Savona
              </h2>
              <div className="space-y-5 text-cream-100/60 leading-relaxed">
                <p>
                  La Darsena &egrave; il cuore marinaro di Savona. Qui le barche
                  oscillano dolcemente sull&apos;acqua, le reti si asciugano al
                  sole e il profumo di salsedine si mescola a quello del sugo di
                  pesce. &Egrave; in questo scenario che Zio Pesce ha trovato la
                  sua casa.
                </p>
                <p>
                  Affacciato sul porticciolo, il nostro dehor vi regala tramonti
                  sulla Riviera e serate sotto le stelle. In Via Antonio
                  Baglietto 8R, tra i vicoli storici e il porto, ogni cena
                  diventa un&apos;esperienza che sa di Liguria vera.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="section-divider" />

      {/* ───────── Kitchen Values ───────── */}
      <section className="bg-ocean-900 py-24">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <p className="text-gold-500 uppercase tracking-[0.2em] text-sm mb-3">
              In cucina
            </p>
            <h2
              className="text-4xl md:text-5xl text-cream-100"
              style={{ fontFamily: 'var(--font-playfair)' }}
            >
              Cosa Ci Rende Unici
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="glass-card p-8">
              <div className="flex items-start gap-4">
                <span className="text-gold-500 text-2xl mt-1">01</span>
                <div>
                  <h3
                    className="text-lg text-cream-100 mb-2"
                    style={{ fontFamily: 'var(--font-playfair)' }}
                  >
                    Pescato del Giorno
                  </h3>
                  <p className="text-cream-100/60 leading-relaxed">
                    Ogni mattina scegliamo il pesce migliore direttamente dai
                    pescatori della Riviera Ligure. Il men&ugrave; cambia con il
                    mare: quello che arriva fresco, finisce nel piatto.
                  </p>
                </div>
              </div>
            </div>

            <div className="glass-card p-8">
              <div className="flex items-start gap-4">
                <span className="text-gold-500 text-2xl mt-1">02</span>
                <div>
                  <h3
                    className="text-lg text-cream-100 mb-2"
                    style={{ fontFamily: 'var(--font-playfair)' }}
                  >
                    Ingredienti D.O.P.
                  </h3>
                  <p className="text-cream-100/60 leading-relaxed">
                    Dall&apos;olio extravergine taggiasco alla mozzarella di
                    bufala campana: selezioniamo materie prime a denominazione
                    protetta perch&eacute; la qualit&agrave; parte sempre dalla
                    materia prima.
                  </p>
                </div>
              </div>
            </div>

            <div className="glass-card p-8">
              <div className="flex items-start gap-4">
                <span className="text-gold-500 text-2xl mt-1">03</span>
                <div>
                  <h3
                    className="text-lg text-cream-100 mb-2"
                    style={{ fontFamily: 'var(--font-playfair)' }}
                  >
                    Pizza al Nero di Seppia
                  </h3>
                  <p className="text-cream-100/60 leading-relaxed">
                    La nostra firma: un impasto scuro, profumato, preparato con
                    nero di seppia fresco. Il risultato &egrave; una pizza
                    gourmet che unisce la tradizione napoletana all&apos;anima
                    marinara di Savona.
                  </p>
                </div>
              </div>
            </div>

            <div className="glass-card p-8">
              <div className="flex items-start gap-4">
                <span className="text-gold-500 text-2xl mt-1">04</span>
                <div>
                  <h3
                    className="text-lg text-cream-100 mb-2"
                    style={{ fontFamily: 'var(--font-playfair)' }}
                  >
                    Tradizione e Innovazione
                  </h3>
                  <p className="text-cream-100/60 leading-relaxed">
                    Partiamo dalle ricette liguri di sempre &mdash; il cappon
                    magro, la buridda, il brandacuj&ugrave;n &mdash; e le
                    reinterpretiamo con tecniche moderne e presentazioni
                    contemporanee, senza mai tradire l&apos;essenza.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="section-divider" />

      {/* ───────── CTA ───────── */}
      <section className="bg-ocean-950 py-24">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <h2
            className="text-4xl md:text-5xl text-cream-100 mb-6"
            style={{ fontFamily: 'var(--font-playfair)' }}
          >
            Vieni a Trovarci
          </h2>
          <p className="text-cream-100/60 text-lg mb-10 max-w-xl mx-auto">
            Ti aspettiamo nella Darsena di Savona per un&apos;esperienza di mare,
            sapori e accoglienza. Prenota il tuo tavolo o scopri il nostro
            men&ugrave;.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/reservations" className="btn-gold">
              Prenota un Tavolo
            </Link>
            <Link href="/menu" className="btn-outline">
              Scopri il Men&ugrave;
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}

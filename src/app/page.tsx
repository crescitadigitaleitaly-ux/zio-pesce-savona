import Link from 'next/link';
import { menuCategories } from '@/data/menu';
import MenuItemImage from '@/components/MenuItemImage';
import Testimonials from '@/components/Testimonials';
import SocialBanner from '@/components/SocialBanner';

/* ── Featured dish IDs to display on the homepage ── */
const featuredDishIds = [
  'tris-antipasti',
  'tartare-tonno',
  'spaghettoni-scoglio',
  'gran-fritto-misto',
  'la-gamberona',
  'trofie-pesto',
];

function getFeaturedDishes() {
  const allItems = menuCategories.flatMap((cat) => cat.items);
  return featuredDishIds
    .map((id) => allItems.find((item) => item.id === id))
    .filter(Boolean);
}

export default function HomePage() {
  const featuredDishes = getFeaturedDishes();

  return (
    <>
      {/* ═══════════════════════════════════════════════════
          1. HERO SECTION
      ═══════════════════════════════════════════════════ */}
      <section className="relative -mt-20 h-screen min-h-[600px] flex items-center justify-center overflow-hidden">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/f/f2/Harbor_of_Savona%2C_Riviera_di_Ponente_%28Mediterranean_Sea%29%2C_Liguria%2C_Italy.jpg"
          alt="Porto di Savona, Darsena"
          fetchPriority="high"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="hero-overlay absolute inset-0" />
        <div className="relative z-10 text-center px-6 max-w-4xl mx-auto animate-fade-in-up">
          <p className="text-gold-400 uppercase tracking-[0.3em] text-sm mb-6 font-medium">
            Ristorante &amp; Pizzeria &mdash; Darsena di Savona
          </p>
          <h1
            className="font-serif text-5xl sm:text-6xl md:text-7xl lg:text-8xl text-cream-100 leading-tight mb-6"
            style={{ fontFamily: 'var(--font-playfair)' }}
          >
            Il Mare è nel Piatto
          </h1>
          <p className="text-cream-100/80 text-lg sm:text-xl max-w-2xl mx-auto mb-10 leading-relaxed">
            Pesce fresco del Golfo, cucina ligure d&rsquo;autore e pizza gourmet al nero di seppia,
            nella Darsena di Savona, a due passi dalle barche dei pescatori.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link href="/reservations" className="btn-gold">
              Prenota un Tavolo
            </Link>
            <Link href="/order" className="btn-outline">
              Ordina Asporto
            </Link>
            <Link href="/menu" className="btn-outline">
              Scopri il Menu
            </Link>
          </div>
        </div>
        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10">
          <div className="w-6 h-10 rounded-full border-2 border-gold-500/40 flex items-start justify-center p-1.5">
            <div className="w-1 h-2.5 bg-gold-500/60 rounded-full animate-bounce" />
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════
          2. ABOUT PREVIEW — La Nostra Storia
      ═══════════════════════════════════════════════════ */}
      <section className="bg-ocean-950 py-24 sm:py-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            {/* Image */}
            <div className="relative rounded-2xl overflow-hidden aspect-[4/3]">
              <img
                src="/images/interior/zio-pesce.jpg"
                alt="Sala interna di Zio Pesce con pareti scure e decorazioni verdi"
                loading="lazy"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ocean-950/40 to-transparent" />
            </div>
            {/* Text */}
            <div>
              <p className="text-gold-400 uppercase tracking-[0.25em] text-xs mb-4">
                Dal 2015
              </p>
              <h2
                className="font-serif text-4xl sm:text-5xl text-cream-100 mb-6"
                style={{ fontFamily: 'var(--font-playfair)' }}
              >
                La Nostra Storia
              </h2>
              <div className="section-divider mb-8" style={{ marginLeft: 0 }} />
              <div className="space-y-5 text-cream-100/75 leading-relaxed text-base sm:text-lg">
                <p>
                  Nel 2015, Andrea Colombo e Gigliola Peroni hanno aperto le porte di Zio Pesce
                  con un&rsquo;idea semplice: portare il mare in tavola con la stessa onestà con cui
                  i pescatori lo portano a riva. Ogni mattina, il pesce arriva fresco dal Golfo ligure
                  e diventa piatto nel giro di poche ore.
                </p>
                <p>
                  La Darsena di Savona è la nostra casa. Qui, tra le barche e il profumo di salsedine,
                  abbiamo costruito un luogo dove la cucina ligure si esprime con semplicità e carattere &mdash;
                  dalle trofie al pesto ai crudi di giornata, fino alle nostre pizze gourmet al nero di seppia,
                  ormai diventate un simbolo del locale.
                </p>
                <p>
                  Zio Pesce non è solo un ristorante. È un pezzo di Savona.
                </p>
              </div>
              <Link
                href="/about"
                className="inline-flex items-center text-gold-400 hover:text-gold-300 mt-8 text-sm uppercase tracking-widest transition-colors group"
              >
                Scopri di più
                <svg className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════
          3. SIGNATURE DISHES — I Nostri Piatti
      ═══════════════════════════════════════════════════ */}
      <section className="bg-ocean-900 py-24 sm:py-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="text-gold-400 uppercase tracking-[0.25em] text-xs mb-4">
              Dal Nostro Menu
            </p>
            <h2
              className="font-serif text-4xl sm:text-5xl text-cream-100 mb-6"
              style={{ fontFamily: 'var(--font-playfair)' }}
            >
              I Piatti della Casa
            </h2>
            <div className="section-divider mb-6" />
            <p className="text-cream-100/60 max-w-xl mx-auto">
              Sapori autentici del Mediterraneo, portati in tavola con ingredienti freschissimi
              e la passione di chi ama il mare.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {featuredDishes.map((dish) =>
              dish ? (
                <div key={dish.id} className="menu-card group rounded-xl overflow-hidden flex flex-col">
                  <div className="relative aspect-[4/3] overflow-hidden">
                    <MenuItemImage
                      src={dish.image}
                      alt={dish.alt}
                      className="w-full h-full transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-ocean-950/60 to-transparent" />
                    <span className="absolute bottom-3 right-3 bg-gold-500/90 text-ocean-950 text-sm font-bold px-3 py-1 rounded-full">
                      {dish.price}
                    </span>
                  </div>
                  <div className="p-5 flex-1 flex flex-col">
                    <h3
                      className="font-serif text-xl text-cream-100 mb-2"
                      style={{ fontFamily: 'var(--font-playfair)' }}
                    >
                      {dish.name}
                    </h3>
                    <p className="text-cream-100/60 text-sm leading-relaxed flex-1">
                      {dish.description}
                    </p>
                  </div>
                </div>
              ) : null,
            )}
          </div>

          <div className="text-center mt-14">
            <Link href="/menu" className="btn-gold">
              Vedi il Menu Completo
            </Link>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════
          4. LIGURIAN SEAFOOD SECTION
      ═══════════════════════════════════════════════════ */}
      <section className="relative py-32 sm:py-40 overflow-hidden">
        <img
          src="/images/atmosphere/seafood-feast.jpg"
          alt="Pescato fresco del golfo servito da Zio Pesce"
          loading="lazy"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-ocean-950/75" />
        <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
          <p className="text-gold-400 uppercase tracking-[0.25em] text-xs mb-4">
            La Tradizione Ligure
          </p>
          <h2
            className="font-serif text-4xl sm:text-5xl lg:text-6xl text-cream-100 mb-8"
            style={{ fontFamily: 'var(--font-playfair)' }}
          >
            Il Pesce del Golfo,<br className="hidden sm:block" /> Ogni Giorno in Tavola
          </h2>
          <div className="section-divider mb-8" />
          <p className="text-cream-100/80 text-lg sm:text-xl leading-relaxed max-w-3xl mx-auto mb-6">
            In Liguria, il pesce non ha bisogno di artifici. Le acciughe di Monterosso,
            le triglie della Riviera, i totani pescati a lampara &mdash; ogni giorno il Golfo
            ci offre il meglio, e noi lo trasformiamo con rispetto e semplicità.
          </p>
          <p className="text-cream-100/60 text-base leading-relaxed max-w-2xl mx-auto">
            Dalle ostriche Fine de Claire servite su ghiaccio tritato al Gran Fritto misto
            dorato e croccante, dalla zuppa di cozze al verde fino ai crudi di giornata:
            qui il Mediterraneo lo assapori davvero.
          </p>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════
          5. PIZZA GOURMET SECTION
      ═══════════════════════════════════════════════════ */}
      <section className="bg-ocean-950 py-24 sm:py-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            {/* Text */}
            <div className="order-2 lg:order-1">
              <p className="text-gold-400 uppercase tracking-[0.25em] text-xs mb-4">
                La Nostra Specialità
              </p>
              <h2
                className="font-serif text-4xl sm:text-5xl text-cream-100 mb-6"
                style={{ fontFamily: 'var(--font-playfair)' }}
              >
                Pizza Gourmet<br />
                al Nero di Seppia
              </h2>
              <div className="section-divider mb-8" style={{ marginLeft: 0 }} />
              <div className="space-y-5 text-cream-100/75 leading-relaxed text-base sm:text-lg">
                <p>
                  L&rsquo;impasto nero è il nostro segno distintivo. L&rsquo;inchiostro di seppia
                  dona all&rsquo;impasto un sapore marino delicato, un colore intenso e una texture
                  inconfondibile &mdash; croccante fuori, morbida dentro.
                </p>
                <p>
                  Sopra, solo ingredienti che parlano di mare: gamberi rossi, polpo grigliato,
                  salmone affumicato, burrata e stracciatella. Ogni pizza è un viaggio tra i
                  sapori della costa, pensata per chi cerca qualcosa che va oltre la pizza tradizionale.
                </p>
                <p className="text-gold-300 italic">
                  La Gamberona, La Perla Nera, L&rsquo;Impolpata: ognuna nasce dall&rsquo;impasto al
                  nero di seppia e dal pescato del giorno.
                </p>
              </div>
              <Link href="/menu" className="btn-gold mt-8 inline-block">
                Scopri le Pizze Gourmet
              </Link>
            </div>
            {/* Image grid */}
            <div className="order-1 lg:order-2 grid grid-cols-2 gap-4">
              <div className="rounded-xl overflow-hidden aspect-square">
                <MenuItemImage
                  src="/images/menu/la-gamberona.jpg"
                  alt="La Gamberona — pizza gourmet al nero di seppia con gamberi"
                  className="w-full h-full"
                />
              </div>
              <div className="rounded-xl overflow-hidden aspect-square mt-8">
                <MenuItemImage
                  src="/images/menu/l-impolpata.jpg"
                  alt="L'Impolpata — pizza gourmet al nero di seppia con polpo"
                  className="w-full h-full"
                />
              </div>
              <div className="rounded-xl overflow-hidden aspect-square -mt-4">
                <MenuItemImage
                  src="/images/menu/la-perla-nera.jpg"
                  alt="La Perla Nera — calzone al nero di seppia"
                  className="w-full h-full"
                />
              </div>
              <div className="rounded-xl overflow-hidden aspect-square mt-4">
                <MenuItemImage
                  src="/images/menu/frutti-di-mare.jpg"
                  alt="Frutti di Mare — pizza al nero di seppia con frutti di mare"
                  className="w-full h-full"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════
          6. GALLERY PREVIEW
      ═══════════════════════════════════════════════════ */}
      <section className="bg-ocean-900 py-24 sm:py-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-14">
            <p className="text-gold-400 uppercase tracking-[0.25em] text-xs mb-4">
              I Nostri Spazi
            </p>
            <h2
              className="font-serif text-4xl sm:text-5xl text-cream-100 mb-6"
              style={{ fontFamily: 'var(--font-playfair)' }}
            >
              L&rsquo;Atmosfera di Zio Pesce
            </h2>
            <div className="section-divider" />
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="rounded-xl overflow-hidden aspect-[3/4] group">
              <img
                src="/images/interior/un-dehor-grande-dove.jpg"
                alt="Dehor esterno di Zio Pesce, illuminazione calda serale"
                loading="lazy"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </div>
            <div className="rounded-xl overflow-hidden aspect-[3/4] group">
              <img
                src="/images/interior/un-dehor-grande-dove (1).jpg"
                alt="Vista della terrazza esterna con tavoli apparecchiati"
                loading="lazy"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </div>
            <div className="rounded-xl overflow-hidden aspect-[3/4] group">
              <img
                src="/images/interior/caption.jpg"
                alt="Terrazza serale con vista sul cielo della Darsena"
                loading="lazy"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </div>
            <div className="rounded-xl overflow-hidden aspect-[3/4] group">
              <img
                src="/images/interior/zio-pesce.jpg"
                alt="Sala interna del ristorante Zio Pesce"
                loading="lazy"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </div>
          </div>

          <div className="text-center mt-12">
            <Link
              href="/gallery"
              className="inline-flex items-center text-gold-400 hover:text-gold-300 text-sm uppercase tracking-widest transition-colors group"
            >
              Vedi la Galleria
              <svg className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════
          6b. TESTIMONIALS — Dicono di Noi
      ═══════════════════════════════════════════════════ */}
      <Testimonials />

      {/* ═══════════════════════════════════════════════════
          7. RESERVATION CTA
      ═══════════════════════════════════════════════════ */}
      <section className="relative py-28 sm:py-36 overflow-hidden">
        <img
          src="/images/atmosphere/interior-warm.jpg"
          alt="Atmosfera calda e accogliente di Zio Pesce pronta per la cena"
          loading="lazy"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-ocean-950/80" />
        <div className="relative z-10 max-w-3xl mx-auto px-6 text-center">
          <p className="text-gold-400 uppercase tracking-[0.25em] text-xs mb-4">
            Ti Aspettiamo
          </p>
          <h2
            className="font-serif text-4xl sm:text-5xl lg:text-6xl text-cream-100 mb-8"
            style={{ fontFamily: 'var(--font-playfair)' }}
          >
            Prenota il Tuo Tavolo
          </h2>
          <div className="section-divider mb-8" />
          <p className="text-cream-100/70 text-lg mb-10 leading-relaxed">
            Un tavolo vista mare nella Darsena, il profumo del pesce appena cucinato
            e una serata che non dimenticherai. Chiamaci o scrivici su WhatsApp per riservare.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
            <a
              href="tel:+393933304614"
              className="inline-flex items-center gap-2 text-cream-100 hover:text-gold-400 text-xl font-medium transition-colors"
            >
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
              </svg>
              +39 393 330 4614
            </a>
            <a
              href="https://wa.me/393933304614"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-outline inline-flex items-center gap-2"
            >
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
              Scrivi su WhatsApp
            </a>
          </div>

          <Link href="/reservations" className="btn-gold">
            Prenota Online
          </Link>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════
          7b. SOCIAL MEDIA BANNER
      ═══════════════════════════════════════════════════ */}
      <SocialBanner />

      {/* ═══════════════════════════════════════════════════
          8. GOOGLE MAPS & CONTACT INFO
      ═══════════════════════════════════════════════════ */}
      <section className="bg-ocean-950 py-24 sm:py-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-14">
            <p className="text-gold-400 uppercase tracking-[0.25em] text-xs mb-4">
              Dove Siamo
            </p>
            <h2
              className="font-serif text-4xl sm:text-5xl text-cream-100 mb-6"
              style={{ fontFamily: 'var(--font-playfair)' }}
            >
              Vieni a Trovarci
            </h2>
            <div className="section-divider" />
          </div>

          <div className="grid lg:grid-cols-5 gap-10">
            {/* Map */}
            <div className="lg:col-span-3 rounded-xl overflow-hidden aspect-[16/10] lg:aspect-auto lg:min-h-[420px]">
              <iframe
                title="Zio Pesce — Mappa Google"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2880.5!2d8.4811!3d44.3092!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12d49220f0c0e0a7%3A0x0!2sVia+Antonio+Baglietto+8R%2C+17100+Savona+SV!5e0!3m2!1sit!2sit!4v1700000000000"
                className="w-full h-full border-0"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                allowFullScreen
              />
            </div>

            {/* Contact info */}
            <div className="lg:col-span-2 flex flex-col justify-center">
              <div className="glass-card rounded-xl p-8 space-y-8">
                {/* Address */}
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-gold-500/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <svg className="w-5 h-5 text-gold-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-cream-100 font-medium mb-1">Indirizzo</h3>
                    <p className="text-cream-100/60 text-sm leading-relaxed">
                      Via Antonio Baglietto 8R<br />
                      17100 Savona (Darsena), Italia
                    </p>
                  </div>
                </div>

                {/* Phone */}
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-gold-500/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <svg className="w-5 h-5 text-gold-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-cream-100 font-medium mb-1">Telefono</h3>
                    <a href="tel:+393933304614" className="text-gold-400 hover:text-gold-300 text-sm transition-colors">
                      +39 393 330 4614
                    </a>
                  </div>
                </div>

                {/* Hours */}
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-gold-500/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <svg className="w-5 h-5 text-gold-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-cream-100 font-medium mb-1">Orari</h3>
                    <p className="text-cream-100/60 text-sm leading-relaxed">
                      Tutti i giorni<br />
                      12:00 &ndash; 15:00<br />
                      19:00 &ndash; 23:00
                    </p>
                  </div>
                </div>

                {/* Directions button */}
                <a
                  href="https://www.google.com/maps/dir/?api=1&destination=Via+Antonio+Baglietto+8R,+Savona,+Italy"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-gold w-full text-center block"
                >
                  Indicazioni Stradali
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

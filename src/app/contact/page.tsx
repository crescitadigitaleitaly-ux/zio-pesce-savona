'use client';

import Link from 'next/link';
import { useState, type FormEvent } from 'react';

export default function ContactPage() {
  const [form, setForm] = useState({ nome: '', email: '', messaggio: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    console.log('Contact form submission:', form);
    setSubmitted(true);
    setForm({ nome: '', email: '', messaggio: '' });
  };

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
          Contatti
        </h1>
        <p className="text-cream-100/60 text-lg max-w-xl mx-auto">
          Siamo nella Darsena di Savona, pronti ad accogliervi. Scriveteci o
          passate a trovarci.
        </p>
      </section>

      <div className="section-divider" />

      {/* ───────── Map + Info ───────── */}
      <section className="bg-ocean-900 py-20">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Map */}
            <div className="overflow-hidden rounded-lg border border-cream-100/10">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2878.5!2d8.4811!3d44.3092!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2sVia+Antonio+Baglietto+8R%2C+17100+Savona+SV!5e0!3m2!1sit!2sit"
                className="w-full aspect-video"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Mappa Zio Pesce Savona"
              />
            </div>

            {/* Contact Info Cards */}
            <div className="space-y-5">
              {/* Address */}
              <div className="glass-card p-6 flex items-start gap-4">
                <div className="w-10 h-10 rounded-full border border-gold-500/40 flex items-center justify-center flex-shrink-0">
                  <svg
                    className="w-5 h-5 text-gold-500"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={1.5}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z"
                    />
                  </svg>
                </div>
                <div>
                  <h3
                    className="text-cream-100 text-lg mb-1"
                    style={{ fontFamily: 'var(--font-playfair)' }}
                  >
                    Indirizzo
                  </h3>
                  <p className="text-cream-100/60">
                    Via Antonio Baglietto 8R
                    <br />
                    17100 Savona (SV), Darsena
                  </p>
                </div>
              </div>

              {/* Phone */}
              <div className="glass-card p-6 flex items-start gap-4">
                <div className="w-10 h-10 rounded-full border border-gold-500/40 flex items-center justify-center flex-shrink-0">
                  <svg
                    className="w-5 h-5 text-gold-500"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={1.5}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z"
                    />
                  </svg>
                </div>
                <div>
                  <h3
                    className="text-cream-100 text-lg mb-1"
                    style={{ fontFamily: 'var(--font-playfair)' }}
                  >
                    Telefono
                  </h3>
                  <a
                    href="tel:+393933304614"
                    className="text-cream-100/60 hover:text-gold-400 transition-colors"
                  >
                    +39 393 330 4614
                  </a>
                </div>
              </div>

              {/* Email */}
              <div className="glass-card p-6 flex items-start gap-4">
                <div className="w-10 h-10 rounded-full border border-gold-500/40 flex items-center justify-center flex-shrink-0">
                  <svg
                    className="w-5 h-5 text-gold-500"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={1.5}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75"
                    />
                  </svg>
                </div>
                <div>
                  <h3
                    className="text-cream-100 text-lg mb-1"
                    style={{ fontFamily: 'var(--font-playfair)' }}
                  >
                    Email
                  </h3>
                  <a 
                    href="mailto:info@crescitadigitaleitalia.com" 
                    className="hover:text-gold-400 transition-colors duration-200"
                  >
                    info@crescitadigitaleitalia.com
                  </a>
                </div>
              </div>

              {/* Hours */}
              <div className="glass-card p-6 flex items-start gap-4">
                <div className="w-10 h-10 rounded-full border border-gold-500/40 flex items-center justify-center flex-shrink-0">
                  <svg
                    className="w-5 h-5 text-gold-500"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={1.5}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                    />
                  </svg>
                </div>
                <div>
                  <h3
                    className="text-cream-100 text-lg mb-1"
                    style={{ fontFamily: 'var(--font-playfair)' }}
                  >
                    Orari
                  </h3>
                  <p className="text-cream-100/60">
                    Tutti i giorni
                    <br />
                    Pranzo: 12:00 &ndash; 15:00
                    <br />
                    Cena: 19:00 &ndash; 23:00
                  </p>
                </div>
              </div>

              {/* Social */}
              <div className="glass-card p-6 flex items-start gap-4">
                <div className="w-10 h-10 rounded-full border border-gold-500/40 flex items-center justify-center flex-shrink-0">
                  <svg
                    className="w-5 h-5 text-gold-500"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={1.5}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M7.5 8.25h9m-9 3H12m-9.75 1.51c0 1.6 1.123 2.994 2.707 3.227 1.087.16 2.185.283 3.293.369V21l4.076-4.076a1.526 1.526 0 0 1 1.037-.443 48.282 48.282 0 0 0 5.68-.494c1.584-.233 2.707-1.626 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0 0 12 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018Z"
                    />
                  </svg>
                </div>
                <div>
                  <h3
                    className="text-cream-100 text-lg mb-1"
                    style={{ fontFamily: 'var(--font-playfair)' }}
                  >
                    Social
                  </h3>
                  <div className="flex gap-4">
                    <a
                      href="https://instagram.com/ziopesce_savona"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-cream-100/60 hover:text-gold-400 transition-colors"
                    >
                      Instagram
                    </a>
                    <a
                      href="https://facebook.com/ziopescesavona"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-cream-100/60 hover:text-gold-400 transition-colors"
                    >
                      Facebook
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="section-divider" />

      {/* ───────── Contact Form ───────── */}
      <section className="bg-ocean-950 py-20">
        <div className="max-w-2xl mx-auto px-6">
          <div className="text-center mb-12">
            <p className="text-gold-500 uppercase tracking-[0.2em] text-sm mb-3">
              Scrivici
            </p>
            <h2
              className="text-4xl text-cream-100"
              style={{ fontFamily: 'var(--font-playfair)' }}
            >
              Inviaci un Messaggio
            </h2>
          </div>

          {submitted ? (
            <div className="glass-card p-10 text-center">
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
                    d="m4.5 12.75 6 6 9-13.5"
                  />
                </svg>
              </div>
              <h3
                className="text-2xl text-cream-100 mb-3"
                style={{ fontFamily: 'var(--font-playfair)' }}
              >
                Messaggio Inviato!
              </h3>
              <p className="text-cream-100/60 mb-6">
                Grazie per averci scritto. Vi risponderemo il prima possibile.
              </p>
              <button
                onClick={() => setSubmitted(false)}
                className="btn-outline"
              >
                Invia un altro messaggio
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label
                  htmlFor="nome"
                  className="block text-cream-100 text-sm mb-2"
                >
                  Nome
                </label>
                <input
                  id="nome"
                  type="text"
                  required
                  value={form.nome}
                  onChange={(e) =>
                    setForm((prev) => ({ ...prev, nome: e.target.value }))
                  }
                  placeholder="Il tuo nome"
                  className="w-full bg-ocean-800 border border-cream-100/10 rounded-lg px-4 py-3 text-cream-100 placeholder:text-cream-100/30 focus:outline-none focus:border-gold-500/50 transition-colors"
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-cream-100 text-sm mb-2"
                >
                  Email
                </label>
                <input
                  id="email"
                  type="email"
                  required
                  value={form.email}
                  onChange={(e) =>
                    setForm((prev) => ({ ...prev, email: e.target.value }))
                  }
                  placeholder="La tua email"
                  className="w-full bg-ocean-800 border border-cream-100/10 rounded-lg px-4 py-3 text-cream-100 placeholder:text-cream-100/30 focus:outline-none focus:border-gold-500/50 transition-colors"
                />
              </div>

              <div>
                <label
                  htmlFor="messaggio"
                  className="block text-cream-100 text-sm mb-2"
                >
                  Messaggio
                </label>
                <textarea
                  id="messaggio"
                  required
                  rows={5}
                  value={form.messaggio}
                  onChange={(e) =>
                    setForm((prev) => ({ ...prev, messaggio: e.target.value }))
                  }
                  placeholder="Come possiamo aiutarti?"
                  className="w-full bg-ocean-800 border border-cream-100/10 rounded-lg px-4 py-3 text-cream-100 placeholder:text-cream-100/30 focus:outline-none focus:border-gold-500/50 transition-colors resize-none"
                />
              </div>

              <button type="submit" className="btn-gold w-full">
                Invia Messaggio
              </button>
            </form>
          )}
        </div>
      </section>

      <div className="section-divider" />

      {/* ───────── CTA Row ───────── */}
      <section className="bg-ocean-900 py-20">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2
            className="text-3xl md:text-4xl text-cream-100 mb-4"
            style={{ fontFamily: 'var(--font-playfair)' }}
          >
            Pronti per una serata di mare?
          </h2>
          <p className="text-cream-100/60 mb-10 max-w-lg mx-auto">
            Prenotate il vostro tavolo o ordinate i nostri piatti da portare a
            casa.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/reservations" className="btn-gold">
              Prenota un Tavolo
            </Link>
            <Link href="/order" className="btn-outline">
              Ordina Asporto
            </Link>
          </div>
        </div>
      </section>

      {/* ───────── WhatsApp Floating Button ───────── */}
      <a
        href="https://wa.me/393933304614"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Contattaci su WhatsApp"
        className="fixed bottom-24 right-5 lg:bottom-6 lg:right-6 z-40 w-14 h-14 bg-[#25D366] rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-transform"
      >
        <svg
          className="w-7 h-7 text-white"
          viewBox="0 0 24 24"
          fill="currentColor"
        >
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
        </svg>
      </a>
    </main>
  );
}

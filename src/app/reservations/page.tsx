'use client';

import { useState } from 'react';

interface ReservationForm {
  nome: string;
  telefono: string;
  email: string;
  data: string;
  ora: string;
  ospiti: number;
  preferenza: string;
  richieste: string;
  consenso: boolean;
}

const initialForm: ReservationForm = {
  nome: '',
  telefono: '',
  email: '',
  data: '',
  ora: '',
  ospiti: 2,
  preferenza: 'Nessuna preferenza',
  richieste: '',
  consenso: false,
};

const timeSlots = [
  '12:00', '12:30', '13:00', '13:30', '14:00', '14:30',
  '19:00', '19:30', '20:00', '20:30', '21:00', '21:30', '22:00',
];

export default function ReservationsPage() {
  const [form, setForm] = useState<ReservationForm>(initialForm);
  const [submitted, setSubmitted] = useState(false);
  const [submittedData, setSubmittedData] = useState<ReservationForm | null>(null);

  const today = new Date().toISOString().split('T')[0];

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) {
    const { name, value, type } = e.target;
    if (type === 'checkbox') {
      setForm((prev) => ({ ...prev, [name]: (e.target as HTMLInputElement).checked }));
    } else if (type === 'number') {
      setForm((prev) => ({ ...prev, [name]: parseInt(value) || 1 }));
    } else {
      setForm((prev) => ({ ...prev, [name]: value }));
    }
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    console.log('Prenotazione inviata:', form);
    setSubmittedData({ ...form });
    setSubmitted(true);
  }

  if (submitted && submittedData) {
    return (
      <section className="bg-ocean-950 min-h-screen py-20 px-4">
        <div className="max-w-2xl mx-auto text-center animate-fade-in-up">
          {/* Success icon */}
          <div className="w-20 h-20 mx-auto mb-8 rounded-full flex items-center justify-center"
            style={{ background: 'linear-gradient(135deg, #22c55e, #16a34a)' }}>
            <svg className="w-10 h-10 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
            </svg>
          </div>

          <h1 className="text-3xl md:text-4xl text-gold-500 mb-4" style={{ fontFamily: 'var(--font-playfair)' }}>
            Prenotazione Confermata!
          </h1>
          <p className="text-cream-100/70 mb-10">
            Grazie per aver scelto Zio Pesce. Vi aspettiamo!
          </p>

          {/* Reservation summary */}
          <div className="glass-card rounded-lg p-8 text-left space-y-4 mb-10">
            <h2 className="text-gold-500 text-sm uppercase tracking-widest mb-6"
              style={{ fontFamily: 'var(--font-playfair)' }}>
              Riepilogo Prenotazione
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm">
              <div>
                <span className="text-cream-100/50 block">Nome</span>
                <span className="text-cream-100">{submittedData.nome}</span>
              </div>
              <div>
                <span className="text-cream-100/50 block">Telefono</span>
                <span className="text-cream-100">{submittedData.telefono}</span>
              </div>
              <div>
                <span className="text-cream-100/50 block">Email</span>
                <span className="text-cream-100">{submittedData.email}</span>
              </div>
              <div>
                <span className="text-cream-100/50 block">Data</span>
                <span className="text-cream-100">{submittedData.data}</span>
              </div>
              <div>
                <span className="text-cream-100/50 block">Ora</span>
                <span className="text-cream-100">{submittedData.ora}</span>
              </div>
              <div>
                <span className="text-cream-100/50 block">Ospiti</span>
                <span className="text-cream-100">{submittedData.ospiti}</span>
              </div>
              <div>
                <span className="text-cream-100/50 block">Preferenza</span>
                <span className="text-cream-100">{submittedData.preferenza}</span>
              </div>
              {submittedData.richieste && (
                <div className="sm:col-span-2">
                  <span className="text-cream-100/50 block">Richieste speciali</span>
                  <span className="text-cream-100">{submittedData.richieste}</span>
                </div>
              )}
            </div>
          </div>

          <button
            onClick={() => { setSubmitted(false); setForm(initialForm); }}
            className="btn-outline"
          >
            Nuova Prenotazione
          </button>
        </div>
      </section>
    );
  }

  return (
    <section className="bg-ocean-950 min-h-screen py-20 px-4">
      <div className="max-w-2xl mx-auto">
        {/* Header */}
        <div className="text-center mb-14">
          <h1 className="text-4xl md:text-5xl text-gold-500 mb-4" style={{ fontFamily: 'var(--font-playfair)' }}>
            Prenota il Tuo Tavolo
          </h1>
          <div className="section-divider mb-6" />
          <p className="text-cream-100/70 text-lg max-w-md mx-auto">
            Prenota il tuo tavolo nella Darsena di Savona. Ti aspettiamo con il pesce del giorno, i crudi e le nostre pizze al nero di seppia.
          </p>
        </div>

        {/* Reservation form */}
        <form onSubmit={handleSubmit} className="glass-card rounded-lg p-8 md:p-10 space-y-6 mb-12">
          {/* Nome */}
          <div>
            <label htmlFor="nome" className="block text-sm text-gold-500 uppercase tracking-wider mb-2">
              Nome Completo *
            </label>
            <input
              type="text"
              id="nome"
              name="nome"
              value={form.nome}
              onChange={handleChange}
              placeholder="Il tuo nome e cognome"
              required
            />
          </div>

          {/* Telefono & Email */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div>
              <label htmlFor="telefono" className="block text-sm text-gold-500 uppercase tracking-wider mb-2">
                Telefono *
              </label>
              <input
                type="tel"
                id="telefono"
                name="telefono"
                value={form.telefono}
                onChange={handleChange}
                placeholder="+39 ..."
                required
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm text-gold-500 uppercase tracking-wider mb-2">
                Email *
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                placeholder="la-tua@email.it"
                required
              />
            </div>
          </div>

          {/* Data & Ora */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div>
              <label htmlFor="data" className="block text-sm text-gold-500 uppercase tracking-wider mb-2">
                Data *
              </label>
              <input
                type="date"
                id="data"
                name="data"
                value={form.data}
                onChange={handleChange}
                min={today}
                required
              />
            </div>
            <div>
              <label htmlFor="ora" className="block text-sm text-gold-500 uppercase tracking-wider mb-2">
                Ora *
              </label>
              <select
                id="ora"
                name="ora"
                value={form.ora}
                onChange={handleChange}
                required
              >
                <option value="">Seleziona orario</option>
                {timeSlots.map((t) => (
                  <option key={t} value={t}>{t}</option>
                ))}
              </select>
            </div>
          </div>

          {/* Ospiti & Preferenza */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div>
              <label htmlFor="ospiti" className="block text-sm text-gold-500 uppercase tracking-wider mb-2">
                Numero Ospiti *
              </label>
              <input
                type="number"
                id="ospiti"
                name="ospiti"
                value={form.ospiti}
                onChange={handleChange}
                min={1}
                max={20}
                required
              />
            </div>
            <div>
              <label htmlFor="preferenza" className="block text-sm text-gold-500 uppercase tracking-wider mb-2">
                Preferenza Posto
              </label>
              <select
                id="preferenza"
                name="preferenza"
                value={form.preferenza}
                onChange={handleChange}
              >
                <option value="Interno">Interno</option>
                <option value="Esterno (Dehor)">Esterno (Dehor)</option>
                <option value="Nessuna preferenza">Nessuna preferenza</option>
              </select>
            </div>
          </div>

          {/* Richieste speciali */}
          <div>
            <label htmlFor="richieste" className="block text-sm text-gold-500 uppercase tracking-wider mb-2">
              Richieste Speciali
            </label>
            <textarea
              id="richieste"
              name="richieste"
              value={form.richieste}
              onChange={handleChange}
              placeholder="Allergie, intolleranze, occasioni speciali..."
              rows={4}
            />
          </div>

          {/* Consenso */}
          <div className="flex items-start gap-3">
            <input
              type="checkbox"
              id="consenso"
              name="consenso"
              checked={form.consenso}
              onChange={handleChange}
              required
              className="mt-1 w-5 h-5 shrink-0 cursor-pointer"
              style={{ width: '20px', height: '20px', minWidth: '20px' }}
            />
            <label htmlFor="consenso" className="text-sm text-cream-100/70 cursor-pointer">
              Acconsento al trattamento dei dati personali ai sensi del GDPR per la gestione della prenotazione. *
            </label>
          </div>

          {/* Submit */}
          <button type="submit" className="btn-gold w-full mt-4">
            Conferma Prenotazione
          </button>
        </form>

        {/* Info card */}
        <div className="glass-card rounded-lg p-8 md:p-10">
          <h2 className="text-xl text-gold-500 mb-6" style={{ fontFamily: 'var(--font-playfair)' }}>
            Preferisci contattarci direttamente?
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 text-sm">
            <div className="space-y-4">
              <div>
                <span className="text-cream-100/50 block mb-1 uppercase tracking-wider text-xs">Telefono</span>
                <a href="tel:+393933304614" className="text-cream-100 hover:text-gold-500 transition-colors">
                  +39 393 330 4614
                </a>
              </div>
              <div>
                <span className="text-cream-100/50 block mb-1 uppercase tracking-wider text-xs">WhatsApp</span>
                <a
                  href="https://wa.me/393933304614?text=Buongiorno%2C%20vorrei%20prenotare%20un%20tavolo."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-cream-100 hover:text-gold-500 transition-colors"
                >
                  Scrivici su WhatsApp
                </a>
              </div>
            </div>
            <div className="space-y-4">
              <div>
                <span className="text-cream-100/50 block mb-1 uppercase tracking-wider text-xs">Indirizzo</span>
                <span className="text-cream-100">Via Antonio Baglietto 8R, Savona (Darsena)</span>
              </div>
              <div>
                <span className="text-cream-100/50 block mb-1 uppercase tracking-wider text-xs">Orari</span>
                <span className="text-cream-100 block">Pranzo: 12:00 &ndash; 15:00</span>
                <span className="text-cream-100 block">Cena: 19:00 &ndash; 23:00</span>
                <span className="text-cream-100/50 block mt-1">Aperto tutti i giorni</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

'use client';
import { useState } from 'react';

/** Email capture for offers / events. Client-only for now: validates and shows
 *  a confirmation. Wire `handleSubmit` to a backend (e.g. POST /api/newsletter)
 *  or an email provider (Mailchimp/Brevo) when available. */
export default function Newsletter() {
  const [email, setEmail] = useState('');
  const [done, setDone] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const valid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    if (!valid) {
      setError('Inserisci un indirizzo email valido.');
      return;
    }
    setError('');
    // TODO: connect to email/CRM backend
    console.log('[newsletter] subscribe:', email);
    setDone(true);
  };

  if (done) {
    return (
      <div className="flex items-center gap-3 text-sm text-green-300">
        <svg className="w-5 h-5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
        </svg>
        Grazie! Ti avviseremo di menù speciali ed eventi.
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="space-y-3">
      <div className="flex flex-col sm:flex-row gap-2">
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="La tua email"
          aria-label="Indirizzo email per la newsletter"
          className="flex-1 px-4 py-2.5 bg-ocean-950 border border-gold-500/20 rounded-lg text-cream-100 placeholder:text-cream-100/40 focus:border-gold-500 focus:outline-none focus:ring-1 focus:ring-gold-500/30 transition-colors text-sm"
        />
        <button
          type="submit"
          className="px-5 py-2.5 bg-gold-500 text-ocean-950 rounded-lg text-sm font-semibold hover:bg-gold-400 transition-colors whitespace-nowrap"
        >
          Iscriviti
        </button>
      </div>
      {error && <p className="text-red-300 text-xs">{error}</p>}
    </form>
  );
}

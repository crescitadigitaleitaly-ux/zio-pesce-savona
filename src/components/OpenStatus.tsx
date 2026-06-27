'use client';
import { useState, useEffect } from 'react';

/** Live "open now / closed" badge computed in the restaurant's timezone (Rome).
 *  Service hours: every day 12:00–15:00 (lunch) and 19:00–23:00 (dinner). */
function computeStatus(): { open: boolean; label: string } {
  const now = new Date();
  // Current time in Europe/Rome regardless of the visitor's timezone.
  const rome = new Date(now.toLocaleString('en-US', { timeZone: 'Europe/Rome' }));
  const h = rome.getHours() + rome.getMinutes() / 60;
  const lunch = h >= 12 && h < 15;
  const dinner = h >= 19 && h < 23;
  if (lunch || dinner) {
    const closeAt = lunch ? '15:00' : '23:00';
    return { open: true, label: `Aperto ora · fino alle ${closeAt}` };
  }
  let next = 'oggi alle 12:00';
  if (h >= 15 && h < 19) next = 'oggi alle 19:00';
  else if (h >= 23) next = 'domani alle 12:00';
  else if (h < 12) next = 'oggi alle 12:00';
  return { open: false, label: `Chiuso · riapre ${next}` };
}

export default function OpenStatus({ className = '' }: { className?: string }) {
  const [status, setStatus] = useState<{ open: boolean; label: string } | null>(null);

  useEffect(() => {
    setStatus(computeStatus());
    const id = setInterval(() => setStatus(computeStatus()), 60_000);
    return () => clearInterval(id);
  }, []);

  if (!status) return null;

  return (
    <span
      className={`inline-flex items-center gap-2 text-sm ${className}`}
      role="status"
      aria-live="polite"
    >
      <span className="relative flex h-2.5 w-2.5">
        {status.open && (
          <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400 opacity-75" />
        )}
        <span
          className={`relative inline-flex h-2.5 w-2.5 rounded-full ${
            status.open ? 'bg-green-400' : 'bg-red-400/80'
          }`}
        />
      </span>
      <span className={status.open ? 'text-green-300' : 'text-cream-100/60'}>
        {status.label}
      </span>
    </span>
  );
}

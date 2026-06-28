'use client';
import { useState } from 'react';
import Link from 'next/link';
import { useCart } from '@/context/CartContext';
import { usePathname } from 'next/navigation';

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'Chi Siamo' },
  { href: '/menu', label: 'Menu' },
  { href: '/gallery', label: 'Galleria' },
  { href: '/reservations', label: 'Prenota' },
  { href: '/order', label: 'Asporto' },
  { href: '/contact', label: 'Contatti' },
];

export default function Navigation() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const { totalItems, setIsCartOpen } = useCart();
  const pathname = usePathname();

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-50 bg-ocean-950 border-b border-gold-500/10 shadow-lg shadow-black/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            <Link href="/" className="flex items-center gap-3 group">
              <span className="text-2xl font-serif font-bold text-gold-500 tracking-wide group-hover:text-gold-400 transition-colors">
                Zio Pesce
              </span>
            </Link>

            <div className="hidden lg:flex items-center gap-8">
              {navLinks.map(link => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`text-xs uppercase tracking-[0.15em] font-medium transition-colors ${
                    pathname === link.href
                      ? 'text-gold-500'
                      : 'text-cream-100/70 hover:text-gold-500'
                  }`}
                >
                  {link.label}
                </Link>
              ))}
            </div>

            <div className="flex items-center gap-4">
              <button
                onClick={() => setIsCartOpen(true)}
                className="relative p-2.5 text-cream-100/70 hover:text-gold-500 transition-colors min-w-[44px] min-h-[44px] flex items-center justify-center"
                aria-label="Apri carrello"
              >
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" />
                </svg>
                {totalItems > 0 && (
                  <span className="absolute -top-1 -right-1 bg-gold-500 text-ocean-950 text-xs font-bold w-5 h-5 rounded-full flex items-center justify-center">
                    {totalItems}
                  </span>
                )}
              </button>

              <span className="hidden lg:block">
                <Link href="/reservations" className="btn-gold text-xs py-2.5 px-5">
                  Prenota
                </Link>
              </span>

              <button
                className="lg:hidden p-2.5 -mr-1 text-cream-100/70 min-w-[44px] min-h-[44px] flex items-center justify-center"
                onClick={() => setMobileOpen(!mobileOpen)}
                aria-label="Menu di navigazione"
              >
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  {mobileOpen ? (
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                  ) : (
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                  )}
                </svg>
              </button>
            </div>
          </div>
        </div>

        {mobileOpen && (
          <div className="lg:hidden bg-ocean-950 border-t border-gold-500/10">
            <div className="px-4 py-6 space-y-4">
              {navLinks.map(link => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className={`block text-sm uppercase tracking-[0.15em] font-medium py-2 ${
                    pathname === link.href ? 'text-gold-500' : 'text-cream-100/70'
                  }`}
                >
                  {link.label}
                </Link>
              ))}
              <Link
                href="/order"
                onClick={() => setMobileOpen(false)}
                className="block btn-gold text-center mt-4"
              >
                Ordina Asporto
              </Link>
            </div>
          </div>
        )}
      </nav>

      {/* Mobile sticky CTA */}
      <div className="fixed bottom-0 left-0 right-0 z-40 lg:hidden bg-ocean-950 border-t border-gold-500/10 px-4 py-3 flex gap-3 shadow-[0_-4px_20px_rgba(0,0,0,0.3)]">
        <Link href="/reservations" className="flex-1 btn-gold text-center text-xs py-3">
          Prenota Tavolo
        </Link>
        <Link href="/order" className="flex-1 btn-outline text-center text-xs py-3">
          Ordina Asporto
        </Link>
      </div>
    </>
  );
}

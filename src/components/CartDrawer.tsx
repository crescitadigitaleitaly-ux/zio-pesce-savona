'use client';
import { useCart } from '@/context/CartContext';
import Link from 'next/link';

export default function CartDrawer() {
  const { items, isCartOpen, setIsCartOpen, removeItem, updateQuantity, subtotal, clearCart } = useCart();

  if (!isCartOpen) return null;

  return (
    <>
      <div className="fixed inset-0 bg-black/60 z-50" onClick={() => setIsCartOpen(false)} />
      <div className="fixed right-0 top-0 bottom-0 w-full max-w-md bg-ocean-900 z-50 flex flex-col shadow-2xl">
        <div className="flex items-center justify-between p-6 border-b border-gold-500/10">
          <h2 className="font-serif text-xl text-gold-500">Il tuo ordine</h2>
          <button onClick={() => setIsCartOpen(false)} className="text-cream-100/50 hover:text-cream-100 p-1" aria-label="Chiudi carrello">
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        <div className="flex-1 overflow-y-auto p-6">
          {items.length === 0 ? (
            <div className="text-center py-12">
              <svg className="w-16 h-16 mx-auto mb-4 text-gold-500/30" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" />
              </svg>
              <p className="text-cream-100/50 text-sm">Il carrello è vuoto</p>
              <button onClick={() => setIsCartOpen(false)} className="btn-outline mt-6 text-xs">
                Sfoglia il menu
              </button>
            </div>
          ) : (
            <div className="space-y-4">
              {items.map(ci => (
                <div key={ci.item.id} className="flex gap-4 p-4 bg-ocean-800/50 border border-gold-500/5 rounded">
                  <div className="flex-1">
                    <h4 className="text-sm font-medium text-cream-100">{ci.item.name}</h4>
                    <p className="text-xs text-gold-500 mt-1">{ci.item.price}</p>
                    {ci.notes && <p className="text-xs text-cream-100/40 mt-1 italic">{ci.notes}</p>}
                  </div>
                  <div className="flex flex-col items-end gap-2">
                    <button onClick={() => removeItem(ci.item.id)} className="text-cream-100/30 hover:text-red-400 text-xs" aria-label="Rimuovi">
                      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0" />
                      </svg>
                    </button>
                    <div className="flex items-center gap-2 bg-ocean-950 rounded">
                      <button
                        onClick={() => updateQuantity(ci.item.id, ci.quantity - 1)}
                        className="w-7 h-7 flex items-center justify-center text-cream-100/50 hover:text-gold-500 text-sm"
                        aria-label="Diminuisci quantità"
                      >
                        -
                      </button>
                      <span className="text-sm font-medium w-5 text-center">{ci.quantity}</span>
                      <button
                        onClick={() => updateQuantity(ci.item.id, ci.quantity + 1)}
                        className="w-7 h-7 flex items-center justify-center text-cream-100/50 hover:text-gold-500 text-sm"
                        aria-label="Aumenta quantità"
                      >
                        +
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {items.length > 0 && (
          <div className="p-6 border-t border-gold-500/10 space-y-4">
            <div className="flex justify-between items-center">
              <span className="text-sm text-cream-100/70">Subtotale</span>
              <span className="font-serif text-xl text-gold-500">&euro;{subtotal.toFixed(2)}</span>
            </div>
            <Link
              href="/order#checkout"
              onClick={() => setIsCartOpen(false)}
              className="btn-gold w-full block text-center"
            >
              Procedi all&apos;ordine
            </Link>
            <button onClick={clearCart} className="text-xs text-cream-100/30 hover:text-cream-100/60 transition-colors w-full text-center">
              Svuota carrello
            </button>
          </div>
        )}
      </div>
    </>
  );
}

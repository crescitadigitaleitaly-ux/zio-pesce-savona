'use client';

import { useState } from 'react';
import { menuCategories } from '@/data/menu';
import { useCart } from '@/context/CartContext';
import MenuItemImage from '@/components/MenuItemImage';
import Link from 'next/link';

interface OrderForm {
  nome: string;
  telefono: string;
  email: string;
  metodoRitiro: 'ritiro' | 'consegna';
  indirizzo: string;
  pagamento: 'contanti' | 'online';
  note: string;
}

const initialOrderForm: OrderForm = {
  nome: '',
  telefono: '',
  email: '',
  metodoRitiro: 'ritiro',
  indirizzo: '',
  pagamento: 'contanti',
  note: '',
};

export default function OrderPage() {
  const { items, addItem, removeItem, updateQuantity, updateNotes, clearCart, subtotal } = useCart();
  const [activeCategory, setActiveCategory] = useState(menuCategories[0].id);
  const [orderForm, setOrderForm] = useState<OrderForm>(initialOrderForm);
  const [orderConfirmed, setOrderConfirmed] = useState(false);
  const [orderNumber, setOrderNumber] = useState('');
  const [confirmedItems, setConfirmedItems] = useState<typeof items>([]);
  const [confirmedSubtotal, setConfirmedSubtotal] = useState(0);

  function handleFormChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) {
    const { name, value } = e.target;
    setOrderForm((prev) => ({ ...prev, [name]: value }));
  }

  function handleSubmitOrder(e: React.FormEvent) {
    e.preventDefault();
    const num = 'ZP-' + Math.random().toString(36).substring(2, 8).toUpperCase();
    setOrderNumber(num);
    setConfirmedItems([...items]);
    setConfirmedSubtotal(subtotal);
    console.log('Ordine confermato:', { orderNumber: num, items, orderForm, subtotal });
    setOrderConfirmed(true);
    clearCart();
  }

  // Order confirmation screen
  if (orderConfirmed) {
    return (
      <section className="bg-ocean-950 min-h-screen py-20 px-4">
        <div className="max-w-2xl mx-auto text-center animate-fade-in-up">
          {/* Success icon */}
          <div
            className="w-20 h-20 mx-auto mb-8 rounded-full flex items-center justify-center"
            style={{ background: 'linear-gradient(135deg, #22c55e, #16a34a)' }}
          >
            <svg className="w-10 h-10 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
            </svg>
          </div>

          <h1 className="text-3xl md:text-4xl text-gold-500 mb-4" style={{ fontFamily: 'var(--font-playfair)' }}>
            Ordine Confermato!
          </h1>
          <p className="text-cream-100/70 mb-2">Il tuo numero d&apos;ordine:</p>
          <p className="text-2xl text-gold-500 font-bold mb-2 tracking-wider">{orderNumber}</p>
          <p className="text-cream-100/70 mb-10">
            Tempo stimato: <span className="text-cream-100 font-semibold">30&ndash;45 minuti</span>
          </p>

          {/* Order summary */}
          <div className="glass-card rounded-lg p-8 text-left mb-10">
            <h2 className="text-gold-500 text-sm uppercase tracking-widest mb-6" style={{ fontFamily: 'var(--font-playfair)' }}>
              Riepilogo Ordine
            </h2>
            <div className="space-y-3 mb-6">
              {confirmedItems.map((ci) => (
                <div key={ci.item.id} className="flex justify-between text-sm">
                  <span className="text-cream-100">
                    {ci.quantity}x {ci.item.name}
                    {ci.notes && <span className="text-cream-100/50 block text-xs ml-4">Nota: {ci.notes}</span>}
                  </span>
                  <span className="text-cream-100/70 shrink-0 ml-4">
                    {ci.item.price}
                  </span>
                </div>
              ))}
            </div>
            <div className="border-t border-gold-500/20 pt-4 flex justify-between font-semibold">
              <span className="text-cream-100">Totale</span>
              <span className="text-gold-500">&euro;{confirmedSubtotal.toFixed(2)}</span>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => { setOrderConfirmed(false); setOrderForm(initialOrderForm); }}
              className="btn-gold"
            >
              Nuovo Ordine
            </button>
            <Link href="/" className="btn-outline">
              Torna alla Home
            </Link>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="bg-ocean-950 min-h-screen py-20 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-14">
          <h1 className="text-4xl md:text-5xl text-gold-500 mb-4" style={{ fontFamily: 'var(--font-playfair)' }}>
            Ordina Asporto
          </h1>
          <div className="section-divider mb-6" />
          <p className="text-cream-100/70 text-lg max-w-lg mx-auto">
            Scegli i tuoi piatti preferiti dal nostro menu e ritirali in locale o ricevili a domicilio.
          </p>
        </div>

        {/* Service info bar — builds trust & reduces ordering friction */}
        <div className="max-w-3xl mx-auto mb-12 grid grid-cols-1 sm:grid-cols-3 gap-3">
          {[
            { t: 'Pronto in 30–45 min', d: 'Ritiro in locale', icon: 'M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z' },
            { t: 'Consegna a domicilio', d: 'Zona Savona centro', icon: 'M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7' },
            { t: 'Paghi al ritiro', d: 'Contanti accettati', icon: 'M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z' },
          ].map((b) => (
            <div key={b.t} className="glass-card rounded-xl px-4 py-4 flex items-center gap-3 text-left">
              <svg className="w-7 h-7 text-gold-400 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d={b.icon} />
              </svg>
              <div>
                <p className="text-cream-100 text-sm font-medium leading-tight">{b.t}</p>
                <p className="text-cream-100/50 text-xs">{b.d}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Two-column layout */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left: Menu browsing */}
          <div className="lg:col-span-2">
            {/* Category tabs */}
            <div className="flex gap-2 overflow-x-auto pb-4 mb-8 scrollbar-hide">
              {menuCategories.map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => setActiveCategory(cat.id)}
                  className={`shrink-0 px-4 py-2 text-sm uppercase tracking-wider rounded-sm transition-all cursor-pointer ${
                    activeCategory === cat.id
                      ? 'bg-gold-500 text-ocean-950 font-semibold'
                      : 'border border-gold-500/30 text-cream-100/70 hover:border-gold-500 hover:text-cream-100'
                  }`}
                >
                  {cat.nameIt}
                </button>
              ))}
            </div>

            {/* Menu items grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {menuCategories
                .find((cat) => cat.id === activeCategory)
                ?.items.map((item) => (
                  <div key={item.id} className="menu-card rounded-lg overflow-hidden flex">
                    {/* Image */}
                    <div className="w-24 h-24 shrink-0">
                      <MenuItemImage src={item.image} alt={item.alt} className="w-full h-full" />
                    </div>
                    {/* Info */}
                    <div className="flex-1 p-3 flex flex-col justify-between min-w-0">
                      <div>
                        <h3 className="text-cream-100 text-sm font-semibold truncate">{item.name}</h3>
                        <p className="text-cream-100/50 text-xs mt-0.5 line-clamp-2">{item.description}</p>
                      </div>
                      <div className="flex items-center justify-between mt-2">
                        <span className="text-gold-500 font-semibold text-sm">{item.price}</span>
                        <button
                          onClick={() => addItem(item)}
                          className="w-8 h-8 rounded-full flex items-center justify-center text-ocean-950 shrink-0 cursor-pointer transition-all hover:scale-110"
                          style={{ background: 'linear-gradient(135deg, var(--color-gold-500), var(--color-gold-400))' }}
                          title="Aggiungi al carrello"
                        >
                          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                          </svg>
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
            </div>
          </div>

          {/* Right: Cart sidebar */}
          <div className="lg:col-span-1" id="checkout">
            <div className="lg:sticky lg:top-24 scroll-mt-24">
              <div className="glass-card rounded-lg p-6">
                <h2 className="text-xl text-gold-500 mb-6" style={{ fontFamily: 'var(--font-playfair)' }}>
                  Il Tuo Carrello
                </h2>

                {items.length === 0 ? (
                  <div className="text-center py-10">
                    <svg className="w-12 h-12 mx-auto mb-4 text-cream-100/20" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" />
                    </svg>
                    <p className="text-cream-100/50 text-sm">Il carrello è vuoto</p>
                    <p className="text-cream-100/30 text-xs mt-1">Aggiungi piatti dal menu</p>
                  </div>
                ) : (
                  <>
                    {/* Cart items */}
                    <div className="space-y-4 mb-6 max-h-80 overflow-y-auto pr-1">
                      {items.map((ci) => (
                        <div key={ci.item.id} className="border-b border-gold-500/10 pb-4">
                          <div className="flex justify-between items-start mb-2">
                            <div className="min-w-0 flex-1">
                              <h4 className="text-cream-100 text-sm font-medium truncate">{ci.item.name}</h4>
                              <span className="text-gold-500 text-xs">{ci.item.price}</span>
                            </div>
                            <button
                              onClick={() => removeItem(ci.item.id)}
                              className="text-cream-100/30 hover:text-red-400 transition-colors ml-2 cursor-pointer shrink-0"
                              title="Rimuovi"
                            >
                              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                              </svg>
                            </button>
                          </div>

                          {/* Quantity controls */}
                          <div className="flex items-center gap-3 mb-2">
                            <button
                              onClick={() => updateQuantity(ci.item.id, ci.quantity - 1)}
                              className="w-7 h-7 rounded-sm border border-gold-500/30 flex items-center justify-center text-cream-100/70 hover:border-gold-500 hover:text-cream-100 transition-colors cursor-pointer"
                            >
                              <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                                <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 12h-15" />
                              </svg>
                            </button>
                            <span className="text-cream-100 text-sm font-medium w-6 text-center">{ci.quantity}</span>
                            <button
                              onClick={() => updateQuantity(ci.item.id, ci.quantity + 1)}
                              className="w-7 h-7 rounded-sm border border-gold-500/30 flex items-center justify-center text-cream-100/70 hover:border-gold-500 hover:text-cream-100 transition-colors cursor-pointer"
                            >
                              <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                                <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                              </svg>
                            </button>
                          </div>

                          {/* Item notes */}
                          <input
                            type="text"
                            placeholder="Note (es. senza cipolla)..."
                            value={ci.notes}
                            onChange={(e) => updateNotes(ci.item.id, e.target.value)}
                            className="text-xs py-1.5 px-2"
                            style={{ fontSize: '0.75rem' }}
                          />
                        </div>
                      ))}
                    </div>

                    {/* Subtotal */}
                    <div className="flex justify-between items-center py-4 border-t border-gold-500/20 mb-6">
                      <span className="text-cream-100 font-semibold">Subtotale</span>
                      <span className="text-gold-500 font-bold text-lg">&euro;{subtotal.toFixed(2)}</span>
                    </div>

                    {/* Checkout form */}
                    <form onSubmit={handleSubmitOrder} className="space-y-4">
                      <h3 className="text-gold-500 text-sm uppercase tracking-widest" style={{ fontFamily: 'var(--font-playfair)' }}>
                        Dettagli Ordine
                      </h3>

                      <div>
                        <label htmlFor="order-nome" className="block text-xs text-cream-100/50 uppercase tracking-wider mb-1">
                          Nome *
                        </label>
                        <input
                          type="text"
                          id="order-nome"
                          name="nome"
                          value={orderForm.nome}
                          onChange={handleFormChange}
                          placeholder="Il tuo nome"
                          required
                          className="text-sm py-2"
                        />
                      </div>

                      <div>
                        <label htmlFor="order-telefono" className="block text-xs text-cream-100/50 uppercase tracking-wider mb-1">
                          Telefono *
                        </label>
                        <input
                          type="tel"
                          id="order-telefono"
                          name="telefono"
                          value={orderForm.telefono}
                          onChange={handleFormChange}
                          placeholder="+39 ..."
                          required
                          className="text-sm py-2"
                        />
                      </div>

                      <div>
                        <label htmlFor="order-email" className="block text-xs text-cream-100/50 uppercase tracking-wider mb-1">
                          Email *
                        </label>
                        <input
                          type="email"
                          id="order-email"
                          name="email"
                          value={orderForm.email}
                          onChange={handleFormChange}
                          placeholder="la-tua@email.it"
                          required
                          className="text-sm py-2"
                        />
                      </div>

                      {/* Metodo ritiro */}
                      <div>
                        <span className="block text-xs text-cream-100/50 uppercase tracking-wider mb-2">Metodo Ritiro</span>
                        <div className="space-y-2">
                          <label className="flex items-center gap-3 cursor-pointer">
                            <input
                              type="radio"
                              name="metodoRitiro"
                              value="ritiro"
                              checked={orderForm.metodoRitiro === 'ritiro'}
                              onChange={handleFormChange}
                              className="w-4 h-4"
                              style={{ width: '16px', height: '16px', minWidth: '16px' }}
                            />
                            <span className="text-cream-100 text-sm">Ritiro in locale</span>
                          </label>
                          <label className="flex items-center gap-3 cursor-pointer">
                            <input
                              type="radio"
                              name="metodoRitiro"
                              value="consegna"
                              checked={orderForm.metodoRitiro === 'consegna'}
                              onChange={handleFormChange}
                              className="w-4 h-4"
                              style={{ width: '16px', height: '16px', minWidth: '16px' }}
                            />
                            <span className="text-cream-100 text-sm">Consegna a domicilio</span>
                          </label>
                        </div>
                      </div>

                      {/* Indirizzo (solo consegna) */}
                      {orderForm.metodoRitiro === 'consegna' && (
                        <div>
                          <label htmlFor="order-indirizzo" className="block text-xs text-cream-100/50 uppercase tracking-wider mb-1">
                            Indirizzo di Consegna *
                          </label>
                          <input
                            type="text"
                            id="order-indirizzo"
                            name="indirizzo"
                            value={orderForm.indirizzo}
                            onChange={handleFormChange}
                            placeholder="Via, numero civico, citta..."
                            required
                            className="text-sm py-2"
                          />
                        </div>
                      )}

                      {/* Pagamento */}
                      <div>
                        <span className="block text-xs text-cream-100/50 uppercase tracking-wider mb-2">Metodo di Pagamento</span>
                        <div className="space-y-2">
                          <label className="flex items-center gap-3 cursor-pointer">
                            <input
                              type="radio"
                              name="pagamento"
                              value="contanti"
                              checked={orderForm.pagamento === 'contanti'}
                              onChange={handleFormChange}
                              className="w-4 h-4"
                              style={{ width: '16px', height: '16px', minWidth: '16px' }}
                            />
                            <span className="text-cream-100 text-sm">Contanti al ritiro/consegna</span>
                          </label>
                          <label className="flex items-center gap-3 cursor-pointer opacity-40">
                            <input
                              type="radio"
                              name="pagamento"
                              value="online"
                              disabled
                              className="w-4 h-4"
                              style={{ width: '16px', height: '16px', minWidth: '16px' }}
                            />
                            <span className="text-cream-100 text-sm">Pagamento online (prossimamente)</span>
                          </label>
                        </div>
                      </div>

                      {/* Note ordine */}
                      <div>
                        <label htmlFor="order-note" className="block text-xs text-cream-100/50 uppercase tracking-wider mb-1">
                          Note Ordine
                        </label>
                        <textarea
                          id="order-note"
                          name="note"
                          value={orderForm.note}
                          onChange={handleFormChange}
                          placeholder="Istruzioni particolari..."
                          rows={3}
                          className="text-sm py-2"
                        />
                      </div>

                      <button type="submit" className="btn-gold w-full">
                        Conferma Ordine
                      </button>
                    </form>
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

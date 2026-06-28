'use client';

import { useState, useMemo, useCallback } from 'react';
import { menuCategories, type MenuCategory } from '@/data/menu';
import { MenuCard } from '@/components/MenuCard';
import { useCart } from '@/context/CartContext';

export default function MenuPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [activeCategory, setActiveCategory] = useState<string | null>(null);
  const [addedItems, setAddedItems] = useState<Record<string, boolean>>({});
  const cart = useCart();

  const handleAddToCart = useCallback((item: MenuCategory['items'][number]) => {
    cart.addItem(item);
    setAddedItems((prev) => ({ ...prev, [item.id]: true }));
    setTimeout(() => {
      setAddedItems((prev) => ({ ...prev, [item.id]: false }));
    }, 2000);
  }, [cart]);

  const filteredCategories = useMemo(() => {
    const query = searchQuery.toLowerCase().trim();

    if (query) {
      // When searching, show matching items across all categories
      return menuCategories
        .map((cat) => ({
          ...cat,
          items: cat.items.filter(
            (item) =>
              item.name.toLowerCase().includes(query) ||
              item.description.toLowerCase().includes(query)
          ),
        }))
        .filter((cat) => cat.items.length > 0);
    }

    if (activeCategory) {
      return menuCategories.filter((cat) => cat.id === activeCategory);
    }

    return menuCategories;
  }, [searchQuery, activeCategory]);

  return (
    <main className="min-h-screen bg-ocean-950">
      {/* Page Header */}
      <section className="pt-24 pb-12 text-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1
            className="text-4xl sm:text-5xl lg:text-6xl text-gold-500 mb-4"
            style={{ fontFamily: 'var(--font-playfair)' }}
          >
            Il Nostro Menu
          </h1>
          <div className="section-divider mx-auto mb-6" />
          <p className="text-cream-100/70 text-lg max-w-2xl mx-auto leading-relaxed">
            Pesce fresco del golfo, cucina ligure di tradizione e pizza gourmet al nero di seppia.
            Ogni piatto racconta il mare di Savona.
          </p>
        </div>
      </section>

      {/* Search Bar */}
      <section className="pb-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-md mx-auto relative">
            <svg
              className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-cream-100/40"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={1.5}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
              />
            </svg>
            <input
              type="text"
              placeholder="Cerca un piatto..."
              value={searchQuery}
              onChange={(e) => {
                setSearchQuery(e.target.value);
                if (e.target.value) setActiveCategory(null);
              }}
              className="w-full !pl-12 !pr-10 py-3 bg-ocean-800 border border-gold-500/20 rounded-lg text-cream-100 placeholder:text-cream-100/40 focus:border-gold-500 focus:outline-none focus:ring-1 focus:ring-gold-500/30 transition-colors"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-4 top-1/2 -translate-y-1/2 text-cream-100/40 hover:text-cream-100 transition-colors"
              >
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            )}
          </div>
        </div>
      </section>

      {/* Category Tabs */}
      {!searchQuery && (
        <section className="pb-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-nowrap overflow-x-auto scrollbar-hide lg:flex-wrap lg:justify-center lg:overflow-visible gap-2 pb-2 -mx-4 px-4 sm:mx-0 sm:px-0">
              <button
                onClick={() => setActiveCategory(null)}
                className={`flex-shrink-0 px-4 min-h-[44px] rounded-full text-sm font-medium transition-colors whitespace-nowrap ${
                  activeCategory === null
                    ? 'bg-gold-500 text-ocean-950'
                    : 'border border-gold-500/20 text-cream-100/70 hover:border-gold-500/50 hover:text-cream-100'
                }`}
              >
                Tutto il Menu
              </button>
              {menuCategories.map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => setActiveCategory(cat.id)}
                  className={`flex-shrink-0 px-4 min-h-[44px] rounded-full text-sm font-medium transition-colors whitespace-nowrap ${
                    activeCategory === cat.id
                      ? 'bg-gold-500 text-ocean-950'
                      : 'border border-gold-500/20 text-cream-100/70 hover:border-gold-500/50 hover:text-cream-100'
                  }`}
                >
                  {cat.nameIt}
                </button>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Menu Grid */}
      <section className="pb-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {filteredCategories.length === 0 ? (
            <div className="text-center py-16">
              <p className="text-cream-100/50 text-lg">
                Nessun piatto trovato per &ldquo;{searchQuery}&rdquo;
              </p>
            </div>
          ) : (
            <div className="space-y-16">
              {filteredCategories.map((category) => (
                <div key={category.id}>
                  {/* Category Heading */}
                  <h2
                    className="text-2xl text-gold-500 mb-2"
                    style={{ fontFamily: 'var(--font-playfair)' }}
                  >
                    {category.nameIt}
                  </h2>
                  <div className="section-divider mb-8" />

                  {/* Items Grid */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {category.items.map((item) => (
                      <MenuCard
                        key={item.id}
                        item={item}
                        isAdded={!!addedItems[item.id]}
                        onAddToCart={handleAddToCart}
                      />
                    ))}
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Cart floating indicator — opens the cart/checkout drawer directly */}
      {cart.totalItems > 0 && (
        <button
          onClick={() => cart.setIsCartOpen(true)}
          aria-label="Vai al carrello"
          className="fixed bottom-24 right-5 lg:bottom-6 lg:right-6 bg-gold-500 text-ocean-950 pl-5 pr-6 py-3.5 rounded-full shadow-lg hover:bg-gold-400 transition-colors flex items-center gap-2.5 z-50"
          style={{ fontFamily: 'var(--font-playfair)' }}
        >
          <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-5.98.572m5.98-.572h9.75m-9.75 0l-.607-2.28M16.5 14.25a3 3 0 015.98.572m-5.98-.572l.607-2.28m0 0l1.014-3.813A.75.75 0 0113.607 8H7.488a.75.75 0 00-.725.553L5.893 11.97" />
          </svg>
          <span className="font-semibold">Carrello · {cart.totalItems}</span>
        </button>
      )}
    </main>
  );
}

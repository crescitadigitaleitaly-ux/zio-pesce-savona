'use client';

import { useState, useMemo } from 'react';
import { menuCategories, type MenuCategory } from '@/data/menu';
import MenuItemImage from '@/components/MenuItemImage';
import { useCart } from '@/context/CartContext';
import Link from 'next/link';

const dietaryLabels: Record<string, { label: string; color: string }> = {
  vegetarian: { label: 'Vegetariano', color: 'bg-green-700/60 text-green-200' },
  vegan: { label: 'Vegano', color: 'bg-emerald-700/60 text-emerald-200' },
  'gluten-free': { label: 'Senza Glutine', color: 'bg-amber-700/60 text-amber-200' },
};

export default function MenuPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [activeCategory, setActiveCategory] = useState<string | null>(null);
  const [addedItems, setAddedItems] = useState<Record<string, boolean>>({});
  const cart = useCart();

  const handleAddToCart = (item: MenuCategory['items'][number]) => {
    cart.addItem(item);
    setAddedItems((prev) => ({ ...prev, [item.id]: true }));
    setTimeout(() => {
      setAddedItems((prev) => ({ ...prev, [item.id]: false }));
    }, 2000);
  };

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
            <div className="flex flex-wrap justify-center gap-2 pb-2">
              <button
                onClick={() => setActiveCategory(null)}
                className={`flex-shrink-0 px-4 py-2 rounded-full text-sm font-medium transition-colors whitespace-nowrap ${
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
                  className={`flex-shrink-0 px-4 py-2 rounded-full text-sm font-medium transition-colors whitespace-nowrap ${
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
                      <div
                        key={item.id}
                        className="menu-card rounded overflow-hidden group"
                      >
                        {/* Image */}
                        <MenuItemImage
                          src={item.image}
                          alt={item.alt}
                          className="w-full h-48 object-cover"
                        />

                        {/* Content */}
                        <div className="p-5">
                          <div className="flex items-start justify-between gap-3 mb-2">
                            <h3
                              className="text-lg text-cream-100"
                              style={{ fontFamily: 'var(--font-playfair)' }}
                            >
                              {item.name}
                            </h3>
                            <span
                              className="text-gold-500 font-semibold flex-shrink-0"
                              style={{ fontFamily: 'var(--font-playfair)' }}
                            >
                              {item.price}
                            </span>
                          </div>

                          <p className="text-sm text-cream-100/60 mb-3 line-clamp-2">
                            {item.description}
                          </p>

                          {/* Dietary Badges */}
                          {item.dietary && item.dietary.length > 0 && (
                            <div className="flex flex-wrap gap-1.5 mb-3">
                              {item.dietary.map((tag) => {
                                const badge = dietaryLabels[tag];
                                return badge ? (
                                  <span
                                    key={tag}
                                    className={`text-[0.65rem] px-2 py-0.5 rounded-full ${badge.color}`}
                                  >
                                    {badge.label}
                                  </span>
                                ) : null;
                              })}
                            </div>
                          )}

                          {/* Add to Cart Button */}
                          <button
                            onClick={() => handleAddToCart(item)}
                            disabled={addedItems[item.id]}
                            className={`w-full py-2 rounded text-sm font-medium transition-all duration-300 ${
                              addedItems[item.id]
                                ? 'bg-green-600/80 text-white cursor-default'
                                : 'bg-gold-500/10 border border-gold-500/30 text-gold-500 hover:bg-gold-500 hover:text-ocean-950'
                            }`}
                          >
                            {addedItems[item.id] ? (
                              <span className="flex items-center justify-center gap-1.5">
                                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                                </svg>
                                Aggiunto
                              </span>
                            ) : (
                              'Aggiungi'
                            )}
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Cart floating indicator */}
      {cart.totalItems > 0 && (
        <Link
          href="/order"
          className="fixed bottom-6 right-6 bg-gold-500 text-ocean-950 px-5 py-3 rounded-full shadow-lg hover:bg-gold-400 transition-colors flex items-center gap-2 z-50"
          style={{ fontFamily: 'var(--font-playfair)' }}
        >
          <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-5.98.572m5.98-.572h9.75m-9.75 0l-.607-2.28M16.5 14.25a3 3 0 015.98.572m-5.98-.572l.607-2.28m0 0l1.014-3.813A.75.75 0 0113.607 8H7.488a.75.75 0 00-.725.553L5.893 11.97" />
          </svg>
          <span className="font-semibold">{cart.totalItems}</span>
        </Link>
      )}
    </main>
  );
}

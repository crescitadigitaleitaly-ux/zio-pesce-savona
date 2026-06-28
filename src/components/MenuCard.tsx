import React, { memo } from 'react';
import MenuItemImage from '@/components/MenuItemImage';
import { MenuCategory } from '@/data/menu';

const dietaryLabels: Record<string, { label: string; color: string }> = {
  vegetarian: { label: 'Vegetariano', color: 'bg-green-700/60 text-green-200' },
  vegan: { label: 'Vegano', color: 'bg-emerald-700/60 text-emerald-200' },
  'gluten-free': { label: 'Senza Glutine', color: 'bg-amber-700/60 text-amber-200' },
};

export interface MenuCardProps {
  item: MenuCategory['items'][number];
  isAdded: boolean;
  onAddToCart: (item: MenuCategory['items'][number]) => void;
}

function MenuCardComponent({ item, isAdded, onAddToCart }: MenuCardProps) {
  return (
    <div className="menu-card rounded group flex flex-col h-full">
      {/* Image */}
      <div className="w-full h-48 relative flex-shrink-0">
        <MenuItemImage src={item.image} alt={item.alt} className="rounded-t" />
      </div>

      {/* Content */}
      <div className="p-5 flex flex-col flex-grow">
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
          <div className="flex flex-wrap gap-1.5 mb-3 mt-auto">
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
          onClick={() => onAddToCart(item)}
          disabled={isAdded}
          className={`w-full mt-auto py-2 rounded text-sm font-medium transition-colors duration-300 ${
            isAdded
              ? 'bg-green-600/80 text-white cursor-default'
              : 'bg-gold-500/10 border border-gold-500/30 text-gold-500 hover:bg-gold-500 hover:text-ocean-950'
          }`}
        >
          {isAdded ? (
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
  );
}

export const MenuCard = memo(MenuCardComponent, (prevProps, nextProps) => {
  return prevProps.item.id === nextProps.item.id && prevProps.isAdded === nextProps.isAdded && prevProps.onAddToCart === nextProps.onAddToCart;
});

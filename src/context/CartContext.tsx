'use client';
import { createContext, useContext, useState, useCallback, type ReactNode } from 'react';
import type { MenuItem } from '@/data/menu';

export interface CartItem {
  item: MenuItem;
  quantity: number;
  notes: string;
}

interface CartContextType {
  items: CartItem[];
  addItem: (item: MenuItem, quantity?: number, notes?: string) => void;
  removeItem: (itemId: string) => void;
  updateQuantity: (itemId: string, quantity: number) => void;
  updateNotes: (itemId: string, notes: string) => void;
  clearCart: () => void;
  totalItems: number;
  subtotal: number;
  isCartOpen: boolean;
  setIsCartOpen: (open: boolean) => void;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

function parsePrice(price: string): number {
  const match = price.match(/[\d.]+/);
  return match ? parseFloat(match[0]) : 0;
}

export function CartProvider({ children }: { children: ReactNode }) {
  const [items, setItems] = useState<CartItem[]>([]);
  const [isCartOpen, setIsCartOpen] = useState(false);

  const addItem = useCallback((item: MenuItem, quantity = 1, notes = '') => {
    setItems(prev => {
      const existing = prev.find(ci => ci.item.id === item.id);
      if (existing) {
        return prev.map(ci =>
          ci.item.id === item.id
            ? { ...ci, quantity: ci.quantity + quantity }
            : ci
        );
      }
      return [...prev, { item, quantity, notes }];
    });
  }, []);

  const removeItem = useCallback((itemId: string) => {
    setItems(prev => prev.filter(ci => ci.item.id !== itemId));
  }, []);

  const updateQuantity = useCallback((itemId: string, quantity: number) => {
    if (quantity <= 0) {
      setItems(prev => prev.filter(ci => ci.item.id !== itemId));
      return;
    }
    setItems(prev =>
      prev.map(ci => (ci.item.id === itemId ? { ...ci, quantity } : ci))
    );
  }, []);

  const updateNotes = useCallback((itemId: string, notes: string) => {
    setItems(prev =>
      prev.map(ci => (ci.item.id === itemId ? { ...ci, notes } : ci))
    );
  }, []);

  const clearCart = useCallback(() => setItems([]), []);

  const totalItems = items.reduce((sum, ci) => sum + ci.quantity, 0);
  const subtotal = items.reduce(
    (sum, ci) => sum + parsePrice(ci.item.price) * ci.quantity,
    0
  );

  return (
    <CartContext.Provider
      value={{
        items, addItem, removeItem, updateQuantity, updateNotes,
        clearCart, totalItems, subtotal, isCartOpen, setIsCartOpen,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const ctx = useContext(CartContext);
  if (!ctx) throw new Error('useCart must be used within CartProvider');
  return ctx;
}

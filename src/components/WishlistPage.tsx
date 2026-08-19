import React from 'react';
import { motion } from 'motion/react';
import { Heart, ShoppingBag, Trash2, ArrowRight } from 'lucide-react';
import { useStore } from '../context/StoreContext';
import { ProductCard } from './ProductCard';

export const WishlistPage: React.FC = () => {
  const { wishlist, products, setActiveView } = useStore();

  const wishlistedProducts = products.filter(p => wishlist.includes(p.id));

  return (
    <div className="min-h-screen bg-[#FAFAFA] py-10 lg:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-10 border-b border-zinc-200 pb-8 flex flex-col sm:flex-row sm:items-end justify-between gap-4">
          <div>
            <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-[0.25em] text-zinc-500 mb-2">
              <Heart className="w-3.5 h-3.5 fill-rose-500 text-rose-500" />
              <span>SAVED ITEMS</span>
            </div>
            <h1 className="text-3xl sm:text-5xl font-display font-extrabold uppercase tracking-tight text-zinc-950">
              YOUR WISHLIST ({wishlistedProducts.length})
            </h1>
          </div>

          <button
            onClick={() => setActiveView('shop')}
            className="text-xs font-bold uppercase tracking-wider text-zinc-700 hover:text-black flex items-center gap-1.5"
          >
            <span>Continue Shopping</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

        {wishlistedProducts.length === 0 ? (
          <div className="bg-white rounded-3xl border border-zinc-200 p-12 lg:p-20 text-center space-y-5 max-w-xl mx-auto shadow-sm">
            <div className="w-16 h-16 rounded-full bg-rose-50 text-rose-500 flex items-center justify-center mx-auto">
              <Heart className="w-8 h-8" />
            </div>
            <div className="space-y-1">
              <h3 className="text-xl font-bold uppercase text-zinc-900 font-display">
                YOUR WISHLIST IS EMPTY
              </h3>
              <p className="text-xs sm:text-sm text-zinc-500">
                Save your favorite DŌNO pairs here to review them later or monitor size availability.
              </p>
            </div>
            <button
              onClick={() => setActiveView('shop')}
              className="px-8 py-3.5 bg-black text-white text-xs font-bold uppercase tracking-wider rounded-xl hover:bg-zinc-800 transition-colors shadow-lg"
            >
              DISCOVER NEW ARRIVALS
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            {wishlistedProducts.map(prod => (
              <ProductCard key={prod.id} product={prod} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

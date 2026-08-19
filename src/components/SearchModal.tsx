import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Search, X, ArrowRight, TrendingUp, Sparkles, Star } from 'lucide-react';
import { useStore } from '../context/StoreContext';

export const SearchModal: React.FC = () => {
  const {
    isSearchModalOpen,
    setIsSearchModalOpen,
    products,
    navigateToProduct,
    navigateToCategory
  } = useStore();

  const [query, setQuery] = useState('');
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (isSearchModalOpen) {
      setTimeout(() => {
        inputRef.current?.focus();
      }, 100);
    } else {
      setQuery('');
    }
  }, [isSearchModalOpen]);

  const popularSearches = [
    'White Sneakers',
    "Men's Trainers",
    "Women's Sneakers",
    'New Arrivals',
    'Black Shoes',
    'Chelsea Boots',
    'Running',
    'Platform'
  ];

  const searchResults = query.trim()
    ? products.filter(p => {
        const q = query.toLowerCase();
        return (
          p.name.toLowerCase().includes(q) ||
          p.subtitle.toLowerCase().includes(q) ||
          p.category.toLowerCase().includes(q) ||
          p.gender.toLowerCase().includes(q) ||
          p.colors.some(c => c.name.toLowerCase().includes(q))
        );
      })
    : [];

  const handleSelectPopular = (term: string) => {
    setQuery(term);
  };

  return (
    <AnimatePresence>
      {isSearchModalOpen && (
        <div className="fixed inset-0 z-50 overflow-y-auto">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsSearchModalOpen(false)}
            className="fixed inset-0 bg-black/80 backdrop-blur-md transition-opacity"
          />

          {/* Search Content Container */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="relative min-h-screen max-w-4xl mx-auto px-4 sm:px-6 pt-16 sm:pt-24 pb-12 flex flex-col justify-start"
          >
            {/* Close Button */}
            <div className="flex justify-end mb-4">
              <button
                onClick={() => setIsSearchModalOpen(false)}
                className="p-2 text-zinc-400 hover:text-white rounded-full bg-white/10 hover:bg-white/20 transition-colors"
                aria-label="Close search"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            {/* Main Search Input */}
            <div className="relative border-b-2 border-zinc-700 focus-within:border-white transition-colors pb-4">
              <div className="flex items-center gap-4">
                <Search className="w-7 h-7 sm:w-8 sm:h-8 text-zinc-400" />
                <input
                  ref={inputRef}
                  type="text"
                  placeholder="Search sneakers, trainers, boots..."
                  value={query}
                  onChange={e => setQuery(e.target.value)}
                  className="w-full bg-transparent text-xl sm:text-3xl lg:text-4xl font-display font-bold text-white placeholder:text-zinc-600 focus:outline-none tracking-tight"
                  id="search-main-input"
                />
                {query && (
                  <button
                    onClick={() => setQuery('')}
                    className="p-1 text-zinc-400 hover:text-white"
                  >
                    <X className="w-5 h-5" />
                  </button>
                )}
              </div>
            </div>

            {/* Popular Searches Pills */}
            {!query.trim() && (
              <div className="mt-8 space-y-4">
                <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-[0.2em] text-zinc-400">
                  <TrendingUp className="w-3.5 h-3.5" />
                  <span>POPULAR SEARCHES</span>
                </div>

                <div className="flex flex-wrap gap-2.5">
                  {popularSearches.map(term => (
                    <button
                      key={term}
                      onClick={() => handleSelectPopular(term)}
                      className="px-4 py-2 bg-zinc-900 hover:bg-white hover:text-black text-zinc-300 text-xs font-bold uppercase tracking-wider rounded-full border border-zinc-800 transition-all duration-200"
                    >
                      {term}
                    </button>
                  ))}
                </div>

                {/* Quick department shortcuts */}
                <div className="mt-12 pt-8 border-t border-zinc-800/80">
                  <span className="text-xs font-bold uppercase tracking-[0.2em] text-zinc-500 block mb-4">
                    QUICK DEPARTMENTS
                  </span>
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                    {[
                      { name: 'Men', view: 'men' },
                      { name: 'Women', view: 'women' },
                      { name: 'Sneakers', view: 'sneakers' },
                      { name: 'Sale Archive', view: 'sale' }
                    ].map(dep => (
                      <button
                        key={dep.name}
                        onClick={() => {
                          setIsSearchModalOpen(false);
                          navigateToCategory(dep.view);
                        }}
                        className="p-4 bg-zinc-900/80 hover:bg-zinc-800 border border-zinc-800 rounded-xl text-left text-white text-xs font-bold uppercase tracking-wider flex items-center justify-between transition-colors"
                      >
                        <span>{dep.name}</span>
                        <ArrowRight className="w-3.5 h-3.5 text-zinc-400" />
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {/* Live Search Results */}
            {query.trim() && (
              <div className="mt-8 space-y-4">
                <div className="flex items-center justify-between text-xs text-zinc-400 border-b border-zinc-800 pb-2">
                  <span>FOUND {searchResults.length} RESULTS FOR "{query}"</span>
                  <span>UK DELIVERY ELIGIBLE</span>
                </div>

                {searchResults.length === 0 ? (
                  <div className="py-12 text-center text-zinc-400 space-y-2">
                    <p className="text-lg font-bold text-white uppercase">No pairs match "{query}"</p>
                    <p className="text-xs">Try searching for "Airform", "Runner", "Leather" or "Black"</p>
                  </div>
                ) : (
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 max-h-[60vh] overflow-y-auto pr-2">
                    {searchResults.map(prod => (
                      <div
                        key={prod.id}
                        onClick={() => {
                          setIsSearchModalOpen(false);
                          navigateToProduct(prod.id);
                        }}
                        className="group flex gap-3.5 p-3 bg-zinc-900/90 hover:bg-zinc-800 border border-zinc-800 rounded-2xl cursor-pointer transition-all"
                      >
                        <img
                          src={prod.colors[0].image}
                          alt={prod.name}
                          className="w-18 h-18 sm:w-20 sm:h-20 rounded-xl object-cover bg-zinc-800 border border-zinc-700 shrink-0 group-hover:scale-105 transition-transform"
                        />
                        <div className="flex-1 min-w-0 flex flex-col justify-between">
                          <div>
                            <span className="text-[10px] uppercase font-bold text-zinc-400">
                              DŌNO • {prod.category}
                            </span>
                            <h4 className="text-sm font-bold text-white uppercase truncate group-hover:text-zinc-200">
                              {prod.name}
                            </h4>
                            <p className="text-xs text-zinc-400 line-clamp-1">
                              {prod.subtitle}
                            </p>
                          </div>
                          <div className="flex items-center justify-between mt-1">
                            <span className="text-xs font-bold text-white font-mono-num">
                              £{prod.price.toFixed(2)}
                            </span>
                            <span className="text-[10px] text-zinc-400">
                              {prod.colors.length} colours
                            </span>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            )}
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

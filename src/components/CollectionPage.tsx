import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  SlidersHorizontal,
  ChevronDown,
  X,
  Sparkles,
  ArrowUpDown,
  Filter,
  Check
} from 'lucide-react';
import { useStore } from '../context/StoreContext';
import { ProductCard } from './ProductCard';
import { Category, Gender } from '../types';

interface CollectionPageProps {
  title?: string;
  subtitle?: string;
}

export const CollectionPage: React.FC<CollectionPageProps> = ({
  title,
  subtitle
}) => {
  const {
    filteredProducts,
    filterOptions,
    setFilterOptions,
    resetFilters,
    activeView
  } = useStore();

  const [isFilterDrawerOpen, setIsFilterDrawerOpen] = useState(false);

  // Available filter options
  const categories: Category[] = ['Sneakers', 'Running', 'Casual', 'Lifestyle', 'Boots', 'Court'];
  const sizes = [6, 7, 8, 9, 10, 11, 12];
  const colorOptions = [
    { name: 'White', hex: '#FFFFFF' },
    { name: 'Black', hex: '#111111' },
    { name: 'Grey', hex: '#71717A' },
    { name: 'Brown', hex: '#854D0E' },
    { name: 'Beige', hex: '#D6D3D1' }
  ];

  const handleCategoryToggle = (cat: Category) => {
    if (filterOptions.category === cat) {
      setFilterOptions(prev => ({ ...prev, category: 'All' }));
    } else {
      setFilterOptions(prev => ({ ...prev, category: cat }));
    }
  };

  const handleGenderToggle = (gen: Gender) => {
    if (filterOptions.gender === gen) {
      setFilterOptions(prev => ({ ...prev, gender: 'All' }));
    } else {
      setFilterOptions(prev => ({ ...prev, gender: gen }));
    }
  };

  const handleSizeToggle = (size: number) => {
    if (filterOptions.size === size) {
      setFilterOptions(prev => ({ ...prev, size: null }));
    } else {
      setFilterOptions(prev => ({ ...prev, size }));
    }
  };

  const handleColorToggle = (col: string) => {
    if (filterOptions.color === col) {
      setFilterOptions(prev => ({ ...prev, color: null }));
    } else {
      setFilterOptions(prev => ({ ...prev, color: col }));
    }
  };

  const activeFilterCount =
    (filterOptions.category && filterOptions.category !== 'All' ? 1 : 0) +
    (filterOptions.gender && filterOptions.gender !== 'All' ? 1 : 0) +
    (filterOptions.size ? 1 : 0) +
    (filterOptions.color ? 1 : 0) +
    ((filterOptions.minPrice && filterOptions.minPrice > 0) || (filterOptions.maxPrice && filterOptions.maxPrice < 300) ? 1 : 0);

  // Dynamic header copy based on current view
  const displayTitle =
    title ||
    (activeView === 'men'
      ? "MEN'S FOOTWEAR"
      : activeView === 'women'
      ? "WOMEN'S FOOTWEAR"
      : activeView === 'sneakers'
      ? "SNEAKERS & RUNNERS"
      : activeView === 'new-arrivals'
      ? 'NEW RELEASES & DROPS'
      : activeView === 'best-sellers'
      ? 'THE BEST SELLERS'
      : activeView === 'london-edit'
      ? 'THE LONDON CAPSULE'
      : activeView === 'sale'
      ? 'ARCHIVE & SALE'
      : 'ALL DŌNO FOOTWEAR');

  const displaySubtitle =
    subtitle ||
    (activeView === 'sale'
      ? 'Limited archive pairs and seasonal reductions with free UK shipping.'
      : 'Engineered for UK city life. Architectural aesthetics and all-day dual-density comfort.');

  return (
    <div className="min-h-screen bg-[#FAFAFA] py-8 sm:py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Page Header */}
        <div className="mb-10 lg:mb-12 border-b border-zinc-200 pb-8 space-y-3">
          <span className="text-xs font-extrabold uppercase tracking-[0.25em] text-zinc-500 block">
            DŌNO CATALOGUE 2026
          </span>
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-display font-extrabold uppercase tracking-tight text-zinc-950">
            {displayTitle}
          </h1>
          <p className="text-zinc-600 text-sm sm:text-base max-w-2xl font-normal leading-relaxed">
            {displaySubtitle}
          </p>
        </div>

        {/* Filter and Sort Toolbar */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 mb-8 border-b border-zinc-200">
          <div className="flex items-center gap-3">
            <button
              onClick={() => setIsFilterDrawerOpen(!isFilterDrawerOpen)}
              className="px-4 py-2.5 bg-white border border-zinc-300 hover:border-black rounded-xl text-xs font-bold uppercase tracking-wider text-zinc-900 flex items-center gap-2 transition-colors shadow-sm"
            >
              <SlidersHorizontal className="w-4 h-4" />
              <span>FILTERS {activeFilterCount > 0 && `(${activeFilterCount})`}</span>
            </button>

            {activeFilterCount > 0 && (
              <button
                onClick={resetFilters}
                className="text-xs font-bold text-rose-600 hover:underline px-2"
              >
                Clear all
              </button>
            )}

            <span className="text-xs text-zinc-500 font-medium">
              Showing <strong>{filteredProducts.length}</strong> pairs
            </span>
          </div>

          {/* Sort By Select */}
          <div className="flex items-center gap-2 self-end sm:self-auto">
            <span className="text-xs font-bold uppercase text-zinc-500 tracking-wider">
              SORT:
            </span>
            <select
              value={filterOptions.sortBy || 'recommended'}
              onChange={e => setFilterOptions(prev => ({ ...prev, sortBy: e.target.value as any }))}
              className="bg-white border border-zinc-300 rounded-xl px-3 py-2 text-xs font-bold text-zinc-900 focus:outline-none focus:border-black"
            >
              <option value="recommended">Featured / Curated</option>
              <option value="price-low">Price: Low to High</option>
              <option value="price-high">Price: High to Low</option>
              <option value="rating">Highest Rated (★ 5.0)</option>
              <option value="newest">Newest Releases</option>
            </select>
          </div>
        </div>

        {/* Active Filter Badges */}
        {activeFilterCount > 0 && (
          <div className="flex flex-wrap gap-2 mb-8">
            {filterOptions.category && filterOptions.category !== 'All' && (
              <span className="inline-flex items-center gap-1 px-3 py-1 bg-zinc-900 text-white rounded-full text-xs font-semibold uppercase">
                <span>Category: {filterOptions.category}</span>
                <X
                  className="w-3.5 h-3.5 cursor-pointer"
                  onClick={() => setFilterOptions(prev => ({ ...prev, category: 'All' }))}
                />
              </span>
            )}
            {filterOptions.gender && filterOptions.gender !== 'All' && (
              <span className="inline-flex items-center gap-1 px-3 py-1 bg-zinc-900 text-white rounded-full text-xs font-semibold uppercase">
                <span>Gender: {filterOptions.gender}</span>
                <X
                  className="w-3.5 h-3.5 cursor-pointer"
                  onClick={() => setFilterOptions(prev => ({ ...prev, gender: 'All' }))}
                />
              </span>
            )}
            {filterOptions.size && (
              <span className="inline-flex items-center gap-1 px-3 py-1 bg-zinc-900 text-white rounded-full text-xs font-semibold">
                <span>UK {filterOptions.size}</span>
                <X
                  className="w-3.5 h-3.5 cursor-pointer"
                  onClick={() => setFilterOptions(prev => ({ ...prev, size: null }))}
                />
              </span>
            )}
            {filterOptions.color && (
              <span className="inline-flex items-center gap-1 px-3 py-1 bg-zinc-900 text-white rounded-full text-xs font-semibold">
                <span>{filterOptions.color}</span>
                <X
                  className="w-3.5 h-3.5 cursor-pointer"
                  onClick={() => setFilterOptions(prev => ({ ...prev, color: null }))}
                />
              </span>
            )}
          </div>
        )}

        {/* Layout with Expandable Filter Panel + Products Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Filters Sidebar / Dropdown Panel */}
          {isFilterDrawerOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="lg:col-span-3 bg-white p-6 rounded-2xl border border-zinc-200 shadow-sm space-y-6"
            >
              {/* Category Filter */}
              <div className="space-y-2.5">
                <h4 className="text-xs font-extrabold uppercase tracking-wider text-zinc-900">
                  CATEGORY
                </h4>
                <div className="space-y-1.5">
                  {categories.map(cat => (
                    <button
                      key={cat}
                      onClick={() => handleCategoryToggle(cat)}
                      className={`w-full text-left px-3 py-2 rounded-lg text-xs font-semibold uppercase flex items-center justify-between transition-colors ${
                        filterOptions.category === cat
                          ? 'bg-black text-white'
                          : 'text-zinc-600 hover:bg-zinc-100'
                      }`}
                    >
                      <span>{cat}</span>
                      {filterOptions.category === cat && <Check className="w-3.5 h-3.5" />}
                    </button>
                  ))}
                </div>
              </div>

              {/* Gender Filter */}
              <div className="space-y-2.5 pt-4 border-t border-zinc-200">
                <h4 className="text-xs font-extrabold uppercase tracking-wider text-zinc-900">
                  GENDER / DEPARTMENT
                </h4>
                <div className="grid grid-cols-3 gap-1.5">
                  {(['men', 'women', 'unisex'] as Gender[]).map(gen => (
                    <button
                      key={gen}
                      onClick={() => handleGenderToggle(gen)}
                      className={`py-2 rounded-lg text-xs font-bold uppercase transition-all ${
                        filterOptions.gender === gen
                          ? 'bg-black text-white shadow-sm'
                          : 'bg-zinc-100 text-zinc-700 hover:bg-zinc-200'
                      }`}
                    >
                      {gen}
                    </button>
                  ))}
                </div>
              </div>

              {/* UK Sizes */}
              <div className="space-y-2.5 pt-4 border-t border-zinc-200">
                <h4 className="text-xs font-extrabold uppercase tracking-wider text-zinc-900">
                  UK SIZES
                </h4>
                <div className="grid grid-cols-4 gap-1.5">
                  {sizes.map(size => {
                    const isSelected = filterOptions.size === size;
                    return (
                      <button
                        key={size}
                        onClick={() => handleSizeToggle(size)}
                        className={`py-2 rounded-lg text-xs font-bold transition-all border ${
                          isSelected
                            ? 'bg-black text-white border-black shadow'
                            : 'bg-white text-zinc-800 border-zinc-300 hover:border-black'
                        }`}
                      >
                        UK {size}
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Colour Filter */}
              <div className="space-y-2.5 pt-4 border-t border-zinc-200">
                <h4 className="text-xs font-extrabold uppercase tracking-wider text-zinc-900">
                  COLOUR PALETTE
                </h4>
                <div className="flex flex-wrap gap-2">
                  {colorOptions.map(col => {
                    const isSelected = filterOptions.color === col.name;
                    return (
                      <button
                        key={col.name}
                        onClick={() => handleColorToggle(col.name)}
                        className={`flex items-center gap-1.5 px-3 py-1.5 rounded-full border text-xs font-medium transition-all ${
                          isSelected
                            ? 'border-black bg-zinc-900 text-white'
                            : 'border-zinc-300 bg-white text-zinc-800 hover:border-zinc-500'
                        }`}
                      >
                        <span
                          className="w-3.5 h-3.5 rounded-full border border-zinc-400"
                          style={{ backgroundColor: col.hex }}
                        />
                        <span>{col.name}</span>
                      </button>
                    );
                  })}
                </div>
              </div>
            </motion.div>
          )}

          {/* Product Grid: 9 or 12 Columns */}
          <div className={isFilterDrawerOpen ? 'lg:col-span-9' : 'lg:col-span-12'}>
            {filteredProducts.length === 0 ? (
              <div className="bg-white rounded-2xl border border-zinc-200 p-12 text-center space-y-4">
                <p className="text-lg font-bold text-zinc-900 uppercase">
                  No pairs match your current filter selection.
                </p>
                <p className="text-xs text-zinc-500 max-w-sm mx-auto">
                  Try clearing some size or category constraints to view our full British footwear range.
                </p>
                <button
                  onClick={resetFilters}
                  className="px-6 py-3 bg-black text-white text-xs font-bold uppercase tracking-wider rounded-xl shadow"
                >
                  Reset All Filters
                </button>
              </div>
            ) : (
              <div
                className={`grid grid-cols-1 sm:grid-cols-2 ${
                  isFilterDrawerOpen ? 'lg:grid-cols-3' : 'lg:grid-cols-4'
                } gap-6 lg:gap-8`}
              >
                {filteredProducts.map(prod => (
                  <ProductCard key={prod.id} product={prod} />
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Heart, Star, Plus, Eye, Check } from 'lucide-react';
import { Product } from '../types';
import { useStore } from '../context/StoreContext';

interface ProductCardProps {
  product: Product;
  badge?: string;
  priority?: boolean;
}

export const ProductCard: React.FC<ProductCardProps> = ({ product, badge }) => {
  const {
    navigateToProduct,
    toggleWishlist,
    isInWishlist,
    addToCart,
    openQuickView
  } = useStore();

  const [selectedColorIndex, setSelectedColorIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const [isQuickAddOpen, setIsQuickAddOpen] = useState(false);
  const [selectedQuickSize, setSelectedQuickSize] = useState<number | null>(null);

  const currentColor = product.colors[selectedColorIndex] || product.colors[0];
  const isWishlisted = isInWishlist(product.id);

  const discountPercent = product.originalPrice
    ? Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)
    : null;

  const handleQuickAdd = (size: number, e: React.MouseEvent) => {
    e.stopPropagation();
    setSelectedQuickSize(size);
    addToCart(product, currentColor.name, size, 1);
    setTimeout(() => {
      setIsQuickAddOpen(false);
      setSelectedQuickSize(null);
    }, 600);
  };

  return (
    <div
      className="group relative flex flex-col bg-white rounded-xl sm:rounded-2xl border border-zinc-200/80 overflow-hidden hover:border-zinc-400 hover:shadow-xl transition-all duration-300"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => {
        setIsHovered(false);
        setIsQuickAddOpen(false);
      }}
      id={`product-card-${product.id}`}
    >
      {/* Media Container */}
      <div
        className="relative w-full aspect-square bg-[#F4F4F5] overflow-hidden cursor-pointer"
        onClick={() => navigateToProduct(product.id)}
      >
        {/* Main & Secondary Swapping Image */}
        <img
          src={
            isHovered && currentColor.secondaryImage
              ? currentColor.secondaryImage
              : currentColor.image
          }
          alt={`${product.name} - ${currentColor.name}`}
          className="w-full h-full object-cover object-center group-hover:scale-105 transition-all duration-500 ease-out"
          loading="lazy"
        />

        {/* Badges */}
        <div className="absolute top-3 left-3 flex flex-col gap-1 z-10">
          {(badge || product.tag) && (
            <span
              className={`text-[10px] font-extrabold uppercase px-2.5 py-1 rounded tracking-wider shadow-sm ${
                (badge || product.tag) === 'SALE'
                  ? 'bg-rose-600 text-white'
                  : (badge || product.tag) === 'NEW'
                  ? 'bg-black text-white'
                  : (badge || product.tag) === 'LIMITED'
                  ? 'bg-amber-600 text-white'
                  : 'bg-zinc-900 text-white'
              }`}
            >
              {badge || product.tag}
            </span>
          )}
          {discountPercent && (
            <span className="text-[10px] font-extrabold px-2 py-0.5 bg-rose-50 text-rose-700 border border-rose-200 rounded tracking-wider">
              -{discountPercent}%
            </span>
          )}
        </div>

        {/* Top Right Wishlist & Quick View */}
        <div className="absolute top-3 right-3 flex flex-col gap-1.5 z-10">
          <button
            onClick={e => {
              e.stopPropagation();
              toggleWishlist(product.id);
            }}
            className={`w-8 h-8 rounded-full flex items-center justify-center transition-all duration-200 shadow-sm ${
              isWishlisted
                ? 'bg-rose-600 text-white'
                : 'bg-white/90 text-zinc-700 hover:bg-white hover:text-black'
            }`}
            aria-label="Toggle wishlist"
          >
            <Heart
              className={`w-4 h-4 ${isWishlisted ? 'fill-white stroke-white' : 'stroke-[2]'}`}
            />
          </button>

          <button
            onClick={e => {
              e.stopPropagation();
              openQuickView(product);
            }}
            className="w-8 h-8 rounded-full bg-white/90 text-zinc-700 hover:bg-white hover:text-black flex items-center justify-center transition-all duration-200 shadow-sm opacity-0 group-hover:opacity-100 hidden sm:flex"
            aria-label="Quick view product"
          >
            <Eye className="w-4 h-4 stroke-[2]" />
          </button>
        </div>

        {/* Quick Size Selector Drawer on Card Hover */}
        <AnimatePresence>
          {isQuickAddOpen && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              className="absolute inset-x-2 bottom-2 bg-white/95 backdrop-blur-md rounded-xl p-3 shadow-2xl border border-zinc-200 z-20"
              onClick={e => e.stopPropagation()}
            >
              <div className="flex items-center justify-between text-xs font-bold text-zinc-900 mb-2">
                <span>SELECT UK SIZE</span>
                <span className="text-[10px] text-zinc-500 font-normal">Instant Add</span>
              </div>
              <div className="grid grid-cols-4 gap-1 max-h-32 overflow-y-auto pr-1">
                {product.sizes.map(size => {
                  const stock = product.sizeStock ? product.sizeStock[size] : 5;
                  const isSelected = selectedQuickSize === size;
                  return (
                    <button
                      key={size}
                      onClick={e => handleQuickAdd(size, e)}
                      disabled={stock === 0}
                      className={`py-1.5 text-xs font-semibold rounded border transition-all ${
                        isSelected
                          ? 'bg-black text-white border-black'
                          : stock === 0
                          ? 'bg-zinc-100 text-zinc-400 border-zinc-200 line-through cursor-not-allowed'
                          : 'bg-white text-zinc-800 border-zinc-300 hover:bg-zinc-900 hover:text-white'
                      }`}
                    >
                      {isSelected ? <Check className="w-3 h-3 mx-auto" /> : `UK ${size}`}
                    </button>
                  );
                })}
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Hover Quick Add Bottom Bar */}
        {!isQuickAddOpen && (
          <div className="absolute inset-x-3 bottom-3 hidden sm:flex z-10 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
            <button
              onClick={e => {
                e.stopPropagation();
                setIsQuickAddOpen(true);
              }}
              className="w-full py-2.5 bg-black/90 hover:bg-black text-white text-xs font-bold uppercase tracking-wider rounded-lg shadow-lg flex items-center justify-center gap-1.5 backdrop-blur-sm transition-colors"
            >
              <Plus className="w-3.5 h-3.5" />
              <span>Quick Add</span>
            </button>
          </div>
        )}
      </div>

      {/* Info Container */}
      <div className="p-4 sm:p-5 flex flex-col flex-1 justify-between gap-3">
        <div>
          {/* Brand & Category */}
          <div className="flex items-center justify-between text-[11px] font-semibold text-zinc-400 uppercase tracking-widest mb-1">
            <span>DŌNO • {product.category}</span>
            <div className="flex items-center gap-1 text-zinc-900">
              <Star className="w-3 h-3 fill-amber-400 text-amber-400" />
              <span className="font-bold">{product.rating}</span>
              <span className="text-zinc-400 font-normal">({product.reviewCount})</span>
            </div>
          </div>

          {/* Title */}
          <h3
            onClick={() => navigateToProduct(product.id)}
            className="font-display text-base font-extrabold uppercase text-zinc-900 hover:text-zinc-600 transition-colors tracking-tight cursor-pointer line-clamp-1"
          >
            {product.name}
          </h3>

          <p className="text-xs text-zinc-500 line-clamp-1 mt-0.5 font-normal">
            {product.subtitle}
          </p>
        </div>

        {/* Bottom Swatches & Price */}
        <div className="flex items-center justify-between pt-2 border-t border-zinc-100">
          {/* Price */}
          <div className="flex items-baseline gap-2">
            <span className="text-base font-bold text-zinc-950 font-mono-num">
              £{product.price.toFixed(2)}
            </span>
            {product.originalPrice && (
              <span className="text-xs text-zinc-400 line-through font-mono-num">
                £{product.originalPrice.toFixed(2)}
              </span>
            )}
          </div>

          {/* Color Swatches */}
          <div className="flex items-center gap-1.5" onClick={e => e.stopPropagation()}>
            {product.colors.map((color, idx) => (
              <button
                key={color.name}
                onClick={() => setSelectedColorIndex(idx)}
                title={color.name}
                className={`w-3.5 h-3.5 rounded-full border transition-all ${
                  selectedColorIndex === idx
                    ? 'ring-2 ring-black ring-offset-1 scale-110'
                    : 'border-zinc-300 hover:scale-105'
                }`}
                style={{ backgroundColor: color.hex }}
                aria-label={`Select color ${color.name}`}
              />
            ))}
          </div>
        </div>

        {/* Mobile Quick Add Trigger */}
        <button
          onClick={e => {
            e.stopPropagation();
            setIsQuickAddOpen(!isQuickAddOpen);
          }}
          className="sm:hidden w-full py-2 bg-zinc-100 hover:bg-zinc-200 text-zinc-900 text-xs font-bold uppercase tracking-wider rounded-lg transition-colors flex items-center justify-center gap-1 mt-1"
        >
          <Plus className="w-3.5 h-3.5" />
          <span>Select Size</span>
        </button>
      </div>
    </div>
  );
};

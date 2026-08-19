import React, { useRef } from 'react';
import { motion } from 'motion/react';
import { ArrowLeft, ArrowRight, Sparkles } from 'lucide-react';
import { useStore } from '../context/StoreContext';
import { ProductCard } from './ProductCard';

export const BestSellers: React.FC = () => {
  const { products, navigateToCategory } = useStore();
  const carouselRef = useRef<HTMLDivElement>(null);

  const bestSellerProducts = products.filter(p => p.isBestSeller || p.tag === 'BEST SELLER');

  const scroll = (direction: 'left' | 'right') => {
    if (carouselRef.current) {
      const scrollAmount = direction === 'left' ? -380 : 380;
      carouselRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  return (
    <section className="py-20 lg:py-28 bg-white border-y border-zinc-200/60 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header with Navigation Arrows */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-10 lg:mb-14 gap-4">
          <div>
            <div className="flex items-center gap-2 text-xs font-extrabold tracking-[0.25em] uppercase text-zinc-500 mb-2">
              <Sparkles className="w-3.5 h-3.5 text-black" />
              <span>COMMUNITY FAVORITES</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-extrabold tracking-tight text-zinc-950 uppercase">
              THE PAIRS EVERYONE'S TALKING ABOUT
            </h2>
          </div>

          {/* Carousel Arrows */}
          <div className="flex items-center gap-3">
            <button
              onClick={() => scroll('left')}
              className="w-10 h-10 rounded-full border border-zinc-300 hover:border-black hover:bg-black hover:text-white flex items-center justify-center transition-all"
              aria-label="Scroll left"
            >
              <ArrowLeft className="w-4 h-4" />
            </button>
            <button
              onClick={() => scroll('right')}
              className="w-10 h-10 rounded-full border border-zinc-300 hover:border-black hover:bg-black hover:text-white flex items-center justify-center transition-all"
              aria-label="Scroll right"
            >
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Carousel Container */}
        <div
          ref={carouselRef}
          className="flex gap-6 overflow-x-auto pb-6 scrollbar-none snap-x snap-mandatory -mx-4 px-4 sm:mx-0 sm:px-0"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {bestSellerProducts.map(product => (
            <div
              key={product.id}
              className="min-w-[280px] sm:min-w-[320px] lg:min-w-[340px] max-w-[340px] snap-start shrink-0"
            >
              <ProductCard product={product} />
            </div>
          ))}
        </div>

        {/* View All CTA */}
        <div className="mt-8 text-center sm:text-right">
          <button
            onClick={() => navigateToCategory('best-sellers')}
            className="inline-flex items-center gap-2 text-xs font-extrabold uppercase tracking-widest text-zinc-900 hover:text-black border-b-2 border-black pb-1 hover:gap-3 transition-all"
          >
            <span>VIEW ALL BEST SELLERS ({bestSellerProducts.length})</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </section>
  );
};

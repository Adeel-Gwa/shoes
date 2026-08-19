import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight, Sparkles, Plus, Star } from 'lucide-react';
import { useStore } from '../context/StoreContext';

export const Hero: React.FC = () => {
  const { navigateToCategory, navigateToProduct } = useStore();

  return (
    <section className="relative w-full overflow-hidden bg-[#0D0D0D] text-white min-h-[85vh] lg:min-h-[90vh] flex items-center justify-center">
      {/* Cinematic Background Lifestyle & Product Fusion */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1552346154-21d32810aba3?q=80&w=2070&auto=format&fit=crop"
          alt="DŌNO London Lifestyle Footwear"
          className="w-full h-full object-cover object-center brightness-[0.62] contrast-[1.1] scale-105 transform hover:scale-100 transition-transform duration-1000 ease-out"
        />
        {/* Subtle Luxury Dark Vignette Gradient */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#0D0D0D] via-black/40 to-black/60"></div>
        <div className="absolute inset-0 bg-radial from-transparent via-black/30 to-black/80"></div>
      </div>

      {/* Hero Content Container */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-28 w-full flex flex-col justify-between h-full">
        {/* Top Tagline / Coordinates */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="flex items-center justify-between text-xs tracking-[0.3em] uppercase text-zinc-400 font-medium pb-8 border-b border-white/10"
        >
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-white animate-pulse"></span>
            <span>AUTUMN / WINTER 2026 EDITION</span>
          </div>
          <div className="hidden sm:block text-zinc-500 font-mono">
            51.5074° N, 0.1278° W — LONDON, UK
          </div>
        </motion.div>

        {/* Center Main Headline & CTA */}
        <div className="my-auto py-12 lg:py-16 max-w-4xl">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.2 }}
            className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-display font-extrabold tracking-[-0.03em] uppercase leading-[0.92] text-white"
          >
            STEP INTO <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-zinc-200 to-zinc-400">
              YOUR STANDARD.
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mt-6 sm:mt-8 text-base sm:text-lg lg:text-xl text-zinc-300 max-w-xl font-normal leading-relaxed"
          >
            Premium footwear designed for the way modern Britain moves. Surgical ergonomics,
            sculpted silhouettes, and uncompromising luxury materials.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="mt-8 sm:mt-10 flex flex-col sm:flex-row items-stretch sm:items-center gap-4 max-w-md"
          >
            <button
              onClick={() => navigateToCategory('men')}
              className="px-8 py-4 bg-white text-black hover:bg-zinc-200 font-semibold text-sm tracking-wider uppercase transition-all duration-300 flex items-center justify-center gap-2 group shadow-xl"
              id="hero-shop-men-btn"
            >
              <span>SHOP MEN</span>
              <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
            </button>

            <button
              onClick={() => navigateToCategory('women')}
              className="px-8 py-4 bg-black/60 hover:bg-black/80 text-white border border-white/30 hover:border-white font-semibold text-sm tracking-wider uppercase transition-all duration-300 flex items-center justify-center gap-2 group backdrop-blur-md"
              id="hero-shop-women-btn"
            >
              <span>SHOP WOMEN</span>
              <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
            </button>
          </motion.div>
        </div>

        {/* Floating Product Preview Card & Bottom Highlights */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 pt-6 border-t border-white/10">
          {/* Brand Pillars */}
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-6 text-xs text-zinc-400">
            <div>
              <p className="text-white font-semibold uppercase tracking-wider">Northampton Heritage</p>
              <p className="text-zinc-400 mt-0.5">Hand-finished craft</p>
            </div>
            <div>
              <p className="text-white font-semibold uppercase tracking-wider">DualAir™ Soles</p>
              <p className="text-zinc-400 mt-0.5">94% shock dispersion</p>
            </div>
            <div className="hidden sm:block">
              <p className="text-white font-semibold uppercase tracking-wider">Next Day UK</p>
              <p className="text-zinc-400 mt-0.5">Orders over £75</p>
            </div>
          </div>

          {/* Floating Product Card */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
            onClick={() => navigateToProduct('dono-airform-01')}
            className="cursor-pointer group relative bg-black/70 hover:bg-black/90 border border-white/20 p-3.5 sm:p-4 rounded-2xl flex items-center gap-4 max-w-sm backdrop-blur-xl transition-all duration-300 hover:border-white/50 shadow-2xl"
            id="hero-floating-product-card"
          >
            <div className="relative w-16 h-16 sm:w-20 sm:h-20 bg-zinc-900 rounded-xl overflow-hidden shrink-0 border border-white/10">
              <img
                src="https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?q=80&w=400&auto=format&fit=crop"
                alt="DŌNO AIRFORM 01"
                className="w-full h-full object-cover object-center group-hover:scale-110 transition-transform duration-500"
              />
              <span className="absolute top-1 left-1 bg-white text-black text-[9px] font-extrabold px-1.5 py-0.5 rounded">
                01
              </span>
            </div>

            <div className="flex-1 min-w-0">
              <div className="flex items-center gap-1 text-amber-400 text-[11px] font-semibold">
                <Star className="w-3 h-3 fill-amber-400" />
                <span>4.9 (247 reviews)</span>
              </div>
              <h2 className="text-sm font-bold text-white uppercase tracking-tight truncate group-hover:text-zinc-200">
                DŌNO AIRFORM 01
              </h2>
              <div className="flex items-center gap-2 mt-0.5">
                <span className="text-sm font-semibold text-white font-mono-num">£129.00</span>
                <span className="text-xs text-zinc-500 line-through font-mono-num">£155.00</span>
              </div>
            </div>

            <div className="w-8 h-8 rounded-full bg-white text-black flex items-center justify-center shrink-0 group-hover:bg-zinc-200 transition-colors">
              <Plus className="w-4 h-4" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

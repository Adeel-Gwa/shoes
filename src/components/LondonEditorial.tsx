import React, { useState } from 'react';
import { motion } from 'motion/react';
import { ArrowRight, MapPin, Sparkles } from 'lucide-react';
import { useStore } from '../context/StoreContext';

export const LondonEditorial: React.FC = () => {
  const { navigateToCategory, navigateToProduct } = useStore();
  const [activeSpot, setActiveSpot] = useState<number | null>(null);

  const hotspots = [
    {
      id: 1,
      name: 'AIRFORM 01 — Soho Walk',
      x: '38%',
      y: '68%',
      productId: 'dono-airform-01',
      price: '£129.00'
    },
    {
      id: 2,
      name: 'CHELSEA LUG — Shoreditch Studio',
      x: '65%',
      y: '78%',
      productId: 'dono-chelsea-lug',
      price: '£165.00'
    }
  ];

  return (
    <section className="relative w-full py-24 lg:py-36 bg-zinc-950 text-white overflow-hidden">
      {/* Background Cinematic London Architecture & Street Layer */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?q=80&w=2070&auto=format&fit=crop"
          alt="London City Architecture DŌNO"
          className="w-full h-full object-cover object-center brightness-[0.45] contrast-[1.15] scale-100 hover:scale-105 transition-transform duration-1000 ease-out"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/95 via-black/60 to-black/80"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl space-y-6">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/10 border border-white/20 text-xs font-semibold uppercase tracking-widest text-zinc-300 backdrop-blur-md">
            <MapPin className="w-3.5 h-3.5 text-rose-500" />
            <span>LONDON CAPSULE 2026</span>
          </div>

          <h2 className="text-4xl sm:text-6xl lg:text-7xl font-display font-extrabold tracking-[-0.03em] uppercase leading-[0.95] text-white">
            MADE FOR <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-zinc-200 to-zinc-500">
              THE CITY.
            </span>
          </h2>

          <p className="text-base sm:text-xl text-zinc-300 font-normal leading-relaxed max-w-lg">
            London moves fast. Your footwear should keep up. Built to withstand 20,000 steps across wet pavement, Underground escalators, and nocturnal London dining.
          </p>

          <div className="pt-4 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
            <button
              onClick={() => navigateToCategory('london-edit')}
              className="px-8 py-4 bg-white text-black hover:bg-zinc-200 font-bold text-xs tracking-widest uppercase transition-all flex items-center justify-center gap-3 rounded-lg shadow-2xl group"
              id="shop-london-edit-btn"
            >
              <span>SHOP THE LONDON EDIT</span>
              <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
            </button>

            <div className="flex items-center gap-3 text-xs text-zinc-400 font-medium px-2">
              <span className="w-2 h-2 rounded-full bg-emerald-400"></span>
              <span>In-stock at Regent St & Online</span>
            </div>
          </div>
        </div>

        {/* Hotspots Container on Desktop */}
        <div className="hidden lg:block absolute right-12 bottom-12 bg-black/70 border border-white/20 rounded-2xl p-5 max-w-xs backdrop-blur-xl">
          <span className="text-[10px] font-extrabold uppercase tracking-widest text-zinc-400 block mb-1">
            FEATURED SILHOUETTE
          </span>
          <h3 className="text-sm font-bold text-white uppercase">
            DŌNO AIRFORM 01 — TRIPLE CHALK
          </h3>
          <p className="text-xs text-zinc-300 mt-1">
            Engineered dual-density sole with British calfskin collar.
          </p>
          <div className="mt-3 flex items-center justify-between">
            <span className="text-sm font-bold text-white font-mono-num">£129.00</span>
            <button
              onClick={() => navigateToProduct('dono-airform-01')}
              className="text-xs font-bold uppercase tracking-wider text-white hover:text-zinc-300 underline underline-offset-4"
            >
              View Pair →
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

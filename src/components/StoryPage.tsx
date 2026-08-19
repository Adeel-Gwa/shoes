import React from 'react';
import { motion } from 'motion/react';
import { Award, Feather, Shield, MapPin, ArrowRight } from 'lucide-react';
import { useStore } from '../context/StoreContext';

export const StoryPage: React.FC = () => {
  const { setActiveView } = useStore();

  return (
    <div className="min-h-screen bg-[#FAFAFA] text-zinc-900 py-12 lg:py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        {/* Header Title */}
        <div className="space-y-4 text-center">
          <span className="text-xs font-extrabold uppercase tracking-[0.3em] text-zinc-500 block">
            THE DŌNO MANIFESTO
          </span>
          <h1 className="text-4xl sm:text-6xl font-display font-extrabold uppercase tracking-tight text-zinc-950">
            STEP INTO YOUR STANDARD.
          </h1>
          <p className="text-zinc-600 text-base sm:text-lg max-w-xl mx-auto font-normal leading-relaxed">
            Born from a desire to bridge high-fashion British tailoring with unrelenting athletic cushioning.
          </p>
        </div>

        {/* Hero Visual */}
        <div className="relative rounded-3xl overflow-hidden shadow-2xl aspect-[16/9] bg-zinc-900">
          <img
            src="https://images.unsplash.com/photo-1549298916-b41d501d3772?q=80&w=1400&auto=format&fit=crop"
            alt="DŌNO Craftsmanship"
            className="w-full h-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-black/40 flex items-end p-6 sm:p-10">
            <p className="text-white text-xs sm:text-sm uppercase tracking-widest font-mono">
              NORTHAMPTONSHIRE ATELIER × LONDON DESIGN STUDIO
            </p>
          </div>
        </div>

        {/* Narrative Paragraphs */}
        <div className="space-y-8 text-zinc-700 text-base sm:text-lg leading-relaxed font-normal">
          <p>
            In 2024, our founders noticed a persistent compromise across the modern footwear landscape: sneakers were either athletic and over-branded with neon plastic, or luxury designer shoes that were stiff, heavy, and uncomfortable after two hours on concrete.
          </p>

          <p>
            <strong>DŌNO was created to eliminate this compromise.</strong> By collaborating with historic British shoemakers in Northamptonshire and progressive technical foam specialists, we engineered silhouettes that pair effortlessly with tailored suits, denim, or technical outerwear—without ever sacrificing comfort.
          </p>

          {/* 3 Pillars In Detail */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-6">
            <div className="p-6 bg-white rounded-2xl border border-zinc-200 shadow-sm space-y-3">
              <div className="w-10 h-10 rounded-xl bg-zinc-100 flex items-center justify-center text-black">
                <Feather className="w-5 h-5" />
              </div>
              <h3 className="font-bold text-zinc-950 uppercase text-sm">AeroCloud™ Foam</h3>
              <p className="text-xs text-zinc-500 leading-relaxed">
                Dual-density supercritical foam absorbs 94% of shock while returning maximum kinetic rebound.
              </p>
            </div>

            <div className="p-6 bg-white rounded-2xl border border-zinc-200 shadow-sm space-y-3">
              <div className="w-10 h-10 rounded-xl bg-zinc-100 flex items-center justify-center text-black">
                <Shield className="w-5 h-5" />
              </div>
              <h3 className="font-bold text-zinc-950 uppercase text-sm">Circular Leather</h3>
              <p className="text-xs text-zinc-500 leading-relaxed">
                Tuscan full-grain leather certified by the Leather Working Group, lined with organic cotton terrycloth.
              </p>
            </div>

            <div className="p-6 bg-white rounded-2xl border border-zinc-200 shadow-sm space-y-3">
              <div className="w-10 h-10 rounded-xl bg-zinc-100 flex items-center justify-center text-black">
                <Award className="w-5 h-5" />
              </div>
              <h3 className="font-bold text-zinc-950 uppercase text-sm">British Form</h3>
              <p className="text-xs text-zinc-500 leading-relaxed">
                Sculpted architectural lines, subtle metallic debossing, and no loud billboards.
              </p>
            </div>
          </div>

          <p className="pt-4">
            Whether navigating Regent Street in the pouring rain, travelling through Heathrow, or spending 14 hours on your feet, your footwear should work for you. Welcome to DŌNO.
          </p>
        </div>

        {/* Explore Collection CTA */}
        <div className="pt-8 text-center border-t border-zinc-200">
          <button
            onClick={() => setActiveView('shop')}
            className="px-10 py-4 bg-black text-white font-bold text-xs tracking-widest uppercase rounded-xl hover:bg-zinc-800 transition-all inline-flex items-center gap-3 shadow-xl"
          >
            <span>EXPERIENCE THE COLLECTION</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
};

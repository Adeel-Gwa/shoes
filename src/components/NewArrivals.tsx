import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight, Flame } from 'lucide-react';
import { useStore } from '../context/StoreContext';
import { ProductCard } from './ProductCard';

export const NewArrivals: React.FC = () => {
  const { products, navigateToCategory } = useStore();

  const newArrivals = products.filter(p => p.isNewArrival || p.tag === 'NEW').slice(0, 6);

  return (
    <section className="py-20 lg:py-28 bg-[#FAFAFA]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Editorial Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 lg:mb-16 gap-6 pb-6 border-b border-zinc-200">
          <div>
            <div className="flex items-center gap-2 text-xs font-extrabold tracking-[0.25em] uppercase text-zinc-500 mb-2">
              <Flame className="w-3.5 h-3.5 text-orange-500" />
              <span>LIMITED QUANTITY DROPS</span>
            </div>
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-display font-extrabold tracking-[-0.02em] text-zinc-950 uppercase">
              JUST LANDED.
            </h2>
          </div>

          <div className="max-w-md">
            <p className="text-zinc-600 text-sm sm:text-base font-normal leading-relaxed">
              Fresh silhouettes. New energy. Same DŌNO standard. Sculpted in our London design lab and handcrafted in limited production batches.
            </p>
          </div>
        </div>

        {/* Asymmetric Editorial Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {newArrivals.map((product, idx) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.08 }}
            >
              <ProductCard product={product} badge="NEW" />
            </motion.div>
          ))}
        </div>

        {/* Section Bottom Banner */}
        <div className="mt-14 p-8 sm:p-10 rounded-2xl bg-zinc-900 text-white flex flex-col sm:flex-row items-center justify-between gap-6 shadow-xl">
          <div className="space-y-1 text-center sm:text-left">
            <span className="text-xs font-bold tracking-[0.2em] text-zinc-400 uppercase">
              SPRING / SUMMER 2026 CATALOGUE
            </span>
            <h3 className="text-2xl sm:text-3xl font-display font-extrabold uppercase tracking-tight">
              Looking for something specific?
            </h3>
            <p className="text-sm text-zinc-400">
              Browse all 20+ signature DŌNO styles engineered for UK city life.
            </p>
          </div>

          <button
            onClick={() => navigateToCategory('new-arrivals')}
            className="px-8 py-4 bg-white text-black hover:bg-zinc-200 font-bold text-xs tracking-widest uppercase transition-all flex items-center gap-2 shrink-0 group rounded-lg"
          >
            <span>EXPLORE ALL NEW RELEASES</span>
            <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </div>
    </section>
  );
};

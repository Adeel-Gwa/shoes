import React from 'react';
import { motion } from 'motion/react';
import { ArrowUpRight, ArrowRight } from 'lucide-react';
import { useStore } from '../context/StoreContext';

export const FeaturedCategories: React.FC = () => {
  const { navigateToCategory } = useStore();

  const categories = [
    {
      id: 'men',
      title: 'MEN',
      subtitle: 'Modern footwear built for everyday movement.',
      cta: 'SHOP MEN →',
      image: 'https://images.unsplash.com/photo-1549298916-b41d501d3772?q=80&w=1000&auto=format&fit=crop',
      badge: 'SS26 COLLECTION'
    },
    {
      id: 'women',
      title: 'WOMEN',
      subtitle: 'Designed to make every step stand out.',
      cta: 'SHOP WOMEN →',
      image: 'https://images.unsplash.com/photo-1587563871167-1ee9c731aefb?q=80&w=1000&auto=format&fit=crop',
      badge: 'CURATED SILHOUETTES'
    },
    {
      id: 'sneakers',
      title: 'SNEAKERS',
      subtitle: 'Street-ready. Everyday comfort.',
      cta: 'SHOP SNEAKERS →',
      image: 'https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?q=80&w=1000&auto=format&fit=crop',
      badge: 'BEST IN CLASS'
    },
    {
      id: 'new-arrivals',
      title: 'NEW ARRIVALS',
      subtitle: 'The latest from DŌNO.',
      cta: 'EXPLORE NEW →',
      image: 'https://images.unsplash.com/photo-1512374382149-233c42b66137?q=80&w=1000&auto=format&fit=crop',
      badge: 'LIMITED DROPS'
    }
  ];

  return (
    <section className="py-20 lg:py-28 bg-[#FAFAFA]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 lg:mb-16 gap-4">
          <div>
            <span className="text-xs font-bold tracking-[0.25em] uppercase text-zinc-500 block mb-2">
              CURATED DEPARTMENTS
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-extrabold tracking-tight text-zinc-950 uppercase">
              FIND YOUR NEXT PAIR
            </h2>
          </div>
          <p className="text-zinc-600 text-sm sm:text-base max-w-md font-normal leading-relaxed">
            Engineered silhouettes spanning technical city runners, heritage court shoes, and modern British boots.
          </p>
        </div>

        {/* 4 Large Editorial Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((cat, index) => (
            <motion.div
              key={cat.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              onClick={() => navigateToCategory(cat.id)}
              className="group relative h-[460px] sm:h-[500px] rounded-2xl overflow-hidden cursor-pointer bg-zinc-900 shadow-md hover:shadow-2xl transition-all duration-500 flex flex-col justify-between p-6"
              id={`category-card-${cat.id}`}
            >
              {/* Background Image with Hover Zoom */}
              <div className="absolute inset-0 z-0 overflow-hidden">
                <img
                  src={cat.image}
                  alt={cat.title}
                  className="w-full h-full object-cover object-center group-hover:scale-108 transition-transform duration-700 ease-out brightness-[0.75] group-hover:brightness-[0.65]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent"></div>
              </div>

              {/* Top Badge */}
              <div className="relative z-10 flex items-center justify-between">
                <span className="text-[10px] tracking-[0.2em] font-extrabold uppercase px-2.5 py-1 bg-white/20 text-white rounded-full backdrop-blur-md border border-white/20">
                  {cat.badge}
                </span>
                <div className="w-9 h-9 rounded-full bg-white/10 group-hover:bg-white text-white group-hover:text-black flex items-center justify-center transition-all duration-300 backdrop-blur-sm">
                  <ArrowUpRight className="w-4 h-4" />
                </div>
              </div>

              {/* Bottom Content */}
              <div className="relative z-10 space-y-2 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                <h3 className="text-2xl sm:text-3xl font-display font-extrabold text-white tracking-tight uppercase">
                  {cat.title}
                </h3>
                <p className="text-xs sm:text-sm text-zinc-300 font-normal leading-relaxed line-clamp-2">
                  {cat.subtitle}
                </p>
                <div className="pt-2">
                  <span className="inline-flex items-center gap-1.5 text-xs font-bold tracking-wider uppercase text-white group-hover:text-zinc-200 border-b border-white/60 pb-0.5 group-hover:border-white transition-all">
                    {cat.cta}
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

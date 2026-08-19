import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight, CheckCircle, Shield, Award, Feather } from 'lucide-react';
import { useStore } from '../context/StoreContext';

export const BrandStory: React.FC = () => {
  const { setActiveView } = useStore();

  const brandPillars = [
    {
      icon: Feather,
      title: 'AeroCloud™ Cushioning',
      description: 'Supercritical dual-density foam formulated to absorb 94% of shock while maintaining featherlight agility.'
    },
    {
      icon: Shield,
      title: 'Italian Full-Grain Nappa',
      description: 'Ethically sourced Tuscan leathers and recycled Japanese technical meshes engineered for lifetime durability.'
    },
    {
      icon: Award,
      title: 'Northampton Heritage DNA',
      description: 'Patterned with traditional British shoemaking lasts and finished with surgical precision in Porto & Northampton.'
    }
  ];

  return (
    <section className="py-20 lg:py-28 bg-[#F4F4F5] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Premium Photography Composition */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-6 relative"
          >
            <div className="relative rounded-3xl overflow-hidden shadow-2xl bg-zinc-900 aspect-[4/5] sm:aspect-[1/1] lg:aspect-[4/5]">
              <img
                src="https://images.unsplash.com/photo-1549298916-b41d501d3772?q=80&w=1200&auto=format&fit=crop"
                alt="DŌNO British Footwear Craftsmanship"
                className="w-full h-full object-cover object-center brightness-95"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>

              {/* Inset Badge */}
              <div className="absolute bottom-6 left-6 right-6 bg-white/95 backdrop-blur-md p-5 rounded-2xl border border-zinc-200 shadow-xl flex items-center justify-between">
                <div>
                  <span className="text-[10px] font-extrabold uppercase tracking-widest text-zinc-500 block">
                    ORIGIN ARCHIVE
                  </span>
                  <p className="text-sm font-bold text-zinc-900 uppercase">
                    Designed in London, UK
                  </p>
                  <p className="text-xs text-zinc-500">Since 2024</p>
                </div>
                <div className="w-12 h-12 rounded-xl bg-black text-white flex items-center justify-center font-display font-black text-lg">
                  DN
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Editorial Text */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-6 space-y-8"
          >
            <div>
              <span className="text-xs font-extrabold tracking-[0.25em] uppercase text-zinc-500 block mb-3">
                THE DŌNO PHILOSOPHY
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-extrabold tracking-tight text-zinc-950 uppercase leading-[1.05]">
                BUILT FOR EVERY STEP.
              </h2>
            </div>

            <div className="space-y-4 text-zinc-600 text-base sm:text-lg font-normal leading-relaxed">
              <p>
                <strong className="text-zinc-950 font-semibold">DŌNO</strong> was created for people who refuse to compromise between uncompromising style and relentless daily comfort.
              </p>
              <p>
                From the bustling streets of London to wherever your day takes you, every pair is designed with modern silhouettes, premium materials, and everyday movement in mind. We eliminated the unnecessary fluff to engineer the ultimate British footwear uniform.
              </p>
            </div>

            {/* Pillars */}
            <div className="space-y-4 pt-2">
              {brandPillars.map((pillar, idx) => {
                const Icon = pillar.icon;
                return (
                  <div
                    key={idx}
                    className="flex items-start gap-4 p-4 rounded-xl bg-white border border-zinc-200/80 shadow-sm"
                  >
                    <div className="w-10 h-10 rounded-lg bg-zinc-100 text-black flex items-center justify-center shrink-0">
                      <Icon className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="text-sm font-bold text-zinc-900 uppercase tracking-tight">
                        {pillar.title}
                      </h3>
                      <p className="text-xs text-zinc-500 mt-1 leading-relaxed">
                        {pillar.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="pt-2">
              <button
                onClick={() => {
                  setActiveView('our-story');
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                className="inline-flex items-center gap-3 px-8 py-4 bg-black text-white hover:bg-zinc-800 font-semibold text-xs tracking-widest uppercase rounded-lg transition-all shadow-lg group"
                id="brand-story-cta-btn"
              >
                <span>OUR STORY & MANIFESTO</span>
                <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

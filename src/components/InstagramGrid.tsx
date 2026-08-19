import React from 'react';
import { motion } from 'motion/react';
import { Instagram, ArrowUpRight } from 'lucide-react';
import { useStore } from '../context/StoreContext';

export const InstagramGrid: React.FC = () => {
  const { navigateToProduct } = useStore();

  const socialPosts = [
    {
      id: 1,
      image: 'https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?q=80&w=600&auto=format&fit=crop',
      tag: '#DONOAirform',
      productId: 'dono-airform-01',
      title: 'Soho Saturday Morning'
    },
    {
      id: 2,
      image: 'https://images.unsplash.com/photo-1549298916-b41d501d3772?q=80&w=600&auto=format&fit=crop',
      tag: '#DONOStreet',
      productId: 'dono-street-02',
      title: 'Minimalist Uniform'
    },
    {
      id: 3,
      image: 'https://images.unsplash.com/photo-1584735935682-2f2b69dff9d2?q=80&w=600&auto=format&fit=crop',
      tag: '#DONOVelocity',
      productId: 'dono-velocity',
      title: 'City Velocity'
    },
    {
      id: 4,
      image: 'https://images.unsplash.com/photo-1587563871167-1ee9c731aefb?q=80&w=600&auto=format&fit=crop',
      tag: '#DONOCloudrun',
      productId: 'dono-cloudrun',
      title: 'Alabaster Tones'
    },
    {
      id: 5,
      image: 'https://images.unsplash.com/photo-1608256246200-53e635b5b65f?q=80&w=600&auto=format&fit=crop',
      tag: '#DONOChelsea',
      productId: 'dono-chelsea-lug',
      title: 'Wet Weather Stride'
    },
    {
      id: 6,
      image: 'https://images.unsplash.com/photo-1512374382149-233c42b66137?q=80&w=600&auto=format&fit=crop',
      tag: '#DONONexus',
      productId: 'dono-nexus-runner',
      title: 'Y2K Brutalism'
    }
  ];

  return (
    <section className="py-20 bg-white border-t border-zinc-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-10 gap-4">
          <div>
            <span className="text-xs font-extrabold tracking-[0.25em] uppercase text-zinc-500 block mb-2">
              AS SEEN ON THE STREETS
            </span>
            <h2 className="text-3xl sm:text-4xl font-display font-extrabold tracking-tight text-zinc-950 uppercase">
              @DONOSTORE
            </h2>
          </div>

          <a
            href="#instagram"
            onClick={e => e.preventDefault()}
            className="inline-flex items-center gap-2 text-xs font-extrabold uppercase tracking-widest text-zinc-800 hover:text-black border-b border-black pb-0.5"
          >
            <Instagram className="w-4 h-4" />
            <span>FOLLOW OUR LONDON JOURNAL</span>
          </a>
        </div>

        {/* 6 Grid items */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 sm:gap-4">
          {socialPosts.map(post => (
            <div
              key={post.id}
              onClick={() => navigateToProduct(post.productId)}
              className="group relative aspect-square rounded-xl overflow-hidden bg-zinc-100 cursor-pointer shadow-sm"
            >
              <img
                src={post.image}
                alt={post.title}
                className="w-full h-full object-cover object-center group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-between p-3.5 text-white">
                <span className="text-[10px] font-mono tracking-wider opacity-80">
                  {post.tag}
                </span>
                <div>
                  <p className="text-xs font-bold leading-tight uppercase">
                    {post.title}
                  </p>
                  <span className="text-[10px] font-semibold text-zinc-300 flex items-center gap-1 mt-1">
                    <span>SHOP THE LOOK</span>
                    <ArrowUpRight className="w-3 h-3" />
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Star, CheckCircle, Quote, ThumbsUp } from 'lucide-react';

export const ReviewsSection: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState<'All' | '5 Star' | 'Fit'>('All');

  const reviews = [
    {
      id: 1,
      quote: 'The comfort is honestly unreal.',
      comment:
        'Walked 18,000 steps across Soho and Mayfair on my first day wearing the AirForm 01. Zero break-in period, beautifully minimal silhouette and looks razor sharp with pleated trousers.',
      author: 'James H.',
      location: 'London',
      model: 'DŌNO AIRFORM 01 (UK 9)',
      verified: true,
      fit: 'True to Size',
      rating: 5,
      date: '2 weeks ago',
      helpfulCount: 42
    },
    {
      id: 2,
      quote: 'Looks premium and feels even better.',
      comment:
        'The quality of the leather accents and weight balance is superior to luxury designer sneakers costing 3x as much. The customer service from London was also instantaneous.',
      author: 'Olivia M.',
      location: 'Manchester',
      model: 'DŌNO CLOUDRUN (UK 6)',
      verified: true,
      fit: 'True to Size',
      rating: 5,
      date: '1 month ago',
      helpfulCount: 38
    },
    {
      id: 3,
      quote: 'My new everyday trainers.',
      comment:
        'Extremely lightweight, clean branding, and the soles hold up remarkably well in British wet weather. Already ordered a second pair in Chalk White.',
      author: 'Daniel K.',
      location: 'Birmingham',
      model: 'DŌNO STREET 02 (UK 10.5)',
      verified: true,
      fit: 'True to Size',
      rating: 5,
      date: '3 weeks ago',
      helpfulCount: 29
    },
    {
      id: 4,
      quote: 'Flawless British tailoring & aesthetic.',
      comment:
        'Finally a UK brand that understands architectural footwear proportions. The packaging, canvas dust bag, and leather fragrance when opening the box set the bar.',
      author: 'Eleanor D.',
      location: 'Edinburgh',
      model: 'DŌNO MONOLITH (UK 5)',
      verified: true,
      fit: 'True to Size',
      rating: 5,
      date: '1 week ago',
      helpfulCount: 19
    }
  ];

  return (
    <section className="py-20 lg:py-28 bg-white border-t border-zinc-200/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 lg:mb-16 gap-6">
          <div>
            <span className="text-xs font-extrabold tracking-[0.25em] uppercase text-zinc-500 block mb-2">
              VERIFIED COMMUNITY
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-extrabold tracking-tight text-zinc-950 uppercase">
              WHAT OUR WEARERS SAY
            </h2>
          </div>

          {/* Rating Summary Pill */}
          <div className="flex items-center gap-4 bg-[#FAFAFA] px-5 py-3 rounded-2xl border border-zinc-200 shrink-0">
            <div className="flex text-amber-400">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-5 h-5 fill-amber-400" />
              ))}
            </div>
            <div>
              <p className="text-base font-bold text-zinc-900 leading-none">
                4.9 / 5.0
              </p>
              <p className="text-xs text-zinc-500 mt-0.5">Based on 1,480+ UK reviews</p>
            </div>
          </div>
        </div>

        {/* Review Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {reviews.map((rev, idx) => (
            <motion.div
              key={rev.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="bg-[#FAFAFA] rounded-2xl p-6 border border-zinc-200 flex flex-col justify-between hover:shadow-lg transition-shadow duration-300"
            >
              <div className="space-y-4">
                {/* Stars & Verified Badge */}
                <div className="flex items-center justify-between">
                  <div className="flex text-amber-400 gap-0.5">
                    {[...Array(rev.rating)].map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 fill-amber-400" />
                    ))}
                  </div>
                  {rev.verified && (
                    <div className="flex items-center gap-1 text-[11px] font-bold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-full border border-emerald-200">
                      <CheckCircle className="w-3 h-3" />
                      <span>Verified Buyer</span>
                    </div>
                  )}
                </div>

                {/* Headline Quote */}
                <h3 className="text-base font-bold text-zinc-900 tracking-tight leading-snug">
                  "{rev.quote}"
                </h3>

                {/* Body Review */}
                <p className="text-xs sm:text-sm text-zinc-600 font-normal leading-relaxed">
                  {rev.comment}
                </p>
              </div>

              {/* Author & Footwear Details */}
              <div className="pt-5 mt-4 border-t border-zinc-200/80 space-y-1">
                <p className="text-xs font-bold text-zinc-900 uppercase">
                  — {rev.author}, {rev.location}
                </p>
                <p className="text-[11px] text-zinc-500 truncate font-medium">
                  {rev.model}
                </p>
                <div className="flex items-center justify-between pt-2 text-[10px] text-zinc-400">
                  <span className="font-semibold text-zinc-600">Fit: {rev.fit}</span>
                  <span>{rev.date}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

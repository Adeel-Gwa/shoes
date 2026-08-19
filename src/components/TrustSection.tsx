import React from 'react';
import { Truck, RotateCcw, ShieldCheck, Headphones, Award } from 'lucide-react';

export const TrustSection: React.FC = () => {
  const features = [
    {
      icon: Truck,
      title: 'FAST UK DELIVERY',
      subtitle: 'Tracked delivery across the UK. Free on orders over £75 with 24h dispatch.'
    },
    {
      icon: RotateCcw,
      title: 'EASY 30-DAY RETURNS',
      subtitle: 'Hassle-free exchanges and returns from any UK Post Office or drop point.'
    },
    {
      icon: ShieldCheck,
      title: 'SECURE CHECKOUT',
      subtitle: 'Protected by 256-bit bank-grade encryption with Apple Pay & PayPal.'
    },
    {
      icon: Headphones,
      title: 'UK CUSTOMER CONCIERGE',
      subtitle: "London-based shoe specialists ready to assist 7 days a week."
    }
  ];

  return (
    <section className="py-16 bg-[#FAFAFA] border-y border-zinc-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-6">
          {features.map((feat, idx) => {
            const Icon = feat.icon;
            return (
              <div
                key={idx}
                className="flex flex-col items-start p-6 bg-white rounded-2xl border border-zinc-200/80 shadow-sm hover:border-zinc-400 transition-colors"
              >
                <div className="w-12 h-12 rounded-xl bg-zinc-100 text-black flex items-center justify-center mb-4">
                  <Icon className="w-6 h-6 stroke-[1.8]" />
                </div>
                <h3 className="text-sm font-bold tracking-tight text-zinc-950 uppercase mb-1.5">
                  {feat.title}
                </h3>
                <p className="text-xs text-zinc-500 leading-relaxed">
                  {feat.subtitle}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

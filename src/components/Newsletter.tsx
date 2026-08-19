import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Check, Copy, ArrowRight, Sparkles } from 'lucide-react';
import { useStore } from '../context/StoreContext';

export const Newsletter: React.FC = () => {
  const { showToast } = useStore();
  const [email, setEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [copied, setCopied] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !email.includes('@')) {
      showToast('Please enter a valid email address', undefined, 'error');
      return;
    }
    setIsSubmitted(true);
    showToast('Welcome to the DŌNO Circle', 'Your 10% welcome coupon has been unlocked.');
  };

  const copyCode = () => {
    navigator.clipboard.writeText('DONOFIRST10');
    setCopied(true);
    showToast('Code Copied!', 'DONOFIRST10 copied to clipboard');
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section className="py-20 lg:py-28 bg-zinc-950 text-white relative overflow-hidden">
      {/* Subtle decorative radial glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-zinc-800/30 rounded-full blur-3xl pointer-events-none"></div>

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-8">
        <div className="space-y-3">
          <span className="text-xs font-bold tracking-[0.3em] uppercase text-zinc-400 block">
            PRIVATE ACCESS
          </span>
          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-display font-extrabold tracking-[-0.02em] uppercase text-white">
            WELCOME TO THE DŌNO WORLD.
          </h2>
          <p className="text-zinc-400 text-sm sm:text-base max-w-xl mx-auto font-normal leading-relaxed">
            Get first access to new releases, exclusive archival drops, and private British salon events.
          </p>
        </div>

        <AnimatePresence mode="wait">
          {!isSubmitted ? (
            <motion.form
              key="form"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onSubmit={handleSubmit}
              className="max-w-md mx-auto flex flex-col sm:flex-row gap-2.5"
            >
              <input
                type="email"
                required
                placeholder="Enter your email address"
                value={email}
                onChange={e => setEmail(e.target.value)}
                className="flex-1 px-5 py-4 bg-zinc-900 border border-zinc-800 rounded-xl text-white placeholder:text-zinc-500 text-sm focus:outline-none focus:border-white transition-colors"
                id="newsletter-email-input"
              />
              <button
                type="submit"
                className="px-8 py-4 bg-white text-black hover:bg-zinc-200 font-bold text-xs tracking-widest uppercase rounded-xl transition-all flex items-center justify-center gap-2 shrink-0 shadow-lg"
                id="newsletter-submit-btn"
              >
                <span>JOIN DŌNO</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </motion.form>
          ) : (
            <motion.div
              key="success"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="max-w-md mx-auto p-6 bg-zinc-900 border border-zinc-800 rounded-2xl space-y-4"
            >
              <div className="flex items-center justify-center gap-2 text-emerald-400 text-sm font-bold">
                <Check className="w-5 h-5" />
                <span>You're on the priority list</span>
              </div>
              <p className="text-xs text-zinc-400">
                Use your exclusive 10% welcome coupon at checkout:
              </p>
              <div className="flex items-center justify-between p-3 bg-black rounded-xl border border-zinc-800">
                <span className="font-mono text-sm font-bold tracking-widest text-white">
                  DONOFIRST10
                </span>
                <button
                  type="button"
                  onClick={copyCode}
                  className="px-3 py-1.5 bg-white text-black text-xs font-bold rounded-lg flex items-center gap-1.5 hover:bg-zinc-200 transition-colors"
                >
                  {copied ? <Check className="w-3.5 h-3.5" /> : <Copy className="w-3.5 h-3.5" />}
                  <span>{copied ? 'COPIED' : 'COPY'}</span>
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        <p className="text-[11px] text-zinc-500 tracking-wider uppercase font-medium">
          No spam. Just good footwear. Unsubscribe anytime.
        </p>
      </div>
    </section>
  );
};

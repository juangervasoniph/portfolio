import { motion } from 'motion/react';
import { ArrowRight, Play } from 'lucide-react';
import Counter from './Counter';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center pt-24 pb-12 overflow-hidden bg-brand-bg">
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="max-w-5xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-8"
          >
            <span className="pill-tag">
              High-Impact Video Editing & Strategy
            </span>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <h1 className="text-5xl sm:text-6xl md:text-8xl lg:text-[7rem] font-black leading-[0.9] mb-8 text-brand-primary tracking-tight">
              VIDEOS THAT <br />
              <span className="text-brand-accent">DRIVE RESULTS.</span>
            </h1>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <p className="text-lg md:text-xl text-brand-secondary max-w-2xl mx-auto mb-10 font-medium leading-relaxed">
              I don't just make things look pretty. I craft high-performance videos optimized for your specific goals—leveraging deep marketing insights to ensure every edit converts.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-20">
              <a href="#contact" className="btn-primary">
                Start Strategy Session <ArrowRight className="w-4 h-4" />
              </a>
              <a href="#portfolio" className="btn-secondary">
                View Case Studies <Play className="w-4 h-4" />
              </a>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="relative max-w-6xl mx-auto"
        >
          <div className="relative aspect-video md:aspect-[21/9] bg-zinc-200 rounded-[2rem] md:rounded-[3rem] overflow-hidden shadow-2xl shadow-black/5">
            <img
              src="https://picsum.photos/seed/juan-marketing/1920/1080"
              alt="Video Editing Workflow"
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-black/10 flex items-center justify-center">
              <button className="w-20 h-20 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center hover:scale-110 transition-transform shadow-xl">
                <Play className="w-8 h-8 text-brand-primary fill-brand-primary ml-1" />
              </button>
            </div>
          </div>
          
          {/* Floating Stats Card */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.8, duration: 0.5 }}
            className="absolute -bottom-6 -right-6 md:-bottom-10 md:-right-10 bg-white p-6 md:p-8 rounded-[2rem] shadow-xl border border-black/5 z-20"
          >
            <Counter value={250} suffix="M+" className="text-4xl md:text-5xl font-black leading-none mb-1 text-brand-accent tracking-tight block" />
            <p className="text-xs font-bold tracking-widest uppercase text-brand-secondary">Views Generated</p>
          </motion.div>
        </motion.div>

        {/* Trust Bar */}
        <div className="mt-24 pt-8 border-t border-black/5 flex flex-wrap justify-center items-center gap-8 md:gap-16 opacity-60 grayscale hover:grayscale-0 transition-all duration-500">
          {['Growth Marketers', 'BetterVet', 'Happi Ai', 'Meble Furniture', 'Gov Santa Fe'].map((brand) => (
            <span key={brand} className="text-sm font-bold text-brand-secondary">{brand}</span>
          ))}
        </div>
      </div>
    </section>
  );
}

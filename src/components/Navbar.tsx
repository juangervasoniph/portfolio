import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, Play } from 'lucide-react';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Portfolio', href: '#portfolio' },
    { name: 'Services', href: '#services' },
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'py-4' : 'py-6'
    }`}>
      <div className="container mx-auto px-4 md:px-6">
        <div className={`flex items-center justify-between transition-all duration-500 mx-auto max-w-7xl ${
          isScrolled ? 'glass px-6 py-3 rounded-full' : 'px-2'
        }`}>
          <a href="#" className="flex items-center gap-2 group">
            <div className="w-8 h-8 bg-brand-primary rounded-full flex items-center justify-center group-hover:bg-brand-accent transition-colors">
              <Play className="w-3 h-3 text-white fill-white ml-0.5" />
            </div>
            <span className="text-xl font-display font-black tracking-tight text-brand-primary">JG.</span>
          </a>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-sm font-medium text-brand-secondary hover:text-brand-primary transition-colors"
              >
                {link.name}
              </a>
            ))}
            <a
              href="#contact"
              className="px-6 py-2.5 bg-brand-primary text-white text-sm font-bold rounded-full hover:bg-brand-accent transition-all shadow-sm hover:shadow-md"
            >
              Let's Talk
            </a>
          </div>

          {/* Mobile Toggle */}
          <button
            className="md:hidden p-2 text-brand-primary"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="md:hidden absolute top-full left-4 right-4 mt-2 bg-white rounded-2xl shadow-xl border border-black/5 overflow-hidden"
          >
            <div className="flex flex-col p-4 gap-2">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="px-4 py-3 text-base font-medium text-brand-secondary hover:bg-zinc-50 hover:text-brand-primary rounded-xl transition-colors"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.name}
                </a>
              ))}
              <div className="pt-2 mt-2 border-t border-black/5">
                <a
                  href="#contact"
                  className="flex items-center justify-center w-full py-3 bg-brand-primary text-white text-base font-bold rounded-xl"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Let's Talk
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}

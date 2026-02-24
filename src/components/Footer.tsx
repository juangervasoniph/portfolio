import { Film, Instagram, Twitter, Linkedin, Mail } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="py-16 md:py-24 border-t border-black/5 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8 md:gap-16">
          <div className="flex items-center gap-4">
            <div className="w-10 h-10 md:w-12 md:h-12 rounded-xl md:rounded-2xl bg-brand-primary flex items-center justify-center shadow-md">
              <Film className="w-5 h-5 md:w-6 md:h-6 text-white" />
            </div>
            <span className="text-xl md:text-2xl font-black tracking-tight text-brand-primary">JG<span className="text-brand-accent">.</span></span>
          </div>

          <div className="flex gap-6 md:gap-12 text-xs font-bold text-brand-secondary uppercase tracking-widest">
            <a href="#" className="hover:text-brand-accent transition-colors">Privacy</a>
            <a href="#" className="hover:text-brand-accent transition-colors">Terms</a>
            <a href="#" className="hover:text-brand-accent transition-colors">Cookies</a>
          </div>

          <div className="flex gap-6 md:gap-8">
            {[Instagram, Twitter, Linkedin, Mail].map((Icon, i) => (
              <a key={i} href="#" className="text-brand-secondary hover:text-brand-accent transition-all hover:scale-110">
                <Icon className="w-5 h-5 md:w-6 md:h-6" />
              </a>
            ))}
          </div>
        </div>
        <div className="mt-12 md:mt-20 text-center text-xs font-bold text-brand-secondary/50 uppercase tracking-widest">
          © {new Date().getFullYear()} Juan Gervasoni. Engineered for Conversion.
        </div>
      </div>
    </footer>
  );
}

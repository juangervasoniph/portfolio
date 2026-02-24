import { motion } from 'motion/react';
import { Mail, Instagram, Twitter, Linkedin } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="py-24 md:py-32 bg-brand-bg relative overflow-hidden">
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
          <div className="lg:col-span-7">
            <span className="pill-tag mb-6">Let's Scale</span>
            <h2 className="text-4xl md:text-6xl font-black mb-6 leading-[1.1] tracking-tight text-brand-primary">
              VIDEO <br /><span className="text-brand-accent">STRATEGY.</span>
            </h2>
            <p className="text-brand-secondary text-base md:text-lg mb-12 font-medium max-w-md leading-relaxed">
              Ready to stop guessing and start converting? Select a time for our strategy session to discuss your video goals.
            </p>

            <div className="space-y-12">
              <a href="mailto:hello@juangervasoni.com" className="group block">
                <p className="text-xs text-brand-secondary uppercase tracking-widest font-bold mb-2">Direct Email</p>
                <p className="text-2xl md:text-4xl font-black text-brand-primary group-hover:text-brand-accent transition-colors tracking-tight">hello@juangervasoni.com</p>
              </a>

              <div className="flex gap-6">
                {[Instagram, Twitter, Linkedin].map((Icon, i) => (
                  <a key={i} href="#" className="w-12 h-12 bg-white border border-black/5 rounded-full flex items-center justify-center text-brand-primary hover:bg-brand-accent hover:text-white hover:border-brand-accent transition-all shadow-sm">
                    <Icon className="w-5 h-5" />
                  </a>
                ))}
              </div>
            </div>
          </div>

          <div className="lg:col-span-5">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="expensive-card !p-0 overflow-hidden"
            >
              <div className="p-8 border-b border-black/5 bg-white">
                <h3 className="text-xl font-black uppercase tracking-widest text-brand-primary">Reserve <span className="text-brand-accent">Call</span></h3>
              </div>
              <div 
                className="w-full h-[500px] bg-zinc-50 overflow-hidden"
                style={{ minHeight: '500px' }}
              >
                <iframe 
                  src="https://cal.com/juangervasoni/30min?embed=true" 
                  width="100%" 
                  height="100%" 
                  frameBorder="0" 
                  title="Schedule a call"
                />
              </div>
              <div className="p-6 bg-brand-primary text-center">
                <p className="text-xs font-bold text-white uppercase tracking-widest">
                  Powered by Cal.com
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}

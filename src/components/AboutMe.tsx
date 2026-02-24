import { motion } from 'motion/react';
import { Camera, Zap, Globe, User } from 'lucide-react';
import Counter from './Counter';
import { useContent } from '../hooks/useContent';

export default function AboutMe() {
  const { content } = useContent();
  const about = content.about;

  return (
    <section id="about" className="py-24 md:py-32 bg-white overflow-hidden">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 md:gap-24 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative order-2 lg:order-1"
          >
            <div className="relative z-10 rounded-[2rem] md:rounded-[3rem] overflow-hidden shadow-xl shadow-black/5 aspect-[4/5] md:aspect-square lg:aspect-[4/5] bg-zinc-100">
              <img
                src={about.photo}
                alt="Juan Gervasoni"
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
            
            <div className="absolute -bottom-6 -right-6 md:-bottom-10 md:-right-10 expensive-card !p-6 md:!p-8 max-w-[240px] md:max-w-[280px] z-20">
              <Counter value={about.years_experience} suffix="+" className="text-brand-accent font-black text-5xl md:text-6xl mb-2 tracking-tight block" />
              <p className="text-brand-primary font-bold text-xs uppercase tracking-widest leading-tight">Years Mastering the Visual Language</p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="order-1 lg:order-2"
          >
            <span className="pill-tag mb-6">About Me</span>
            <h2 className="text-4xl md:text-6xl font-black mb-8 text-brand-primary leading-[1.1] tracking-tight">
              {about.headline1} <br /><span className="text-brand-accent">{about.headline2}</span>
            </h2>
            
            <div className="space-y-6 text-brand-secondary text-base md:text-lg leading-relaxed">
              <p>{about.bio_paragraph1}</p>
              <p>{about.bio_paragraph2}</p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mt-12">
              {[
                { icon: Zap, title: "High-Impact Editing", text: "Mastering storytelling through post-production." },
                { icon: Camera, title: "Motion Graphics", text: "Advanced visual effects and motion design." },
                { icon: Globe, title: "Marketing Leverage", text: "Strategic vision informed by marketing expertise." },
                { icon: User, title: "Growth Focused", text: "Currently scaling brands as a Marketing Specialist." },
              ].map((item, i) => (
                <div key={i} className="flex gap-4">
                  <div className="w-10 h-10 bg-zinc-100 rounded-xl flex items-center justify-center shrink-0 mt-1">
                    <item.icon className="w-5 h-5 text-brand-primary" />
                  </div>
                  <div>
                    <h4 className="font-black text-brand-primary text-sm uppercase tracking-wide mb-1">{item.title}</h4>
                    <p className="text-brand-secondary text-sm leading-relaxed">{item.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

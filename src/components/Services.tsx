import { motion } from 'motion/react';
import { Video, TrendingUp, Scissors, MonitorPlay } from 'lucide-react';

const SERVICES = [
  {
    title: "Direct Response Ads",
    description: "High-converting video ads optimized for Meta, TikTok, and YouTube. Fast-paced, hook-driven, and designed to lower CPA.",
    icon: TrendingUp
  },
  {
    title: "Organic Social Content",
    description: "Engaging short-form content that builds community and brand awareness. Trend-adapted editing for maximum reach.",
    icon: MonitorPlay
  },
  {
    title: "Brand Storytelling",
    description: "Cinematic mini-documentaries and brand films that connect emotionally with your audience and build long-term trust.",
    icon: Video
  },
  {
    title: "Post-Production Mastery",
    description: "Advanced color grading, sound design, and motion graphics that elevate your raw footage into a premium visual experience.",
    icon: Scissors
  }
];

export default function Services() {
  return (
    <section id="services" className="py-24 md:py-32 relative overflow-hidden bg-white">
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 md:mb-24">
            <span className="pill-tag mb-6">Capabilities</span>
            <h2 className="text-4xl md:text-6xl font-black mb-6 text-brand-primary leading-[1.1] tracking-tight">
              HOW I DRIVE <br /><span className="text-brand-accent">GROWTH.</span>
            </h2>
            <p className="text-brand-secondary text-base md:text-lg font-medium leading-relaxed max-w-2xl mx-auto">
              A comprehensive suite of video editing and marketing services designed to scale your brand across every digital touchpoint.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
            {SERVICES.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="expensive-card group hover:-translate-y-1"
              >
                <div className="w-14 h-14 bg-zinc-100 rounded-2xl flex items-center justify-center mb-8 group-hover:bg-brand-accent group-hover:text-white transition-colors duration-300 text-brand-primary">
                  <service.icon className="w-6 h-6" />
                </div>
                <h3 className="text-2xl font-black text-brand-primary mb-4 tracking-tight">{service.title}</h3>
                <p className="text-brand-secondary text-base leading-relaxed font-medium">
                  {service.description}
                </p>
              </motion.div>
            ))}
          </div>

          <div className="mt-24 md:mt-32">
            <h3 className="text-center text-xs font-bold text-brand-secondary uppercase tracking-widest mb-12">Strategic Arsenal</h3>
            <div className="flex flex-wrap justify-center gap-4 md:gap-8">
              {['Premiere Pro', 'After Effects', 'DaVinci Resolve', 'Photoshop', 'AI Workflows'].map((tool) => (
                <div key={tool} className="px-6 py-3 bg-zinc-100 rounded-full">
                  <span className="text-sm font-bold text-brand-primary">{tool}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

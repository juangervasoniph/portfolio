import { motion } from 'motion/react';
import { Play, ExternalLink } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useContent } from '../hooks/useContent';

function getVideoEmbedUrl(url: string): string | null {
  if (!url) return null;
  const vimeoMatch = url.match(/vimeo\.com\/(\d+)/);
  if (vimeoMatch) return `https://player.vimeo.com/video/${vimeoMatch[1]}`;
  const ytMatch = url.match(/(?:youtu\.be\/|youtube\.com\/(?:watch\?v=|embed\/))([a-zA-Z0-9_-]+)/);
  if (ytMatch) return `https://www.youtube.com/embed/${ytMatch[1]}`;
  return null;
}

export default function Portfolio() {
  const { content } = useContent();
  const PROJECTS = content.projects;

  return (
    <section id="portfolio" className="py-24 md:py-32 bg-brand-bg">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-16 md:mb-24 gap-8">
          <div className="max-w-3xl">
            <span className="pill-tag mb-6">Strategic Video Editing</span>
            <h2 className="text-4xl md:text-6xl font-black mb-6 text-brand-primary leading-[1.1] tracking-tight">
              VIDEOS THAT <br /><span className="text-brand-accent">CONVERT.</span>
            </h2>
            <p className="text-brand-secondary text-base md:text-lg font-medium leading-relaxed max-w-2xl">
              I don't just edit for aesthetics; I edit for performance. Every frame is a strategic decision designed to drive conversion and audience retention.
            </p>
          </div>
          <div className="flex flex-wrap gap-3">
            {['Paid Media', 'Organic Growth', 'Brand Stories'].map((cat) => (
              <button key={cat} className="px-6 py-3 bg-white border border-black/5 text-xs font-bold uppercase tracking-widest rounded-full hover:bg-brand-primary hover:text-white transition-all shadow-sm">
                {cat}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16">
          {PROJECTS.map((project, index) => {
            const embedUrl = getVideoEmbedUrl(project.video_url);
            const slug = project.title.toLowerCase().replace(/[^a-z0-9]+/g, '-');
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="group flex flex-col"
              >
                <Link to={`/project/${slug}`} className="video-container mb-8 cursor-pointer relative shadow-md group-hover:shadow-xl group-hover:-translate-y-1 block">
                  {embedUrl ? (
                    <iframe src={embedUrl} className="w-full h-full" allow="fullscreen; picture-in-picture" allowFullScreen title={project.title} />
                  ) : (
                    <>
                      <img src={project.thumbnail} alt={project.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" referrerPolicy="no-referrer" />
                      <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                        <div className="w-20 h-20 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center transform scale-90 group-hover:scale-100 transition-transform duration-500 shadow-xl">
                          <Play className="w-8 h-8 fill-brand-primary text-brand-primary ml-1" />
                        </div>
                      </div>
                    </>
                  )}
                  <div className="absolute top-6 left-6 bg-white text-brand-primary px-4 py-2 text-xs uppercase tracking-widest font-bold rounded-full shadow-md z-10">
                    {project.category}
                  </div>
                </Link>

                <div className="flex flex-col flex-grow px-2">
                  <div className="flex justify-between items-start gap-4 mb-4">
                    <h3 className="text-2xl md:text-3xl font-black text-brand-primary tracking-tight leading-tight">{project.title}</h3>
                    {project.video_url && (
                      <a href={project.video_url} target="_blank" rel="noopener noreferrer" className="w-12 h-12 shrink-0 bg-zinc-100 rounded-full flex items-center justify-center hover:bg-brand-accent hover:text-white transition-all group/btn">
                        <ExternalLink className="w-5 h-5 group-hover/btn:scale-110 transition-transform" />
                      </a>
                    )}
                  </div>
                  <p className="text-brand-secondary text-base mb-6 font-medium leading-relaxed flex-grow">{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag, i) => (
                      <span key={i} className="text-[10px] font-bold uppercase tracking-widest text-brand-secondary bg-zinc-100 px-3 py-1.5 rounded-full">{tag}</span>
                    ))}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        <div className="mt-24 text-center">
          <Link to="/archive" className="btn-secondary inline-flex">
            View Full Archive
          </Link>
        </div>
      </div>
    </section>
  );
}

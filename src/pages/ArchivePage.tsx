import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { ArrowLeft, Play } from 'lucide-react';
import { useContent } from '../hooks/useContent';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export default function ArchivePage() {
  const { content } = useContent();
  const projects = content.projects;

  useEffect(() => { window.scrollTo(0, 0); }, []);

  return (
    <div className="min-h-screen bg-brand-bg selection:bg-brand-accent selection:text-white flex flex-col">
      <Navbar />
      <main className="flex-grow pt-32 pb-24">
        <div className="container mx-auto px-4 md:px-6">
          <Link to="/#portfolio" className="inline-flex items-center gap-2 text-brand-secondary hover:text-brand-accent transition-colors font-medium mb-12">
            <ArrowLeft className="w-5 h-5" /> Back to Home
          </Link>

          <div className="mb-16">
            <h1 className="text-4xl md:text-6xl font-black text-brand-primary tracking-tight leading-tight mb-6">
              FULL <span className="text-brand-accent">ARCHIVE.</span>
            </h1>
            <p className="text-xl text-brand-secondary leading-relaxed max-w-2xl">
              A comprehensive collection of my video editing and post-production work.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => {
              const slug = project.title.toLowerCase().replace(/[^a-z0-9]+/g, '-');
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.05 }}
                  className="group flex flex-col"
                >
                  <Link
                    to={`/project/${slug}`}
                    className="video-container mb-6 cursor-pointer relative shadow-md group-hover:shadow-xl group-hover:-translate-y-1 block aspect-video rounded-2xl overflow-hidden"
                  >
                    <img
                      src={project.thumbnail}
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                      <div className="w-16 h-16 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center transform scale-90 group-hover:scale-100 transition-transform duration-500 shadow-xl">
                        <Play className="w-6 h-6 fill-brand-primary text-brand-primary ml-1" />
                      </div>
                    </div>
                    <div className="absolute top-4 left-4 bg-white text-brand-primary px-3 py-1.5 text-[10px] uppercase tracking-widest font-bold rounded-full shadow-md">
                      {project.category}
                    </div>
                  </Link>

                  <div className="flex flex-col flex-grow px-1">
                    <h3 className="text-xl font-black text-brand-primary tracking-tight leading-tight mb-2">
                      <Link to={`/project/${slug}`} className="hover:text-brand-accent transition-colors">
                        {project.title}
                      </Link>
                    </h3>
                    <p className="text-brand-secondary text-sm mb-4 font-medium leading-relaxed line-clamp-2">
                      {project.description}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}

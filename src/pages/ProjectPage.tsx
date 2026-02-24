import { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { ArrowLeft } from 'lucide-react';
import { useContent } from '../hooks/useContent';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

function getYouTubeId(url: string): string | null {
  if (!url) return null;
  const match = url.match(/(?:youtu\.be\/|youtube\.com\/(?:watch\?v=|embed\/))([a-zA-Z0-9_-]+)/);
  return match ? match[1] : null;
}

export default function ProjectPage() {
  const { id } = useParams();
  const { content } = useContent();
  const project = content.projects.find((p, index) =>
    (p.title.toLowerCase().replace(/[^a-z0-9]+/g, '-')) === id || String(index) === id
  );

  useEffect(() => { window.scrollTo(0, 0); }, []);

  if (!project) {
    return (
      <div className="min-h-screen bg-brand-bg flex flex-col items-center justify-center">
        <h1 className="text-4xl font-black text-brand-primary mb-4">Project Not Found</h1>
        <Link to="/" className="btn-primary inline-flex items-center gap-2">
          <ArrowLeft className="w-5 h-5" /> Back to Home
        </Link>
      </div>
    );
  }

  const youtubeId = getYouTubeId(project.video_url);

  return (
    <div className="min-h-screen bg-brand-bg selection:bg-brand-accent selection:text-white flex flex-col">
      <Navbar />
      <main className="flex-grow pt-32 pb-24">
        <div className="container mx-auto px-4 md:px-6">
          <Link to="/#portfolio" className="inline-flex items-center gap-2 text-brand-secondary hover:text-brand-accent transition-colors font-medium mb-12">
            <ArrowLeft className="w-5 h-5" /> Back to Portfolio
          </Link>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto"
          >
            <div className="mb-8">
              <span className="pill-tag mb-4">{project.category}</span>
              <h1 className="text-4xl md:text-6xl font-black text-brand-primary tracking-tight leading-tight mb-6">
                {project.title}
              </h1>
              <p className="text-xl text-brand-secondary leading-relaxed">{project.description}</p>
            </div>

            <div className="aspect-video w-full rounded-2xl overflow-hidden shadow-2xl bg-black mb-12">
              {youtubeId ? (
                <iframe
                  width="100%"
                  height="100%"
                  src={`https://www.youtube.com/embed/${youtubeId}`}
                  title={project.title}
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="w-full h-full"
                />
              ) : (
                <img src={project.thumbnail} alt={project.title} className="w-full h-full object-cover" />
              )}
            </div>

            <div className="flex flex-wrap gap-3">
              {project.tags.map((tag, i) => (
                <span key={i} className="text-sm font-bold uppercase tracking-widest text-brand-secondary bg-zinc-100 px-4 py-2 rounded-full">
                  {tag}
                </span>
              ))}
            </div>
          </motion.div>
        </div>
      </main>
      <Footer />
    </div>
  );
}

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Expand, X } from 'lucide-react';
import BeforeAfterSlider from './BeforeAfterSlider';

export default function Portfolio() {
  const [filter, setFilter] = useState('All');
  const [selectedImage, setSelectedImage] = useState(null);

  const categories = ['All', 'Residential', 'Commercial', 'Interior', 'Renovation'];

  const projects = [
    {
      id: 1,
      title: 'Modern Scandinavian Villa',
      category: 'Residential',
      image: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?q=80&w=2075&auto=format&fit=crop',
    },
    {
      id: 2,
      title: 'Minimalist Office Space',
      category: 'Commercial',
      image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2069&auto=format&fit=crop',
    },
    {
      id: 3,
      title: 'Luxury Kitchen Remodel',
      category: 'Interior',
      image: 'https://images.unsplash.com/photo-1556910103-1c02745aae4d?q=80&w=2070&auto=format&fit=crop',
    },
    {
      id: 4,
      title: 'Boutique Cafe Design',
      category: 'Commercial',
      image: 'https://images.unsplash.com/photo-1554118811-1e0d58224f24?q=80&w=2047&auto=format&fit=crop',
    },
    {
      id: 5,
      title: 'Urban Townhouse',
      category: 'Residential',
      image: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=2070&auto=format&fit=crop',
    },
    {
      id: 6,
      title: 'Classic Home Renovation',
      category: 'Renovation',
      image: 'https://images.unsplash.com/photo-1588854337236-6889d631faa8?q=80&w=2070&auto=format&fit=crop',
    },
  ];

  const filteredProjects = filter === 'All' ? projects : projects.filter(p => p.category === filter);

  return (
    <section id="portfolio" className="py-24 bg-white">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-12">
          <div className="max-w-2xl">
            <span className="text-blue-600 font-semibold tracking-wider uppercase text-sm mb-4 block">
              Featured Works
            </span>
            <h2 className="text-4xl font-bold text-slate-900 mb-4">
              Our Latest Projects
            </h2>
            <p className="text-slate-600 text-lg">
              Explore our portfolio of meticulously crafted spaces that blend functionality with modern aesthetics.
            </p>
          </div>
          
          <div className="flex flex-wrap gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`px-5 py-2 rounded-full text-sm font-medium transition-all ${
                  filter === cat 
                  ? 'bg-slate-900 text-white shadow-md' 
                  : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        <motion.div layout className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence>
            {filteredProjects.map((project) => (
              <motion.div
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                key={project.id}
                className="group relative rounded-2xl overflow-hidden cursor-pointer"
                onClick={() => setSelectedImage(project.image)}
              >
                <div className="aspect-[4/3] overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title} 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                </div>
                
                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-slate-900/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                  <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                    <span className="text-blue-400 text-sm font-medium mb-1 block">{project.category}</span>
                    <h3 className="text-white text-xl font-bold mb-2">{project.title}</h3>
                    <div className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center text-white hover:bg-blue-600 transition-colors">
                      <Expand size={18} />
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      {/* Image Modal */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-slate-900/95 backdrop-blur-sm p-4"
            onClick={() => setSelectedImage(null)}
          >
            <button 
              className="absolute top-6 right-6 text-white/70 hover:text-white bg-white/10 p-2 rounded-full backdrop-blur-md transition-colors"
              onClick={() => setSelectedImage(null)}
            >
              <X size={24} />
            </button>
            <motion.img
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.9 }}
              src={selectedImage}
              alt="Fullscreen preview"
              className="max-w-full max-h-[90vh] object-contain rounded-lg shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            />
          </motion.div>
        )}
      </AnimatePresence>

      <div className="container mx-auto px-6 lg:px-12 mt-32">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-blue-600 font-semibold tracking-wider uppercase text-sm mb-4 block">
            Transformation
          </span>
          <h2 className="text-4xl font-bold text-slate-900 mb-6">
            See the Difference
          </h2>
          <p className="text-slate-600 text-lg">
            Slide to see the before and after transformation of our recent renovation project.
          </p>
        </div>
        <BeforeAfterSlider 
          beforeImage="https://images.unsplash.com/photo-1505691938895-1758d7feb511?q=80&w=2070&auto=format&fit=crop"
          afterImage="https://images.unsplash.com/photo-1600607686527-6fb886090705?q=80&w=2069&auto=format&fit=crop"
        />
      </div>
    </section>
  );
}

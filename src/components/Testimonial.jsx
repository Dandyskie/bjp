import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Star, ChevronLeft, ChevronRight, Quote } from 'lucide-react';

export default function Testimonial() {
  const testimonials = [
    {
      id: 1,
      name: 'Budi Santoso',
      role: 'Homeowner',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=2070&auto=format&fit=crop',
      projectImage: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?q=80&w=2075&auto=format&fit=crop',
      review: 'Bangun Jaya Putra exceeded our expectations. The attention to detail in our new villa is incredible. They managed the project professionally from day one, ensuring everything was on budget and on time.',
      rating: 5,
    },
    {
      id: 2,
      name: 'Sarah Wijayanti',
      role: 'Cafe Owner',
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=2070&auto=format&fit=crop',
      projectImage: 'https://images.unsplash.com/photo-1554118811-1e0d58224f24?q=80&w=2047&auto=format&fit=crop',
      review: 'The renovation of our cafe was seamless. The design team perfectly captured the modern, cozy vibe we wanted. The craftsmanship is top-notch, and our customers love the new look.',
      rating: 5,
    },
    {
      id: 3,
      name: 'Michael Chen',
      role: 'Corporate Client',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1974&auto=format&fit=crop',
      projectImage: 'https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2069&auto=format&fit=crop',
      review: 'Highly recommend their commercial construction services. Transparent pricing, excellent communication, and a stunning final result for our new office space.',
      rating: 5,
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const next = () => setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  const prev = () => setCurrentIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));

  return (
    <section className="py-24 bg-slate-50 overflow-hidden">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-blue-600 font-semibold tracking-wider uppercase text-sm mb-4 block">
            Client Stories
          </span>
          <h2 className="text-4xl font-bold text-slate-900 mb-6">
            What Our Clients Say
          </h2>
        </div>

        <div className="relative max-w-5xl mx-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.4 }}
              className="bg-white rounded-3xl shadow-[0_8px_30px_-4px_rgba(0,0,0,0.05)] overflow-hidden flex flex-col md:flex-row border border-slate-100"
            >
              {/* Project Image */}
              <div className="md:w-2/5 relative h-64 md:h-auto">
                <img 
                  src={testimonials[currentIndex].projectImage} 
                  alt="Project Result" 
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-slate-900/20" />
                <div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1.5 rounded-full text-xs font-bold text-slate-800">
                  Project Result
                </div>
              </div>

              {/* Review Content */}
              <div className="md:w-3/5 p-8 md:p-12 relative flex flex-col justify-center">
                <Quote className="absolute top-8 right-8 text-slate-100 w-24 h-24 -z-10" />
                
                <div className="flex gap-1 mb-6">
                  {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-amber-400 text-amber-400" />
                  ))}
                </div>
                
                <p className="text-slate-700 text-lg md:text-xl leading-relaxed mb-8 italic">
                  "{testimonials[currentIndex].review}"
                </p>
                
                <div className="flex items-center gap-4 mt-auto">
                  <img 
                    src={testimonials[currentIndex].image} 
                    alt={testimonials[currentIndex].name} 
                    className="w-14 h-14 rounded-full object-cover border-2 border-white shadow-md"
                  />
                  <div>
                    <h4 className="font-bold text-slate-900">{testimonials[currentIndex].name}</h4>
                    <span className="text-slate-500 text-sm">{testimonials[currentIndex].role}</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Controls */}
          <div className="flex justify-center gap-4 mt-8">
            <button 
              onClick={prev}
              className="w-12 h-12 rounded-full bg-white border border-slate-200 flex items-center justify-center text-slate-600 hover:bg-blue-600 hover:text-white hover:border-blue-600 transition-all shadow-sm"
            >
              <ChevronLeft />
            </button>
            <button 
              onClick={next}
              className="w-12 h-12 rounded-full bg-white border border-slate-200 flex items-center justify-center text-slate-600 hover:bg-blue-600 hover:text-white hover:border-blue-600 transition-all shadow-sm"
            >
              <ChevronRight />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

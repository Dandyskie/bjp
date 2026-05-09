import { motion } from 'framer-motion';
import { ArrowRight, ChevronDown } from 'lucide-react';

export default function Hero() {
  return (
    <section id="home" className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2070&auto=format&fit=crop"
          alt="Modern Architecture"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-slate-900/40 mix-blend-multiply" />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-50 via-transparent to-transparent" />
      </div>

      <div className="container relative z-10 mx-auto px-6 lg:px-12 text-center text-white mt-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto"
        >
          <span className="inline-block py-1 px-3 rounded-full bg-white/20 backdrop-blur-md border border-white/30 text-sm font-medium mb-6">
            Premium Construction & Architecture
          </span>
          <h1 className="text-5xl lg:text-7xl font-bold tracking-tight mb-6 leading-tight">
            Build Your Dream Home <br className="hidden lg:block" /> Without Hassle
          </h1>
          <p className="text-lg lg:text-xl text-slate-200 mb-10 max-w-2xl mx-auto font-light">
            Professional, transparent, and high-quality construction services. We bring your vision to life with expert craftsmanship and reliable project management.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="#contact"
              className="w-full sm:w-auto px-8 py-4 bg-blue-600 text-white font-medium rounded-full hover:bg-blue-700 transition-all shadow-lg hover:shadow-blue-600/30 flex items-center justify-center gap-2"
            >
              Free Consultation
              <ArrowRight size={18} />
            </a>
            <a
              href="#portfolio"
              className="w-full sm:w-auto px-8 py-4 bg-white/10 backdrop-blur-md border border-white/30 text-white font-medium rounded-full hover:bg-white/20 transition-all flex items-center justify-center"
            >
              View Portfolio
            </a>
          </div>
        </motion.div>
      </div>

      <motion.a
        href="#about"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity, delay: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 text-white/80 hover:text-white flex flex-col items-center gap-2 z-10"
      >
        <span className="text-sm font-medium tracking-widest uppercase">Scroll</span>
        <ChevronDown size={24} />
      </motion.a>
    </section>
  );
}

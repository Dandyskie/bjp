import { useState, useEffect } from 'react';
import { Menu, X, Building2 } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Portfolio', href: '#portfolio' },
    { name: 'Why Us', href: '#why-us' },
  ];

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? 'py-3 glass' : 'py-5 bg-transparent'
      }`}
    >
      <div className="container mx-auto px-6 lg:px-12 flex justify-between items-center">
        <a href="#" className="flex items-center gap-2 group">
          <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center text-white group-hover:bg-blue-700 transition-colors">
            <Building2 size={24} />
          </div>
          <span className={`text-xl font-bold tracking-tight ${isScrolled ? 'text-slate-900' : 'text-slate-900 lg:text-white'}`}>
            Bangun Jaya Putra
          </span>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className={`text-sm font-medium transition-colors hover:text-blue-600 ${
                isScrolled ? 'text-slate-600' : 'text-slate-200 hover:text-white'
              }`}
            >
              {link.name}
            </a>
          ))}
          <a
            href="#contact"
            className="px-6 py-2.5 bg-blue-600 text-white text-sm font-medium rounded-full hover:bg-blue-700 transition-all shadow-lg hover:shadow-blue-600/30"
          >
            Free Consultation
          </a>
        </nav>

        {/* Mobile Toggle */}
        <button
          className="lg:hidden text-slate-900 z-50"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} className={!isScrolled ? 'text-slate-900' : ''} />}
        </button>
      </div>

      {/* Mobile Nav Sidebar */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop Overlay */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              className="fixed inset-0 bg-slate-900/50 backdrop-blur-sm z-40 lg:hidden"
            />
            
            {/* Sidebar Drawer */}
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', bounce: 0, duration: 0.4 }}
              className="fixed top-0 right-0 h-[100dvh] w-[80%] max-w-sm bg-white shadow-2xl z-50 p-6 flex flex-col lg:hidden overflow-y-auto"
            >
              <div className="flex justify-between items-center mb-10">
                <div className="flex items-center gap-2 text-blue-600">
                  <Building2 size={24} />
                  <span className="text-xl font-bold text-slate-900">BJP</span>
                </div>
                <button 
                  onClick={() => setIsOpen(false)} 
                  className="w-10 h-10 bg-slate-100 rounded-full flex items-center justify-center text-slate-600 hover:bg-slate-200 hover:text-slate-900 transition-colors"
                >
                  <X size={20} />
                </button>
              </div>
              
              <div className="flex flex-col gap-6">
                {navLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    className="text-slate-700 text-lg font-medium hover:text-blue-600 transition-colors border-b border-slate-100 pb-4"
                  >
                    {link.name}
                  </a>
                ))}
              </div>
              
              <div className="mt-auto pt-8">
                <a
                  href="#contact"
                  onClick={() => setIsOpen(false)}
                  className="w-full flex justify-center py-4 bg-blue-600 text-white font-medium rounded-xl hover:bg-blue-700 shadow-lg shadow-blue-600/30 transition-all"
                >
                  Free Consultation
                </a>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </header>
  );
}

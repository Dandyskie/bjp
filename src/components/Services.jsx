import { motion } from 'framer-motion';
import { Home, Hammer, PaintBucket, PenTool, Trees, HardHat } from 'lucide-react';

export default function Services() {
  const services = [
    {
      icon: <Home className="w-8 h-8" />,
      title: 'House Construction',
      description: 'From foundation to finishing, we build your dream home with structural integrity and modern aesthetics.',
    },
    {
      icon: <Hammer className="w-8 h-8" />,
      title: 'Renovation',
      description: 'Transform your existing space with our professional renovation and remodeling services.',
    },
    {
      icon: <PenTool className="w-8 h-8" />,
      title: 'Architecture',
      description: 'Comprehensive architectural design services tailored to your lifestyle and functional needs.',
    },
    {
      icon: <PaintBucket className="w-8 h-8" />,
      title: 'Interior Design',
      description: 'Elevate your interiors with custom furniture, smart layouts, and premium finishing materials.',
    },
    {
      icon: <Trees className="w-8 h-8" />,
      title: 'Landscape Design',
      description: 'Create beautiful, sustainable outdoor living spaces that complement your architecture.',
    },
    {
      icon: <HardHat className="w-8 h-8" />,
      title: 'Project Consultation',
      description: 'Expert advice on budgeting, materials, timeline, and feasibility for your upcoming projects.',
    },
  ];

  return (
    <section id="services" className="py-24 bg-slate-50">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-blue-600 font-semibold tracking-wider uppercase text-sm mb-4 block">
            Our Expertise
          </span>
          <h2 className="text-4xl font-bold text-slate-900 mb-6">
            Comprehensive Building Services
          </h2>
          <p className="text-slate-600 text-lg">
            We provide end-to-end solutions for all your construction and design needs, ensuring quality and precision at every step.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="bg-white p-8 rounded-2xl shadow-[0_4px_20px_-4px_rgba(0,0,0,0.05)] hover:shadow-[0_8px_30px_-4px_rgba(0,0,0,0.1)] transition-all duration-300 group border border-slate-100"
            >
              <div className="w-16 h-16 bg-blue-50 text-blue-600 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-blue-600 group-hover:text-white transition-colors duration-300">
                {service.icon}
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-blue-600 transition-colors">
                {service.title}
              </h3>
              <p className="text-slate-600 leading-relaxed">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

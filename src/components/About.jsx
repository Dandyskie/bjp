import { motion } from 'framer-motion';
import { CheckCircle2 } from 'lucide-react';

export default function About() {
  const stats = [
    { value: '15+', label: 'Years Experience' },
    { value: '350+', label: 'Projects Completed' },
    { value: '100%', label: 'Client Satisfaction' },
  ];

  const features = [
    'Certified Professionals',
    'Transparent Pricing',
    'On-Time Delivery',
    'Premium Materials',
  ];

  return (
    <section id="about" className="py-24 bg-white">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          {/* Image Side */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="rounded-3xl overflow-hidden shadow-2xl">
              <img 
                src="https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?q=80&w=2070&auto=format&fit=crop" 
                alt="Modern House Construction" 
                className="w-full h-[600px] object-cover hover:scale-105 transition-transform duration-700"
              />
            </div>
            
            {/* Floating Experience Card */}
            <div className="absolute -bottom-8 -right-8 bg-blue-600 text-white p-8 rounded-3xl shadow-xl hidden md:block">
              <div className="text-5xl font-bold mb-2">16+</div>
              <div className="text-blue-100 font-medium">Years of building<br />excellence</div>
            </div>
          </motion.div>

          {/* Text Side */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-blue-600 font-semibold tracking-wider uppercase text-sm mb-4 block">
              About Bangun Jaya Putra
            </span>
            <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-6 leading-tight">
              We Build Modern Spaces That Inspire
            </h2>
            <p className="text-slate-600 text-lg mb-8 leading-relaxed">
              We are a premium contractor and architecture firm dedicated to creating exceptional living and working environments. With a focus on modern design, quality craftsmanship, and seamless execution, we turn your vision into reality without the hassle.
            </p>

            <div className="grid grid-cols-2 gap-4 mb-10">
              {features.map((feature, idx) => (
                <div key={idx} className="flex items-center gap-3">
                  <CheckCircle2 className="text-blue-600" size={24} />
                  <span className="text-slate-800 font-medium">{feature}</span>
                </div>
              ))}
            </div>

            <div className="grid grid-cols-3 gap-8 pt-8 border-t border-slate-100">
              {stats.map((stat, idx) => (
                <div key={idx}>
                  <div className="text-3xl font-bold text-slate-900 mb-1">{stat.value}</div>
                  <div className="text-sm text-slate-500">{stat.label}</div>
                </div>
              ))}
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}

import { motion } from 'framer-motion';
import { ShieldCheck, Clock, Layers, Users, Gem } from 'lucide-react';

export default function WhyChooseUs() {
  const features = [
    {
      icon: <Gem size={32} />,
      title: 'High Quality Materials',
      description: 'We source only premium, durable materials to ensure your building stands the test of time.',
    },
    {
      icon: <Layers size={32} />,
      title: 'Transparent Pricing',
      description: 'No hidden fees. We provide detailed, honest budget breakdowns before any work begins.',
    },
    {
      icon: <Users size={32} />,
      title: 'Professional Team',
      description: 'Our architects, engineers, and builders have decades of combined industry experience.',
    },
    {
      icon: <Clock size={32} />,
      title: 'On-Time Delivery',
      description: 'We adhere to strict project timelines to guarantee your project is completed as scheduled.',
    },
    {
      icon: <ShieldCheck size={32} />,
      title: 'Warranty Guarantee',
      description: 'Peace of mind with comprehensive post-construction warranties and support.',
    },
  ];

  return (
    <section id="why-us" className="py-24 bg-white">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-blue-600 font-semibold tracking-wider uppercase text-sm mb-4 block">
              Why Choose Us
            </span>
            <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-6 leading-tight">
              Building Trust Through Excellence
            </h2>
            <p className="text-slate-600 text-lg mb-10 leading-relaxed">
              We don't just build structures; we build relationships. Our commitment to quality, transparency, and client satisfaction sets us apart as a premier construction partner.
            </p>

            <div className="space-y-6">
              {features.slice(0, 3).map((feature, idx) => (
                <div key={idx} className="flex gap-4 group">
                  <div className="w-14 h-14 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center shrink-0 group-hover:bg-blue-600 group-hover:text-white transition-colors duration-300">
                    {feature.icon}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-slate-900 mb-2 group-hover:text-blue-600 transition-colors">
                      {feature.title}
                    </h3>
                    <p className="text-slate-600 leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="grid gap-6"
          >
            <div className="rounded-3xl overflow-hidden shadow-2xl relative">
              <img 
                src="https://images.unsplash.com/photo-1541888086425-d81bb19240f5?q=80&w=2070&auto=format&fit=crop" 
                alt="Construction Planning" 
                className="w-full h-[400px] object-cover hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent flex items-end p-8">
                 <div className="text-white">
                    <div className="flex gap-2 mb-3">
                      {features.slice(3, 5).map((f, i) => (
                        <div key={i} className="flex items-center gap-2 bg-white/20 backdrop-blur-md px-3 py-1 rounded-full text-sm">
                          {f.icon}
                          <span>{f.title}</span>
                        </div>
                      ))}
                    </div>
                    <p className="text-slate-200 text-sm font-medium">Committed to delivering beyond expectations.</p>
                 </div>
              </div>
            </div>
            
            <div className="bg-blue-600 rounded-3xl p-8 text-white flex items-center justify-between shadow-xl">
              <div>
                <h4 className="text-2xl font-bold mb-1">Ready to start?</h4>
                <p className="text-blue-100 text-sm">Get a free consultation today.</p>
              </div>
              <a href="#contact" className="px-6 py-3 bg-white text-blue-600 font-bold rounded-full hover:bg-blue-50 transition-colors">
                Contact Us
              </a>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}

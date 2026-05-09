import { motion } from 'framer-motion';
import { MessageSquare, MapPin, PenTool, HardHat, Key } from 'lucide-react';

export default function Workflow() {
  const steps = [
    {
      icon: <MessageSquare size={24} />,
      title: 'Consultation',
      description: 'Discuss your ideas, budget, and requirements with our expert team.',
    },
    {
      icon: <MapPin size={24} />,
      title: 'Site Survey',
      description: 'We conduct a thorough inspection of your location to ensure feasibility.',
    },
    {
      icon: <PenTool size={24} />,
      title: 'Design & Budget',
      description: 'Detailed architectural plans and a transparent cost estimation.',
    },
    {
      icon: <HardHat size={24} />,
      title: 'Construction',
      description: 'Our skilled professionals execute the build with precision and quality control.',
    },
    {
      icon: <Key size={24} />,
      title: 'Final Handover',
      description: 'A final walkthrough and handing over the keys to your new space.',
    },
  ];

  return (
    <section className="py-24 bg-slate-900 text-white overflow-hidden">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <span className="text-blue-400 font-semibold tracking-wider uppercase text-sm mb-4 block">
            How We Work
          </span>
          <h2 className="text-4xl font-bold mb-6">
            Our Proven 5-Step Process
          </h2>
          <p className="text-slate-400 text-lg">
            We ensure a seamless and stress-free experience from your initial idea to the final project handover.
          </p>
        </div>

        <div className="relative">
          {/* Connecting Line */}
          <div className="hidden lg:block absolute top-1/2 left-0 w-full h-0.5 bg-slate-800 -translate-y-1/2 z-0" />

          <div className="grid lg:grid-cols-5 gap-8 relative z-10">
            {steps.map((step, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.15 }}
                className="flex flex-col items-center text-center group"
              >
                <div className="w-20 h-20 rounded-full bg-slate-800 border-4 border-slate-900 flex items-center justify-center text-blue-400 mb-6 group-hover:bg-blue-600 group-hover:text-white group-hover:scale-110 transition-all duration-300 shadow-xl">
                  {step.icon}
                </div>
                <div className="bg-slate-800/50 p-6 rounded-2xl border border-slate-700/50 w-full h-full hover:bg-slate-800 transition-colors">
                  <div className="text-blue-400 font-bold mb-2">Step 0{idx + 1}</div>
                  <h3 className="text-xl font-bold mb-3">{step.title}</h3>
                  <p className="text-slate-400 text-sm leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

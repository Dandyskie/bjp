import { useState } from 'react';
import { motion } from 'framer-motion';
import { Calculator as CalcIcon, Building, Ruler, ArrowRight } from 'lucide-react';

export default function Calculator() {
  const [size, setSize] = useState('');
  const [type, setType] = useState('Standard');
  const [estimatedCost, setEstimatedCost] = useState(null);

  const rates = {
    'Standard': 4500000,
    'Premium': 6500000,
    'Luxury': 9000000,
  };

  const calculateCost = (e) => {
    e.preventDefault();
    if (!size) return;
    
    const area = parseFloat(size);
    const rate = rates[type];
    const total = area * rate;
    
    setEstimatedCost(total);
  };

  const formatCurrency = (amount) => {
    return new Intl.NumberFormat('id-ID', {
      style: 'currency',
      currency: 'IDR',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(amount);
  };

  return (
    <section className="py-24 bg-blue-600 relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500 rounded-full blur-3xl opacity-50 -translate-y-1/2 translate-x-1/3" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-700 rounded-full blur-3xl opacity-50 translate-y-1/3 -translate-x-1/3" />

      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          <div className="text-white">
            <span className="inline-block py-1 px-3 rounded-full bg-white/20 backdrop-blur-md text-xs font-bold tracking-wider uppercase mb-6">
              Budget Planning
            </span>
            <h2 className="text-4xl lg:text-5xl font-bold mb-6 leading-tight">
              Get an Instant Cost Estimation
            </h2>
            <p className="text-blue-100 text-lg mb-8 leading-relaxed">
              Use our interactive calculator to get a rough estimate for your upcoming construction project. For a precise and detailed quotation, please contact our team for a free consultation.
            </p>

            <ul className="space-y-4">
              <li className="flex items-center gap-3 text-blue-50">
                <div className="w-2 h-2 rounded-full bg-blue-300" />
                Standard: IDR 4.5M / m²
              </li>
              <li className="flex items-center gap-3 text-blue-50">
                <div className="w-2 h-2 rounded-full bg-blue-300" />
                Premium: IDR 6.5M / m²
              </li>
              <li className="flex items-center gap-3 text-blue-50">
                <div className="w-2 h-2 rounded-full bg-blue-300" />
                Luxury: IDR 9.0M / m²
              </li>
            </ul>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-white rounded-3xl p-8 lg:p-10 shadow-2xl"
          >
            <div className="flex items-center gap-4 mb-8 border-b border-slate-100 pb-6">
              <div className="w-12 h-12 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center">
                <CalcIcon size={24} />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-slate-900">Cost Calculator</h3>
                <p className="text-slate-500 text-sm">Estimate your building project</p>
              </div>
            </div>

            <form onSubmit={calculateCost} className="space-y-6">
              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-2">Building Size (m²)</label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                    <Ruler className="text-slate-400" size={20} />
                  </div>
                  <input
                    type="number"
                    required
                    min="1"
                    value={size}
                    onChange={(e) => setSize(e.target.value)}
                    className="w-full pl-12 pr-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-blue-600 focus:border-transparent outline-none transition-all text-slate-700 font-medium"
                    placeholder="e.g., 150"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-2">Project Quality</label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                    <Building className="text-slate-400" size={20} />
                  </div>
                  <select
                    value={type}
                    onChange={(e) => setType(e.target.value)}
                    className="w-full pl-12 pr-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-blue-600 focus:border-transparent outline-none transition-all text-slate-700 font-medium appearance-none"
                  >
                    <option value="Standard">Standard Quality</option>
                    <option value="Premium">Premium Quality</option>
                    <option value="Luxury">Luxury Quality</option>
                  </select>
                </div>
              </div>

              <button
                type="submit"
                className="w-full py-4 bg-slate-900 text-white font-bold rounded-xl hover:bg-slate-800 transition-colors shadow-lg shadow-slate-900/20 flex justify-center items-center gap-2"
              >
                Calculate Estimate
              </button>
            </form>

            {estimatedCost !== null && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                className="mt-8 p-6 bg-blue-50 border border-blue-100 rounded-xl"
              >
                <div className="text-sm font-semibold text-blue-800 mb-1">Estimated Cost:</div>
                <div className="text-3xl font-bold text-blue-600 mb-4">{formatCurrency(estimatedCost)}</div>
                <p className="text-xs text-blue-600/70">
                  *This is a rough estimate. Material prices and site conditions may affect the final quote.
                </p>
                <a
                  href="#contact"
                  className="mt-4 inline-flex items-center gap-2 text-sm font-bold text-slate-900 hover:text-blue-600 transition-colors"
                >
                  Discuss Details on WhatsApp <ArrowRight size={16} />
                </a>
              </motion.div>
            )}
          </motion.div>

        </div>
      </div>
    </section>
  );
}

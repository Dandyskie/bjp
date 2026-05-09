import { Building2, Share2, Globe, MessageCircle, MapPin, Phone, Mail, ChevronRight } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-900 text-slate-300 pt-20 pb-10 border-t border-slate-800">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          
          {/* Brand */}
          <div className="col-span-1 md:col-span-2 lg:col-span-1">
            <a href="#" className="flex items-center gap-2 mb-6">
              <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center text-white">
                <Building2 size={24} />
              </div>
              <span className="text-2xl font-bold tracking-tight text-white">
                Bangun Jaya Putra
              </span>
            </a>
            <p className="text-slate-400 mb-6 leading-relaxed">
              Your trusted partner in premium construction and architectural design. We build modern, elegant, and sustainable spaces tailored to your lifestyle.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-blue-600 hover:text-white transition-all">
                <Globe size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-blue-600 hover:text-white transition-all">
                <Share2 size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-blue-600 hover:text-white transition-all">
                <MessageCircle size={18} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-bold mb-6 uppercase text-sm tracking-wider">Quick Links</h4>
            <ul className="space-y-3">
              {['Home', 'About Us', 'Services', 'Portfolio', 'Careers', 'Contact'].map((item) => (
                <li key={item}>
                  <a href="#" className="hover:text-blue-400 transition-colors flex items-center gap-2 group">
                    <ChevronRight size={14} className="opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all text-blue-400" />
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-white font-bold mb-6 uppercase text-sm tracking-wider">Services</h4>
            <ul className="space-y-3">
              {['House Construction', 'Renovation', 'Interior Design', 'Architecture', 'Commercial Build'].map((item) => (
                <li key={item}>
                  <a href="#" className="hover:text-blue-400 transition-colors flex items-center gap-2 group">
                    <ChevronRight size={14} className="opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all text-blue-400" />
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-bold mb-6 uppercase text-sm tracking-wider">Contact Us</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="text-blue-500 shrink-0 mt-1" size={18} />
                <span className="text-slate-400">Jl. Jendral Sudirman No. 45, Jakarta Selatan, 12190</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="text-blue-500 shrink-0" size={18} />
                <span className="text-slate-400">+62 812 3456 7890</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="text-blue-500 shrink-0" size={18} />
                <span className="text-slate-400">hello@bangunjayaputra.com</span>
              </li>
            </ul>
          </div>

        </div>

        <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-slate-500">
          <p>&copy; {currentYear} Bangun Jaya Putra. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-slate-300">Privacy Policy</a>
            <a href="#" className="hover:text-slate-300">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

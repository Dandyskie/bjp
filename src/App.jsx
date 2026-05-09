import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Portfolio from './components/Portfolio';
import Workflow from './components/Workflow';
import WhyChooseUs from './components/WhyChooseUs';
import Testimonial from './components/Testimonial';
import Calculator from './components/Calculator';
import Footer from './components/Footer';
import WhatsAppButton from './components/WhatsAppButton';

function App() {
  return (
    <div className="font-sans text-slate-800 bg-slate-50 min-h-screen">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Services />
        <Portfolio />
        <Workflow />
        <WhyChooseUs />
        <Testimonial />
        <Calculator />
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
}

export default App;

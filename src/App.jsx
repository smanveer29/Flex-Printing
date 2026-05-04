import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Stats from './components/Stats';
import Services from './components/Services';
import Featured from './components/Featured';
import Portfolio from './components/Portfolio';
import Process from './components/Process';
import WhyUs from './components/WhyUs';
import Testimonials from './components/Testimonials';
import FAQ from './components/FAQ';
import Contact from './components/Contact';
import Footer from './components/Footer';
import FloatingWhatsApp from './components/FloatingWhatsApp';

export default function App() {
  return (
    <div className="min-h-screen bg-surface">
      <Navbar />
      <main>
        <Hero />
        <Stats />
        <Services />
        <Featured />
        <Portfolio />
        <Process />
        <WhyUs />
        <Testimonials />
        <FAQ />
        <Contact />
      </main>
      <Footer />
      <FloatingWhatsApp />
    </div>
  );
}

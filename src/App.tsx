import NetworkBackground from './components/NetworkBackground';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Marquee from './components/Marquee';
import Solution from './components/Solution';
import Features from './components/Features';
import HowItWorks from './components/HowItWorks';
import Pricing from './components/Pricing';
import FAQ from './components/FAQ';
import CTA from './components/CTA';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <NetworkBackground />
      <div className="noise"></div>
      <Navbar />
      <main>
        <Hero />
        <Marquee />
        <Solution />
        <Features />
        <HowItWorks />
        <Pricing />
        <FAQ />
        <CTA />
        <Footer />
      </main>
    </>
  );
}

export default App;

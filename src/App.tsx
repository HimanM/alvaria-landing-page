import React, { useRef } from 'react';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import FeaturesSection from './components/FeaturesSection';
import PurposeSection from './components/PurposeSection';
import CtaSection from './components/CtaSection';
import Footer from './components/Footer';

export default function App() {
  const scrollRef = useRef<HTMLDivElement>(null);

  return (
    <div ref={scrollRef} className="h-[100dvh] w-full overflow-y-auto overflow-x-hidden snap-y snap-proximity bg-primary-black text-primary-white selection:bg-white/20">
      <Navbar scrollContainerRef={scrollRef} />
      <HeroSection />
      <FeaturesSection />
      <PurposeSection />
      <CtaSection />
      <Footer />
    </div>
  );
}

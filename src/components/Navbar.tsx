import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence, useScroll, useMotionValueEvent } from 'motion/react';

function Navbar({ scrollContainerRef }: { scrollContainerRef?: React.RefObject<HTMLDivElement> }) {
  const [isOpen, setIsOpen] = useState(false);
  const [hidden, setHidden] = useState(false);

  // If a container ref is provided, track its scroll. Otherwise, track window scroll.
  const { scrollY } = useScroll(scrollContainerRef ? { container: scrollContainerRef } : undefined);

  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious() ?? 0;
    // Hide navbar if scrolling down and past 100px. Show if scrolling up or at top.
    if (latest > previous && latest > 100) {
      setHidden(true);
    } else {
      setHidden(false);
    }
  });

  return (
    <>
      <motion.nav 
        variants={{
          visible: { y: 0, opacity: 1 },
          hidden: { y: "-150%", opacity: 0 }
        }}
        initial="visible"
        animate={hidden && !isOpen ? "hidden" : "visible"}
        transition={{ duration: 0.35, ease: "easeInOut" }}
        className="fixed top-4 sm:top-6 mx-[5%] left-0 right-0 z-50 flex justify-between items-center px-4 md:px-8 py-3 md:py-4 bg-[#F5F4EF]/50 backdrop-blur-2xl rounded-[24px] shadow-sm text-black border border-white/20"
      >
        <div className="font-extrabold text-xl xl:text-2xl tracking-tighter">ALVARIA</div>
        
        <div className="hidden lg:flex items-center gap-8 text-[13px] font-medium text-black/80">
          <a href="#hero" className="hover:text-black transition-colors flex items-center gap-2">
            <span className="w-1 h-1 rounded-full bg-black/60" />
            Home
          </a>
          <a href="#features" className="hover:text-black transition-colors flex items-center gap-2">
            <span className="w-1 h-1 rounded-full bg-black/60" />
            Features
          </a>
          <a href="#purpose" className="hover:text-black transition-colors flex items-center gap-2">
            <span className="w-1 h-1 rounded-full bg-black/60" />
            Purpose
          </a>
          <a href="#cta" className="hover:text-black transition-colors flex items-center gap-2">
            <span className="w-1 h-1 rounded-full bg-black/60" />
            Join
          </a>
        </div>

        <div className="hidden lg:flex items-center gap-6">
          <a href="#cta" className="text-[13px] font-medium hover:text-black/70 transition-colors">Sign in</a>
          <button 
            className="bg-primary-black text-white px-6 py-2.5 rounded-lg text-xs font-medium hover:bg-black/90 transition-colors shadow-lg"
          >
            Find an Advisor
          </button>
        </div>

        {/* Mobile Menu Toggle */}
        <button 
          className="lg:hidden p-2 text-black"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </motion.nav>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 bg-[#F5F4EF]/80 backdrop-blur-[32px] flex flex-col justify-center items-center gap-6 sm:gap-10 border-none shadow-none text-black"
          >
            <a href="#hero" onClick={() => setIsOpen(false)} className="text-3xl font-semibold hover:text-black/60 transition-colors mt-8">Home</a>
            <a href="#features" onClick={() => setIsOpen(false)} className="text-3xl font-semibold hover:text-black/60 transition-colors">Features</a>
            <a href="#purpose" onClick={() => setIsOpen(false)} className="text-3xl font-semibold hover:text-black/60 transition-colors">Purpose</a>
            <a href="#cta" onClick={() => setIsOpen(false)} className="text-3xl font-semibold hover:text-black/60 transition-colors">Join</a>
            
            <div className="flex flex-col items-center gap-4 mt-8 w-full max-w-[280px]">
              <a href="#cta" onClick={() => setIsOpen(false)} className="text-lg font-medium hover:text-black/60 transition-colors mb-2">Sign in</a>
              <button 
                onClick={() => setIsOpen(false)}
                className="w-full bg-primary-black text-white px-8 py-3.5 rounded-xl text-lg font-medium hover:bg-black/90 transition-colors shadow-lg"
              >
                Find an Advisor
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

export default Navbar;

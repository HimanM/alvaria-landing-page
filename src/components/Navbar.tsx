import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence, useScroll, useMotionValueEvent } from 'motion/react';

function Navbar({ scrollContainerRef }: { scrollContainerRef?: React.RefObject<HTMLDivElement> }) {
  const [isOpen, setIsOpen] = useState(false);
  const [hidden, setHidden] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 1024);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // If a container ref is provided, track its scroll. Otherwise, track window scroll.
  const { scrollY } = useScroll(scrollContainerRef ? { container: scrollContainerRef } : undefined);

  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious() ?? 0;
    setIsScrolled(latest > 100);

    // Only hide navbar on desktop when scrolling down
    if (!isMobile) {
      if (latest > previous && latest > 100) {
        setHidden(true);
      } else {
        setHidden(false);
      }
    } else {
      setHidden(false);
    }
  });

  const navLinks = [
    { name: 'Home', href: '#hero' },
    { name: 'Features', href: '#features' },
    { name: 'Purpose', href: '#purpose' },
    { name: 'Join', href: '#cta' },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      }
    },
    exit: {
      opacity: 0,
      transition: {
        staggerChildren: 0.05,
        staggerDirection: -1,
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.3 }
    },
    exit: { 
      opacity: 0, 
      y: 10,
      transition: { duration: 0.2 }
    }
  };

  return (
    <motion.nav
      layout
      initial={false}
      animate={{
        y: hidden && !isOpen ? -100 : 0,
        opacity: hidden && !isOpen ? 0 : 1,
      }}
      transition={{ 
        duration: 0.35, 
        ease: [0.32, 0.72, 0, 1] // Custom ease for smoother expansion
      }}
      style={{
        borderRadius: isOpen ? 0 : (isScrolled && isMobile ? 28 : 24),
      }}
      className={`
        fixed z-50 flex flex-col overflow-hidden shadow-sm text-black border border-white/20
        ${isOpen 
          ? "inset-0 bg-[#F5F4EF]/70 backdrop-blur-[32px] w-full h-full" 
          : (isScrolled && isMobile 
              ? "top-4 right-[5%] w-14 h-14 bg-[#F5F4EF]/80 backdrop-blur-2xl" 
              : "top-4 left-[5%] right-[5%] h-14 bg-[#F5F4EF]/50 backdrop-blur-2xl"
            )
        }
      `}
    >
      <div className={`
        flex items-center w-full px-4 md:px-8 shrink-0 transition-all duration-300
        ${isOpen ? "h-20 justify-between" : (isScrolled && isMobile ? "h-14 justify-center px-0" : "h-14 justify-between")}
      `}>
        <AnimatePresence>
          {(!isScrolled || !isMobile || isOpen) && (
            <motion.div 
              layout
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -10 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
              className="font-extrabold text-xl xl:text-2xl tracking-tighter whitespace-nowrap"
            >
              ALVARIA
            </motion.div>
          )}
        </AnimatePresence>
        
        {/* Desktop Links */}
        <div className="hidden lg:flex items-center gap-8 text-[13px] font-medium text-black/80">
          {navLinks.map((link) => (
            <a key={link.name} href={link.href} className="hover:text-black transition-colors flex items-center gap-2">
              <span className="w-1 h-1 rounded-full bg-black/60" />
              {link.name}
            </a>
          ))}
        </div>

        {/* Desktop Buttons */}
        <div className="hidden lg:flex items-center gap-6">
          <a href="#cta" className="text-[13px] font-medium hover:text-black/70 transition-colors">Sign in</a>
          <button 
            className="bg-primary-black text-white px-6 py-2.5 rounded-lg text-xs font-medium hover:bg-black/90 transition-colors shadow-lg"
          >
            Find an Advisor
          </button>
        </div>

        {/* Mobile Menu Toggle */}
        <motion.button 
          layout
          initial={false}
          className="lg:hidden p-2 text-black transition-none z-10"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </motion.button>
      </div>

      {/* Full screen mobile menu content */}
      <AnimatePresence mode="wait">
        {isOpen && (
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="flex-1 flex flex-col justify-center items-center gap-6 sm:gap-10 px-[5%]"
          >
            {navLinks.map((link) => (
              <motion.a 
                key={link.name}
                variants={itemVariants}
                href={link.href} 
                onClick={() => setIsOpen(false)} 
                className="text-3xl font-semibold hover:text-black/60 transition-colors"
              >
                {link.name}
              </motion.a>
            ))}
            
            <motion.div 
              variants={itemVariants}
              className="flex flex-col items-center gap-4 mt-8 w-full max-w-[280px]"
            >
              <a href="#cta" onClick={() => setIsOpen(false)} className="text-lg font-medium hover:text-black/60 transition-colors mb-2">Sign in</a>
              <button 
                onClick={() => setIsOpen(false)}
                className="w-full bg-primary-black text-white px-8 py-3.5 rounded-xl text-lg font-medium hover:bg-black/90 transition-colors shadow-lg"
              >
                Find an Advisor
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}

export default Navbar;

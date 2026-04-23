import { motion } from 'motion/react';

function Footer() {
  return (
    <footer id="footer" className="bg-secondary-beige text-black px-[5%] h-[100dvh] lg:h-screen snap-start shrink-0 flex flex-col justify-center py-6 sm:py-16 lg:py-0 overflow-hidden">
      <div className="max-w-7xl mx-auto w-full flex flex-col h-full lg:h-auto justify-between lg:justify-start lg:block">
        
        {/* Top Area */}
        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-[2fr_1fr_1fr_1.5fr] gap-3 sm:gap-8 lg:gap-8 mb-2 sm:mb-10 md:mb-20 shrink-0 mt-2 sm:mt-0">
          
          <div className="col-span-2 lg:col-span-1 flex flex-col gap-1 sm:gap-6 pr-0 sm:pr-8">
            <div className="font-extrabold text-xl sm:text-2xl tracking-tighter">ALVARIA</div>
            <p className="hidden sm:block text-sm text-black/70 leading-relaxed max-w-[300px]">
              Transform the way you work with an AI-powered workspace built for modern teams. Automate tasks, streamline collaboration, and make smarter decisions — all in one simple, intelligent platform designed to help you work faster and smarter.
            </p>
          </div>

          <div className="flex flex-col gap-1.5 sm:gap-4">
            <h4 className="font-bold text-[11px] sm:text-sm sm:mb-2">Quick link</h4>
            <a href="#" className="text-[10px] sm:text-sm text-black/70 hover:text-black transition-colors">About Us</a>
            <a href="#" className="text-[10px] sm:text-sm text-black/70 hover:text-black transition-colors">Careers</a>
            <a href="#" className="text-[10px] sm:text-sm text-black/70 hover:text-black transition-colors">Blog</a>
            <a href="#" className="hidden sm:inline text-sm text-black/70 hover:text-black transition-colors">Press & Media</a>
            <a href="#" className="hidden sm:inline text-sm text-black/70 hover:text-black transition-colors">Contact</a>
          </div>

          <div className="flex flex-col gap-1.5 sm:gap-4">
            <h4 className="font-bold text-[11px] sm:text-sm sm:mb-2">Product</h4>
            <a href="#" className="text-[10px] sm:text-sm text-black/70 hover:text-black transition-colors">Features</a>
            <a href="#" className="text-[10px] sm:text-sm text-black/70 hover:text-black transition-colors">Integrations</a>
            <a href="#" className="text-[10px] sm:text-sm text-black/70 hover:text-black transition-colors">Pricing</a>
            <a href="#" className="hidden sm:inline text-sm text-black/70 hover:text-black transition-colors">Use Cases</a>
            <a href="#" className="hidden sm:inline text-sm text-black/70 hover:text-black transition-colors">Demo</a>
          </div>

          <div className="col-span-2 lg:col-span-1 flex flex-col gap-2 sm:gap-6">
            <h4 className="font-bold text-[11px] sm:text-sm hidden sm:block">News letter</h4>
            <p className="hidden sm:block text-sm text-black/70 leading-relaxed">
              Stay ahead with AI productivity tips, product updates, and exclusive early-access features.
            </p>
            <div className="flex bg-black/5 rounded overflow-hidden mt-1 sm:mt-2">
              <input 
                type="email" 
                placeholder="Enter email" 
                className="bg-transparent px-3 sm:px-4 py-2 sm:py-3 text-[10px] sm:text-sm flex-1 outline-none min-w-0"
              />
              <button className="bg-black text-white px-4 sm:px-6 py-2 sm:py-3 text-[10px] sm:text-sm font-medium hover:bg-black/90 transition-colors whitespace-nowrap">
                Subscribe
              </button>
            </div>
          </div>

        </div>

        {/* Middle Area - Massive Text */}
        <div className="w-full overflow-hidden flex justify-center py-4 sm:py-10 md:py-20 border-t border-black/10 flex-1 min-h-[60px] items-center">
          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 1 }}
            className="text-[17vw] sm:text-[14vw] md:text-[15vw] font-black tracking-tight leading-[0.8] text-black w-full text-center whitespace-nowrap"
          >
            ALVARIA
          </motion.div>
        </div>

        {/* Bottom Area */}
        <div className="flex flex-col sm:flex-row justify-between items-center gap-2 sm:gap-6 pt-3 sm:pt-10 border-t border-black/10 text-[9px] sm:text-xs font-medium text-black/60 shrink-0 pb-2 sm:pb-0">
          <div className="flex flex-wrap justify-center items-center gap-3 sm:gap-6">
            <span className="hidden sm:inline text-black font-semibold text-sm">Follow us–</span>
            <a href="#" className="hover:text-black transition-colors">Facebook</a>
            <a href="#" className="hover:text-black transition-colors">LinkedIn</a>
            <a href="#" className="hover:text-black transition-colors">Twitter</a>
          </div>
          
          <div className="flex flex-wrap justify-center gap-3 sm:gap-8">
            <a href="#" className="hover:text-black transition-colors">Terms</a>
            <a href="#" className="hover:text-black transition-colors">Privacy</a>
          </div>

          <div className="text-center sm:text-left">
            © 2026 Alvaria. All rights reserved.
          </div>
        </div>

      </div>
    </footer>
  );
}

export default Footer;

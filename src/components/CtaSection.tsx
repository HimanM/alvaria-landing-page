import { motion } from 'motion/react';

function CtaSection() {
  return (
    <section className="relative min-h-[100dvh] lg:h-screen lg:min-h-0 snap-start shrink-0 px-[5%] overflow-hidden flex flex-col items-center justify-center text-center py-20 lg:py-0">
      <motion.div 
        initial={{ scale: 1.2, opacity: 0.9 }}
        whileInView={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
        viewport={{ once: false, margin: "0px" }}
        className="absolute inset-0 z-0 origin-center"
      >
        <img 
          src="https://images.unsplash.com/photo-1542621334-a254cf47733d?q=80&w=2560&auto=format&fit=crop" 
          alt="CTA Background" 
          className="w-full h-full object-cover object-center"
        />
      </motion.div>
      <div className="absolute inset-0 z-0 bg-gradient-to-b from-black/0 via-black/10 to-black/60" />
      
      <div className="relative z-10 max-w-4xl mx-auto flex flex-col items-center w-full">
        <div className="flex flex-col items-center mb-6 text-center">
          <div className="overflow-hidden pb-1">
            <motion.h2 
              initial={{ y: "100%", opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: false }}
              transition={{ delay: 0.1, duration: 0.6, ease: "easeOut" }}
              className="text-3xl md:text-5xl lg:text-5xl xl:text-6xl font-medium leading-[1.1]"
            >
              Your intelligent workspace for
            </motion.h2>
          </div>
          <div className="overflow-hidden pb-2">
            <motion.h2 
              initial={{ y: "100%", opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: false }}
              transition={{ delay: 0.2, duration: 0.6, ease: "easeOut" }}
              className="text-3xl md:text-5xl lg:text-5xl xl:text-6xl font-medium leading-[1.1]"
            >
              smarter workflows and
            </motion.h2>
          </div>
          <div className="overflow-hidden pb-1">
            <motion.h2 
              initial={{ y: "100%", opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: false }}
              transition={{ delay: 0.3, duration: 0.6, ease: "easeOut" }}
              className="text-3xl md:text-5xl lg:text-5xl xl:text-6xl font-medium leading-[1.1]"
            >
              <span className="serif-italic pr-2">faster decisions.</span>
            </motion.h2>
          </div>
        </div>
        
        <motion.p 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="text-white/70 mb-12 text-sm sm:text-base"
        >
          Follow along as we shape the next generation of workforce technology.
        </motion.p>

        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="w-[85vw] sm:w-full max-w-[400px] bg-white rounded-full p-1 sm:p-1.5 flex items-center shadow-2xl"
        >
          <input 
            type="email" 
            placeholder="Enter email here" 
            className="flex-1 w-full min-w-0 bg-transparent px-4 text-[12px] sm:text-sm text-black outline-none placeholder:text-gray-400"
          />
          <button className="bg-black text-white px-5 sm:px-8 py-2 sm:py-3 rounded-full text-[12px] sm:text-sm font-medium hover:bg-black/90 transition-colors whitespace-nowrap shrink-0">
            Join Now
          </button>
        </motion.div>
      </div>
    </section>
  );
}

export default CtaSection;

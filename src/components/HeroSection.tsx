import { motion } from 'motion/react';
import { fadeInUp } from '../utils/animations';

function HeroSection() {
  return (
    <section id="hero" className="relative min-h-[100dvh] lg:h-screen lg:min-h-0 snap-start shrink-0 flex flex-col overflow-hidden text-white pt-24 lg:pt-32">
      {/* Background Image Container */}
      <motion.div
        initial={{ scale: 1.2 }}
        whileInView={{ scale: 1 }}
        viewport={{ margin: "0px" }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="absolute inset-0 z-0 origin-center"
      >
        <img
          src="https://images.unsplash.com/photo-1600106281844-f6b8678bf4df?q=100&w=3200&auto=format&fit=crop"

          alt="Background"
          className="w-full h-full object-cover object-center"
        />
        {/* Bottom 45% blur effect overlay */}
        <div className="absolute inset-x-0 bottom-0 top-[55%] backdrop-blur-xl bg-white/5" />

        {/* Gradient overlay for readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-transparent to-black/50 pt-[55%]" />
      </motion.div>

      {/* Fading Mobile Frame Outline */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ margin: "0px" }}
        transition={{ delay: 1.2, duration: 0.4 }}
        className="absolute left-1/2 -translate-x-1/2 top-[15vh] bottom-[-10vh] w-[80vw] max-w-[340px] sm:w-[440px] sm:max-w-none rounded-[48px] border-[2px] border-white z-0 pointer-events-none"
        style={{
          maskImage: 'linear-gradient(to bottom, black 55%, transparent 90%)',
          WebkitMaskImage: 'linear-gradient(to bottom, black 55%, transparent 90%)'
        }}
      />

      <div className="relative z-10 flex flex-col justify-end items-center flex-1 w-full max-w-7xl mx-auto px-[5%] pb-[12vh] sm:pb-[15vh]">

        {/* Text Area */}
        <div className="relative z-20 flex flex-col items-center">
          <div className="overflow-hidden pb-1">
            <motion.h1
              initial={{ y: "100%", opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ margin: "0px" }}
              transition={{ delay: 0.7, duration: 0.6, ease: "easeOut" }}
              className="text-3xl sm:text-5xl md:text-[68px] lg:text-[76px] tracking-tight font-semibold leading-[1.05] text-center"
            >
              Building a
            </motion.h1>
          </div>
          <div className="overflow-hidden pb-1">
            <motion.h1
              initial={{ y: "100%", opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ margin: "0px" }}
              transition={{ delay: 0.8, duration: 0.6, ease: "easeOut" }}
              className="text-3xl sm:text-5xl md:text-[68px] lg:text-[76px] tracking-tight font-semibold leading-[1.05] text-center"
            >
              Brighter Future
            </motion.h1>
          </div>
          <div className="overflow-hidden pb-4 mb-6 relative">
            <motion.h1
              initial={{ y: "100%", opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ margin: "0px" }}
              transition={{ delay: 0.9, duration: 0.6, ease: "easeOut" }}
              className="text-3xl sm:text-5xl md:text-[68px] lg:text-[76px] tracking-tight font-semibold leading-[1.05] text-center"
            >
              <span className="serif-italic pr-3">of Work</span>
            </motion.h1>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ margin: "0px" }}
            transition={{ delay: 1.2, duration: 0.4 }}
            className="w-[75vw] max-w-[300px] sm:w-[90%] sm:max-w-[360px] bg-white rounded-full p-1 sm:p-1.5 flex items-center shadow-2xl mb-4 sm:mb-0"
          >
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 w-full min-w-0 bg-transparent px-4 sm:px-5 py-2 sm:py-2 text-[12px] sm:text-[13px] text-black outline-none placeholder:text-gray-500 font-medium"
            />
            <button className="bg-black text-white px-5 sm:px-7 py-2 sm:py-3 rounded-full text-[12px] sm:text-[13px] font-medium hover:bg-black/90 transition-colors whitespace-nowrap shrink-0">
              Join Now
            </button>
          </motion.div>
        </div>
      </div>

      {/* Bottom Elements */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ margin: "0px" }}
        transition={{ delay: 1.2, duration: 0.4 }}
        className="relative z-10 w-full px-[5%] pb-8 flex flex-col md:flex-row justify-between items-center md:items-end gap-6 mx-auto max-w-[1400px]"
      >
        <div className="flex flex-col gap-2 w-[70vw] max-w-[280px] mx-auto md:mx-0">
          <p className="text-[11px] text-white/90 leading-relaxed font-medium text-justify md:text-left">
            Introducing Alvaria Horizons™ — an innovation lab that thinks differently about how to foster growth and support for people at work. Follow along as we shape the next generation of workforce technology.
          </p>
        </div>

        <div className="flex flex-col gap-2 w-[70vw] max-w-[280px] mx-auto md:ml-auto md:mr-0">
          <p className="text-[11px] text-white/90 leading-relaxed font-medium text-justify md:text-right">
            Join thousands of modern teams already transforming their daily workflows with our intelligent platform. Experience seamless collaboration and unparalleled productivity from day one.
          </p>
        </div>
      </motion.div>
    </section>
  );
}

export default HeroSection;

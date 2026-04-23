import { motion } from 'motion/react';
import { Laptop, AlignJustify, Share2, Users, ArrowRight } from 'lucide-react';
import { fadeInUp, staggerContainer, floatingAnim } from '../utils/animations';

function FeaturesSection() {
  return (
    <section id="features" className="bg-primary-black h-[100dvh] snap-start shrink-0 px-[5%] flex flex-col justify-center overflow-hidden py-6 sm:py-10 lg:py-0">
      <motion.div 
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, margin: "-100px" }}
        className="max-w-7xl w-full mx-auto flex flex-col items-center h-full max-h-full lg:h-auto lg:max-h-none"
      >
        <motion.span variants={fadeInUp} className="text-[9px] sm:text-[11px] uppercase tracking-[0.2em] text-white/50 mb-2 sm:mb-6 mt-2 sm:mt-0 shrink-0">
          The future of workforce
        </motion.span>
        
        <motion.h2 variants={fadeInUp} className="text-2xl sm:text-4xl md:text-5xl lg:text-[48px] text-center font-medium leading-[1.1] mb-2 sm:mb-6 shrink-0">
          Introducing Aspect<br />
          <span className="serif-italic text-3xl sm:text-5xl md:text-6xl lg:text-[56px]">Workforce OS</span>
        </motion.h2>
        
        <motion.p variants={fadeInUp} className="text-white/60 text-center max-w-[500px] leading-relaxed mb-4 sm:mb-12 text-[10px] sm:text-sm shrink-0">
          We're prepared to power a shift in employee management and engagement through a 
          renewed focus on building innovative workforce technology.
        </motion.p>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-3 sm:gap-6 w-full flex-1 lg:flex-none min-h-0 pr-2 lg:pr-0 pb-4">
          
          {/* Left Column - Features Grid */}
          <motion.div variants={fadeInUp} className="relative overflow-hidden bg-secondary-green rounded-[24px] sm:rounded-[48px] p-2 sm:p-4 shrink-0 flex flex-col">
            <img 
              src="https://images.unsplash.com/photo-1497215728101-856f4ea42174?q=80&w=1600&auto=format&fit=crop" 
              alt="Office plants"
              className="absolute inset-0 w-full h-full object-cover opacity-60 mix-blend-overlay"
            />
            <div className="relative z-10 bg-white/5 backdrop-blur-[32px] rounded-[16px] sm:rounded-[40px] p-4 lg:p-10 border border-white/10 flex-1 flex flex-col justify-center">
              <div className="grid grid-cols-2 gap-x-3 gap-y-4 sm:gap-x-6 lg:gap-y-8">
                
                <div className="flex flex-col gap-1.5 sm:gap-3">
                  <div className="w-8 h-8 sm:w-10 sm:h-10 bg-white/10 shadow-[inset_0px_1px_1px_rgba(255,255,255,0.2)] rounded-xl sm:rounded-2xl flex items-center justify-center">
                    <Laptop className="w-4 h-4 sm:w-5 sm:h-5 text-white/80" />
                  </div>
                  <h3 className="text-[12px] sm:text-lg font-medium tracking-tight leading-none">Intuitive interface</h3>
                  <p className="text-[9px] sm:text-[12px] text-white/60 leading-[1.3] sm:leading-relaxed font-medium">
                    User-friendly software reduces expensive training and improves agents' everyday experience.
                  </p>
                </div>

                <div className="flex flex-col gap-1.5 sm:gap-3">
                  <div className="w-8 h-8 sm:w-10 sm:h-10 bg-white/10 shadow-[inset_0px_1px_1px_rgba(255,255,255,0.2)] rounded-xl sm:rounded-2xl flex items-center justify-center">
                    <AlignJustify className="w-4 h-4 sm:w-5 sm:h-5 text-white/80" />
                  </div>
                  <h3 className="text-[12px] sm:text-lg font-medium tracking-tight leading-none">Employee visibility</h3>
                  <p className="text-[9px] sm:text-[12px] text-white/60 leading-[1.3] sm:leading-relaxed font-medium">
                    WorkforceOS gives agents clear visibility into their schedule and the ability to manage their own shifts with admin feedback.
                  </p>
                </div>

                <div className="flex flex-col gap-1.5 sm:gap-3">
                  <div className="w-8 h-8 sm:w-10 sm:h-10 bg-white/10 shadow-[inset_0px_1px_1px_rgba(255,255,255,0.2)] rounded-xl sm:rounded-2xl flex items-center justify-center">
                    <Share2 className="w-4 h-4 sm:w-5 sm:h-5 text-white/80" />
                  </div>
                  <h3 className="text-[12px] sm:text-lg font-medium tracking-tight leading-none">Seamless connectivity</h3>
                  <p className="text-[9px] sm:text-[12px] text-white/60 leading-[1.3] sm:leading-relaxed font-medium">
                    WorkforceOS integrates effortlessly with Workforce Enterprise, unifying workflows and giving administrators real-time employee metrics.
                  </p>
                </div>

                <div className="flex flex-col gap-1.5 sm:gap-3">
                  <div className="w-8 h-8 sm:w-10 sm:h-10 bg-white/10 shadow-[inset_0px_1px_1px_rgba(255,255,255,0.2)] rounded-xl sm:rounded-2xl flex items-center justify-center">
                    <Users className="w-4 h-4 sm:w-5 sm:h-5 text-white/80" />
                  </div>
                  <h3 className="text-[12px] sm:text-lg font-medium tracking-tight leading-none">Employee self-service</h3>
                  <p className="text-[9px] sm:text-[12px] text-white/60 leading-[1.3] sm:leading-relaxed font-medium">
                    Reduce the burden of repetitive admin tasks by empowering agents with tools to view scheduling, swap shifts, and request PTO.
                  </p>
                </div>

              </div>
            </div>
          </motion.div>

          {/* Right Column - UI Showcase */}
          <motion.div variants={fadeInUp} className="bg-[#1A1A1A] rounded-[24px] sm:rounded-[48px] overflow-hidden relative flex-1 min-h-[180px] sm:min-h-[300px] lg:min-h-[440px] shrink-0">
             <img 
                src="https://images.unsplash.com/photo-1497215728101-856f4ea42174?q=80&w=1600&auto=format&fit=crop" 
                alt="Office plants"
                className="absolute inset-0 w-full h-full object-cover opacity-60 mix-blend-overlay"
              />
              <div className="absolute inset-0 bg-gradient-to-br from-black/20 to-black/80" />
              
              <div className="absolute inset-0 flex items-center justify-center p-2 sm:p-8 origin-center scale-[0.55] sm:scale-[0.8] md:scale-100">
                {/* Floating Image */}
                <motion.div 
                  animate={floatingAnim}
                  className="relative w-full max-w-[280px] aspect-[4/5] rounded-[24px] overflow-hidden shadow-2xl z-10"
                >
                   <img 
                    src="https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?q=80&w=800&auto=format&fit=crop" 
                    alt="User"
                    className="w-full h-full object-cover"
                  />
                </motion.div>

                {/* Floating Top UI */}
                <motion.div 
                  animate={{ ...floatingAnim, transition: { ...floatingAnim.transition, delay: 0.5 } }}
                  className="absolute top-12 sm:top-20 -left-4 sm:left-8 bg-white/90 backdrop-blur-md rounded-2xl p-4 shadow-xl border border-white/20 w-[240px] z-20"
                >
                  <p className="text-black text-xs font-semibold mb-3">Available agents</p>
                  <div className="h-2 w-full bg-gray-200 rounded-full mb-3" />
                  <div className="flex items-center gap-3 bg-white p-2 rounded-xl shadow-sm border border-gray-100">
                    <div className="w-8 h-8 rounded-full bg-gray-200 overflow-hidden">
                       <img src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=200&auto=format&fit=crop" alt="avatar" />
                    </div>
                    <div className="flex-1">
                      <div className="text-black text-xs font-semibold">Elger Frost</div>
                    </div>
                    <div className="bg-black text-white text-[10px] px-2 py-1 rounded">Highly likely</div>
                  </div>
                </motion.div>

                {/* Floating Bottom UI */}
                <motion.div 
                  animate={{ ...floatingAnim, transition: { ...floatingAnim.transition, delay: 1 } }}
                  className="absolute bottom-20 -right-4 sm:right-8 bg-white/90 backdrop-blur-md rounded-2xl p-4 shadow-xl border border-white/20 w-[220px] z-20 flex gap-3 items-center"
                >
                  <div className="bg-black text-white w-10 h-10 rounded-xl flex items-center justify-center font-serif italic font-bold text-lg">A</div>
                  <div>
                    <p className="text-black text-[10px] font-semibold text-gray-500 mb-0.5">Check-in <span className="font-normal opacity-70">8:15 AM</span></p>
                    <p className="text-black text-xs font-semibold">How is your shift today?</p>
                  </div>
                </motion.div>

                {/* Action button */}
                <motion.button 
                  whileHover={{ scale: 1.05 }}
                  className="absolute bottom-8 left-8 border border-white/30 hover:bg-white/10 transition-colors rounded-full px-5 py-2.5 text-sm flex items-center gap-2 z-20 whitespace-nowrap"
                >
                  Explore Workspace OS <ArrowRight className="w-4 h-4" />
                </motion.button>

              </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}

export default FeaturesSection;

import { motion } from 'motion/react';
import Counter from './Counter';

function PurposeSection() {
  return (
    <section id="purpose" className="bg-primary-black h-[100dvh] snap-start shrink-0 px-[5%] flex flex-col justify-center overflow-hidden py-4 sm:py-8">
      <div className="max-w-7xl mx-auto flex flex-col items-center w-full h-full">
        
        {/* Animated Title */}
        <div className="flex flex-col items-center mb-2 sm:mb-6 lg:mb-8 text-center shrink-0">
          <div className="overflow-hidden pb-1">
            <motion.h2 
              initial={{ y: "100%", opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: false, margin: "-50px" }}
              transition={{ delay: 0.1, duration: 0.6, ease: "easeOut" }}
              className="text-2xl sm:text-4xl md:text-5xl lg:text-[52px] font-medium leading-[1.1]"
            >
              Pioneering tools for
            </motion.h2>
          </div>
          <div className="overflow-hidden pb-1">
            <motion.h2 
              initial={{ y: "100%", opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: false, margin: "-50px" }}
              transition={{ delay: 0.2, duration: 0.6, ease: "easeOut" }}
              className="text-2xl sm:text-4xl md:text-5xl lg:text-[52px] font-medium leading-[1.1]"
            >
              the future <span className="serif-italic pr-2">Of Work</span>
            </motion.h2>
          </div>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, margin: "-50px" }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="text-white/60 text-center max-w-[500px] leading-relaxed mt-2 sm:mt-4 text-[10px] sm:text-[13px]"
          >
            Accelerated by a culture-shifting global pandemic, and empowered by rapid advancements in technology.
          </motion.p>
        </div>

        {/* Cards Grid */}
        <div className="flex flex-col md:grid md:grid-cols-3 gap-3 sm:gap-4 md:gap-6 w-full flex-1 min-h-0 mb-2">
          
          {[
            {
              stat: 84,
              quote: "Of employees agree it is important that their organization see them as a person.",
              title: "Recognizing the person",
              titleItalic: "behind every role.",
              desc: "Building workplaces where individuality and human connection drive engagement.",
              bgImg: "https://images.unsplash.com/photo-1448375240586-882707db888b?q=80&w=800&auto=format&fit=crop",
              img: "https://images.unsplash.com/photo-1511497584788-876760111969?q=80&w=800&auto=format&fit=crop"
            },
            {
              stat: 95,
              quote: "Of employees are reportedly impacted by digital friction.",
              title: "Reducing digital friction to",
              titleItalic: "empower productivity.",
              desc: "Streamlining workflows to help employees work smarter, not harder.",
              bgImg: "https://images.unsplash.com/photo-1513836279014-a89f7a76ae86?q=80&w=800&auto=format&fit=crop",
              img: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=800&auto=format&fit=crop"
            },
            {
              stat: 96,
              quote: "Of HR leaders are more concerned about employees' well-being today.",
              title: "Prioritizing people and",
              titleItalic: "well-being first.",
              desc: "Creating supportive environments with wellness and balance at the core.",
              bgImg: "https://images.unsplash.com/photo-1503756234508-e32369269deb?q=80&w=800&auto=format&fit=crop",
              img: "https://images.unsplash.com/photo-1506126613408-eca07ce68773?q=80&w=800&auto=format&fit=crop"
            }
          ].map((card, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, margin: "-50px" }}
              transition={{ delay: 0.5 + (i * 0.15), duration: 0.6 }}
              className="relative rounded-[16px] sm:rounded-[32px] overflow-hidden flex flex-col group p-2 sm:p-5 flex-1 min-h-0"
            >
              {/* Background Layer (unblurred edges) */}
              <img 
                src={card.bgImg} 
                alt="Background reference" 
                className="absolute inset-0 w-full h-full object-cover opacity-90"
              />
              <div className="absolute inset-0 bg-black/20" />

              {/* Glass Foreground Layer (Blurred interior box) */}
              <div className="relative z-10 flex flex-col p-2 sm:p-4 h-full bg-white/10 backdrop-blur-[32px] rounded-[12px] sm:rounded-[20px] border border-white/20">
                 
                 {/* Top section: Counter & Quote */}
                 <div className="mb-2 sm:mb-4 shrink-0 flex items-center md:items-start gap-3 md:gap-0 md:flex-col px-2 sm:px-3 pt-2 sm:pt-3">
                    <div className="text-[24px] sm:text-[42px] lg:text-[48px] font-medium leading-none tracking-tight md:mb-3">
                      <Counter value={card.stat} duration={1.5} />%
                    </div>
                    <p className="text-[9px] sm:text-[11px] text-white/80 leading-[1.2] font-medium">
                      {card.quote}
                    </p>
                 </div>

                 {/* Animated Inner Image (Fully flexible height) */}
                 <div className="relative w-full flex-1 min-h-0 rounded-lg sm:rounded-xl overflow-hidden mb-2 sm:mb-4">
                    <motion.img
                       initial={{ scale: 1.3, opacity: 0 }}
                       whileInView={{ scale: 1, opacity: 1 }}
                       transition={{ duration: 1.2, ease: "easeOut", delay: 0.2 + (i * 0.1) }}
                       viewport={{ once: false }}
                       src={card.img}
                       alt="Card visual"
                       className="w-full h-full object-cover"
                    />
                 </div>

                 {/* Bottom section: Title & Desc */}
                 <div className="shrink-0 min-w-0 px-2 sm:px-3 pb-2 sm:pb-3">
                   <h3 className="text-[11px] sm:text-[16px] lg:text-[18px] font-medium leading-tight tracking-tight mb-1">
                     {card.title} <span className="serif-italic">{card.titleItalic}</span>
                   </h3>
                   <p className="text-[9px] sm:text-[11px] text-white/60 leading-[1.2] font-medium line-clamp-2">
                     {card.desc}
                   </p>
                 </div>

              </div>
            </motion.div>
          ))}

        </div>
      </div>
    </section>
  );
}

export default PurposeSection;

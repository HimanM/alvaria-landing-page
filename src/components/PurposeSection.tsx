import { motion } from 'motion/react';
import Counter from './Counter';

function PurposeSection() {
  return (
    <section id="purpose" className="bg-primary-black h-[100dvh] snap-start shrink-0 px-[5%] flex flex-col justify-center overflow-hidden py-6 sm:py-10 lg:py-0">
      <div className="max-w-7xl mx-auto flex flex-col items-center w-full h-full max-h-full lg:h-auto lg:max-h-none">
        
        {/* Animated Title */}
        <div className="flex flex-col items-center mb-2 sm:mb-10 text-center shrink-0">
          <div className="overflow-hidden pb-1">
            <motion.h2 
              initial={{ y: "100%", opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: false, margin: "-50px" }}
              transition={{ delay: 0.1, duration: 0.6, ease: "easeOut" }}
              className="text-2xl sm:text-4xl md:text-5xl lg:text-[56px] font-medium leading-[1.1]"
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
              className="text-2xl sm:text-4xl md:text-5xl lg:text-[56px] font-medium leading-[1.1]"
            >
              the future <span className="serif-italic pr-2">Of Work</span>
            </motion.h2>
          </div>
        </div>
        
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, margin: "-50px" }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="text-white/60 text-center max-w-[500px] leading-relaxed mb-4 sm:mb-16 text-[10px] sm:text-[13px] shrink-0"
        >
          Accelerated by a culture-shifting global pandemic, and empowered by rapid advancements in technology.
        </motion.p>

        {/* Cards Grid */}
        <div className="flex flex-col md:grid md:grid-cols-3 gap-2 sm:gap-4 md:gap-6 w-full flex-1 lg:flex-none min-h-0 pb-4 sm:pb-0">
          
          {[
            {
              stat: 84,
              quote: "Of employees agree it is important that their organization see them as a person, not just an employee.",
              title: "Recognizing the person",
              titleItalic: "behind every role.",
              desc: "Building workplaces where individuality, respect, and human connection drive engagement and loyalty.",
              bgImg: "https://images.unsplash.com/photo-1448375240586-882707db888b?q=80&w=800&auto=format&fit=crop",
              img: "https://images.unsplash.com/photo-1511497584788-876760111969?q=80&w=800&auto=format&fit=crop"
            },
            {
              stat: 95,
              quote: "Of employees are reportedly impacted by digital friction.",
              title: "Reducing digital friction to",
              titleItalic: "empower productivity.",
              desc: "Streamlining workflows and simplifying digital experiences to help employees work smarter, not harder.",
              bgImg: "https://images.unsplash.com/photo-1513836279014-a89f7a76ae86?q=80&w=800&auto=format&fit=crop",
              img: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=800&auto=format&fit=crop"
            },
            {
              stat: 96,
              quote: "Of HR leaders are more concerned about employees' well-being today than they were before the pandemic.",
              title: "Prioritizing people and",
              titleItalic: "well-being first.",
              desc: "Creating supportive environments with wellness, balance, and belonging at the core of work culture.",
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
              className="relative rounded-[16px] sm:rounded-[32px] overflow-hidden flex flex-col group shrink-0 p-1 sm:p-3 flex-1 min-h-0"
            >
              {/* Background Layer (unblurred edges) */}
              <img 
                src={card.bgImg} 
                alt="Background reference" 
                className="absolute inset-0 w-full h-full object-cover opacity-90"
              />
              <div className="absolute inset-0 bg-black/20" />

              {/* Glass Foreground Layer (Blurred interior box) */}
              <div className="relative z-10 flex flex-col p-3 sm:p-8 h-full bg-white/10 backdrop-blur-[32px] rounded-[12px] sm:rounded-[20px] border border-white/20">
                 
                 {/* Top section: Counter & Quote */}
                 <div className="mb-2 sm:mb-6 shrink-0 flex items-center md:items-start gap-3 md:gap-0 md:flex-col">
                    <div className="text-[28px] sm:text-[56px] font-medium leading-none tracking-tight md:mb-4">
                      <Counter value={card.stat} duration={1.5} />%
                    </div>
                    <p className="text-[9px] sm:text-xs text-white/80 leading-[1.2] sm:leading-relaxed font-medium">
                      {card.quote}
                    </p>
                 </div>

                 {/* Animated Inner Image (Dynamic height to absorb space) */}
                 <div className="relative w-full flex-1 min-h-[30px] max-h-[80px] sm:max-h-[130px] rounded-lg sm:rounded-xl overflow-hidden mb-2 sm:mb-6 shrink-0 mt-auto">
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
                 <div className="shrink-0 min-w-0">
                   <h3 className="text-[12px] sm:text-xl font-medium leading-tight tracking-tight mb-0.5 sm:mb-2 truncate sm:whitespace-normal">
                     {card.title} <span className="serif-italic">{card.titleItalic}</span>
                   </h3>
                   <p className="text-[9px] sm:text-[11px] text-white/60 leading-[1.2] sm:leading-relaxed font-medium line-clamp-2 sm:line-clamp-none">
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

import { useEffect, useState, useRef } from 'react';
import { motion, useMotionValue, useTransform, useInView, animate } from 'motion/react';

function Counter({ value, duration = 1.5 }: { value: number, duration?: number }) {
  const ref = useRef<HTMLSpanElement>(null);
  const count = useMotionValue(1);
  const rounded = useTransform(count, Math.round);
  const inView = useInView(ref, { margin: "0px" });

  useEffect(() => {
    if (inView) {
      animate(count, value, { duration, ease: "easeOut" });
    } else {
      count.set(1);
    }
  }, [inView, count, value, duration]);

  return <motion.span ref={ref}>{rounded}</motion.span>;
}

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15
    }
  }
};

const floatingAnim = {
  y: ["-10px", "10px"],
  transition: {
    duration: 4,
    ease: "easeInOut",
    repeat: Infinity,
    repeatType: "reverse" as const
  }
};

export default Counter;

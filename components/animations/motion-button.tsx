'use client';

import { motion } from 'motion/react';

export function MotionButton() {
  return (
    <motion.button
      className="px-6 py-3 bg-white/10 text-white rounded-lg font-medium"
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      transition={{ type: "spring", stiffness: 400, damping: 10 }}
    >
      Hover over me
    </motion.button>
  );
}

export function PulsingButton() {
  return (
    <motion.button
      className="px-6 py-3 bg-white text-black rounded-lg font-medium"
      animate={{ 
        scale: [1, 1.05, 1],
        opacity: [1, 0.8, 1]
      }}
      transition={{ 
        duration: 2, 
        repeat: Infinity,
        ease: "easeInOut"
      }}
    >
      Pulsing
    </motion.button>
  );
}

export function SpringButton() {
  return (
    <motion.button
      className="px-6 py-3 bg-white/10 text-white rounded-lg font-medium"
      whileHover={{ 
        scale: 1.1,
        rotate: [0, -2, 2, -2, 0],
        transition: { duration: 0.3 }
      }}
      whileTap={{ 
        scale: 0.9,
        transition: { duration: 0.1 }
      }}
    >
      Hover over me
    </motion.button>
  );
}

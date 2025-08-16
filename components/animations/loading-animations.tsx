'use client';

import { motion } from 'motion/react';

export function SpinningLoader() {
  return (
    <motion.div
      className="w-8 h-8 border-2 border-white/30 border-t-white rounded-full"
      animate={{ rotate: 360 }}
      transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
    />
  );
}

export function DotsLoader() {
  return (
    <div className="flex space-x-1">
      {[0, 1, 2].map((i) => (
        <motion.div
          key={i}
          className="w-2 h-2 bg-white rounded-full"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.7, 1, 0.7]
          }}
          transition={{
            duration: 0.6,
            repeat: Infinity,
            delay: i * 0.2
          }}
        />
      ))}
    </div>
  );
}

export function PulseLoader() {
  return (
    <motion.div
      className="w-8 h-8 bg-white rounded-full"
      animate={{
        scale: [1, 1.2, 1],
        opacity: [1, 0.7, 1]
      }}
      transition={{
        duration: 1.5,
        repeat: Infinity,
        ease: "easeInOut"
      }}
    />
  );
}

export function ProgressBar() {
  return (
    <div className="w-32 h-2 bg-white/10 rounded-full overflow-hidden">
      <motion.div
        className="h-full bg-white rounded-full"
        initial={{ width: "0%" }}
        animate={{ width: "75%" }}
        transition={{
          duration: 2,
          repeat: Infinity,
          repeatType: "reverse",
          ease: "easeInOut"
        }}
      />
    </div>
  );
}

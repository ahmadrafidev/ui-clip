'use client';

import { motion } from 'motion/react';

export function SpinningLoader() {
  return (
    <motion.div
      className="w-8 h-8 border-3 border-gray-300 border-t-gray-800 rounded-full"
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
      className="w-8 h-8 bg-gray-700 rounded-full"
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

// Advanced Loaders
export function WaveLoader() {
  return (
    <div className="flex space-x-1 items-end">
      {[0, 1, 2, 3, 4].map((i) => (
        <motion.div
          key={i}
          className="w-1 bg-white rounded-full"
          animate={{
            height: [8, 24, 8],
          }}
          transition={{
            duration: 0.8,
            repeat: Infinity,
            delay: i * 0.1,
            ease: "easeInOut"
          }}
        />
      ))}
    </div>
  );
}

export function BounceLoader() {
  return (
    <div className="flex space-x-2">
      {[0, 1, 2].map((i) => (
        <motion.div
          key={i}
          className="w-3 h-3 bg-white rounded-full"
          animate={{
            y: [0, -16, 0],
          }}
          transition={{
            duration: 0.6,
            repeat: Infinity,
            delay: i * 0.1,
            ease: "easeInOut"
          }}
        />
      ))}
    </div>
  );
}

export function OrbitLoader() {
  return (
    <div className="relative w-12 h-12">
      <motion.div
        className="absolute w-3 h-3 bg-white rounded-full"
        style={{ 
          top: '50%', 
          left: '50%',
          marginTop: '-6px',
          marginLeft: '-6px'
        }}
        animate={{
          x: [0, 18, 0, -18, 0],
          y: [0, -18, 0, 18, 0],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "linear"
        }}
      />
      <motion.div
        className="absolute w-2 h-2 bg-white/70 rounded-full"
        style={{ 
          top: '50%', 
          left: '50%',
          marginTop: '-4px',
          marginLeft: '-4px'
        }}
        animate={{
          x: [0, -12, 0, 12, 0],
          y: [0, 12, 0, -12, 0],
        }}
        transition={{
          duration: 1.5,
          repeat: Infinity,
          ease: "linear"
        }}
      />
    </div>
  );
}

export function SquareLoader() {
  return (
    <motion.div
      className="w-8 h-8 border-2 border-white"
      animate={{
        rotate: [0, 90, 180, 270, 360],
        borderRadius: ["0%", "25%", "50%", "25%", "0%"],
      }}
      transition={{
        duration: 2,
        repeat: Infinity,
        ease: "easeInOut"
      }}
    />
  );
}

export function RingLoader() {
  return (
    <div className="relative w-10 h-10">
      {[0, 1, 2].map((i) => (
        <motion.div
          key={i}
          className="absolute inset-0 border-2 border-transparent border-t-white rounded-full"
          animate={{ rotate: 360 }}
          transition={{
            duration: 1.5 - i * 0.3,
            repeat: Infinity,
            ease: "linear"
          }}
          style={{
            transform: `scale(${1 - i * 0.2})`,
            opacity: 1 - i * 0.3
          }}
        />
      ))}
    </div>
  );
}

export function GridLoader() {
  return (
    <div className="grid grid-cols-3 gap-1">
      {Array.from({ length: 9 }, (_, i) => (
        <motion.div
          key={i}
          className="w-2 h-2 bg-white rounded-sm"
          animate={{
            scale: [0, 1, 0],
            opacity: [0, 1, 0]
          }}
          transition={{
            duration: 1.2,
            repeat: Infinity,
            delay: i * 0.1
          }}
        />
      ))}
    </div>
  );
}

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

// Additional Advanced Loaders
export function DNALoader() {
  return (
    <div className="relative w-12 h-8">
      {Array.from({ length: 8 }, (_, i) => (
        <motion.div
          key={i}
          className="absolute w-1 h-1 bg-white rounded-full"
          style={{
            left: `${i * 8}px`,
            top: '50%',
          }}
          animate={{
            y: [0, -12, 0, 12, 0],
            opacity: [0.3, 1, 0.3, 1, 0.3],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            delay: i * 0.1,
            ease: "easeInOut"
          }}
        />
      ))}
    </div>
  );
}

export function LiquidLoader() {
  return (
    <div className="relative w-12 h-12 bg-white/10 rounded-full overflow-hidden">
      <motion.div
        className="absolute bottom-0 left-0 right-0 bg-white rounded-full"
        animate={{
          height: ["20%", "80%", "20%"],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      <motion.div
        className="absolute inset-0 bg-gradient-to-t from-white/30 to-transparent"
        animate={{
          scale: [1, 1.1, 1],
          opacity: [0.5, 0.8, 0.5],
        }}
        transition={{
          duration: 1.5,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
    </div>
  );
}

export function ParticleLoader() {
  return (
    <div className="relative w-12 h-12">
      {Array.from({ length: 6 }, (_, i) => (
        <motion.div
          key={i}
          className="absolute w-2 h-2 bg-white rounded-full"
          style={{
            left: '50%',
            top: '50%',
            marginLeft: '-4px',
            marginTop: '-4px',
          }}
          animate={{
            x: [0, Math.cos(i * 60 * Math.PI / 180) * 20],
            y: [0, Math.sin(i * 60 * Math.PI / 180) * 20],
            scale: [0, 1, 0],
            opacity: [0, 1, 0],
          }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            delay: i * 0.1,
            ease: "easeOut"
          }}
        />
      ))}
    </div>
  );
}

export function TypewriterLoader() {
  const text = "Loading...";
  return (
    <div className="flex">
      {text.split('').map((char, i) => (
        <motion.span
          key={i}
          className="text-white font-mono"
          initial={{ opacity: 0 }}
          animate={{ opacity: [0, 1, 0] }}
          transition={{
            duration: 0.5,
            repeat: Infinity,
            delay: i * 0.1,
            repeatDelay: 2
          }}
        >
          {char}
        </motion.span>
      ))}
      <motion.span
        className="text-white font-mono ml-1"
        animate={{ opacity: [0, 1, 0] }}
        transition={{
          duration: 0.5,
          repeat: Infinity,
        }}
      >
        |
      </motion.span>
    </div>
  );
}

export function PendulumLoader() {
  return (
    <div className="flex space-x-1 items-end h-12">
      {Array.from({ length: 5 }, (_, i) => (
        <motion.div
          key={i}
          className="w-2 h-2 bg-white rounded-full"
          animate={{
            y: [0, -20, 0],
            x: i === 0 ? [-8, 8, -8] : i === 4 ? [8, -8, 8] : 0,
          }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            delay: i * 0.1,
            ease: "easeInOut"
          }}
        />
      ))}
    </div>
  );
}

export function SpiralLoader() {
  return (
    <div className="relative w-12 h-12">
      {Array.from({ length: 8 }, (_, i) => (
        <motion.div
          key={i}
          className="absolute w-1 h-1 bg-white rounded-full"
          style={{
            left: '50%',
            top: '50%',
            marginLeft: '-2px',
            marginTop: '-2px',
          }}
          animate={{
            x: [0, Math.cos(i * 45 * Math.PI / 180) * (16 - i * 2)],
            y: [0, Math.sin(i * 45 * Math.PI / 180) * (16 - i * 2)],
            opacity: [0, 1],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            delay: i * 0.2,
            ease: "easeInOut"
          }}
        />
      ))}
    </div>
  );
}

export function MatrixLoader() {
  return (
    <div className="grid grid-cols-4 gap-0.5 w-10 h-10">
      {Array.from({ length: 16 }, (_, i) => (
        <motion.div
          key={i}
          className="w-2 h-2 bg-white/20"
          animate={{
            backgroundColor: [
              'rgba(255,255,255,0.1)',
              'rgba(255,255,255,1)',
              'rgba(255,255,255,0.1)'
            ],
            scale: [0.5, 1, 0.5],
          }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            delay: (i % 4) * 0.1 + Math.floor(i / 4) * 0.2,
            ease: "easeInOut"
          }}
        />
      ))}
    </div>
  );
}

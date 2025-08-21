'use client';

import { motion } from 'motion/react';

export function TextSkeleton() {
  return (
    <div className="space-y-2 w-32">
      {[100, 80, 60].map((width, i) => (
        <motion.div
          key={i}
          className="h-3 bg-white/20 rounded"
          style={{ width: `${width}%` }}
          animate={{
            opacity: [0.4, 0.8, 0.4],
          }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            delay: i * 0.2,
            ease: "easeInOut"
          }}
        />
      ))}
    </div>
  );
}

export function CardSkeleton() {
  return (
    <div className="w-32 space-y-2">
      <motion.div
        className="h-16 bg-white/20 rounded"
        animate={{
          opacity: [0.4, 0.8, 0.4],
        }}
        transition={{
          duration: 1.5,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      <motion.div
        className="h-3 bg-white/20 rounded w-3/4"
        animate={{
          opacity: [0.4, 0.8, 0.4],
        }}
        transition={{
          duration: 1.5,
          repeat: Infinity,
          delay: 0.2,
          ease: "easeInOut"
        }}
      />
      <motion.div
        className="h-3 bg-white/20 rounded w-1/2"
        animate={{
          opacity: [0.4, 0.8, 0.4],
        }}
        transition={{
          duration: 1.5,
          repeat: Infinity,
          delay: 0.4,
          ease: "easeInOut"
        }}
      />
    </div>
  );
}

export function AvatarSkeleton() {
  return (
    <div className="flex items-center space-x-3">
      <motion.div
        className="w-8 h-8 bg-white/20 rounded-full"
        animate={{
          opacity: [0.4, 0.8, 0.4],
        }}
        transition={{
          duration: 1.5,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      <div className="space-y-1">
        <motion.div
          className="h-3 bg-white/20 rounded w-16"
          animate={{
            opacity: [0.4, 0.8, 0.4],
          }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            delay: 0.2,
            ease: "easeInOut"
          }}
        />
        <motion.div
          className="h-2 bg-white/20 rounded w-12"
          animate={{
            opacity: [0.4, 0.8, 0.4],
          }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            delay: 0.4,
            ease: "easeInOut"
          }}
        />
      </div>
    </div>
  );
}

export function WaveSkeleton() {
  return (
    <div className="space-y-2 w-32">
      {[0, 1, 2].map((i) => (
        <motion.div
          key={i}
          className="h-3 bg-gradient-to-r from-white/10 via-white/30 to-white/10 rounded"
          animate={{
            x: ['-100%', '100%'],
          }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            delay: i * 0.1,
            ease: "linear"
          }}
          style={{
            backgroundSize: '200% 100%',
          }}
        />
      ))}
    </div>
  );
}

export function ShimmerSkeleton() {
  return (
    <div className="w-32 h-20 bg-white/10 rounded overflow-hidden relative">
      <motion.div
        className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12"
        animate={{
          x: ['-100%', '100%'],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "linear"
        }}
      />
    </div>
  );
}

export function ListSkeleton() {
  return (
    <div className="space-y-3 w-32">
      {[0, 1, 2, 3].map((i) => (
        <div key={i} className="flex items-center space-x-2">
          <motion.div
            className="w-3 h-3 bg-white/20 rounded"
            animate={{
              opacity: [0.4, 0.8, 0.4],
            }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              delay: i * 0.1,
              ease: "easeInOut"
            }}
          />
          <motion.div
            className={`h-2 bg-white/20 rounded ${
              i === 0 ? 'w-20' : i === 1 ? 'w-16' : i === 2 ? 'w-18' : 'w-14'
            }`}
            animate={{
              opacity: [0.4, 0.8, 0.4],
            }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              delay: i * 0.1 + 0.2,
              ease: "easeInOut"
            }}
          />
        </div>
      ))}
    </div>
  );
}

export function CleanLineSkeleton() {
  return (
    <div className="space-y-2 w-32">
      {[100, 85, 70, 90].map((width, i) => (
        <motion.div
          key={i}
          className="h-px bg-white/15 rounded-full"
          style={{ width: `${width}%` }}
          animate={{
            opacity: [0.3, 0.6, 0.3],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            delay: i * 0.15,
            ease: "easeInOut"
          }}
        />
      ))}
    </div>
  );
}

export function MinimalBlockSkeleton() {
  return (
    <div className="w-32 space-y-3">
      <motion.div
        className="h-12 w-full bg-white/8 rounded-sm"
        animate={{
          opacity: [0.4, 0.7, 0.4],
        }}
        transition={{
          duration: 2.5,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      <div className="space-y-1.5">
        <motion.div
          className="h-1 w-3/4 bg-white/8 rounded-full"
          animate={{
            opacity: [0.3, 0.6, 0.3],
          }}
          transition={{
            duration: 2.5,
            repeat: Infinity,
            delay: 0.3,
            ease: "easeInOut"
          }}
        />
        <motion.div
          className="h-1 w-1/2 bg-white/8 rounded-full"
          animate={{
            opacity: [0.3, 0.6, 0.3],
          }}
          transition={{
            duration: 2.5,
            repeat: Infinity,
            delay: 0.5,
            ease: "easeInOut"
          }}
        />
      </div>
    </div>
  );
}

export function SubtleShimmerSkeleton() {
  return (
    <div className="w-32 h-16 bg-white/6 rounded overflow-hidden relative">
      <motion.div
        className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent"
        animate={{
          x: ['-100%', '100%'],
        }}
        transition={{
          duration: 2.5,
          repeat: Infinity,
          ease: "linear"
        }}
      />
    </div>
  );
}

export function DotMatrixSkeleton() {
  const dots = Array.from({ length: 12 }, (_, i) => i);
  
  return (
    <div className="grid grid-cols-4 gap-1.5 w-fit">
      {dots.map((i) => (
        <motion.div
          key={i}
          className="w-2 h-2 bg-white/15 rounded-full"
          animate={{
            opacity: [0.2, 0.8, 0.2],
            scale: [0.8, 1, 0.8],
          }}
          transition={{
            duration: 1.8,
            repeat: Infinity,
            delay: (i % 4) * 0.1 + Math.floor(i / 4) * 0.15,
            ease: "easeInOut"
          }}
        />
      ))}
    </div>
  );
}

export function FlowingSkeleton() {
  return (
    <div className="space-y-2 w-32">
      {[0, 1, 2].map((i) => (
        <div key={i} className="h-2 bg-white/6 rounded-full overflow-hidden relative">
          <motion.div
            className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
            animate={{
              x: ['-50%', '150%'],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              delay: i * 0.2,
              ease: "easeInOut"
            }}
          />
        </div>
      ))}
    </div>
  );
}

export function MinimalProfileSkeleton() {
  return (
    <div className="flex items-center space-x-2">
      <motion.div
        className="w-6 h-6 bg-white/10 rounded-full"
        animate={{
          opacity: [0.4, 0.7, 0.4],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      <div className="space-y-1">
        <motion.div
          className="h-1.5 w-16 bg-white/10 rounded-full"
          animate={{
            opacity: [0.3, 0.6, 0.3],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            delay: 0.2,
            ease: "easeInOut"
          }}
        />
        <motion.div
          className="h-1 w-10 bg-white/8 rounded-full"
          animate={{
            opacity: [0.3, 0.6, 0.3],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            delay: 0.4,
            ease: "easeInOut"
          }}
        />
      </div>
    </div>
  );
}

export function VerticalBars() {
  const bars = [0, 1, 2, 3, 4];
  
  return (
    <div className="flex items-end space-x-1 h-8">
      {bars.map((i) => (
        <motion.div
          key={i}
          className="w-1.5 bg-white/15 rounded-t-sm"
          animate={{
            height: ['20%', '60%', '40%', '80%', '30%'],
            opacity: [0.4, 0.8, 0.6, 0.9, 0.5],
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

export function RefinedWaveSkeleton() {
  return (
    <div className="w-32 h-8 bg-white/5 rounded overflow-hidden relative">
      <motion.div
        className="absolute inset-0"
        style={{
          background: 'linear-gradient(90deg, transparent 0%, rgba(255,255,255,0.08) 20%, rgba(255,255,255,0.12) 50%, rgba(255,255,255,0.08) 80%, transparent 100%)'
        }}
        animate={{
          x: ['-100%', '100%'],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
    </div>
  );
}

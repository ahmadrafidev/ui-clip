'use client';

import { motion } from 'motion/react';
import { useState, useEffect } from 'react';

export function CircularProgress() {
  return (
    <div className="relative w-12 h-12">
      <svg className="w-12 h-12 -rotate-90" viewBox="0 0 36 36">
        <path
          className="stroke-white/20"
          fill="none"
          strokeWidth="3"
          d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
        />
        <motion.path
          className="stroke-white"
          fill="none"
          strokeWidth="3"
          strokeLinecap="round"
          d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
          initial={{ strokeDasharray: "0 100" }}
          animate={{ strokeDasharray: "75 100" }}
          transition={{
            duration: 2,
            repeat: Infinity,
            repeatType: "reverse",
            ease: "easeInOut"
          }}
        />
      </svg>
      <div className="absolute inset-0 flex items-center justify-center">
        <motion.span 
          className="text-xs font-semibold text-white"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          75%
        </motion.span>
      </div>
    </div>
  );
}

export function AnimatedCounter() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCount(prev => (prev >= 100 ? 0 : prev + 1));
    }, 50);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex items-center space-x-2">
      <motion.div
        className="text-2xl font-bold text-white"
        key={count}
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.3, ease: "easeOut" }}
      >
        {count}%
      </motion.div>
      <motion.div
        className="w-16 h-2 bg-white/20 rounded-full overflow-hidden"
      >
        <motion.div
          className="h-full bg-white rounded-full"
          animate={{ width: `${count}%` }}
          transition={{ duration: 0.3, ease: "easeOut" }}
        />
      </motion.div>
    </div>
  );
}

export function RadialProgress() {
  return (
    <div className="relative w-16 h-16">
      <svg className="w-16 h-16 -rotate-90" viewBox="0 0 36 36">
        <path
          className="stroke-white/10"
          fill="none"
          strokeWidth="2"
          d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
        />
        <motion.path
          className="stroke-white"
          fill="none"
          strokeWidth="2"
          strokeLinecap="round"
          d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
          initial={{ strokeDasharray: "0 100" }}
          animate={{ 
            strokeDasharray: ["0 100", "25 100", "50 100", "75 100", "100 100", "75 100", "50 100", "25 100"]
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "linear"
          }}
        />
      </svg>
      <motion.div 
        className="absolute inset-0 flex items-center justify-center"
        animate={{ rotate: 360 }}
        transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
      >
        <div className="w-2 h-2 bg-white rounded-full" />
      </motion.div>
    </div>
  );
}

export function MultiStepProgress() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress(prev => (prev >= 100 ? 0 : prev + 2));
    }, 100);
    return () => clearInterval(interval);
  }, []);

  const getStepColor = (stepIndex: number) => {
    const stepProgress = (progress - stepIndex * 25) / 25;
    if (stepProgress <= 0) return 'bg-white/20';
    if (stepProgress >= 1) return 'bg-white';
    return 'bg-white/60';
  };

  return (
    <div className="space-y-2 w-32">
      {Array.from({ length: 4 }, (_, i) => (
        <div key={i} className="flex items-center space-x-2">
          <motion.div
            className={`w-3 h-3 rounded-full ${getStepColor(i)}`}
            animate={{
              scale: progress >= i * 25 && progress < (i + 1) * 25 ? [1, 1.3, 1] : 1
            }}
            transition={{ duration: 0.5, repeat: progress >= i * 25 && progress < (i + 1) * 25 ? Infinity : 0 }}
          />
          <div className="flex-1 h-1 bg-white/20 rounded-full overflow-hidden">
            <motion.div
              className="h-full bg-white rounded-full"
              animate={{
                width: `${Math.max(0, Math.min(100, (progress - i * 25) * 4))}%`
              }}
              transition={{ duration: 0.3, ease: "easeOut" }}
            />
          </div>
        </div>
      ))}
    </div>
  );
}

// Additional Advanced Progress Animations
export function LiquidProgress() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress(prev => (prev >= 100 ? 0 : prev + 1));
    }, 80);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-32 h-8 bg-white/10 rounded-full overflow-hidden">
      <motion.div
        className="absolute bottom-0 left-0 bg-white"
        style={{ width: `${progress}%`, height: '100%' }}
        animate={{
          borderRadius: ["0 50% 50% 0", "0 20% 20% 0", "0 50% 50% 0"],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      <motion.div
        className="absolute inset-0"
        animate={{
          background: [
            'linear-gradient(90deg, transparent 0%, rgba(255,255,255,0.3) 50%, transparent 100%)',
            'linear-gradient(90deg, transparent 40%, rgba(255,255,255,0.3) 90%, transparent 100%)',
            'linear-gradient(90deg, transparent 0%, rgba(255,255,255,0.3) 50%, transparent 100%)',
          ]
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: "linear"
        }}
      />
      <div className="absolute inset-0 flex items-center justify-center">
        <span className="text-xs font-semibold text-black/70">
          {progress}%
        </span>
      </div>
    </div>
  );
}

export function HeartbeatProgress() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress(prev => (prev >= 100 ? 0 : prev + 2));
    }, 100);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-32 h-4 bg-white/10 rounded-full overflow-hidden">
      <motion.div
        className="h-full bg-white rounded-full"
        style={{ width: `${progress}%` }}
        animate={{
          scaleY: [1, 1.5, 1, 1.8, 1],
          opacity: [0.7, 1, 0.7, 1, 0.7],
        }}
        transition={{
          duration: 1.2,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      <motion.div
        className="absolute right-0 top-0 w-2 h-full bg-white/50"
        animate={{
          scaleX: [0.5, 2, 0.5, 2.5, 0.5],
          x: [0, -4, 0, -6, 0],
        }}
        transition={{
          duration: 1.2,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
    </div>
  );
}

export function WaveProgress() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress(prev => (prev >= 100 ? 0 : prev + 1.5));
    }, 80);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-32 h-6 bg-white/10 rounded-lg overflow-hidden">
      <motion.div
        className="absolute bottom-0 left-0 bg-white"
        style={{ width: `${progress}%`, height: '100%' }}
      />
      <svg 
        className="absolute inset-0 w-full h-full"
        viewBox="0 0 128 24"
        preserveAspectRatio="none"
      >
        <motion.path
          d="M0,12 Q16,4 32,12 T64,12 T96,12 T128,12 L128,24 L0,24 Z"
          fill="rgba(255,255,255,0.8)"
          animate={{
            d: [
              "M0,12 Q16,4 32,12 T64,12 T96,12 T128,12 L128,24 L0,24 Z",
              "M0,12 Q16,20 32,12 T64,12 T96,12 T128,12 L128,24 L0,24 Z",
              "M0,12 Q16,4 32,12 T64,12 T96,12 T128,12 L128,24 L0,24 Z",
            ]
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          clipPath={`inset(0 ${100 - progress}% 0 0)`}
        />
      </svg>
    </div>
  );
}

export function MorphingProgress() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress(prev => (prev >= 100 ? 0 : prev + 1));
    }, 100);
    return () => clearInterval(interval);
  }, []);

  const getShape = () => {
    if (progress < 25) return 'rounded-none';
    if (progress < 50) return 'rounded-sm';
    if (progress < 75) return 'rounded-lg';
    return 'rounded-full';
  };

  return (
    <div className="relative w-32 h-6 bg-white/10 rounded-full overflow-hidden">
      <motion.div
        className={`h-full bg-white ${getShape()}`}
        style={{ width: `${progress}%` }}
        animate={{
          borderRadius: progress < 25 ? 0 : progress < 50 ? 4 : progress < 75 ? 12 : 24,
        }}
        transition={{
          duration: 0.3,
          ease: "easeInOut"
        }}
      />
      <motion.div
        className="absolute inset-0 flex items-center justify-center"
        animate={{
          scale: [1, 1.05, 1],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      >
        <span className="text-xs font-bold text-black/80">
          {Math.round(progress)}%
        </span>
      </motion.div>
    </div>
  );
}

export function GlowProgress() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress(prev => (prev >= 100 ? 0 : prev + 0.8));
    }, 50);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-32 h-3 bg-white/10 rounded-full overflow-hidden">
      <motion.div
        className="h-full bg-white rounded-full relative"
        style={{ width: `${progress}%` }}
        animate={{
          boxShadow: [
            '0 0 10px rgba(255,255,255,0.5)',
            '0 0 20px rgba(255,255,255,0.8)',
            '0 0 10px rgba(255,255,255,0.5)',
          ]
        }}
        transition={{
          duration: 1.5,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      <motion.div
        className="absolute right-0 top-0 w-6 h-full bg-gradient-to-l from-white to-transparent"
        animate={{
          opacity: [0.5, 1, 0.5],
          scaleX: [0.8, 1.2, 0.8],
        }}
        transition={{
          duration: 1,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
    </div>
  );
}

export function SegmentedProgress() {
  const [progress, setProgress] = useState(0);
  const segments = 10;

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress(prev => (prev >= 100 ? 0 : prev + 2));
    }, 120);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex space-x-1 w-32">
      {Array.from({ length: segments }, (_, i) => {
        const segmentProgress = (progress - (i * 10)) / 10;
        const isActive = segmentProgress > 0;
        const fillLevel = Math.min(1, Math.max(0, segmentProgress));
        
        return (
          <div key={i} className="flex-1 h-3 bg-white/10 rounded-sm overflow-hidden">
            <motion.div
              className="h-full bg-white rounded-sm"
              initial={{ height: '0%' }}
              animate={{ 
                height: isActive ? `${fillLevel * 100}%` : '0%',
                opacity: isActive ? 1 : 0.3,
              }}
              transition={{
                duration: 0.3,
                ease: "easeOut"
              }}
            />
          </div>
        );
      })}
    </div>
  );
}

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

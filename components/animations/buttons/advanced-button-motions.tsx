'use client';

import { motion, useMotionValue, useSpring } from 'motion/react';
import { useState, useRef } from 'react';

/**
 * Magnetic Button - Follows cursor with smooth magnetic effect
 */
export function MagneticButton() {
  const buttonRef = useRef<HTMLButtonElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  
  const springX = useSpring(x, { stiffness: 300, damping: 30 });
  const springY = useSpring(y, { stiffness: 300, damping: 30 });

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!buttonRef.current) return;
    
    const rect = buttonRef.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    
    const magnetStrength = 0.3;
    x.set((e.clientX - centerX) * magnetStrength);
    y.set((e.clientY - centerY) * magnetStrength);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.button
      ref={buttonRef}
      className="px-8 py-4 bg-gradient-to-r from-gray-700 to-gray-900 text-white rounded-xl font-semibold shadow-lg border border-gray-600"
      style={{ x: springX, y: springY }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      whileTap={{ scale: 0.95 }}
      transition={{ type: "spring", stiffness: 400, damping: 25 }}
    >
      Magnetic Button
    </motion.button>
  );
}

/**
 * Gradient Shift Button - Dynamic gradient animation
 */
export function GradientShiftButton() {
  return (
    <motion.button
      className="relative px-8 py-4 text-white font-semibold rounded-lg overflow-hidden border border-gray-600"
      whileHover="hover"
      whileTap={{ scale: 0.95 }}
    >
      <motion.div
        className="absolute inset-0 bg-gradient-to-r from-gray-800 via-gray-600 to-gray-400"
        variants={{
          hover: {
            backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
          }
        }}
        transition={{
          backgroundPosition: {
            duration: 3,
            repeat: Infinity,
            ease: "linear"
          }
        }}
        style={{ backgroundSize: "200% 200%" }}
      />
      <motion.div
        className="absolute inset-0 bg-gradient-to-r from-gray-600 to-gray-500 opacity-0"
        variants={{
          hover: { opacity: [0, 1, 0] }
        }}
        transition={{ duration: 2, repeat: Infinity }}
      />
      <span className="relative z-10">Gradient Shift</span>
    </motion.button>
  );
}

/**
 * Morphing Button - Changes shape and content
 */
export function MorphingButton() {
  const [morphState, setMorphState] = useState<'play' | 'pause' | 'stop'>('play');

  const nextState = () => {
    setMorphState(current => {
      switch (current) {
        case 'play': return 'pause';
        case 'pause': return 'stop';
        case 'stop': return 'play';
        default: return 'play';
      }
    });
  };

  const getButtonConfig = () => {
    switch (morphState) {
      case 'play':
        return { color: 'bg-gray-700', shape: 'rounded-lg', icon: '▶️', text: 'Play' };
      case 'pause':
        return { color: 'bg-gray-600', shape: 'rounded-2xl', icon: '⏸️', text: 'Pause' };
      case 'stop':
        return { color: 'bg-gray-800', shape: 'rounded-full', icon: '⏹️', text: 'Stop' };
    }
  };

  const config = getButtonConfig();

  return (
    <motion.button
      className={`px-8 py-4 text-white font-semibold border border-gray-500 ${config.color} ${config.shape}`}
      onClick={nextState}
      layout
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      transition={{ type: "spring", stiffness: 300, damping: 25 }}
    >
      <motion.span layout className="flex items-center gap-2">
        <span>{config.icon}</span>
        <span>{config.text}</span>
      </motion.span>
    </motion.button>
  );
}

/**
 * 3D Flip Button - Rotates in 3D space
 */
export function FlipButton() {
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <div style={{ perspective: "1000px" }}>
      <motion.button
        className="relative w-32 h-12"
        onHoverStart={() => setIsFlipped(true)}
        onHoverEnd={() => setIsFlipped(false)}
        animate={{ 
          rotateY: isFlipped ? 180 : 0,
          scale: isFlipped ? 1.05 : 1
        }}
        transition={{ 
          duration: 0.8, 
          ease: [0.25, 0.46, 0.45, 0.94],
          type: "spring",
          stiffness: 200,
          damping: 20
        }}
        style={{ 
          transformStyle: "preserve-3d",
          transformOrigin: "center center"
        }}
        whileTap={{ scale: 0.95 }}
      >
        {/* Front side */}
        <motion.div 
          className="absolute inset-0 bg-gray-700 text-white rounded-lg flex items-center justify-center font-semibold border border-gray-600 shadow-lg"
          style={{ 
            backfaceVisibility: "hidden",
            WebkitBackfaceVisibility: "hidden"
          }}
          animate={{
            boxShadow: isFlipped 
              ? "0 8px 32px rgba(0, 0, 0, 0.3)" 
              : "0 4px 16px rgba(0, 0, 0, 0.2)"
          }}
        >
          Hover me
        </motion.div>
        
        {/* Back side */}
        <motion.div 
          className="absolute inset-0 bg-gray-800 text-white rounded-lg flex items-center justify-center font-semibold border border-gray-600 shadow-lg"
          style={{ 
            transform: "rotateY(180deg)",
            backfaceVisibility: "hidden",
            WebkitBackfaceVisibility: "hidden"
          }}
          animate={{
            boxShadow: isFlipped 
              ? "0 8px 32px rgba(0, 0, 0, 0.3)" 
              : "0 4px 16px rgba(0, 0, 0, 0.2)"
          }}
        >
          Flipped! ✨
        </motion.div>
      </motion.button>
    </div>
  );
}

/**
 * Elastic Button - Extreme elastic deformation
 */
export function ElasticButton() {
  return (
    <motion.button
      className="px-8 py-4 bg-gray-700 text-white font-semibold rounded-lg border border-gray-600"
      whileHover={{
        scaleX: [1, 1.2, 0.8, 1.1, 1],
        scaleY: [1, 0.8, 1.2, 0.9, 1],
      }}
      whileTap={{
        scaleX: 0.9,
        scaleY: 1.1,
      }}
      transition={{
        scaleX: { duration: 0.6, ease: "easeInOut" },
        scaleY: { duration: 0.6, ease: "easeInOut" },
      }}
    >
      Elastic Button
    </motion.button>
  );
}

/**
 * Ripple Effect Button - Water ripple on click
 */
export function RippleButton() {
  const [ripples, setRipples] = useState<Array<{ id: number; x: number; y: number }>>([]);

  const createRipple = (e: React.MouseEvent) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    const newRipple = { id: Date.now(), x, y };
    setRipples(prev => [...prev, newRipple]);
    
    setTimeout(() => {
      setRipples(prev => prev.filter(ripple => ripple.id !== newRipple.id));
    }, 600);
  };

  return (
    <motion.button
      className="relative px-8 py-4 bg-gray-600 text-white font-semibold rounded-lg overflow-hidden border border-gray-500"
      onClick={createRipple}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
    >
      <span className="relative z-10">Ripple Effect</span>
      
      {ripples.map(ripple => (
        <motion.div
          key={ripple.id}
          className="absolute bg-white/30 rounded-full pointer-events-none"
          style={{
            left: ripple.x,
            top: ripple.y,
          }}
          initial={{
            width: 0,
            height: 0,
            x: "-50%",
            y: "-50%",
            opacity: 1,
          }}
          animate={{
            width: 200,
            height: 200,
            opacity: 0,
          }}
          transition={{
            duration: 0.6,
            ease: "easeOut",
          }}
        />
      ))}
    </motion.button>
  );
}

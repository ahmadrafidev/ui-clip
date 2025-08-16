'use client';

import { motion, useAnimation } from 'motion/react';

export function MotionButton() {
  return (
    <motion.button
      className="px-6 py-3 bg-gray-800 text-white rounded-lg font-medium border border-gray-600"
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
      className="px-6 py-3 bg-white text-black rounded-lg font-medium border border-gray-300"
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
      className="px-6 py-3 bg-gray-700 text-white rounded-lg font-medium border border-gray-500"
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

/**
 * Shimmer Button - Light sweep effect
 */
export function ShimmerButton() {
  return (
    <motion.button
      className="relative px-8 py-4 bg-gray-900 text-white font-semibold rounded-lg overflow-hidden border border-gray-700"
      whileHover="hover"
      whileTap={{ scale: 0.95 }}
    >
      <motion.div
        className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12"
        variants={{
          hover: {
            x: ["-100%", "100%"],
          }
        }}
        transition={{
          x: {
            duration: 0.8,
            ease: "easeInOut"
          }
        }}
        initial={{ x: "-100%" }}
      />
      <span className="relative z-10">Shimmer Effect</span>
    </motion.button>
  );
}

/**
 * Bounce Button - Playful bounce animation
 */
export function BounceButton() {
  const controls = useAnimation();

  const handleClick = () => {
    controls.start({
      y: [0, -20, 5, -10, 2, 0],
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    });
  };

  return (
    <motion.button
      className="px-8 py-4 bg-gray-800 text-white font-semibold rounded-full border border-gray-600"
      animate={controls}
      onClick={handleClick}
      whileHover={{ 
        scale: 1.05,
        boxShadow: "0 8px 25px rgba(0, 0, 0, 0.4)"
      }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
    >
      Bounce Me!
    </motion.button>
  );
}

/**
 * Rotate Scale Button - Rotation with scaling
 */
export function RotateScaleButton() {
  return (
    <motion.button
      className="px-8 py-4 bg-gray-600 text-white font-semibold rounded-lg border border-gray-500"
      whileHover={{
        scale: 1.1,
        rotate: 360,
      }}
      whileTap={{
        scale: 0.9,
        rotate: -90,
      }}
      transition={{
        type: "spring",
        stiffness: 300,
        damping: 20
      }}
    >
      Rotate & Scale
    </motion.button>
  );
}

/**
 * Wave Button - Ripple wave effect
 */
export function WaveButton() {
  return (
    <motion.button
      className="relative px-8 py-4 bg-gray-800 text-white font-semibold rounded-lg overflow-hidden border border-gray-600"
      whileHover="hover"
      whileTap={{ scale: 0.95 }}
    >
      <motion.div
        className="absolute inset-0 bg-gradient-to-r from-gray-700 to-gray-500"
        variants={{
          hover: {
            x: ["-100%", "100%"],
            skewX: [45, -45, 45],
          }
        }}
        transition={{
          duration: 1.2,
          ease: "easeInOut",
          repeat: Infinity,
        }}
        initial={{ x: "-100%" }}
      />
      <span className="relative z-10">Wave Motion</span>
    </motion.button>
  );
}

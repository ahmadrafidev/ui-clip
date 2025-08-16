'use client';

import { AnimationGrid } from "./animation-grid";
import { 
  MotionButton, 
  PulsingButton, 
  SpringButton,
  ShimmerButton,
  BounceButton,
  RotateScaleButton,
  WaveButton
} from "./animations/buttons/motion-button";
import {
  MagneticButton,
  GradientShiftButton,
  MorphingButton,
  FlipButton,
  ElasticButton,
  RippleButton
} from "./animations/buttons/advanced-button-motions";
import { SpinningLoader, DotsLoader, PulseLoader, ProgressBar } from "./animations/loaders/loading-animations";
import { ANIMATION_CATEGORIES, type Animation } from "./animations";

const createAnimation = (
  id: string,
  title: string,
  description: string,
  category: string,
  component: () => React.ReactElement,
  code: string
): Animation => ({
  id,
  title,
  description,
  category,
  component,
  code,
});

const animationCodes = {
  motionButton: `import { motion } from 'motion/react';

<motion.button
  className="px-6 py-3 bg-gray-800 text-white rounded-lg font-medium border border-gray-600"
  whileHover={{ scale: 1.05 }}
  whileTap={{ scale: 0.95 }}
  transition={{ type: "spring", stiffness: 400, damping: 10 }}
>
  Hover over me
</motion.button>`,

  pulsingButton: `import { motion } from 'motion/react';

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
</motion.button>`,

  springButton: `import { motion } from 'motion/react';

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
</motion.button>`,

  shimmerButton: `import { motion } from 'motion/react';

<motion.button
  className="relative px-8 py-4 bg-gray-900 text-white font-semibold rounded-lg overflow-hidden border border-gray-700"
  whileHover="hover"
  whileTap={{ scale: 0.95 }}
>
  <motion.div
    className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12"
    variants={{
      hover: { x: ["-100%", "100%"] }
    }}
    transition={{ x: { duration: 0.8, ease: "easeInOut" } }}
    initial={{ x: "-100%" }}
  />
  <span className="relative z-10">Shimmer Effect</span>
</motion.button>`,

  bounceButton: `import { motion, useAnimation } from 'motion/react';

export function BounceButton() {
  const controls = useAnimation();
  
  const handleClick = () => {
    controls.start({
      y: [0, -20, 5, -10, 2, 0],
      transition: { duration: 0.6, ease: "easeOut" }
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
}`,

  rotateScaleButton: `import { motion } from 'motion/react';

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
</motion.button>`,

  waveButton: `import { motion } from 'motion/react';

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
</motion.button>`,

  gradientShiftButton: `import { motion } from 'motion/react';

<motion.button
  className="relative px-8 py-4 text-white font-semibold rounded-lg overflow-hidden border border-gray-600"
  whileHover="hover"
>
  <motion.div
    className="absolute inset-0 bg-gradient-to-r from-gray-800 via-gray-600 to-gray-400"
    variants={{
      hover: {
        backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
      }
    }}
    style={{ backgroundSize: "200% 200%" }}
  />
  <span className="relative z-10">Gradient Shift</span>
</motion.button>`,

  morphingButton: `import { motion } from 'motion/react';
import { useState } from 'react';

export function MorphingButton() {
  const [morphState, setMorphState] = useState('play');

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

  return (
    <motion.button
      className={\`px-8 py-4 text-white font-semibold border border-gray-500 \${config.color} \${config.shape}\`}
      onClick={() => /* cycle states */}
      layout
      whileHover={{ scale: 1.05 }}
    >
      <span className="flex items-center gap-2">
        <span>{config.icon}</span>
        <span>{config.text}</span>
      </span>
    </motion.button>
  );
}`,

  flipButton: `import { motion } from 'motion/react';
import { useState } from 'react';

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
      >
        <motion.div 
          className="absolute inset-0 bg-gray-700 text-white rounded-lg flex items-center justify-center font-semibold border border-gray-600 shadow-lg"
          style={{ 
            backfaceVisibility: "hidden",
            WebkitBackfaceVisibility: "hidden"
          }}
        >
          Hover me
        </motion.div>
        
        <motion.div 
          className="absolute inset-0 bg-gray-800 text-white rounded-lg flex items-center justify-center font-semibold border border-gray-600 shadow-lg"
          style={{ 
            transform: "rotateY(180deg)",
            backfaceVisibility: "hidden",
            WebkitBackfaceVisibility: "hidden"
          }}
        >
          Flipped! ✨
        </motion.div>
      </motion.button>
    </div>
  );
}`,

  magneticButton: `import { motion, useMotionValue, useSpring } from 'motion/react';
import { useRef } from 'react';

export function MagneticButton() {
  const buttonRef = useRef(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const springX = useSpring(x, { stiffness: 300, damping: 30 });
  const springY = useSpring(y, { stiffness: 300, damping: 30 });

  const handleMouseMove = (e) => {
    if (!buttonRef.current) return;
    const rect = buttonRef.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    const magnetStrength = 0.3;
    x.set((e.clientX - centerX) * magnetStrength);
    y.set((e.clientY - centerY) * magnetStrength);
  };

  return (
    <motion.button
      ref={buttonRef}
      className="px-8 py-4 bg-gradient-to-r from-gray-700 to-gray-900 text-white rounded-xl font-semibold shadow-lg border border-gray-600"
      style={{ x: springX, y: springY }}
      onMouseMove={handleMouseMove}
      onMouseLeave={() => { x.set(0); y.set(0); }}
    >
      Magnetic Button
    </motion.button>
  );
}`,

  elasticButton: `import { motion } from 'motion/react';

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
</motion.button>`,

  rippleButton: `import { motion } from 'motion/react';
import { useState } from 'react';

export function RippleButton() {
  const [ripples, setRipples] = useState([]);

  const createRipple = (e) => {
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
          style={{ left: ripple.x, top: ripple.y }}
          initial={{ width: 0, height: 0, x: "-50%", y: "-50%", opacity: 1 }}
          animate={{ width: 200, height: 200, opacity: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        />
      ))}
    </motion.button>
  );
}`,

  spinningLoader: `import { motion } from 'motion/react';

<motion.div
  className="w-8 h-8 border-2 border-gray-300 border-t-gray-800 rounded-full"
  animate={{ rotate: 360 }}
  transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
/>`,

  dotsLoader: `import { motion } from 'motion/react';

<div className="flex space-x-1">
  {[0, 1, 2].map((i) => (
    <motion.div
      key={i}
      className="w-2 h-2 bg-gray-700 rounded-full"
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
</div>`,

  pulseLoader: `import { motion } from 'motion/react';

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
/>`,

  progressBar: `import { motion } from 'motion/react';

<div className="w-32 h-2 bg-gray-200 rounded-full overflow-hidden">
  <motion.div
    className="h-full bg-gray-800 rounded-full"
    initial={{ width: "0%" }}
    animate={{ width: "75%" }}
    transition={{
      duration: 2,
      repeat: Infinity,
      repeatType: "reverse",
      ease: "easeInOut"
    }}
  />
</div>`
};

const sampleAnimations: Animation[] = [
  // Button Animations
  createAnimation(
    'hover-scale',
    'Motion Button',
    'Spring-based hover scaling effect',
    ANIMATION_CATEGORIES.BUTTONS,
    MotionButton,
    animationCodes.motionButton
  ),
  createAnimation(
    'pulse-button',
    'Pulsing Button', 
    'Continuous pulse animation with opacity change',
    ANIMATION_CATEGORIES.BUTTONS,
    PulsingButton,
    animationCodes.pulsingButton
  ),
  createAnimation(
    'spring-button',
    'Spring Button',
    'Wobble effect with rotation on hover',
    ANIMATION_CATEGORIES.BUTTONS,
    SpringButton,
    animationCodes.springButton
  ),
  createAnimation(
    'shimmer-button',
    'Shimmer Button',
    'Light sweep effect across the surface',
    ANIMATION_CATEGORIES.BUTTONS,
    ShimmerButton,
    animationCodes.shimmerButton
  ),
  createAnimation(
    'bounce-button',
    'Bounce Button',
    'Playful bounce animation on click',
    ANIMATION_CATEGORIES.BUTTONS,
    BounceButton,
    animationCodes.bounceButton
  ),
  createAnimation(
    'rotate-scale-button',
    'Rotate Scale Button',
    '360° rotation with scaling effect',
    ANIMATION_CATEGORIES.BUTTONS,
    RotateScaleButton,
    animationCodes.rotateScaleButton
  ),
  createAnimation(
    'wave-button',
    'Wave Button',
    'Ripple wave effect with skew animation',
    ANIMATION_CATEGORIES.BUTTONS,
    WaveButton,
    animationCodes.waveButton
  ),
  createAnimation(
    'gradient-shift-button',
    'Gradient Shift',
    'Dynamic gradient animation with color transitions',
    ANIMATION_CATEGORIES.BUTTONS,
    GradientShiftButton,
    animationCodes.gradientShiftButton
  ),
  createAnimation(
    'morphing-button',
    'Morphing Button',
    'Changes shape and content dynamically',
    ANIMATION_CATEGORIES.BUTTONS,
    MorphingButton,
    animationCodes.morphingButton
  ),
  createAnimation(
    'flip-button',
    '3D Flip Button',
    'Rotates in 3D space revealing back side',
    ANIMATION_CATEGORIES.BUTTONS,
    FlipButton,
    animationCodes.flipButton
  ),
  createAnimation(
    'magnetic-button',
    'Magnetic Button',
    'Follows cursor with smooth magnetic attraction',
    ANIMATION_CATEGORIES.BUTTONS,
    MagneticButton,
    animationCodes.magneticButton
  ),
  createAnimation(
    'elastic-button',
    'Elastic Button',
    'Extreme elastic deformation effect',
    ANIMATION_CATEGORIES.BUTTONS,
    ElasticButton,
    animationCodes.elasticButton
  ),
  createAnimation(
    'ripple-button',
    'Ripple Effect',
    'Water ripple effect emanating from click point',
    ANIMATION_CATEGORIES.BUTTONS,
    RippleButton,
    animationCodes.rippleButton
  ),
  
  // Loader Animations
  createAnimation(
    'loading-spinner',
    'Spinning Loader',
    'Smooth spinning loader animation',
    ANIMATION_CATEGORIES.LOADERS,
    SpinningLoader,
    animationCodes.spinningLoader
  ),
  createAnimation(
    'dots-loader',
    'Dots Loader',
    'Animated loading dots with staggered animation',
    ANIMATION_CATEGORIES.LOADERS,
    DotsLoader,
    animationCodes.dotsLoader
  ),
  createAnimation(
    'pulse-loader',
    'Pulse Loader',
    'Circular pulsing loader',
    ANIMATION_CATEGORIES.LOADERS,
    PulseLoader,
    animationCodes.pulseLoader
  ),
  createAnimation(
    'progress-bar',
    'Progress Bar',
    'Animated progress bar with smooth transitions',
    ANIMATION_CATEGORIES.PROGRESS,
    ProgressBar,
    animationCodes.progressBar
  )
];

export function HomePage() {
  return (
    <section className="relative flex-1 flex flex-col min-h-0 mx-auto max-w-6xl">
      {/* Hero Section */}
      <div className="px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="text-5xl sm:text-6xl md:text-7xl leading-none font-bold tracking-tight text-white mb-4">
          Clip
        </h1>
        <p className="text-white/70 text-xl sm:text-2xl font-medium max-w-2xl mx-auto">
          Click the animation to copy the component code
        </p>
      </div>

      {/* Animation Grid */}
      <div className="flex-1 px-4 sm:px-6 lg:px-8 py-8 md:py-12">
        <AnimationGrid animations={sampleAnimations} />
      </div>
    </section>
  );
}
/**
 * Animation code snippets for all UI animations
 * Contains implementation code for buttons, loaders, progress bars, and skeletons
 */

export const animationCodes = {
  // Button Animations
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

  // Loader Animations
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
</div>`,

  waveLoader: `import { motion } from 'motion/react';

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
</div>`,

  bounceLoader: `import { motion } from 'motion/react';

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
</div>`,

  orbitLoader: `import { motion } from 'motion/react';

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
</div>`,

  squareLoader: `import { motion } from 'motion/react';

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
/>`,

  ringLoader: `import { motion } from 'motion/react';

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
        transform: \`scale(\${1 - i * 0.2})\`,
        opacity: 1 - i * 0.3
      }}
    />
  ))}
</div>`,

  gridLoader: `import { motion } from 'motion/react';

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
</div>`,

  dnaLoader: `import { motion } from 'motion/react';

<div className="relative w-12 h-8">
  {Array.from({ length: 8 }, (_, i) => (
    <motion.div
      key={i}
      className="absolute w-1 h-1 bg-white rounded-full"
      style={{
        left: \`\${i * 8}px\`,
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
</div>`,

  liquidLoader: `import { motion } from 'motion/react';

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
</div>`,

  particleLoader: `import { motion } from 'motion/react';

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
</div>`,

  typewriterLoader: `import { motion } from 'motion/react';

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
}`,

  pendulumLoader: `import { motion } from 'motion/react';

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
</div>`,

  spiralLoader: `import { motion } from 'motion/react';

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
</div>`,

  matrixLoader: `import { motion } from 'motion/react';

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
</div>`,

  // Progress Animations
  circularProgress: `import { motion } from 'motion/react';

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
</div>`,

  animatedCounter: `import { motion } from 'motion/react';
import { useState, useEffect } from 'react';

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
          animate={{ width: \`\${count}%\` }}
          transition={{ duration: 0.3, ease: "easeOut" }}
        />
      </motion.div>
    </div>
  );
}`,

  radialProgress: `import { motion } from 'motion/react';

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
</div>`,

  multiStepProgress: `import { motion } from 'motion/react';
import { useState, useEffect } from 'react';

export function MultiStepProgress() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress(prev => (prev >= 100 ? 0 : prev + 2));
    }, 100);
    return () => clearInterval(interval);
  }, []);

  const getStepColor = (stepIndex) => {
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
            className={\`w-3 h-3 rounded-full \${getStepColor(i)}\`}
            animate={{
              scale: progress >= i * 25 && progress < (i + 1) * 25 ? [1, 1.3, 1] : 1
            }}
            transition={{ duration: 0.5, repeat: progress >= i * 25 && progress < (i + 1) * 25 ? Infinity : 0 }}
          />
          <div className="flex-1 h-1 bg-white/20 rounded-full overflow-hidden">
            <motion.div
              className="h-full bg-white rounded-full"
              animate={{
                width: \`\${Math.max(0, Math.min(100, (progress - i * 25) * 4))}%\`
              }}
              transition={{ duration: 0.3, ease: "easeOut" }}
            />
          </div>
        </div>
      ))}
    </div>
  );
}`,

  liquidProgress: `import { motion } from 'motion/react';
import { useState, useEffect } from 'react';

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
        style={{ width: \`\${progress}%\`, height: '100%' }}
        animate={{
          borderRadius: ["0 50% 50% 0", "0 20% 20% 0", "0 50% 50% 0"],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      <div className="absolute inset-0 flex items-center justify-center">
        <span className="text-xs font-semibold text-black/70">
          {progress}%
        </span>
      </div>
    </div>
  );
}`,

  heartbeatProgress: `import { motion } from 'motion/react';
import { useState, useEffect } from 'react';

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
        style={{ width: \`\${progress}%\` }}
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
    </div>
  );
}`,

  waveProgress: `import { motion } from 'motion/react';
import { useState, useEffect } from 'react';

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
        style={{ width: \`\${progress}%\`, height: '100%' }}
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
          clipPath={\`inset(0 \${100 - progress}% 0 0)\`}
        />
      </svg>
    </div>
  );
}`,

  morphingProgress: `import { motion } from 'motion/react';
import { useState, useEffect } from 'react';

export function MorphingProgress() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress(prev => (prev >= 100 ? 0 : prev + 1));
    }, 100);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-32 h-6 bg-white/10 rounded-full overflow-hidden">
      <motion.div
        className="h-full bg-white"
        style={{ width: \`\${progress}%\` }}
        animate={{
          borderRadius: progress < 25 ? 0 : progress < 50 ? 4 : progress < 75 ? 12 : 24,
        }}
        transition={{
          duration: 0.3,
          ease: "easeInOut"
        }}
      />
      <div className="absolute inset-0 flex items-center justify-center">
        <span className="text-xs font-bold text-black/80">
          {Math.round(progress)}%
        </span>
      </div>
    </div>
  );
}`,

  glowProgress: `import { motion } from 'motion/react';
import { useState, useEffect } from 'react';

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
        style={{ width: \`\${progress}%\` }}
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
    </div>
  );
}`,

  segmentedProgress: `import { motion } from 'motion/react';
import { useState, useEffect } from 'react';

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
                height: isActive ? \`\${fillLevel * 100}%\` : '0%',
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
}`,

  // Skeleton Animations
  textSkeleton: `import { motion } from 'motion/react';

<div className="space-y-2 w-32">
  {[100, 80, 60].map((width, i) => (
    <motion.div
      key={i}
      className="h-3 bg-white/20 rounded"
      style={{ width: \`\${width}%\` }}
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
</div>`,

  cardSkeleton: `import { motion } from 'motion/react';

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
</div>`,

  avatarSkeleton: `import { motion } from 'motion/react';

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
</div>`,

  waveSkeleton: `import { motion } from 'motion/react';

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
</div>`,

  shimmerSkeleton: `import { motion } from 'motion/react';

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
</div>`,

  listSkeleton: `import { motion } from 'motion/react';

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
        className={\`h-2 bg-white/20 rounded \${
          i === 0 ? 'w-20' : i === 1 ? 'w-16' : i === 2 ? 'w-18' : 'w-14'
        }\`}
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
</div>`,

  minimalLinearProgress: `import { motion } from 'motion/react';
import { useState, useEffect } from 'react';

const [progress, setProgress] = useState(0);

useEffect(() => {
  const interval = setInterval(() => {
    setProgress(prev => (prev >= 100 ? 0 : prev + 0.8));
  }, 50);
  return () => clearInterval(interval);
}, []);

return (
  <div className="w-32 h-0.5 bg-white/10 overflow-hidden">
    <motion.div
      className="h-full bg-white"
      style={{ width: \`\${progress}%\` }}
      transition={{
        duration: 0.1,
        ease: "linear"
      }}
    />
  </div>
);`,

  minimalDotProgress: `import { motion } from 'motion/react';
import { useState, useEffect } from 'react';

const [activeIndex, setActiveIndex] = useState(0);
const dots = 5;

useEffect(() => {
  const interval = setInterval(() => {
    setActiveIndex(prev => (prev + 1) % dots);
  }, 400);
  return () => clearInterval(interval);
}, [dots]);

return (
  <div className="flex space-x-2">
    {Array.from({ length: dots }, (_, i) => (
      <motion.div
        key={i}
        className="w-1.5 h-1.5 rounded-full"
        animate={{
          backgroundColor: i === activeIndex ? 'rgb(255 255 255)' : 'rgb(255 255 255 / 0.2)',
          scale: i === activeIndex ? 1.2 : 1,
        }}
        transition={{
          duration: 0.3,
          ease: "easeInOut"
        }}
      />
    ))}
  </div>
);`,

  slimCircularProgress: `import { motion } from 'motion/react';
import { useState, useEffect } from 'react';

const [progress, setProgress] = useState(0);

useEffect(() => {
  const interval = setInterval(() => {
    setProgress(prev => (prev >= 100 ? 0 : prev + 1));
  }, 80);
  return () => clearInterval(interval);
}, []);

const circumference = 2 * Math.PI * 14;
const strokeDasharray = circumference;
const strokeDashoffset = circumference - (progress / 100) * circumference;

return (
  <div className="relative w-8 h-8">
    <svg className="w-8 h-8 -rotate-90" viewBox="0 0 32 32">
      <circle
        cx="16" cy="16" r="14"
        fill="none"
        stroke="rgb(255 255 255 / 0.1)"
        strokeWidth="1"
      />
      <motion.circle
        cx="16" cy="16" r="14"
        fill="none"
        stroke="rgb(255 255 255)"
        strokeWidth="1"
        strokeLinecap="round"
        strokeDasharray={strokeDasharray}
        animate={{ strokeDashoffset }}
        transition={{
          duration: 0.1,
          ease: "linear"
        }}
      />
    </svg>
  </div>
);`,

  breathingProgress: `import { motion } from 'motion/react';
import { useState, useEffect } from 'react';

const [progress, setProgress] = useState(0);

useEffect(() => {
  const interval = setInterval(() => {
    setProgress(prev => (prev >= 100 ? 0 : prev + 1.2));
  }, 60);
  return () => clearInterval(interval);
}, []);

return (
  <div className="relative w-32 h-1 bg-white/8 rounded-full overflow-hidden">
    <motion.div
      className="h-full bg-white rounded-full"
      style={{ width: \`\${progress}%\` }}
      animate={{
        opacity: [0.6, 1, 0.6],
      }}
      transition={{
        duration: 2,
        repeat: Infinity,
        ease: "easeInOut"
      }}
    />
  </div>
);`,

  subtleStepProgress: `import React from 'react';
import { motion } from 'motion/react';
import { useState, useEffect } from 'react';

const [currentStep, setCurrentStep] = useState(0);
const steps = 4;

useEffect(() => {
  const interval = setInterval(() => {
    setCurrentStep(prev => (prev + 1) % (steps + 1));
  }, 1200);
  return () => clearInterval(interval);
}, [steps]);

return (
  <div className="flex items-center space-x-3">
    {Array.from({ length: steps }, (_, i) => (
      <React.Fragment key={i}>
        <motion.div
          className="w-2 h-2 rounded-full"
          animate={{
            backgroundColor: i < currentStep ? 'rgb(255 255 255)' : 'rgb(255 255 255 / 0.2)',
            scale: i === currentStep - 1 ? [1, 1.4, 1] : 1,
          }}
          transition={{
            duration: 0.4,
            ease: "easeOut"
          }}
        />
        {i < steps - 1 && (
          <motion.div
            className="w-4 h-px bg-white/20"
            animate={{
              backgroundColor: i < currentStep - 1 ? 'rgb(255 255 255 / 0.6)' : 'rgb(255 255 255 / 0.2)',
            }}
            transition={{
              duration: 0.4,
              delay: 0.2
            }}
          />
        )}
      </React.Fragment>
    ))}
  </div>
);`,

  flowProgress: `import { motion } from 'motion/react';
import { useState, useEffect } from 'react';

const [progress, setProgress] = useState(0);

useEffect(() => {
  const interval = setInterval(() => {
    setProgress(prev => (prev >= 100 ? 0 : prev + 0.6));
  }, 40);
  return () => clearInterval(interval);
}, []);

return (
  <div className="relative w-32 h-1 bg-white/8 rounded-full overflow-hidden">
    <motion.div
      className="absolute top-0 left-0 h-full w-6 bg-gradient-to-r from-transparent via-white to-transparent rounded-full"
      animate={{
        x: [\`-24px\`, \`\${(progress / 100) * 128 - 12}px\`],
        opacity: progress > 5 && progress < 95 ? [0.4, 0.8, 0.4] : 0.2,
      }}
      transition={{
        x: { duration: 0.1, ease: "linear" },
        opacity: { duration: 1, repeat: Infinity, ease: "easeInOut" }
      }}
    />
    <motion.div
      className="h-full bg-white/30 rounded-full"
      style={{ width: \`\${progress}%\` }}
      transition={{
        duration: 0.1,
        ease: "linear"
      }}
    />
  </div>
);`,

  minimalPercentage: `import { motion } from 'motion/react';
import { useState, useEffect } from 'react';

const [progress, setProgress] = useState(0);

useEffect(() => {
  const interval = setInterval(() => {
    setProgress(prev => (prev >= 100 ? 0 : prev + 1));
  }, 100);
  return () => clearInterval(interval);
}, []);

return (
  <div className="flex items-center space-x-3">
    <div className="w-20 h-px bg-white/10">
      <motion.div
        className="h-full bg-white"
        style={{ width: \`\${progress}%\` }}
        transition={{
          duration: 0.1,
          ease: "linear"
        }}
      />
    </div>
    <motion.span
      className="text-xs font-medium text-white/80 tabular-nums"
      key={progress}
      initial={{ opacity: 0.5, y: 1 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.2 }}
    >
      {progress}%
    </motion.span>
  </div>
);`,

  cleanLineSkeleton: `import { motion } from 'motion/react';

return (
  <div className="space-y-2 w-32">
    {[100, 85, 70, 90].map((width, i) => (
      <motion.div
        key={i}
        className="h-px bg-white/15 rounded-full"
        style={{ width: \`\${width}%\` }}
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
);`,

  minimalBlockSkeleton: `import { motion } from 'motion/react';

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
);`,

  subtleShimmerSkeleton: `import { motion } from 'motion/react';

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
);`,

  dotMatrixSkeleton: `import { motion } from 'motion/react';

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
);`,

  flowingSkeleton: `import { motion } from 'motion/react';

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
);`,

  minimalProfileSkeleton: `import { motion } from 'motion/react';

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
);`,

  verticalBars: `import { motion } from 'motion/react';

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
);`,

  refinedWaveSkeleton: `import { motion } from 'motion/react';

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
);`,
} as const;

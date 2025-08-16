'use client';

import { AnimationGrid } from "./animation-grid";
import { MotionButton, PulsingButton, SpringButton } from "./animations/motion-button";
import { SpinningLoader, DotsLoader, PulseLoader, ProgressBar } from "./animations/loading-animations";
import { ANIMATION_CATEGORIES, type Animation } from "./animations";

const sampleAnimations: Animation[] = [
  {
    id: 'pulse-button',
    title: 'Pulsing Button',
    description: 'A button with smooth pulsing animation using Motion',
    category: ANIMATION_CATEGORIES.BUTTONS,
    component: PulsingButton,
    code: `import { motion } from 'motion/react';

<motion.button
  className="px-6 py-3 bg-white text-black rounded-lg font-medium"
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
  I'm pulsing
</motion.button>`
  },
  {
    id: 'hover-scale',
    title: 'Hover Scale',
    description: 'Spring-based hover scaling effect',
    category: ANIMATION_CATEGORIES.BUTTONS,
    component: MotionButton,
    code: `import { motion } from 'motion/react';

<motion.button
  className="px-6 py-3 bg-white/10 text-white rounded-lg font-medium"
  whileHover={{ scale: 1.05 }}
  whileTap={{ scale: 0.95 }}
  transition={{ type: "spring", stiffness: 400, damping: 10 }}
>
  Hover over me
</motion.button>`
  },
  {
    id: 'loading-spinner',
    title: 'Spinning Loader',
    description: 'Smooth spinning loader animation',
    category: ANIMATION_CATEGORIES.LOADERS,
    component: SpinningLoader,
    code: `import { motion } from 'motion/react';

<motion.div
  className="w-8 h-8 border-2 border-white/30 border-t-white rounded-full"
  animate={{ rotate: 360 }}
  transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
/>`
  },
  {
    id: 'spring-button',
    title: 'Spring Button',
    description: 'Button with spring rotation effect',
    category: ANIMATION_CATEGORIES.BUTTONS,
    component: SpringButton,
    code: `import { motion } from 'motion/react';

<motion.button
  className="px-6 py-3 bg-white/10 text-white rounded-lg font-medium"
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
</motion.button>`
  },
  {
    id: 'dots-loader',
    title: 'Dots Loader',
    description: 'Animated loading dots with staggered animation',
    category: ANIMATION_CATEGORIES.LOADERS,
    component: DotsLoader,
    code: `import { motion } from 'motion/react';

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
</div>`
  },
  {
    id: 'progress-bar',
    title: 'Progress Bar',
    description: 'Animated progress bar with smooth transitions',
    category: ANIMATION_CATEGORIES.PROGRESS,
    component: ProgressBar,
    code: `import { motion } from 'motion/react';

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
</div>`
  },
  {
    id: 'pulse-loader',
    title: 'Pulse Loader',
    description: 'Circular pulsing loader',
    category: ANIMATION_CATEGORIES.LOADERS,
    component: PulseLoader,
    code: `import { motion } from 'motion/react';

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
/>`
  }
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

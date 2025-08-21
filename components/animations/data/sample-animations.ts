import { 
  MotionButton, 
  PulsingButton, 
  SpringButton,
  ShimmerButton,
  BounceButton,
  RotateScaleButton,
  WaveButton
} from "../buttons/motion-button";

import {
  MagneticButton,
  GradientShiftButton,
  MorphingButton,
  FlipButton,
  ElasticButton,
  RippleButton
} from "../buttons/advanced-button-motions";

import { 
  SpinningLoader, 
  DotsLoader, 
  PulseLoader, 
  ProgressBar,
  WaveLoader,
  BounceLoader,
  OrbitLoader,
  SquareLoader,
  RingLoader,
  GridLoader,
  DNALoader,
  LiquidLoader,
  ParticleLoader,
  TypewriterLoader,
  PendulumLoader,
  SpiralLoader,
  MatrixLoader
} from "../loaders/loading-animations";

import {
  CircularProgress,
  AnimatedCounter,
  RadialProgress,
  MultiStepProgress,
  LiquidProgress,
  HeartbeatProgress,
  WaveProgress,
  MorphingProgress,
  GlowProgress,
  SegmentedProgress,
  MinimalLinearProgress,
  MinimalDotProgress,
  SlimCircularProgress,
  BreathingProgress,
  SubtleStepProgress,
  FlowProgress,
  MinimalPercentage
} from "../loaders/progress-animations";

import {
  TextSkeleton,
  CardSkeleton,
  AvatarSkeleton,
  WaveSkeleton,
  ShimmerSkeleton,
  ListSkeleton,
  CleanLineSkeleton,
  MinimalBlockSkeleton,
  SubtleShimmerSkeleton,
  DotMatrixSkeleton,
  FlowingSkeleton,
  MinimalProfileSkeleton,
  VerticalBars,
  RefinedWaveSkeleton
} from "../loaders/skeleton-animations";

import { ANIMATION_CATEGORIES, type Animation } from "../types";
import { createAnimation } from "../utils/animation-factory";
import { animationCodes } from "./animation-codes";

/**
 * Sample animations organized by category
 * Contains all available UI animations with their components and code snippets
 */

// Button Animations
const buttonAnimations: Animation[] = [
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
];

// Loader Animations
const loaderAnimations: Animation[] = [
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
    'wave-loader',
    'Wave Loader',
    'Animated wave bars with staggered heights',
    ANIMATION_CATEGORIES.LOADERS,
    WaveLoader,
    animationCodes.waveLoader
  ),
  createAnimation(
    'bounce-loader',
    'Bounce Loader',
    'Bouncing dots with vertical motion',
    ANIMATION_CATEGORIES.LOADERS,
    BounceLoader,
    animationCodes.bounceLoader
  ),
  createAnimation(
    'orbit-loader',
    'Orbit Loader',
    'Multiple dots orbiting in different paths',
    ANIMATION_CATEGORIES.LOADERS,
    OrbitLoader,
    animationCodes.orbitLoader
  ),
  createAnimation(
    'square-loader',
    'Square Loader',
    'Morphing square with rotation and border radius',
    ANIMATION_CATEGORIES.LOADERS,
    SquareLoader,
    animationCodes.squareLoader
  ),
  createAnimation(
    'ring-loader',
    'Ring Loader',
    'Multiple concentric rings rotating',
    ANIMATION_CATEGORIES.LOADERS,
    RingLoader,
    animationCodes.ringLoader
  ),
  createAnimation(
    'grid-loader',
    'Grid Loader',
    'Grid pattern with staggered scale animation',
    ANIMATION_CATEGORIES.LOADERS,
    GridLoader,
    animationCodes.gridLoader
  ),
  createAnimation(
    'dna-loader',
    'DNA Loader',
    'DNA helix pattern with vertical oscillation',
    ANIMATION_CATEGORIES.LOADERS,
    DNALoader,
    animationCodes.dnaLoader
  ),
  createAnimation(
    'liquid-loader',
    'Liquid Loader',
    'Liquid filling effect with overlay gradient',
    ANIMATION_CATEGORIES.LOADERS,
    LiquidLoader,
    animationCodes.liquidLoader
  ),
  createAnimation(
    'particle-loader',
    'Particle Loader',
    'Particles exploding outward in circular pattern',
    ANIMATION_CATEGORIES.LOADERS,
    ParticleLoader,
    animationCodes.particleLoader
  ),
  createAnimation(
    'typewriter-loader',
    'Typewriter Loader',
    'Text typing effect with blinking cursor',
    ANIMATION_CATEGORIES.LOADERS,
    TypewriterLoader,
    animationCodes.typewriterLoader
  ),
  createAnimation(
    'pendulum-loader',
    'Pendulum Loader',
    'Physics-based pendulum motion effect',
    ANIMATION_CATEGORIES.LOADERS,
    PendulumLoader,
    animationCodes.pendulumLoader
  ),
  createAnimation(
    'spiral-loader',
    'Spiral Loader',
    'Expanding spiral with fading particles',
    ANIMATION_CATEGORIES.LOADERS,
    SpiralLoader,
    animationCodes.spiralLoader
  ),
  createAnimation(
    'matrix-loader',
    'Matrix Loader',
    'Matrix-style grid with cascading animation',
    ANIMATION_CATEGORIES.LOADERS,
    MatrixLoader,
    animationCodes.matrixLoader
  ),
];

// Progress Animations
const progressAnimations: Animation[] = [
  createAnimation(
    'progress-bar',
    'Progress Bar',
    'Animated progress bar with smooth transitions',
    ANIMATION_CATEGORIES.PROGRESS,
    ProgressBar,
    animationCodes.progressBar
  ),
  createAnimation(
    'circular-progress',
    'Circular Progress',
    'SVG circular progress with percentage',
    ANIMATION_CATEGORIES.PROGRESS,
    CircularProgress,
    animationCodes.circularProgress
  ),
  createAnimation(
    'animated-counter',
    'Animated Counter',
    'Number counter with progress bar',
    ANIMATION_CATEGORIES.PROGRESS,
    AnimatedCounter,
    animationCodes.animatedCounter
  ),
  createAnimation(
    'radial-progress',
    'Radial Progress',
    'Radial progress with rotating center dot',
    ANIMATION_CATEGORIES.PROGRESS,
    RadialProgress,
    animationCodes.radialProgress
  ),
  createAnimation(
    'multi-step-progress',
    'Multi-Step Progress',
    'Complex multi-step progress visualization',
    ANIMATION_CATEGORIES.PROGRESS,
    MultiStepProgress,
    animationCodes.multiStepProgress
  ),
  createAnimation(
    'liquid-progress',
    'Liquid Progress',
    'Liquid-style progress with flowing edges',
    ANIMATION_CATEGORIES.PROGRESS,
    LiquidProgress,
    animationCodes.liquidProgress
  ),
  createAnimation(
    'heartbeat-progress',
    'Heartbeat Progress',
    'Progress bar with heartbeat pulse effect',
    ANIMATION_CATEGORIES.PROGRESS,
    HeartbeatProgress,
    animationCodes.heartbeatProgress
  ),
  createAnimation(
    'wave-progress',
    'Wave Progress',
    'SVG wave animation with clipping mask',
    ANIMATION_CATEGORIES.PROGRESS,
    WaveProgress,
    animationCodes.waveProgress
  ),
  createAnimation(
    'morphing-progress',
    'Morphing Progress',
    'Shape-morphing progress with rounded transitions',
    ANIMATION_CATEGORIES.PROGRESS,
    MorphingProgress,
    animationCodes.morphingProgress
  ),
  createAnimation(
    'glow-progress',
    'Glow Progress',
    'Progress bar with glowing light effects',
    ANIMATION_CATEGORIES.PROGRESS,
    GlowProgress,
    animationCodes.glowProgress
  ),
  createAnimation(
    'segmented-progress',
    'Segmented Progress',
    'Multi-segment progress with individual fills',
    ANIMATION_CATEGORIES.PROGRESS,
    SegmentedProgress,
    animationCodes.segmentedProgress
  ),
  createAnimation(
    'minimal-linear-progress',
    'Minimal Linear',
    'Ultra-thin linear progress bar',
    ANIMATION_CATEGORIES.PROGRESS,
    MinimalLinearProgress,
    animationCodes.minimalLinearProgress
  ),
  createAnimation(
    'minimal-dot-progress',
    'Minimal Dots',
    'Simple sequential dot indicators',
    ANIMATION_CATEGORIES.PROGRESS,
    MinimalDotProgress,
    animationCodes.minimalDotProgress
  ),
  createAnimation(
    'slim-circular-progress',
    'Slim Circular',
    'Thin circular progress with minimal design',
    ANIMATION_CATEGORIES.PROGRESS,
    SlimCircularProgress,
    animationCodes.slimCircularProgress
  ),
  createAnimation(
    'breathing-progress',
    'Breathing Progress',
    'Subtle breathing opacity animation',
    ANIMATION_CATEGORIES.PROGRESS,
    BreathingProgress,
    animationCodes.breathingProgress
  ),
  createAnimation(
    'subtle-step-progress',
    'Subtle Steps',
    'Minimalist multi-step progress indicator',
    ANIMATION_CATEGORIES.PROGRESS,
    SubtleStepProgress,
    animationCodes.subtleStepProgress
  ),
  createAnimation(
    'flow-progress',
    'Flow Progress',
    'Flowing highlight across progress bar',
    ANIMATION_CATEGORIES.PROGRESS,
    FlowProgress,
    animationCodes.flowProgress
  ),
  createAnimation(
    'minimal-percentage',
    'Minimal Percentage',
    'Clean progress bar with percentage display',
    ANIMATION_CATEGORIES.PROGRESS,
    MinimalPercentage,
    animationCodes.minimalPercentage
  ),
];

// Skeleton Animations
const skeletonAnimations: Animation[] = [
  createAnimation(
    'text-skeleton',
    'Text Skeleton',
    'Text placeholder with pulsing opacity',
    ANIMATION_CATEGORIES.SKELETON,
    TextSkeleton,
    animationCodes.textSkeleton
  ),
  createAnimation(
    'card-skeleton',
    'Card Skeleton',
    'Card layout skeleton loader',
    ANIMATION_CATEGORIES.SKELETON,
    CardSkeleton,
    animationCodes.cardSkeleton
  ),
  createAnimation(
    'avatar-skeleton',
    'Avatar Skeleton',
    'Profile avatar with text skeleton',
    ANIMATION_CATEGORIES.SKELETON,
    AvatarSkeleton,
    animationCodes.avatarSkeleton
  ),
  createAnimation(
    'wave-skeleton',
    'Wave Skeleton',
    'Gradient wave moving across skeleton',
    ANIMATION_CATEGORIES.SKELETON,
    WaveSkeleton,
    animationCodes.waveSkeleton
  ),
  createAnimation(
    'shimmer-skeleton',
    'Shimmer Skeleton',
    'Shimmer effect across skeleton surface',
    ANIMATION_CATEGORIES.SKELETON,
    ShimmerSkeleton,
    animationCodes.shimmerSkeleton
  ),
  createAnimation(
    'list-skeleton',
    'List Skeleton',
    'List item skeleton with bullets',
    ANIMATION_CATEGORIES.SKELETON,
    ListSkeleton,
    animationCodes.listSkeleton
  ),
  createAnimation(
    'clean-line-skeleton',
    'Clean Lines',
    'Ultra-minimal line placeholders',
    ANIMATION_CATEGORIES.SKELETON,
    CleanLineSkeleton,
    animationCodes.cleanLineSkeleton
  ),
  createAnimation(
    'minimal-block-skeleton',
    'Minimal Block',
    'Simple block with minimal text lines',
    ANIMATION_CATEGORIES.SKELETON,
    MinimalBlockSkeleton,
    animationCodes.minimalBlockSkeleton
  ),
  createAnimation(
    'subtle-shimmer-skeleton',
    'Subtle Shimmer',
    'Gentle shimmer effect skeleton',
    ANIMATION_CATEGORIES.SKELETON,
    SubtleShimmerSkeleton,
    animationCodes.subtleShimmerSkeleton
  ),
  createAnimation(
    'dot-matrix-skeleton',
    'Dot Matrix',
    'Grid of animated dots pattern',
    ANIMATION_CATEGORIES.SKELETON,
    DotMatrixSkeleton,
    animationCodes.dotMatrixSkeleton
  ),
  createAnimation(
    'flowing-skeleton',
    'Flowing Lines',
    'Smooth flowing gradient across lines',
    ANIMATION_CATEGORIES.SKELETON,
    FlowingSkeleton,
    animationCodes.flowingSkeleton
  ),
  createAnimation(
    'minimal-profile-skeleton',
    'Minimal Profile',
    'Clean profile skeleton with avatar',
    ANIMATION_CATEGORIES.SKELETON,
    MinimalProfileSkeleton,
    animationCodes.minimalProfileSkeleton
  ),
  createAnimation(
    'vertical-bars',
    'Vertical Bars',
    'Animated vertical bar chart skeleton',
    ANIMATION_CATEGORIES.SKELETON,
    VerticalBars,
    animationCodes.verticalBars
  ),
  createAnimation(
    'refined-wave-skeleton',
    'Refined Wave',
    'Sophisticated wave animation',
    ANIMATION_CATEGORIES.SKELETON,
    RefinedWaveSkeleton,
    animationCodes.refinedWaveSkeleton
  ),
];

/**
 * Complete collection of all sample animations
 * Organized by category for easy filtering and display
 */
export const sampleAnimations: Animation[] = [
  ...buttonAnimations,
  ...loaderAnimations,
  ...progressAnimations,
  ...skeletonAnimations,
];

/**
 * Animations grouped by category for easier organization
 */
export const animationsByCategory = {
  [ANIMATION_CATEGORIES.BUTTONS]: buttonAnimations,
  [ANIMATION_CATEGORIES.LOADERS]: loaderAnimations,
  [ANIMATION_CATEGORIES.PROGRESS]: progressAnimations,
  [ANIMATION_CATEGORIES.SKELETON]: skeletonAnimations,
} as const;

/**
 * Get animations by category
 */
export function getAnimationsByCategory(category: string): Animation[] {
  return animationsByCategory[category as keyof typeof animationsByCategory] || [];
}

/**
 * Get animation by ID
 */
export function getAnimationById(id: string): Animation | undefined {
  return sampleAnimations.find(animation => animation.id === id);
}

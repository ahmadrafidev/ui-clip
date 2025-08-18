import { type Animation } from '../types';

/**
 * Creates an animation object with consistent structure
 * 
 * @param id - Unique identifier for the animation
 * @param title - Display title for the animation
 * @param description - Brief description of the animation effect
 * @param category - Category the animation belongs to
 * @param component - React component that renders the animation
 * @param code - Implementation code as string
 * @returns Animation object with all required properties
 */
export const createAnimation = (
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

/**
 * Animation metadata type for easier data management
 */
export interface AnimationMetadata {
  id: string;
  title: string;
  description: string;
  category: string;
}

/**
 * Helper function to create animation metadata
 */
export const createAnimationMetadata = (
  id: string,
  title: string,
  description: string,
  category: string
): AnimationMetadata => ({
  id,
  title,
  description,
  category,
});

/**
 * Type-safe animation creation helper
 */
export function createTypedAnimation<T extends React.ComponentType>(
  metadata: AnimationMetadata,
  component: T,
  code: string
): Animation {
  return createAnimation(
    metadata.id,
    metadata.title,
    metadata.description,
    metadata.category,
    component as () => React.ReactElement,
    code
  );
}

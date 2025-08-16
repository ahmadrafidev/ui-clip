import React from 'react';

// Animation components exports 
export * from './buttons';
export * from './loaders';

// Animation data types
export interface Animation {
  id: string;
  title: string;
  description: string;
  category: string;
  component: () => React.ReactElement;
  code: string;
}

// Animation categories
export const ANIMATION_CATEGORIES = {
  BUTTONS: 'buttons',
  LOADERS: 'loaders',
  PROGRESS: 'progress',
} as const;

export type AnimationCategory = typeof ANIMATION_CATEGORIES[keyof typeof ANIMATION_CATEGORIES];

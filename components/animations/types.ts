import React from 'react';

/**
 * Animation interface definition
 */
export interface Animation {
  id: string;
  title: string;
  description: string;
  category: string;
  component: () => React.ReactElement;
  code: string;
  componentPath?: string;
}

/**
 * Animation categories constants
 */
export const ANIMATION_CATEGORIES = {
  BUTTONS: 'buttons',
  LOADERS: 'loaders',
  PROGRESS: 'progress',
  SKELETON: 'skeleton',
} as const;

export type AnimationCategory = typeof ANIMATION_CATEGORIES[keyof typeof ANIMATION_CATEGORIES];

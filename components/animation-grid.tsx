'use client';

import { useState } from 'react';

import { AnimationCard, type Animation } from './animation-card';
import { ANIMATION_CATEGORIES, type AnimationCategory } from './animations';

interface AnimationGridProps {
  animations: Animation[];
}

export function AnimationGrid({ animations }: AnimationGridProps) {
  const [selectedCategory, setSelectedCategory] = useState<AnimationCategory | 'all'>('all');
  
  const categories = Object.values(ANIMATION_CATEGORIES);
  const filteredAnimations = selectedCategory === 'all' 
    ? animations
    : animations.filter(animation => animation.category === selectedCategory);

  return (
    <div className="w-full mx-auto">
      {/* Category Filter */}
      <div className="flex flex-wrap gap-2 mb-4 md:mb-8 justify-center">
        <button
          onClick={() => setSelectedCategory('all')}
          className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
            selectedCategory === 'all'
              ? 'bg-white text-black'
              : 'bg-white/10 text-white/70 hover:bg-white/20 hover:text-white'
          }`}
        >
          All
        </button>
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => setSelectedCategory(category)}
            className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 capitalize ${
              selectedCategory === category
                ? 'bg-white text-black'
                : 'bg-white/10 text-white/70 hover:bg-white/20 hover:text-white'
            }`}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Animation Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4 md:gap-5">
        {filteredAnimations.map((animation) => (
          <AnimationCard key={animation.id} animation={animation} />
        ))}
      </div>

      {/* Empty State */}
      {filteredAnimations.length === 0 && (
        <div className="text-center py-10">
          <div className="text-white/50 text-lg mb-2">No animations found</div>
          <div className="text-white/30 text-sm">
            Try selecting a different category
          </div>
        </div>
      )}
    </div>
  );
}

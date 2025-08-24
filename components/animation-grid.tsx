'use client';

import { useState, useEffect, useCallback } from 'react';

import { AnimationCard } from './animation-card';
import { ANIMATION_CATEGORIES, type AnimationCategory, type Animation } from './animations/types';
import { useLocalStorage } from './animations/utils/persistence';

interface AnimationGridProps {
  animations: Animation[];
}

// Number of animations to load per page
const ITEMS_PER_PAGE = 12;

export function AnimationGrid({ animations }: AnimationGridProps) {
  
  const [selectedCategory, setSelectedCategory, isCategoryLoaded] = useLocalStorage<AnimationCategory | 'all'>(
    'ui-clip-category-filter', 
    'all'
  );
  const [displayedCount, setDisplayedCount] = useState(ITEMS_PER_PAGE);
  const [isLoading, setIsLoading] = useState(false);
  
  const categories = Object.values(ANIMATION_CATEGORIES);
  const filteredAnimations = selectedCategory === 'all' 
    ? animations
    : animations.filter(animation => animation.category === selectedCategory);

  const displayedAnimations = filteredAnimations.slice(0, displayedCount);
  const hasMoreAnimations = displayedCount < filteredAnimations.length;

  useEffect(() => {
    setDisplayedCount(ITEMS_PER_PAGE);
  }, [selectedCategory]);

  const handleLoadMore = useCallback(async () => {
    if (isLoading || !hasMoreAnimations) return;

    setIsLoading(true);

    await new Promise(resolve => setTimeout(resolve, 300));

    setDisplayedCount(prev => prev + ITEMS_PER_PAGE);
    setIsLoading(false);
  }, [isLoading, hasMoreAnimations]);

  const handleLoadMoreKeyDown = useCallback((e: React.KeyboardEvent) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      handleLoadMore();
    }
  }, [handleLoadMore]);

  const handleCategoryChange = useCallback((category: AnimationCategory | 'all') => {
    setSelectedCategory(category);
  }, [setSelectedCategory]);

  const handleCategoryKeyDown = useCallback((e: React.KeyboardEvent, category: AnimationCategory | 'all') => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      handleCategoryChange(category);
    }
  }, [handleCategoryChange]);

  if (!isCategoryLoaded) {
    return null;
  }

  return (
    <div className="w-full mx-auto">
      {/* Category Filter */}
      <nav
        className="flex flex-wrap gap-2 mb-4 md:mb-8 justify-center"
        role="tablist"
        aria-label="Animation categories"
      >
        <button
          onClick={() => handleCategoryChange('all')}
          onKeyDown={(e) => handleCategoryKeyDown(e, 'all')}
          className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-white/20 ${
            selectedCategory === 'all'
              ? 'bg-white text-black'
              : 'bg-white/10 text-white/70 hover:bg-white/20 hover:text-white'
          }`}
          role="tab"
          aria-selected={selectedCategory === 'all'}
          aria-controls="animation-grid"
          id="category-all"
        >
          All
        </button>
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => handleCategoryChange(category)}
            onKeyDown={(e) => handleCategoryKeyDown(e, category)}
            className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 capitalize focus:outline-none focus:ring-2 focus:ring-white/20 ${
              selectedCategory === category
                ? 'bg-white text-black'
                : 'bg-white/10 text-white/70 hover:bg-white/20 hover:text-white'
            }`}
            role="tab"
            aria-selected={selectedCategory === category}
            aria-controls="animation-grid"
            id={`category-${category}`}
          >
            {category}
          </button>
        ))}
      </nav>

      {/* Animation Grid */}
      <div
        className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4 md:gap-5"
        id="animation-grid"
        role="tabpanel"
        aria-label={`Animations in ${selectedCategory} category`}
      >
        {displayedAnimations.map((animation) => (
          <AnimationCard key={animation.id} animation={animation} />
        ))}
      </div>

      {/* Load More Button */}
      {hasMoreAnimations && (
        <div className="flex justify-center mt-8 md:mt-10">
          <button
            onClick={handleLoadMore}
            onKeyDown={handleLoadMoreKeyDown}
            disabled={isLoading}
            className={`
              px-8 py-3 rounded-xl font-medium text-sm
              transition-all duration-200 ease-out focus:outline-none focus:ring-2 focus:ring-white/20
              ${isLoading
                ? 'bg-zinc-800 text-white/40 cursor-not-allowed'
                : 'bg-zinc-800 text-white/90 hover:bg-zinc-800/80 hover:text-white hover:scale-[1.02] active:scale-98'
              }
              flex items-center gap-3
            `}
            aria-label={`${isLoading ? 'Loading more animations' : `Load more animations (${filteredAnimations.length - displayedCount} remaining)`}`}
          >
            {isLoading ? (
              <>
                <div
                  className="animate-spin rounded-full h-4 w-4 border border-white/30 border-t-white/70"
                  aria-hidden="true"
                />
                <span>Loading...</span>
              </>
            ) : (
              <>
                <span>Load More</span>
                <span className="text-white/50 text-xs">
                  {displayedCount}/{filteredAnimations.length}
                </span>
              </>
            )}
          </button>
        </div>
      )}

      {/* Empty State */}
      {filteredAnimations.length === 0 && (
        <div
          className="text-center py-10"
          role="status"
          aria-live="polite"
        >
          <div className="text-white/50 text-lg mb-2">No animations found</div>
          <div className="text-white/30 text-sm">
            Try selecting a different category
          </div>
        </div>
      )}
    </div>
  );
}

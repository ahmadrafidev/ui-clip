'use client';

import React, { useState, useCallback, useRef } from 'react';
import { type Animation } from './animations/types';

interface AnimationCardProps {
  animation: Animation;
}

export function AnimationCard({ animation }: AnimationCardProps) {
  const [showCopied, setShowCopied] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  const handleCopy = useCallback(async () => {
    try {
      await navigator.clipboard.writeText(animation.code);
      setShowCopied(true);
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
      timeoutRef.current = setTimeout(() => setShowCopied(false), 2000) as NodeJS.Timeout;
    } catch (err) {
      console.error('Failed to copy code:', err);

      // Fallback for older browsers
      const textArea = document.createElement('textarea');
      textArea.value = animation.code;
      document.body.appendChild(textArea);
      textArea.select();
      document.execCommand('copy');
      document.body.removeChild(textArea);
      setShowCopied(true);

      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
      timeoutRef.current = setTimeout(() => setShowCopied(false), 2000) as NodeJS.Timeout;
    }
  }, [animation.code]);

  const handleClick = useCallback((e: React.MouseEvent) => {
    e.preventDefault();
    handleCopy();
  }, [handleCopy]);

  const handleKeyDown = useCallback((e: React.KeyboardEvent) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      handleCopy();
    }
  }, [handleCopy]);

  React.useEffect(() => {
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
        timeoutRef.current = null;
      }
    };
  }, []);

  return (
    <div
      className="relative group w-full"
      onClick={handleClick}
      onKeyDown={handleKeyDown}
      ref={cardRef}
      tabIndex={0}
      role="button"
      aria-label={`Copy ${animation.title} animation code`}
      aria-describedby={`animation-${animation.id}-description`}
    >
      {/* Animation container */}
      <div className="relative w-full min-w-0 sm:min-w-48 md:min-w-56 h-32 sm:h-36 md:h-40 lg:h-48 xl:h-52 bg-white/[0.02] backdrop-blur-sm rounded-xl border border-white/[0.08] flex items-center justify-center overflow-hidden transition-all duration-300 hover:bg-white/[0.06] hover:border-white/[0.15] focus-within:bg-white/[0.06] focus-within:border-white/[0.15] cursor-pointer focus:outline-none focus:ring-2 focus:ring-white/20">

        {/* Background gradient for visual interest */}
        <div className="absolute inset-0 bg-gradient-to-br from-white/[0.08] to-transparent opacity-0 group-hover:opacity-100 group-focus:opacity-100 transition-opacity duration-300" />

        {/* Animation component */}
        <div className="relative z-10" aria-hidden="true">
          <animation.component />
        </div>

        {/* Hover overlay with copy hint */}
        <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 group-focus:opacity-100 transition-opacity duration-150 flex items-end justify-center">
          <div className="text-white/90 text-xs md:text-sm text-center px-2 pb-2 font-medium">
            {showCopied ? (
              <div aria-live="polite">Copied!</div>
            ) : (
              <>
                <div className="hidden sm:block">Tap to copy</div>
              </>
            )}
          </div>
        </div>

        {/* Animation title overlay */}
        <div className="absolute top-2 left-2 right-2 text-center opacity-0 group-hover:opacity-100 group-focus:opacity-100 transition-opacity duration-150 pointer-events-none z-15">
          <div className="text-black text-xs md:text-sm font-medium bg-white px-2 py-1 rounded-md mx-auto inline-block max-w-full truncate shadow-sm">
            {animation.title}
          </div>
        </div>
      </div>

      {/* Hidden description for screen readers */}
      <div
        id={`animation-${animation.id}-description`}
        className="sr-only"
      >
        {animation.description}. Press Enter or Space to copy the code to clipboard.
      </div>
    </div>
  );
}

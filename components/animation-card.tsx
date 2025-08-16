'use client';

import React, { useState } from 'react';

export interface Animation {
  id: string;
  title: string;
  description: string;
  category: string;
  component: () => React.ReactElement;
  code: string;
}

interface AnimationCardProps {
  animation: Animation;
}

export function AnimationCard({ animation }: AnimationCardProps) {
  const [showCopied, setShowCopied] = useState(false);

  const handleClick = async (e: React.MouseEvent) => {
    e.preventDefault();
    
    try {
      await navigator.clipboard.writeText(animation.code);
      setShowCopied(true);
      setTimeout(() => setShowCopied(false), 2000);
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
      setTimeout(() => setShowCopied(false), 2000);
    }
  };

  return (
    <div 
      className="relative group"
      onClick={handleClick}
    >
      {/* Copy notification */}
      {showCopied && (
        <div className="absolute -top-10 left-1/2 transform -translate-x-1/2 bg-white text-black px-3 py-1 rounded-md text-sm font-medium z-10 animate-fade-in">
          Copied!
        </div>
      )}
      
      {/* Animation container */}
      <div className="relative w-full min-w-52 h-36 sm:h-40 lg:h-44 bg-white/[0.02] backdrop-blur-sm rounded-xl border border-white/[0.08] flex items-center justify-center overflow-hidden transition-all duration-300 hover:bg-white/[0.06] hover:border-white/[0.15] cursor-pointer">
        {/* Background gradient for visual interest */}
        <div className="absolute inset-0 bg-gradient-to-br from-white/[0.08] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        
        {/* Animation component */}
        <div className="relative z-10">
          <animation.component />
        </div>
        
        {/* Hover overlay with copy hint */}
        <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity duration-150 flex items-baseline-last justify-center">
          <div className="text-white/80 text-xs text-center px-2 pb-2 font-medium">
            Click to copy
          </div>
        </div>
      </div>
      
      {/* Animation title on hover */}
      <div className="absolute -bottom-10 left-0 right-0 text-center opacity-0 group-hover:opacity-100 transition-opacity duration-150 pointer-events-none z-20">
        <div className="text-black text-sm font-medium bg-white px-3 py-1 rounded-md mx-auto inline-block shadow-lg">
          {animation.title}
        </div>
      </div>
    </div>
  );
}

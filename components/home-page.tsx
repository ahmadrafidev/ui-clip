'use client';

import { AnimationGrid } from "./animation-grid";
import { HeroSection } from "./home";
import { sampleAnimations } from "./animations/data";

export function HomePage() {
  return (
    <section className="relative flex-1 flex flex-col min-h-0 mx-auto max-w-6xl">
      {/* Hero Section */}
      <HeroSection />

      {/* Animation Grid */}
      <div className="flex-1 px-4 sm:px-6 lg:px-8 pb-8 sm:pb-10 md:pb-12">
        <AnimationGrid animations={sampleAnimations} />
      </div>
    </section>
  );
}

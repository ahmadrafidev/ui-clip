/**
 * Hero Section Component
 * 
 * Displays the main header text and instructions for the UI Clip application.
 * Features responsive design with mobile-first approach.
 */

interface HeroSectionProps {
  /** Main title text to display */
  title?: string;
  /** Subtitle or description text */
  subtitle?: string;
  /** Additional CSS classes for customization */
  className?: string;
}

export function HeroSection({ 
  title = "Click the animation to copy the component code",
  subtitle,
  className = ""
}: HeroSectionProps) {
  return (
    <section className={`px-4 sm:px-6 lg:px-8 text-center py-10 md:py-12 ${className}`}>
      <h1 className="text-white/70 text-xl sm:text-2xl font-medium max-w-2xl mx-auto">
        {title}
      </h1>
      {subtitle && (
        <p className="text-white/50 text-sm sm:text-base mt-4 max-w-xl mx-auto">
          {subtitle}
        </p>
      )}
    </section>
  );
}

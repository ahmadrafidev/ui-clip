import Link from "next/link";

type BrandProps = {
  href?: string;
  className?: string;
};

export function Brand({ href = "/", className = "" }: BrandProps) {
  return (
    <Link href={href} aria-label="Clip" className={`hover:opacity-80 transition-opacity duration-150 ${className}`}>
      <span className="text-xl sm:text-2xl lg:text-3xl font-medium font-sans tracking-tight text-foreground">
        Clip
      </span>
    </Link>
  );
}

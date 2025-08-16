import Link from "next/link";

type BrandProps = {
  href?: string;
  className?: string;
  size?: "sm" | "md" | "lg";
};

const sizeToClass: Record<NonNullable<BrandProps["size"]>, string> = {
  sm: "text-base",
  md: "text-xl",
  lg: "text-2xl sm:text-3xl",
};

export function Brand({ href = "/", className = "", size = "md" }: BrandProps) {
  return (
    <Link href={href} aria-label="Clip" className={`hover:opacity-80 transition-opacity duration-200 ${className}`}>
      <span className={`font-bold tracking-tight text-foreground ${sizeToClass[size]}`}>
        Clip
      </span>
    </Link>
  );
}



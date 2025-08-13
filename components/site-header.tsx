import Link from "next/link";
import { Brand } from "./brand";

type SiteHeaderProps = {
  xHandle?: string;
  githubUrl?: string;
};

export function SiteHeader({ xHandle = "@rafiwiranaa", githubUrl = "https://github.com/ahmadrafidev/ui-clip" }: SiteHeaderProps) {
  const xUrl = `https://x.com/${xHandle.replace(/^@/, "")}`;
  return (
    <header className="sticky top-0 z-50 bg-background/60 backdrop-blur">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <Brand size="lg" />
        <div className="flex items-center gap-2 sm:gap-3">
          <a href={xUrl} target="_blank" rel="noreferrer" aria-label="X (Twitter)" className="p-2 rounded-md border border-white/10 hover:bg-white/5">
            <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <path d="M4 4L20 20" />
              <path d="M20 4L4 20" />
            </svg>
          </a>
          <a href={githubUrl} target="_blank" rel="noreferrer" aria-label="GitHub repository" className="p-2 rounded-md border border-white/10 hover:bg-white/5">
            <svg viewBox="0 0 24 24" width="19" height="19" aria-hidden="true" className="fill-current">
              <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.438 9.8 8.205 11.387.6.113.82-.262.82-.58 0-.287-.01-1.047-.016-2.055-3.338.726-4.042-1.61-4.042-1.61-.546-1.387-1.333-1.757-1.333-1.757-1.09-.745.082-.73.082-.73 1.205.085 1.84 1.237 1.84 1.237 1.07 1.834 2.807 1.304 3.492.997.108-.776.418-1.304.76-1.604-2.665-.303-5.466-1.333-5.466-5.932 0-1.31.468-2.382 1.236-3.22-.124-.303-.536-1.524.117-3.176 0 0 1.008-.322 3.3 1.23.957-.266 1.984-.399 3.004-.404 1.02.005 2.047.138 3.006.404 2.29-1.552 3.297-1.23 3.297-1.23.655 1.652.243 2.873.119 3.176.77.838 1.235 1.91 1.235 3.22 0 4.61-2.807 5.625-5.48 5.922.43.372.814 1.103.814 2.222 0 1.604-.014 2.896-.014 3.29 0 .321.216.697.825.579C20.565 21.796 24 17.297 24 12 24 5.37 18.627 0 12 0Z" />
            </svg>
          </a>
        </div>
      </div>
    </header>
  );
}

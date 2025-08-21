import { Brand } from "./brand";
import { Twitter, Github } from "lucide-react";

type SiteHeaderProps = {
  xHandle?: string;
  githubUrl?: string;
};

export function SiteHeader(
  { 
  xHandle = "@rafiwiranaa", 
  githubUrl = "https://github.com/ahmadrafidev/ui-clip" }: SiteHeaderProps) 
  {
  const xUrl = `https://x.com/${xHandle.replace(/^@/, "")}`;
  return (
    <header className="sticky">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        <Brand size="lg" href="/" />
        <div className="flex items-center gap-2 sm:gap-3">
          <a 
            href={xUrl} 
            target="_blank" 
            rel="noreferrer" 
            aria-label="Twitter" 
            className="p-2 rounded-md border border-white/10 hover:bg-white/5 hover:border-white/20 transition-all duration-200"
          >
            <Twitter size={18} />
          </a>
          <a 
            href={githubUrl} 
            target="_blank" 
            rel="noreferrer" 
            aria-label="GitHub repository" 
            className="p-2 rounded-md border border-white/10 hover:bg-white/5 hover:border-white/20 transition-all duration-200"
          >
            <Github size={18} />
          </a>
        </div>
      </div>
    </header>
  );
}

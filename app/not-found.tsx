import Link from "next/link";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col">
      <SiteHeader />
      
      <main className="flex-1 flex items-center justify-center px-4">
        <div className="text-center space-y-6">
          <div className="space-y-2">
            <div className="text-6xl md:text-9xl font-mono font-light text-white/20">
              404
            </div>
            <h1 className="text-xl md:text-2xl font-medium text-white/90">
              This clip doesn&apos;t exist
            </h1>
          </div>
          
          <p className="text-white/60 max-w-sm mx-auto text-balance">
            The page you&apos;re looking for has been moved or deleted.
          </p>
          
          <Link
            href="/"
            className="inline-block px-6 py-2 mt-6 border border-white/20 rounded-md text-sm font-medium text-white/90 hover:scale-[1.02] active:scale-[0.98] hover:bg-zinc-800 hover:border-zinc-800 transition-all duration-200"
          >
            Back to clips
          </Link>
        </div>
      </main>

      <SiteFooter />
    </div>
  );
}

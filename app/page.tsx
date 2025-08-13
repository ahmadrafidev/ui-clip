import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { HomePage } from "@/components/home-page";

export default function Home() {
  return (
    <div className="min-h-dvh flex flex-col">
      <SiteHeader />
      <main className="flex-1">
        <HomePage />
      </main>
      <SiteFooter />
    </div>
  );
}

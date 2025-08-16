export function SiteFooter() {
  return (
    <footer>
      <div className="mx-auto py-6 flex items-center justify-center">
        <span className="text-sm md:text-base text-foreground/70">
          Built by {""}
          <a href="https://x.com/rafiwiranaa" target="_blank" rel="noreferrer" className="hover:underline text-foreground">
            Rafi
          </a>
        </span>
      </div>
    </footer>
  );
}
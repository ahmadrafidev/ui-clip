export function HomePage() {
  return (
    <section className="relative flex-1 flex flex-col min-h-0">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center pt-28 sm:pt-36">
        <h1 className="text-7xl sm:text-8xl md:text-[10rem] leading-none font-semibold tracking-tight text-foreground">
          Clip
        </h1>
        <div className="flex flex-col items-center justify-between gap-2 max-w-2xl mx-auto">
          <p className="mt-4 text-foreground/70 text-lg md:text-2xl font-medium">
            User interface components that you can copy, paste, and ship.
          </p>
        </div>  
      </div>
      <div className="mt-auto mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center pb-6">
        <p className="text-foreground/70 text-lg md:text-2xl font-medium">
          Coming soon.
        </p>
      </div>
    </section>
  );
}

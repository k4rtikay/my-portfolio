import { Hero, About, Projects, Contact, Footer, GithubHeatmap, ThemedDither } from "@/components/website";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <main className="mx-auto max-w-[650px] px-6 py-24 md:py-32 flex-1">
        <div className="grid grid-cols-1 sm:grid-cols-[1fr_200px] grid-rows-[auto] sm:grid-rows-[auto_auto] gap-6 sm:gap-x-6 sm:gap-y-12 mb-16">
          <Hero />
          <div className="relative sm:row-span-2 order-2 sm:order-none">
            <span className="absolute -top-[7px] -left-[7px] -translate-x-1/2 -translate-y-1/2 text-xs text-muted-foreground/30 select-none z-10 leading-none">+</span>
            <span className="absolute -bottom-[7px] -right-[7px] translate-x-1/2 translate-y-1/2 text-xs text-muted-foreground/30 select-none z-10 leading-none">+</span>
            <div className="h-[160px] sm:h-full border border-border outline-1 outline-muted-foreground/10 outline-offset-6 overflow-hidden">
              <ThemedDither />
            </div>
          </div>
          <About />
        </div>
        <Projects />
        <GithubHeatmap username="k4rtikay" />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

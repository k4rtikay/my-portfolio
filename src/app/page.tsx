import { Hero, About, Projects, Contact, Footer, GithubHeatmap, ThemedDither } from "@/components/website";

export default function Home() {
  return (
    <div className="flex min-h-screen w-full">
      <div className="hidden lg:block lg:fixed lg:left-0 lg:top-0 lg:h-screen lg:w-[25%]">
        <div className="relative h-full">
          <span className="absolute top-4 left-4 text-xs text-muted-foreground/30 select-none z-10 leading-none">+</span>
          <span className="absolute bottom-4 right-4 text-xs text-muted-foreground/30 select-none z-10 leading-none">+</span>
          <div className="h-full border-r border-border overflow-hidden">
            <ThemedDither />
          </div>
        </div>
      </div>

      <div className="flex flex-col min-h-screen w-full lg:ml-[25%]">
        <div className="lg:hidden relative h-[160px]">
          <span className="absolute top-2 left-2 text-xs text-muted-foreground/30 select-none z-10 leading-none">+</span>
          <span className="absolute bottom-2 right-2 text-xs text-muted-foreground/30 select-none z-10 leading-none">+</span>
          <div className="h-full border-b border-border overflow-hidden">
            <ThemedDither />
          </div>
        </div>

        <main className="mx-auto w-full max-w-[650px] px-8 sm:px-6 py-24 md:py-32 flex-1">
          <div className="mb-16">
            <Hero />
            <div className="mt-12">
              <About />
            </div>
          </div>
          <Projects />
          <GithubHeatmap username="k4rtikay" />
          <Contact />
        </main>
        <Footer />
      </div>
    </div>
  );
}

import { Hero, About, Projects, Contact, Footer } from "@/components/website";
import Dither from "@/components/Dither";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <main className="mx-auto max-w-[650px] px-6 py-24 md:py-32 flex-1">
        <div className="grid grid-cols-[1fr_200px] grid-rows-[auto_auto] gap-x-6 gap-y-4 mb-16">
          <Hero />
          <div className="row-span-2 relative border border-border rounded-sm overflow-hidden">
            <Dither
              waveColor={[0.5, 0.5, 0.5]}
              disableAnimation={false}
              enableMouseInteraction
              mouseRadius={0.3}
              colorNum={4}
              waveAmplitude={0.3}
              waveFrequency={3}
              waveSpeed={0.05}
            />
          </div>
          <About />
        </div>
        <Projects />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

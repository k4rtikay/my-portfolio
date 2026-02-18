import { Hero, About, Projects, Contact, Footer, GithubHeatmap, ThemedDither } from "@/components/website";
import { StaggerReveal } from "@/components/website/stagger-reveal";

async function getHeatmapData(username: string) {
  try {
    const res = await fetch(
      `https://github-contributions-api.jogruber.de/v4/${username}?y=last`,
      { next: { revalidate: 3600 } }
    );
    if (!res.ok) return [];
    const json = await res.json();
    return json.contributions ?? [];
  } catch {
    return [];
  }
}

export default async function Home() {
  const heatmapData = await getHeatmapData("k4rtikay");

  return (
    <div className="flex min-h-screen w-full">
      <div className="hidden lg:block lg:fixed lg:left-0 lg:top-0 lg:h-screen lg:w-[25%]">
        <div className="relative h-full">
          <div className="h-full border-r border-border overflow-hidden">
            <ThemedDither />
          </div>
        </div>
      </div>

      <div className="flex flex-col min-h-screen w-full lg:ml-[25%]">
        <div className="lg:hidden relative h-[160px]">
          <div className="h-full border-b border-border overflow-hidden">
            <ThemedDither />
          </div>
        </div>

        <main className="mx-auto w-full max-w-[650px] px-8 sm:px-6 py-24 md:py-32 flex-1">
          <StaggerReveal
            direction="up"
            staggerDelay={0.1}
            transition={{
              type: "spring",
              damping: 25,
              stiffness: 200,
            }}
          >
            <div className="mb-16">
              <Hero />
              <div className="mt-12">
                <About />
              </div>
            </div>
            <div>
              <Projects />
            </div>
            <div>
              <GithubHeatmap data={heatmapData} />
            </div>
            <div>
              <Contact />
            </div>
          </StaggerReveal>
        </main>
        <Footer />
      </div>
    </div>
  );
}


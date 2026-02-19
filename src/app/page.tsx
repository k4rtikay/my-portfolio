import { Hero, About, Projects, Contact, Footer, GithubHeatmap } from "@/components/website";
import { FadeIn } from "@/components/website/fade-in";

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
    <div className="flex flex-col min-h-screen w-full">
      <main className="mx-auto w-full max-w-[650px] px-8 sm:px-6 py-24 md:py-32 flex-1">
        <FadeIn delay={0}>
          <div className="mb-16">
            <Hero />
            <div className="mt-12">
              <About />
            </div>
          </div>
        </FadeIn>
        <FadeIn delay={0.1}>
          <Projects />
        </FadeIn>
        <FadeIn delay={0.2}>
          <GithubHeatmap data={heatmapData} />
        </FadeIn>
        <FadeIn delay={0.3}>
          <Contact />
        </FadeIn>
      </main>
      <Footer />
    </div>
  );
}


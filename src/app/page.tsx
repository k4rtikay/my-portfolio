import { Hero, About, Projects, Contact, Footer, GithubHeatmap } from "@/components/website";
import { FadeIn } from "@/components/website/fade-in";
import { Header } from "@/components/website/header";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen w-full">
      <Header />
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
          <GithubHeatmap />
        </FadeIn>
        <FadeIn delay={0.3}>
          <Contact />
        </FadeIn>
      </main>
      <Footer />
    </div>
  );
}


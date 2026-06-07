import { Hero, About, Bento, Projects, Contact, Footer, GithubHeatmap } from "@/components/website";
import { FadeIn } from "@/components/website/fade-in";
import { Header } from "@/components/website/header";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen w-full">
      <div className="absolute top-0 z-[-2] h-screen w-full bg-background bg-[radial-gradient(100%_50%_at_50%_0%,rgba(0,163,255,0.13)_0,rgba(0,163,255,0)_50%,rgba(0,163,255,0)_100%)]"></div>
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
        {/* <FadeIn delay={0.1}>
          <Bento />
        </FadeIn> */}
        <FadeIn delay={0.2}>
          <Projects />
        </FadeIn>
        <FadeIn delay={0.3}>
          <GithubHeatmap />
        </FadeIn>
        <FadeIn delay={0.4}>
          <Contact />
        </FadeIn>
      </main>
      <Footer />
    </div>
  );
}


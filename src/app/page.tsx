import { Hero, About, Projects, Contact } from "@/components/website";

export default function Home() {
  return (
    <main className="mx-auto max-w-[650px] px-6 py-24 md:py-32">
      <Hero />
      <About />
      <Projects />
      <Contact />
    </main>
  );
}

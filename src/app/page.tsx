import { Hero, About, Projects, Contact, Footer } from "@/components/website";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <main className="mx-auto max-w-[650px] px-6 py-24 md:py-32 flex-1">
        <Hero />
        <About />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

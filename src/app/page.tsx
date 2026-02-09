import { ExternalLink } from "lucide-react";

const projects = [
  {
    name: "GitXhibit",
    description:
      "AI-powered portfolio generator that creates developer portfolios from GitHub data using LLaMA 3.1 for content generation.",
    skills: ["Next.js", "TypeScript", "Drizzle ORM", "PostgreSQL", "Groq AI", "Octokit"],
    github: "#",
    demo: "#",
    wip: false,
  },
  {
    name: "Flow-Kit",
    description:
      "Open source React component library with animated, accessible UI components and MDX documentation.",
    skills: ["React", "TypeScript", "Next.js", "Tailwind CSS", "Motion"],
    github: "#",
    demo: "#",
    wip: false,
  },
  {
    name: "HueDex",
    description:
      "Color palette generator that extracts colors from 600+ Pokémon sprites with Firebase auth and palette persistence.",
    skills: ["React", "Firebase", "ColorThief", "Framer Motion", "SCSS", "Vite"],
    github: "#",
    demo: "#",
    wip: false,
  },
];

const socials = [
  { name: "Twitter", href: "https://twitter.com/kartikeya" },
  { name: "GitHub", href: "https://github.com/kartikeya" },
  { name: "LinkedIn", href: "https://linkedin.com/in/kartikeya" },
  { name: "Email", href: "mailto:hello@kartikeya.dev" },
];

export default function Home() {
  return (
    <main className="mx-auto max-w-[650px] px-6 py-24 md:py-32">
      {/* Hero */}
      <section className="mb-16">
        <h1 className="text-2xl font-semibold tracking-tight mb-4">
          Kartikeya
        </h1>
        <p className="text-muted text-lg leading-relaxed">
          Crafting interfaces and experiences. Design engineer exploring the
          intersection of design and code.
        </p>
      </section>

      {/* About */}
      <section className="mb-16">
        <h2 className="text-sm font-medium text-muted uppercase tracking-wide mb-4">
          About
        </h2>
        <div className="space-y-4 leading-relaxed">
          <p>
            I&apos;m a developer who cares deeply about how things look and
            feel. I believe great software is built at the intersection of
            design and engineering.
          </p>
          <p>
            Currently focused on building polished web experiences and learning
            the craft of interface design.
          </p>
        </div>
      </section>

      {/* Projects */}
      <section className="mb-16">
        <h2 className="text-sm font-medium text-muted uppercase tracking-wide mb-4">
          Projects
        </h2>
        <ul className="space-y-8">
          {projects.map((project) => (
            <li key={project.name}>
              <div className="flex items-center justify-between gap-4 mb-2">
                <div className="flex items-center gap-2">
                  <span className="font-medium">{project.name}</span>
                  {project.wip && <span className="badge">WIP</span>}
                </div>
                <div className="flex items-center gap-3">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-muted hover:text-foreground transition-colors"
                  >
                    Source
                  </a>
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-sm text-muted hover:text-foreground transition-colors"
                  >
                    Demo
                    <ExternalLink size={12} />
                  </a>
                </div>
              </div>
              <div className="flex flex-wrap gap-1.5 mb-2">
                {project.skills.map((skill) => (
                  <span key={skill} className="skill-pill">
                    {skill}
                  </span>
                ))}
              </div>
              <p className="text-muted text-sm leading-relaxed">
                {project.description}
              </p>
            </li>
          ))}
        </ul>
      </section>

      {/* Contact */}
      <section>
        <h2 className="text-sm font-medium text-muted uppercase tracking-wide mb-4">
          Connect
        </h2>
        <ul className="flex flex-wrap gap-x-4 gap-y-2">
          {socials.map((social) => (
            <li key={social.name}>
              <a
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm"
              >
                {social.name}
              </a>
            </li>
          ))}
        </ul>
      </section>
    </main>
  );
}

const projects = [
  {
    name: "Project One",
    description: "A brief description of what this project does and the problem it solves.",
    link: "https://github.com/kartikeya",
    wip: false,
  },
  {
    name: "Project Two",
    description: "Another project with interesting technical challenges and solutions.",
    link: "https://github.com/kartikeya",
    wip: false,
  },
  {
    name: "Project Three",
    description: "Currently building something exciting. Stay tuned.",
    link: "https://github.com/kartikeya",
    wip: true,
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
          Crafting interfaces and experiences. Design engineer exploring the intersection of design and code.
        </p>
      </section>

      {/* About */}
      <section className="mb-16">
        <h2 className="text-sm font-medium text-muted uppercase tracking-wide mb-4">
          About
        </h2>
        <div className="space-y-4 leading-relaxed">
          <p>
            I&apos;m a developer who cares deeply about how things look and feel.
            I believe great software is built at the intersection of design and engineering.
          </p>
          <p>
            Currently focused on building polished web experiences and learning the craft of interface design.
          </p>
        </div>
      </section>

      {/* Projects */}
      <section className="mb-16">
        <h2 className="text-sm font-medium text-muted uppercase tracking-wide mb-4">
          Projects
        </h2>
        <ul className="space-y-6">
          {projects.map((project) => (
            <li key={project.name}>
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="group block no-underline"
              >
                <div className="flex items-center gap-2 mb-1">
                  <span className="font-medium group-hover:underline">
                    {project.name}
                  </span>
                  {project.wip && <span className="badge">WIP</span>}
                </div>
                <p className="text-muted text-sm">{project.description}</p>
              </a>
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

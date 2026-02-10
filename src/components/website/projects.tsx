import { ExternalLink } from "lucide-react";
import { Badge } from "@/components/ui/badge";

const projects = [
    {
        name: "GitXhibit",
        description:
            "AI-powered portfolio generator that creates developer portfolios from GitHub data using LLaMA 3.1 for content generation.",
        skills: ["Next.js", "TypeScript", "Drizzle ORM", "PostgreSQL", "Groq AI", "Octokit"],
        github: "https://github.com/k4rtikay/ai-folio",
        demo: "https://gitxhibit.vercel.app/",
        wip: false,
    },
    {
        name: "Flow-Kit",
        description:
            "Open source React component library with animated, accessible UI components and MDX documentation.",
        skills: ["React", "TypeScript", "Next.js", "Tailwind CSS", "Motion"],
        github: "https://github.com/k4rtikay/ui-library",
        demo: "https://flow-kit-beta.vercel.app/",
        wip: false,
    },
    {
        name: "HueDex",
        description:
            "Color palette generator that extracts colors from 600+ Pokémon sprites with Firebase auth and palette persistence.",
        skills: ["React", "Firebase", "ColorThief", "Framer Motion", "SCSS", "Vite"],
        github: "https://github.com/k4rtikay/pokedex",
        demo: "https://huedex.netlify.app/",
        wip: false,
    },
];

export function Projects() {
    return (
        <section className="mb-16">
            <h2 className="text-sm font-medium text-muted-foreground tracking-wide mb-4">
                Projects
            </h2>
            <ul className="space-y-8">
                {projects.map((project) => (
                    <li key={project.name}>
                        <div className="flex items-center justify-between gap-4 mb-2">
                            <div className="flex items-center gap-2">
                                <span className="font-medium text-sm tracking-wide">{project.name}</span>
                                {project.wip && (
                                    <Badge variant="secondary" className="text-xs">
                                        WIP
                                    </Badge>
                                )}
                            </div>
                            <div className="flex items-center gap-3">
                                <a
                                    href={project.github}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                                >
                                    Source
                                </a>
                                <a
                                    href={project.demo}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center gap-1 text-sm text-foreground hover:text-foreground transition-colors"
                                >
                                    Demo
                                    <ExternalLink size={12} />
                                </a>
                            </div>
                        </div>

                        <p className="text-muted-foreground text-sm leading-relaxed">
                            {project.description}
                        </p>

                        <div className="flex flex-wrap gap-1.5 my-2">
                            {project.skills.map((skill) => (
                                <Badge key={skill} variant="outline" className="text-xs font-normal rounded-md">
                                    {skill}
                                </Badge>
                            ))}
                        </div>
                    </li>
                ))}
            </ul>
        </section>
    );
}

import { ProjectRow } from "./project-row";
import { FadeIn } from "./fade-in";

const projects = [
    {
        name: "GitXhibit",
        year: "2025",
        description:
            "AI-powered portfolio generator that creates developer portfolios from GitHub data using LLaMA 3.1 for content generation.",
        skills: ["Next.js", "TypeScript", "Drizzle ORM", "PostgreSQL", "Groq AI", "Octokit"],
        github: "https://github.com/k4rtikay/ai-folio",
        demo: "https://gitxhibit.vercel.app/",
        image: ["/gitxhibit-3.png","/gitxhibit-2.png","/gitxhibit-1.png"],
        icon: "/gitxhibit-icon.png",
        wip: false,
    },
    {
        name: "Flow-Kit",
        year: "2025",
        description:
            "Open source React component library with animated, accessible UI components and MDX documentation.",
        skills: ["React", "TypeScript", "Next.js", "Tailwind CSS", "Motion"],
        github: "https://github.com/k4rtikay/ui-library",
        demo: "https://flow-kit-beta.vercel.app/",
        image: ["/flowkit-3.png","/flowkit-2.png","/flowkit-1.png"],
        icon: "/flow-kit-icon.png",
        wip: true,
    },
    {
        name: "HueDex",
        year: "2025",
        description:
            "Color palette generator that extracts colors from 600+ Pokémon sprites with Firebase auth and palette persistence.",
        skills: ["React", "Firebase", "ColorThief", "Framer Motion", "SCSS", "Vite"],
        github: "https://github.com/k4rtikay/pokedex",
        demo: "https://huedex.netlify.app/",
        image: ["/Huedex-ss-3.png","/Huedex-ss-2.png","/Huedex-ss-1.png"],
        icon: "/huedex-favicon-32x32.png",
        wip: false,
    },
];

export function Projects() {
    return (
        <section>
            <h2 className="font-[family-name:var(--font-fraunces)] text-lg text-foreground tracking-wider mb-6">
                Projects
            </h2>
            <div className="">
                {projects.map((project, index) => (
                    <FadeIn
                    delay={index*0.01 + 0.2}
                    key={project.name}
                    >
                        <ProjectRow project={project} index={index} />
                    </FadeIn>
                ))}
            </div>
        </section>
    );
}

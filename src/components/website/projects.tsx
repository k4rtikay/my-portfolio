import { ProjectRow } from "./project-row";
import { FadeIn } from "./fade-in";
import gitxhibit3 from "@/public/gitxhibit-3.png";
import gitxhibit2 from "@/public/gitxhibit-2.png";
import gitxhibit1 from "@/public/gitxhibit-1.png";
import gitxhibitIcon from "@/public/gitxhibit-icon.png";
import flowkit3 from "@/public/flowkit-3.png";
import flowkit2 from "@/public/flowkit-2.png";
import flowkit1 from "@/public/flowkit-1.png";
import flowKitIcon from "@/public/flow-kit-icon.png";
import huedex3 from "@/public/Huedex-ss-3.png";
import huedex2 from "@/public/Huedex-ss-2.png";
import huedex1 from "@/public/Huedex-ss-1.png";
import huedexIcon from "@/public/huedex-favicon-32x32.png";

const projects = [
    {
        name: "GitXhibit",
        year: "2025",
        description:
            "AI-powered portfolio generator that creates developer portfolios from GitHub data using LLaMA 3.1 for content generation.",
        skills: ["Next.js", "TypeScript", "Drizzle ORM", "PostgreSQL", "Groq AI", "Octokit"],
        github: "https://github.com/k4rtikay/ai-folio",
        demo: "https://gitxhibit.vercel.app/",
        image: [gitxhibit3, gitxhibit2, gitxhibit1],
        icon: gitxhibitIcon,
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
        image: [flowkit3, flowkit2, flowkit1],
        icon: flowKitIcon,
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
        image: [huedex3, huedex2, huedex1],
        icon: huedexIcon,
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

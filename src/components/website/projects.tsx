"use client";

import Image from "next/image";
import { ExternalLinkIcon, CodeIcon } from "lucide-react";
import { motion } from "motion/react";

const projects = [
    {
        name: "GitXhibit",
        year: "2025",
        description:
            "AI-powered portfolio generator that creates developer portfolios from GitHub data using LLaMA 3.1 for content generation.",
        skills: ["Next.js", "TypeScript", "Drizzle ORM", "PostgreSQL", "Groq AI", "Octokit"],
        github: "https://github.com/k4rtikay/ai-folio",
        demo: "https://gitxhibit.vercel.app/",
        image: "/gitxhibit-demo.png",
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
        image: "/flow-kit-demo.png",
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
        image: "/huedex-demo.png",
        wip: false,
    },
];

export function Projects() {
    return (
        <section className="mb-16">
            <h2 className="text-base sm:text-sm font-medium text-muted-foreground tracking-wide mb-6">
                Projects
            </h2>
            <div className="space-y-12">
                {projects.map((project, index) => (
                    <motion.article
                        key={project.name}
                        initial={{ opacity: 0, y: 16 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{
                            duration: 0.4,
                            delay: index * 0.1,
                            ease: [0.25, 0.46, 0.45, 0.94],
                        }}
                        className="group -mx-4 sm:-mx-5 px-4 sm:px-5 py-4 rounded-xl transition-colors duration-300 ease-out hover:bg-muted/50"
                    >
                        {/* Text Content */}
                        <div className="space-y-3">
                            {/* Header: Title + Year/WIP */}
                            <div className="flex items-center justify-between">
                                <h3 className="font-medium text-base sm:text-sm tracking-wide text-foreground">
                                    {project.name}
                                </h3>
                                <div className="flex items-center gap-2">
                                    {project.wip && (
                                        <span className="text-[11px] font-semibold tracking-wider uppercase text-amber-700 dark:text-amber-400 bg-amber-100 dark:bg-amber-400/15 px-2.5 py-0.5 rounded-full border border-amber-200 dark:border-amber-400/20">
                                            WIP
                                        </span>
                                    )}
                                    <span className="text-xs text-muted-foreground font-normal tabular-nums">
                                        {project.year}
                                    </span>
                                </div>
                            </div>

                            {/* Description */}
                            <p className="text-muted-foreground text-base sm:text-sm leading-relaxed">
                                {project.description}
                            </p>

                            {/* Skill Pills */}
                            <div className="flex flex-wrap gap-1.5">
                                {project.skills.map((skill) => (
                                    <span
                                        key={skill}
                                        className="text-xs font-normal text-muted-foreground bg-muted/80 dark:bg-muted/50 px-2.5 py-0.5 rounded-full border border-border/50 transition-colors"
                                    >
                                        {skill}
                                    </span>
                                ))}
                            </div>

                            {/* Links */}
                            <div className="flex items-center gap-3 pt-2">
                                <a
                                    href={project.demo}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-sm sm:text-xs font-medium text-white bg-blue-500 hover:bg-blue-600 dark:bg-blue-500 dark:hover:bg-blue-400 transition-all inline-flex items-center gap-1.5 px-4 py-1.5 rounded-lg shadow-sm"
                                >
                                    <ExternalLinkIcon size={13} />
                                    Live Site
                                </a>
                                <a
                                    href={project.github}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-sm sm:text-xs font-medium text-foreground/80 hover:text-foreground border border-border hover:border-foreground/20 transition-all inline-flex items-center gap-1.5 px-4 py-1.5 rounded-lg"
                                >
                                    <CodeIcon size={13} />
                                    Source
                                </a>
                            </div>
                        </div>

                        {/* Project Image */}
                        <div className="mt-4 overflow-hidden rounded-lg border border-border/60 shadow-sm">
                            <Image
                                src={project.image}
                                alt={`${project.name} screenshot`}
                                width={650}
                                height={400}
                                className="w-full h-auto object-cover transition-transform duration-500 ease-out group-hover:scale-105"
                            />
                        </div>
                    </motion.article>
                ))}
            </div>
        </section>
    );
}

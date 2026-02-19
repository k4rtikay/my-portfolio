"use client";

import { useState } from "react";
import { ExternalLinkIcon, CodeIcon } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { motion, LayoutGroup, AnimatePresence } from "motion/react";
import {
    Accordion,
    AccordionItem,
    AccordionTrigger,
    AccordionContent,
} from "@/components/ui/accordion";

const projects = [
    {
        name: "GitXhibit",
        year: "2025",
        description:
            "AI-powered portfolio generator that creates developer portfolios from GitHub data using LLaMA 3.1 for content generation.",
        skills: ["Next.js", "TypeScript", "Drizzle ORM", "PostgreSQL", "Groq AI", "Octokit"],
        github: "https://github.com/k4rtikay/ai-folio",
        demo: "https://gitxhibit.vercel.app/",
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
        wip: false,
    },
];

export function Projects() {
    const [hoveredProject, setHoveredProject] = useState<string | null>(null);
    const [openProject, setOpenProject] = useState<string | undefined>(undefined);

    const activeProject = hoveredProject ?? openProject;

    return (
        <section className="mb-16">
            <h2 className="text-base sm:text-sm font-medium text-muted-foreground tracking-wide mb-4">
                Projects
            </h2>
            <LayoutGroup id="projects">
                <Accordion
                    type="single"
                    collapsible
                    value={openProject}
                    onValueChange={(value) => setOpenProject(value || undefined)}
                    className="space-y-1"
                >
                    {projects.map((project) => (
                        <AccordionItem key={project.name} value={project.name}>
                            <div
                                className="relative"
                                onMouseEnter={() => setHoveredProject(project.name)}
                                onMouseLeave={() => setHoveredProject(null)}
                            >
                                <AnimatePresence>
                                    {activeProject === project.name && (
                                        <motion.div
                                            layoutId="project-hover"
                                            layout
                                            className="absolute inset-0 -mx-8 sm:-mx-6 bg-foreground/5 rounded-md"
                                            initial={{ opacity: 0 }}
                                            animate={{ opacity: 1 }}
                                            exit={{ opacity: 0 }}
                                            transition={{
                                                layout: {
                                                    type: "spring",
                                                    damping: 30,
                                                    stiffness: 500,
                                                },
                                                opacity: { duration: 0.15 },
                                            }}
                                        />
                                    )}
                                </AnimatePresence>
                                <AccordionTrigger className="hover:no-underline relative z-10 py-2.5">
                                    <div className="flex items-center justify-between w-full">
                                        <a
                                            href={project.demo}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="font-medium text-base sm:text-sm tracking-wide inline-flex items-center gap-1.5 underline decoration-transparent hover:decoration-current transition-all duration-200 ease-out"
                                            onClick={(e) => e.stopPropagation()}
                                        >
                                            {project.name}
                                            <ExternalLinkIcon size={12} />
                                        </a>
                                        <div className="flex items-center gap-2">
                                            {project.wip && (
                                                <Badge variant="secondary" className="text-xs bg-muted">
                                                    WIP
                                                </Badge>
                                            )}
                                            <span className="text-xs text-muted-foreground font-normal tabular-nums">
                                                {project.year}
                                            </span>
                                        </div>
                                    </div>
                                </AccordionTrigger>
                                <AccordionContent className="px-2">
                                    <motion.div
                                        className="mt-2 space-y-2"
                                        initial={{ opacity: 0, y: -5 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{
                                            type: "spring",
                                            damping: 20,
                                            stiffness: 200,
                                        }}
                                    >
                                        <p className="text-muted-foreground text-base sm:text-sm leading-relaxed">
                                            {project.description}
                                        </p>

                                        <div className="flex flex-wrap gap-1.5">
                                            {project.skills.map((skill) => (
                                                <Badge key={skill} variant="outline" className="text-xs font-normal rounded-md">
                                                    {skill}
                                                </Badge>
                                            ))}
                                        </div>

                                        <a
                                            href={project.github}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="mt-2 text-sm sm:text-xs text-muted-foreground hover:text-foreground transition-colors inline-flex items-center gap-1.5 bg-muted px-2.5 py-1 rounded-md"
                                        >
                                            <CodeIcon size={12} /> Source
                                        </a>
                                    </motion.div>
                                </AccordionContent>
                            </div>
                        </AccordionItem>
                    ))}
                </Accordion>
            </LayoutGroup>
        </section>
    );
}


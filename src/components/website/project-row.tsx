"use client";

import Image from "next/image";
import { AnimatePresence, motion } from "motion/react";
import { useState } from "react";

interface ProjectRowProps {
    project: {
        name: string;
        year: string;
        description: string;
        skills: string[];
        github: string;
        demo: string;
        image: string[];
        icon: string;
        wip: boolean;
    };
    index: number;
}

export function ProjectRow({ project, index }: ProjectRowProps) {
    const [isHovered, setIsHovered] = useState(false);

    const stackVariants = [
        { rotate: -6, x: -10, y: 20, zIndex: 50 },
        { rotate: 6, x: 60, y: 10, zIndex: 55},
        { rotate: 2, x: 30, y: 0, zIndex: 60 },
    ];

    return (
        <motion.a
            key={project.name}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
                duration: 0.4,
                delay: index * 0.1,
                ease: [0.25, 0.46, 0.45, 0.94],
            }}
            className="w-full block group relative z-0 hover:z-50 px-2 sm:px-4 py-2 rounded-lg transition-colors duration-240 ease-out hover:bg-muted"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            href={project.demo}
            target="_blank"
            rel="noopener noreferrer"
        >
            <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                    <Image src={project.icon} alt={project.name} width={64} height={64} className="rounded-xs w-4 h-4" />
                    <h3 className="text-sm text-foreground group-hover:text-primary transition-colors duration-240 ease-out">
                        {project.name}
                    </h3>
                </div>
                <div className="flex items-center gap-2">
                    {project.wip && (
                        <span className="text-[11px] font-semibold tracking-wider uppercase text-amber-700 dark:text-amber-400 bg-amber-100 dark:bg-amber-500/15 px-2.5 py-0.5 rounded-full border border-amber-200 dark:border-amber-400/20">
                            WIP
                        </span>
                    )}
                    <span className="text-xs text-muted-foreground font-normal tabular-nums">
                        {project.year}
                    </span>
                </div>
            </div>
            <div className="absolute right-10 top-1/2 -translate-y-1/2 pointer-events-none">
                <AnimatePresence>
                    {isHovered &&
                        project.image.map((src, index) => (
                            <motion.div
                                key={index}
                                // Origin is bottom-left so they fan out like a deck of cards
                                className="absolute origin-bottom-left overflow-hidden rounded-xl shadow-2xl border border-border-muted"
                                style={{
                                    width: 160,
                                    height: 100,
                                    zIndex: stackVariants[index].zIndex,
                                }}
                                initial={{
                                    opacity: 0,
                                    scale: 0.5,
                                    rotate: 0,
                                    x: 0,
                                    y: 0
                                }}
                                animate={{
                                    opacity: 1,
                                    scale: 1,
                                    rotate: stackVariants[index].rotate,
                                    x: stackVariants[index].x,
                                    y: stackVariants[index].y,
                                }}
                                exit={{
                                    opacity: 0,
                                    scale: 0.5,
                                    rotate: 0,
                                    x: 0,
                                    y: 0
                                }}
                                transition={{
                                    type: "spring",
                                    stiffness: 260,
                                    damping: 20,
                                    // Stagger the animation so the bottom card flies out first
                                    delay: index * 0.04,
                                }}
                            >
                                <Image
                                    src={src}
                                    alt={`${project.name} screenshot ${index + 1}`}
                                    fill
                                    className="object-cover"
                                />
                            </motion.div>
                        ))}
                </AnimatePresence>
            </div>
        </motion.a>
    );
}

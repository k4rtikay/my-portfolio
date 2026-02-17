"use client";

import { AnimatePresence, motion } from "motion/react";
import { useState } from "react";

const socials = [
    { name: "Twitter", href: "https://twitter.com/br1dge_" },
    { name: "GitHub", href: "https://github.com/k4rtikay" },
    { name: "LinkedIn", href: "https://linkedin.com/in/kartikeya" },
    { name: "Email", href: "mailto:hello@kartikeya.dev" },
];

export function Contact() {
    const [hovered, setHovered] = useState(false);
    return (
        <section>
            <h2 className="text-base sm:text-sm font-medium text-muted-foreground tracking-wide mb-4">
                Connect
            </h2>

            <div className="text-base sm:text-sm leading-relaxed tracking-wide">
                Reach out to me at <a href={socials[0].href} target="_blank" rel="noopener noreferrer" className="font-medium underline decoration-muted-foreground/30 hover:decoration-foreground transition-colors ease-out">@kkmis</a> or <a href={socials[3].href} target="_blank" rel="noopener noreferrer" className="font-medium underline decoration-muted-foreground/30 hover:decoration-foreground transition-colors">email me</a>
            </div>

            <div className="text-base sm:text-sm leading-relaxed tracking-wide">
                You can see more of my work on my <motion.span
                    onMouseEnter={() => setHovered(true)}
                    onMouseLeave={() => setHovered(false)}
                    className="inline-flex items-baseline"
                    layout
                >
                    <AnimatePresence mode="wait">
                        {hovered ? (
                            <motion.a
                                key="pill"
                                initial={{ opacity: 0.5, filter: "blur(4px)" }}
                                animate={{ opacity: 1, filter: "blur(0px)" }}
                                exit={{ opacity: 0.5, filter: "blur(4px)" }}
                                transition={{ duration: 0.15, ease: "easeInOut" }}
                                href={socials[1].href} target="_blank" rel="noopener noreferrer" className="bg-muted px-2 rounded-full">k4rtikay</motion.a>
                        ) : (
                            <motion.a
                                key="link"
                                initial={{ opacity: 0.5, filter: "blur(4px)" }}
                                animate={{ opacity: 1, filter: "blur(0px)" }}
                                exit={{ opacity: 0.5, filter: "blur(4px)" }}
                                transition={{ duration: 0.15, ease: "easeInOut" }}
                                href={socials[1].href} target="_blank" rel="noopener noreferrer" className="font-medium underline decoration-muted-foreground/30 hover:decoration-foreground transition-colors ease-out">github</motion.a>
                        )}
                    </AnimatePresence>

                </motion.span>
            </div>

        </section>
    );
}

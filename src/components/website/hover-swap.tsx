"use client";

import { AnimatePresence, motion } from "motion/react";
import { type ReactNode, useState } from "react";

interface HoverSwapProps {
    href: string;
    defaultContent: ReactNode;
    hoverContent: ReactNode;
    defaultClassName?: string;
    hoverClassName?: string;
    target?: string;
    rel?: string;
}

export function HoverSwap({
    href,
    defaultContent,
    hoverContent,
    defaultClassName = "",
    hoverClassName = "",
    target,
    rel,
}: HoverSwapProps) {
    const [hovered, setHovered] = useState(false);

    return (
        <motion.span
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
            className="inline-flex items-baseline"
            layout
        >
            <AnimatePresence mode="wait">
                {hovered ? (
                    <motion.a
                        key="hover"
                        initial={{ opacity: 0.5, filter: "blur(4px)" }}
                        animate={{ opacity: 1, filter: "blur(0px)" }}
                        exit={{ opacity: 0.5, filter: "blur(4px)" }}
                        transition={{ duration: 0.15, ease: "easeInOut" }}
                        href={href}
                        target={target}
                        rel={rel}
                        className={hoverClassName}
                    >
                        {hoverContent}
                    </motion.a>
                ) : (
                    <motion.a
                        key="default"
                        initial={{ opacity: 0.5, filter: "blur(4px)" }}
                        animate={{ opacity: 1, filter: "blur(0px)" }}
                        exit={{ opacity: 0.5, filter: "blur(4px)" }}
                        transition={{ duration: 0.15, ease: "easeInOut" }}
                        href={href}
                        target={target}
                        rel={rel}
                        className={defaultClassName}
                    >
                        {defaultContent}
                    </motion.a>
                )}
            </AnimatePresence>
        </motion.span>
    );
}

"use client";

import { AnimatePresence, motion } from "motion/react";
import { type ReactNode, useCallback, useEffect, useRef, useState } from "react";

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
    const ref = useRef<HTMLSpanElement>(null);

    // Safety: if the element shifts (e.g. text wraps) and the pointer
    // is no longer over it, reset hover to prevent stuck state.
    const checkPointer = useCallback((e: PointerEvent) => {
        if (!hovered || !ref.current) return;
        const rect = ref.current.getBoundingClientRect();
        const inside =
            e.clientX >= rect.left &&
            e.clientX <= rect.right &&
            e.clientY >= rect.top &&
            e.clientY <= rect.bottom;
        if (!inside) setHovered(false);
    }, [hovered]);

    useEffect(() => {
        if (!hovered) return;
        window.addEventListener("pointermove", checkPointer);
        return () => window.removeEventListener("pointermove", checkPointer);
    }, [hovered, checkPointer]);

    return (
        <motion.span
            ref={ref}
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
            className="inline-flex items-baseline h-[1lh]"
        // layout
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

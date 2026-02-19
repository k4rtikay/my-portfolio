"use client";

import { motion, useReducedMotion } from "motion/react";

interface FadeInProps {
    children: React.ReactNode;
    delay?: number;
    className?: string;
}

export function FadeIn({ children, delay = 0, className }: FadeInProps) {
    const prefersReducedMotion = useReducedMotion();

    return (
        <motion.div
            className={className}
            initial={
                prefersReducedMotion
                    ? { opacity: 0 }
                    : { opacity: 0, y: 20 }
            }
            animate={{ opacity: 1, y: 0 }}
            transition={{
                type: "spring",
                damping: 25,
                stiffness: 200,
                delay,
            }}
        >
            {children}
        </motion.div>
    );
}

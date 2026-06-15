"use client";

import { ActivityCalendar } from "react-activity-calendar";
import { useTheme } from "next-themes";
import { useState, useEffect } from "react";
import { motion } from "motion/react";

const heatmapTheme = {
    light: ["#f8fafc", "#fde68a", "#f59e0b", "#ea580c", "#9a3412"],
    dark: ["#161b22", "#7c2d12", "#c2410c", "#ea580c", "#fb923c"],
};

export function HeatmapUI({ data }: { data: any[] }) {
    const { resolvedTheme } = useTheme();
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    if (!data || data.length === 0) return null;

    return (
        <section>
            <h2 className="font-[family-name:var(--font-fraunces)] text-lg text-foreground tracking-wide mb-6">
                Activity
            </h2>
            <motion.div
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, ease: "easeOut" }}
                className="relative z-[1] w-full overflow-x-auto heatmap-scroll px-4 hover:scale-101 transition-transform duration-240 ease-out [-webkit-mask-image:linear-gradient(to_right,black_85%,transparent_100%)] [mask-image:linear-gradient(to_right,black_85%,transparent_100%)] md:[-webkit-mask-image:none] md:[mask-image:none]">
                <ActivityCalendar
                    data={data}
                    fontSize={10}
                    blockSize={8.5}
                    blockMargin={2.2}
                    blockRadius={2.2}
                    colorScheme={!mounted ? "dark" : resolvedTheme === "dark" ? "dark" : "light"}
                    theme={heatmapTheme}
                    labels={{
                        totalCount: "{{count}} contributions in the last year",
                    }}
                />
            </motion.div>
        </section>
    );
}
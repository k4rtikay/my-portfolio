"use client";

import { useState, useEffect } from "react";
import { ActivityCalendar } from "react-activity-calendar";
import { useTheme } from "next-themes";

const heatmapTheme = {
    light: ["#ebedf0", "#9be9a8", "#40c463", "#30a14e", "#216e39"],
    dark: ["#161b22", "#0e4429", "#006d32", "#26a641", "#39d353"],
};

async function fetchHeatmapData() {
    try {
        const res = await fetch(
            `https://github-contributions-api.jogruber.de/v4/k4rtikay?y=last`
        );
        if (!res.ok) return [];
        const json = await res.json();
        return json.contributions ?? [];
    } catch {
        return [];
    }
}

export function GithubHeatmap() {
    const { resolvedTheme } = useTheme();
    const [data, setData] = useState<any[]>([]);
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
        fetchHeatmapData().then(setData);
    }, []);

    if (!mounted || data.length === 0) {
        return (
            <section className="mb-16">
                <h2 className="text-base sm:text-sm font-medium text-muted-foreground tracking-wide mb-6">
                    Activity
                </h2>
                <div className="h-[162px]" />
            </section>
        );
    }

    return (
        <section className="mb-16">
            <h2 className="text-base sm:text-sm font-medium text-muted-foreground tracking-wide mb-6">
                Activity
            </h2>
            <div className="relative z-[1] w-full overflow-x-auto bg-background heatmap-scroll">
                <ActivityCalendar
                    data={data}
                    fontSize={11}
                    blockSize={10}
                    blockMargin={3}
                    blockRadius={1}
                    colorScheme={resolvedTheme === "dark" ? "dark" : "light"}
                    theme={heatmapTheme}
                    labels={{
                        totalCount: "{{count}} contributions in the last year",
                    }}
                    showWeekdayLabels
                />
            </div>
        </section>
    );
}

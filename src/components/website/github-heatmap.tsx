"use client";

import { useEffect, useState } from "react";
import { ActivityCalendar } from "react-activity-calendar";
import { useTheme } from "next-themes";

interface HeatmapProps {
    data: any[];
}

const heatmapTheme = {
    light: ["#ebedf0", "#c6c6c6", "#8c8c8c", "#525252", "#1a1a1a"],
    dark: ["#1a1a1a", "#303030", "#4a4a4a", "#707070", "#d4d4d4"],
};

export function GithubHeatmap({ data }: HeatmapProps) {
    const { resolvedTheme } = useTheme();
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    return (
        <section className="mb-16">
            <h2 className="text-base sm:text-sm font-medium text-muted-foreground tracking-wide mb-6">
                Activity
            </h2>
            <div className="relative z-[1] w-full overflow-x-auto bg-background heatmap-scroll">
                {mounted ? (
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
                ) : (
                    <div style={{ height: 108 }} />
                )}
            </div>
        </section>
    );
}

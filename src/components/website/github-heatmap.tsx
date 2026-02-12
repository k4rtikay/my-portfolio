"use client";

import { useEffect, useState } from "react";
import { ActivityCalendar } from "react-activity-calendar";
import { useTheme } from "next-themes";

interface HeatmapProps {
    username: string;
}

const heatmapTheme = {
    light: ["#ebedf0", "#c6c6c6", "#8c8c8c", "#525252", "#1a1a1a"],
    dark: ["#1a1a1a", "#303030", "#4a4a4a", "#707070", "#d4d4d4"],
};

export function GithubHeatmap({ username }: HeatmapProps) {
    const [data, setData] = useState<any[]>([]);
    const [loading, setLoading] = useState(true);
    const { resolvedTheme } = useTheme();

    useEffect(() => {
        const fetchHeatmapData = async () => {
            try {
                setLoading(true);
                const res = await fetch(
                    `https://github-contributions-api.jogruber.de/v4/${username}?y=last`
                );

                if (!res.ok) {
                    throw new Error(`Failed to fetch data: ${res.status}`);
                }

                const json = await res.json();

                if (json.contributions) {
                    setData(json.contributions);
                }
            } catch (error) {
                console.error("Heatmap Error:", error);
            } finally {
                setLoading(false);
            }
        };

        fetchHeatmapData();
    }, [username]);

    if (loading) {
        return (
            <section className="mb-16">
                <h2 className="text-sm font-medium text-muted-foreground tracking-wide mb-4">
                    Activity
                </h2>
                <div className="w-full h-32 flex items-center justify-center text-xs text-muted-foreground">
                    Loading activity...
                </div>
            </section>
        );
    }

    return (
        <section className="mb-16">
            <h2 className="text-sm font-medium text-muted-foreground tracking-wide mb-6">
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

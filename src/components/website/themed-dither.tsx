"use client";

import { useTheme } from "next-themes";
import Dither from "@/components/Dither";
import { ComponentProps } from "react";

type DitherProps = ComponentProps<typeof Dither>;

export function ThemedDither(props: DitherProps) {
    const { resolvedTheme } = useTheme();
    const isDark = resolvedTheme === "dark";

    return (
        <Dither
            waveSpeed={0.05}
            waveFrequency={3}
            waveAmplitude={0.3}
            waveColor={isDark ? [0.5, 0.5, 0.5] : [0.15, 0.15, 0.15]}
            backgroundColor={isDark ? [0.0, 0.0, 0.0] : [0.92, 0.92, 0.91]}
            colorNum={4}
            pixelSize={2}
            disableAnimation={false}
            enableMouseInteraction
            mouseRadius={0.3}
            mouseStrength={isDark ? -0.5 : 0.5}
            {...props}
        />
    );
}

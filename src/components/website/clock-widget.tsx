"use client";

import { useState, useEffect } from "react";
import { motion } from "motion/react";

const TIME_THEMES = {
    dawn: {
        bg: "radial-gradient(ellipse 75% 100% at bottom center, rgba(79, 70, 229, 1) 0%, rgba(168, 85, 247, 0.6) 60%, rgba(168, 85, 247, 0) 100%), linear-gradient(to bottom, rgba(0,0,0,0) 0%, rgba(0,0,0,0) 100%)",
        text: "#000000",
        subtext: "#000000",
    },
    morning: {
        bg: "radial-gradient(ellipse 75% 100% at bottom center, rgba(168, 85, 247, 1) 0%, rgba(251, 146, 60, 0.5) 60%, rgba(251, 146, 60, 0) 100%), linear-gradient(to bottom, rgba(0,0,0,0) 0%, rgba(0,0,0,0) 100%)",
        text: "#000000",
        subtext: "#000000",
    },
    day: {
        bg: "radial-gradient(ellipse 75% 100% at bottom center, rgba(59, 130, 246, 1) 0%, rgba(125, 211, 252, 0.6) 60%, rgba(125, 211, 252, 0) 100%), linear-gradient(to bottom, rgba(0,0,0,0) 0%, rgba(0,0,0,0) 100%)",
        text: "#000000",
        subtext: "#000000",
    },
    dusk: {
        bg: "radial-gradient(ellipse 75% 100% at bottom center, rgba(253, 186, 116, 1) 0%, rgba(125, 211, 252, 0.6) 60%, rgba(125, 211, 252, 0) 100%), linear-gradient(to bottom, rgba(0,0,0,0) 0%, rgba(0,0,0,0) 100%)",
        text: "#000000",
        subtext: "#000000",
    },
    evening: {
        bg: "radial-gradient(ellipse 75% 100% at bottom center, rgba(234, 88, 12, 1) 0%, rgba(147, 51, 234, 0.6) 60%, rgba(147, 51, 234, 0) 100%), linear-gradient(to bottom, rgba(0,0,0,0) 0%, rgba(0,0,0,0) 100%)",
        text: "#000000",
        subtext: "#000000",
    },
    night: {
        bg: "radial-gradient(ellipse 120% 120% at bottom center, rgba(255, 255, 255, 1) 0%, rgba(0, 102, 255, 0.7) 60%, rgba(0, 102, 255, 0) 100%), linear-gradient(to bottom, #0f172a 0%, #1e3a8a 100%)",
        text: "#ffffff",
        subtext: "#0081CC",
    },
};

const getTimeOfDay = (hours:number) => {
    if (hours >= 5 && hours < 8) return "dawn";
    if (hours >= 8 && hours < 12) return "morning";
    if (hours >= 12 && hours < 16) return "day";
    if (hours >= 16 && hours < 18) return "dusk";
    if (hours >= 18 && hours < 20) return "evening";
    return "night";
};
export default function ClockWidget() {
    const [time, setTime] = useState(new Date());

    // const [testHour, setTestHour] = useState(12);

    useEffect(() => {
        const timer = setInterval(() => {
            setTime(new Date());
        }, 60000);

        return () => clearInterval(timer);
    }, []);

    const formattedTime = time.toLocaleTimeString([], {
        hour: "2-digit",
        minute: "2-digit",
        hour12: false,
    });

    const currentTheme = TIME_THEMES[getTimeOfDay(time.getHours())];
    // const currentTheme = TIME_THEMES[getTimeOfDay(testHour)];

    return (
        <>
            <div className="relative p-4 overflow-hidden flex flex-col items-center justify-center h-full">
                <motion.div
                    className="absolute inset-0 -z-10"
                    animate={{ background: currentTheme.bg }}
                    transition={{ duration: 1.5, ease: "easeInOut" }}
                />

                <div
                    className="absolute inset-0 -z-10 opacity-25 mix-blend-overlay"
                    style={{ backgroundImage: "url('/noise.png')" }}
                />

                <motion.p
                    className="text-4xl font-semibold tracking-tight text-shadow-lg"
                    animate={{ color: currentTheme.text }}
                    transition={{ duration: 2 }}
                    suppressHydrationWarning
                >
                    {formattedTime}
                </motion.p>

                <motion.p
                    className="text-xs font-medium tracking-wider text-shadow-sm mt-1"
                    animate={{ color: currentTheme.subtext }}
                    transition={{ duration: 2 }}
                >
                    New Delhi • IN
                </motion.p>
            </div>

            {/* <div className="fixed bottom-4 right-4 z-50 flex flex-col items-center p-4 bg-secondary/90 backdrop-blur rounded-lg shadow-lg">
                <label className="text-xs font-bold mb-2">  
                    Time Machine: {testHour}:00 ({getTimeOfDay(testHour)})
                </label>
                <input
                    type="range"
                    min="0"
                    max="23"
                    value={testHour}
                    onChange={(e) => setTestHour(Number(e.target.value))}
                    className="w-48 cursor-pointer"
                />
            </div> */}
        </>
    );
}
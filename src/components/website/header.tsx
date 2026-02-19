"use client";

export function Header() {
    // The header is intentionally taller than the visible blur zone.
    // All layer masks fade out well before the bottom edge (max 70%),
    // so no backdrop-filter compositing boundary exists at the bottom.
    // This eliminates the hard "line" entirely.
    const layers = [
        { blur: 0.15, start: 0, end: 0 },
        { blur: 0.25, start: 5, end: 5 },
        { blur: 0.35, start: 10, end: 10 },
        { blur: 0.45, start: 15, end: 15 },
        { blur: 0.55, start: 20, end: 20 },
        { blur: 0.65, start: 25, end: 25 },
        { blur: 0.75, start: 30, end: 30 },
        { blur: 0.85, start: 35, end: 35 },
        { blur: 0.95, start: 40, end: 40 },
        { blur: 1.05, start: 45, end: 45 },
        { blur: 1.15, start: 50, end: 50 },
        { blur: 1.25, start: 55, end: 55 },
        { blur: 1.35, start: 60, end: 60 },
    ];

    return (
        <header
            className="fixed top-0 left-0 right-0 z-50 pointer-events-none"
            aria-hidden="true"
            style={{ height: 140 }}
        >
            {layers.map((l, i) => (
                <div
                    key={i}
                    className="absolute inset-0"
                    style={{
                        backdropFilter: `blur(${l.blur}px)`,
                        WebkitBackdropFilter: `blur(${l.blur}px)`,
                        mask: `linear-gradient(to bottom, rgb(0,0,0) ${l.start}%, transparent ${l.end}%)`,
                        WebkitMask: `linear-gradient(to bottom, rgb(0,0,0) ${l.start}%, transparent ${l.end}%)`,
                    }}
                />
            ))}
        </header>
    );
}

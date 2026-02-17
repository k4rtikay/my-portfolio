"use client";

import Image from "next/image";
import { Mail } from "lucide-react";
import { HoverSwap } from "./hover-swap";

const socials = [
    { name: "Twitter", href: "https://twitter.com/br1dge_" },
    { name: "GitHub", href: "https://github.com/k4rtikay" },
    { name: "LinkedIn", href: "https://linkedin.com/in/kartikeya" },
    { name: "Email", href: "mailto:hello@kartikeya.dev" },
];

const linkClassName = "font-medium underline decoration-muted-foreground/30 hover:decoration-foreground transition-colors ease-out";
const pillClassName = "bg-muted px-2 rounded-full flex items-center gap-1";

export function Contact() {
    return (
        <section>
            <h2 className="text-base sm:text-sm font-medium text-muted-foreground tracking-wide mb-4">
                Connect
            </h2>

            <div className="text-base sm:text-sm leading-relaxed tracking-wide">
                Reach out to me at{" "}
                <HoverSwap
                    href={socials[0].href}
                    target="_blank"
                    rel="noopener noreferrer"
                    defaultContent="@kkmis"
                    defaultClassName={linkClassName}
                    hoverContent={
                        <>
                            <Image src="/lucypfp.jpg" alt="Lucy" width={10} height={10} className="rounded-full" />
                            br1dge_
                        </>
                    }
                    hoverClassName={pillClassName}
                />
                {" "}or{" "}
                <HoverSwap
                    href={socials[3].href}
                    target="_blank"
                    rel="noopener noreferrer"
                    defaultContent="email me"
                    defaultClassName={linkClassName}
                    hoverContent={
                        <>
                            <Mail className="size-3" />
                            hello@kartikeya.dev
                        </>
                    }
                    hoverClassName={pillClassName}
                />
            </div>

            <div className="text-base sm:text-sm leading-relaxed tracking-wide">
                You can see more of my work on my{" "}
                <HoverSwap
                    href={socials[1].href}
                    target="_blank"
                    rel="noopener noreferrer"
                    defaultContent="github"
                    defaultClassName={linkClassName}
                    hoverContent={
                        <>
                            <Image src="/lucypfp.jpg" alt="Lucy" width={10} height={10} className="rounded-full" />
                            k4rtikay
                        </>
                    }
                    hoverClassName={pillClassName}
                />
            </div>
        </section>
    );
}

"use client";

import Image from "next/image";
import { HoverSwap } from "./hover-swap";

const socials = [
    { name: "Twitter", href: "https://twitter.com/br1dge_" },
    { name: "GitHub", href: "https://github.com/k4rtikay" },
    { name: "LinkedIn", href: "https://linkedin.com/in/kartikeya" },
    { name: "Email", href: "mailto:k4rtikweb@gmail.com" },
];

const linkClassName = "font-medium transition-colors ease-out";
const pillClassName = "bg-muted px-2 rounded-full flex items-center gap-1";

export function Contact() {
    return (
        <section>
            <h2 className="text-base sm:text-sm font-medium text-muted-foreground tracking-wide mb-4">
                Connect
            </h2>

            <p className="mt-4 text-base sm:text-sm leading-loose tracking-wide">
                <HoverSwap
                    href={socials[3].href}
                    target="_blank"
                    rel="noopener noreferrer"
                    defaultContent="Email me"
                    defaultClassName={linkClassName}
                    hoverContent={
                        <>
                            k4rtikweb@gmail.com
                        </>
                    }
                    hoverClassName={pillClassName}
                />
                {" "}or{" "}
                reach out to me on{" "}
                <HoverSwap
                    href={socials[0].href}
                    target="_blank"
                    rel="noopener noreferrer"
                    defaultContent="Twitter"
                    defaultClassName={linkClassName}
                    hoverContent={
                        <>
                            <Image src="/lucypfp.jpg" alt="Lucy" width={10} height={10} className="rounded-full" />
                            br1dge_
                        </>
                    }
                    hoverClassName={pillClassName}
                />
            </p>

            <p className="text-base sm:text-sm leading-loose tracking-wide">
                You can see more of my work on{" "}
                <HoverSwap
                    href={socials[1].href}
                    target="_blank"
                    rel="noopener noreferrer"
                    defaultContent="GitHub"
                    defaultClassName={linkClassName}
                    hoverContent={
                        <>
                            <Image src="/lucypfp.jpg" alt="Lucy" width={10} height={10} className="rounded-full" />
                            k4rtikay
                        </>
                    }
                    hoverClassName={pillClassName}
                />
            </p>
        </section>
    );
}

import { HelloButton } from "../ui/hello-button";

export function About() {
    return (
        <section>
            {/* <h2 className="text-base sm:text-sm font-medium text-muted-foreground tracking-wide mb-4">
                About
            </h2> */}
            <div className="space-y-4 text-base text-muted-foreground sm:text-sm tracking-wide leading-relaxed">
                <p>
                    <span className="text-foreground">I engineer the physical web.</span> I am a frontend developer obsessed with interaction design, turning complex motion physics and raw UI concepts into seamless Next.js applications.
                </p>
                <p>Open to freelance and full-time opportunities, <a href="#contact" className="text-foreground hover:bg-muted px-1 py-2 rounded-lg"><HelloButton className="cursor-pointer bg-none border-none p-0 inline-flex items-center">Say Hi!</HelloButton></a></p>
            </div>
        </section>
    );
}

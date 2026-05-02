import { HelloButton } from "../ui/hello-button";

export function About() {
    return (
        <section>
            {/* <h2 className="text-base sm:text-sm font-medium text-muted-foreground tracking-wide mb-4">
                About
            </h2> */}
            <div className="space-y-4 text-base text-muted-foreground sm:text-sm tracking-wide leading-relaxed">
                <p>
                    I&apos;m a <span className="text-foreground">full-stack developer</span> who cares deeply about design, performance, and thoughtful interactions. I build web experiences <span className="text-foreground">end to end</span> - from UI/UX to deployment.
                    Currently building marketing websites independently with <span className="text-foreground">Next.js</span>.
                </p>
                <p>Open to freelance and full-time opportunities, <a href="#contact" className="text-foreground hover:bg-muted px-1 py-2 rounded-lg"><HelloButton className="cursor-pointer bg-none border-none p-0 inline-flex items-center">Say Hi!</HelloButton></a></p>
            </div>
        </section>
    );
}

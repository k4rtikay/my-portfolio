import { FadeIn } from "@/components/website/fade-in";
import { ProjectRow } from "@/components/website/project-row";
import kosmicPlayLabsIcon from "@/public/kosmic-play-labs-icon.png";

const work = [
    {
        name: "Kosmic Play Labs",
        icon: kosmicPlayLabsIcon,
        year: "2026",
        demo: "https://www.kosmicplaylabs.site",
        wip: false,
        image: [],
    }
];


export function Work() {
    return (
        <section>
            <h2 className="font-[family-name:var(--font-fraunces)] text-lg text-foreground tracking-wider mb-6">
                Work
            </h2>
            <div className="">
                {work.map((project, index) => (
                    <FadeIn
                    delay={index*0.01 + 0.2}
                    key={project.name}
                    >
                        <ProjectRow project={project} index={index} />
                    </FadeIn>
                ))}
            </div>
        </section>
    );
}
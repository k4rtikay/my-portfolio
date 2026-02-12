import { Instrument_Serif } from "next/font/google";

const instrumentSerif = Instrument_Serif({
    subsets: ["latin"],
    weight: "400",
    style: "italic",
});

export function Hero() {
    return (
        <section>
            <h1 className="text-xl font-semibold mb-2">Kartikeya Mishra</h1>
            <p className={`${instrumentSerif.className} text-lg text-foreground leading-relaxed`}>
                Crafting interfaces and experiences.
            </p>
        </section>
    );
}

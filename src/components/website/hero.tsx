import { Instrument_Serif } from "next/font/google";
import { GeistPixelSquare } from "geist/font/pixel";

const instrumentSerif = Instrument_Serif({
    subsets: ["latin"],
    weight: "400",
    style: "italic",
});

export function Hero() {
    return (
        <section>
            <h1 className="text-2xl sm:text-xl font-semibold mb-2">Kartikeya Mishra</h1>
            <p className={`${GeistPixelSquare.className} text-lg text-foreground leading-relaxed`}>
                Crafting interfaces and experiences.
            </p>
        </section>
    );
}

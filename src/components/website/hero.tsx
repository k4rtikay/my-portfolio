import Image from "next/image";

export function Hero() {
    return (
        <section className="flex items-center gap-4">
            <Image
                src="/wa-pfp.jpg"
                alt="Hero"
                width={100}
                height={100}
                className="rounded-xl p-0.5 w-14 h-14 shadow-[0_4px_10px_0_rgba(0,0,0,0.25)] border border-border object-cover rotate-0 hover:scale-110 hover:rotate-2 hover:shadow-[0_8px_16px_0_rgba(0,0,0,0.2)] transition-all duration-200 ease-in-out"
            />
            <div>
                <h1 className="text-2xl sm:text-xl font-semibold mb-1">Kartikeya Mishra</h1>
            </div>
        </section>
    );
}

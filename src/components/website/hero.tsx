"use client";

import Image from "next/image";
import TegakiFont from "../ui/tegaki-font";

export function Hero() {
    return (
        <section className="flex items-center gap-6">
            {/* <div className="rounded-[16px] p-[2px] w-14 h-14 shadow-[0_4px_10px_0_rgba(0,0,0,0.2)] border border-border object-cover rotate-0 hover:scale-110 hover:rotate-2 hover:shadow-[0_8px_16px_0_rgba(0,0,0,0.15)] transition-all duration-200 ease-in-out">
                <Image
                    src="/wa-pfp.jpg"
                    alt="Hero"
                    width={100}
                    height={100}
                    className="rounded-[14px] object-cover w-full h-full"
                />
            </div> */}
            <div>
                {/* <h1 className="text-2xl sm:text-xl font-semibold mb-1">Kartikeya Mishra</h1> */}
                <TegakiFont />
            </div>
        </section>
    );
}

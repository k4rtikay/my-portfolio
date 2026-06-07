import Image from "next/image";

export function Footer() {
    const year = new Date().getFullYear();

    return (
        <footer className="w-full border-t border-muted-foreground/10 py-4">
            <div className="mx-auto max-w-[650px] px-8 sm:px-6 flex items-center justify-between text-xs text-muted-foreground tracking-wide">
                <div className="flex items-center gap-2">
                    <span>© Kartikeya</span>
                    {/* <span>{year}</span> */}
                </div>
                <Image
                    src="/autumn-tree.png"
                    alt="Footer"
                    width={240}
                    height={240}
                    className="object-contain w-24 h-24"
                />
            </div>
        </footer>
    );
}

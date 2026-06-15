import Image from "next/image";

export function Footer() {
    const year = new Date().getFullYear();

    return (
        <footer className="w-full border-t border-muted-foreground/10 py-4 px-4 md:px-0">
            <div className="mx-auto max-w-[600px] flex items-center justify-between text-xs text-muted-foreground tracking-wide">
                <div className="flex items-center gap-2">
                    <span>© Kartikeya</span>
                    {/* <span>{year}</span> */}
                </div>
                <Image
                    src="/autumn-tree.png"
                    alt="Footer"
                    width={240}
                    height={240}
                    className="object-contain w-24 h-24 -mr-4 md:mr-0"
                />
            </div>
        </footer>
    );
}

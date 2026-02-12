export function Footer() {
    const year = new Date().getFullYear();

    return (
        <footer className="w-full border-t border-muted-foreground/10 py-4">
            <div className="mx-auto max-w-[650px] px-8 sm:px-6 flex items-center justify-between text-xs text-muted-foreground tracking-wide">
                <span>© Kartikeya</span>
                <span>{year}</span>
            </div>
        </footer>
    );
}

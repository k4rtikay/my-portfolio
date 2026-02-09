const socials = [
    { name: "Twitter", href: "https://twitter.com/kartikeya" },
    { name: "GitHub", href: "https://github.com/kartikeya" },
    { name: "LinkedIn", href: "https://linkedin.com/in/kartikeya" },
    { name: "Email", href: "mailto:hello@kartikeya.dev" },
];

export function Contact() {
    return (
        <section>
            <h2 className="text-sm font-medium text-muted-foreground uppercase tracking-wide mb-4">
                Connect
            </h2>
            <ul className="flex flex-wrap gap-x-4 gap-y-2">
                {socials.map((social) => (
                    <li key={social.name}>
                        <a
                            href={social.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-sm"
                        >
                            {social.name}
                        </a>
                    </li>
                ))}
            </ul>
        </section>
    );
}

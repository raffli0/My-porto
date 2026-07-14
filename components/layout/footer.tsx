import { profile } from "@/data/profile";
import Link from "next/link";
import Container from "../ui/container";

const navLinks = [
    { label: "About", href: "#about" },
    { label: "Stack", href: "#stack" },
    { label: "Projects", href: "/projects" },
    { label: "Contact", href: "#contact" },
];

const socialLinks = [
    {
        label: "GitHub",
        href: profile.github,
        icon: (
            <svg viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4" aria-hidden="true">
                <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
            </svg>
        ),
    },
    {
        label: "Email",
        href: `mailto:${profile.email}`,
        icon: (
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="h-4 w-4" aria-hidden="true">
                <rect x="2" y="4" width="20" height="16" rx="2" />
                <path d="m2 7 8.586 5.586a2 2 0 002.828 0L22 7" />
            </svg>
        ),
    },
];

export default function Footer() {
    const year = new Date().getFullYear();

    return (
        <footer className="border-t bg-background/60 backdrop-blur-sm">
            <Container>
                {/* Main footer row */}
                <div className="flex flex-col gap-10 py-12 md:flex-row md:items-start md:justify-between">

                    {/* Brand col */}
                    <div className="space-y-4 max-w-xs">
                        <div className="flex items-center gap-2">
                            <span className="h-2 w-2 rounded-full bg-primary animate-pulse" />
                            <span className="font-semibold tracking-tight">{profile.brand}</span>
                        </div>
                        <p className="text-sm leading-6 text-muted-foreground">
                            {profile.bio}
                        </p>
                        <p className="inline-flex items-center gap-1.5 text-xs text-muted-foreground/60 font-mono">
                            <span className="text-green-500">▶</span>
                            {profile.title} · {profile.location}
                        </p>
                    </div>

                    {/* Nav + Social col */}
                    <div className="flex gap-16">
                        {/* Quick nav */}
                        <div className="space-y-3">
                            <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground/50">
                                Navigate
                            </p>
                            <ul className="space-y-2">
                                {navLinks.map(({ label, href }) => (
                                    <li key={label}>
                                        <Link
                                            href={href}
                                            className="text-sm text-muted-foreground transition-colors duration-150 hover:text-foreground min-h-[44px] flex items-center"
                                        >
                                            {label}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Social */}
                        <div className="space-y-3">
                            <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground/50">
                                Connect
                            </p>
                            <ul className="space-y-2">
                                {socialLinks.map(({ label, href, icon }) => (
                                    <li key={label}>
                                        <Link
                                            href={href}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors duration-150 hover:text-foreground min-h-[44px]"
                                        >
                                            {icon}
                                            {label}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>

                {/* Bottom bar */}
                <div className="border-t py-5 flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
                    <p className="text-xs text-muted-foreground/50">
                        © {year} {profile.brand}. All rights reserved.
                    </p>
                    <p className="text-xs text-muted-foreground/40 font-mono">
                        Built with Next.js · TypeScript · Tailwind
                    </p>
                </div>
            </Container>
        </footer>
    );
}
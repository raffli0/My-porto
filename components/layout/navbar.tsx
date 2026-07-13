"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";
import { Moon, Sun, FileText, Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

import Container from "../ui/container";
import { Button } from "../ui/button";
import { profile } from "@/data/profile";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";
import { navItems } from "@/data/navigation";

export default function Navbar() {
    const { resolvedTheme, setTheme } = useTheme();
    const pathName = usePathname();

    const [mounted, setMounted] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const [activeHash, setActiveHash] = useState("");
    const [menuOpen, setMenuOpen] = useState(false);

    useEffect(() => { setMounted(true); }, []);

    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 12);
        window.addEventListener("scroll", onScroll, { passive: true });
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    useEffect(() => {
        const hashIds = navItems
            .filter(i => i.href.startsWith("#"))
            .map(i => i.href.slice(1));

        const observers: IntersectionObserver[] = [];
        hashIds.forEach(id => {
            const el = document.getElementById(id);
            if (!el) return;
            const obs = new IntersectionObserver(
                ([entry]) => { if (entry.isIntersecting) setActiveHash(`#${id}`); },
                { rootMargin: "-40% 0px -55% 0px" }
            );
            obs.observe(el);
            observers.push(obs);
        });
        return () => observers.forEach(o => o.disconnect());
    }, []);

    useEffect(() => { setMenuOpen(false); }, [pathName]);

    const isActive = (href: string) =>
        href.startsWith("#") ? activeHash === href : pathName === href;

    const toggleTheme = () =>
        setTheme(resolvedTheme === "dark" ? "light" : "dark");

    return (
        <header
            className={cn(
                "sticky top-0 z-50 border-b transition-[background,box-shadow] duration-300",
                scrolled
                    ? "bg-background/95 backdrop-blur-md shadow-sm"
                    : "bg-background/70 backdrop-blur-sm"
            )}
        >
            <Container>
                <div className="flex h-16 items-center justify-between gap-6">

                    {/* ── Logo ── */}
                    <Link href="/" className="group flex shrink-0 items-center gap-2">
                        <span className="relative flex h-2 w-2">
                            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-60" />
                            <span className="relative inline-flex h-2 w-2 rounded-full bg-primary" />
                        </span>
                        <span className="text-base font-bold tracking-tight transition-opacity group-hover:opacity-70">
                            {profile.brand}
                        </span>
                    </Link>

                    {/* ── Desktop Nav ── */}
                    <nav className="hidden md:flex flex-1 justify-center">
                        <ul className="flex items-center gap-1">
                            {navItems.map((item) => {
                                const active = isActive(item.href);
                                return (
                                    <li key={item.href}>
                                        <Link
                                            href={item.href}
                                            className={cn(
                                                "relative flex items-center px-3 py-1.5 text-sm font-medium rounded-md transition-colors duration-150",
                                                active
                                                    ? "text-foreground"
                                                    : "text-muted-foreground hover:text-foreground"
                                            )}
                                        >
                                            {active && (
                                                <motion.span
                                                    layoutId="nav-pill"
                                                    className="absolute inset-0 rounded-md bg-accent"
                                                    transition={{ type: "spring", stiffness: 380, damping: 32 }}
                                                />
                                            )}
                                            <span className="relative z-10">{item.name}</span>
                                        </Link>
                                    </li>
                                );
                            })}
                        </ul>
                    </nav>

                    {/* ── Right Actions ── */}
                    <div className="flex shrink-0 items-center gap-2">

                        {/* Theme toggle */}
                        <Button
                            variant="ghost"
                            size="icon"
                            onClick={toggleTheme}
                            aria-label="Toggle theme"
                            className="relative h-9 w-9 rounded-lg border transition-all hover:bg-accent"
                        >
                            {mounted && (
                                <span className="relative flex h-4 w-4 items-center justify-center">
                                    <Sun className="absolute h-4 w-4 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
                                    <Moon className="absolute h-4 w-4 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
                                </span>
                            )}
                        </Button>

                        {/* Resume — desktop only */}
                        <Link
                            href="/resume.pdf"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hidden md:block"
                        >
                            <Button variant="outline" size="sm" className="h-9 gap-1.5">
                                <FileText className="h-3.5 w-3.5" />
                                Resume
                            </Button>
                        </Link>

                        {/* Hamburger — mobile only */}
                        <Button
                            variant="ghost"
                            size="icon"
                            aria-label="Toggle menu"
                            onClick={() => setMenuOpen(v => !v)}
                            className="relative h-9 w-9 rounded-lg border md:hidden"
                        >
                            <AnimatePresence mode="wait" initial={false}>
                                {menuOpen ? (
                                    <motion.span
                                        key="close"
                                        className="absolute"
                                        initial={{ rotate: -90, opacity: 0 }}
                                        animate={{ rotate: 0, opacity: 1 }}
                                        exit={{ rotate: 90, opacity: 0 }}
                                        transition={{ duration: 0.15 }}
                                    >
                                        <X className="h-4 w-4" />
                                    </motion.span>
                                ) : (
                                    <motion.span
                                        key="open"
                                        className="absolute"
                                        initial={{ rotate: 90, opacity: 0 }}
                                        animate={{ rotate: 0, opacity: 1 }}
                                        exit={{ rotate: -90, opacity: 0 }}
                                        transition={{ duration: 0.15 }}
                                    >
                                        <Menu className="h-4 w-4" />
                                    </motion.span>
                                )}
                            </AnimatePresence>
                        </Button>
                    </div>
                </div>
            </Container>

            {/* ── Mobile Drawer ── */}
            <AnimatePresence>
                {menuOpen && (
                    <motion.div
                        key="mobile-menu"
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.2, ease: "easeInOut" }}
                        className="overflow-hidden border-t md:hidden"
                    >
                        <Container>
                            <nav className="py-3">
                                <ul className="flex flex-col gap-0.5">
                                    {navItems.map((item, i) => {
                                        const active = isActive(item.href);
                                        return (
                                            <motion.li
                                                key={item.href}
                                                initial={{ x: -8, opacity: 0 }}
                                                animate={{ x: 0, opacity: 1 }}
                                                transition={{ delay: i * 0.035 }}
                                            >
                                                <Link
                                                    href={item.href}
                                                    onClick={() => setMenuOpen(false)}
                                                    className={cn(
                                                        "flex items-center gap-3 rounded-md px-3 py-2.5 text-sm font-medium transition-colors",
                                                        active
                                                            ? "bg-accent text-foreground"
                                                            : "text-muted-foreground hover:bg-accent/50 hover:text-foreground"
                                                    )}
                                                >
                                                    <span className={cn(
                                                        "h-1.5 w-1.5 rounded-full transition-colors",
                                                        active ? "bg-primary" : "bg-border"
                                                    )} />
                                                    {item.name}
                                                </Link>
                                            </motion.li>
                                        );
                                    })}

                                    <li className="mt-2 border-t pt-2">
                                        <Link href="/resume.pdf" target="_blank" rel="noopener noreferrer">
                                            <Button variant="outline" size="sm" className="w-full gap-2">
                                                <FileText className="h-3.5 w-3.5" />
                                                Download Resume
                                            </Button>
                                        </Link>
                                    </li>
                                </ul>
                            </nav>
                        </Container>
                    </motion.div>
                )}
            </AnimatePresence>
        </header>
    );
}
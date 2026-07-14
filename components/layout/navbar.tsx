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
    const [activeSection, setActiveSection] = useState("home");
    const [menuOpen, setMenuOpen] = useState(false);

    useEffect(() => { setMounted(true); }, []);

    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 12);
        window.addEventListener("scroll", onScroll, { passive: true });
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    // Scroll listener fallback for the top of the page
    useEffect(() => {
        if (pathName !== "/") return;
        const handleScroll = () => {
            if (window.scrollY < 50) {
                setActiveSection("home");
            }
        };
        window.addEventListener("scroll", handleScroll, { passive: true });
        return () => window.removeEventListener("scroll", handleScroll);
    }, [pathName]);

    // Intersection Observer to detect active sections on the home page
    useEffect(() => {
        if (pathName !== "/") return;

        const sections = ["home", "about", "contact"];
        const observerOptions = {
            root: null,
            rootMargin: "-30% 0px -50% 0px",
            threshold: 0,
        };

        const handleIntersect = (entries: IntersectionObserverEntry[]) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    setActiveSection(entry.target.id);
                }
            });
        };

        const observer = new IntersectionObserver(handleIntersect, observerOptions);

        sections.forEach(id => {
            const el = document.getElementById(id);
            if (el) observer.observe(el);
        });

        return () => observer.disconnect();
    }, [pathName]);

    // Smooth scroll to section if URL has a hash on initial load/navigation
    useEffect(() => {
        if (pathName === "/" && typeof window !== "undefined") {
            const hash = window.location.hash;
            if (hash) {
                const targetId = hash.replace("#", "");
                const timer = setTimeout(() => {
                    const element = document.getElementById(targetId);
                    if (element) {
                        element.scrollIntoView({ behavior: "smooth" });
                        setActiveSection(targetId);
                    }
                }, 100);
                return () => clearTimeout(timer);
            }
        }
    }, [pathName]);
    // Reset scroll to top on page transitions when there is no hash
    useEffect(() => {
        if (typeof window !== "undefined") {
            const hash = window.location.hash;
            if (!hash) {
                window.scrollTo({ top: 0, behavior: "instant" as any });
            }
        }
    }, [pathName]);

    useEffect(() => { setMenuOpen(false); }, [pathName]);

    const getActiveState = (href: string) => {
        if (pathName === "/") {
            if (href === "/") return activeSection === "home";
            if (href === "/#about") return activeSection === "about";
            if (href === "/#contact") return activeSection === "contact";
            return false;
        }
        return pathName === href;
    };

    const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
        const isSectionLink = href.startsWith("/#") || href === "/";
        if (isSectionLink && pathName === "/") {
            e.preventDefault();
            if (href === "/") {
                window.scrollTo({ top: 0, behavior: "smooth" });
                window.history.pushState(null, "", "/");
                setActiveSection("home");
            } else {
                const targetId = href.replace("/#", "");
                const element = document.getElementById(targetId);
                if (element) {
                    element.scrollIntoView({ behavior: "smooth" });
                    window.history.pushState(null, "", href);
                    setActiveSection(targetId);
                }
            }
        }
    };

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
                                const active = getActiveState(item.href);
                                return (
                                    <li key={item.href}>
                                        <Link
                                            href={item.href}
                                            onClick={(e) => handleNavClick(e, item.href)}
                                            className={cn(
                                                "relative flex items-center px-3 py-2 text-sm font-medium rounded-md transition-colors duration-150 min-h-[44px]",
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
                            aria-label={mounted && resolvedTheme === "dark" ? "Switch to light theme" : "Switch to dark theme"}
                            className="relative h-11 w-11 rounded-lg border transition-all hover:bg-accent"
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
                            aria-label="Download resume"
                            className="hidden md:block"
                        >
                            <Button variant="outline" size="sm" className="h-11 gap-1.5 min-h-[44px]">
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
                            className="relative h-11 w-11 rounded-lg border md:hidden"
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
                                        const active = getActiveState(item.href);
                                        return (
                                            <motion.li
                                                key={item.href}
                                                initial={{ x: -8, opacity: 0 }}
                                                animate={{ x: 0, opacity: 1 }}
                                                transition={{ delay: i * 0.035 }}
                                            >
                                                <Link
                                                    href={item.href}
                                                    onClick={(e) => {
                                                        handleNavClick(e, item.href);
                                                        setMenuOpen(false);
                                                    }}
                                                    className={cn(
                                                        "flex items-center gap-3 rounded-md px-3 py-3 text-sm font-medium transition-colors min-h-[44px]",
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
                                            <Button variant="outline" size="sm" className="w-full gap-2 min-h-[44px]">
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
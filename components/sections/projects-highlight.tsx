"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowUpRight, Circle, ChevronLeft, ChevronRight, Eye } from "lucide-react";
import { useState, useEffect } from "react";

import Container from "../ui/container";
import { Button } from "../ui/button";
import { projects } from "@/data/projects";
import { cn } from "@/lib/utils";

/* GitHub SVG */
const GithubIcon = () => (
    <svg viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4" aria-hidden="true">
        <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
    </svg>
);

const statusConfig = {
    live: { label: "Live", text: "text-green-500" },
    wip: { label: "WIP", text: "text-yellow-500" },
    archived: { label: "Archived", text: "text-zinc-400" },
};

const tagColors: Record<string, string> = {
    "Next.js": "border-white/15 text-white/70",
    "Laravel": "border-red-500/30 text-red-400",
    "Flutter": "border-sky-500/30 text-sky-400",
    "TypeScript": "border-blue-500/30 text-blue-400",
    "Python": "border-yellow-500/30 text-yellow-400",
    "MySQL": "border-orange-500/30 text-orange-400",
    "Alpine.js": "border-teal-500/30 text-teal-400",
    "Framer Motion": "border-purple-500/30 text-purple-400",
    "Bash": "border-zinc-400/30 text-zinc-400",
    "OWASP": "border-red-400/30 text-red-400",
    "HTML": "border-orange-400/30 text-orange-400",
    "CSS": "border-blue-400/30 text-blue-400",
    "JavaScript": "border-yellow-400/30 text-yellow-400",
    "MQTT": "border-purple-400/30 text-purple-400",
    "ESP32": "border-red-400/30 text-red-400",
    "Tailwind Css": "border-sky-400/30 text-sky-400",
};

const categoryConfig: Record<string, { bg: string, text: string, border: string }> = {
    "Website": { bg: "bg-blue-500/10 hover:bg-blue-500/15", text: "text-blue-400", border: "border-blue-500/20" },
    "Internet of Things": { bg: "bg-emerald-500/10 hover:bg-emerald-500/15", text: "text-emerald-400", border: "border-emerald-500/20" },
    "Mobile App": { bg: "bg-rose-500/10 hover:bg-rose-500/15", text: "text-rose-400", border: "border-rose-500/20" },
    "Security Tools": { bg: "bg-yellow-500/10 hover:bg-yellow-500/15", text: "text-yellow-400", border: "border-yellow-500/20" },
};

/* gradient placeholders per project slug */
const placeholderGradients: Record<string, string> = {
    "perpus-digital": "from-red-950/60 via-zinc-900 to-zinc-900",
    "porto": "from-emerald-950/60 via-zinc-900 to-zinc-900",
    "sistem-pakar": "from-blue-950/60 via-zinc-900 to-zinc-900",
    "IoT": "from-orange-950/60 via-zinc-900 to-zinc-900",
};

const featured = projects.filter(p => p.featured);

export default function ProjectsHighlight() {
    const [selectedCategory, setSelectedCategory] = useState("All");
    const [currentIndex, setCurrentIndex] = useState(0);
    const [visibleCards, setVisibleCards] = useState(3);

    // Get dynamic categories list from featured projects using flatMap for multiple categories
    const categories = ["All", ...Array.from(new Set(featured.flatMap(p => p.categories)))];

    // Filter projects based on selected category
    const filteredProjects = selectedCategory === "All"
        ? featured
        : featured.filter(p => p.categories.includes(selectedCategory));

    useEffect(() => {
        const updateCount = () => {
            if (window.innerWidth < 640) setVisibleCards(1);
            else if (window.innerWidth < 1024) setVisibleCards(2);
            else setVisibleCards(3);
        };
        updateCount();
        window.addEventListener("resize", updateCount);
        return () => window.removeEventListener("resize", updateCount);
    }, []);

    // Bound current index if filtered length or visibleCards changes
    const maxIndex = Math.max(0, filteredProjects.length - visibleCards);
    useEffect(() => {
        if (currentIndex > maxIndex) {
            setCurrentIndex(maxIndex);
        }
    }, [maxIndex, currentIndex]);

    const slideLeft = () => {
        setCurrentIndex(prev => Math.max(0, prev - 1));
    };

    const slideRight = () => {
        setCurrentIndex(prev => Math.min(maxIndex, prev + 1));
    };

    return (
        <section id="projects" className="py-8 md:py-16 overflow-hidden">
            <Container>
                {/* Header */}
                <motion.div
                    className="mb-8 flex items-end justify-between"
                    initial={{ opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: false }}
                    transition={{ duration: 0.5 }}
                >
                    <div className="space-y-2">
                        <p className="font-mono text-xs text-muted-foreground tracking-widest uppercase">
                            <span className="text-primary">$</span> ls ./projects --featured
                        </p>
                        <h2 className="text-3xl font-bold tracking-tight">
                            Featured Projects
                        </h2>
                    </div>

                    <div className="flex items-center gap-4">
                        {/* Carousel Arrows */}
                        <div className="flex items-center gap-2">
                            <Button
                                variant="outline"
                                size="icon"
                                className="h-8 w-8 rounded-lg"
                                onClick={slideLeft}
                                disabled={currentIndex === 0}
                            >
                                <ChevronLeft className="h-4 w-4" />
                            </Button>
                            <Button
                                variant="outline"
                                size="icon"
                                className="h-8 w-8 rounded-lg"
                                onClick={slideRight}
                                disabled={currentIndex >= maxIndex}
                            >
                                <ChevronRight className="h-4 w-4" />
                            </Button>
                        </div>

                        <Link
                            href="/projects"
                            className="group hidden sm:flex items-center gap-1.5 text-sm text-muted-foreground transition-colors hover:text-foreground"
                        >
                            View all
                            <ArrowUpRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                        </Link>
                    </div>
                </motion.div>

                {/* Dynamic Category Filter Pills */}
                <motion.div
                    className="mb-8 flex flex-wrap gap-2 border-b pb-4"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: false }}
                    transition={{ duration: 0.5, delay: 0.1 }}
                >
                    {categories.map((category) => {
                        const active = selectedCategory === category;
                        return (
                            <button
                                key={category}
                                onClick={() => {
                                    setSelectedCategory(category);
                                    setCurrentIndex(0); // Reset index on filter change
                                }}
                                className={cn(
                                    "relative px-4 py-1.5 text-xs font-mono rounded-full border transition-all duration-200",
                                    active
                                        ? "border-primary text-primary"
                                        : "border-border text-muted-foreground hover:text-foreground hover:border-muted-foreground"
                                )}
                            >
                                {active && (
                                    <motion.span
                                        layoutId="active-category-pill"
                                        className="absolute inset-0 rounded-full bg-primary/10 border border-primary/20"
                                        transition={{ type: "spring", stiffness: 380, damping: 30 }}
                                    />
                                )}
                                <span className="relative z-10">{category}</span>
                            </button>
                        );
                    })}
                </motion.div>

                {/* Carousel wrapper */}
                <div className="relative w-full overflow-hidden px-1 py-4">
                    {filteredProjects.length > 0 ? (
                        <motion.div
                            layout
                            className="flex gap-5 transition-transform duration-500 ease-out"
                            style={{
                                transform: `translateX(calc(-${currentIndex} * (100% + 20px) / ${visibleCards}))`,
                            }}
                        >
                            {filteredProjects.map((project, i) => {
                                const status = statusConfig[project.status] ?? statusConfig.live;
                                const gradient = placeholderGradients[project.slug] ?? "from-primary/10 via-zinc-900 to-zinc-900";

                                return (
                                    <motion.div
                                        key={project.slug}
                                        layout
                                        className="group relative flex flex-col overflow-hidden rounded-xl border bg-card transition-colors duration-200 hover:bg-accent/20 w-full sm:w-[calc(50%-10px)] lg:w-[calc(33.3333%-13.33px)] shrink-0"
                                        initial={{ opacity: 0, y: 20 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: false, margin: "-30px" }}
                                        transition={{ duration: 0.4, delay: i * 0.05 }}
                                        whileHover={{ y: -4 }}
                                    >
                                        {/* ── Image / Placeholder ── */}
                                        <Link href={`/projects/${project.slug}`}>
                                            <div className="relative h-44 w-full overflow-hidden border-b cursor-pointer">
                                                {/* Placeholder gradient */}
                                                <div className={`absolute inset-0 bg-gradient-to-br ${gradient} flex items-center justify-center`}>
                                                    <span className="font-mono text-4xl font-bold tracking-tighter opacity-20 select-none">
                                                        {project.title.slice(0, 2).toUpperCase()}
                                                    </span>
                                                </div>

                                                {project.image ? (
                                                    <img
                                                        src={project.image}
                                                        alt={project.title}
                                                        className="absolute inset-0 h-full w-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                                                        onError={(e) => {
                                                            (e.currentTarget as HTMLImageElement).style.display = "none";
                                                        }}
                                                    />
                                                ) : null}

                                                {/* Status badge — Top Right */}
                                                <span className={`absolute top-3 right-3 flex items-center gap-1.5 rounded-full border border-current/20 bg-background/80 px-2.5 py-1 font-mono text-[11px] backdrop-blur-sm ${status.text}`}>
                                                    <Circle className="h-1.5 w-1.5 fill-current" />
                                                    {status.label}
                                                </span>
                                            </div>
                                        </Link>

                                        {/* ── Body ── */}
                                        <div className="flex flex-1 flex-col p-5">
                                            {/* Category Badges — Above Title */}
                                            <div className="mb-2 flex flex-wrap gap-1">
                                                {project.categories.map(cat => {
                                                    const catColors = categoryConfig[cat] ?? { bg: "bg-zinc-800/80", text: "text-zinc-300", border: "border-zinc-700" };
                                                    return (
                                                        <span key={cat} className={cn(
                                                            "rounded-full border px-2 py-0.5 font-mono text-[9px] font-bold uppercase tracking-wider transition-colors",
                                                            catColors.bg,
                                                            catColors.text,
                                                            catColors.border
                                                        )}>
                                                            {cat}
                                                        </span>
                                                    );
                                                })}
                                            </div>

                                            {/* Title + actions */}
                                            <div className="mb-2 flex items-start justify-between gap-2">
                                                <Link href={`/projects/${project.slug}`}>
                                                    <h3 className="font-semibold leading-snug tracking-tight line-clamp-1 group-hover:text-primary transition-colors cursor-pointer">
                                                        {project.title}
                                                    </h3>
                                                </Link>

                                                <div className="flex shrink-0 items-center gap-1 opacity-0 transition-opacity duration-150 group-hover:opacity-100">
                                                    <Link
                                                        href={`/projects/${project.slug}`}
                                                        className="rounded-md p-1.5 text-muted-foreground transition-colors hover:bg-accent hover:text-foreground"
                                                        aria-label="View Details"
                                                    >
                                                        <Eye className="h-4 w-4" />
                                                    </Link>
                                                    {project.repo && (
                                                        <Link
                                                            href={project.repo}
                                                            target="_blank"
                                                            rel="noopener noreferrer"
                                                            className="rounded-md p-1.5 text-muted-foreground transition-colors hover:bg-accent hover:text-foreground"
                                                            aria-label="GitHub"
                                                        >
                                                            <GithubIcon />
                                                        </Link>
                                                    )}
                                                    {project.href && (
                                                        <Link
                                                            href={project.href}
                                                            target="_blank"
                                                            rel="noopener noreferrer"
                                                            className="rounded-md p-1.5 text-muted-foreground transition-colors hover:bg-accent hover:text-foreground"
                                                            aria-label="Live site"
                                                        >
                                                            <ArrowUpRight className="h-4 w-4" />
                                                        </Link>
                                                    )}
                                                </div>
                                            </div>

                                            {/* Description */}
                                            <p className="mb-5 flex-1 text-sm leading-6 text-muted-foreground line-clamp-2">
                                                {project.description}
                                            </p>

                                            {/* Tags */}
                                            <div className="flex flex-wrap gap-1.5 mt-auto">
                                                {project.tags.map(tag => (
                                                    <span
                                                        key={tag}
                                                        className={`rounded-full border px-2.5 py-0.5 font-mono text-[11px] ${tagColors[tag] ?? "border-border text-muted-foreground"}`}
                                                    >
                                                        {tag}
                                                    </span>
                                                ))}
                                            </div>
                                        </div>

                                        {/* Hover ring */}
                                        <div className="pointer-events-none absolute inset-0 rounded-xl opacity-0 ring-1 ring-primary/20 transition-opacity duration-200 group-hover:opacity-100" />
                                    </motion.div>
                                );
                            })}
                        </motion.div>
                    ) : (
                        <div className="py-12 text-center text-muted-foreground font-mono text-sm">
                            No projects found in this category.
                        </div>
                    )}
                </div>

                {/* Dot Indicators */}
                {maxIndex > 0 && (
                    <div className="mt-6 flex justify-center gap-1.5">
                        {Array.from({ length: maxIndex + 1 }).map((_, i) => (
                            <button
                                key={i}
                                onClick={() => setCurrentIndex(i)}
                                className={cn(
                                    "h-1.5 rounded-full transition-all duration-300",
                                    currentIndex === i ? "w-6 bg-primary" : "w-1.5 bg-border hover:bg-muted-foreground"
                                )}
                                aria-label={`Go to slide ${i + 1}`}
                            />
                        ))}
                    </div>
                )}

                {/* Mobile: view all */}
                <div className="mt-8 flex justify-center sm:hidden">
                    <Link
                        href="/projects"
                        className="flex items-center gap-1.5 text-sm text-muted-foreground transition-colors hover:text-foreground"
                    >
                        View all projects
                        <ArrowUpRight className="h-3.5 w-3.5" />
                    </Link>
                </div>
            </Container>
        </section>
    );
}

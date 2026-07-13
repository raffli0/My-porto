"use client";

import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { ArrowUpRight, Circle, Search, SlidersHorizontal, Folder, X } from "lucide-react";
import { useState } from "react";

import Container from "../ui/container";
import { projects } from "@/data/projects";
import { cn } from "@/lib/utils";

import TerminalLine from "../home/terminal-line";
import BlinkingCursor from "../home/blinking-cursor";

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

const placeholderGradients: Record<string, string> = {
    "perpus-digital": "from-red-950/60 via-zinc-900 to-zinc-900",
    "porto": "from-emerald-950/60 via-zinc-900 to-zinc-900",
    "sistem-pakar": "from-blue-950/60 via-zinc-900 to-zinc-900",
    "IoT": "from-orange-950/60 via-zinc-900 to-zinc-900",
};

export default function ProjectsClient() {
    const [selectedCategory, setSelectedCategory] = useState("All");
    const [searchQuery, setSearchQuery] = useState("");

    // Dynamic unique categories from all projects
    const categories = ["All", ...Array.from(new Set(projects.flatMap(p => p.categories)))];

    // Filter projects based on category and search query
    const filteredProjects = projects.filter((project) => {
        const matchesCategory = selectedCategory === "All" || project.categories.includes(selectedCategory);
        const matchesSearch =
            project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
            project.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
            project.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));

        return matchesCategory && matchesSearch;
    });

    return (
        <section className="min-h-[80vh]">
            <Container>
                {/* Header Section */}
                <div className="pt-8 gap-20">
                    <p className="font-mono text-sm text-primary tracking-widest">
                        <span className="text-primary">$</span>
                        <TerminalLine
                            text="find ./projects -type f -featured"
                            speed={30}
                        />
                        <BlinkingCursor
                        />
                    </p>
                    <h1 className="text-4xl md:text-5xl font-bold tracking-tight">
                        My Projects
                    </h1>
                    <p className="text-muted-foreground max-w-xl text-base leading-7">
                        Explore all the applications, IoT products, security projects, and tools that I have built. Use search or categories to filter.
                    </p>
                </div>

                {/* Filters & Search Control Bar */}
                <div className="mb-12 flex flex-col md:flex-row gap-4 items-stretch md:items-center justify-between pb-6 border-b">

                    {/* Category Filter Tabs */}
                    <div className="flex flex-wrap gap-2 order-2 md:order-1">
                        {categories.map((category) => {
                            const active = selectedCategory === category;
                            return (
                                <button
                                    key={category}
                                    onClick={() => setSelectedCategory(category)}
                                    className={cn(
                                        "relative px-4 py-2 text-xs font-mono rounded-full border transition-all duration-200",
                                        active
                                            ? "border-primary text-primary"
                                            : "border-border text-muted-foreground hover:text-foreground hover:border-muted-foreground"
                                    )}
                                >
                                    {active && (
                                        <motion.span
                                            layoutId="active-projects-page-pill"
                                            className="absolute inset-0 rounded-full bg-primary/10 border border-primary/20"
                                            transition={{ type: "spring", stiffness: 380, damping: 30 }}
                                        />
                                    )}
                                    <span className="relative z-10">{category}</span>
                                </button>
                            );
                        })}
                    </div>

                    {/* Search Box */}
                    <div className="relative w-full md:w-80 order-1 md:order-2">
                        <span className="absolute inset-y-0 left-3 flex items-center pointer-events-none text-muted-foreground">
                            <Search className="h-4 w-4" />
                        </span>
                        <input
                            type="text"
                            placeholder="Search title, tech stack..."
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            className="w-full bg-card hover:bg-accent/10 focus:bg-accent/10 text-sm pl-9 pr-8 py-2 rounded-lg border border-border outline-none focus:border-primary transition-colors font-mono"
                        />
                        {searchQuery && (
                            <button
                                onClick={() => setSearchQuery("")}
                                className="absolute inset-y-0 right-3 flex items-center text-muted-foreground hover:text-foreground"
                                aria-label="Clear search"
                            >
                                <X className="h-4 w-4" />
                            </button>
                        )}
                    </div>
                </div>

                {/* Stats Bar */}
                <div className="mb-6 flex items-center justify-between text-xs font-mono text-muted-foreground">
                    <span className="flex items-center gap-1.5">
                        <Folder className="h-3.5 w-3.5" />
                        <span>Showing {filteredProjects.length} of {projects.length} projects</span>
                    </span>
                    {selectedCategory !== "All" || searchQuery ? (
                        <button
                            onClick={() => {
                                setSelectedCategory("All");
                                setSearchQuery("");
                            }}
                            className="text-primary hover:underline"
                        >
                            Reset filters
                        </button>
                    ) : null}
                </div>

                {/* Projects Grid */}
                <AnimatePresence mode="popLayout">
                    {filteredProjects.length > 0 ? (
                        <motion.div
                            layout
                            className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
                        >
                            {filteredProjects.map((project, i) => {
                                const status = statusConfig[project.status] ?? statusConfig.live;
                                const gradient = placeholderGradients[project.slug] ?? "from-primary/10 via-zinc-900 to-zinc-900";

                                return (
                                    <motion.div
                                        key={project.slug}
                                        layout
                                        className="group relative flex flex-col overflow-hidden rounded-xl border bg-card transition-colors duration-200 hover:bg-accent/20"
                                        initial={{ opacity: 0, scale: 0.95 }}
                                        animate={{ opacity: 1, scale: 1 }}
                                        exit={{ opacity: 0, scale: 0.95 }}
                                        transition={{ duration: 0.3, delay: i * 0.05 }}
                                        whileHover={{ y: -4 }}
                                    >
                                        {/* Image / Placeholder */}
                                        <div className="relative h-48 w-full overflow-hidden border-b">
                                            {/* Gradient Background */}
                                            <div className={`absolute inset-0 bg-gradient-to-br ${gradient} flex items-center justify-center`}>
                                                <span className="font-mono text-5xl font-bold tracking-tighter opacity-15 select-none">
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

                                            {/* Status Badge */}
                                            <span className={`absolute top-3 right-3 flex items-center gap-1.5 rounded-full border border-current/20 bg-background/80 px-2.5 py-1 font-mono text-[11px] backdrop-blur-sm ${status.text}`}>
                                                <Circle className="h-1.5 w-1.5 fill-current" />
                                                {status.label}
                                            </span>
                                        </div>

                                        {/* Card Body */}
                                        <div className="flex flex-1 flex-col p-5">
                                            {/* Category Badges */}
                                            <div className="mb-2 flex flex-wrap gap-1">
                                                {project.categories.map(cat => {
                                                    const catColors = categoryConfig[cat] ?? { bg: "bg-zinc-800/80", text: "text-zinc-300", border: "border-zinc-700" };
                                                    return (
                                                        <span key={cat} className={cn(
                                                            "rounded-full border px-2.5 py-0.5 font-mono text-[9px] font-bold uppercase tracking-wider transition-colors",
                                                            catColors.bg,
                                                            catColors.text,
                                                            catColors.border
                                                        )}>
                                                            {cat}
                                                        </span>
                                                    );
                                                })}
                                            </div>

                                            {/* Title + Action Links */}
                                            <div className="mb-2 flex items-start justify-between gap-2">
                                                <h3 className="font-semibold leading-snug tracking-tight line-clamp-1 group-hover:text-primary transition-colors">
                                                    {project.title}
                                                </h3>

                                                <div className="flex shrink-0 items-center gap-1 opacity-0 transition-opacity duration-150 group-hover:opacity-100">
                                                    {project.repo && (
                                                        <Link
                                                            href={project.repo}
                                                            target="_blank"
                                                            rel="noopener noreferrer"
                                                            className="rounded-md p-1.5 text-muted-foreground transition-colors hover:bg-accent hover:text-foreground"
                                                            aria-label="GitHub Repository"
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
                                                            aria-label="Live demo link"
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

                                            {/* Tech Stack Tags */}
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

                                        {/* Subtle Hover Glow Ring */}
                                        <div className="pointer-events-none absolute inset-0 rounded-xl opacity-0 ring-1 ring-primary/20 transition-opacity duration-200 group-hover:opacity-100" />
                                    </motion.div>
                                );
                            })}
                        </motion.div>
                    ) : (
                        <motion.div
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="py-20 text-center border rounded-xl bg-card/30"
                        >
                            <Folder className="h-8 w-8 text-muted-foreground mx-auto mb-3 opacity-50" />
                            <p className="text-sm font-mono text-muted-foreground mb-1">
                                No projects found matching your search.
                            </p>
                            <button
                                onClick={() => {
                                    setSelectedCategory("All");
                                    setSearchQuery("");
                                }}
                                className="text-xs text-primary hover:underline font-mono"
                            >
                                [Clear filter parameters]
                            </button>
                        </motion.div>
                    )}
                </AnimatePresence>
            </Container>
        </section>
    );
}

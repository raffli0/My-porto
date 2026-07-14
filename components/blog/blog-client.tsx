"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { ArrowRight, ArrowUpRight, Search, X, BookOpen, Clock } from "lucide-react";
import Image from "next/image";

import Container from "../ui/container";
import TerminalLine from "../terminal/terminal-line";
import BlinkingCursor from "../terminal/blinking-cursor";
import { blogPosts, blogCategories, blogTagColors, type BlogPost } from "@/data/blog";
import { cn } from "@/lib/utils";

const POSTS_PER_PAGE = 6;

function TrafficLights() {
    return (
        <div className="flex items-center gap-1.5">
            <span className="h-2.5 w-2.5 rounded-full bg-[#ff5f56] border border-[#e0443e]" />
            <span className="h-2.5 w-2.5 rounded-full bg-[#ffbd2e] border border-[#dea123]" />
            <span className="h-2.5 w-2.5 rounded-full bg-[#27c93f] border border-[#1aab29]" />
        </div>
    );
}

function TagBadge({ tag }: { tag: string }) {
    return (
        <span className={cn(
            "inline-flex items-center rounded px-2 py-0.5 font-mono text-[10px] font-medium uppercase tracking-wider",
            blogTagColors[tag] ?? "bg-zinc-500/10 text-zinc-400 border border-zinc-500/20"
        )}>
            {tag}
        </span>
    );
}

function PostImage({ post, className }: { post: BlogPost; className?: string }) {
    const gradients = [
        "from-blue-950/80 via-zinc-900 to-zinc-900",
        "from-emerald-950/80 via-zinc-900 to-zinc-900",
        "from-purple-950/80 via-zinc-900 to-zinc-900",
        "from-red-950/80 via-zinc-900 to-zinc-900",
        "from-amber-950/80 via-zinc-900 to-zinc-900",
    ];
    const gradient = gradients[post.slug.length % gradients.length];

    if (post.image) {
        return (
            <div className={cn("relative overflow-hidden bg-zinc-900", className)}>
                <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    className="object-cover opacity-80"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
            </div>
        );
    }
    return (
        <div className={cn(`relative overflow-hidden bg-gradient-to-br ${gradient}`, className)}>
            <div className="absolute inset-0 opacity-10 bg-[linear-gradient(to_right,#ffffff08_1px,transparent_1px),linear-gradient(to_bottom,#ffffff08_1px,transparent_1px)] bg-[size:24px_24px]" />
        </div>
    );
}

function FeaturedCard({ post }: { post: BlogPost }) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="relative rounded-xl border bg-card overflow-hidden mb-6"
        >
            {/* Terminal bar */}
            <div className="flex items-center justify-between px-4 py-2.5 border-b bg-muted/40">
                <TrafficLights />
                <span className="font-mono text-[10px] text-muted-foreground tracking-wider">featured_post.md</span>
            </div>

            {/* Content */}
            <div className="grid grid-cols-1 md:grid-cols-2">
                {/* Image */}
                <PostImage post={post} className="h-56 md:h-full min-h-[220px]" />

                {/* Text */}
                <div className="p-6 flex flex-col justify-between gap-4">
                    <div className="space-y-3">
                        <p className="font-mono text-[10px] tracking-[0.2em] uppercase text-primary">
                            {post.category}
                        </p>
                        <h2 className="text-2xl md:text-3xl font-bold leading-tight tracking-tight">
                            {post.title}
                        </h2>
                        <p className="text-muted-foreground text-sm leading-6">
                            {post.description}
                        </p>
                    </div>
                    <div className="flex items-center justify-between text-xs font-mono text-muted-foreground border-t pt-4">
                        <div className="flex items-center gap-3">
                            <span>{post.date}</span>
                            <span>·</span>
                            <span className="flex items-center gap-1">
                                <Clock className="h-3 w-3" />
                                {post.readTime} min read
                            </span>
                        </div>
                        <Link
                            href={`/blog/${post.slug}`}
                            className="flex items-center gap-1.5 text-primary hover:underline underline-offset-4 font-medium"
                        >
                            cat article.md
                            <ArrowRight className="h-3.5 w-3.5" />
                        </Link>
                    </div>
                </div>
            </div>
        </motion.div>
    );
}

function RegularCard({ post, index, entryNum }: { post: BlogPost; index: number; entryNum: number }) {
    const hasImage = !!post.image || true; // use placeholder gradient if no image

    return (
        <motion.div
            key={post.slug}
            layout
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.96 }}
            transition={{ duration: 0.35, delay: index * 0.05 }}
            className="group relative flex flex-col rounded-xl border bg-card overflow-hidden hover:bg-accent/10 transition-colors duration-200"
            whileHover={{ y: -4 }}
        >
            {/* Terminal bar */}
            <div className="flex items-center justify-between px-3 py-2 border-b bg-muted/40">
                <TrafficLights />
                <span className="font-mono text-[10px] text-muted-foreground tracking-wider">
                    entry_{String(entryNum).padStart(2, "0")}.md
                </span>
            </div>

            {/* Image or gradient block */}
            <PostImage post={post} className="h-40 w-full" />

            {/* Body */}
            <div className="flex flex-col flex-1 p-4 gap-3">
                {/* Tags */}
                <div className="flex flex-wrap gap-1.5">
                    {post.tags.map(tag => (
                        <TagBadge key={tag} tag={tag} />
                    ))}
                </div>

                <div className="flex-1 space-y-1.5">
                    <h3 className="font-semibold text-sm leading-snug group-hover:text-primary transition-colors">
                        {post.title}
                    </h3>
                    <p className="text-muted-foreground text-xs leading-5 line-clamp-3">
                        {post.description}
                    </p>
                </div>

                <div className="flex items-center justify-between text-[10px] font-mono text-muted-foreground border-t pt-3 mt-auto">
                    <span>{post.date.substring(5).replace("-", " ")}</span>
                    <div className="flex items-center gap-2">
                        <span className="flex items-center gap-1">
                            <Clock className="h-3 w-3" />
                            {post.readTime}m
                        </span>
                        <Link
                            href={`/blog/${post.slug}`}
                            className="p-1 rounded hover:bg-accent text-muted-foreground hover:text-primary transition-colors"
                            aria-label="Read post"
                        >
                            <ArrowUpRight className="h-3.5 w-3.5" />
                        </Link>
                    </div>
                </div>
            </div>
        </motion.div>
    );
}

export default function BlogClient() {
    const [searchQuery, setSearchQuery] = useState("");
    const [selectedCategory, setSelectedCategory] = useState("All");
    const [currentPage, setCurrentPage] = useState(1);

    const featured = blogPosts.find(p => p.featured);
    const regular = blogPosts.filter(p => !p.featured);

    const filtered = regular.filter(post => {
        const matchesCategory = selectedCategory === "All" || post.category === selectedCategory;
        const q = searchQuery.toLowerCase();
        const matchesSearch =
            !q ||
            post.title.toLowerCase().includes(q) ||
            post.description.toLowerCase().includes(q) ||
            post.tags.some(t => t.toLowerCase().includes(q)) ||
            post.category.toLowerCase().includes(q);
        return matchesCategory && matchesSearch;
    });

    const totalPages = Math.max(1, Math.ceil(filtered.length / POSTS_PER_PAGE));
    const paginated = filtered.slice(
        (currentPage - 1) * POSTS_PER_PAGE,
        currentPage * POSTS_PER_PAGE
    );

    function handleCategoryChange(cat: string) {
        setSelectedCategory(cat);
        setCurrentPage(1);
    }
    function handleSearch(q: string) {
        setSearchQuery(q);
        setCurrentPage(1);
    }

    return (
        <section className="min-h-[80vh]">
            <Container>
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 16 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.45 }}
                    className="pt-8 gap-20 mb-8"
                >
                    <div className="flex items-center justify-between mb-6">
                        <p className="font-mono text-sm text-primary tracking-widest">
                            <span className="text-primary">$</span>{" "}
                            <TerminalLine text="find ./writing -name '**.md'" speed={30} />
                            <BlinkingCursor mode="pulse" speed={1000} />
                        </p>
                        <span className="font-mono text-xs text-muted-foreground hidden sm:block">
                            {blogPosts.length} objects found
                        </span>
                    </div>
                    <h1 className="text-4xl md:text-5xl font-bold tracking-tight">
                        Writing
                    </h1>
                    <p className="text-muted-foreground max-w-xl text-base leading-7 mt-2">
                        Explore all the articles I've written about technology, programming, and my personal projects.
                    </p>
                </motion.div>

                {/* Search + Category Filter Control Bar */}
                <motion.div
                    initial={{ opacity: 0, y: 12 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.45, delay: 0.1 }}
                    className="mb-8 flex flex-col sm:flex-row gap-4 items-stretch sm:items-center justify-between pb-6 border-b"
                >
                    {/* Category Pills */}
                    <div className="flex flex-wrap gap-2 order-2 sm:order-1">
                        {blogCategories.map(cat => {
                            const active = selectedCategory === cat;
                            return (
                                <button
                                    key={cat}
                                    onClick={() => handleCategoryChange(cat)}
                                    className={cn(
                                        "relative px-3 py-1.5 text-xs font-mono rounded-full border transition-all duration-200",
                                        active
                                            ? "border-primary text-primary"
                                            : "border-border text-muted-foreground hover:text-foreground hover:border-muted-foreground"
                                    )}
                                >
                                    {active && (
                                        <motion.span
                                            layoutId="active-blog-pill"
                                            className="absolute inset-0 rounded-full bg-primary/10 border border-primary/20"
                                            transition={{ type: "spring", stiffness: 380, damping: 30 }}
                                        />
                                    )}
                                    <span className="relative z-10">{cat}</span>
                                </button>
                            );
                        })}
                    </div>

                    {/* Search */}
                    <div className="relative w-full sm:w-72 order-1 sm:order-2">
                        <span className="absolute inset-y-0 left-3 flex items-center pointer-events-none text-muted-foreground">
                            <Search className="h-4 w-4" />
                        </span>
                        <input
                            type="text"
                            placeholder="Search title, tag, topic..."
                            value={searchQuery}
                            onChange={(e) => handleSearch(e.target.value)}
                            className="w-full bg-card hover:bg-accent/10 focus:bg-accent/10 text-sm pl-9 pr-8 py-2 rounded-lg border border-border outline-none focus:border-primary transition-colors font-mono"
                        />
                        {searchQuery && (
                            <button
                                onClick={() => handleSearch("")}
                                className="absolute inset-y-0 right-3 flex items-center text-muted-foreground hover:text-foreground"
                                aria-label="Clear search"
                            >
                                <X className="h-4 w-4" />
                            </button>
                        )}
                    </div>
                </motion.div>

                {/* Featured Post */}
                {featured && selectedCategory === "All" && !searchQuery && (
                    <FeaturedCard post={featured} />
                )}

                {/* Stats bar */}
                <div className="mb-4 flex items-center justify-between text-xs font-mono text-muted-foreground">
                    <span className="flex items-center gap-1.5">
                        <BookOpen className="h-3.5 w-3.5" />
                        Showing {paginated.length} of {filtered.length} articles
                    </span>
                    {(selectedCategory !== "All" || searchQuery) && (
                        <button
                            onClick={() => { setSelectedCategory("All"); handleSearch(""); }}
                            className="flex items-center gap-1 hover:text-foreground transition-colors"
                        >
                            <X className="h-3 w-3" /> Clear filters
                        </button>
                    )}
                </div>

                {/* Grid */}
                <AnimatePresence mode="popLayout">
                    {paginated.length === 0 ? (
                        <motion.div
                            key="empty"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            className="flex flex-col items-center justify-center py-24 text-center font-mono"
                        >
                            <p className="text-2xl mb-2">∅</p>
                            <p className="text-muted-foreground text-sm">No articles match your search.</p>
                        </motion.div>
                    ) : (
                        <motion.div
                            key="grid"
                            layout
                            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-10"
                        >
                            {paginated.map((post, i) => (
                                <RegularCard
                                    key={post.slug}
                                    post={post}
                                    index={i}
                                    entryNum={(currentPage - 1) * POSTS_PER_PAGE + i + 1}
                                />
                            ))}
                        </motion.div>
                    )}
                </AnimatePresence>

                {/* Pagination */}
                {totalPages > 1 && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.3 }}
                        className="flex items-center justify-between pb-16"
                    >
                        <div className="flex items-center gap-1">
                            {Array.from({ length: totalPages }).map((_, idx) => {
                                const pg = idx + 1;
                                const isActive = pg === currentPage;
                                const showEllipsis = totalPages > 5 && pg === totalPages - 1 && currentPage < totalPages - 2;
                                if (totalPages > 5 && pg > 3 && pg < totalPages && Math.abs(pg - currentPage) > 1) return null;
                                return (
                                    <button
                                        key={pg}
                                        onClick={() => setCurrentPage(pg)}
                                        className={cn(
                                            "h-8 min-w-[32px] rounded border font-mono text-xs transition-colors px-2",
                                            isActive
                                                ? "border-primary bg-primary/10 text-primary"
                                                : "border-border text-muted-foreground hover:border-muted-foreground hover:text-foreground"
                                        )}
                                    >
                                        {pg}
                                    </button>
                                );
                            })}
                            {totalPages > 4 && (
                                <>
                                    <span className="text-muted-foreground font-mono text-xs px-1">...</span>
                                    <button
                                        onClick={() => setCurrentPage(totalPages)}
                                        className={cn(
                                            "h-8 min-w-[32px] rounded border font-mono text-xs transition-colors px-2",
                                            currentPage === totalPages
                                                ? "border-primary bg-primary/10 text-primary"
                                                : "border-border text-muted-foreground hover:border-muted-foreground hover:text-foreground"
                                        )}
                                    >
                                        {totalPages}
                                    </button>
                                </>
                            )}
                        </div>
                        <span className="font-mono text-[10px] text-muted-foreground hidden sm:block">
                            Showing {(currentPage - 1) * POSTS_PER_PAGE + 1}–{Math.min(currentPage * POSTS_PER_PAGE, filtered.length)} of {filtered.length} articles
                        </span>
                    </motion.div>
                )}
            </Container>
        </section>
    );
}
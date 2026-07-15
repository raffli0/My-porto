"use client";

import Link from "next/link";
import Image from "next/image";
import { ArrowLeft, ExternalLink, Users, Terminal, Image as ImageIcon, LinkIcon, Layers, Circle, ArrowUpRight } from "lucide-react";
import Container from "../ui/container";
import { Button } from "../ui/button";
import { Project, projects } from "@/data/projects";
import { categoryConfig, placeholderGradients, statusConfig, tagColors } from "@/data/projects-config";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

/* GitHub SVG (lucide-react does not export this icon) */
const GithubIcon = () => (
    <svg viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4" aria-hidden="true">
        <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
    </svg>
);

interface ProjectDetailProps {
    project: Project;
}

export default function ProjectDetail({ project }: ProjectDetailProps) {
    const status = statusConfig[project.status] ?? statusConfig.live;
    const gradient = placeholderGradients[project.slug] ?? "from-primary/10 via-zinc-900 to-zinc-900";

    // Get related projects
    const relatedProjects = projects.filter(
        p => project.relatedSlugs?.includes(p.slug) && p.slug !== project.slug
    );

    return (
        <section className="min-h-screen pb-24">
            {/* ── HERO SECTION ── */}
            <div className="relative w-full h-[50vh] min-h-[400px] overflow-hidden border-b flex items-end">
                {/* Background Cover Image or Gradient */}
                <div className={`absolute inset-0 bg-gradient-to-t ${gradient} to-background/20 z-0`} />
                {project.image && (
                    <Image
                        src={project.image}
                        alt={project.title}
                        width={1200}
                        height={600}
                        sizes="100vw"
                        className="absolute inset-0 h-full w-full object-cover object-top opacity-40 mix-blend-luminosity z-0"
                        priority
                        onError={(e) => {
                            (e.target as HTMLImageElement).style.display = "none";
                        }}
                    />
                )}
                {/* Radial Mask overlay to soften image borders */}
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-black z-10" />

                <div className="relative z-20 pb-12 w-full">
                    <Container>
                        {/* Back Button */}
                        <Link
                            href="/projects"
                            className="inline-flex items-center gap-2 px-4 py-2 mb-8 rounded-full border border-white/20 bg-background/60 backdrop-blur-md text-sm font-medium text-foreground hover:bg-background/80 hover:border-white/40 transition-all duration-200 group w-fit"
                        >
                            <ArrowLeft className="h-4 w-4 transition-transform group-hover:-translate-x-1" />
                            Back to Projects
                        </Link>

                        {/* Meta info */}
                        <div className="space-y-4">
                            <div className="flex flex-wrap gap-2 items-center">
                                {/* Categories */}
                                {project.categories.map(cat => (
                                    <span
                                        key={cat}
                                        className="inline-flex items-center rounded-full border border-white/20 bg-black/50 backdrop-blur-md px-3 py-1 font-mono text-[10px] font-bold uppercase tracking-wider text-white shadow-sm"
                                    >
                                        {cat}
                                    </span>
                                ))}
                                {/* Status */}
                                <span className={cn(
                                    "flex items-center gap-1.5 rounded-full border border-white/20 bg-black/50 backdrop-blur-md px-3 py-1 font-mono text-[10px] font-semibold text-white shadow-sm",
                                    status.text
                                )}>
                                    <Circle className="h-1.5 w-1.5 fill-current" />
                                    {status.label}
                                </span>
                            </div>

                            {/* Title */}
                            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight max-w-4xl text-white drop-shadow-md">
                                {project.title}
                            </h1>

                            {/* Description snippet */}
                            <p className="text-white/75 max-w-2xl text-lg font-light leading-relaxed drop-shadow-sm">
                                {project.description}
                            </p>
                        </div>
                    </Container>
                </div>
            </div>

            <div className="pt-16 pb-24">
                <Container>
                    <div className="grid gap-16 lg:grid-cols-12">

                        {/* ── LEFT COLUMN ── */}
                        <div className="lg:col-span-8 space-y-16">

                            {/* OVERVIEW */}
                            <section>
                                <div className="flex items-center gap-3 mb-5">
                                    <span className="w-1 h-6 rounded-full bg-primary shrink-0" />
                                    <p className="font-mono text-[11px] text-primary tracking-[0.18em] uppercase font-semibold">
                                        $ cat overview.md
                                    </p>
                                </div>
                                <h2 className="text-3xl font-bold tracking-tight text-foreground mb-4">
                                    Latar Belakang
                                </h2>
                                <p className="text-base text-foreground/70 leading-[1.9] whitespace-pre-line">
                                    {project.background || "Latar belakang proyek ini belum didefinisikan."}
                                </p>
                            </section>

                            <div className="border-t border-border/50" />

                            {/* DETAIL PROYEK */}
                            <section>
                                <div className="flex items-center gap-3 mb-5">
                                    <span className="w-1 h-6 rounded-full bg-primary shrink-0" />
                                    <p className="font-mono text-[11px] text-primary tracking-[0.18em] uppercase font-semibold">
                                        $ cat details.txt
                                    </p>
                                </div>
                                <h2 className="text-3xl font-bold tracking-tight text-foreground mb-4">
                                    Detail & Fungsionalitas
                                </h2>
                                <p className="text-base text-foreground/70 leading-[1.9] whitespace-pre-line">
                                    {project.details || "Detail fungsionalitas sedang dalam tahap dokumentasi."}
                                </p>
                            </section>

                            <div className="border-t border-border/50" />

                            {/* GALLERY */}
                            <section>
                                <div className="flex items-center gap-3 mb-5">
                                    <span className="w-1 h-6 rounded-full bg-primary shrink-0" />
                                    <p className="font-mono text-[11px] text-primary tracking-[0.18em] uppercase font-semibold">
                                        $ ls ./screenshots
                                    </p>
                                </div>
                                <h2 className="text-3xl font-bold tracking-tight text-foreground mb-6">
                                    Gallery UI
                                </h2>
                                {project.gallery && project.gallery.length > 0 ? (
                                    <div className="grid gap-4 sm:grid-cols-2">
                                         {project.gallery.map((imgSrc, idx) => (
                                             <div key={idx} className="relative aspect-video rounded-xl border bg-muted overflow-hidden group shadow-sm">
                                                 <Image
                                                     src={imgSrc}
                                                     alt={`${project.title} screenshot ${idx + 1}`}
                                                     width={600}
                                                     height={400}
                                                     sizes="(max-width: 768px) 100vw, 50vw"
                                                     className="absolute inset-0 h-full w-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                                                     onError={(e) => {
                                                         (e.target as HTMLImageElement).style.display = "none";
                                                     }}
                                                 />
                                                <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                                                    <span className="text-xs font-mono text-white bg-black/60 px-3 py-1.5 rounded-full border border-white/20">
                                                        Screenshot #{idx + 1}
                                                    </span>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                ) : (
                                    <div className="border border-dashed rounded-xl py-14 flex flex-col items-center justify-center gap-2 text-muted-foreground text-sm font-mono">
                                        <ImageIcon className="h-8 w-8 opacity-30" />
                                        <span>No screenshots available yet.</span>
                                    </div>
                                )}
                            </section>
                        </div>

                        {/* ── RIGHT SIDEBAR ── */}
                        <div className="lg:col-span-4 space-y-6">

                            {/* TECH STACK */}
                            <div className="rounded-2xl border bg-card shadow-sm overflow-hidden">
                                <div className="flex items-center gap-2.5 px-5 py-4 border-b bg-muted/40">
                                    <Layers className="h-4 w-4 text-primary shrink-0" />
                                    <h3 className="text-sm font-bold tracking-wide text-foreground uppercase">Tech Stack</h3>
                                </div>
                                <div className="p-5 space-y-5">
                                    {project.techStackExtended ? (
                                        <>
                                            {project.techStackExtended.fe && project.techStackExtended.fe.length > 0 && (
                                                <div className="space-y-2">
                                                    <p className="text-[10px] font-mono font-bold text-primary uppercase tracking-widest">Frontend</p>
                                                    <div className="flex flex-wrap gap-1.5">
                                                        {project.techStackExtended.fe.map(t => (
                                                            <span key={t} className="rounded-full border border-border bg-background px-2.5 py-0.5 text-xs font-mono text-foreground/80">{t}</span>
                                                        ))}
                                                    </div>
                                                </div>
                                            )}
                                            {project.techStackExtended.be && project.techStackExtended.be.length > 0 && (
                                                <div className="space-y-2">
                                                    <p className="text-[10px] font-mono font-bold text-primary uppercase tracking-widest">Backend</p>
                                                    <div className="flex flex-wrap gap-1.5">
                                                        {project.techStackExtended.be.map(t => (
                                                            <span key={t} className="rounded-full border border-border bg-background px-2.5 py-0.5 text-xs font-mono text-foreground/80">{t}</span>
                                                        ))}
                                                    </div>
                                                </div>
                                            )}
                                            {project.techStackExtended.db && project.techStackExtended.db.length > 0 && (
                                                <div className="space-y-2">
                                                    <p className="text-[10px] font-mono font-bold text-primary uppercase tracking-widest">Database</p>
                                                    <div className="flex flex-wrap gap-1.5">
                                                        {project.techStackExtended.db.map(t => (
                                                            <span key={t} className="rounded-full border border-border bg-background px-2.5 py-0.5 text-xs font-mono text-foreground/80">{t}</span>
                                                        ))}
                                                    </div>
                                                </div>
                                            )}
                                            {project.techStackExtended.toolsServices && project.techStackExtended.toolsServices.length > 0 && (
                                                <div className="space-y-2">
                                                    <p className="text-[10px] font-mono font-bold text-primary uppercase tracking-widest">Tools & Services</p>
                                                    <div className="flex flex-wrap gap-1.5">
                                                        {project.techStackExtended.toolsServices.map(t => (
                                                            <span key={t} className="rounded-full border border-border bg-background px-2.5 py-0.5 text-xs font-mono text-foreground/80">{t}</span>
                                                        ))}
                                                    </div>
                                                </div>
                                            )}
                                        </>
                                    ) : (
                                        <div className="flex flex-wrap gap-1.5">
                                            {project.tags.map(tag => (
                                                <span key={tag} className={cn("rounded-full border px-2.5 py-0.5 text-xs font-mono", tagColors[tag] || "text-foreground/70")}>
                                                    {tag}
                                                </span>
                                            ))}
                                        </div>
                                    )}
                                </div>
                            </div>

                            {/* PROJECT LINKS */}
                            <div className="rounded-2xl border bg-card shadow-sm overflow-hidden">
                                <div className="flex items-center gap-2.5 px-5 py-4 border-b bg-muted/40">
                                    <LinkIcon className="h-4 w-4 text-primary shrink-0" />
                                    <h3 className="text-sm font-bold tracking-wide text-foreground uppercase">Project Links</h3>
                                </div>
                                <div className="p-5 flex flex-col gap-2.5">
                                    {project.repo ? (
                                        <Link href={project.repo} target="_blank" rel="noopener noreferrer" className="w-full">
                                            <Button variant="outline" className="w-full gap-2 justify-center h-10 font-medium">
                                                <GithubIcon />
                                                Source Code
                                            </Button>
                                        </Link>
                                    ) : (
                                        <p className="text-xs text-muted-foreground font-mono text-center py-1">No repository linked.</p>
                                    )}
                                    {project.href && project.href !== "/" && (
                                        <Link href={project.href} target="_blank" rel="noopener noreferrer" className="w-full">
                                            <Button variant="glow" className="w-full gap-2 justify-center h-10 font-medium">
                                                <ExternalLink className="h-4 w-4" />
                                                Live Demo
                                            </Button>
                                        </Link>
                                    )}
                                </div>
                            </div>

                            {/* CONTRIBUTORS */}
                            <div className="rounded-2xl border bg-card shadow-sm overflow-hidden">
                                <div className="flex items-center gap-2.5 px-5 py-4 border-b bg-muted/40">
                                    <Users className="h-4 w-4 text-primary shrink-0" />
                                    <h3 className="text-sm font-bold tracking-wide text-foreground uppercase">Contributors</h3>
                                </div>
                                <ul className="divide-y divide-border">
                                    {(project.contributors && project.contributors.length > 0
                                        ? project.contributors
                                        : [{ name: "Raffly", githubUrl: "https://github.com/raffli0" }]
                                    ).map((c, i) => (
                                        <li key={i} className="flex items-center justify-between px-5 py-3">
                                            <span className="text-sm font-semibold text-foreground">{c.name}</span>
                                            <Link
                                                href={c.githubUrl}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="inline-flex items-center gap-1 text-[11px] font-mono text-muted-foreground hover:text-primary transition-colors group"
                                            >
                                                github.com
                                                <ArrowUpRight className="h-3 w-3 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>

                    {/* ── RELATED PROJECTS ── */}
                    {relatedProjects.length > 0 && (
                        <div className="mt-20 pt-12 border-t space-y-8">
                            <div>
                                <p className="font-mono text-[11px] text-primary tracking-[0.18em] uppercase font-semibold mb-2">
                                    $ ls ./related-projects
                                </p>
                                <h2 className="text-2xl font-bold tracking-tight text-foreground">Related Projects</h2>
                            </div>
                            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                                {relatedProjects.map((rp) => {
                                    const rs = statusConfig[rp.status] ?? statusConfig.live;
                                    const rg = placeholderGradients[rp.slug] ?? "from-primary/10 via-zinc-900 to-zinc-900";
                                    return (
                                        <Link key={rp.slug} href={`/projects/${rp.slug}`}
                                            className="group flex flex-col overflow-hidden rounded-xl border bg-card hover:bg-accent/20 transition-all duration-300 hover:-translate-y-1 shadow-sm">
                                            <div className="relative h-40 w-full overflow-hidden border-b">
                                                <div className={`absolute inset-0 bg-gradient-to-br ${rg} flex items-center justify-center`}>
                                                    <span className="font-mono text-3xl font-bold opacity-10 select-none">{rp.title.slice(0, 2).toUpperCase()}</span>
                                                </div>
                                                 {rp.image && (
                                                     <Image
                                                         src={rp.image}
                                                         alt={rp.title}
                                                         width={400}
                                                         height={200}
                                                         sizes="(max-width: 768px) 100vw, 33vw"
                                                         className="absolute inset-0 h-full w-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                                                         onError={(e) => {
                                                             (e.target as HTMLImageElement).style.display = "none";
                                                         }}
                                                     />
                                                 )}
                                                <span className={cn("absolute top-3 right-3 flex items-center gap-1.5 rounded-full border border-white/20 bg-black/50 backdrop-blur-sm px-2 py-0.5 font-mono text-[9px] text-white", rs.text)}>
                                                    <Circle className="h-1 w-1 fill-current" />{rs.label}
                                                </span>
                                            </div>
                                            <div className="flex flex-1 flex-col p-4 gap-1.5">
                                                <h3 className="font-bold text-sm leading-snug line-clamp-1 text-foreground group-hover:text-primary transition-colors">{rp.title}</h3>
                                                <p className="text-xs text-muted-foreground line-clamp-2 leading-relaxed">{rp.description}</p>
                                                <div className="flex flex-wrap gap-1.5 pt-2 mt-auto">
                                                    {rp.tags.slice(0, 3).map(tag => (
                                                        <span key={tag} className={cn("rounded-full border px-2 py-0.5 font-mono text-[9px]", tagColors[tag] || "text-muted-foreground border-border")}>{tag}</span>
                                                    ))}
                                                </div>
                                            </div>
                                        </Link>
                                    );
                                })}
                            </div>
                        </div>
                    )}
                </Container>
            </div>
        </section>
    );
}

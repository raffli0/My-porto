"use client";

import Container from "../ui/container";
import { profile } from "@/data/profile";
import { experiences, skillCategories, techStack } from "@/data/about";
import { BadgeCheck, Briefcase, GraduationCap, Users, Calendar, Terminal, Code2, Cpu } from "lucide-react";
import { motion } from "framer-motion";

export default function About() {
    const getIcon = (type: string) => {
        switch (type) {
            case "Work":
                return <Briefcase className="h-4 w-4 text-green-500" />;
            case "Education":
                return <GraduationCap className="h-4 w-4 text-blue-500" />;
            default:
                return <Users className="h-4 w-4 text-purple-500" />;
        }
    };

    return (
        <section
            id="about"
            className="py-8 md:py-16 border-t bg-background/30 backdrop-blur-sm scroll-mt-16"
        >
            <Container>
                {/* Section Profile */}
                <div className="grid gap-16 lg:grid-cols-12 items-start mb-24">
                    {/* Left Info */}
                    <div className="lg:col-span-7 space-y-6">
                        <div className="space-y-2">
                            <p className="font-mono text-xs text-muted-foreground tracking-widest uppercase flex items-center gap-2">
                                <Terminal className="h-3.5 w-3.5 text-primary" />
                                <span className="text-primary">$</span> cat about.md | head -n 1
                            </p>
                            <h2 className="text-4xl font-bold tracking-tight">
                                Get to know me
                            </h2>
                        </div>

                        <p className="text-muted-foreground leading-8 text-base">
                            I'm an Informatics student passionate about building
                            modern web applications with clean architecture,
                            great user experience, and secure systems.
                        </p>

                        <p className="text-muted-foreground leading-8 text-base">
                            Besides web development, I enjoy learning
                            cybersecurity, Linux systems administration, and backend engineering while
                            constantly exploring new technologies to solve real-world problems.
                        </p>

                        {/* Quick bullet points */}
                        <div className="grid grid-cols-2 gap-4 pt-4">
                            {[
                                "Based in Indonesia",
                                "Full Stack Developer",
                                "Security Enthusiast",
                                "Open for Freelance",
                            ].map((item) => (
                                <div
                                    key={item}
                                    className="flex items-center gap-2.5 text-sm text-foreground/80 font-mono"
                                >
                                    <BadgeCheck className="h-4 w-4 text-green-500 shrink-0" />
                                    <span>{item}</span>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Right Stats Card */}
                    <div className="lg:col-span-5 grid grid-cols-2 gap-5 w-full">
                        <div className="rounded-2xl border bg-card p-6 shadow-sm hover:shadow-md transition-all duration-300">
                            <h3 className="text-4xl font-bold text-primary font-mono">
                                12+
                            </h3>
                            <p className="mt-2 text-sm text-muted-foreground">
                                Projects Completed
                            </p>
                        </div>

                        <div className="rounded-2xl border bg-card p-6 shadow-sm hover:shadow-md transition-all duration-300">
                            <h3 className="text-4xl font-bold text-primary font-mono">
                                3+
                            </h3>
                            <p className="mt-2 text-sm text-muted-foreground">
                                Years Learning
                            </p>
                        </div>

                        <div className="rounded-2xl border bg-card p-6 shadow-sm col-span-2 space-y-4">
                            <h3 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground flex items-center gap-2">
                                <Cpu className="h-4 w-4 text-primary" />
                                Core Stack
                            </h3>
                            <div className="flex flex-wrap gap-2">
                                {profile.stack.map((tech) => (
                                    <span
                                        key={tech}
                                        className="rounded-full border bg-background px-3.5 py-1 text-xs font-mono transition-colors hover:border-primary/40 hover:bg-accent"
                                    >
                                        {tech}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>

                {/* Section 2 Experience Timeline */}
                <div className="grid gap-16 lg:grid-cols-12 items-start mb-24">
                    {/* Header Left */}
                    <div className="lg:col-span-4 space-y-2">
                        <p className="font-mono text-xs text-muted-foreground tracking-widest uppercase flex items-center gap-2">
                            <Terminal className="h-3.5 w-3.5 text-primary" />
                            <span className="text-primary">$</span>nano history.txt | grep "experience"
                        </p>
                        <h2 className="text-3xl font-bold tracking-tight">
                            Experience & Education
                        </h2>
                        <p className="text-sm text-muted-foreground leading-6">
                            My journey through professional work, campus organization, and academic study.
                        </p>
                    </div>

                    {/* Timeline Right */}
                    <div className="lg:col-span-8 relative border-l border-border pl-6 ml-2 space-y-12">
                        {experiences.map((exp, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, x: -10 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.4, delay: idx * 0.1 }}
                                className="relative"
                            >
                                {/* Marker icon wrapper */}
                                <span className="absolute -left-[39px] top-1.5 flex h-7 w-7 items-center justify-center rounded-full border bg-background shadow-sm ring-4 ring-background">
                                    {getIcon(exp.type)}
                                </span>

                                {/* Card content */}
                                <div className="space-y-2">
                                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1">
                                        <h3 className="text-lg font-bold text-foreground leading-none">
                                            {exp.role}
                                        </h3>
                                        <span className="inline-flex items-center gap-1 text-xs font-mono text-muted-foreground shrink-0 sm:pt-0">
                                            <Calendar className="h-3 w-3" />
                                            {exp.period}
                                        </span>
                                    </div>
                                    <h4 className="text-sm font-semibold text-primary font-mono">
                                        {exp.company}
                                    </h4>
                                    <p className="text-sm text-muted-foreground leading-7 max-w-2xl">
                                        {exp.description}
                                    </p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>

                {/* Section 3 & 4: Skills & Tech Stack */}
                <div className="grid gap-16 lg:grid-cols-12 items-start">
                    {/* Header Left */}
                    <div className="lg:col-span-4 space-y-2">
                        <p className="font-mono text-xs text-muted-foreground tracking-widest uppercase flex items-center gap-2">
                            <Code2 className="h-3.5 w-3.5 text-primary" />
                            <span className="text-primary">$</span> ls ./skills
                        </p>
                        <h2 className="text-3xl font-bold tracking-tight">
                            Technical Skills
                        </h2>
                        <p className="text-sm text-muted-foreground leading-6">
                            Categorized list of tools, programming languages, and domains I specialize in.
                        </p>
                    </div>

                    {/* Content Right */}
                    <div className="lg:col-span-8 grid gap-6 sm:grid-cols-2">
                        {skillCategories.map((category, catIdx) => (
                            <motion.div
                                key={catIdx}
                                initial={{ opacity: 0, y: 15 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.4, delay: catIdx * 0.05 }}
                                className="rounded-2xl border bg-card/60 p-6 shadow-sm hover:shadow-md transition-all duration-300"
                            >
                                <h3 className="text-sm font-bold uppercase tracking-wider text-primary font-mono mb-4 border-b pb-2">
                                    {category.category}
                                </h3>
                                <div className="flex flex-wrap gap-2">
                                    {category.skills.map((skill, skillIdx) => (
                                        <span
                                            key={skillIdx}
                                            className="rounded-full border bg-background/50 px-2.5 py-1 text-xs font-mono text-foreground/80 hover:border-primary/30 transition-colors"
                                        >
                                            {skill}
                                        </span>
                                    ))}
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>

            </Container>
        </section>
    );
}
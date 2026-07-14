"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

const techMeta: Record<string, { color: string; bg: string; border: string; desc: string; type: string }> = {
    "Next.js":    { color: "#e2e8f0", bg: "rgba(255,255,255,0.06)", border: "rgba(255,255,255,0.15)", desc: "React fullstack framework",     type: "drwxr-xr-x" },
    "Laravel":    { color: "#fca5a5", bg: "rgba(255,45,45,0.10)",   border: "rgba(255,80,80,0.3)",    desc: "PHP web application framework", type: "drwxr-xr-x" },
    "Flutter":    { color: "#7dd3fc", bg: "rgba(50,170,255,0.10)",  border: "rgba(50,170,255,0.3)",   desc: "Cross-platform UI toolkit",     type: "drwxr-xr-x" },
    "React":      { color: "#67e8f9", bg: "rgba(97,218,251,0.10)",  border: "rgba(97,218,251,0.3)",   desc: "UI component library",          type: "drwxr-xr-x" },
    "TypeScript": { color: "#93c5fd", bg: "rgba(49,120,198,0.12)",  border: "rgba(49,120,198,0.35)",  desc: "Typed superset of JavaScript",  type: "-rwxr--r--" },
    "Python":     { color: "#fde68a", bg: "rgba(255,212,59,0.10)",  border: "rgba(255,212,59,0.3)",   desc: "General purpose language",      type: "-rwxr--r--" },
};

const defaultMeta = {
    color: "#c4b5fd",
    bg: "rgba(139,92,246,0.10)",
    border: "rgba(139,92,246,0.3)",
    desc: "Tool / technology",
    type: "drwxr-xr-x",
};

interface StackPillsProps {
    stack: string[];
}

export default function StackPills({ stack }: StackPillsProps) {
    const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

    return (
        <div className="pl-4 pt-1 space-y-0.5">
            {stack.map((tech, i) => {
                const meta = techMeta[tech] ?? defaultMeta;
                const isHovered = hoveredIndex === i;

                return (
                    <motion.div
                        key={tech}
                        className="relative flex items-center gap-2 rounded-md px-2 py-1 cursor-default font-mono text-xs"
                        style={{
                            background: isHovered ? meta.bg : "transparent",
                            borderLeft: isHovered ? `2px solid ${meta.color}` : "2px solid transparent",
                        }}
                        onMouseEnter={() => setHoveredIndex(i)}
                        onMouseLeave={() => setHoveredIndex(null)}
                        animate={{ scale: isHovered ? 1.04 : 1 }}
                        transition={{ type: "spring", stiffness: 320, damping: 22 }}

                        /* entrance stagger */
                        initial={{ opacity: 0, x: -8 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: false }}
                    >
                        {/* permissions col */}
                        <span className="text-muted-foreground/40 text-[10px] w-24 shrink-0 hidden sm:block">
                            {meta.type}
                        </span>

                        {/* arrow prompt */}
                        <span style={{ color: isHovered ? meta.color : "rgba(255,255,255,0.2)" }}
                            className="transition-colors duration-150">
                            {isHovered ? "▶" : "·"}
                        </span>

                        {/* tech name — fixed width so description can't push layout */}
                        <span
                            className="font-semibold transition-colors duration-150 shrink-0"
                            style={{ color: isHovered ? meta.color : "rgb(var(--muted-foreground) / 0.85)" }}
                        >
                            {tech}
                        </span>

                        {/* description — ABSOLUTE so it never affects flex layout */}
                        <AnimatePresence>
                            {isHovered && (
                                <motion.span
                                    className="absolute left-[calc(1rem+9.5rem)] text-[10px] pointer-events-none whitespace-nowrap"
                                    style={{ color: meta.color + "99" }}
                                    initial={{ opacity: 0, x: -6 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    exit={{ opacity: 0, x: -4 }}
                                    transition={{ duration: 0.18 }}
                                >
                                    # {meta.desc}
                                </motion.span>
                            )}
                        </AnimatePresence>
                    </motion.div>
                );
            })}
        </div>
    );
}

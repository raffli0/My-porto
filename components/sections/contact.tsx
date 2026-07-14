"use client";

import { Input } from "@base-ui/react";
import TerminalCard from "../terminal/terminal-card";
import TerminalLine from "../terminal/terminal-line";
import Container from "../ui/container";
import BlinkingCursor from "../terminal/blinking-cursor";
import { useState, useRef, useEffect } from "react";
import { useInView } from "framer-motion";

export default function Contact() {
    const [isTyping, setIsTyping] = useState(true);
    const containerRef = useRef<HTMLDivElement>(null);
    const isInView = useInView(containerRef, { once: false, amount: 0.3 });

    useEffect(() => {
        if (!isInView) {
            setIsTyping(true);
        }
    }, [isInView]);

    return (
        <section
            id="contact"
            className="py-8 md:py-16 border-t scroll-mt-16"
        >
            <Container>
                {/* Header Section */}
                <div className="space-y-2 mb-6">
                    <p className="font-mono text-xs text-muted-foreground tracking-widest uppercase">
                        <span className="text-primary">$</span> cat contact.me | grep "Open"
                    </p>
                    <h2 className="text-3xl font-bold tracking-tight">
                        Get in Touch
                    </h2>
                    <p className="text-muted-foreground max-w-xl text-base leading-7">
                        Interested in working together or just want to say hi? Send me a message.
                    </p>
                </div>

                {/* Terminal Card */}
                <TerminalCard
                    maxRotation={5}
                    scaleOnHover={1.01}

                >
                    <div ref={containerRef} className="border overflow-hidden rounded-xl shadow-xl w-full bg-card">
                        {/* Header */}
                        <div className="flex items-center justify-between border-b bg-muted/50 px-5 py-3 relative">
                            {/* Windows control */}
                            <div className="flex items-center gap-1.5 absolute left-5" aria-hidden="true">
                                <span className="h-3.5 w-3.5 rounded-full bg-[#ff5f56] border border-[#e0443e]"></span>
                                <span className="h-3.5 w-3.5 rounded-full bg-[#ffbd2e] border border-[#dea123]"></span>
                                <span className="h-3.5 w-3.5 rounded-full bg-[#27c93f] border border-[#1aab29]"></span>
                            </div>
                            <div className="w-full text-center">
                                <p className="font-mono text-xs sm:text-sm text-muted-foreground">$ ssh contact@raffly.dev</p>
                            </div>
                        </div>

                        {/* Console Body */}
                        <div className="p-6 sm:p-8 space-y-6 font-mono text-sm">
                            {/* Command Line prompt */}
                            <div className="space-y-1">
                                <p>
                                    <span className="text-emerald-600 dark:text-emerald-400 font-bold">visitor@raffly:~$</span>{" "}
                                    <span className="text-foreground">initiate_contact.sh</span>
                                </p>

                                <span className="text-muted-foreground/80 italic font-mono"
                                >
                                    {isInView ? (
                                        <TerminalLine
                                            text="Opening secure communication channel..."
                                            speed={60}
                                            onComplete={() => setIsTyping(false)}
                                        />
                                    ) : (
                                        ""
                                    )}
                                </span>

                                <span className="ml-2">
                                    {isInView && (
                                        <BlinkingCursor
                                            mode={isTyping ? "solid" : "hide"}
                                            speed={1000}
                                            char="" // Kosongkan karakter
                                            className="w-2.5 h-4 bg-emerald-500" // Menentukan bentuk blok dan warnanya
                                        />
                                    )}

                                </span>
                            </div>

                            {/* Form fields */}
                            <form className="space-y-4 pt-2" onSubmit={(e) => e.preventDefault()} role="form" aria-label="Contact form">
                                {/* Name */}
                                <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-4">
                                    <label htmlFor="name" className="text-emerald-600 dark:text-emerald-400 font-bold w-20 shrink-0">
                                        NAME:
                                    </label>
                                    <Input
                                        type="text"
                                        id="name"
                                        placeholder="Enter your name..."
                                        className="flex-1 bg-transparent border-none outline-none focus:outline-none p-0 text-foreground placeholder:text-muted-foreground/50 w-full"
                                    />
                                </div>

                                {/* Email */}
                                <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-4">
                                    <label htmlFor="email" className="text-emerald-600 dark:text-emerald-400 font-bold w-20 shrink-0">
                                        EMAIL:
                                    </label>
                                    <Input
                                        type="email"
                                        id="email"
                                        placeholder="you@example.com"
                                        className="flex-1 bg-transparent border-none outline-none focus:outline-none p-0 text-foreground placeholder:text-muted-foreground/50 w-full"
                                    />
                                </div>

                                {/* Message */}
                                <div className="space-y-1">
                                    <label htmlFor="message" className="text-emerald-600 dark:text-emerald-400 font-bold block">
                                        MESSAGE:
                                    </label>
                                    <textarea
                                        id="message"
                                        rows={3}
                                        placeholder="Type your message here..."
                                        className="w-full bg-transparent border-none outline-none focus:outline-none p-0 text-foreground placeholder:text-muted-foreground/50 resize-none"
                                    />
                                </div>
                            </form>

                            {/* Bottom Divider & Controls */}
                            <div className="border-t border-border/50 pt-5 flex items-center justify-between">
                                {/* awaiting_input */}
                                <div className="flex items-center gap-2">
                                    <span className="text-muted-foreground">awaiting_input</span>
                                    <BlinkingCursor
                                        mode="pulse"
                                        speed={1000}
                                        char="" // Kosongkan karakter
                                        className="w-2.5 h-4 bg-emerald-500" // Menentukan bentuk blok dan warnanya
                                    />
                                </div>

                                {/* Execute Button */}
                                <button type="submit" className="bg-[#18181b] dark:bg-[#fafafa] text-white dark:text-black hover:opacity-90 active:scale-95 transition-all rounded px-4 py-2 font-mono text-xs font-bold tracking-wider flex items-center gap-2 uppercase min-h-[44px] min-w-[44px]">
                                    EXECUTE_SEND
                                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="w-3.5 h-3.5" aria-hidden="true">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M9 15L3 9m0 0l6-6M3 9h12a6 6 0 010 12h-3" />
                                    </svg>
                                </button>
                            </div>
                        </div>

                        {/* Status bar */}
                        <div className="border-t bg-muted/20 px-5 py-2.5 flex items-center justify-between font-mono text-[10px] tracking-wider text-foreground/60 uppercase">
                            <div>
                                PROTOCOL: HTTPS/TLS 1.3
                            </div>
                            <div className="hidden sm:block">
                                LINE: 12, CHAR: 45
                            </div>
                            <div className="flex items-center gap-1.5">
                                <span className="h-2 w-2 rounded-full bg-emerald-500"></span>
                                READY
                            </div>
                        </div>
                    </div>
                </TerminalCard>
            </Container>
        </section>
    );
}
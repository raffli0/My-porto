"use client";

import Container from "../ui/container";
import TerminalLine from "../terminal/terminal-line";
import BlinkingCursor from "../terminal/blinking-cursor";

export default function BlogClient() {
    return (
        <section className="min-h-[80vh]">
            <Container>
                {/* Header Section */}
                <div className="pt-8 gap-20">
                    <p className="font-mono text-sm text-primary tracking-widest mb-6">
                        <span className="text-primary">$</span>
                        <TerminalLine
                            text="find ./blog -type f -featured"
                            speed={30}
                        />
                        <BlinkingCursor />
                    </p>
                    <h1 className="text-4xl md:text-5xl font-bold tracking-tight">
                        Blog
                    </h1>
                    <p className="text-muted-foreground max-w-xl text-base leading-7">
                        Explore all the articles I've written about technology, programming, and my personal projects.
                    </p>
                </div>

                {/* Filters & Search Control Bar */}
            </Container>
        </section>
    );
}
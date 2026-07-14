import { profile } from "@/data/profile";
import Container from "../ui/container";
import { Button } from "../ui/button";

import TerminalCard from "../terminal/terminal-card";
import TerminalLine from "../terminal/terminal-line";
import BlinkingCursor from "../terminal/blinking-cursor";
import StackPills from "./stack-pills";
import Link from "next/link";

export default function Hero() {
    return (
        <section id="home" className="py-8 md:py-16">
            <Container>
                <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-10 md:gap-20">
                    {/* left */}
                    <div className="flex flex-col justify-center space-y-6 md:space-y-8 max-w-xl">
                        <span className="inline-flex self-start items-center rounded-full border px-3 py-1 text-sm gap-2 bg-transparent font-medium tracking-wide">
                            <span className="h-2 w-2 rounded-full bg-green-500 animate-pulse"></span>
                            {profile.status}
                        </span>

                        <div className="space-y-4">
                            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight">
                                Hi, I'm
                                <br />
                                <span className="text-5xl sm:text-7xl md:text-8xl tracking-tighter text-primary">{profile.name}</span>
                            </h1>

                            <div className="text-lg md:text-xl font-medium text-muted-foreground">
                                <p>{profile.title} &</p>
                                <p>{profile.subtitle}</p>
                            </div>
                        </div>

                        <p className="text-muted-foreground max-w-lg leading-relaxed md:leading-8 text-sm md:text-base">{profile.bio}</p>

                        {/* button */}
                        <div className="flex flex-wrap gap-4">
                            <Link href="/projects">
                                <Button variant="glow" size="lg" className="w-full sm:w-auto">
                                    View Projects
                                </Button>
                            </Link>

                            <Link href="#contact">
                                <Button variant="terminal" size="lg" className="w-full sm:w-auto">
                                    Contact Me
                                </Button>
                            </Link>
                        </div>
                    </div>

                    {/* right */}
                    <TerminalCard>
                        <div className="border overflow-hidden rounded-xl shadow-xl w-full">
                            {/* Header */}
                            <div className="flex items-center justify-between border-b bg-muted px-5 py-4">
                                {/* windows control */}
                                <div className="flex gap-2">
                                    <span className="h-2 w-2 rounded-full bg-red-500"></span>
                                    <span className="h-2 w-2 rounded-full bg-yellow-500"></span>
                                    <span className="h-2 w-2 rounded-full bg-green-500"></span>
                                </div>

                                <p className="font-mono text-sm text-muted-foreground">~/terminal-resume</p>
                            </div>

                            {/* Body */}
                            <div className="flex flex-col sm:flex-row gap-6 sm:gap-8 p-6 sm:p-8">
                                {/* avatar */}
                                <div className="flex h-20 w-20 sm:h-24 sm:w-24 shrink-0 items-center justify-center rounded-2xl border bg-muted text-4xl sm:text-5xl">
                                    RA
                                </div>

                                {/* terminal */}
                                <div className="flex-1 min-w-0 overflow-hidden font-mono text-sm space-y-6">
                                    <div>
                                        <div className="">
                                            <span className="text-green-500 mr-2">$</span>
                                            <TerminalLine
                                                text="whoami"
                                                speed={60}
                                            />
                                            <BlinkingCursor />
                                        </div>
                                        <div className="pl-4 text-muted-foreground">{profile.name}</div>
                                    </div>

                                    <div>
                                        <div>
                                            <span className="text-green-500">$</span> stack
                                        </div>

                                        <StackPills stack={profile.stack} />
                                    </div>

                                    <div>
                                        <div>
                                            <span className="text-green-500">$</span> git status
                                        </div>

                                        <div className="pl-4 text-muted-foreground">On branch main</div>

                                        <div className="pl-4 text-green-500">
                                            ✓ Open for freelance
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </TerminalCard>

                </div>
            </Container>
        </section >
    );
}
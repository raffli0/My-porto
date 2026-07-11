import { profile } from "@/data/profile";
import Container from "../ui/container";
import { Button } from "../ui/button";

import TerminalCard from "./terminal-card";
import TerminalLine from "./terminal-line";
import BlinkingCursor from "./blinking-cursor";
import StackPills from "./stack-pills";

export default function Hero() {
    return (
        <section>
            <Container>
                <div className="grid pt-8 grid-cols-2 items-center gap-20">
                    {/* left */}
                    <div className="flex flex-col justify-center space-y-8 max-w-xl">
                        <span className="inline-flex items-center rounded-full border px-3 py-1 text-sm gap-2 bg-transparent font-medium tracking-wide">
                            <span className="h-2 w-2 rounded-full bg-green-500 animate-pulse"></span>
                            {profile.status}
                        </span>

                        <div className="space-y-4">
                            <h1 className="text-5xl font-bold leading-tight">
                                Hi, I'm
                                <br />
                                <span className="text-8xl tracking-tighter text-primary">{profile.name}</span>
                            </h1>

                            <div className="text-xl font-medium text-muted-foreground">
                                <p>{profile.title} &</p>
                                <p>{profile.subtitle}</p>
                            </div>
                        </div>

                        <p className="text-muted-foreground max-w-lg leading-8 text-base">{profile.bio}</p>

                        {/* button */}
                        <div className="flex gap-4">
                            <Button variant="glow" size="lg">
                                View Projects
                            </Button>

                            <Button variant="terminal" size="lg">
                                Contact Me
                            </Button>
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
                            <div className="flex gap-8 p-8">
                                {/* avatar */}
                                <div className="flex h-24 w-24 items-center justify-center rounded-2xl border bg-muted text-5xl">
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
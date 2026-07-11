import Container from "../ui/container";
import { profile } from "@/data/profile";
import { BadgeCheck } from "lucide-react";

export default function About() {
    return (
        <section
            id="about"
            className="py-28"
        >
            <Container>
                <div className="max-w-2xl mb-14">
                    <span className="text-sm text-muted-foreground uppercase tracking-[0.2em]">
                        About
                    </span>

                    <h2 className="mt-3 text-4xl font-bold tracking-tight">
                        Get to know me.
                    </h2>
                </div>

                <div className="grid gap-20 lg:grid-cols-2">
                    {/* Left */}
                    <div className="space-y-6 text-muted-foreground leading-8">

                        <p>
                            I'm an Informatics student passionate about building
                            modern web applications with clean architecture,
                            great user experience, and scalable solutions.
                        </p>

                        <p>
                            Besides web development, I enjoy learning
                            cybersecurity, Linux, and backend engineering while
                            constantly exploring new technologies.
                        </p>

                        <div className="grid grid-cols-2 gap-4 pt-6">
                            {[
                                "Based in Indonesia",
                                "Full Stack Developer",
                                "Security Enthusiast",
                                "Open for Freelance",
                            ].map((item) => (
                                <div
                                    key={item}
                                    className="flex items-center gap-3"
                                >
                                    <BadgeCheck className="size-5 text-green-500" />

                                    <span>{item}</span>
                                </div>
                            ))}
                        </div>

                    </div>

                    {/* Right */}
                    <div className="grid grid-cols-2 gap-5">

                        <div className="rounded-3xl border p-8">
                            <h3 className="text-4xl font-bold">
                                8+
                            </h3>

                            <p className="mt-2 text-muted-foreground">
                                Projects Completed
                            </p>
                        </div>

                        <div className="rounded-3xl border p-8">
                            <h3 className="text-4xl font-bold">
                                1+
                            </h3>

                            <p className="mt-2 text-muted-foreground">
                                Years Learning
                            </p>
                        </div>

                        <div className="rounded-3xl border p-8 col-span-2">
                            <h3 className="mb-5 text-lg font-semibold">
                                Core Stack
                            </h3>

                            <div className="flex flex-wrap gap-3">
                                {profile.stack.map((tech) => (
                                    <span
                                        key={tech}
                                        className="rounded-full border px-4 py-2 text-sm"
                                    >
                                        {tech}
                                    </span>
                                ))}
                            </div>

                        </div>

                    </div>
                </div>
            </Container>
        </section>
    );
}
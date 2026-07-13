import Container from "../ui/container";
import TerminalLine from "../home/terminal-line";
import BlinkingCursor from "../home/blinking-cursor";

export default function CaseStudiesClient() {
    return (
        <section className="min-h-[80vh]">
            <Container>
                {/* Header Section */}
                <div className="pt-8 gap-20">
                    <p className="font-mono text-sm text-primary tracking-widest">
                        <span className="text-primary">$</span>
                        <TerminalLine
                            text="find ./casestudies -type f -featured"
                            speed={30}
                        />
                        <BlinkingCursor />
                    </p>
                    <h1 className="text-4xl md:text-5xl font-bold tracking-tight">
                        Case Studies
                    </h1>
                    <p className="text-muted-foreground max-w-xl text-base leading-7">
                        Explore all the case studies I've done about technology, programming, and my personal projects.
                    </p>
                </div>

                {/* Filters & Search Control Bar */}
            </Container>
        </section>
    );
}
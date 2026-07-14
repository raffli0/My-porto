"use client";

interface BlinkingCursorProps {
    speed?: number; // blinking duration in milliseconds
    char?: string;   // custom cursor character
    className?: string;
    mode?: "pulse" | "ping" | "blink" | "solid" | "hide";
}

export default function BlinkingCursor({
    speed = 1000,
    char = "█",
    className = "text-primary",
    mode = "pulse"
}: BlinkingCursorProps) {
    if (mode === "hide") {
        return null;
    }

    const style: React.CSSProperties = { animationDuration: `${speed}ms` };
    let animationClass = "";

    if (mode === "pulse") {
        style.animationName = "terminal-smooth";
        style.animationIterationCount = "infinite";
        style.animationTimingFunction = "ease-in-out";
    } else if (mode === "ping") {
        animationClass = "animate-ping";
    } else if (mode === "blink") {
        style.animationName = "terminal-blink";
        style.animationIterationCount = "infinite";
        style.animationTimingFunction = "steps(2, start)";
    }

    return (
        <>
            {(mode === "blink" || mode === "pulse") && (
                <style dangerouslySetInnerHTML={{ __html: `
                    @keyframes terminal-blink {
                        0%, 100% { opacity: 1; }
                        50% { opacity: 0; }
                    }
                    @keyframes terminal-smooth {
                        0%, 100% { opacity: 1; }
                        50% { opacity: 0; }
                    }
                `}} />
            )}
            <span
                className={`inline-block ${animationClass} ${className}`}
                style={style}
            >
                {char}
            </span>
        </>
    );
}
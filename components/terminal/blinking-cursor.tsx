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
        animationClass = "animate-[terminal-smooth_1s_ease-in-out_infinite]";
    } else if (mode === "ping") {
        animationClass = "animate-ping";
    } else if (mode === "blink") {
        animationClass = "animate-[terminal-blink_1s_steps(2,start)_infinite]";
    }

    return (
        <span
            className={`inline-block ${animationClass} ${className}`}
            style={style}
        >
            {char}
        </span>
    );
}
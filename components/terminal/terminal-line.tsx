"use client";

import { useEffect, useState } from "react";

interface TerminalLineProps {
    text: string;
    speed?: number;
}

export default function TerminalLine({
    text,
    speed = 40,
}: TerminalLineProps) {
    const [display, setDisplay] = useState("");

    useEffect(() => {
        let index = 0;

        const interval = setInterval(() => {
            setDisplay(text.slice(0, index));

            index++;

            if (index > text.length) {
                clearInterval(interval);
            }
        }, speed);

        return () => clearInterval(interval);
    }, [text, speed]);

    return <>{display}</>;
}
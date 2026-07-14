"use client";

import { useEffect, useRef, useState } from "react";

interface TerminalLineProps {
    text: string;
    speed?: number;
    onComplete?: () => void;
}

export default function TerminalLine({
    text,
    speed = 40,
    onComplete,
}: TerminalLineProps) {
    const [display, setDisplay] = useState("");
    const onCompleteRef = useRef(onComplete);

    // Keep the ref updated with the latest callback
    useEffect(() => {
        onCompleteRef.current = onComplete;
    }, [onComplete]);

    useEffect(() => {
        let index = 0;

        const interval = setInterval(() => {
            setDisplay(text.slice(0, index));

            index++;

            if (index > text.length) {
                clearInterval(interval);
                if (onCompleteRef.current) {
                    onCompleteRef.current();
                }
            }
        }, speed);

        return () => clearInterval(interval);
    }, [text, speed]);

    return <>{display}</>;
}
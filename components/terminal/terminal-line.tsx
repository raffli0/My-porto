"use client";

import { useEffect, useRef, useState, useCallback } from "react";

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
    const animationRef = useRef<number | null>(null);
    const startTimeRef = useRef<number | null>(null);
    const lastFrameRef = useRef<number | null>(null);

    // Keep the ref updated with the latest callback
    useEffect(() => {
        onCompleteRef.current = onComplete;
    }, [onComplete]);

    const animate = useCallback((timestamp: number) => {
        if (startTimeRef.current === null) {
            startTimeRef.current = timestamp;
        }
        
        const elapsed = timestamp - startTimeRef.current;
        const index = Math.floor(elapsed / speed);
        
        if (index <= text.length) {
            setDisplay(text.slice(0, index));
            if (animationRef.current !== null) {
                animationRef.current = requestAnimationFrame(animate);
            }
        } else {
            setDisplay(text);
            if (onCompleteRef.current) {
                onCompleteRef.current();
            }
        }
    }, [text, speed]);

    useEffect(() => {
        animationRef.current = requestAnimationFrame(animate);
        return () => {
            if (animationRef.current !== null) {
                cancelAnimationFrame(animationRef.current);
            }
        };
    }, [animate]);

    return <>{display}</>;
}
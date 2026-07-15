"use client";

import { motion } from "framer-motion";
import { ReactNode, useState, useCallback, useRef, useEffect } from "react";
import { cn } from "@/lib/utils";

interface TerminalCardProps {
    children: ReactNode;
    maxRotation?: number; // Maximum rotation angle in degrees. Set to 0 to disable rotation.
    scaleOnHover?: number; // Scale factor when hovering. Set to 1 to disable.
    className?: string;
}

export default function TerminalCard({
    children,
    maxRotation = 15,
    scaleOnHover = 1.02,
    className,
}: TerminalCardProps) {
    const [rotate, setRotate] = useState({
        x: 0,
        y: 0,
    });
    const [mouse, setMouse] = useState({
        x: 50,
        y: 50,
    });
    const [isMobile, setIsMobile] = useState(false);
    const lastCallRef = useRef<number>(0);

    useEffect(() => {
        const checkMobile = () => {
            setIsMobile(window.innerWidth < 768);
        };
        checkMobile();
        window.addEventListener("resize", checkMobile);
        return () => window.removeEventListener("resize", checkMobile);
    }, []);

    const handleMouseMove = useCallback(
        (e: React.MouseEvent<HTMLDivElement>) => {
            if (maxRotation === 0 || isMobile) return;
            
            const now = Date.now();
            if (now - lastCallRef.current < 16) return; // Throttle to ~60fps
            lastCallRef.current = now;
            
            const rect = e.currentTarget.getBoundingClientRect();

            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;

            const rotateY = ((x / rect.width) - 0.5) * maxRotation;
            const rotateX = -((y / rect.height) - 0.5) * maxRotation;

            setRotate({
                x: rotateX,
                y: rotateY,
            });
            setMouse({
                x: (x / rect.width) * 100,
                y: (y / rect.height) * 100,
            });
        },
        [maxRotation, isMobile]
    );

    function reset() {
        setRotate({
            x: 0,
            y: 0,
        });
    }

    return (
        <div
            className="[perspective:1200px]"
            onMouseMove={handleMouseMove}
            onMouseLeave={reset}
        >
            <motion.div
                className={cn(
                    "relative overflow-hidden rounded-2xl border bg-card text-card-foreground shadow-2xl will-change-transform",
                    className
                )}
                animate={{
                    rotateX: rotate.x,
                    rotateY: rotate.y,
                    boxShadow:
                        maxRotation > 0
                            ? `${-rotate.y}px ${rotate.x}px 40px rgba(0,0,0,.25)`
                            : "0 25px 50px -12px rgba(0,0,0,0.25)",
                }}
                transition={{
                    type: "spring",
                    stiffness: 180,
                    damping: 18,
                }}
                style={{
                    transformStyle: "preserve-3d",
                }}
                whileHover={{
                    scale: scaleOnHover,
                }}
            >
                {maxRotation > 0 && (
                    <>
                        <div
                            className="absolute inset-0 opacity-20 pointer-events-none"
                            style={{
                                background: "linear-gradient(120deg,transparent 20%,rgba(255,255,255,.3),transparent 80%)",
                                transform: `translateX(${rotate.y * 2}px)`,
                            }}
                        />
                        <div
                            className="absolute inset-0 opacity-20 pointer-events-none"
                            style={{
                                background:
                                    "linear-gradient(120deg,transparent 20%,rgba(255,255,255,.3),transparent 80%)",
                                transform: `translateX(${rotate.y * 2}px)`,
                            }}
                        />
                    </>
                )}
                <div
                    className="absolute inset-0 opacity-10 pointer-events-none bg-[linear-gradient(to_right,#ffffff10_1px,transparent_1px),linear-gradient(to_bottom,#ffffff10_1px,transparent_1px)] bg-size:24px_24px"
                />
                <div>
                    {children}
                </div>
            </motion.div>
        </div>
    );
}
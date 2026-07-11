"use client";

import { motion } from "framer-motion";
import { ReactNode, useState } from "react";

interface TerminalCardProps {
    children: ReactNode;
}

export default function TerminalCard({
    children,
}: TerminalCardProps) {
    const [rotate, setRotate] = useState({
        x: 0,
        y: 0,
    });
    const [mouse, setMouse] = useState({
        x: 50,
        y: 50,
    });

    function handleMouseMove(
        e: React.MouseEvent<HTMLDivElement>
    ) {
        const rect = e.currentTarget.getBoundingClientRect();

        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        const rotateY = ((x / rect.width) - 0.5) * 18;
        const rotateX = -((y / rect.height) - 0.5) * 18;

        setRotate({
            x: rotateX,
            y: rotateY,
        });
        setMouse({
            x: (x / rect.width) * 100,
            y: (y / rect.height) * 100,
        });
    }

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
            <motion.div className="
            relative 
            overflow-hidden 
            rounded-2xl
            border
            bg-card
            text-card-foreground
            shadow-2xl"
                animate={{
                    rotateX: rotate.x,
                    rotateY: rotate.y,
                    boxShadow:
                        `${-rotate.y}px ${rotate.x}px 40px rgba(0,0,0,.25)`,
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
                    scale: 1.02,
                }}
            >
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
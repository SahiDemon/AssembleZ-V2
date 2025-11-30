"use client";

import { useEffect, useRef } from "react";

export default function AnimatedBackground() {
    const canvasRef = useRef<HTMLCanvasElement>(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const ctx = canvas.getContext("2d");
        if (!ctx) return;

        let width = window.innerWidth;
        let height = window.innerHeight;

        const resize = () => {
            width = window.innerWidth;
            height = window.innerHeight;
            canvas.width = width;
            canvas.height = height;
        };

        window.addEventListener("resize", resize);
        resize();

        const particles: Particle[] = [];
        const particleCount = 40; // Reduced count for cleaner look on black

        class Particle {
            x: number;
            y: number;
            vx: number;
            vy: number;
            size: number;
            color: string;

            constructor() {
                this.x = Math.random() * width;
                this.y = Math.random() * height;
                this.vx = (Math.random() - 0.5) * 0.3;
                this.vy = (Math.random() - 0.5) * 0.3;
                this.size = Math.random() * 2 + 1;

                // Single Theme Color: Blue
                this.color = `hsla(217, 91%, 60%, ${Math.random() * 0.4 + 0.1}`; // Blue (#3b82f6)
            }
    

            update() {
                this.x += this.vx;
                this.y += this.vy;

                if (this.x < 0) this.x = width;
                if (this.x > width) this.x = 0;
                if (this.y < 0) this.y = height;
                if (this.y > height) this.y = 0;
            }

            draw() {
                if (!ctx) return;
                ctx.beginPath();
                ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
                ctx.fillStyle = this.color;
                ctx.fill();

                // Add glow effect
                ctx.shadowBlur = 15;
                ctx.shadowColor = this.color;
            }
        }

        for (let i = 0; i < particleCount; i++) {
            particles.push(new Particle());
        }

        const animate = () => {
            if (!ctx) return;
            ctx.clearRect(0, 0, width, height);

            // Removed black background fill to allow Noise component to show through

            // Subtle Gradient Overlay for depth (very faint)
            const gradient = ctx.createRadialGradient(width / 2, height / 2, 0, width / 2, height / 2, width);
            gradient.addColorStop(0, "rgba(59, 130, 246, 0.05)"); // Very subtle blue center
            gradient.addColorStop(1, "rgba(0, 0, 0, 0)");
            ctx.fillStyle = gradient;
            ctx.fillRect(0, 0, width, height);

            particles.forEach(p => {
                p.update();
                p.draw();
            });

            requestAnimationFrame(animate);
        };

        animate();

        return () => {
            window.removeEventListener("resize", resize);
        };
    }, []);

    return (
        <canvas
            ref={canvasRef}
            className="fixed inset-0 -z-10 h-full w-full"
        />
    );
}

"use client";

import { useRef, useState, useEffect } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

interface PreloaderProps {
    onComplete: () => void;
}

export default function Preloader({ onComplete }: PreloaderProps) {
    const containerRef = useRef<HTMLDivElement>(null);
    const fillGroupRef = useRef<SVGGElement>(null);
    const wave1Ref = useRef<SVGPathElement>(null);
    const wave2Ref = useRef<SVGPathElement>(null);
    const [progress, setProgress] = useState(0);
    const [pageLoaded, setPageLoaded] = useState(false);
    const [animationComplete, setAnimationComplete] = useState(false);

    // Track when page is actually loaded
    useEffect(() => {
        if (document.readyState === 'complete') {
            setPageLoaded(true);
        } else {
            const handleLoad = () => setPageLoaded(true);
            window.addEventListener('load', handleLoad);
            return () => window.removeEventListener('load', handleLoad);
        }
    }, []);

    // Trigger exit when BOTH page is loaded and animation is complete
    useEffect(() => {
        if (pageLoaded && animationComplete) {
            const ctx = gsap.context(() => {
                const tl = gsap.timeline({
                    onComplete: onComplete
                });

                // Get actual DOM element positions for dynamic calculation
                const preloaderSvg = containerRef.current!.querySelector('svg')! as SVGElement;
                const heroTitleSvg = document.querySelector('#hero-title svg')! as SVGElement;

                const preloaderRect = preloaderSvg.getBoundingClientRect();
                const heroRect = heroTitleSvg.getBoundingClientRect();

                // Calculate the exact translation needed (center to center)
                const deltaX = heroRect.left + (heroRect.width / 2) - (preloaderRect.left + (preloaderRect.width / 2));
                const deltaY = heroRect.top + (heroRect.height / 2) - (preloaderRect.top + (preloaderRect.height / 2));

                // Calculate scale to match the width
                const scaleValue = heroRect.width / preloaderRect.width;

                // 1. Fade out the black background and percentage indicator
                tl.to(containerRef.current, {
                    backgroundColor: "transparent",
                    duration: 0.5,
                    ease: "power2.inOut"
                })
                    .to(containerRef.current!.querySelector('.percentage-indicator'), {
                        opacity: 0,
                        duration: 0.3,
                        ease: "power2.out"
                    }, "<")
                    // 2. Animate the SVG to the exact position of the hero title
                    .to(preloaderSvg, {
                        x: deltaX,
                        y: deltaY,
                        scale: scaleValue,
                        duration: 0.8,
                        ease: "power3.inOut"
                    }, "<")
                    // 3. Fade in the real title
                    .to("#hero-title", {
                        opacity: 1,
                        duration: 0.3,
                        ease: "power2.out"
                    }, "-=0.1");

            }, containerRef);
            // Do not revert context here to keep the #hero-title opacity change
            // return () => ctx.revert();
        }
    }, [pageLoaded, animationComplete, onComplete]);

    useGSAP(() => {
        const tl = gsap.timeline({
            onComplete: () => setAnimationComplete(true)
        });

        // Initial state - waves well below
        gsap.set(fillGroupRef.current, { y: 350 });

        // Smooth continuous wave animations
        gsap.to(wave1Ref.current, {
            x: -800,
            duration: 3,
            ease: "none",
            repeat: -1
        });

        gsap.to(wave2Ref.current, {
            x: -800,
            duration: 4.5,
            ease: "none",
            repeat: -1
        });

        // Vertical fill animation - 2.5 seconds duration
        tl.to(fillGroupRef.current, {
            y: 50, // Calibrated for sync
            duration: 2.5,
            ease: "power1.inOut",
            onUpdate: function () {
                const p = Math.round(this.progress() * 100);
                setProgress(p);
            }
        });

    }, { scope: containerRef });

    return (
        <div
            ref={containerRef}
            className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-black text-white"
        >
            <div className="relative w-full max-w-6xl px-4">
                <svg viewBox="0 0 1200 350" className="w-full h-auto overflow-visible">
                    <defs>
                        <clipPath id="text-clip">
                            <text
                                x="50%"
                                y="50%"
                                textAnchor="middle"
                                dominantBaseline="middle"
                                className="font-black tracking-tight"
                                style={{ fontSize: "180px", fontFamily: "var(--font-geist-sans), sans-serif" }}
                            >
                                AssembleZ
                            </text>
                        </clipPath>
                    </defs>

                    {/* Background Text */}
                    <text
                        x="50%"
                        y="50%"
                        textAnchor="middle"
                        dominantBaseline="middle"
                        fill="#151515"
                        className="font-black tracking-tight"
                        style={{ fontSize: "180px", fontFamily: "var(--font-geist-sans), sans-serif" }}
                    >
                        AssembleZ
                    </text>

                    {/* Liquid Fill */}
                    <g clipPath="url(#text-clip)">
                        <g ref={fillGroupRef}>
                            {/* Smooth Wave Layer 2 (Background) */}
                            <path
                                ref={wave2Ref}
                                d="M 0 25 C 200 0, 400 0, 600 25 C 800 50, 1000 50, 1200 25 C 1400 0, 1600 0, 1800 25 C 2000 50, 2200 50, 2400 25 V 700 H 0 Z"
                                fill="rgba(255, 255, 255, 0.4)"
                            />
                            {/* Smooth Wave Layer 1 (Foreground) */}
                            <path
                                ref={wave1Ref}
                                d="M 0 20 C 200 45, 400 45, 600 20 C 800 -5, 1000 -5, 1200 20 C 1400 45, 1600 45, 1800 20 C 2000 -5, 2200 -5, 2400 20 V 700 H 0 Z"
                                fill="white"
                            />
                        </g>
                    </g>
                </svg>

                {/* Percentage Indicator - right side under Z */}
                <div className="percentage-indicator absolute bottom-[15%] right-[8%] font-mono text-xs sm:text-sm text-gray-400">
                    loading... {progress}%
                </div>
            </div>
        </div>
    );
}

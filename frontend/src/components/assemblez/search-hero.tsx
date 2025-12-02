"use client";

import { Search, Cpu, Gamepad2, HardDrive, MemoryStick, Monitor, Box } from "lucide-react";
import { Button } from "@/components/ui/button";
import DarkVeil from "./dark-veil";
import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

interface SearchHeroProps {
    showTitle?: boolean;
}

export default function SearchHero({ showTitle = false }: SearchHeroProps) {
    const zFillGroupRef = useRef<SVGGElement>(null);
    const zWave1Ref = useRef<SVGPathElement>(null);
    const zWave2Ref = useRef<SVGPathElement>(null);
    const zWave3Ref = useRef<SVGPathElement>(null);
    const heroRef = useRef<HTMLElement>(null);

    useGSAP(() => {
        gsap.set([".hero-subtitle", ".hero-search"], { opacity: 0 });
        gsap.set(".hero-subtitle", { y: 20 });
        gsap.set(".hero-search", { y: 30, scale: 0.95 });
        gsap.set(".hero-category-btn", { opacity: 0, scale: 0.8, y: 20 });
        gsap.set(".hero-gradient-overlay", { opacity: 0 });

        if (!showTitle) return;

        gsap.set(zFillGroupRef.current, { y: 200 });

        gsap.to(zWave1Ref.current, {
            x: -1200,
            duration: 8,
            ease: "none",
            repeat: -1,
        });

        gsap.to(zWave2Ref.current, {
            x: -1200,
            duration: 12,
            ease: "none",
            repeat: -1,
        });

        gsap.to(zWave3Ref.current, {
            x: -1200,
            duration: 10,
            ease: "none",
            repeat: -1,
        });

        gsap.to(zWave1Ref.current, {
            y: "+=3",
            duration: 2,
            ease: "sine.inOut",
            repeat: -1,
            yoyo: true,
        });

        gsap.to(zWave2Ref.current, {
            y: "-=2",
            duration: 2.5,
            ease: "sine.inOut",
            repeat: -1,
            yoyo: true,
        });

        const tl = gsap.timeline({ delay: 0.3 });

        tl.to(zFillGroupRef.current, {
            y: 0,
            duration: 1.5,
            ease: "power2.out",
        });

        const heroTl = gsap.timeline({ delay: 0.05 });

        heroTl.to(".hero-gradient-overlay", {
            opacity: 1,
            duration: 0.4,
            ease: "power2.inOut",
        })
            .to(".hero-subtitle", {
                opacity: 1,
                y: 0,
                duration: 0.25,
                ease: "power2.out",
            }, "-=0.3")
            .to(".hero-search", {
                opacity: 1,
                y: 0,
                scale: 1,
                duration: 0.3,
                ease: "power2.out",
            }, "-=0.1")
            .to(".hero-category-btn", {
                opacity: 1,
                scale: 1,
                y: 0,
                duration: 0.25,
                stagger: 0.02,
                ease: "power2.out",
            }, "-=0.15");

    }, { dependencies: [showTitle], scope: heroRef });

    const categories = [
        { name: "CPU", icon: Cpu },
        { name: "GPU", icon: Gamepad2 },
        { name: "RAM", icon: MemoryStick },
        { name: "SSD", icon: HardDrive },
        { name: "Cases", icon: Box },
        { name: "Monitors", icon: Monitor },
    ];

    return (
        <section ref={heroRef} className="relative flex flex-col items-center justify-center gap-8 px-4 pt-36 pb-20 text-center md:pt-44 md:pb-28 overflow-hidden">
            {/* DarkVeil Background with Midnight Blue Theme */}
            <div className="absolute inset-0 z-0">
                <DarkVeil
                    show={showTitle}
                    hueShift={24}
                    noiseIntensity={0.01}
                    scanlineIntensity={0}
                    speed={0.5}
                    scanlineFrequency={0}
                    warpAmount={0}
                />
            </div>

            <div className="hero-gradient-overlay absolute inset-0 bg-gradient-to-b from-blue-950/60 via-black/40 to-black/80 z-[1]" />

            {/* Title Section - Hidden initially for animation */}
            <div className="relative z-10 flex flex-col gap-4 max-w-4xl mx-auto items-center">
                <div
                    id="hero-title"
                    className={`w-full max-w-[600px] transition-opacity duration-0 ${showTitle ? 'opacity-100' : 'opacity-0'}`}
                >
                    <svg viewBox="0 0 1200 200" className="w-full h-auto overflow-visible">
                        <defs>
                            {/* Clip path for just the last Z letter */}
                            <clipPath id="z-letter-clip">
                                <text
                                    x="86.6%"
                                    y="50%"
                                    textAnchor="middle"
                                    dominantBaseline="middle"
                                    className="font-black tracking-tight"
                                    style={{ fontSize: "185px", fontFamily: "var(--font-geist-sans), sans-serif" }}
                                >
                                    Z
                                </text>
                            </clipPath>
                        </defs>

                        {/* Main white text */}
                        <text
                            x="50%"
                            y="50%"
                            textAnchor="middle"
                            dominantBaseline="middle"
                            fill="white"
                            className="font-black tracking-tight"
                            style={{ fontSize: "180px", fontFamily: "var(--font-geist-sans), sans-serif" }}
                        >
                            AssembleZ
                        </text>

                        {/* Blue liquid fill for Z letter only */}
                        <g clipPath="url(#z-letter-clip)">
                            <g ref={zFillGroupRef}>
                                {/* Blue Wave Layer 3 (Background) - Deepest, slowest wave */}
                                <path
                                    ref={zWave2Ref}
                                    d="M 0 35 C 200 15, 400 15, 600 35 C 800 55, 1000 55, 1200 35 C 1400 15, 1600 15, 1800 35 C 2000 55, 2200 55, 2400 35 V 400 H 0 Z"
                                    fill="rgba(7, 61, 177, 0.6)"
                                    opacity="0.7"
                                />
                                {/* Blue Wave Layer 2 (Middle) - Medium wave */}
                                <path
                                    ref={zWave3Ref}
                                    d="M 0 25 C 250 10, 450 10, 600 25 C 850 40, 1050 40, 1200 25 C 1450 10, 1650 10, 1800 25 C 2050 40, 2250 40, 2400 25 V 400 H 0 Z"
                                    fill="rgba(12, 84, 199, 0.7)"
                                    opacity="0.8"
                                />
                                {/* Blue Wave Layer 1 (Foreground) - Primary wave with most amplitude */}
                                <path
                                    ref={zWave1Ref}
                                    d="M 0 20 C 150 45, 350 45, 600 20 C 750 -5, 950 -5, 1200 20 C 1350 45, 1550 45, 1800 20 C 1950 -5, 2150 -5, 2400 20 V 400 H 0 Z"
                                    fill="rgba(1, 58, 128, 0.85)"
                                />
                            </g>
                        </g>
                    </svg>
                </div>
                <h2 className="hero-subtitle text-base font-normal text-gray-400 md:text-xl">
                    Build Smarter. Compare PC part prices across Sri Lanka.
                </h2>
            </div>

            <div className="hero-search relative z-10 w-full max-w-2xl">
                <div className="flex w-full items-center rounded-xl border border-white/20 bg-white/5 p-2 backdrop-blur-md transition-all focus-within:border-primary/50 focus-within:bg-white/10 focus-within:shadow-lg focus-within:shadow-primary/20">
                    <Search className="ml-3 h-6 w-6 text-gray-400" />
                    <input
                        type="text"
                        placeholder="Search for a CPU, GPU, Motherboard..."
                        className="flex-1 bg-transparent px-4 py-3 text-white placeholder:text-gray-500 focus:outline-none"
                    />
                    <Button className="h-12 px-8 font-bold text-white">
                        Search
                    </Button>
                </div>
            </div>

            <div className="hero-categories relative z-10 flex flex-wrap justify-center gap-3">
                {categories.map((cat, index) => (
                    <button
                        key={index}
                        className="hero-category-btn group flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-6 py-2.5 text-sm font-medium text-gray-300 transition-all duration-300 hover:border-primary/50 hover:bg-white/10 hover:text-white hover:scale-105 hover:shadow-lg hover:shadow-primary/20"
                    >
                        <cat.icon className="h-4 w-4 text-primary/70 transition-colors group-hover:text-primary group-hover:scale-110" />
                        {cat.name}
                    </button>
                ))}
            </div>
        </section>
    );
}

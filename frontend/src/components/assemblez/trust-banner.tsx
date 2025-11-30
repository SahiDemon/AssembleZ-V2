"use client";

import { ShieldCheck, BadgeCheck, Clock } from "lucide-react";
import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

interface TrustBannerProps {
    showContent?: boolean;
}

export default function TrustBanner({ showContent = false }: TrustBannerProps) {
    const bannerRef = useRef<HTMLDivElement>(null);

    useGSAP(() => {
        gsap.set(bannerRef.current, { opacity: 0, y: 20 });
        gsap.set(".trust-item", { opacity: 0, y: 30, scale: 0.95 });
        if (!showContent) return;

        gsap.to(bannerRef.current, {
            opacity: 1,
            y: 0,
            duration: 0.4,
            delay: 0.4,
            ease: "power2.out",
        });

        gsap.to(".trust-item", {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 0.3,
            delay: 0.6,
            stagger: 0.08,
            ease: "power2.out",
        });

        gsap.to(".trust-icon", {
            scale: 1.1,
            duration: 2,
            ease: "sine.inOut",
            repeat: -1,
            yoyo: true,
            stagger: 0.15,
            delay: 0.8
        });
    }, { dependencies: [showContent], scope: bannerRef });

    return (
        <section ref={bannerRef} className="border-y border-white/10 bg-black relative overflow-hidden">
            <div className="mx-auto grid max-w-7xl grid-cols-1 divide-y divide-white/10 sm:grid-cols-3 sm:divide-x sm:divide-y-0 text-center sm:text-left relative z-10">
                <div className="trust-item flex flex-col items-center justify-center gap-4 p-8 sm:flex-row transition-all duration-300 hover:bg-white/5">
                    <BadgeCheck className="trust-icon h-10 w-10 text-primary drop-shadow-[0_0_8px_rgba(19,56,131,0.5)]" />
                    <div>
                        <p className="text-base font-medium text-white">Verified Stores</p>
                        <p className="text-sm text-gray-500">Only trusted retailers listed.</p>
                    </div>
                </div>

                <div className="trust-item flex flex-col items-center justify-center gap-4 p-8 sm:flex-row transition-all duration-300 hover:bg-white/5">
                    <ShieldCheck className="trust-icon h-10 w-10 text-primary drop-shadow-[0_0_8px_rgba(19,56,131,0.5)]" />
                    <div>
                        <p className="text-base font-medium text-white">Official Warranty</p>
                        <p className="text-sm text-gray-500">Products with genuine warranties.</p>
                    </div>
                </div>

                <div className="trust-item flex flex-col items-center justify-center gap-4 p-8 sm:flex-row transition-all duration-300 hover:bg-white/5">
                    <Clock className="trust-icon h-10 w-10 text-primary drop-shadow-[0_0_8px_rgba(19,56,131,0.5)]" />
                    <div>
                        <p className="text-base font-medium text-white">Prices Updated Hourly</p>
                        <p className="text-sm text-gray-500">Stay ahead with the latest deals.</p>
                    </div>
                </div>
            </div>
        </section>
    );
}

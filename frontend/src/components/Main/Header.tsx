"use client";

import { Menu, Cpu } from "lucide-react";
import { LiquidGlassButton } from "@/components/ui/liquid-glass-button";
import { LiquidGlassNav } from "@/components/ui/liquid-glass-nav";

export default function Header() {
    return (
        <header className="fixed top-0 left-0 right-0 z-50 border-b border-white/10 bg-black/10 backdrop-blur-md transition-all duration-300">
            <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="flex items-center gap-2">
                    <Cpu className="h-8 w-8 text-primary" />
                    <span className="text-xl font-bold text-white">Assemble<span className="text-primary">Z</span></span>
                </div>

                <nav className="hidden md:flex items-center gap-3">
                    <LiquidGlassNav href="#">CPUs</LiquidGlassNav>
                    <LiquidGlassNav href="#">GPUs</LiquidGlassNav>
                    <LiquidGlassNav href="#">Motherboards</LiquidGlassNav>
                    <LiquidGlassNav href="#">RAM</LiquidGlassNav>
                    <LiquidGlassNav href="#">Storage</LiquidGlassNav>
                </nav>

                <div className="flex items-center gap-4">
                    <LiquidGlassButton variant="ghost" className="hidden sm:inline-flex">
                        Log in
                    </LiquidGlassButton>
                    <LiquidGlassButton className="text-white">
                        Sign up
                    </LiquidGlassButton>
                    <LiquidGlassButton variant="ghost" size="icon" className="md:hidden">
                        <Menu className="h-6 w-6" />
                    </LiquidGlassButton>
                </div>
            </div>
        </header>
    );
}
import { Search, Cpu, Gamepad2, HardDrive, MemoryStick, Monitor, Box } from "lucide-react";
import { Button } from "@/components/ui/button";
import DarkVeil from "./dark-veil";

export default function SearchHero() {
    const categories = [
        { name: "CPU", icon: Cpu },
        { name: "GPU", icon: Gamepad2 },
        { name: "RAM", icon: MemoryStick },
        { name: "SSD", icon: HardDrive },
        { name: "Cases", icon: Box },
        { name: "Monitors", icon: Monitor },
    ];

    return (
        <section className="relative flex flex-col items-center justify-center gap-8 px-4 pt-36 pb-20 text-center md:pt-44 md:pb-28 overflow-hidden">
            {/* DarkVeil Background with Midnight Blue Theme */}
            <div className="absolute inset-0 z-0">
                <DarkVeil 
                    hueShift={24}
                    noiseIntensity={0.01}
                    scanlineIntensity={0}
                    speed={0.5}
                    scanlineFrequency={0}
                    warpAmount={0}
                />
            </div>

            {/* Background Gradient Overlay for better text contrast */}
            <div className="absolute inset-0 bg-gradient-to-b from-blue-950/60 via-black/40 to-black/80 z-[1]" />

            <div className="relative z-10 flex flex-col gap-4 max-w-4xl mx-auto">
                <h1 className="text-4xl font-black leading-tight tracking-tight text-white md:text-6xl animate-slide-up">
                    Assemble<span className="text-primary">Z</span>
                </h1>
                <h2 className="text-base font-normal text-gray-400 md:text-xl animate-slide-up" style={{ animationDelay: "0.1s" }}>
                    Build Smarter. Compare PC part prices across Sri Lanka.
                </h2>
            </div>

            <div className="relative z-10 w-full max-w-2xl animate-slide-up" style={{ animationDelay: "0.2s" }}>
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

            <div className="relative z-10 flex flex-wrap justify-center gap-3 animate-slide-up" style={{ animationDelay: "0.3s" }}>
                {categories.map((cat, index) => (
                    <button
                        key={index}
                        className="group flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-6 py-2.5 text-sm font-medium text-gray-300 transition-all hover:border-primary/50 hover:bg-white/10 hover:text-white"
                    >
                        <cat.icon className="h-4 w-4 text-primary/70 transition-colors group-hover:text-primary" />
                        {cat.name}
                    </button>
                ))}
            </div>
        </section>
    );
}

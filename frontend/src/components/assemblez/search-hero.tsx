import { Search, Cpu, Gamepad2, HardDrive, MemoryStick, Monitor, Box } from "lucide-react";
import { Button } from "@/components/ui/button";

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
        <section className="relative flex flex-col items-center justify-center gap-8 px-4 py-20 text-center md:py-28 overflow-hidden">
            {/* Background Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-b from-black/80 to-black z-0" />

            {/* Glow Orbs - Repositioned for better framing */}
            <div className="absolute top-0 left-0 -translate-x-1/2 -translate-y-1/2 h-[600px] w-[600px] rounded-full bg-primary/20 blur-[150px] pointer-events-none z-0 animate-pulse-glow" />
            <div className="absolute bottom-0 right-0 translate-x-1/2 translate-y-1/2 h-[600px] w-[600px] rounded-full bg-purple-600/20 blur-[150px] pointer-events-none z-0 animate-pulse-glow" style={{ animationDelay: "2s" }} />

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
                    <Button className="h-12 px-8 font-bold bg-primary hover:bg-primary/90">
                        Search
                    </Button>
                </div>
            </div>

            <div className="relative z-10 flex flex-wrap justify-center gap-3 animate-slide-up" style={{ animationDelay: "0.3s" }}>
                {categories.map((cat, index) => (
                    <button
                        key={index}
                        className="group flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm font-medium text-white transition-all hover:bg-white/10 hover:border-primary/50 hover:text-primary"
                    >
                        <cat.icon className="h-4 w-4 text-gray-400 group-hover:text-primary transition-colors" />
                        {cat.name}
                    </button>
                ))}
            </div>
        </section>
    );
}

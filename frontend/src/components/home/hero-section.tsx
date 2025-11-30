import { GlassButton } from "@/components/ui/glass-button";
import { ArrowRight, Play, Star } from "lucide-react";
import { Badge } from "@/components/ui/badge";

export default function HeroSection() {
    return (
        <section className="relative flex min-h-[90vh] flex-col items-center justify-center px-4 py-24 text-center sm:px-6 lg:px-8">
            {/* Floating Elements */}
            <div className="absolute top-1/4 left-1/4 h-64 w-64 animate-pulse-glow rounded-full bg-purple-500/20 blur-3xl" />
            <div className="absolute bottom-1/4 right-1/4 h-64 w-64 animate-pulse-glow rounded-full bg-indigo-500/20 blur-3xl" style={{ animationDelay: "2s" }} />

            <div className="relative z-10 max-w-4xl space-y-8">
                <div className="animate-fade-in opacity-0" style={{ animationDelay: "0.2s" }}>
                    <Badge variant="outline" className="glass border-indigo-500/30 px-4 py-2 text-sm text-indigo-300 backdrop-blur-md">
                        <Star className="mr-2 h-4 w-4 text-yellow-400" />
                        New Version 2.0 Available
                    </Badge>
                </div>

                <h1 className="animate-slide-up text-5xl font-extrabold tracking-tight text-white opacity-0 sm:text-7xl lg:text-8xl" style={{ animationDelay: "0.4s" }}>
                    Create Stunning <br />
                    <span className="text-gradient">Home Videos</span>
                </h1>

                <p className="animate-slide-up mx-auto max-w-2xl text-xl text-gray-300 opacity-0 sm:text-2xl" style={{ animationDelay: "0.6s" }}>
                    Transform your memories into cinematic masterpieces with our professional editing suite.
                    Powered by AI, designed for creators.
                </p>

                <div className="animate-slide-up flex flex-col items-center justify-center gap-4 opacity-0 sm:flex-row" style={{ animationDelay: "0.8s" }}>
                    <GlassButton size="lg" className="h-14 min-w-[200px] text-lg font-semibold text-white">
                        Get Started <ArrowRight className="ml-2 h-5 w-5" />
                    </GlassButton>
                    <GlassButton size="lg" variant="outline" className="h-14 min-w-[200px] text-lg font-semibold">
                        Watch Demo <Play className="ml-2 h-5 w-5 fill-current" />
                    </GlassButton>
                </div>
            </div>
        </section>
    );
}

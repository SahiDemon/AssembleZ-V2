import { Button } from "@/components/ui/button";
import { Menu, Cpu } from "lucide-react";

export default function Header() {
    return (
        <header className="fixed top-0 left-0 right-0 z-50 border-b border-white/10 bg-black/50 backdrop-blur-xl transition-all duration-300">
            <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
                <div className="flex items-center gap-2">
                    <Cpu className="h-8 w-8 text-primary" />
                    <span className="text-xl font-bold text-white">Assemble<span className="text-primary">Z</span></span>
                </div>

                <nav className="hidden md:flex items-center gap-8">
                    <a href="#" className="text-sm font-medium text-gray-300 hover:text-white transition-colors">CPUs</a>
                    <a href="#" className="text-sm font-medium text-gray-300 hover:text-white transition-colors">GPUs</a>
                    <a href="#" className="text-sm font-medium text-gray-300 hover:text-white transition-colors">Motherboards</a>
                    <a href="#" className="text-sm font-medium text-gray-300 hover:text-white transition-colors">RAM</a>
                    <a href="#" className="text-sm font-medium text-gray-300 hover:text-white transition-colors">Storage</a>
                </nav>

                <div className="flex items-center gap-4">
                    <Button variant="ghost" className="hidden text-primary hover:bg-primary/10 hover:text-primary sm:inline-flex">
                        Log in
                    </Button>
                    <Button className="bg-white/5 border border-primary/50 text-primary font-bold shadow-[0_0_15px_rgba(59,130,246,0.15)] hover:bg-primary/10 hover:border-primary hover:shadow-[0_0_25px_rgba(59,130,246,0.4)] hover:text-white transition-all duration-300 backdrop-blur-md">
                        Sign up
                    </Button>
                    <Button variant="ghost" size="icon" className="text-white md:hidden hover:bg-white/10 hover:text-white">
                        <Menu className="h-6 w-6" />
                    </Button>
                </div>
            </div>
        </header>
    );
}
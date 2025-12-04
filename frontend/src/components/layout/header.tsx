"use client";

import { Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import { NavLink } from "@/components/ui/nav-link";
import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { SignedIn, SignedOut, UserButton } from "@clerk/nextjs";

interface HeaderProps {
    show?: boolean;
}

export default function Header({ show = false }: HeaderProps) {
    const headerRef = useRef<HTMLElement>(null);
    const router = useRouter();

    useGSAP(() => {
        gsap.set(headerRef.current, { y: -100, opacity: 0 });
        if (!show) return;
        gsap.to(headerRef.current, {
            y: 0,
            opacity: 1,
            duration: 0.4,
            ease: "power2.out",
        });
    }, { dependencies: [show], scope: headerRef });

    return (
        <header ref={headerRef} className="fixed top-0 left-0 right-0 z-50 border-b border-white/10 bg-black/10 backdrop-blur-md transition-all duration-10">
            <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8 relative z-10">
                <Link href="/" className="flex items-center gap-2">
                    <Image
                        src="/logo.png"
                        alt="AssembleZ Logo"
                        width={32}
                        height={32}
                        className="object-contain"
                    />
                    <span className="text-xl font-bold text-white">Assemble<span className="text-white">Z</span></span>
                </Link>

                <nav className="hidden md:flex items-center gap-3">
                    <NavLink href="#">CPUs</NavLink>
                    <NavLink href="#">GPUs</NavLink>
                    <NavLink href="#">Motherboards</NavLink>
                    <NavLink href="#">RAM</NavLink>
                    <NavLink href="#">Storage</NavLink>
                </nav>

                <div className="flex items-center gap-4">
                    <SignedOut>
                        <Button variant="ghost" className="hidden sm:inline-flex" onClick={() => router.push("/sign-in")}>
                            Log in
                        </Button>
                        <Button className="text-white" onClick={() => router.push("/sign-up")}>
                            Sign up
                        </Button>
                    </SignedOut>
                    <SignedIn>
                        <UserButton
                            appearance={{
                                elements: {
                                    avatarBox: "h-9 w-9 ring-2 ring-white/10 hover:ring-white/20 transition-all"
                                }
                            }}
                        />
                    </SignedIn>
                    <Button variant="ghost" size="icon" className="md:hidden">
                        <Menu className="h-6 w-6" />
                    </Button>
                </div>
            </div>
        </header>
    );
}
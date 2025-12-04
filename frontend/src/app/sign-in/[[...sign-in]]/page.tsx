"use client";

import { LoginForm } from "@/components/auth/login-form";
import ColorBends from "@/components/ui/color-bends";
import Header from "@/components/layout/header";

export default function SignInPage() {
    return (
        <main className="relative min-h-screen w-full flex items-center justify-center overflow-hidden">
            <div className="absolute inset-0">
                <ColorBends
                    className="w-full h-full opacity-30"
                    rotation={0}
                    speed={0.2}
                    scale={1}
                    frequency={1}
                    warpStrength={1}
                    mouseInfluence={1}
                    parallax={0.01}
                    noise={0.1}
                    transparent={true}
                />
            </div>
            <Header show={true} />
            <div className="relative z-10 pt-16">
                <LoginForm />
            </div>
        </main>
    );
}

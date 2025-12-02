"use client"

import * as React from "react"
import { cn } from "@/lib/utils"

interface PasswordStrengthProps {
    password?: string
    className?: string
}

export function PasswordStrength({ password = "", className }: PasswordStrengthProps) {
    const [strength, setStrength] = React.useState(0)
    const [strengthLabel, setStrengthLabel] = React.useState("")

    React.useEffect(() => {
        let score = 0
        if (!password) {
            setStrength(0)
            setStrengthLabel("")
            return
        }

        if (password.length > 6) score += 1
        if (password.length > 10) score += 1
        if (/[A-Z]/.test(password)) score += 1
        if (/[0-9]/.test(password)) score += 1
        if (/[^A-Za-z0-9]/.test(password)) score += 1

        setStrength(score)

        // Set label based on strength
        if (score <= 2) {
            setStrengthLabel("Weak")
        } else if (score <= 3) {
            setStrengthLabel("Fair")
        } else if (score === 4) {
            setStrengthLabel("Good")
        } else {
            setStrengthLabel("Strong")
        }
    }, [password])

    // Don't render if no password
    if (!password) return null

    return (
        <div className={cn("mt-2 space-y-1", className)}>
            <div className="flex gap-1 h-1">
                {Array.from({ length: 5 }).map((_, i) => (
                    <div
                        key={i}
                        className={cn(
                            "h-full w-full rounded-full transition-all duration-300",
                            i < strength
                                ? strength <= 2
                                    ? "bg-red-500"
                                    : strength <= 3
                                        ? "bg-yellow-500"
                                        : "bg-green-500"
                                : "bg-white/10"
                        )}
                    />
                ))}
            </div>
            <p className={cn(
                "text-xs font-medium transition-colors duration-300",
                strength <= 2
                    ? "text-red-500"
                    : strength <= 3
                        ? "text-yellow-500"
                        : "text-green-500"
            )}>
                Password strength: {strengthLabel}
            </p>
        </div>
    )
}

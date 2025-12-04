"use client"

import { PasswordStrength } from "@/components/ui/password-strength"

import * as React from "react"
import { useSignIn } from "@clerk/nextjs"
import { useRouter } from "next/navigation"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import * as z from "zod"
import { Loader2, ArrowLeft, Eye, EyeOff } from "lucide-react"

import { Button } from "@/components/ui/button"
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import Link from "next/link"
import Image from "next/image"

const emailSchema = z.object({
    email: z.string().email({
        message: "Please enter a valid email address.",
    }),
})

const resetSchema = z.object({
    code: z.string().min(6, {
        message: "Code must be 6 characters.",
    }),
    password: z.string().min(8, {
        message: "Password must be at least 8 characters.",
    }),
})

export function ForgotPasswordForm() {
    const { isLoaded, signIn, setActive } = useSignIn()
    const [error, setError] = React.useState<string | null>(null)
    const [isLoading, setIsLoading] = React.useState(false)
    const [successfulCreation, setSuccessfulCreation] = React.useState(false)
    const [showPassword, setShowPassword] = React.useState(false)
    const router = useRouter()

    const emailForm = useForm<z.infer<typeof emailSchema>>({
        resolver: zodResolver(emailSchema),
        defaultValues: {
            email: "",
        },
    })

    const resetForm = useForm<z.infer<typeof resetSchema>>({
        resolver: zodResolver(resetSchema),
        defaultValues: {
            code: "",
            password: "",
        },
    })

    async function onRequestReset(values: z.infer<typeof emailSchema>) {
        if (!isLoaded) return

        setIsLoading(true)
        setError(null)

        try {
            await signIn.create({
                strategy: "reset_password_email_code",
                identifier: values.email,
            })

            setSuccessfulCreation(true)
        } catch (err: any) {
            console.error("error", err.errors[0].longMessage)
            setError(err.errors[0].longMessage || "Something went wrong")
        } finally {
            setIsLoading(false)
        }
    }

    async function onReset(values: z.infer<typeof resetSchema>) {
        if (!isLoaded) return

        setIsLoading(true)
        setError(null)

        try {
            const result = await signIn.attemptFirstFactor({
                strategy: "reset_password_email_code",
                code: values.code,
                password: values.password,
            })

            if (result.status === "complete") {
                await setActive({ session: result.createdSessionId })
                router.push("/")
            } else {
                console.log(result)
                setError("Reset failed. Please try again.")
            }
        } catch (err: any) {
            console.error("error", err.errors[0].longMessage)
            setError(err.errors[0].longMessage || "Invalid code or password")
        } finally {
            setIsLoading(false)
        }
    }

    if (successfulCreation) {
        return (
            <Card className="w-[500px] border-white/10 bg-black/60 backdrop-blur-xl shadow-2xl fade-in-up">
                <CardHeader className="space-y-3 pb-8">
                    <CardTitle className="text-3xl text-center font-bold tracking-tight">Reset Password</CardTitle>
                    <CardDescription className="text-center text-base">
                        Enter the code sent to your email and your new password.
                    </CardDescription>
                </CardHeader>
                <CardContent className="grid gap-6">
                    <form onSubmit={resetForm.handleSubmit(onReset)}>
                        <div className="grid gap-5">
                            <div className="grid gap-2">
                                <Label htmlFor="code" className="text-base">Verification Code</Label>
                                <Input
                                    id="code"
                                    placeholder="123456"
                                    disabled={isLoading}
                                    className="h-12 bg-white/5 border-white/10 focus:border-card-accent/50 focus:ring-card-accent/20 text-center text-lg tracking-widest"
                                    {...resetForm.register("code")}
                                />
                                {resetForm.formState.errors.code && (
                                    <p className="text-xs text-red-500">
                                        {resetForm.formState.errors.code.message}
                                    </p>
                                )}
                            </div>
                            <div className="grid gap-2">
                                <Label htmlFor="password">New Password</Label>
                                <div className="relative">
                                    <Input
                                        id="password"
                                        type={showPassword ? "text" : "password"}
                                        disabled={isLoading}
                                        className="h-12 bg-white/5 border-white/10 focus:border-card-accent/50 focus:ring-card-accent/20 pr-20"
                                        {...resetForm.register("password")}
                                    />
                                    <Button
                                        type="button"
                                        variant="ghost"
                                        size="sm"
                                        className="absolute right-0 top-0 h-full px-3 py-2 hover:bg-transparent text-muted-foreground hover:text-white"
                                        onClick={() => setShowPassword(!showPassword)}
                                    >
                                        {showPassword ? (
                                            <EyeOff className="h-4 w-4" />
                                        ) : (
                                            <Eye className="h-4 w-4" />
                                        )}
                                    </Button>
                                </div>
                                {resetForm.formState.errors.password && (
                                    <p className="text-xs text-red-500">
                                        {resetForm.formState.errors.password.message}
                                    </p>
                                )}
                                <PasswordStrength password={resetForm.watch("password")} />
                            </div>
                            {error && <p className="text-sm text-red-500 text-center">{error}</p>}
                            <Button className="w-full h-12 text-base font-semibold bg-[#3b82f6]/10 hover:bg-[#3b82f6]/30 text-white border border-[#3b82f6]/30 backdrop-blur-md shadow-[0_0_20px_rgba(59,130,246,0.2)] active:scale-95 transition-all duration-300" type="submit" disabled={isLoading}>
                                {isLoading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
                                Reset Password
                            </Button>
                        </div>
                    </form>
                </CardContent>
            </Card>
        )
    }

    return (
        <Card className="w-[500px] border-white/10 bg-black/60 backdrop-blur-xl shadow-2xl fade-in-up">
            <CardHeader className="space-y-3 pb-8">
                <div className="flex justify-center mb-4">
                    <Image
                        src="/logo.png"
                        alt="AssembleZ Logo"
                        width={50}
                        height={50}
                        className="object-contain"
                    />
                </div>
                <CardTitle className="text-3xl text-center font-bold tracking-tight">Forgot Password</CardTitle>
                <CardDescription className="text-center text-base">
                    Enter your email to receive a reset code.
                </CardDescription>
            </CardHeader>
            <CardContent className="grid gap-6">
                <form onSubmit={emailForm.handleSubmit(onRequestReset)}>
                    <div className="grid gap-5">
                        <div className="grid gap-2">
                            <Label htmlFor="email" className="text-base">Email address</Label>
                            <Input
                                id="email"
                                placeholder="name@example.com"
                                type="email"
                                autoCapitalize="none"
                                autoComplete="email"
                                autoCorrect="off"
                                disabled={isLoading}
                                className="h-12 bg-white/5 border-white/10 focus:border-card-accent/50 focus:ring-card-accent/20"
                                {...emailForm.register("email")}
                            />
                            {emailForm.formState.errors.email && (
                                <p className="text-xs text-red-500">
                                    {emailForm.formState.errors.email.message}
                                </p>
                            )}
                        </div>
                        {error && <p className="text-sm text-red-500 text-center">{error}</p>}
                        <Button className="w-full h-12 text-base font-semibold bg-[#3b82f6]/10 hover:bg-[#3b82f6]/30 text-white border border-[#3b82f6]/30 backdrop-blur-md shadow-[0_0_20px_rgba(59,130,246,0.2)] active:scale-95 transition-all duration-300" type="submit" disabled={isLoading}>
                            {isLoading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
                            Send Reset Code
                        </Button>
                    </div>
                </form>
            </CardContent>
            <CardFooter className="pb-8">
                <Link
                    href="/sign-in"
                    className="flex items-center text-sm text-muted-foreground hover:text-primary transition-colors mx-auto"
                >
                    <ArrowLeft className="mr-2 h-4 w-4" />
                    Back to Sign In
                </Link>
            </CardFooter>
        </Card>
    )
}

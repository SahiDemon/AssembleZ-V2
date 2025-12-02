"use client"

import * as React from "react"
import { useSignIn } from "@clerk/nextjs"
import { useRouter } from "next/navigation"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import * as z from "zod"
import { Loader2, Eye, EyeOff } from "lucide-react"

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
import { Checkbox } from "@/components/ui/checkbox"
import { Separator } from "@/components/ui/separator"
import Link from "next/link"
import Image from "next/image"

const formSchema = z.object({
    email: z.string().email({
        message: "Please enter a valid email address.",
    }),
    password: z.string().min(1, {
        message: "Password is required.",
    }),
})

export function LoginForm() {
    const { isLoaded, signIn, setActive } = useSignIn()
    const [error, setError] = React.useState<string | null>(null)
    const [isLoading, setIsLoading] = React.useState(false)
    const [socialLoading, setSocialLoading] = React.useState<string | null>(null)
    const [showPassword, setShowPassword] = React.useState(false)
    const router = useRouter()

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            email: "",
            password: "",
        },
    })

    async function onSubmit(values: z.infer<typeof formSchema>) {
        if (!isLoaded) return

        setIsLoading(true)
        setError(null)

        try {
            const result = await signIn.create({
                identifier: values.email,
                password: values.password,
            })

            if (result.status === "complete") {
                await setActive({ session: result.createdSessionId })
                router.push("/")
            } else {
                console.log(result)
                setError("Something went wrong. Please try again.")
            }
        } catch (err: any) {
            console.error("error", err.errors[0].longMessage)
            setError(err.errors[0].longMessage || "Invalid email or password")
        } finally {
            setIsLoading(false)
        }
    }

    const handleSocialLogin = (strategy: "oauth_google" | "oauth_github" | "oauth_facebook") => {
        if (!isLoaded) return;
        setSocialLoading(strategy);
        signIn.authenticateWithRedirect({
            strategy,
            redirectUrl: "/sso-callback",
            redirectUrlComplete: "/"
        });
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
                <CardTitle className="text-3xl text-center font-bold tracking-tight">Welcome Back</CardTitle>
                <CardDescription className="text-center text-base">
                    Please enter your details to sign in
                </CardDescription>
            </CardHeader>
            <CardContent className="grid gap-6">
                <div className="grid grid-cols-3 gap-4">
                    <Button variant="outline" className="bg-white/5 border-white/10 hover:bg-white/10 hover:border-white/20 h-12 active:scale-95 transition-transform" onClick={() => handleSocialLogin("oauth_google")} disabled={socialLoading !== null}>
                        {socialLoading === "oauth_google" ? (
                            <Loader2 className="h-5 w-5 animate-spin" />
                        ) : (
                            <svg className="h-5 w-5" viewBox="0 0 24 24">
                                <path
                                    d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                                    fill="#4285F4"
                                />
                                <path
                                    d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                                    fill="#34A853"
                                />
                                <path
                                    d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                                    fill="#FBBC05"
                                />
                                <path
                                    d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                                    fill="#EA4335"
                                />
                            </svg>
                        )}
                    </Button>
                    <Button variant="outline" className="bg-white/5 border-white/10 hover:bg-white/10 hover:border-white/20 h-12 active:scale-95 transition-transform" onClick={() => handleSocialLogin("oauth_facebook")} disabled={socialLoading !== null}>
                        {socialLoading === "oauth_facebook" ? (
                            <Loader2 className="h-5 w-5 animate-spin" />
                        ) : (
                            <svg className="h-5 w-5 text-[#1877F2] fill-current" viewBox="0 0 24 24">
                                <path d="M9.101 23.691v-7.98H6.627v-3.667h2.474v-1.58c0-4.085 1.848-5.978 5.858-5.978.401 0 .955.042 1.468.103a8.68 8.68 0 0 1 1.141.195v3.325a8.623 8.623 0 0 0-.653-.036c-2.148 0-2.971.956-2.971 3.594v.376h3.428l-.532 3.667h-2.896v7.981A11.986 11.986 0 0 0 12 24c1.09 0 2.139-.145 3.145-.418zM12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0z" />
                            </svg>
                        )}
                    </Button>
                    <Button variant="outline" className="bg-white/5 border-white/10 hover:bg-white/10 hover:border-white/20 h-12 active:scale-95 transition-transform" onClick={() => handleSocialLogin("oauth_github")} disabled={socialLoading !== null}>
                        {socialLoading === "oauth_github" ? (
                            <Loader2 className="h-5 w-5 animate-spin" />
                        ) : (
                            <svg className="h-5 w-5 text-white fill-current" viewBox="0 0 24 24">
                                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                            </svg>
                        )}
                    </Button>
                </div>

                <div className="relative">
                    <div className="absolute inset-0 flex items-center">
                        <Separator className="w-full border-t border-white/10" />
                    </div>
                    <div className="relative flex justify-center text-xs uppercase">
                        <span className="bg-[#050505] px-2 text-muted-foreground">
                            or
                        </span>
                    </div>
                </div>

                <form onSubmit={form.handleSubmit(onSubmit)}>
                    <div className="grid gap-5">
                        <div className="grid gap-2">
                            <Label htmlFor="email" className="text-base">Email address*</Label>
                            <Input
                                id="email"
                                placeholder="Enter your email address"
                                type="email"
                                autoCapitalize="none"
                                autoComplete="email"
                                autoCorrect="off"
                                disabled={isLoading}
                                className="h-12 bg-white/5 border-white/10 focus:border-card-accent/50 focus:ring-card-accent/20"
                                {...form.register("email")}
                            />
                            {form.formState.errors.email && (
                                <p className="text-xs text-red-500">
                                    {form.formState.errors.email.message}
                                </p>
                            )}
                        </div>
                        <div className="grid gap-2">
                            <Label htmlFor="password">Password*</Label>
                            <div className="relative">
                                <Input
                                    id="password"
                                    type={showPassword ? "text" : "password"}
                                    placeholder="••••••••••••"
                                    disabled={isLoading}
                                    className="h-12 bg-white/5 border-white/10 focus:border-card-accent/50 focus:ring-card-accent/20 pr-10"
                                    {...form.register("password")}
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
                            {form.formState.errors.password && (
                                <p className="text-xs text-red-500">
                                    {form.formState.errors.password.message}
                                </p>
                            )}
                        </div>

                        <div className="flex items-center justify-between">
                            <div className="flex items-center space-x-2">
                                <Checkbox id="remember" className="border-white/20 data-[state=checked]:bg-[#3b82f6] data-[state=checked]:border-[#3b82f6]" />
                                <label
                                    htmlFor="remember"
                                    className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 text-muted-foreground"
                                >
                                    Remember Me
                                </label>
                            </div>
                            <Link
                                href="/forgot-password"
                                className="text-sm font-medium text-white hover:text-[#3b82f6] transition-colors"
                            >
                                Forgot Password?
                            </Link>
                        </div>

                        {error && <p className="text-sm text-red-500 text-center">{error}</p>}

                        <Button className="w-full h-12 text-base font-semibold bg-[#3b82f6]/10 hover:bg-[#3b82f6]/30 text-white border border-[#3b82f6]/30 backdrop-blur-md shadow-[0_0_20px_rgba(59,130,246,0.2)] active:scale-95 transition-all duration-300" type="submit" disabled={isLoading}>
                            {isLoading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
                            Sign in to AssembleZ
                        </Button>
                    </div>
                </form>
            </CardContent>
            <CardFooter className="pb-8">
                <div className="text-sm text-muted-foreground text-center w-full">
                    New on our platform?{" "}
                    <Link
                        href="/sign-up"
                        className="font-semibold text-white hover:text-card-accent transition-colors"
                    >
                        Create an account
                    </Link>
                </div>
            </CardFooter>
        </Card >
    )
}

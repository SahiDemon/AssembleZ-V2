"use client";

import * as React from "react";
import { cn } from "@/lib/utils";

interface LiquidGlassButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "default" | "ghost" | "outline";
  size?: "default" | "sm" | "lg" | "icon";
  children: React.ReactNode;
}

const LiquidGlassButton = React.forwardRef<HTMLButtonElement, LiquidGlassButtonProps>(
  ({ className, variant = "default", size = "default", children, ...props }, ref) => {
    const [mousePosition, setMousePosition] = React.useState({ x: 50, y: 50 });
    const buttonRef = React.useRef<HTMLButtonElement>(null);

    const handleMouseMove = (e: React.MouseEvent<HTMLButtonElement>) => {
      if (!buttonRef.current) return;
      const rect = buttonRef.current.getBoundingClientRect();
      const x = ((e.clientX - rect.left) / rect.width) * 100;
      const y = ((e.clientY - rect.top) / rect.height) * 100;
      setMousePosition({ x, y });
    };

    const sizeClasses = {
      default: "h-10 px-4 py-2",
      sm: "h-9 px-3 text-sm",
      lg: "h-11 px-8 text-lg",
      icon: "h-10 w-10"
    };

    const variantClasses = {
      default: cn(
        "relative overflow-hidden",
        "bg-gradient-to-br from-white/10 via-white/5 to-transparent",
        "border border-white/20",
        "text-white font-semibold",
        "shadow-[0_4px_16px_0_rgba(31,38,135,0.2),inset_0_1px_0_0_rgba(255,255,255,0.2)]",
        "backdrop-blur-md backdrop-saturate-150",
        "transition-all duration-500 ease-out",
        "hover:border-primary/50",
        "hover:shadow-[0_0_20px_rgba(59,130,246,0.4),inset_0_1px_0_0_rgba(255,255,255,0.3)]",
        "hover:scale-[1.02]",
        "active:scale-95",
        "before:absolute before:inset-0",
        "before:bg-gradient-to-r before:from-transparent before:via-white/10 before:to-transparent",
        "before:translate-x-[-200%] before:transition-transform before:duration-1000",
        "hover:before:translate-x-[200%]"
      ),
      ghost: cn(
        "relative overflow-hidden",
        "bg-transparent",
        "border-2 border-transparent",
        "text-gray-300",
        "backdrop-blur-sm",
        "hover:bg-white/10",
        "hover:border-white/20",
        "hover:text-white",
        "hover:backdrop-blur-md",
        "transition-all duration-300"
      ),
      outline: cn(
        "relative overflow-hidden",
        "bg-white/5",
        "border-2 border-primary/40",
        "text-primary",
        "backdrop-blur-md",
        "shadow-[0_4px_16px_rgba(59,130,246,0.2)]",
        "hover:bg-primary/15",
        "hover:border-primary/70",
        "hover:shadow-[0_0_25px_rgba(59,130,246,0.5)]",
        "hover:text-white",
        "transition-all duration-300"
      )
    };

    React.useImperativeHandle(ref, () => buttonRef.current!);

    return (
      <button
        ref={buttonRef}
        className={cn(
          "rounded-xl inline-flex items-center justify-center whitespace-nowrap",
          "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-black",
          "disabled:pointer-events-none disabled:opacity-50",
          "font-medium tracking-wide",
          sizeClasses[size],
          variantClasses[variant],
          className
        )}
        onMouseMove={handleMouseMove}
        {...props}
      >
        {/* Chromatic aberration effect */}
        {variant === "default" && (
          <>
            <div
              className="absolute inset-0 opacity-0 hover:opacity-30 transition-opacity duration-300 mix-blend-screen pointer-events-none"
              style={{
                background: `radial-gradient(circle at ${mousePosition.x}% ${mousePosition.y}%, 
                  rgba(255, 0, 0, 0.3) 0%, 
                  transparent 40%)`,
                transform: 'translate(-1px, -1px)'
              }}
            />
            <div
              className="absolute inset-0 opacity-0 hover:opacity-30 transition-opacity duration-300 mix-blend-screen pointer-events-none"
              style={{
                background: `radial-gradient(circle at ${mousePosition.x}% ${mousePosition.y}%, 
                  rgba(0, 255, 255, 0.3) 0%, 
                  transparent 40%)`,
                transform: 'translate(1px, 1px)'
              }}
            />
          </>
        )}
        
        {/* Liquid gradient effect */}
        <div
          className="absolute inset-0 opacity-0 hover:opacity-100 transition-opacity duration-700 pointer-events-none"
          style={{
            background: `radial-gradient(circle at ${mousePosition.x}% ${mousePosition.y}%, 
              rgba(59, 130, 246, 0.4) 0%, 
              rgba(147, 51, 234, 0.2) 30%,
              transparent 60%)`
          }}
        />
        
        {/* Glass reflection */}
        <div className="absolute inset-0 bg-gradient-to-br from-white/20 via-transparent to-transparent opacity-50 pointer-events-none rounded-xl" />
        
        <span className="relative z-10 drop-shadow-sm">{children}</span>
      </button>
    );
  }
);

LiquidGlassButton.displayName = "LiquidGlassButton";

export { LiquidGlassButton };

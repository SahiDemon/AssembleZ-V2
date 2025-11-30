"use client";

import * as React from "react";
import { cn } from "@/lib/utils";

interface GlassButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "default" | "ghost" | "outline";
  size?: "default" | "sm" | "lg" | "icon";
  children: React.ReactNode;
}

const GlassButton = React.forwardRef<HTMLButtonElement, GlassButtonProps>(
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
        "shadow-[0_8px_32px_0_rgba(31,38,135,0.37)]",
        "backdrop-blur-md",
        "transition-all duration-300",
        "hover:border-primary/50",
        "hover:shadow-[0_0_20px_rgba(59,130,246,0.4)]",
        "active:scale-95"
      ),
      ghost: cn(
        "relative overflow-hidden",
        "bg-transparent",
        "border border-transparent",
        "text-gray-300",
        "hover:bg-white/5",
        "hover:text-white",
        "transition-all duration-300"
      ),
      outline: cn(
        "relative overflow-hidden",
        "bg-transparent",
        "border border-primary/50",
        "text-primary",
        "hover:bg-primary/10",
        "hover:border-primary",
        "transition-all duration-300"
      )
    };

    React.useImperativeHandle(ref, () => buttonRef.current!);

    return (
      <button
        ref={buttonRef}
        className={cn(
          "rounded-lg inline-flex items-center justify-center whitespace-nowrap",
          "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary",
          "disabled:pointer-events-none disabled:opacity-50",
          sizeClasses[size],
          variantClasses[variant],
          className
        )}
        onMouseMove={handleMouseMove}
        {...props}
      >
        {variant === "default" && (
          <div
            className="absolute inset-0 opacity-0 hover:opacity-100 transition-opacity duration-500"
            style={{
              background: `radial-gradient(circle at ${mousePosition.x}% ${mousePosition.y}%, rgba(59, 130, 246, 0.2) 0%, transparent 50%)`
            }}
          />
        )}
        <span className="relative z-10">{children}</span>
      </button>
    );
  }
);

GlassButton.displayName = "GlassButton";

export { GlassButton };

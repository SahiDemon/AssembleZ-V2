"use client";

import * as React from "react";
import { cn } from "@/lib/utils";

interface LiquidGlassNavProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  children: React.ReactNode;
  active?: boolean;
}

const LiquidGlassNav = React.forwardRef<HTMLAnchorElement, LiquidGlassNavProps>(
  ({ className, children, active = false, ...props }, ref) => {
    const [mousePosition, setMousePosition] = React.useState({ x: 50, y: 50 });
    const [isHovered, setIsHovered] = React.useState(false);
    const linkRef = React.useRef<HTMLAnchorElement>(null);

    const handleMouseMove = (e: React.MouseEvent<HTMLAnchorElement>) => {
      if (!linkRef.current) return;
      const rect = linkRef.current.getBoundingClientRect();
      const x = ((e.clientX - rect.left) / rect.width) * 100;
      const y = ((e.clientY - rect.top) / rect.height) * 100;
      setMousePosition({ x, y });
    };

    React.useImperativeHandle(ref, () => linkRef.current!);

    return (
      <a
        ref={linkRef}
        className={cn(
          "relative px-5 py-2.5 rounded-xl overflow-hidden",
          "text-sm font-semibold tracking-wide",
          "transition-all duration-500 ease-out",
          "group",
          // Glass morphism base
          active
            ? [
                "text-white",
                "bg-white/10",
                "backdrop-blur-md",
                "border border-white/20",
                "shadow-[0_4px_16px_rgba(0,0,0,0.1)]"
              ]
            : [
                "text-gray-400",
                "bg-transparent",
                "border border-transparent",
                "hover:text-white",
                "hover:bg-white/5",
                "hover:border-white/10",
                "hover:backdrop-blur-sm"
              ],
          className
        )}
        onMouseMove={handleMouseMove}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        {...props}
      >
        {/* Chromatic aberration effect on hover */}
        <div
          className={cn(
            "absolute inset-0 opacity-0 transition-opacity duration-300 mix-blend-screen pointer-events-none",
            isHovered && "opacity-20"
          )}
          style={{
            background: `radial-gradient(circle at ${mousePosition.x}% ${mousePosition.y}%, 
              rgba(255, 0, 100, 0.4) 0%, 
              transparent 50%)`,
            transform: 'translate(-0.5px, -0.5px)'
          }}
        />
        <div
          className={cn(
            "absolute inset-0 opacity-0 transition-opacity duration-300 mix-blend-screen pointer-events-none",
            isHovered && "opacity-20"
          )}
          style={{
            background: `radial-gradient(circle at ${mousePosition.x}% ${mousePosition.y}%, 
              rgba(0, 255, 255, 0.4) 0%, 
              transparent 50%)`,
            transform: 'translate(0.5px, 0.5px)'
          }}
        />

        {/* Liquid gradient effect */}
        <div
          className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"
          style={{
            background: `radial-gradient(circle at ${mousePosition.x}% ${mousePosition.y}%, 
              rgba(59, 130, 246, 0.3) 0%, 
              rgba(147, 51, 234, 0.15) 40%,
              transparent 70%)`
          }}
        />

        {/* Glass reflection overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-white/20 via-transparent to-transparent opacity-40 pointer-events-none rounded-xl" />
        
        {/* Shimmer effect */}
        <div 
          className={cn(
            "absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent",
            "translate-x-[-200%] group-hover:translate-x-[200%] transition-transform duration-1000 pointer-events-none"
          )}
        />

        <span className="relative z-10 drop-shadow-sm">{children}</span>
      </a>
    );
  }
);

LiquidGlassNav.displayName = "LiquidGlassNav";

export { LiquidGlassNav };

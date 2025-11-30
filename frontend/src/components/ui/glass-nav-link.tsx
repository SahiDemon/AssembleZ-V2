"use client";

import * as React from "react";
import { cn } from "@/lib/utils";

interface GlassNavLinkProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  children: React.ReactNode;
  active?: boolean;
}

const GlassNavLink = React.forwardRef<HTMLAnchorElement, GlassNavLinkProps>(
  ({ className, children, active = false, ...props }, ref) => {
    const [mousePosition, setMousePosition] = React.useState({ x: 50, y: 50 });
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
          "relative px-4 py-2 rounded-lg overflow-hidden",
          "text-sm font-medium",
          "transition-all duration-300",
          "group",
          active
            ? "text-white bg-white/10 border border-white/20"
            : "text-gray-300 hover:text-white",
          className
        )}
        onMouseMove={handleMouseMove}
        {...props}
      >
        <div
          className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
          style={{
            background: `radial-gradient(circle at ${mousePosition.x}% ${mousePosition.y}%, rgba(255, 255, 255, 0.1) 0%, transparent 70%)`
          }}
        />
        <span className="relative z-10">{children}</span>
      </a>
    );
  }
);

GlassNavLink.displayName = "GlassNavLink";

export { GlassNavLink };

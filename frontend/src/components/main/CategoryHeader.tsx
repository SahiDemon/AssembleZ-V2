import React from "react";
import { TrendingUp, Award, Zap } from "lucide-react";

export const CategoryHeader = () => {
  return (
    <section className="relative pt-24 pb-20 bg-background border-b border-white/5 overflow-visible">
      <div className="container px-4 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-end gap-6 mb-12">
          <div className="space-y-2">
            <p className="text-primary font-medium tracking-wide text-sm uppercase">Components</p>
            <h1 className="text-4xl md:text-5xl font-black tracking-tight text-foreground">
              Processors (CPUs)
            </h1>
            <p className="text-muted-foreground max-w-xl text-lg">
              The brain of your build. Filter by socket, core count, and generation to find the perfect match for your motherboard.
            </p>
          </div>
        </div>

        {/* THE OVERLAPPING ELEMENT: Market Highlights */}
        {/* Negative margin-bottom pulls it down over the next section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 -mb-32 relative z-20">
          
          {/* Card 1: Top Gaming */}
          <div className="p-4 rounded-xl border border-white/10 bg-card/80 backdrop-blur-xl shadow-xl flex items-center gap-4 group cursor-pointer hover:border-primary/50 transition-colors">
            <div className="h-12 w-12 rounded-full bg-red-500/10 flex items-center justify-center text-red-500 group-hover:bg-red-500 group-hover:text-white transition-colors">
              <Zap className="h-6 w-6" />
            </div>
            <div>
              <p className="text-xs text-muted-foreground uppercase font-bold">Best for Gaming</p>
              <p className="font-bold text-lg">Ryzen 7 7800X3D</p>
              <p className="text-xs text-green-500">Trending High</p>
            </div>
          </div>

          {/* Card 2: Top Value */}
          <div className="p-4 rounded-xl border border-white/10 bg-card/80 backdrop-blur-xl shadow-xl flex items-center gap-4 group cursor-pointer hover:border-primary/50 transition-colors">
            <div className="h-12 w-12 rounded-full bg-blue-500/10 flex items-center justify-center text-blue-500 group-hover:bg-blue-500 group-hover:text-white transition-colors">
              <TrendingUp className="h-6 w-6" />
            </div>
            <div>
              <p className="text-xs text-muted-foreground uppercase font-bold">Best Value</p>
              <p className="font-bold text-lg">Intel Core i5-13600K</p>
              <p className="text-xs text-muted-foreground">LKR 115,000 avg</p>
            </div>
          </div>

          {/* Card 3: Enthusiast */}
          <div className="p-4 rounded-xl border border-white/10 bg-card/80 backdrop-blur-xl shadow-xl flex items-center gap-4 group cursor-pointer hover:border-primary/50 transition-colors">
            <div className="h-12 w-12 rounded-full bg-purple-500/10 flex items-center justify-center text-purple-500 group-hover:bg-purple-500 group-hover:text-white transition-colors">
              <Award className="h-6 w-6" />
            </div>
            <div>
              <p className="text-xs text-muted-foreground uppercase font-bold">Performance King</p>
              <p className="font-bold text-lg">Intel Core i9-14900KS</p>
              <p className="text-xs text-muted-foreground">Unmatched Speed</p>
            </div>
          </div>

        </div>
      </div>
      
      {/* Background Decorative Gradient */}
      <div className="absolute top-0 right-0 -z-10 w-1/2 h-full bg-gradient-to-l from-primary/5 to-transparent blur-3xl" />
    </section>
  );
};
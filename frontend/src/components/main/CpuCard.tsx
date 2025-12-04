import React from "react";
import { Cpu, Zap, Activity, ShoppingCart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
// import { CpuProduct } from "@/types/product"; // Adjust import path

interface CpuProduct {
    id: string;
    name: string;
    brand: "Intel" | "AMD";
    model: string;
    price: number;
    cores: number;
    threads: number;
    baseClock: string;
    boostClock: string;
    socket: string;
    image: string;
    badge?: "Best Seller" | "Top Rated" | "New Arrival";
}

export const CpuCard = ({ product }: { product: CpuProduct }) => {
  const isIntel = product.brand === "Intel";
  
  // Dynamic brand color
  const brandColor = isIntel ? "text-blue-500" : "text-orange-600";
  const brandBg = isIntel ? "bg-blue-500/10" : "bg-orange-600/10";
  const brandBorder = isIntel ? "group-hover:border-blue-500/50" : "group-hover:border-orange-500/50";

  return (
    <Card className={`group overflow-hidden border-white/10 bg-card transition-all duration-300 hover:-translate-y-1 hover:shadow-xl ${brandBorder}`}>
      {/* Image Area */}
      <div className="relative aspect-[4/3] p-6 bg-gradient-to-br from-secondary/50 to-secondary/10 flex items-center justify-center overflow-hidden">
        {product.badge && (
          <Badge className="absolute top-3 left-3 z-10 bg-primary font-bold">
            {product.badge}
          </Badge>
        )}
        <div className={`absolute top-3 right-3 px-2 py-1 rounded text-xs font-bold uppercase tracking-wider ${brandBg} ${brandColor}`}>
          {product.brand}
        </div>
        
        {/* Abstract chip background effect */}
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white to-transparent" />
        
        <img 
          src={product.image} 
          alt={product.name}
          className="relative z-10 w-2/3 object-contain drop-shadow-[0_10px_20px_rgba(0,0,0,0.3)] transition-transform duration-500 group-hover:scale-110"
        />
      </div>

      <CardContent className="p-5 space-y-4">
        <div>
          <h3 className="font-bold text-lg leading-tight line-clamp-1 group-hover:text-primary transition-colors">
            {product.name}
          </h3>
          <p className="text-xs font-mono text-muted-foreground mt-1">
            {product.socket} • {product.model}
          </p>
        </div>

        {/* Tech Specs Grid */}
        <div className="grid grid-cols-3 gap-2 py-2">
          <div className="flex flex-col items-center justify-center p-2 rounded bg-secondary/30 text-center">
            <Cpu className="h-4 w-4 text-muted-foreground mb-1" />
            <span className="text-sm font-bold">{product.cores} / {product.threads}</span>
            <span className="text-[10px] text-muted-foreground uppercase">Cores</span>
          </div>
          <div className="flex flex-col items-center justify-center p-2 rounded bg-secondary/30 text-center">
            <Activity className="h-4 w-4 text-muted-foreground mb-1" />
            <span className="text-sm font-bold">{product.baseClock}</span>
            <span className="text-[10px] text-muted-foreground uppercase">Base</span>
          </div>
          <div className="flex flex-col items-center justify-center p-2 rounded bg-secondary/30 text-center">
            <Zap className="h-4 w-4 text-muted-foreground mb-1" />
            <span className="text-sm font-bold">{product.boostClock}</span>
            <span className="text-[10px] text-muted-foreground uppercase">Boost</span>
          </div>
        </div>

        <div className="flex items-end justify-between pt-2">
          <div>
            <p className="text-xs text-muted-foreground">Starting from</p>
            <p className="text-xl font-bold text-foreground">
              LKR {product.price.toLocaleString()}
            </p>
          </div>
        </div>
      </CardContent>

      <CardFooter className="p-5 pt-0">
        <Button className="w-full font-bold gap-2" variant="outline">
          <ShoppingCart className="h-4 w-4" />
          Compare Prices
        </Button>
      </CardFooter>
    </Card>
  );
};
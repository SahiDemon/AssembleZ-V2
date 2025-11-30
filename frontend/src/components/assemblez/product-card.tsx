import { Button } from "@/components/ui/button";
import { ArrowDown, ArrowUp, TrendingUp } from "lucide-react";
import Image from "next/image";

interface ProductCardProps {
    title: string;
    specs: string;
    price: string;
    retailer: string;
    image: string;
    trend?: {
        direction: "up" | "down";
        amount: string;
    };
}

export default function ProductCard({ title, specs, price, retailer, image, trend }: ProductCardProps) {
    return (
        <div className="group relative flex flex-col overflow-hidden rounded-xl border border-white/10 bg-gradient-to-b from-white/5 to-transparent backdrop-blur-sm transition-all duration-300 hover:border-card-accent hover:shadow-2xl hover:shadow-card-accent/10">
            <div className="relative aspect-video w-full overflow-hidden bg-black/40 p-6">
                <Image
                    src={image}
                    alt={title}
                    width={400}
                    height={225}
                    className="h-full w-full object-contain transition-transform duration-500 group-hover:scale-105"
                />
            </div>

            <div className="flex flex-1 flex-col justify-between p-5">
                <div className="flex flex-col gap-3">
                    <div>
                        <h4 className="text-lg font-bold text-white line-clamp-2 group-hover:text-card-accent transition-colors duration-300">{title}</h4>
                        <p className="text-sm text-gray-400 font-medium">{specs}</p>
                    </div>

                    <div className="mt-2 flex items-end justify-between border-t border-white/5 pt-4">
                        <div>
                            <p className="text-xs text-gray-500 font-medium uppercase tracking-wider">Lowest Price</p>
                            <p className="text-2xl font-bold text-white group-hover:text-card-accent transition-colors">{price}</p>
                        </div>
                        <div className="text-right">
                            <p className="text-xs text-gray-500 font-medium uppercase tracking-wider">from</p>
                            <p className="font-semibold text-white">{retailer}</p>
                        </div>
                    </div>

                    {trend && (
                        <div className="mt-1 flex items-center justify-between rounded-lg bg-white/5 p-2.5 border border-white/5">
                            <div className={`flex items-center gap-1.5 text-sm font-semibold ${trend.direction === 'down' ? 'text-emerald-400' : 'text-rose-400'}`}>
                                {trend.direction === 'down' ? <ArrowDown className="h-4 w-4" /> : <ArrowUp className="h-4 w-4" />}
                                <span>{trend.amount}</span>
                            </div>
                            <TrendingUp className={`h-4 w-4 opacity-70 ${trend.direction === 'down' ? 'text-emerald-400' : 'text-rose-400'}`} />
                        </div>
                    )}
                </div>

                <Button className="mt-5 w-full text-white font-bold">
                    View Deal
                </Button>
            </div>

            <div className="absolute inset-0 z-10 pointer-events-none overflow-hidden">
                <div className="absolute inset-0 -translate-x-full group-hover:animate-shimmer-fast bg-gradient-to-r from-transparent via-white/5 to-transparent" />
            </div>
        </div>
    );
}

import { ChevronDown } from "lucide-react";

export default function FilterSidebar() {
    return (
        <aside className="w-full lg:w-80 flex-shrink-0 space-y-8">
            <div className="sticky top-24 flex flex-col gap-4 rounded-xl border border-white/10 bg-black/40 p-6 backdrop-blur-md">
                <div className="flex items-center justify-between">
                    <h3 className="text-lg font-bold text-white">Filters</h3>
                    <button className="text-xs text-primary hover:underline">Reset All</button>
                </div>

                {/* Category Filter */}
                <div className="space-y-2">
                    <label className="text-sm font-medium text-gray-400">Category</label>
                    <select className="w-full rounded-lg border border-white/10 bg-white/5 px-3 py-2 text-sm text-white focus:border-primary focus:outline-none">
                        <option>GPUs</option>
                        <option>CPUs</option>
                        <option>Motherboards</option>
                        <option>RAM</option>
                        <option>Storage</option>
                        <option>Cases</option>
                    </select>
                </div>

                <div className="h-px bg-white/10" />

                {/* Brand Filter */}
                <details className="group" open>
                    <summary className="flex cursor-pointer list-none items-center justify-between py-2">
                        <span className="text-sm font-medium text-gray-300">Brand</span>
                        <ChevronDown className="h-4 w-4 text-gray-500 transition-transform group-open:rotate-180" />
                    </summary>
                    <div className="mt-2 space-y-2">
                        {["NVIDIA", "AMD", "ASUS", "Gigabyte", "MSI"].map((brand) => (
                            <label key={brand} className="flex items-center gap-2 cursor-pointer group/item">
                                <input type="checkbox" className="rounded border-white/20 bg-white/10 text-primary focus:ring-primary" />
                                <span className="text-sm text-gray-400 group-hover/item:text-white transition-colors">{brand}</span>
                            </label>
                        ))}
                    </div>
                </details>

                <div className="h-px bg-white/10" />

                {/* Price Range */}
                <details className="group" open>
                    <summary className="flex cursor-pointer list-none items-center justify-between py-2">
                        <span className="text-sm font-medium text-gray-300">Price Range</span>
                        <ChevronDown className="h-4 w-4 text-gray-500 transition-transform group-open:rotate-180" />
                    </summary>
                    <div className="mt-4 space-y-4">
                        <input type="range" className="w-full accent-primary h-1 bg-white/10 rounded-lg appearance-none cursor-pointer" />
                        <div className="flex justify-between text-xs text-gray-500">
                            <span>LKR 50k</span>
                            <span>LKR 800k+</span>
                        </div>
                    </div>
                </details>

                <div className="h-px bg-white/10" />

                {/* GPU Series */}
                <details className="group">
                    <summary className="flex cursor-pointer list-none items-center justify-between py-2">
                        <span className="text-sm font-medium text-gray-300">GPU Generation</span>
                        <ChevronDown className="h-4 w-4 text-gray-500 transition-transform group-open:rotate-180" />
                    </summary>
                    <div className="mt-2 space-y-2">
                        {["RTX 40 Series", "RTX 30 Series", "RX 7000 Series", "RX 6000 Series"].map((item) => (
                            <label key={item} className="flex items-center gap-2 cursor-pointer group/item">
                                <input type="checkbox" className="rounded border-white/20 bg-white/10 text-primary focus:ring-primary" />
                                <span className="text-sm text-gray-400 group-hover/item:text-white transition-colors">{item}</span>
                            </label>
                        ))}
                    </div>
                </details>

                <div className="h-px bg-white/10" />

                {/* VRAM Capacity */}
                <details className="group">
                    <summary className="flex cursor-pointer list-none items-center justify-between py-2">
                        <span className="text-sm font-medium text-gray-300">VRAM Capacity</span>
                        <ChevronDown className="h-4 w-4 text-gray-500 transition-transform group-open:rotate-180" />
                    </summary>
                    <div className="mt-2 space-y-2">
                        {["24GB", "16GB", "12GB", "8GB"].map((item) => (
                            <label key={item} className="flex items-center gap-2 cursor-pointer group/item">
                                <input type="checkbox" className="rounded border-white/20 bg-white/10 text-primary focus:ring-primary" />
                                <span className="text-sm text-gray-400 group-hover/item:text-white transition-colors">{item}</span>
                            </label>
                        ))}
                    </div>
                </details>
            </div>
        </aside>
    );
}

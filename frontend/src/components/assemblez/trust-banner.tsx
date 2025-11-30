import { ShieldCheck, BadgeCheck, Clock } from "lucide-react";

export default function TrustBanner() {
    return (
        <section className="border-y border-white/10 bg-black">
            <div className="mx-auto grid max-w-7xl grid-cols-1 divide-y divide-white/10 sm:grid-cols-3 sm:divide-x sm:divide-y-0 text-center sm:text-left">
                <div className="flex flex-col items-center justify-center gap-4 p-8 sm:flex-row">
                    <BadgeCheck className="h-10 w-10 text-primary" />
                    <div>
                        <p className="text-base font-medium text-white">Verified Stores</p>
                        <p className="text-sm text-gray-500">Only trusted retailers listed.</p>
                    </div>
                </div>

                <div className="flex flex-col items-center justify-center gap-4 p-8 sm:flex-row">
                    <ShieldCheck className="h-10 w-10 text-primary" />
                    <div>
                        <p className="text-base font-medium text-white">Official Warranty</p>
                        <p className="text-sm text-gray-500">Products with genuine warranties.</p>
                    </div>
                </div>

                <div className="flex flex-col items-center justify-center gap-4 p-8 sm:flex-row">
                    <Clock className="h-10 w-10 text-primary" />
                    <div>
                        <p className="text-base font-medium text-white">Prices Updated Hourly</p>
                        <p className="text-sm text-gray-500">Stay ahead with the latest deals.</p>
                    </div>
                </div>
            </div>
        </section>
    );
}

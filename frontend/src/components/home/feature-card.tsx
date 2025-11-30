import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { LucideIcon } from "lucide-react";

interface FeatureCardProps {
    title: string;
    description: string;
    icon: LucideIcon;
    delay?: number;
}

export default function FeatureCard({ title, description, icon: Icon, delay = 0 }: FeatureCardProps) {
    return (
        <Card
            className="glass-card border-none text-white overflow-hidden group relative"
            style={{ animationDelay: `${delay}ms` }}
        >
            <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

            <CardHeader>
                <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-white/10 group-hover:bg-white/20 transition-colors duration-300">
                    <Icon className="h-6 w-6 text-indigo-300 group-hover:text-white transition-colors duration-300" />
                </div>
                <CardTitle className="text-xl font-bold text-white group-hover:text-indigo-200 transition-colors duration-300">
                    {title}
                </CardTitle>
            </CardHeader>
            <CardContent>
                <p className="text-gray-300 leading-relaxed">
                    {description}
                </p>
            </CardContent>
        </Card>
    );
}

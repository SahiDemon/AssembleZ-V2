import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "AssembleZ - Sri Lanka PC Parts Price Comparison",
  description: "Compare prices of computer parts from multiple Sri Lankan retailers. Find the best deals on CPUs, GPUs, RAM, storage, and more.",
  keywords: "PC parts, computer parts, Sri Lanka, price comparison, GPU, CPU, RAM, gaming PC",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased bg-gray-50 font-sans">
        <Header />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  );
}

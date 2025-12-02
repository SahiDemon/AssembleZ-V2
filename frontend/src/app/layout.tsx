import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { ClerkProvider } from "@clerk/nextjs";
import { dark } from "@clerk/themes";
import "./globals.css";
import Noise from "@/components/ui/noise";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "AssembleZ - Compare. Choose. Assemble.",
  description: "AssembleZ makes PC building simple — all parts, all stores, the best deals, right at your fingertips.",
  icons: {
    icon: '/fav.ico',
    shortcut: '/fav.ico',
    apple: '/fav.ico',
  },
  openGraph: {
    title: "AssembleZ - Compare. Choose. Assemble.",
    description: "AssembleZ makes PC building simple — all parts, all stores, the best deals, right at your fingertips",
    type: "website",
    siteName: "AssembleZ",
    locale: "en",
    images: [
      {
        url: "/logo.png",
        width: 1200,
        height: 630,
        alt: "AssembleZ - Compare. Choose. Assemble.",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider
      appearance={{
        baseTheme: dark,
        variables: { colorPrimary: '#3b82f6' },
        elements: {
          card: 'bg-black/50 backdrop-blur-md border border-white/10',
          headerTitle: 'text-white',
          headerSubtitle: 'text-gray-400',
          socialButtonsBlockButton: 'bg-white/5 border-white/10 text-white hover:bg-white/10',
          socialButtonsBlockButtonText: 'text-white',
          formFieldLabel: 'text-gray-300',
          formFieldInput: 'bg-white/5 border-white/10 text-white focus:border-primary',
          footerActionLink: 'text-primary hover:text-primary/80',
        }
      }}
    >
      <html lang="en">
        <body
          className={`${geistSans.variable} ${geistMono.variable} antialiased relative`}
        >
          <div className="fixed inset-0 -z-10 h-full w-full bg-black">
            {/* 1.5 add kare premium feel ekata adu wedi krala balapn meka thiaynwada nadda kiyala balnna */}
            <Noise patternAlpha={1.5} />
          </div>
          {children}
        </body>
      </html>
    </ClerkProvider>
  );
}

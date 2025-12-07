import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

import { Analytics } from "@vercel/analytics/next";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Shadcn Wrapped 2025",
  description:
    "A wrapped experience celebrating the shadcn/ui ecosystem, registries, and contributors.",
  metadataBase:
    typeof process !== "undefined" && process.env.NEXT_PUBLIC_SITE_URL
      ? new URL(process.env.NEXT_PUBLIC_SITE_URL)
      : undefined,
  openGraph: {
    title: "Shadcn Wrapped 2025",
    description:
      "Explore key stats, registries, and highlights from the shadcn/ui community.",
    url: "/",
    siteName: "Shadcn Wrapped",
    type: "website",
    images: [
      {
        url: "/hero.png",
        width: 1365,
        height: 768,
        alt: "Shadcn Wrapped hero preview",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Shadcn Wrapped 2025",
    description:
      "Explore key stats, registries, and highlights from the shadcn/ui community.",
    images: ["/hero.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
        <Analytics />
      </body>
    </html>
  );
}

import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/sonner";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  applicationName: "Teleceipt",
  title: {
    default: "Teleceipt — Smart Telegram Receipts",
    template: "%s — Teleceipt",
  },
  description:
    "Generate beautiful, compliant receipts from Telegram payments. Save, manage, and share receipts instantly.",
  keywords: [
    "Teleceipt",
    "Telegram receipts",
    "payments",
    "invoice",
    "receipt generator",
    "digital receipts",
    "fintech",
  ],
  authors: [{ name: "Teleceipt" }],
  creator: "Teleceipt",
  publisher: "Teleceipt",
  referrer: "origin-when-cross-origin",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_APP_URL || "http://localhost:3000"
  ),
  openGraph: {
    type: "website",
    siteName: "Teleceipt",
    title: "Teleceipt — Smart Telegram Receipts",
    description:
      "Generate beautiful, compliant receipts from Telegram payments. Save, manage, and share receipts instantly.",
    url: "/",
    images: [
      {
        url: "/images/telegram.png",
        width: 1200,
        height: 630,
        alt: "Teleceipt preview",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Teleceipt — Smart Telegram Receipts",
    description:
      "Generate beautiful, compliant receipts from Telegram payments. Save, manage, and share receipts instantly.",
    creator: "@teleceipt",
    images: ["/images/telegram.png"],
  },
  icons: {
    icon: "/favicon.ico",
  },
  themeColor: "#0F172A",
  category: "finance",
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  viewportFit: "cover",
  themeColor: "#0F172A",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} font-grotesk antialiased`}
      >
        {children}
        <Toaster position="top-center" />
      </body>
    </html>
  );
}

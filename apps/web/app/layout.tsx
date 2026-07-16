import type { Metadata } from "next";
import { Poppins, Playfair_Display } from "next/font/google";

import "./globals.css";

import Navbar from "@/components/layout/Navbar";
import FloatingWhatsApp from "@/components/layout/FloatingWhatsApp";
import JsonLd from "@/components/seo/JsonLd";

const poppins = Poppins({
  subsets: ["latin"],
  variable: "--font-poppins",
  display: "swap",
  weight: ["400", "500", "600", "700"],
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
  weight: ["600", "700"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://dal-interior.vercel.app"),

  title: {
    default: "D'AL Interior",
    template: "%s | D'AL Interior",
  },

  description:
    "D'AL Interior menyediakan gorden premium, blinds, wallpaper, karpet, dan solusi interior untuk rumah, hotel, kantor, rumah sakit, serta berbagai kebutuhan interior berkualitas di Bandung.",

  keywords: [
    "gorden Bandung",
    "gorden premium",
    "roller blind",
    "vertical blind",
    "roman shade",
    "venetian blind",
    "hospital curtain",
    "gorden rumah sakit",
    "wallpaper",
    "karpet",
    "interior Bandung",
    "D'AL Interior",
  ],

  alternates: {
    canonical: "/",
  },

  robots: {
    index: true,
    follow: true,
  },

  openGraph: {
    title: "D'AL Interior",
    description:
      "Premium Curtain & Interior Solution untuk rumah, kantor, hotel, apartemen, dan rumah sakit.",

    url: "/",

    siteName: "D'AL Interior",

    locale: "id_ID",

    type: "website",

    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "D'AL Interior",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "D'AL Interior",
    description:
      "Premium Curtain & Interior Solution untuk rumah, kantor, hotel, apartemen, dan rumah sakit.",
    images: ["/og-image.jpg"],
  },

  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id">
      <body className={`${poppins.variable} ${playfair.variable}`}>
        <JsonLd />

        <Navbar />

        <main>{children}</main>

        <FloatingWhatsApp />
      </body>
    </html>
  );
}

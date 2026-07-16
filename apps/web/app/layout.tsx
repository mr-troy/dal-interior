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
  title: {
    default: "D'AL Interior",
    template: "%s | D'AL Interior",
  },

  description:
    "D'AL Interior menyediakan gorden premium, blinds, wallpaper, karpet, dan solusi interior untuk rumah, hotel, kantor, serta rumah sakit.",

  keywords: [
    "gorden Bandung",
    "gorden premium",
    "roller blind",
    "hospital curtain",
    "interior Bandung",
  ],

  openGraph: {
    title: "D'AL Interior",
    description: "Premium Curtain & Interior Solution",

    url: "https://dalinterior.com",

    siteName: "D'AL Interior",

    locale: "id_ID",

    type: "website",
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

import type { Metadata } from "next";
import { Inter, Manrope } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["greek", "latin"],
  variable: "--font-inter",
  display: "swap"
});

const manrope = Manrope({
  subsets: ["greek", "latin"],
  variable: "--font-manrope",
  display: "swap"
});

export const metadata: Metadata = {
  title: "Εναέρια Οπτική | Drone φωτογραφία και cinematic βίντεο",
  description:
    "Προσωπικό portfolio drone φωτογραφίας και cinematic βίντεο στην Ελλάδα, με εναέριες λήψεις για τοπία, τουρισμό, ακίνητα και social media.",
  keywords: [
    "drone φωτογραφία",
    "cinematic βίντεο",
    "εναέριες λήψεις",
    "Ελλάδα",
    "aerial photography",
    "drone portfolio"
  ],
  openGraph: {
    title: "Εναέρια Οπτική",
    description: "Drone φωτογραφία και cinematic βίντεο από την Ελλάδα.",
    locale: "el_GR",
    type: "website"
  }
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="el" className={`${inter.variable} ${manrope.variable}`}>
      <body className="noise antialiased">{children}</body>
    </html>
  );
}

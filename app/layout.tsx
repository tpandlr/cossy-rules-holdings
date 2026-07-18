import type { Metadata } from "next";
import { Quicksand, Comfortaa } from "next/font/google";
import "./globals.css";

const quicksand = Quicksand({
  variable: "--font-quicksand",
  subsets: ["latin"],
});

const comfortaa = Comfortaa({
  variable: "--font-comfortaa",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Cossy Rules Holdings | Industrial Conglomerate, Kadoma Zimbabwe",
  description:
    "Zimbabwe-based industrial conglomerate operating across mining & milling, cyanidation & elution, construction aggregates, transport & logistics, furniture retailing, tissue production & supply, and real estate.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${quicksand.variable} ${comfortaa.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col font-sans">{children}</body>
    </html>
  );
}

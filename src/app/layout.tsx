import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import TailwindNavbar from "@/components/navbar/navbar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "3005 Retirees Chapter",
  description: "Official website for the 3005 Retirees Chapter",
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
        <TailwindNavbar />
        {children}
        <footer className="border-t border-slate-200 bg-white px-4 py-6 text-center text-sm text-slate-600">
          Website created by Orville Desjarlais and Mateo.
        </footer>
      </body>
    </html>
  );
}

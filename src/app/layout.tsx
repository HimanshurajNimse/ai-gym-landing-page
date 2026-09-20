import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import "./globals.css";

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
});

export const metadata: Metadata = {
  title: "AI Gym Coach - Next-Gen Form Correction",
  description: "Webcam-based real-time 3D pose tracking and neural voice coaching.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth" suppressHydrationWarning>
      <body className={`${outfit.variable} font-sans antialiased bg-[#030303] text-white`} suppressHydrationWarning>
        {children}
      </body>
    </html>
  );
}

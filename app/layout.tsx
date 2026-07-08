import type { Metadata } from "next";
import { Inter, Orbitron } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import MatrixBackground from "@/components/MatrixBackground";
import FloatingElements from "@/components/FloatingElements";
import BackToTop from "@/components/BackToTop";
import LoadingScreen from "@/components/LoadingScreen";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const orbitron = Orbitron({
  subsets: ["latin"],
  variable: "--font-orbitron",
});

export const metadata: Metadata = {
  title: "Masyu",
  description:
    "Frontend Developer specializing in React, Next.js, and TypeScript.",
  keywords: "Frontend Developer, React, Next.js, TypeScript",
  authors: [{ name: "Masyu Magdy" }],
  openGraph: {
    title: "Masyu",
    description:
      "Frontend Developer specializing in React, Next.js, and TypeScript",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning data-scroll-behavior="smooth">
      <head>
        
        <link rel="icon" href="/favicon.svg" sizes="any" />
      </head>
      <body className={`${inter.variable} ${orbitron.variable} antialiased`}>
        <ThemeProvider>
          <LoadingScreen />
          <MatrixBackground />
          <FloatingElements />
          <div className="relative z-10 flex min-h-screen flex-col">
            <Navbar />
            <main className="flex-1 pt-20">{children}</main>
            <Footer />
            <BackToTop />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}

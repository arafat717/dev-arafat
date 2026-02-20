import NextAuthSessionProvider from "@/lib/NextAuthSessionProvider";
import ReduxProvider from "@/redux/ReduxProvider";
import type { Metadata } from "next";
import { Toaster } from "sonner";
import "./globals.css";
import Navbar from "@/components/Common/Navbar/Navbar";
import Footer from "@/components/Common/Footer/Footer";
import ThemeProvider from "@/lib/ThemeProvider";

import { Inter } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: 'Arafat Hossen Joni - Web Developer Portfolio',
  description: 'Professional portfolio showcasing web development projects, skills, and experience. 1+ year of industry expertise.',
  generator: 'v0.app',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.variable} antialiased`}>
        <Toaster position="top-center" richColors />
        <ThemeProvider>
          <NextAuthSessionProvider>
            <ReduxProvider>
              <Navbar></Navbar>
              {children}
              <Footer></Footer>
            </ReduxProvider>
          </NextAuthSessionProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}

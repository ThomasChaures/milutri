import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Milutri",
  description: "Software para nutricionistas",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className="scroll-smooth">
      {/* 3. Inyectamos la variable de la fuente en el body */}
      <body
        className={`${inter.variable} font-sans antialiased text-slate-900`}
      >
        {children}
      </body>
    </html>
  );
}

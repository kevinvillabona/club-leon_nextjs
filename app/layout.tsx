import type { Metadata } from "next";
import { Inter, Oswald } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"], variable: '--font-inter' });
const oswald = Oswald({ subsets: ["latin"], variable: '--font-oswald' });

export const metadata: Metadata = {
  title: "Club Deportivo León | Oficial",
  description: "Sitio web oficial del Club Deportivo León",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="es" className={`${inter.variable} ${oswald.variable} scroll-smooth`}>
      <head>
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.9.1/font/bootstrap-icons.css" />
      </head>
      <body className="font-sans pt-20">
        <Navbar />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
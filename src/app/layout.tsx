"use client";

import { Inter } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";
import ClientBody from "./ClientBody";
import Header from "@/components/header";
import Footer from "@/components/footer";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <title>Nebula Odyssey - Revolutionary 3D Space Adventure</title>
        <meta name="description" content="Forge your path across the cosmos in a procedurally generated universe that evolves with your journey. The ultimate 3D space adventure." />
        <meta property="og:title" content="Nebula Odyssey - Revolutionary 3D Space Adventure" />
        <meta property="og:description" content="Forge your path across the cosmos in a procedurally generated universe that evolves with your journey. The ultimate 3D space adventure." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://nebulaodyssey.game" />
        <meta property="og:image" content="https://nebulaodyssey.game/og-image.jpg" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="icon" href="/favicon.ico" />
      </head>
      <ClientBody className={inter.className}>
        <Header />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
        <Toaster />
      </ClientBody>
    </html>
  );
}

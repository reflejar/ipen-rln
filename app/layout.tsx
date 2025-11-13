import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";

import Navbar from "@/components/layout/navbar";
import Footer from "@/components/layout/footer";

import { apiPlugin, storyblokInit } from "@storyblok/react/rsc";
import LoadingProvider from "./loading";
export const getStoryblokApi = storyblokInit({
  accessToken: process.env.STORYBLOK_ACCESS_TOKEN,
  use: [apiPlugin],
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Jóvenes combatiendo la desinformación",
  description: "Periodismo comunitario para combatir la desinformación",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es" className={inter.variable}>
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="font-inter antialiased">
        <LoadingProvider>
          <Navbar />
          <main className="min-h-screen">{children}</main>
          <Footer />
        </LoadingProvider>
      </body>
    </html>
  );
}

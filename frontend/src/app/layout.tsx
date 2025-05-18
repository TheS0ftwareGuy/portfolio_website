import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Adam Mohamed | Software Engineer",
  description: "Personal portfolio website of Adam Mohamed, a software engineer specializing in web development and modern JavaScript technologies.",
  keywords: "software engineer, web developer, React, TypeScript, Next.js, portfolio",
  authors: [{ name: "Adam Mohamed" }],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://adam-mohamed.dev",
    siteName: "Adam Mohamed | Software Engineer",
    title: "Adam Mohamed | Software Engineer",
    description: "Personal portfolio website of Adam Mohamed, a software engineer specializing in web development and modern JavaScript technologies.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Adam Mohamed - Software Engineer",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
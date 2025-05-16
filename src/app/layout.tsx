import type { Metadata } from "next";
// import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

// const geistSans = Geist({
//   variable: "--font-geist-sans",
//   subsets: ["latin"],
// });

// const geistMono = Geist_Mono({
//   variable: "--font-geist-mono",
//   subsets: ["latin"],
// });

export const metadata: Metadata = {
  title: "Jerico | Software Engineer",
  description:
    "Portfolio of Jerico,  a full-stack engineer specializing in React, Next.js, and Node.js. Building secure, scalable web apps with mobile compatibility and optimized deployments. Explore my projects and technical expertise.",
  keywords: ["Jerico Sabile", "software engineer", "web developer", "mobile developer", "React", "portfolio", "Philippines", "Pampanga"],
  authors: [{ name: "Jerico Sabile", url: "https://jericosabile.onrender.com" }],
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: "/img/favicon64.ico",
    apple: "/img/favicon64.ico",
  },
    other: {
    'google-site-verification': 'lYP3ve-YsFbmxA4OSnghFJWDbX7eI330Kxh8ZAOZBu4',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">{children}</body>
    </html>
  );
}

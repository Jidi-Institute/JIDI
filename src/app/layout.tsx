import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "JIDI Institute — Ethical AI Education & Research",
  description: "Empowering Africa through Ethical AI. JIDI Institute for Artificial Intelligence & Data Research — independent nonprofit building Africa's AI future.",
  icons: {
    icon: "/images/logo.jpeg",
    shortcut: "/images/logo.jpeg",
    apple: "/images/logo.jpeg",
  },
  keywords: ["AI", "Artificial Intelligence", "Data Science", "Africa", "Ghana", "Education", "Research", "Ethical AI", "Machine Learning"],
  authors: [{ name: "JIDI Institute" }],
  creator: "JIDI Institute",
  publisher: "JIDI Institute",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://jidi-institute.org"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "JIDI Institute — Ethical AI Education & Research",
    description: "Empowering Africa through Ethical AI. Independent nonprofit building Africa's AI future.",
    url: "https://jidi-institute.org",
    siteName: "JIDI Institute",
    images: [
      {
        url: "/images/logo.jpeg",
        width: 1200,
        height: 630,
        alt: "JIDI Institute - Empowering Africa through Ethical AI",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "JIDI Institute — Ethical AI Education & Research",
    description: "Empowering Africa through Ethical AI. Independent nonprofit building Africa's AI future.",
    images: ["/images/logo.jpeg"],
  },
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
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="smooth-scroll">
      <body className={`${inter.variable} font-sans antialiased`}>
        {children}
      </body>
    </html>
  );
}

import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import FirebaseAnalytics from "@/components/FirebaseAnalytics";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Aarogya Note AI - AI-Powered Medical Documentation",
  description:
    "Transform your medical consultations into accurate SOAP notes with AI-powered transcription and documentation. Designed for healthcare professionals in India.",
  keywords:
    "medical documentation, AI transcription, SOAP notes, healthcare, medical records, India",
  authors: [{ name: "Aarogya Note AI" }],
  manifest: '/site.webmanifest',
  openGraph: {
    title: "Aarogya Note AI - AI-Powered Medical Documentation",
    description:
      "Transform your medical consultations into accurate SOAP notes with AI-powered transcription and documentation.",
    type: "website",
    locale: "en_IN",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href="/favicon-16x16.png" sizes="16x16" type="image/png" />
        <link rel="icon" href="/favicon-32x32.png" sizes="32x32" type="image/png" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <FirebaseAnalytics />
        {children}
      </body>
    </html>
  );
}

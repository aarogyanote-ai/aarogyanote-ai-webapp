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
  title: "Aarogya Note AI - AI-Powered Medical Documentation",
  description:
    "Transform your medical consultations into accurate SOAP notes with AI-powered transcription and documentation. Designed for healthcare professionals in India.",
  keywords:
    "medical documentation, AI transcription, SOAP notes, healthcare, medical records, India",
  authors: [{ name: "Aarogya Note AI" }],
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
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}

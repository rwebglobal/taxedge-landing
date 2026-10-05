import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://taxedgefinsolutions.com"),
  title: {
    default: "Tax Edge Fin Solutions | Tax, GST & Corporate Advisory Vijayawada",
    template: "%s | Tax Edge Fin Solutions",
  },
  description:
    "Authorized tax and corporate financial advisory in Vijayawada. Specializing in GST filing, income tax planning, statutory accounting, and business loans across Andhra Pradesh.",
  keywords: [
    "Tax Edge Fin Solutions",
    "Tax Consultant Vijayawada",
    "GST Filing Vijayawada",
    "Income Tax Advisory Andhra Pradesh",
    "Corporate Financial Advisory Guntur",
    "Business Loans Vijayawada",
    "LLP Incorporation Andhra Pradesh",
  ],
  alternates: {
    canonical: "https://taxedgefinsolutions.com",
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
  openGraph: {
    title: "Tax Edge Fin Solutions | Tax & Financial Advisory Vijayawada",
    description:
      "Expert corporate compliance, direct taxation, GST returns, and structured business loan advisory in Vijayawada & Guntur.",
    url: "https://taxedgefinsolutions.com",
    siteName: "Tax Edge Fin Solutions LLP",
    locale: "en_IN",
    type: "website",
    images: [
      {
        url: "/logo.png",
        width: 1200,
        height: 630,
        alt: "Tax Edge Fin Solutions LLP",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Tax Edge Fin Solutions | Tax & Financial Advisory",
    description:
      "Tax advisory, GST filing, and financial consulting in Vijayawada, Andhra Pradesh.",
    images: ["/logo.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased bg-neutral-950 text-neutral-100">{children}</body>
    </html>
  );
}
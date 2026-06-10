import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Brajone | Luxury Real Estate in Vrindavan",
  description:
    "Premium plots, villas and investment properties in Vrindavan.",
  keywords: [
    "Vrindavan Property",
    "Vrindavan Plots",
    "Luxury Villas",
    "Brajone",
    "Real Estate"
  ],
  authors: [{ name: "Brajone Real Estate" }],
  openGraph: {
    title: "Brajone Real Estate",
    description: "Luxury Living. Smart Investment.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}

import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Bavithran Sivanesan — Frontend Engineer",
  description: "Detail-obsessed frontend engineer building pixel-perfect, ship-ready web applications with React.js and Next.js.",
  authors: [{ name: "Bavithran Sivanesan" }],
  openGraph: {
    title: "Bavithran Sivanesan — Frontend Engineer",
    description: "Building interfaces people love to use.",
    url: "https://bavithran.dev",
  },
  other: {
    "google-adsense-account": "ca-pub-5370239646628306",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head />
      <body>{children}</body>
    </html>
  );
}

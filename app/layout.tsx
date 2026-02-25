import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Globalist — Your World. Your eSIM.",
  description:
    "Instant eSIM data plans in 150+ countries. No physical SIM needed. Stay connected wherever you travel.",
  keywords: ["eSIM", "travel", "data plan", "global connectivity", "roaming"],
  openGraph: {
    title: "Globalist — Your World. Your eSIM.",
    description: "Instant eSIM data plans in 150+ countries.",
    url: "https://globalistapp.com",
    siteName: "Globalist",
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
      <body className="antialiased">{children}</body>
    </html>
  );
}

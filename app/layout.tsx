import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Tuscany Lightning Summit 2026",
  description: "An exclusive invite-only gathering of Bitcoin and Lightning Network innovators. May 12-13, 2026 in Viareggio, Italy.",
  metadataBase: new URL("https://tuscanysummit.com"),
  openGraph: {
    title: "Tuscany Lightning Summit 2026",
    description: "An exclusive invite-only gathering of Bitcoin and Lightning Network innovators. May 12-13, 2026 in Viareggio, Italy.",
    images: [
      {
        url: "/background.png",
        width: 1200,
        height: 630,
        alt: "Tuscany Lightning Summit 2026",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Tuscany Lightning Summit 2026",
    description: "An exclusive invite-only gathering of Bitcoin and Lightning Network innovators. May 12-13, 2026 in Viareggio, Italy.",
    images: ["/background.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="bg-[#0D0D0D] text-[#F5F0E8]">{children}</body>
    </html>
  );
}

import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Jeevan | Blockchain Developer",
  description: "Software Engineer specializing in Blockchain, DeFi, and Solana development. Building the future of decentralized finance.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <body className="antialiased bg-[#0a0a0f] text-gray-100">
        {children}
      </body>
    </html>
  );
}

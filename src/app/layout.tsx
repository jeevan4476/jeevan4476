import type { Metadata, Viewport } from "next";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";
import { TooltipProvider } from "@/components/ui/tooltip";

export const metadata: Metadata = {
  title: {
    default: "Jeevan | Blockchain Developer",
    template: "%s | Jeevan",
  },
  description: "Software Engineer specializing in Blockchain, DeFi, and Solana development. Building the future of decentralized finance.",
  keywords: ["blockchain", "solana", "rust", "defi", "web3", "developer", "smart contracts"],
  authors: [{ name: "Jeevan", url: "https://github.com/jeevan4476" }],
  creator: "Jeevan",
  openGraph: {
    type: "website",
    locale: "en_US",
    title: "Jeevan | Blockchain Developer",
    description: "Software Engineer specializing in Blockchain, DeFi, and Solana development.",
    siteName: "Jeevan Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Jeevan | Blockchain Developer",
    description: "Software Engineer specializing in Blockchain, DeFi, and Solana development.",
    creator: "@_Jeevan_R",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#0a0a0f" },
  ],
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="min-h-screen bg-zinc-50 font-sans antialiased dark:bg-zinc-950">
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <TooltipProvider>
            <div className="relative flex min-h-screen flex-col">
              <Navigation />
              <main className="flex-1">{children}</main>
              <Footer />
            </div>
          </TooltipProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}

import Link from "next/link";
import { Github, Twitter, Linkedin, Mail, Heart } from "lucide-react";

const socialLinks = [
  { name: "GitHub", href: "https://github.com/jeevan4476", icon: Github },
  { name: "Twitter", href: "https://x.com/_Jeevan_R", icon: Twitter },
  { name: "LinkedIn", href: "https://www.linkedin.com/in/RJeevan-", icon: Linkedin },
  { name: "Email", href: "mailto:jeevanr2431@gmail.com", icon: Mail },
];

const footerLinks = [
  { name: "Home", href: "/" },
  { name: "Projects", href: "/projects" },
  { name: "Blog", href: "/blog" },
  { name: "Registry", href: "/registry" },
];

export function Footer() {
  return (
    <footer className="border-t border-zinc-800/50 bg-zinc-950">
      <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6">
        <div className="grid gap-8 md:grid-cols-3">
          {/* Brand */}
          <div className="space-y-4">
            <Link href="/" className="inline-block">
              <span className="text-xl font-bold bg-gradient-to-r from-emerald-400 via-cyan-400 to-purple-500 bg-clip-text text-transparent">
                JEEVAN
              </span>
            </Link>
            <p className="text-sm text-zinc-400 max-w-xs">
              Software engineer passionate about blockchain, DeFi, and building the future of decentralized finance.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-sm font-semibold text-zinc-100">Quick Links</h3>
            <ul className="space-y-2">
              {footerLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-sm text-zinc-400 transition-colors hover:text-emerald-400"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Connect */}
          <div className="space-y-4">
            <h3 className="text-sm font-semibold text-zinc-100">Connect</h3>
            <div className="flex items-center gap-3">
              {socialLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-lg p-2 text-zinc-400 transition-all hover:bg-zinc-800 hover:text-emerald-400 hover:scale-110"
                >
                  <link.icon className="h-5 w-5" />
                  <span className="sr-only">{link.name}</span>
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-zinc-800/50 pt-8 sm:flex-row">
          <p className="text-xs text-zinc-500">
            © {new Date().getFullYear()} Jeevan. All rights reserved.
          </p>
          <p className="flex items-center gap-1 text-xs text-zinc-500">
            Built with <Heart className="h-3 w-3 text-red-500" /> using{" "}
            <span className="text-emerald-400">Next.js</span> &{" "}
            <span className="text-purple-400">Tailwind</span>
          </p>
        </div>
      </div>
    </footer>
  );
}

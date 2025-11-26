"use client";

import * as React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { ThemeToggle } from "@/components/theme-toggle";
import { 
  Github, 
  Twitter, 
  Linkedin, 
  Mail,
  BookOpen,
  Layers,
  FolderGit2,
  Home,
  Menu,
  X
} from "lucide-react";
import { Button } from "@/components/ui/button";

const navigation = [
  { name: "Home", href: "/", icon: Home },
  { name: "Projects", href: "/projects", icon: FolderGit2 },
  { name: "Blog", href: "/blog", icon: BookOpen },
  { name: "Registry", href: "/registry", icon: Layers },
];

const socialLinks = [
  { name: "GitHub", href: "https://github.com/jeevan4476", icon: Github },
  { name: "Twitter", href: "https://x.com/_Jeevan_R", icon: Twitter },
  { name: "LinkedIn", href: "https://www.linkedin.com/in/RJeevan-", icon: Linkedin },
  { name: "Email", href: "mailto:jeevanr2431@gmail.com", icon: Mail },
];

export function Navigation() {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-zinc-800/50 bg-zinc-950/80 backdrop-blur-xl">
      <nav className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="text-xl font-bold"
          >
            <span className="bg-gradient-to-r from-emerald-400 via-cyan-400 to-purple-500 bg-clip-text text-transparent">
              JEEVAN
            </span>
          </motion.div>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex md:items-center md:gap-1">
          {navigation.map((item) => {
            const isActive = pathname === item.href;
            return (
              <Link
                key={item.name}
                href={item.href}
                className={cn(
                  "relative flex items-center gap-2 rounded-lg px-3 py-2 text-sm font-medium transition-colors",
                  isActive
                    ? "text-emerald-400"
                    : "text-zinc-400 hover:text-zinc-100"
                )}
              >
                <item.icon className="h-4 w-4" />
                {item.name}
                {isActive && (
                  <motion.div
                    layoutId="activeNav"
                    className="absolute inset-0 rounded-lg bg-emerald-500/10 border border-emerald-500/20"
                    transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                  />
                )}
              </Link>
            );
          })}
        </div>

        {/* Right side - Social + Theme */}
        <div className="flex items-center gap-2">
          <div className="hidden sm:flex sm:items-center sm:gap-1">
            {socialLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-lg p-2 text-zinc-400 transition-colors hover:bg-zinc-800 hover:text-zinc-100"
              >
                <link.icon className="h-4 w-4" />
                <span className="sr-only">{link.name}</span>
              </a>
            ))}
          </div>
          <div className="h-4 w-px bg-zinc-800 hidden sm:block" />
          <ThemeToggle />
          
          {/* Mobile menu button */}
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? (
              <X className="h-5 w-5" />
            ) : (
              <Menu className="h-5 w-5" />
            )}
          </Button>
        </div>
      </nav>

      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          className="border-t border-zinc-800/50 bg-zinc-950/95 backdrop-blur-xl md:hidden"
        >
          <div className="space-y-1 px-4 py-4">
            {navigation.map((item) => {
              const isActive = pathname === item.href;
              return (
                <Link
                  key={item.name}
                  href={item.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={cn(
                    "flex items-center gap-3 rounded-lg px-3 py-2 text-sm font-medium transition-colors",
                    isActive
                      ? "bg-emerald-500/10 text-emerald-400"
                      : "text-zinc-400 hover:bg-zinc-800 hover:text-zinc-100"
                  )}
                >
                  <item.icon className="h-4 w-4" />
                  {item.name}
                </Link>
              );
            })}
            <div className="my-4 h-px bg-zinc-800" />
            <div className="flex items-center gap-2 px-3">
              {socialLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-lg p-2 text-zinc-400 transition-colors hover:bg-zinc-800 hover:text-zinc-100"
                >
                  <link.icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>
        </motion.div>
      )}
    </header>
  );
}

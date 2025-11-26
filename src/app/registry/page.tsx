"use client";

import { motion } from "framer-motion";
import { Code, Copy, Check, Terminal, Package, Layers, Sparkles } from "lucide-react";
import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

const registryItems = [
  {
    name: "Gradient Button",
    description: "A beautiful button with animated gradient background and hover effects.",
    category: "Components",
    type: "component",
    preview: (
      <button className="inline-flex items-center gap-2 rounded-lg bg-gradient-to-r from-emerald-500 to-purple-600 px-4 py-2 text-sm font-medium text-white shadow-lg transition-all hover:scale-105 hover:shadow-xl">
        <Sparkles className="h-4 w-4" />
        Click me
      </button>
    ),
    install: {
      pnpm: "pnpm dlx shadcn@latest add gradient-button",
      npm: "npx shadcn@latest add gradient-button",
      yarn: "yarn dlx shadcn@latest add gradient-button",
      bun: "bunx shadcn@latest add gradient-button",
    },
  },
  {
    name: "Animated Card",
    description: "Card component with gradient border animation and hover lift effect.",
    category: "Components",
    type: "component",
    preview: (
      <div className="gradient-border rounded-xl bg-zinc-900 p-4 transition-transform hover:scale-105">
        <p className="text-sm text-zinc-300">Animated Card</p>
      </div>
    ),
    install: {
      pnpm: "pnpm dlx shadcn@latest add animated-card",
      npm: "npx shadcn@latest add animated-card",
      yarn: "yarn dlx shadcn@latest add animated-card",
      bun: "bunx shadcn@latest add animated-card",
    },
  },
  {
    name: "useLocalStorage",
    description: "A hook for persisting state to localStorage with SSR support.",
    category: "Hooks",
    type: "hook",
    install: {
      pnpm: "pnpm dlx shadcn@latest add use-local-storage",
      npm: "npx shadcn@latest add use-local-storage",
      yarn: "yarn dlx shadcn@latest add use-local-storage",
      bun: "bunx shadcn@latest add use-local-storage",
    },
  },
  {
    name: "useDebounce",
    description: "Debounce any value with a configurable delay. Perfect for search inputs.",
    category: "Hooks",
    type: "hook",
    install: {
      pnpm: "pnpm dlx shadcn@latest add use-debounce",
      npm: "npx shadcn@latest add use-debounce",
      yarn: "yarn dlx shadcn@latest add use-debounce",
      bun: "bunx shadcn@latest add use-debounce",
    },
  },
  {
    name: "Glow Effect",
    description: "CSS utility for adding glow effects to elements on hover.",
    category: "Utilities",
    type: "utility",
    preview: (
      <div className="rounded-lg bg-zinc-800 p-4 transition-all hover:shadow-[0_0_30px_rgba(52,211,153,0.3)]">
        <p className="text-sm text-zinc-300">Hover for glow</p>
      </div>
    ),
    install: {
      pnpm: "pnpm dlx shadcn@latest add glow-effect",
      npm: "npx shadcn@latest add glow-effect",
      yarn: "yarn dlx shadcn@latest add glow-effect",
      bun: "bunx shadcn@latest add glow-effect",
    },
  },
  {
    name: "Grid Background",
    description: "Subtle grid pattern background for modern UI designs.",
    category: "Utilities",
    type: "utility",
    preview: (
      <div className="rounded-lg bg-grid h-20 w-full bg-zinc-900" />
    ),
    install: {
      pnpm: "pnpm dlx shadcn@latest add grid-background",
      npm: "npx shadcn@latest add grid-background",
      yarn: "yarn dlx shadcn@latest add grid-background",
      bun: "bunx shadcn@latest add grid-background",
    },
  },
];

const categories = ["All", "Components", "Hooks", "Utilities"];
const packageManagers = ["pnpm", "npm", "yarn", "bun"] as const;

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 },
};

function CopyButton({ text }: { text: string }) {
  const [copied, setCopied] = useState(false);

  const copy = async () => {
    await navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <button
      onClick={copy}
      className="rounded p-1 text-zinc-400 transition-colors hover:bg-zinc-700 hover:text-zinc-100"
    >
      {copied ? <Check className="h-4 w-4 text-emerald-400" /> : <Copy className="h-4 w-4" />}
    </button>
  );
}

export default function RegistryPage() {
  const [selectedPM, setSelectedPM] = useState<typeof packageManagers[number]>("pnpm");

  return (
    <div className="relative min-h-screen">
      {/* Background */}
      <div className="fixed inset-0 -z-10 bg-grid dark:opacity-100 opacity-50" />
      <div className="fixed inset-0 -z-10 bg-gradient-to-br from-emerald-500/5 via-transparent to-purple-500/5" />

      <div className="mx-auto max-w-6xl px-4 py-24 sm:px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="space-y-4 mb-12"
        >
          <div className="flex items-center gap-3">
            <div className="rounded-lg bg-emerald-500/10 p-2 text-emerald-500">
              <Package className="h-6 w-6" />
            </div>
            <h1 className="text-4xl font-bold sm:text-5xl">
              <span className="gradient-text">Registry</span>
            </h1>
          </div>
          <p className="max-w-2xl text-lg text-zinc-600 dark:text-zinc-400">
            A collection of reusable components, hooks, and utilities built with shadcn/ui patterns.
            Copy-paste ready with one-click installation commands.
          </p>
        </motion.div>

        {/* Package Manager Toggle */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="mb-8"
        >
          <div className="inline-flex rounded-lg bg-zinc-800 p-1">
            {packageManagers.map((pm) => (
              <button
                key={pm}
                onClick={() => setSelectedPM(pm)}
                className={`rounded-md px-4 py-2 text-sm font-medium transition-all ${
                  selectedPM === pm
                    ? "bg-emerald-500 text-white"
                    : "text-zinc-400 hover:text-zinc-100"
                }`}
              >
                {pm}
              </button>
            ))}
          </div>
        </motion.div>

        {/* Category Filters */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="flex flex-wrap gap-2 mb-12"
        >
          {categories.map((category) => (
            <Badge
              key={category}
              variant={category === "All" ? "default" : "outline"}
              className="cursor-pointer transition-all hover:scale-105"
            >
              {category === "Components" && <Layers className="mr-1 h-3 w-3" />}
              {category === "Hooks" && <Code className="mr-1 h-3 w-3" />}
              {category === "Utilities" && <Terminal className="mr-1 h-3 w-3" />}
              {category}
            </Badge>
          ))}
        </motion.div>

        {/* Registry Items */}
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="grid gap-6 md:grid-cols-2 lg:grid-cols-3"
        >
          {registryItems.map((registryItem) => (
            <motion.div key={registryItem.name} variants={item}>
              <Card className="group h-full transition-all duration-300 hover:scale-[1.02]">
                <CardHeader>
                  <div className="flex items-center justify-between mb-2">
                    <Badge variant="secondary" className="text-xs">
                      {registryItem.category}
                    </Badge>
                  </div>
                  <CardTitle className="group-hover:text-emerald-400 transition-colors">
                    {registryItem.name}
                  </CardTitle>
                  <CardDescription>{registryItem.description}</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  {/* Preview */}
                  {registryItem.preview && (
                    <div className="flex items-center justify-center rounded-lg bg-zinc-800/50 p-6">
                      {registryItem.preview}
                    </div>
                  )}

                  {/* Install Command */}
                  <div className="flex items-center justify-between rounded-lg bg-zinc-800 px-3 py-2 font-mono text-xs">
                    <code className="text-zinc-300 truncate pr-2">
                      {registryItem.install[selectedPM]}
                    </code>
                    <CopyButton text={registryItem.install[selectedPM]} />
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="mt-16 text-center"
        >
          <p className="text-zinc-400 mb-4">
            Want to contribute a component?
          </p>
          <Button variant="outline" asChild>
            <a href="https://github.com/jeevan4476" target="_blank" rel="noopener noreferrer">
              Submit on GitHub
            </a>
          </Button>
        </motion.div>
      </div>
    </div>
  );
}

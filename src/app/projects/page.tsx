"use client";

import { motion } from "framer-motion";
import { Github, ExternalLink, Star, GitFork, Shield, Layers, Zap, Vote, Code2, Binary } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

const projects = [
  {
    title: "StableGuard",
    description: "Decentralized insurance protocol on Solana for hedging against stablecoin depegging events. Features dynamic premiums, Pyth oracle integration, and automated payouts.",
    tech: ["Rust", "Anchor", "Solana", "Pyth Network", "TypeScript"],
    github: "https://github.com/jeevan4476/StableGuard",
    featured: true,
    icon: Shield,
    category: "DeFi",
  },
  {
    title: "Pinocchio Escrow",
    description: "Native Rust escrow program on Solana using the Pinocchio framework for optimized on-chain performance and minimal compute usage.",
    tech: ["Rust", "Pinocchio", "Solana"],
    github: "https://github.com/jeevan4476/Pinocchio-Escrow",
    icon: Layers,
    category: "Smart Contracts",
  },
  {
    title: "OneWay Bridge",
    description: "Cross-chain bridge implementation for secure asset transfers between blockchain networks with cryptographic proofs.",
    tech: ["Solidity", "EVM", "Smart Contracts"],
    github: "https://github.com/jeevan4476/OneWay-Bridge",
    icon: Zap,
    category: "Infrastructure",
  },
  {
    title: "Aave Lottery",
    description: "DeFi lottery system integrating with Aave protocol for yield-bearing prize pools. No-loss lottery mechanism.",
    tech: ["Solidity", "Aave", "DeFi", "Chainlink"],
    github: "https://github.com/jeevan4476/Aave-Lottery",
    icon: Star,
    category: "DeFi",
  },
  {
    title: "Vote",
    description: "Decentralized polling application built on Solana with a Next.js frontend. Transparent and tamper-proof voting.",
    tech: ["Anchor", "Rust", "Next.js", "TypeScript"],
    github: "https://github.com/jeevan4476/Vote_",
    demo: "https://vote-jgfh.vercel.app/",
    icon: Vote,
    category: "dApps",
  },
  {
    title: "Sparse Merkle Tree",
    description: "Efficient Sparse Merkle Tree implementation in Rust with comprehensive benchmarking and optimization for blockchain use cases.",
    tech: ["Rust", "Cryptography", "Data Structures"],
    github: "https://github.com/jeevan4476/Sparse-Merkle-Tree",
    icon: Binary,
    category: "Cryptography",
  },
];

const categories = ["All", "DeFi", "Smart Contracts", "Infrastructure", "dApps", "Cryptography"];

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

export default function ProjectsPage() {
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
          className="space-y-4 mb-16"
        >
          <h1 className="text-4xl font-bold sm:text-5xl">
            <span className="gradient-text">Projects</span>
          </h1>
          <p className="max-w-2xl text-lg text-zinc-600 dark:text-zinc-400">
            A collection of my work in blockchain development, DeFi protocols, and smart contract engineering.
            Each project represents my commitment to building secure, efficient, and innovative solutions.
          </p>
        </motion.div>

        {/* Category Filters */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="flex flex-wrap gap-2 mb-12"
        >
          {categories.map((category) => (
            <Badge
              key={category}
              variant={category === "All" ? "default" : "outline"}
              className="cursor-pointer transition-all hover:scale-105"
            >
              {category}
            </Badge>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="grid gap-6 md:grid-cols-2"
        >
          {projects.map((project) => (
            <motion.div key={project.title} variants={item}>
              <Card className={`group h-full transition-all duration-300 hover:scale-[1.02] ${project.featured ? "md:col-span-2 border-emerald-500/30" : ""}`}>
                <CardHeader>
                  <div className="flex items-start justify-between mb-2">
                    <div className="flex items-center gap-3">
                      <div className="rounded-lg bg-emerald-500/10 p-2 text-emerald-500">
                        <project.icon className="h-5 w-5" />
                      </div>
                      <Badge variant="secondary" className="text-xs">
                        {project.category}
                      </Badge>
                      {project.featured && (
                        <Badge className="text-xs">Featured</Badge>
                      )}
                    </div>
                    <div className="flex gap-2">
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-zinc-400 transition-colors hover:text-zinc-100"
                      >
                        <Github className="h-5 w-5" />
                      </a>
                      {project.demo && (
                        <a
                          href={project.demo}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-zinc-400 transition-colors hover:text-emerald-400"
                        >
                          <ExternalLink className="h-5 w-5" />
                        </a>
                      )}
                    </div>
                  </div>
                  <CardTitle className="group-hover:text-emerald-400 transition-colors">
                    {project.title}
                  </CardTitle>
                  <CardDescription className="text-sm leading-relaxed">
                    {project.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech) => (
                      <Badge key={tech} variant="outline" className="text-xs font-mono">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        {/* GitHub CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="mt-16 text-center"
        >
          <Button variant="outline" asChild>
            <a href="https://github.com/jeevan4476" target="_blank" rel="noopener noreferrer">
              <Github className="mr-2 h-4 w-4" />
              View All on GitHub
            </a>
          </Button>
        </motion.div>
      </div>
    </div>
  );
}

"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { 
  ArrowRight, 
  Github, 
  ExternalLink, 
  Sparkles,
  Code2,
  Layers,
  Zap,
  Shield
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const featuredProjects = [
  {
    title: "StableGuard",
    description: "Decentralized insurance protocol on Solana for hedging against stablecoin depegging events. Features dynamic premiums, Pyth oracle integration, and automated payouts.",
    tech: ["Rust", "Anchor", "Solana", "Pyth Network"],
    github: "https://github.com/jeevan4476/StableGuard",
    featured: true,
    icon: Shield,
  },
  {
    title: "Pinocchio Escrow",
    description: "Native Rust escrow program on Solana using the Pinocchio framework for optimized on-chain performance.",
    tech: ["Rust", "Pinocchio", "Solana"],
    github: "https://github.com/jeevan4476/Pinocchio-Escrow",
    icon: Layers,
  },
  {
    title: "OneWay Bridge",
    description: "Cross-chain bridge implementation for secure asset transfers between blockchain networks.",
    tech: ["Solidity", "EVM", "Smart Contracts"],
    github: "https://github.com/jeevan4476/OneWay-Bridge",
    icon: Zap,
  },
];

const skills = [
  { category: "Languages", items: ["Rust", "Solidity", "TypeScript", "Python"] },
  { category: "Blockchain", items: ["Solana", "Ethereum", "Anchor", "Foundry"] },
  { category: "Frontend", items: ["React", "Next.js", "TailwindCSS", "Framer Motion"] },
  { category: "Tools", items: ["Git", "Docker", "Linux", "Vercel"] },
];

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

export default function Home() {
  return (
    <div className="relative">
      {/* Background effects */}
      <div className="fixed inset-0 -z-10 bg-grid dark:opacity-100 opacity-50" />
      <div className="fixed inset-0 -z-10 bg-gradient-to-br from-emerald-500/5 via-transparent to-purple-500/5" />
      
      {/* Hero Section */}
      <section className="relative mx-auto max-w-6xl px-4 py-24 sm:px-6 sm:py-32">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="space-y-8"
        >
          {/* Status Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
          >
            <Badge className="px-4 py-1.5 animate-pulse-glow">
              <Sparkles className="mr-2 h-3 w-3" />
              Building the Future of DeFi
            </Badge>
          </motion.div>

          {/* Heading */}
          <div className="space-y-4">
            <h1 className="text-4xl font-bold tracking-tight sm:text-6xl lg:text-7xl">
              <span className="text-zinc-900 dark:text-zinc-100">gm! i&apos;m </span>
              <span className="gradient-text">jeevan</span>
            </h1>
            <p className="max-w-2xl text-lg text-zinc-600 dark:text-zinc-400 sm:text-xl">
              A software engineer passionate about{" "}
              <span className="font-medium text-emerald-600 dark:text-emerald-400">blockchain</span> and{" "}
              <span className="font-medium text-purple-600 dark:text-purple-400">distributed systems</span>.
            </p>
          </div>

          {/* Description */}
          <div className="max-w-2xl space-y-4 text-zinc-600 dark:text-zinc-400">
            <p>
              Currently immersed in the world of blockchain technology, with a particular fascination for{" "}
              <span className="code-block text-emerald-600 dark:text-emerald-400">DeFi</span> protocols and{" "}
              <span className="code-block text-purple-600 dark:text-purple-400">Stablecoins</span>.
            </p>
            <p>
              I specialize in building on <span className="font-medium text-emerald-600 dark:text-emerald-400">Solana</span> using{" "}
              <span className="font-medium text-orange-600 dark:text-orange-400">Rust</span> and the{" "}
              <span className="font-medium text-purple-600 dark:text-purple-400">Anchor</span> framework.
            </p>
          </div>

          {/* CTAs */}
          <div className="flex flex-wrap items-center gap-4">
            <Button asChild size="lg">
              <Link href="/projects">
                View My Work
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button variant="outline" asChild size="lg">
              <Link href="/blog">
                Read My Blog
                <Code2 className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2"
        >
          <div className="flex flex-col items-center gap-2 text-zinc-400">
            <span className="text-xs uppercase tracking-widest">Scroll</span>
            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ repeat: Infinity, duration: 1.5 }}
              className="h-6 w-4 rounded-full border-2 border-zinc-400 p-1"
            >
              <div className="h-1.5 w-1 rounded-full bg-emerald-400 mx-auto" />
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* Skills Section */}
      <section className="mx-auto max-w-6xl px-4 py-24 sm:px-6">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="space-y-12"
        >
          <div className="space-y-4">
            <h2 className="text-3xl font-bold sm:text-4xl">
              <span className="gradient-text">Skills & Expertise</span>
            </h2>
            <p className="max-w-2xl text-zinc-600 dark:text-zinc-400">
              Technologies I use to build decentralized applications and smart contracts.
            </p>
          </div>

          <motion.div
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4"
          >
            {skills.map((skill) => (
              <motion.div key={skill.category} variants={item}>
                <Card className="h-full">
                  <CardHeader className="pb-3">
                    <CardTitle className="flex items-center gap-2 text-emerald-600 dark:text-emerald-400">
                      <span className="h-2 w-2 rounded-full bg-emerald-500" />
                      {skill.category}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-wrap gap-2">
                      {skill.items.map((item) => (
                        <Badge key={item} variant="secondary">
                          {item}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </section>

      {/* Featured Projects Section */}
      <section className="mx-auto max-w-6xl px-4 py-24 sm:px-6">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="space-y-12"
        >
          <div className="flex items-end justify-between">
            <div className="space-y-4">
              <h2 className="text-3xl font-bold sm:text-4xl">
                <span className="gradient-text">Featured Projects</span>
              </h2>
              <p className="max-w-2xl text-zinc-600 dark:text-zinc-400">
                A selection of my work in blockchain development and DeFi protocols.
              </p>
            </div>
            <Button variant="ghost" asChild className="hidden sm:flex">
              <Link href="/projects">
                View All
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>

          <motion.div
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="grid gap-6 lg:grid-cols-3"
          >
            {featuredProjects.map((project) => (
              <motion.div key={project.title} variants={item}>
                <Card className="group h-full transition-all duration-300 hover:scale-[1.02]">
                  <CardHeader>
                    <div className="flex items-start justify-between">
                      <div className="rounded-lg bg-emerald-500/10 p-2 text-emerald-500">
                        <project.icon className="h-5 w-5" />
                      </div>
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-zinc-400 transition-colors hover:text-zinc-100"
                      >
                        <Github className="h-5 w-5" />
                      </a>
                    </div>
                    <CardTitle className="group-hover:text-emerald-400 transition-colors">
                      {project.title}
                    </CardTitle>
                    <CardDescription>{project.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-wrap gap-2">
                      {project.tech.map((tech) => (
                        <Badge key={tech} variant="outline" className="text-xs">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>

          <div className="text-center sm:hidden">
            <Button variant="outline" asChild>
              <Link href="/projects">
                View All Projects
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </motion.div>
      </section>

      {/* CTA Section */}
      <section className="mx-auto max-w-6xl px-4 py-24 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative overflow-hidden rounded-2xl bg-gradient-to-r from-emerald-500/10 via-cyan-500/10 to-purple-500/10 p-8 sm:p-12"
        >
          <div className="absolute inset-0 bg-grid opacity-50" />
          <div className="relative space-y-6 text-center">
            <h2 className="text-2xl font-bold sm:text-3xl">
              Let&apos;s Build Something Amazing Together
            </h2>
            <p className="mx-auto max-w-lg text-zinc-600 dark:text-zinc-400">
              Interested in collaborating on blockchain projects or DeFi protocols? 
              I&apos;m always open to discussing new ideas.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button asChild>
                <a href="mailto:jeevanr2431@gmail.com">
                  Get in Touch
                  <ExternalLink className="ml-2 h-4 w-4" />
                </a>
              </Button>
              <Button variant="outline" asChild>
                <a href="https://github.com/jeevan4476" target="_blank" rel="noopener noreferrer">
                  <Github className="mr-2 h-4 w-4" />
                  Follow on GitHub
                </a>
              </Button>
            </div>
          </div>
        </motion.div>
      </section>
    </div>
  );
}

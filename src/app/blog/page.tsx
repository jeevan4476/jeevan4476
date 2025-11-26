"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Calendar, Clock, ArrowRight, Tag, Rss, Search } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

const blogPosts = [
  {
    title: "Building Decentralized Insurance on Solana",
    description: "A deep dive into the architecture of StableGuard, exploring how we built a trustless insurance protocol for stablecoin depegging events using Anchor and Pyth oracles.",
    date: "2024-12-15",
    readTime: "12 min read",
    tags: ["Solana", "DeFi", "Rust", "Anchor"],
    slug: "building-decentralized-insurance-solana",
    featured: true,
  },
  {
    title: "Understanding Sparse Merkle Trees",
    description: "An exploration of Sparse Merkle Trees, their applications in blockchain, and how to implement an efficient version in Rust for state proofs.",
    date: "2024-11-28",
    readTime: "8 min read",
    tags: ["Cryptography", "Rust", "Data Structures"],
    slug: "understanding-sparse-merkle-trees",
  },
  {
    title: "Optimizing Solana Programs with Pinocchio",
    description: "How to write highly optimized Solana programs using the Pinocchio framework, reducing compute units and improving transaction throughput.",
    date: "2024-11-15",
    readTime: "10 min read",
    tags: ["Solana", "Rust", "Performance"],
    slug: "optimizing-solana-programs-pinocchio",
  },
  {
    title: "Cross-Chain Bridges: A Technical Overview",
    description: "Understanding the architecture of cross-chain bridges, common security pitfalls, and best practices for building secure bridge protocols.",
    date: "2024-10-30",
    readTime: "15 min read",
    tags: ["Ethereum", "Bridges", "Security"],
    slug: "cross-chain-bridges-technical-overview",
  },
  {
    title: "Introduction to Anchor Framework",
    description: "A beginner's guide to building Solana programs with the Anchor framework, covering PDAs, CPIs, and common patterns.",
    date: "2024-10-15",
    readTime: "6 min read",
    tags: ["Solana", "Anchor", "Tutorial"],
    slug: "introduction-to-anchor-framework",
  },
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

export default function BlogPage() {
  const featuredPost = blogPosts.find((post) => post.featured);
  const regularPosts = blogPosts.filter((post) => !post.featured);

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
          <div className="flex items-center justify-between">
            <h1 className="text-4xl font-bold sm:text-5xl">
              <span className="gradient-text">Blog</span>
            </h1>
            <Button variant="outline" size="sm">
              <Rss className="mr-2 h-4 w-4" />
              RSS Feed
            </Button>
          </div>
          <p className="max-w-2xl text-lg text-zinc-600 dark:text-zinc-400">
            Thoughts on blockchain development, DeFi protocols, and the future of decentralized systems.
            All posts are also available as raw MDX for LLM consumption.
          </p>
        </motion.div>

        {/* Search */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="mb-12"
        >
          <div className="relative max-w-md">
            <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-zinc-400" />
            <input
              type="text"
              placeholder="Search articles..."
              className="w-full rounded-lg border border-zinc-800 bg-zinc-900/50 py-2 pl-10 pr-4 text-sm text-zinc-100 placeholder-zinc-500 focus:border-emerald-500 focus:outline-none focus:ring-1 focus:ring-emerald-500"
            />
          </div>
        </motion.div>

        {/* Featured Post */}
        {featuredPost && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="mb-12"
          >
            <Card className="group overflow-hidden border-emerald-500/30 transition-all duration-300 hover:scale-[1.01]">
              <div className="p-8 sm:p-10">
                <div className="flex flex-wrap items-center gap-3 mb-4">
                  <Badge className="animate-pulse-glow">Featured</Badge>
                  <span className="flex items-center gap-1 text-sm text-zinc-400">
                    <Calendar className="h-4 w-4" />
                    {new Date(featuredPost.date).toLocaleDateString("en-US", {
                      year: "numeric",
                      month: "long",
                      day: "numeric",
                    })}
                  </span>
                  <span className="flex items-center gap-1 text-sm text-zinc-400">
                    <Clock className="h-4 w-4" />
                    {featuredPost.readTime}
                  </span>
                </div>
                <h2 className="text-2xl font-bold mb-3 group-hover:text-emerald-400 transition-colors sm:text-3xl">
                  {featuredPost.title}
                </h2>
                <p className="text-zinc-400 mb-6 leading-relaxed">
                  {featuredPost.description}
                </p>
                <div className="flex flex-wrap items-center justify-between gap-4">
                  <div className="flex flex-wrap gap-2">
                    {featuredPost.tags.map((tag) => (
                      <Badge key={tag} variant="outline" className="text-xs">
                        <Tag className="mr-1 h-3 w-3" />
                        {tag}
                      </Badge>
                    ))}
                  </div>
                  <Button asChild>
                    <Link href={`/blog/${featuredPost.slug}`}>
                      Read Article
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </div>
              </div>
            </Card>
          </motion.div>
        )}

        {/* Regular Posts */}
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="grid gap-6 md:grid-cols-2"
        >
          {regularPosts.map((post) => (
            <motion.div key={post.slug} variants={item}>
              <Card className="group h-full transition-all duration-300 hover:scale-[1.02]">
                <CardHeader>
                  <div className="flex items-center gap-3 text-sm text-zinc-400 mb-2">
                    <span className="flex items-center gap-1">
                      <Calendar className="h-3.5 w-3.5" />
                      {new Date(post.date).toLocaleDateString("en-US", {
                        year: "numeric",
                        month: "short",
                        day: "numeric",
                      })}
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock className="h-3.5 w-3.5" />
                      {post.readTime}
                    </span>
                  </div>
                  <CardTitle className="group-hover:text-emerald-400 transition-colors">
                    {post.title}
                  </CardTitle>
                  <CardDescription className="line-clamp-2">
                    {post.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {post.tags.slice(0, 3).map((tag) => (
                      <Badge key={tag} variant="secondary" className="text-xs">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                  <Link
                    href={`/blog/${post.slug}`}
                    className="inline-flex items-center text-sm text-emerald-400 hover:text-emerald-300 transition-colors"
                  >
                    Read more
                    <ArrowRight className="ml-1 h-3 w-3" />
                  </Link>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        {/* Load More */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="mt-12 text-center"
        >
          <Button variant="outline">Load More Articles</Button>
        </motion.div>
      </div>
    </div>
  );
}

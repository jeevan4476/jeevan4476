"use client";

import { useState, useEffect } from "react";

const projects = [
  {
    title: "StableGuard",
    description: "Decentralized insurance protocol on Solana for hedging against stablecoin depegging events. Features dynamic premiums, Pyth oracle integration, and automated payouts.",
    tech: ["Rust", "Anchor", "Solana", "Pyth Network", "TypeScript"],
    github: "https://github.com/jeevan4476/StableGuard",
    featured: true,
  },
  {
    title: "OneWay Bridge",
    description: "Cross-chain bridge implementation for secure asset transfers between blockchain networks.",
    tech: ["Solidity", "EVM", "Smart Contracts"],
    github: "https://github.com/jeevan4476/OneWay-Bridge",
  },
  {
    title: "Pinocchio Escrow",
    description: "Native Rust escrow program on Solana using the Pinocchio framework for optimized performance.",
    tech: ["Rust", "Pinocchio", "Solana"],
    github: "https://github.com/jeevan4476/Pinocchio-Escrow",
  },
  {
    title: "Aave Lottery",
    description: "DeFi lottery system integrating with Aave protocol for yield-bearing prize pools.",
    tech: ["Solidity", "Aave", "DeFi"],
    github: "https://github.com/jeevan4476/Aave-Lottery",
  },
  {
    title: "Vote",
    description: "Decentralized polling application built on Solana with a Next.js frontend.",
    tech: ["Anchor", "Rust", "Next.js", "TypeScript"],
    github: "https://github.com/jeevan4476/Vote_",
    demo: "https://vote-jgfh.vercel.app/",
  },
  {
    title: "Sparse Merkle Tree",
    description: "Efficient Sparse Merkle Tree implementation in Rust with comprehensive benchmarking.",
    tech: ["Rust", "Cryptography", "Data Structures"],
    github: "https://github.com/jeevan4476/Sparse-Merkle-Tree",
  },
];

const skills = {
  "Languages": ["Rust", "Solidity", "TypeScript", "JavaScript", "Python", "C/C++"],
  "Blockchain": ["Solana", "Ethereum", "Anchor", "Foundry", "Pinocchio"],
  "Web3": ["DeFi Protocols", "Smart Contracts", "ERC20/721", "SPL Tokens", "IPFS"],
  "Frontend": ["React", "Next.js", "TailwindCSS", "Ethers.js", "Web3.js"],
  "Tools": ["Git", "Linux", "Docker", "Vercel", "Alchemy"],
};

const socialLinks = [
  { name: "GitHub", url: "https://github.com/jeevan4476", icon: "github" },
  { name: "Twitter", url: "https://x.com/_Jeevan_R", icon: "twitter" },
  { name: "LinkedIn", url: "https://www.linkedin.com/in/RJeevan-", icon: "linkedin" },
  { name: "Email", url: "mailto:jeevanr2431@gmail.com", icon: "email" },
];

function GithubIcon() {
  return (
    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
      <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
    </svg>
  );
}

function TwitterIcon() {
  return (
    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  );
}

function LinkedInIcon() {
  return (
    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  );
}

function EmailIcon() {
  return (
    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
    </svg>
  );
}

function ExternalLinkIcon() {
  return (
    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
    </svg>
  );
}

function ArrowIcon() {
  return (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
    </svg>
  );
}

export default function Home() {
  const [activeSection, setActiveSection] = useState("about");
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
    
    const handleScroll = () => {
      const sections = ["about", "skills", "projects"];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const height = element.offsetHeight;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const getIcon = (icon: string) => {
    switch (icon) {
      case "github": return <GithubIcon />;
      case "twitter": return <TwitterIcon />;
      case "linkedin": return <LinkedInIcon />;
      case "email": return <EmailIcon />;
      default: return null;
    }
  };

  return (
    <div className="min-h-screen bg-[#0a0a0f] bg-grid">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-[#0a0a0f]/80 backdrop-blur-md border-b border-[#1f1f2e]">
        <div className="max-w-6xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <a href="#" className="text-2xl font-bold gradient-text font-mono">
              JEEVAN
            </a>
            <div className="flex items-center gap-8">
              {["about", "skills", "projects"].map((section) => (
                <a
                  key={section}
                  href={`#${section}`}
                  className={`text-sm font-medium uppercase tracking-wider transition-colors duration-300 ${
                    activeSection === section
                      ? "text-[#14f195]"
                      : "text-gray-400 hover:text-white"
                  }`}
                >
                  {section}
                </a>
              ))}
            </div>
          </div>
        </div>
      </nav>

      <main className="max-w-6xl mx-auto px-6">
        {/* Hero Section */}
        <section
          id="about"
          className={`min-h-screen flex flex-col justify-center pt-20 transition-opacity duration-1000 ${
            isVisible ? "opacity-100" : "opacity-0"
          }`}
        >
          <div className="space-y-6">
            <div className="inline-block px-4 py-2 rounded-full border border-[#14f195]/30 bg-[#14f195]/5 text-[#14f195] text-sm font-medium animate-pulse-glow">
              🔗 Building the Future of DeFi
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold leading-tight">
              <span className="text-white">gm! i&apos;m </span>
              <span className="gradient-text">jeevan</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-400 max-w-2xl leading-relaxed">
              A software engineer passionate about{" "}
              <span className="text-[#14f195]">blockchain</span> and{" "}
              <span className="text-[#9945ff]">distributed systems</span>.
            </p>

            <div className="pt-4 space-y-4">
              <p className="text-gray-300 text-lg max-w-2xl leading-relaxed">
                Currently immersed in the world of blockchain technology, with a particular fascination for{" "}
                <span className="code-block text-[#14f195]">DeFi</span> protocols and{" "}
                <span className="code-block text-[#9945ff]">Stablecoins</span>. 
                My focus lies in understanding how these technologies can create more efficient and accessible financial systems.
              </p>
              
              <p className="text-gray-400 leading-relaxed">
                I specialize in building on <span className="text-[#14f195] font-medium">Solana</span> using{" "}
                <span className="text-[#ff6b00] font-medium">Rust</span> and the{" "}
                <span className="text-[#9945ff] font-medium">Anchor</span> framework.
              </p>
            </div>

            <div className="flex items-center gap-6 pt-6">
              {socialLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-[#14f195] transition-all duration-300 hover:scale-110 hover:-translate-y-1"
                  aria-label={link.name}
                >
                  {getIcon(link.icon)}
                </a>
              ))}
            </div>

            <div className="pt-8">
              <a
                href="#projects"
                className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-[#14f195] to-[#9945ff] text-black font-semibold rounded-lg hover:opacity-90 transition-all duration-300 hover:gap-4"
              >
                View My Work
                <ArrowIcon />
              </a>
            </div>
          </div>

          {/* Scroll indicator */}
          <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
            <div className="w-6 h-10 border-2 border-gray-600 rounded-full flex justify-center pt-2">
              <div className="w-1.5 h-3 bg-[#14f195] rounded-full animate-pulse" />
            </div>
          </div>
        </section>

        {/* Skills Section */}
        <section id="skills" className="py-32">
          <div className="space-y-12">
            <div className="space-y-4">
              <h2 className="text-4xl md:text-5xl font-bold">
                <span className="gradient-text">Skills</span>
              </h2>
              <p className="text-gray-400 text-lg max-w-2xl">
                Technologies and tools I use to build decentralized applications and smart contracts.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {Object.entries(skills).map(([category, items], index) => (
                <div
                  key={category}
                  className="gradient-border p-6 space-y-4 animate-fade-in-up"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <h3 className="text-lg font-semibold text-[#14f195] flex items-center gap-2">
                    <span className="w-2 h-2 bg-[#14f195] rounded-full" />
                    {category}
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {items.map((skill) => (
                      <span
                        key={skill}
                        className="px-3 py-1 text-sm bg-[#1f1f2e] text-gray-300 rounded-md hover:bg-[#14f195]/10 hover:text-[#14f195] transition-colors duration-300 cursor-default"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="py-32">
          <div className="space-y-12">
            <div className="space-y-4">
              <h2 className="text-4xl md:text-5xl font-bold">
                <span className="gradient-text">Projects</span>
              </h2>
              <p className="text-gray-400 text-lg max-w-2xl">
                A selection of my work in blockchain development, DeFi protocols, and smart contracts.
              </p>
            </div>

            <div className="grid gap-6">
              {projects.map((project, index) => (
                <div
                  key={project.title}
                  className={`gradient-border p-6 md:p-8 space-y-4 group hover:scale-[1.01] transition-transform duration-300 animate-fade-in-up ${
                    project.featured ? "md:col-span-2" : ""
                  }`}
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="flex items-start justify-between gap-4">
                    <div className="space-y-2">
                      <div className="flex items-center gap-3">
                        <h3 className="text-xl md:text-2xl font-bold text-white group-hover:text-[#14f195] transition-colors">
                          {project.title}
                        </h3>
                        {project.featured && (
                          <span className="px-2 py-0.5 text-xs bg-[#14f195]/20 text-[#14f195] rounded-full">
                            Featured
                          </span>
                        )}
                      </div>
                      <p className="text-gray-400 leading-relaxed">
                        {project.description}
                      </p>
                    </div>
                    <div className="flex gap-3 shrink-0">
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-400 hover:text-white transition-colors"
                        aria-label="GitHub"
                      >
                        <GithubIcon />
                      </a>
                      {project.demo && (
                        <a
                          href={project.demo}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-gray-400 hover:text-[#14f195] transition-colors"
                          aria-label="Live Demo"
                        >
                          <ExternalLinkIcon />
                        </a>
                      )}
                    </div>
                  </div>
                  <div className="flex flex-wrap gap-2 pt-2">
                    {project.tech.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 text-sm bg-[#1f1f2e] text-[#14f195] rounded-md font-mono"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            <div className="text-center pt-8">
              <a
                href="https://github.com/jeevan4476"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-gray-400 hover:text-[#14f195] transition-colors"
              >
                View all projects on GitHub
                <ArrowIcon />
              </a>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t border-[#1f1f2e] py-12">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-6">
              {socialLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-500 hover:text-[#14f195] transition-colors"
                  aria-label={link.name}
                >
                  {getIcon(link.icon)}
                </a>
              ))}
            </div>
            <p className="text-gray-500 text-sm">
              Built with{" "}
              <span className="text-[#14f195]">Next.js</span> &{" "}
              <span className="text-[#9945ff]">Tailwind</span>
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

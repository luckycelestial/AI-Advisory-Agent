"use client";

import { useState, useEffect } from "react";
import { LuBrainCircuit } from "react-icons/lu";

import { useRouter } from "next/navigation";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/80 dark:bg-slate-900/80 backdrop-blur-md border-b border-border-subtle py-4 shadow-sm"
          : "bg-transparent py-6"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-3 cursor-pointer" onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>
          <div className="h-10 w-10 rounded-xl bg-primary flex items-center justify-center text-white shadow-md shadow-primary/20">
            <LuBrainCircuit size={22} className="animate-pulse" />
          </div>
          <span className="font-display text-xl font-bold tracking-tight text-foreground">
            AI Advisory <span className="text-primary font-black">Agent</span>
          </span>
        </div>

        {/* Navigation Links */}
        <div className="hidden md:flex items-center gap-8">
          <button
            onClick={() => scrollToSection("how-it-works")}
            className="text-sm font-semibold text-foreground/70 hover:text-primary transition-colors cursor-pointer"
          >
            How It Works
          </button>
          <button
            onClick={() => scrollToSection("features")}
            className="text-sm font-semibold text-foreground/70 hover:text-primary transition-colors cursor-pointer"
          >
            Features
          </button>
          <button
            onClick={() => scrollToSection("faq")}
            className="text-sm font-semibold text-foreground/70 hover:text-primary transition-colors cursor-pointer"
          >
            FAQ
          </button>
        </div>

        {/* Right CTA Area */}
        <div className="flex items-center gap-6">
          <button 
            onClick={() => router.push("/pricing-agent")}
            className="text-sm font-bold text-foreground/70 hover:text-primary transition-colors cursor-pointer"
          >
            Login
          </button>
          <button
            onClick={() => router.push("/pricing-agent")}
            className="btn-primary py-2.5 px-6 text-xs cursor-pointer"
          >
            Try Demo
          </button>
        </div>
      </div>
    </nav>
  );
}

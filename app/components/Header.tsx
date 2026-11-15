"use client";

import { useState } from "react";

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const scrollToSection = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string,
  ) => {
    e.preventDefault();
    setIsMobileMenuOpen(false);

    const targetElement = document.querySelector(href);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header className="sticky top-0 z-50 bg-slate-950/80 backdrop-blur-md border-b border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        {/* Logo */}
        <a href="#" className="flex items-center gap-2">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-emerald-500 to-teal-400 flex items-center justify-center text-slate-950 font-black text-xl shadow-lg shadow-emerald-500/20">
            ☀️
          </div>
          <span className="text-white font-extrabold text-xl tracking-tight">
            Forte<span className="text-emerald-400">Solar</span>
          </span>
        </a>

        {/* Desktop Nav Links */}
        <nav className="hidden md:flex items-center gap-8 text-sm font-semibold text-slate-300">
          <a
            href="#estimator"
            onClick={(e) => scrollToSection(e, "#estimator")}
            className="hover:text-emerald-400 transition-colors cursor-pointer"
          >
            Calculator
          </a>
          <a
            href="#comparison"
            onClick={(e) => scrollToSection(e, "#comparison")}
            className="hover:text-emerald-400 transition-colors cursor-pointer"
          >
            Savings
          </a>
          <a
            href="#faq"
            onClick={(e) => scrollToSection(e, "#faq")}
            className="hover:text-emerald-400 transition-colors cursor-pointer"
          >
            FAQ
          </a>
        </nav>

        {/* CTA Button */}
        <div className="hidden md:block">
          <a
            href="#estimator"
            onClick={(e) => scrollToSection(e, "#estimator")}
            className="bg-emerald-500 hover:bg-emerald-600 text-slate-950 font-bold px-5 py-2.5 rounded-xl transition-all shadow-lg shadow-emerald-500/10 text-sm cursor-pointer"
          >
            Get Free Estimate
          </a>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          type="button"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="md:hidden text-slate-300 hover:text-white p-2 cursor-pointer"
        >
          {isMobileMenuOpen ? "✕" : "☰"}
        </button>
      </div>

      {/* Mobile Dropdown */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-slate-900 border-b border-slate-800 px-6 py-4 space-y-4">
          <a
            href="#estimator"
            onClick={(e) => scrollToSection(e, "#estimator")}
            className="block text-slate-300 hover:text-emerald-400 font-medium cursor-pointer"
          >
            Calculator
          </a>
          <a
            href="#comparison"
            onClick={(e) => scrollToSection(e, "#comparison")}
            className="block text-slate-300 hover:text-emerald-400 font-medium cursor-pointer"
          >
            Savings
          </a>
          <a
            href="#faq"
            onClick={(e) => scrollToSection(e, "#faq")}
            className="block text-slate-300 hover:text-emerald-400 font-medium cursor-pointer"
          >
            FAQ
          </a>
          <a
            href="#estimator"
            onClick={(e) => scrollToSection(e, "#estimator")}
            className="block w-full text-center bg-emerald-500 text-slate-950 font-bold py-3 rounded-xl mt-2 cursor-pointer"
          >
            Get Free Estimate
          </a>
        </div>
      )}
    </header>
  );
}

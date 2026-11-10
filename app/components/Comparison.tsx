"use client";

import { useState } from "react";

export default function Comparison() {
  const [viewMode, setViewMode] = useState<"traditional" | "solar">("solar");

  return (
    <section id="comparison" className="py-24 bg-slate-900 text-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-emerald-400 font-semibold text-sm uppercase tracking-widest bg-emerald-500/10 px-3 py-1 rounded-full border border-emerald-500/20">
            Financial Impact
          </span>
          <h2 className="text-3xl sm:text-5xl font-extrabold mt-4 mb-4">
            The Cost of Waiting vs. Going Solar
          </h2>
          <p className="text-slate-400 text-lg">
            Utility companies raise rates an average of 5% every year. Solar
            locks in your energy rate for decades.
          </p>
        </div>

        {/* Interactive Toggle */}
        <div className="flex justify-center mb-12">
          <div className="bg-slate-950 p-1.5 rounded-2xl border border-slate-800 flex gap-2">
            <button
              onClick={() => setViewMode("traditional")}
              className={`px-6 py-3 rounded-xl font-bold text-sm transition-all cursor-pointer ${
                viewMode === "traditional"
                  ? "bg-red-500/20 text-red-400 border border-red-500/30 shadow-lg"
                  : "text-slate-400 hover:text-white"
              }`}
            >
              Without Solar (Utility Grid)
            </button>
            <button
              onClick={() => setViewMode("solar")}
              className={`px-6 py-3 rounded-xl font-bold text-sm transition-all cursor-pointer ${
                viewMode === "solar"
                  ? "bg-emerald-500 text-slate-950 shadow-lg shadow-emerald-500/20"
                  : "text-slate-400 hover:text-white"
              }`}
            >
              With Forte Solar
            </button>
          </div>
        </div>

        {/* Comparison Grid */}
        <div className="grid md:grid-cols-2 gap-8 items-center max-w-5xl mx-auto">
          {/* Traditional Card */}
          <div
            className={`p-8 rounded-3xl border transition-all ${
              viewMode === "traditional"
                ? "bg-slate-950 border-red-500/50 shadow-2xl shadow-red-500/10 scale-105"
                : "bg-slate-950/50 border-slate-800 opacity-70"
            }`}
          >
            <div className="text-red-400 font-bold text-sm tracking-widest uppercase mb-2">
              Unpredictable Costs
            </div>
            <h3 className="text-2xl font-bold mb-4">The Utility Trap</h3>
            <div className="text-4xl font-black text-red-400 mb-6">
              $350+{" "}
              <span className="text-sm font-normal text-slate-400">
                / month avg.
              </span>
            </div>

            <ul className="space-y-4 text-slate-300 text-sm">
              <li className="flex items-center gap-3">
                <span className="text-red-400 font-bold">✕</span> Subject to
                annual utility rate hikes (5-8%)
              </li>
              <li className="flex items-center gap-3">
                <span className="text-red-400 font-bold">✕</span> Zero equity or
                return on money paid
              </li>
              <li className="flex items-center gap-3">
                <span className="text-red-400 font-bold">✕</span> Vulnerable to
                grid outages and blackouts
              </li>
              <li className="flex items-center gap-3">
                <span className="text-red-400 font-bold">✕</span> Estimated
                25-year total spend:{" "}
                <strong className="text-white">$135,000+</strong>
              </li>
            </ul>
          </div>

          {/* Solar Card */}
          <div
            className={`p-8 rounded-3xl border transition-all ${
              viewMode === "solar"
                ? "bg-slate-950 border-emerald-500 shadow-2xl shadow-emerald-500/10 scale-105"
                : "bg-slate-950/50 border-slate-800 opacity-70"
            }`}
          >
            <div className="text-emerald-400 font-bold text-sm tracking-widest uppercase mb-2">
              Energy Independence
            </div>
            <h3 className="text-2xl font-bold mb-4">
              The Forte Solar Advantage
            </h3>
            <div className="text-4xl font-black text-emerald-400 mb-6">
              $45{" "}
              <span className="text-sm font-normal text-slate-400">
                / month avg.
              </span>
            </div>

            <ul className="space-y-4 text-slate-300 text-sm">
              <li className="flex items-center gap-3">
                <span className="text-emerald-400 font-bold">✓</span> Locked-in
                rate protected from inflation
              </li>
              <li className="flex items-center gap-3">
                <span className="text-emerald-400 font-bold">✓</span> Includes
                30% Federal Tax Credit savings
              </li>
              <li className="flex items-center gap-3">
                <span className="text-emerald-400 font-bold">✓</span> Increases
                immediate home equity value
              </li>
              <li className="flex items-center gap-3">
                <span className="text-emerald-400 font-bold">✓</span> Estimated
                25-year total savings:{" "}
                <strong className="text-emerald-400">$54,000+</strong>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

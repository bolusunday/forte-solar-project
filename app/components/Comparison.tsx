"use client";

import { useState } from "react";

export default function Comparison() {
  const [viewMode, setViewMode] = useState<"traditional" | "solar">("solar");

  return (
    <section
      id="comparison"
      className="py-16 sm:py-24 bg-slate-900 text-white relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <span className="text-emerald-400 font-semibold text-xs sm:text-sm uppercase tracking-widest bg-emerald-500/10 px-3 py-1 rounded-full border border-emerald-500/20">
            Financial Impact
          </span>
          <h2 className="text-2xl sm:text-5xl font-extrabold mt-4 mb-4 leading-tight">
            The Cost of Waiting vs. Going Solar
          </h2>
          <p className="text-slate-400 text-base sm:text-lg px-2">
            Utility companies raise rates an average of 5% every year. Solar
            locks in your energy rate for decades.
          </p>
        </div>

        {/* Interactive Toggle */}
        <div className="flex justify-center mb-10 sm:mb-12">
          <div className="bg-slate-950 p-1.5 rounded-2xl border border-slate-800 flex gap-1 sm:gap-2 w-full max-w-md">
            <button
              onClick={() => setViewMode("traditional")}
              className={`flex-1 py-3 px-3 rounded-xl font-bold text-xs sm:text-sm transition-all cursor-pointer text-center ${
                viewMode === "traditional"
                  ? "bg-red-500/20 text-red-400 border border-red-500/30 shadow-lg"
                  : "text-slate-400 hover:text-white"
              }`}
            >
              Without Solar
            </button>
            <button
              onClick={() => setViewMode("solar")}
              className={`flex-1 py-3 px-3 rounded-xl font-bold text-xs sm:text-sm transition-all cursor-pointer text-center ${
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
        <div className="grid md:grid-cols-2 gap-6 sm:gap-8 items-center max-w-5xl mx-auto">
          {/* Traditional Card */}
          <div
            className={`p-6 sm:p-8 rounded-2xl sm:rounded-3xl border transition-all ${
              viewMode === "traditional"
                ? "bg-slate-950 border-red-500/50 shadow-2xl shadow-red-500/10 sm:scale-105"
                : "bg-slate-950/50 border-slate-800 opacity-70"
            }`}
          >
            <div className="text-red-400 font-bold text-xs sm:text-sm tracking-widest uppercase mb-2">
              Unpredictable Costs
            </div>
            <h3 className="text-xl sm:text-2xl font-bold mb-3">
              The Utility Trap
            </h3>
            <div className="text-3xl sm:text-4xl font-black text-red-400 mb-6">
              $350+{" "}
              <span className="text-xs sm:text-sm font-normal text-slate-400">
                / month avg.
              </span>
            </div>

            <ul className="space-y-3.5 sm:space-y-4 text-slate-300 text-sm">
              <li className="flex items-start gap-3">
                <span className="text-red-400 font-bold mt-0.5">✕</span>
                <span>Subject to annual utility rate hikes (5-8%)</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-red-400 font-bold mt-0.5">✕</span>
                <span>Zero equity or return on money paid</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-red-400 font-bold mt-0.5">✕</span>
                <span>Vulnerable to grid outages and blackouts</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-red-400 font-bold mt-0.5">✕</span>
                <span>
                  Estimated 25-year total spend:{" "}
                  <strong className="text-white">$135,000+</strong>
                </span>
              </li>
            </ul>
          </div>

          {/* Solar Card */}
          <div
            className={`p-6 sm:p-8 rounded-2xl sm:rounded-3xl border transition-all ${
              viewMode === "solar"
                ? "bg-slate-950 border-emerald-500 shadow-2xl shadow-emerald-500/10 sm:scale-105"
                : "bg-slate-950/50 border-slate-800 opacity-70"
            }`}
          >
            <div className="text-emerald-400 font-bold text-xs sm:text-sm tracking-widest uppercase mb-2">
              Energy Independence
            </div>
            <h3 className="text-xl sm:text-2xl font-bold mb-3">
              The Forte Solar Advantage
            </h3>
            <div className="text-3xl sm:text-4xl font-black text-emerald-400 mb-6">
              $45{" "}
              <span className="text-xs sm:text-sm font-normal text-slate-400">
                / month avg.
              </span>
            </div>

            <ul className="space-y-3.5 sm:space-y-4 text-slate-300 text-sm">
              <li className="flex items-start gap-3">
                <span className="text-emerald-400 font-bold mt-0.5">✓</span>
                <span>Locked-in rate protected from inflation</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-emerald-400 font-bold mt-0.5">✓</span>
                <span>Includes 30% Federal Tax Credit savings</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-emerald-400 font-bold mt-0.5">✓</span>
                <span>Increases immediate home equity value</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-emerald-400 font-bold mt-0.5">✓</span>
                <span>
                  Estimated 25-year total savings:{" "}
                  <strong className="text-emerald-400">$54,000+</strong>
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

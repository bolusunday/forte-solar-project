import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative bg-slate-900 text-white pt-24 pb-20 overflow-hidden">
      {/* Background Glow Effect */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-emerald-500/10 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column: Copy & CTAs */}
          <div className="space-y-6 text-center lg:text-left">
            <div className="inline-flex items-center gap-2 bg-emerald-500/10 border border-emerald-500/20 px-3 py-1 rounded-full text-emerald-400 text-sm font-medium">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              Save up to 70% on monthly energy bills
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-tight">
              Power Your Home With{" "}
              <span className="text-emerald-400">Clean Energy</span> Today.
            </h1>

            <p className="text-lg text-slate-300 max-w-xl mx-auto lg:mx-0">
              Zero-down solar installations engineered for maximum efficiency.
              Get a custom 60-second quote and lock in local tax rebates before
              they expire.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start pt-2">
              <a
                href="#estimator"
                className="inline-flex items-center justify-center bg-emerald-500 hover:bg-emerald-600 text-slate-950 font-bold px-8 py-4 rounded-xl shadow-lg shadow-emerald-500/20 transition-all transform hover:-translate-y-0.5"
              >
                Calculate My Savings →
              </a>
              <a
                href="tel:5551234567"
                className="inline-flex items-center justify-center bg-slate-800 hover:bg-slate-700 text-white font-semibold px-6 py-4 rounded-xl border border-slate-700 transition-all"
              >
                Call (555) 123-4567
              </a>
            </div>

            {/* Micro-Social Proof */}
            <div className="pt-4 flex items-center justify-center lg:justify-start gap-4 text-sm text-slate-400">
              <div className="flex -space-x-2">
                <div className="w-8 h-8 rounded-full bg-emerald-600 flex items-center justify-center text-xs font-bold text-white border-2 border-slate-900">
                  ⭐
                </div>
                <div className="w-8 h-8 rounded-full bg-emerald-500 flex items-center justify-center text-xs font-bold text-slate-950 border-2 border-slate-900">
                  4.9
                </div>
              </div>
              <p>
                Rated <strong className="text-white">4.9/5 stars</strong> across
                500+ local installations
              </p>
            </div>
          </div>

          {/* Right Column: Visual Preview / Graphic Placeholder */}
          <div className="relative mx-auto w-full max-w-md lg:max-w-none">
            <div className="aspect-video lg:aspect-square rounded-2xl bg-gradient-to-br from-slate-800 to-slate-950 border border-slate-800 p-6 shadow-2xl flex flex-col justify-between relative overflow-hidden">
              <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-emerald-500/10 via-transparent to-transparent" />

              <div className="relative z-10 flex justify-between items-center border-b border-slate-800 pb-4">
                <span className="text-xs uppercase tracking-widest text-emerald-400 font-bold">
                  Live ROI Estimator Preview
                </span>
                <span className="text-xs bg-emerald-500/20 text-emerald-300 px-2.5 py-1 rounded-md">
                  Instant Results
                </span>
              </div>

              <div className="relative z-10 space-y-4 my-auto">
                <div className="bg-slate-900/80 p-4 rounded-xl border border-slate-800">
                  <div className="text-xs text-slate-400">
                    Estimated 25-Year Savings
                  </div>
                  <div className="text-3xl font-black text-emerald-400">
                    $34,250
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-3">
                  <div className="bg-slate-900/80 p-3 rounded-xl border border-slate-800">
                    <div className="text-xs text-slate-400">
                      Federal Tax Credit
                    </div>
                    <div className="text-lg font-bold text-white">30% Off</div>
                  </div>
                  <div className="bg-slate-900/80 p-3 rounded-xl border border-slate-800">
                    <div className="text-xs text-slate-400">Payback Period</div>
                    <div className="text-lg font-bold text-white">
                      4.2 Years
                    </div>
                  </div>
                </div>
              </div>

              <div className="relative z-10 text-xs text-slate-500 text-center">
                Interactive widget loading in next section...
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

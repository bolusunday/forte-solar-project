import Image from "next/image";

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
                className="inline-flex items-center justify-center bg-emerald-500 hover:bg-emerald-600 text-slate-950 font-bold px-8 py-4 rounded-xl shadow-lg shadow-emerald-500/20 transition-all transform hover:-translate-y-0.5 cursor-pointer"
              >
                Calculate My Savings →
              </a>
              <a
                href="tel:5551234567"
                className="inline-flex items-center justify-center bg-slate-800 hover:bg-slate-700 text-white font-semibold px-6 py-4 rounded-xl border border-slate-700 transition-all cursor-pointer"
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

          {/* Right Column: Real Photo with Floating Badge */}
          <div className="relative mx-auto w-full max-w-md lg:max-w-none">
            <div className="relative rounded-3xl overflow-hidden border border-slate-800 bg-slate-950 shadow-2xl p-2">
              <div className="rounded-2xl overflow-hidden aspect-video lg:aspect-4/3 relative bg-slate-900">
                <Image
                  src="/images/solar-home.webp"
                  alt="Modern home with integrated solar panel architecture"
                  fill
                  priority
                  className="object-cover hover:scale-105 transition-transform duration-700"
                />
              </div>

              {/* Floating ROI Stat Badge */}
              <div className="absolute bottom-6 left-6 bg-slate-900/90 backdrop-blur-md border border-slate-800/80 p-4 rounded-2xl shadow-2xl">
                <div className="text-xs text-slate-400 uppercase tracking-wider font-semibold">
                  Average 25-Year Return
                </div>
                <div className="text-2xl font-black text-emerald-400">
                  $54,200 Saved
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

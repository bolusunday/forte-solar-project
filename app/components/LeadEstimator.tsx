"use client";

import { useState } from "react";

type RoofType = "shingle" | "tile" | "metal" | "flat";
type BillRange = "100-200" | "200-400" | "400+";

export default function LeadEstimator() {
  const [step, setStep] = useState<number>(1);
  const [isSubmitted, setIsSubmitted] = useState<boolean>(false);

  const [roofType, setRoofType] = useState<RoofType>("shingle");
  const [monthlyBill, setMonthlyBill] = useState<BillRange>("200-400");

  const [fullName, setFullName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [phone, setPhone] = useState<string>("");
  const [zipCode, setZipCode] = useState<string>("");

  const getSavings = () => {
    switch (monthlyBill) {
      case "100-200":
        return { monthly: "$140", twentyFiveYear: "$28,500" };
      case "200-400":
        return { monthly: "$290", twentyFiveYear: "$54,200" };
      case "400+":
        return { monthly: "$480", twentyFiveYear: "$89,000" };
      default:
        return { monthly: "$290", twentyFiveYear: "$54,200" };
    }
  };

  const savings = getSavings();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
  };

  return (
    <section id="estimator" className="py-24 bg-slate-950 text-white relative">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <span className="text-emerald-400 font-semibold text-sm uppercase tracking-widest bg-emerald-500/10 px-3 py-1 rounded-full border border-emerald-500/20">
            Interactive Lead Funnel
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold mt-4 mb-3">
            Calculate Your Custom Solar Estimate
          </h2>
          <p className="text-slate-400">
            Takes less than 60 seconds. See your projected 25-year savings
            instantly.
          </p>
        </div>

        <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 sm:p-10 shadow-2xl relative overflow-hidden">
          {!isSubmitted && (
            <div className="mb-8">
              <div className="flex justify-between text-xs font-semibold uppercase tracking-wider text-slate-400 mb-2">
                <span>Step {step} of 3</span>
                <span>
                  {step === 1
                    ? "Roof Type"
                    : step === 2
                      ? "Energy Bill"
                      : "Instant Estimate & Contact"}
                </span>
              </div>
              <div className="w-full bg-slate-800 h-2 rounded-full overflow-hidden">
                <div
                  className="bg-emerald-500 h-full transition-all duration-300"
                  style={{ width: `${(step / 3) * 100}%` }}
                />
              </div>
            </div>
          )}

          {isSubmitted ? (
            <div className="text-center py-12 space-y-6">
              <div className="w-16 h-16 bg-emerald-500/20 text-emerald-400 rounded-full flex items-center justify-center mx-auto text-3xl">
                ✓
              </div>
              <h3 className="text-2xl font-bold">
                Your Estimate is Ready, {fullName}!
              </h3>
              <p className="text-slate-300 max-w-md mx-auto">
                We've sent your breakdown to{" "}
                <span className="text-emerald-400">{email}</span>. A local
                specialist will review your roof for zip code{" "}
                <span className="text-white font-semibold">{zipCode}</span>.
              </p>
              <div className="bg-slate-950 p-6 rounded-2xl border border-slate-800 max-w-sm mx-auto">
                <div className="text-xs text-slate-400">
                  Projected 25-Year Savings
                </div>
                <div className="text-4xl font-black text-emerald-400 my-1">
                  {savings.twentyFiveYear}
                </div>
                <div className="text-xs text-slate-500">
                  Includes 30% Federal Tax Credit
                </div>
              </div>
              <button
                onClick={() => {
                  setIsSubmitted(false);
                  setStep(1);
                }}
                className="text-sm text-slate-400 hover:text-white underline pt-4 cursor-pointer"
              >
                Reset Calculator
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit}>
              {step === 1 && (
                <div className="space-y-6">
                  <h3 className="text-xl font-bold">
                    What type of roof do you have?
                  </h3>
                  <div className="grid grid-cols-2 gap-4">
                    {[
                      { id: "shingle", label: "Asphalt Shingle", icon: "🏠" },
                      { id: "tile", label: "Clay / Concrete Tile", icon: "🏛️" },
                      { id: "metal", label: "Standing Seam Metal", icon: "⚡" },
                      { id: "flat", label: "Flat Roof", icon: "🏢" },
                    ].map((item) => (
                      <button
                        key={item.id}
                        type="button"
                        onClick={() => setRoofType(item.id as RoofType)}
                        className={`p-5 rounded-2xl border text-left transition-all flex flex-col gap-2 cursor-pointer ${
                          roofType === item.id
                            ? "bg-emerald-500/10 border-emerald-500 text-white shadow-lg shadow-emerald-500/10"
                            : "bg-slate-800/50 border-slate-700/60 text-slate-300 hover:border-slate-600"
                        }`}
                      >
                        <span className="text-2xl">{item.icon}</span>
                        <span className="font-semibold">{item.label}</span>
                      </button>
                    ))}
                  </div>

                  <div className="flex justify-end pt-4">
                    <button
                      type="button"
                      onClick={() => setStep(2)}
                      className="bg-emerald-500 hover:bg-emerald-600 text-slate-950 font-bold px-8 py-3 rounded-xl transition-all cursor-pointer"
                    >
                      Next Step →
                    </button>
                  </div>
                </div>
              )}

              {step === 2 && (
                <div className="space-y-6">
                  <h3 className="text-xl font-bold">
                    What is your average monthly electric bill?
                  </h3>
                  <div className="space-y-3">
                    {[
                      { id: "100-200", label: "$100 - $200 per month" },
                      { id: "200-400", label: "$200 - $400 per month" },
                      { id: "400+", label: "$400+ per month (High Usage)" },
                    ].map((item) => (
                      <button
                        key={item.id}
                        type="button"
                        onClick={() => setMonthlyBill(item.id as BillRange)}
                        className={`w-full p-4 rounded-2xl border text-left transition-all flex items-center justify-between cursor-pointer ${
                          monthlyBill === item.id
                            ? "bg-emerald-500/10 border-emerald-500 text-white shadow-lg shadow-emerald-500/10"
                            : "bg-slate-800/50 border-slate-700/60 text-slate-300 hover:border-slate-600"
                        }`}
                      >
                        <span className="font-semibold">{item.label}</span>
                        <span
                          className={`w-5 h-5 rounded-full border flex items-center justify-center ${
                            monthlyBill === item.id
                              ? "border-emerald-400 bg-emerald-400 text-slate-950 text-xs font-bold"
                              : "border-slate-600"
                          }`}
                        >
                          {monthlyBill === item.id ? "✓" : ""}
                        </span>
                      </button>
                    ))}
                  </div>

                  <div className="flex justify-between pt-4">
                    <button
                      type="button"
                      onClick={() => setStep(1)}
                      className="bg-slate-800 hover:bg-slate-700 text-slate-300 font-semibold px-6 py-3 rounded-xl transition-all cursor-pointer"
                    >
                      ← Back
                    </button>
                    <button
                      type="button"
                      onClick={() => setStep(3)}
                      className="bg-emerald-500 hover:bg-emerald-600 text-slate-950 font-bold px-8 py-3 rounded-xl transition-all cursor-pointer"
                    >
                      View Estimate →
                    </button>
                  </div>
                </div>
              )}

              {step === 3 && (
                <div className="space-y-6">
                  <div className="bg-emerald-500/10 border border-emerald-500/20 rounded-2xl p-4 flex items-center justify-between">
                    <div>
                      <div className="text-xs text-emerald-400 uppercase tracking-wider font-semibold">
                        Estimated Monthly Savings
                      </div>
                      <div className="text-2xl font-black text-white">
                        {savings.monthly} /mo
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="text-xs text-emerald-400 uppercase tracking-wider font-semibold">
                        25-Year Total
                      </div>
                      <div className="text-2xl font-black text-emerald-400">
                        {savings.twentyFiveYear}
                      </div>
                    </div>
                  </div>

                  <h3 className="text-xl font-bold">
                    Where should we send your custom proposal?
                  </h3>

                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold uppercase tracking-wider text-slate-400 mb-1">
                        Full Name
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="John Doe"
                        value={fullName}
                        onChange={(e) => setFullName(e.target.value)}
                        className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-emerald-500"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold uppercase tracking-wider text-slate-400 mb-1">
                        Zip Code
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="90210"
                        value={zipCode}
                        onChange={(e) => setZipCode(e.target.value)}
                        className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-emerald-500"
                      />
                    </div>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold uppercase tracking-wider text-slate-400 mb-1">
                        Email Address
                      </label>
                      <input
                        type="email"
                        required
                        placeholder="john@example.com"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-emerald-500"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold uppercase tracking-wider text-slate-400 mb-1">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        required
                        placeholder="(555) 000-0000"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-emerald-500"
                      />
                    </div>
                  </div>

                  <div className="flex justify-between pt-4">
                    <button
                      type="button"
                      onClick={() => setStep(2)}
                      className="bg-slate-800 hover:bg-slate-700 text-slate-300 font-semibold px-6 py-3 rounded-xl transition-all cursor-pointer"
                    >
                      ← Back
                    </button>
                    <button
                      type="submit"
                      className="bg-emerald-500 hover:bg-emerald-600 text-slate-950 font-extrabold px-8 py-3 rounded-xl shadow-lg shadow-emerald-500/20 transition-all transform hover:-translate-y-0.5 cursor-pointer"
                    >
                      Get My Free Proposal →
                    </button>
                  </div>
                </div>
              )}
            </form>
          )}
        </div>
      </div>
    </section>
  );
}

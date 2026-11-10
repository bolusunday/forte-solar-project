"use client";

import { useState } from "react";

export default function LeadEstimator() {
  const [step, setStep] = useState(1);
  const [roofType, setRoofType] = useState("shingle");
  const [monthlyBill, setMonthlyBill] = useState("200-400");
  const [isSubmitted, setIsSubmitted] = useState(false);

  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [zipCode, setZipCode] = useState("");

  const savingsMap: Record<
    string,
    { monthly: string; twentyFiveYear: string }
  > = {
    "100-200": { monthly: "$140", twentyFiveYear: "$28,500" },
    "200-400": { monthly: "$290", twentyFiveYear: "$54,200" },
    "400+": { monthly: "$480", twentyFiveYear: "$89,000" },
  };

  const savings = savingsMap[monthlyBill] || savingsMap["200-400"];

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
        </div>

        <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 sm:p-10 shadow-2xl">
          {/* Progress Indicator */}
          {!isSubmitted && (
            <div className="mb-8">
              <div className="flex justify-between text-xs font-semibold uppercase tracking-wider text-slate-400 mb-2">
                <span>Step {step} of 3</span>
                <span>
                  {step === 1
                    ? "Roof Type"
                    : step === 2
                      ? "Energy Bill"
                      : "Contact & Estimate"}
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

          {/* SUCCESS SCREEN */}
          {isSubmitted ? (
            <div className="text-center py-12 space-y-6">
              <div className="w-16 h-16 bg-emerald-500/20 text-emerald-400 rounded-full flex items-center justify-center mx-auto text-3xl font-bold">
                ✓
              </div>
              <h3 className="text-2xl font-bold">
                Estimate Ready, {fullName}!
              </h3>
              <p className="text-slate-300">
                We sent your breakdown to{" "}
                <span className="text-emerald-400">{email}</span> for zip code{" "}
                <span className="text-white font-semibold">{zipCode}</span>.
              </p>
              <div className="bg-slate-950 p-6 rounded-2xl border border-slate-800 max-w-sm mx-auto">
                <div className="text-xs text-slate-400">
                  Projected 25-Year Savings
                </div>
                <div className="text-4xl font-black text-emerald-400 my-1">
                  {savings.twentyFiveYear}
                </div>
              </div>
              <button
                type="button"
                onClick={() => {
                  setIsSubmitted(false);
                  setStep(1);
                }}
                className="text-sm text-slate-400 hover:text-white underline cursor-pointer"
              >
                Reset Calculator
              </button>
            </div>
          ) : (
            <div>
              {/* STEP 1 */}
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
                        onClick={() => setRoofType(item.id)}
                        className={`p-5 rounded-2xl border text-left transition-all flex flex-col gap-2 cursor-pointer ${
                          roofType === item.id
                            ? "bg-emerald-500/10 border-emerald-500 text-white shadow-lg"
                            : "bg-slate-800/50 border-slate-700 text-slate-300 hover:border-slate-500"
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
                      className="bg-emerald-500 hover:bg-emerald-600 text-slate-950 font-bold px-8 py-3 rounded-xl cursor-pointer transition-all"
                    >
                      Next Step →
                    </button>
                  </div>
                </div>
              )}

              {/* STEP 2 */}
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
                        onClick={() => setMonthlyBill(item.id)}
                        className={`w-full p-4 rounded-2xl border text-left transition-all flex items-center justify-between cursor-pointer ${
                          monthlyBill === item.id
                            ? "bg-emerald-500/10 border-emerald-500 text-white shadow-lg"
                            : "bg-slate-800/50 border-slate-700 text-slate-300 hover:border-slate-500"
                        }`}
                      >
                        <span className="font-semibold">{item.label}</span>
                        <span>{monthlyBill === item.id ? "✓" : ""}</span>
                      </button>
                    ))}
                  </div>

                  <div className="flex justify-between pt-4">
                    <button
                      type="button"
                      onClick={() => setStep(1)}
                      className="bg-slate-800 hover:bg-slate-700 text-slate-300 font-semibold px-6 py-3 rounded-xl cursor-pointer"
                    >
                      ← Back
                    </button>
                    <button
                      type="button"
                      onClick={() => setStep(3)}
                      className="bg-emerald-500 hover:bg-emerald-600 text-slate-950 font-bold px-8 py-3 rounded-xl cursor-pointer"
                    >
                      View Estimate →
                    </button>
                  </div>
                </div>
              )}

              {/* STEP 3 */}
              {step === 3 && (
                <form
                  onSubmit={(e) => {
                    e.preventDefault();
                    setIsSubmitted(true);
                  }}
                  className="space-y-6"
                >
                  <div className="bg-emerald-500/10 border border-emerald-500/20 rounded-2xl p-4 flex items-center justify-between">
                    <div>
                      <div className="text-xs text-emerald-400 font-semibold uppercase">
                        Estimated Monthly Savings
                      </div>
                      <div className="text-2xl font-black text-white">
                        {savings.monthly} /mo
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="text-xs text-emerald-400 font-semibold uppercase">
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
                    <input
                      type="text"
                      required
                      placeholder="Full Name"
                      value={fullName}
                      onChange={(e) => setFullName(e.target.value)}
                      className="bg-slate-950 border border-slate-800 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-emerald-500"
                    />
                    <input
                      type="text"
                      required
                      placeholder="Zip Code"
                      value={zipCode}
                      onChange={(e) => setZipCode(e.target.value)}
                      className="bg-slate-950 border border-slate-800 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-emerald-500"
                    />
                  </div>

                  <div className="grid sm:grid-cols-2 gap-4">
                    <input
                      type="email"
                      required
                      placeholder="Email Address"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="bg-slate-950 border border-slate-800 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-emerald-500"
                    />
                    <input
                      type="tel"
                      required
                      placeholder="Phone Number"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      className="bg-slate-950 border border-slate-800 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-emerald-500"
                    />
                  </div>

                  <div className="flex justify-between pt-4">
                    <button
                      type="button"
                      onClick={() => setStep(2)}
                      className="bg-slate-800 hover:bg-slate-700 text-slate-300 font-semibold px-6 py-3 rounded-xl cursor-pointer"
                    >
                      ← Back
                    </button>
                    <button
                      type="submit"
                      className="bg-emerald-500 hover:bg-emerald-600 text-slate-950 font-extrabold px-8 py-3 rounded-xl shadow-lg cursor-pointer"
                    >
                      Get My Free Proposal →
                    </button>
                  </div>
                </form>
              )}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

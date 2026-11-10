export default function TrustBar() {
  const partners = [
    "NABCEP Certified",
    "Tesla Energy Certified",
    "Solar Power World Top 100",
    "A+ BBB Accredited",
    "25-Year Workmanship Warranty",
  ];

  return (
    <div className="bg-slate-950 border-y border-slate-800/80 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <p className="text-center text-xs font-semibold uppercase tracking-widest text-slate-500 mb-6">
          Certified Excellence & Trusted Industry Standards
        </p>
        <div className="flex flex-wrap items-center justify-center gap-8 md:gap-16 opacity-80">
          {partners.map((partner, index) => (
            <span
              key={index}
              className="text-slate-400 font-semibold text-sm md:text-base tracking-wide"
            >
              {partner}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

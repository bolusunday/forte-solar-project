export default function ValueProps() {
  const benefits = [
    {
      title: "Zero Down Financing",
      description:
        "Start generating your own clean power with $0 out-of-pocket costs and immediate monthly utility savings.",
      icon: "⚡",
    },
    {
      title: "25-Year Production Guarantee",
      description:
        "Industry-leading panels backed by a comprehensive quarter-century performance and replacement warranty.",
      icon: "🛡️",
    },
    {
      title: "Seamless Permitting & Install",
      description:
        "We handle all municipal paperwork, HOA approvals, and utility interconnect agreements from start to finish.",
      icon: "📋",
    },
  ];

  return (
    <section className="py-20 bg-slate-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">
            Why Homeowners Choose Zenith
          </h2>
          <p className="text-slate-400">
            We combine tier-one hardware with white-glove installation service
            to maximize your return on investment.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {benefits.map((item, idx) => (
            <div
              key={idx}
              className="bg-slate-800/50 border border-slate-700/60 p-8 rounded-2xl hover:border-emerald-500/50 transition-all"
            >
              <div className="text-3xl mb-4 bg-emerald-500/10 w-12 h-12 rounded-xl flex items-center justify-center">
                {item.icon}
              </div>
              <h3 className="text-xl font-bold mb-2 text-white">
                {item.title}
              </h3>
              <p className="text-slate-400 text-sm leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

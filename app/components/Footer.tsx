export default function Footer() {
  return (
    <footer className="bg-slate-950 border-t border-slate-900 text-slate-400 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-4 gap-10 mb-12">
        {/* Brand Info */}
        <div className="space-y-4 md:col-span-2">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-emerald-500 flex items-center justify-center text-slate-950 font-bold">
              ☀️
            </div>
            <span className="text-white font-extrabold text-lg">
              Forte<span className="text-emerald-400">Solar</span>
            </span>
          </div>
          <p className="text-sm max-w-sm leading-relaxed">
            Empowering homeowners with clean, predictable, and high-efficiency
            solar energy solutions backed by industry-leading warranties and
            25-year performance monitoring.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="text-white font-bold text-sm uppercase tracking-wider mb-4">
            Navigation
          </h4>
          <ul className="space-y-2 text-sm">
            <li>
              <a
                href="#estimator"
                className="hover:text-emerald-400 transition-colors"
              >
                Solar Calculator
              </a>
            </li>
            <li>
              <a
                href="#comparison"
                className="hover:text-emerald-400 transition-colors"
              >
                Financial Savings
              </a>
            </li>
            <li>
              <a
                href="#faq"
                className="hover:text-emerald-400 transition-colors"
              >
                FAQ & Support
              </a>
            </li>
          </ul>
        </div>

        {/* Legal / Disclaimer */}
        <div>
          <h4 className="text-white font-bold text-sm uppercase tracking-wider mb-4">
            Compliance
          </h4>
          <p className="text-xs leading-relaxed text-slate-500">
            Estimates are based on national averages and regional solar
            irradiance data. Actual savings vary depending on geographic
            location, roof angle, and utility rate structures.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 border-t border-slate-900 pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500">
        <div>
          © {new Date().getFullYear()} Forte Solar. Built with Next.js &
          Tailwind CSS.
        </div>
        <div className="mt-4 sm:mt-0 flex gap-6">
          <a href="#" className="hover:text-slate-400">
            Privacy Policy
          </a>
          <a href="#" className="hover:text-slate-400">
            Terms of Service
          </a>
        </div>
      </div>
    </footer>
  );
}

import Hero from "./components/Hero";
import TrustBar from "./components/TrustBar";
import ValueProps from "./components/ValueProps";
import LeadEstimator from "./components/LeadEstimator";

export default function Home() {
  return (
    <main className="min-h-screen bg-slate-950">
      <Hero />
      <TrustBar />
      <ValueProps />
      <LeadEstimator />
    </main>
  );
}

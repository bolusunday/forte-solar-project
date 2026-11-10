import Header from "./components/Header";
import Hero from "./components/Hero";
import TrustBar from "./components/TrustBar";
import ValueProps from "./components/ValueProps";
import LeadEstimator from "./components/LeadEstimator";
import Comparison from "./components/Comparison";
import FAQ from "./components/FAQ";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-slate-950">
      <Header />
      <Hero />
      <TrustBar />
      <ValueProps />
      <LeadEstimator />
      <Comparison />
      <FAQ />
      <Footer />
    </main>
  );
}

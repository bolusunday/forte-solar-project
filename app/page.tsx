import Hero from "./components/Hero";
import TrustBar from "./components/TrustBar";
import ValueProps from "./components/ValueProps";

export default function Home() {
  return (
    <main className="min-h-screen bg-slate-950">
      <Hero />
      <TrustBar />
      <ValueProps />
    </main>
  );
}

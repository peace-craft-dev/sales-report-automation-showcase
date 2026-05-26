import Header from "@/components/Header";
import Hero from "@/components/Hero";
import LiveDemo from "@/components/LiveDemo";
import HowItWorks from "@/components/HowItWorks";
import Deliverables from "@/components/Deliverables";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-bg text-ink">
        <Hero />
        <LiveDemo />
        <HowItWorks />
        <Deliverables />
        <CTA />
      </main>
      <Footer />
    </>
  );
}

import Header from "@/components/Header";
import Hero from "@/components/Hero";
import UseCases from "@/components/UseCases";
import Demo from "@/components/Demo";
import Architecture from "@/components/Architecture";
import Features from "@/components/Features";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-bg text-ink">
        <Hero />
        <UseCases />
        <Demo />
        <Architecture />
        <Features />
        <CTA />
      </main>
      <Footer />
    </>
  );
}

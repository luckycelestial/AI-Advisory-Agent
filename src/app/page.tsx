import Navbar from "@/components/landing/Navbar";
import Hero from "@/components/landing/Hero";
import Problems from "@/components/landing/Problems";
import Solution from "@/components/landing/Solution";
import Features from "@/components/landing/Features";
import HowItWorks from "@/components/landing/HowItWorks";
import SocialProof from "@/components/landing/SocialProof";
import FAQ from "@/components/landing/FAQ";
import CTA from "@/components/landing/CTA";
import Footer from "@/components/landing/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="flex-1">
        <Hero />
        <Problems />
        <Solution />
        <Features />
        <HowItWorks />
        <SocialProof />
        <FAQ />
        <CTA />
      </main>
      <Footer />
    </>
  );
}

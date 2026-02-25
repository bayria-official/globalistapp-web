import Hero from "@/components/Hero";
import Features from "@/components/Features";
import Coverage from "@/components/Coverage";
import HowItWorks from "@/components/HowItWorks";
import Pricing from "@/components/Pricing";
import DownloadCta from "@/components/DownloadCta";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen overflow-x-hidden">
      <Hero />
      <Features />
      <Coverage />
      <HowItWorks />
      <Pricing />
      <DownloadCta />
      <Footer />
    </main>
  );
}

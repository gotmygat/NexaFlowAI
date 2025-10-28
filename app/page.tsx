import Navigation from "@/components/navigation";
import HeroSection from "@/components/hero-section";
import FeaturesSection from "@/components/features-section";
import ScannerSection from "@/components/scanner-section";
import FAQSection from "@/components/faq-section";
import Footer from "@/components/footer";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <HeroSection />
      <FeaturesSection />
      <ScannerSection />
      <FAQSection />
      <Footer />
    </main>
  );
}

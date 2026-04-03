import Header from "@/components/Header";
import Hero from "@/components/Hero";
import ProblemSection from "@/components/ProblemSection";
import SolutionSection from "@/components/SolutionSection";
import BenefitsSection from "@/components/BenefitsSection";
import FitSection from "@/components/FitSection";
import PilotSection from "@/components/PilotSection";
import PricingSection from "@/components/PricingSection";
import DifferentialsSection from "@/components/DifferentialsSection";
import FAQSection from "@/components/FAQSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

const Index = () => (
  <div className="min-h-screen">
    <Header />
    <Hero />
    <ProblemSection />
    <SolutionSection />
    <BenefitsSection />
    <FitSection />
    <PilotSection />
    <PricingSection />
    <DifferentialsSection />
    <FAQSection />
    <ContactSection />
    <Footer />
  </div>
);

export default Index;

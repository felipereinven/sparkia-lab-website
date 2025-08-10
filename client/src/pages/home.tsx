import ModernNavigation from "@/components/modern-navigation";
import ModernHero from "@/components/modern-hero";
import ProblemSolutionGrid from "@/components/problem-solution-grid";
import ServicesGrid from "@/components/services-grid";
import StatsSection from "@/components/stats-section";
import TestimonialsSection from "@/components/testimonials-section";
import ProcessSection from "@/components/process-section";
import ModernCTA from "@/components/modern-cta";
import ModernContactForm from "@/components/modern-contact-form";
import ModernFooter from "@/components/modern-footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <ModernNavigation />
      <ModernHero />
      <ProblemSolutionGrid />
      <ServicesGrid />
      <StatsSection />
      <TestimonialsSection />
      <ProcessSection />
      <ModernCTA />
      <ModernContactForm />
      <ModernFooter />
    </div>
  );
}

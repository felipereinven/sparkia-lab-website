import Navigation from "@/components/navigation";
import HeroSection from "@/components/hero-section";
import ProblemSolution from "@/components/problem-solution";
import ServicesShowcase from "@/components/services-showcase";
import TransformationStats from "@/components/transformation-stats";
import TestimonialCarousel from "@/components/testimonial-carousel";
import FAQAccordion from "@/components/faq-accordion";
import CTASection from "@/components/cta-section";
import ContactForm from "@/components/contact-form";
import Footer from "@/components/footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      <HeroSection />
      <ProblemSolution />
      <ServicesShowcase />
      <TransformationStats />
      <TestimonialCarousel />
      <FAQAccordion />
      <CTASection />
      <ContactForm />
      <Footer />
    </div>
  );
}

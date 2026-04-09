import DynamicBackground from "@/components/dynamic-background";

import { Navbar } from "@/components/navbar";
import { SocialSidebar } from "@/components/social-sidebar";
import { HeroSection } from "@/components/hero-section";
import { WhatWeDoSection } from "@/components/what-we-do-section";
import { ForCardsSection } from "@/components/for-cards-section";
import { HowItWorksSection } from "@/components/how-it-works-section";
import { SpecializedSection } from "@/components/specialized-section";
import { CompaniesSection } from "@/components/companies-section";
import { SmartRSection } from "@/components/smartr-section";
import { TestimonialsSection } from "@/components/testimonials-section";
import { FinalCtaSection } from "@/components/final-cta-section";
import { Footer } from "@/components/footer";
import { ScrollReveal } from "@/components/scroll-reveal"

export default function HomePage() {
  return (
    <main className="min-h-screen relative overflow-hidden">
      <DynamicBackground />

      <Navbar />
      <SocialSidebar />

      <ScrollReveal>
        <HeroSection />
      </ScrollReveal>

      <ScrollReveal>
        <WhatWeDoSection />
      </ScrollReveal>

      <ScrollReveal>
        <ForCardsSection />
      </ScrollReveal>

      <ScrollReveal>
        <HowItWorksSection />
      </ScrollReveal>

      <ScrollReveal>
        <SpecializedSection />
      </ScrollReveal>

      <ScrollReveal>
        <CompaniesSection />
      </ScrollReveal>

      <ScrollReveal>
        <SmartRSection />
      </ScrollReveal>

      <ScrollReveal>
        <TestimonialsSection />
      </ScrollReveal>

      <ScrollReveal>
        <FinalCtaSection />
      </ScrollReveal>

      <ScrollReveal>
        <Footer />
      </ScrollReveal>

    </main>
  );
}
"use client";

import { useState, useEffect } from "react";
import { ArrowRight, Users, Building2, Heart, DollarSign, Factory, Scale, ShoppingCart, Leaf, Hotel, Palette, Hammer } from "lucide-react";
import { Button } from "@/components/ui/button";

const industries = [
  { icon: Building2, title: "Technology & Software", description: "Engineers, product managers, CTOs, and AI specialists" },
  { icon: Heart, title: "Healthcare & Life Sciences", description: "Doctors, nurses, biotech researchers, and pharma experts" },
  { icon: DollarSign, title: "Finance & Banking", description: "Investment bankers, accountants, risk analysts, and fintech talent" },
  { icon: Factory, title: "Manufacturing & Industrial", description: "Supply chain experts, engineers, plant managers, and operators" },
  { icon: Scale, title: "Legal & Compliance", description: "Corporate lawyers, compliance officers, and regulatory experts" },
  { icon: ShoppingCart, title: "Retail & E-commerce", description: "Merchandisers, digital marketers, store managers, and logisticians" },
  { icon: Leaf, title: "Energy & Sustainability", description: "Renewable energy specialists, environmental engineers, and ESG experts" },
  { icon: Hotel, title: "Hospitality & Tourism", description: "Hotel managers, chefs, event planners, and travel experts" },
  { icon: Palette, title: "Marketing & Creative", description: "Brand strategists, designers, content creators, and media professionals" },
  { icon: Hammer, title: "Construction & Real Estate", description: "Architects, project managers, civil engineers, and property specialists" },
];

export function SpecializedSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(true);

  // Auto-slide with smooth reset
  useEffect(() => {
    const interval = setInterval(() => {
      setIsTransitioning(true);

      setCurrentIndex((prev) => {
        if (prev === industries.length - 1) {
          // When reaching the last slide, pause then reset smoothly
          setTimeout(() => {
            setIsTransitioning(false); // Disable transition for instant reset
            setCurrentIndex(0);
            
            // Re-enable transition after reset
            setTimeout(() => setIsTransitioning(true), 50);
          }, 800); // Small pause on last slide

          return prev; // Stay on last slide during pause
        }
        return prev + 1;
      });
    }, 4200); // 4.2 seconds per slide

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-24 md:py-32 px-6 mb-[100px]">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
         

          <h2 className="text-4xl md:text-5xl font-light tracking-tight text-foreground mb-6">
            Specialized recruitment <span className="text-[#1A5D57]">across all industries</span>
          </h2>

          <p className="max-w-2xl mx-auto text-xl text-muted-foreground">
            Our team of industry-specialized recruiters brings deep expertise to your talent search.
          </p>
        </div>

        {/* Carousel */}
        <div className="relative overflow-hidden rounded-3xl">
          <div
            className={`flex ${isTransitioning ? 'transition-transform duration-700 ease-out' : ''}`}
            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
          >
            {industries.map((industry, index) => {
              const IconComponent = industry.icon;
              return (
                <div key={index} className="min-w-full px-4">
                  <div className="bg-white dark:bg-card border border-border rounded-3xl p-12 md:p-16 text-center ">
                    <div className="mx-auto w-20 h-20 flex items-center justify-center bg-[#1A5D57]/10 rounded-2xl mb-10">
                      <IconComponent className="w-12 h-12 text-[#1A5D57]" />
                    </div>

                    <h3 className="text-3xl font-medium text-foreground mb-6 tracking-tight">
                      {industry.title}
                    </h3>

                    <p className="text-lg text-muted-foreground leading-relaxed max-w-md mx-auto">
                      {industry.description}
                    </p>

                    <div className="mt-12">
                      <Button 
                        variant="outline" 
                        className="rounded-2xl px-8 py-6 text-base group border-primary/30 hover:border-primary"
                      >
                        Explore this industry
                        <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
                      </Button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Dots Indicator */}
        <div className="flex justify-center gap-3 mt-10">
          {industries.map((_, index) => (
            <button
              key={index}
              onClick={() => {
                setIsTransitioning(true);
                setCurrentIndex(index);
              }}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                currentIndex === index 
                  ? "bg-[#1A5D57] scale-125" 
                  : "bg-muted-foreground/30 hover:bg-muted-foreground/50"
              }`}
            />
          ))}
        </div>

        {/* Final CTA */}
        <div className="text-center mt-16">
          <Button 
            size="lg"
            className="bg-primary hover:bg-primary/90 text-primary-foreground px-10 py-7 text-base rounded-2xl"
          >
            Talk to our specialists
          </Button>
        </div>
      </div>
    </section>
  );
}
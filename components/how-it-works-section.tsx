"use client";

import { Button } from "@/components/ui/button";
import { useState } from "react";

const candidateSteps = [
  {
    number: "01",
    title: "You tell us what you actually look for",
    description:
      "I'm a React developer who loves remote work. I'm looking for a team where I can grow and work in a flexible environment.",
  },
  {
    number: "02",
    title: "We match you with the right opportunities",
    description:
      "Our AI (smart.R) + experienced recruiters connect you with roles that truly fit your goals",
  },
  {
    number: "03",
    title: "We support you through the process",
    description:
      "Fast feedback, honest guidance, and long-term support throughout your journey.",
  },
];

const companySteps = [
  {
    number: "01",
    title: "Tell us your hiring needs",
    description:
      "We need a senior Python engineer. Someone with x years of experience, reliable, and a great fit for our team and company culture.",
  },
  {
    number: "02",
    title: "Flexible recruitment solutions",
    description:
      "From permanent hires and project-based roles to remote talent and executive search — we adapt to your needs.",
  },
  {
    number: "03",
    title: "Efficient hiring, real results",
    description:
      "We deliver qualified candidates, fast communication, and full support throughout the hiring process.",
  },
];

export function HowItWorksSection() {
  const [activeTab, setActiveTab] = useState<"candidate" | "recruiter">(
    "candidate"
  );
  const [isAnimating, setIsAnimating] = useState(false);
  const [isVisible, setIsVisible] = useState(true);

const handleTabChange = (tab: "candidate" | "recruiter") => {
  if (tab === activeTab) return;

  setIsVisible(false); // fade out

  setTimeout(() => {
    setActiveTab(tab);
    setIsVisible(true); // fade in
  }, 200);
};

  const steps =
    activeTab === "candidate" ? candidateSteps : companySteps;

  return (
    <section
      id="services"
      className="py-24 md:py-32 px-6  mb-[100px]"
    >
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-5xl font-[500] text-foreground text-center mb-12">
          It&apos;s actually very simple
        </h2>

        {/* Tabs */}
        <div className="flex justify-center mb-16">
          <div className="inline-flex bg-muted rounded-full p-1">
            <button
              onClick={() => handleTabChange("candidate")}
              className={`px-8 py-3 rounded-full font-medium transition-all duration-300 ${activeTab === "candidate"
                  ? "bg-primary text-primary-foreground shadow-sm"
                  : "text-muted-foreground hover:text-foreground"
                }`}
            >
              Candidates
            </button>
            <button
              onClick={() => handleTabChange("recruiter")}
              className={`px-8 py-3 rounded-full font-medium transition-all duration-300 ${activeTab === "recruiter"
                  ? "bg-primary text-primary-foreground shadow-sm"
                  : "text-muted-foreground hover:text-foreground"
                }`}
            >
              Company
            </button>
          </div>
        </div>

        {/* Steps */}
<div
  className={`grid md:grid-cols-3 gap-8 lg:gap-12 relative min-h-[300px] transition-opacity duration-300 ease-in-out ${
    isVisible ? "opacity-100" : "opacity-0"
  }`}
>          {[candidateSteps, companySteps].map((data, i) => {
            const isActive =
              (i === 0 && activeTab === "candidate") ||
              (i === 1 && activeTab === "recruiter");

            return (
              <div
                key={i}
                className={`absolute inset-0 grid md:grid-cols-3 gap-8 lg:gap-12 transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]
          ${isActive
                    ? "opacity-100 translate-y-0 scale-100"
                    : "opacity-0 translate-y-4 scale-[0.98] pointer-events-none"
                  }
        `}
              >
                {data.map((step, index) => (
                  <div
                    key={index}
                    className="text-center md:text-left space-y-4 transition-all duration-500"
                    style={{
                      transitionDelay: isActive ? `${index * 100}ms` : "0ms",
                    }}
                  >
                    <span className="text-5xl md:text-6xl font-extralight text-primary/30 block transition-transform duration-500 hover:scale-110">
                      {step.number}
                    </span>

                    <h3 className="text-xl font-medium text-foreground">
                      {step.title}
                    </h3>

                    <p className="text-muted-foreground leading-relaxed italic min-h-[3.5rem]">
                      {step.description}
                    </p>
                  </div>
                ))}
              </div>
            );
          })}
        </div>

      
      </div>
    </section>
  );
}
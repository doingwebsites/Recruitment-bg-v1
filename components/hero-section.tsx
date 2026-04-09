"use client"

import { ChevronDown } from "lucide-react"

export function HeroSection() {
  const scrollToNext = () => {
    const nextSection = document.getElementById("about")
    nextSection?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Decorative gradient circles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div
          className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[500px] h-[500px] rounded-full opacity-30"
          style={{
            background:
              "radial-gradient(circle, rgba(0,75,68,0.15) 0%, rgba(0,75,68,0.05) 50%, transparent 70%)",
          }}
        />
        <div
          className="absolute top-1/3 left-1/2 -translate-x-1/4 w-[400px] h-[400px] rounded-full opacity-20"
          style={{
            background:
              "radial-gradient(circle, rgba(0,75,68,0.1) 0%, transparent 60%)",
          }}
        />
        <div
          className="absolute bottom-1/4 left-1/2 -translate-x-1/2 w-[300px] h-[150px] rounded-full opacity-10 blur-2xl"
          style={{
            background: "rgba(0,75,68,0.2)",
          }}
        />
      </div>

      <div className="relative z-10 text-center px-6 max-w-8xl mx-auto lg:mt-20 md:mt-10 sm:mt-5">
        <h1 className="text-4xl md:text-5xl lg:text-[60px] tracking-tight text-foreground font-[400]">
          Where the <span className="text-[#1A5D57] font-[450]">talent</span> meets the right <span className="text-[#1A5D57] font-[450]">companies</span>

        </h1>
        <p className="mt-8 text-lg md:text-[22px] text-muted-foreground max-w-3xl mx-auto leading-relaxed">
          Building teams and making careers move forward.
        </p>

        <button
          onClick={scrollToNext}
          className="mt-16 animate-bounce text-foreground/60 hover:text-primary transition-colors duration-200"
          aria-label="Scroll down"
        >
          <ChevronDown size={32} />
        </button>
      </div>
    </section>
  )
}

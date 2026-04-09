"use client"

const companies = [
  "TechNova",
  "DataSphere",
  "CloudSync",
  "DevHouse",
  "CodeCraft",
  "PixelLabs",
  "ByteWorks",
  "NexGen",
  "InnoSoft",
  "StackFlow",
  "TechNova",
  "DataSphere",
  "CloudSync",
  "DevHouse",
  "CodeCraft",
]

export function CompaniesSection() {
  return (
    <section className="py-16 md:py-24 overflow-hidden mb-[100px] ">
      <div className="max-w-7xl mx-auto px-6 mb-12">
        <h3 className="text-center text-xl text-[#1A5D57] uppercase tracking-widest ">
          Companies we&apos;ve worked with
        </h3>
      </div>
      
      <div className="relative">
        {/* Gradient overlays */}
        <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-background to-transparent z-10" />
        <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-background to-transparent z-10" />
        
        {/* Scrolling container */}
        <div className="flex gap-12 animate-scroll">
          {[...companies, ...companies].map((company, index) => (
            <div
              key={index}
              className="flex-shrink-0 px-8 py-4 bg-[#1a5d5736] rounded-lg border border-border/30 "
            >
              <span className="text-lg font-medium text-black/70 whitespace-nowrap ">
                {company}
              </span>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        .animate-scroll {
          animation: scroll 30s linear infinite;
        }
        .animate-scroll:hover {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  )
}

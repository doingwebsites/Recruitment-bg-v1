import { Button } from "@/components/ui/button"
import { Sparkles } from "lucide-react"

const features = [
  "You describe the person you need in plain words → smart.R finds the best matches",
  "It understands skills, experience, and real-life context (not just keywords)",
  "Faster shortlists, happier teams, less time wasted",
  "Powered by smart.R AI",
]

export function SmartRSection() {
  return (
    <section id="smartr" className="py-24 md:py-32 px-6 mb-[100px]" >
      <div className="max-w-4xl mx-auto text-center">
        <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-8">
          <Sparkles className="w-4 h-4 text-orange-500"/>
          <span>Own Technology</span>
        </div>
        
        <h2 className="text-4xl md:text-5xl font-light text-foreground mb-4">
          Smart.R — our intelligent <span className="text-[#1A5D57]">HR</span> system
        </h2>

        <p className="text-2xl text-muted-foreground mb-12">
          15+ years of recruitment experience, now inside one friendly tool.
        </p>

        <ul className="space-y-4 text-left max-w-2xl mx-auto mb-12">
          {features.map((feature, index) => (
            <li
              key={index}
              className="flex items-start gap-4 text-muted-foreground"
            >
              <span className="w-2 h-2 rounded-full bg-primary mt-2 shrink-0 "/>
              <span className="leading-relaxed text-[20px]">{feature}</span>
            </li>
          ))}
        </ul>

        <div className="flex flex-wrap justify-center gap-4">
          <Button className="bg-primary text-primary-foreground hover:bg-primary/90 rounded-lg px-8 py-6 text-base">
            See smart.R in action
          </Button>
          <Button
            variant="outline"
            className="border-primary text-primary hover:bg-primary/5 rounded-lg px-8 py-6 text-base"
          >
            Book a 15-minute demo
          </Button>
        </div>
      </div>
    </section>
  )
}

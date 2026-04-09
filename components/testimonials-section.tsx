import { Card, CardContent } from "@/components/ui/card"

const testimonials = [
  {
    name: "Georgi Dimitrov",
    role: "Senior Frontend Engineer",
    type: "Candidate",
    quote:
      "I was skeptical at first — most recruiters just spam you with irrelevant jobs. But Recruitment.bg actually listened. They helped me land a role that matched my skills and work-life balance needs perfectly.",
  },
  {
    name: "Maria Ivanova",
    role: "HR Director",
    type: "Employer",
    quote:
      "We've tried many agencies, but none compare to the quality and speed of Recruitment.bg. Their smart.R system and dedicated team helped us fill critical positions 40% faster.",
  },
  {
    name: "Stefan Todorov",
    role: "DevOps Engineer",
    type: "Candidate",
    quote:
      "Honest feedback, real conversations, and no ghosting. They kept me informed throughout the entire process and even helped me negotiate a better salary. Highly recommend!",
  },
  {
    name: "Elena Petrova",
    role: "Talent Acquisition Lead",
    type: "Employer",
    quote:
      "The transparency and professionalism are unmatched. They truly understand our technical requirements and consistently deliver pre-screened candidates who fit our culture.",
  },
]

export function TestimonialsSection() {
  return (
    <section className="py-24 md:py-32 px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-light text-foreground text-center mb-16">
          What people say about <span className="text-[#1A5D57]">recruitment.bg</span>
        </h2>

        <div className="grid md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card
              key={index}
              className="bg-card border-border/50 shadow-sm rounded-xl"
            >
              <CardContent className="p-8">
                <div className="flex items-start gap-4 mb-6">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                    <span className="text-lg font-medium text-primary">
                      {testimonial.name
                        .split(" ")
                        .map((n) => n[0])
                        .join("")}
                    </span>
                  </div>
                  <div>
                    <h4 className="font-medium text-foreground">
                      {testimonial.name}
                    </h4>
                    <p className="text-sm text-muted-foreground">
                      {testimonial.role}
                    </p>
                    <span className="inline-block mt-1 text-xs px-2 py-0.5 rounded-full bg-primary/10 text-primary">
                      {testimonial.type}
                    </span>
                  </div>
                </div>
                <blockquote className="text-muted-foreground leading-relaxed italic">
                  &ldquo;{testimonial.quote}&rdquo;
                </blockquote>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

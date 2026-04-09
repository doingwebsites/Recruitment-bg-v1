import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { User, Building2 } from "lucide-react"

export function ForCardsSection() {
  return (
    <section id="candidates" className="py-24 md:py-32 px-6 mb-[100px] mt-[-100px]">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-8">
          
          {/* For Candidates Card */}
          <Card className="group glass-card bg-white/70 dark:bg-zinc-900/70 backdrop-blur-xl border border-white/30 dark:border-white/10 shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-4 hover:scale-[1.03] rounded-3xl overflow-hidden">
            <CardHeader className="pb-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center border border-primary/10">
                  <User className="w-7 h-7 text-primary" />
                </div>
                <CardTitle className="text-3xl font-light text-foreground">
                  For Candidates
                </CardTitle>
              </div>
            </CardHeader>

            <CardContent className="space-y-6">
              <p className="text-muted-foreground leading-relaxed text-[17px]">
                <span className="text-xl font-semibold text-[#1A5D57]">Advance your career.</span><br /><br />
                We don&apos;t just send you job links — we listen to your goals, match you with roles
                that actually fit, and guide you every step of the way.
              </p>

              <ul className="space-y-3">
                {[
                  "Personalized job recommendations",
                  "Salary insights and negotiation help",
                  "Interview coaching and honest feedback",
                  "No ghosting — you'll always know where you stand",
                ].map((item, index) => (
                  <li
                    key={index}
                    className="flex items-start gap-3 text-muted-foreground text-md"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2.5 shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>

              <div className="flex flex-wrap gap-3 pt-6">
                <Button className="bg-primary hover:bg-primary/90 text-primary-foreground rounded-xl px-8 py-6 text-base font-medium transition-all active:scale-95">
                  See more jobs
                </Button>
                <Button
                  variant="outline"
                  className="border-primary/30 hover:bg-primary/5 rounded-xl px-8 py-6 text-base font-medium transition-all"
                >
                  Learn more
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* For Companies Card */}
          <Card className="group glass-card bg-white/70 dark:bg-zinc-900/70 backdrop-blur-xl border border-white/30 dark:border-white/10 shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-4 hover:scale-[1.03] rounded-3xl overflow-hidden">
            <CardHeader className="pb-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center border border-primary/10">
                  <Building2 className="w-7 h-7 text-primary" />
                </div>
                <CardTitle className="text-3xl font-light text-foreground">
                  For Companies
                </CardTitle>
              </div>
            </CardHeader>

            <CardContent className="space-y-6">
              <p className="text-muted-foreground leading-relaxed text-[17px]">
                <span className="text-xl font-semibold text-[#1A5D57]">Your trusted partner.</span>
                <br /><br />
                Our specialists and smart.R system find the right IT talent faster, so you can focus
                on building great products instead of endless CV screening.
              </p>

              <ul className="space-y-3">
                {[
                  "Dedicated account manager",
                  "Pre-screened candidates only",
                  "Smart semantic search with smart.R",
                  "Transparent process from day one",
                ].map((item, index) => (
                  <li
                    key={index}
                    className="flex items-start gap-3 text-muted-foreground text-md"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2.5 shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>

              <div className="flex flex-wrap gap-3 pt-6">
                <Button className="bg-primary hover:bg-primary/90 text-primary-foreground rounded-xl px-8 py-6 text-base font-medium transition-all active:scale-95">
                  See how we help
                </Button>
                <Button
                  variant="outline"
                  className="border-primary/30 hover:bg-primary/5 rounded-xl px-8 py-6 text-base font-medium transition-all"
                >
                  Learn more
                </Button>
              </div>
            </CardContent>
          </Card>

        </div>
      </div>
    </section>
  )
}
import { Button } from "@/components/ui/button"

export function FinalCtaSection() {
  return (
    <section className="py-24 md:py-32 px-6">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="
        text-4xl md:text-5xl font-light text-foreground mb-8 text-balance">
          Ready to find your next great match?
        </h2>

        <div className="flex flex-wrap justify-center gap-4">
          <Button className="bg-primary text-primary-foreground hover:bg-primary/90 rounded-lg px-10 py-6 text-lg">
            I&apos;m a candidate
          </Button>
          <Button
            variant="outline"
            className="border-primary text-primary hover:bg-primary/5 rounded-lg px-10 py-6 text-lg"
          >
            I&apos;m a company
          </Button>
        </div>
      </div>
    </section>
  )
}

import { Button } from "@/components/ui/button";
import { ArrowRight, BookOpen, Users, Brain, Leaf } from "lucide-react";

/**
 * Somatic Minimalism Design Philosophy:
 * - Warm stone (cream, taupe) + forest green + terracotta palette
 * - Generous whitespace and asymmetric layouts
 * - Gentle animations that support nervous system regulation
 * - Typography: Crimson Text (serif, elegant) + Inter (sans-serif, readable)
 * - Tactile quality through subtle textures and organic dividers
 */

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
        <div className="container py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Brain className="w-6 h-6 text-primary" />
            <span className="font-semibold text-lg">From the Storm to the Fire</span>
          </div>
          <div className="flex gap-4">
            <Button variant="ghost" size="sm">
              About
            </Button>
            <Button variant="ghost" size="sm">
              Seminar
            </Button>
            <Button size="sm" className="bg-primary text-primary-foreground hover:bg-primary/90">
              Learn More
            </Button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: "url('/images/hero-banner.png')",
            opacity: 0.6,
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/80 to-transparent" />

        <div className="container relative z-10 grid grid-cols-1 md:grid-cols-2 gap-12 items-center py-20">
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-5xl md:text-6xl leading-tight text-balance">
                From the Storm to the Fire
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed">
                A survival story told backwards: from damage → meaning → agency.
              </p>
            </div>

            <p className="text-lg leading-relaxed max-w-lg">
              Understand how early trauma shapes the nervous system, why survival strategies become self-destructive, and how healing actually happens—through grounded, embodied recovery.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90">
                Explore the Book <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
              <Button size="lg" variant="outline">
                View the Seminar
              </Button>
            </div>
          </div>

          <div className="hidden md:block relative">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-accent/10 rounded-lg" />
            <img
              src="/images/section-healing.png"
              alt="Healing and growth"
              className="w-full h-auto rounded-lg shadow-lg"
            />
          </div>
        </div>
      </section>

      {/* Section Divider */}
      <div className="section-divider" />

      {/* The Problem: Nervous System Dysregulation */}
      <section className="py-20 bg-gradient-to-b from-background to-muted/20">
        <div className="container space-y-12">
          <div className="max-w-3xl">
            <h2 className="text-4xl md:text-5xl mb-6 text-balance">
              The Body Keeps the Score
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              When trauma happens early—whether through medical isolation, domestic violence, or other overwhelming experiences—the nervous system learns to stay on high alert. It becomes dysregulated: caught between hyperarousal (fight-or-flight) and hypoarousal (freeze-or-shutdown). This isn't a choice. It's physiology.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Card 1: Early Wiring */}
            <div className="bg-card rounded-lg p-8 border border-border hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center mb-4">
                <Brain className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Early Wiring</h3>
              <p className="text-muted-foreground leading-relaxed">
                The first years shape the nervous system's baseline. NICU isolation, domestic violence, or medical trauma create a "Glass Box Blueprint"—a system wired for danger even when safe.
              </p>
            </div>

            {/* Card 2: Hyperarousal */}
            <div className="bg-card rounded-lg p-8 border border-border hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-accent/20 rounded-lg flex items-center justify-center mb-4">
                <Users className="w-6 h-6 text-accent" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Hyperarousal</h3>
              <p className="text-muted-foreground leading-relaxed">
                Chronic anxiety, panic attacks, irritability, and the "fawn response"—people-pleasing masquerading as compliance. The body stays in fight-or-flight, exhausting itself.
              </p>
            </div>

            {/* Card 3: Maladaptive Coping */}
            <div className="bg-card rounded-lg p-8 border border-border hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center mb-4">
                <Leaf className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Maladaptive Coping</h3>
              <p className="text-muted-foreground leading-relaxed">
                Addiction, workaholism, and isolation become regulation strategies. Not because of weakness, but because the dysregulated nervous system desperately seeks relief.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Section Divider */}
      <div className="section-divider" />

      {/* The Book: From the Storm to the Fire */}
      <section className="py-20">
        <div className="container grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="order-2 md:order-1">
            <img
              src="/images/section-wiring.png"
              alt="Early nervous system wiring"
              className="w-full h-auto rounded-lg shadow-lg"
            />
          </div>

          <div className="order-1 md:order-2 space-y-8">
            <div className="space-y-4">
              <h2 className="text-4xl md:text-5xl text-balance">
                A Memoir That Explains Everything
              </h2>
              <p className="text-lg text-muted-foreground">
                This isn't just a survival story. It's a map.
              </p>
            </div>

            <div className="space-y-6">
              <div className="space-y-2">
                <h3 className="font-semibold text-lg">Act I: The Wiring</h3>
                <p className="text-muted-foreground">
                  NICU isolation, domestic violence, and early trauma that shaped a nervous system wired for survival.
                </p>
              </div>

              <div className="space-y-2">
                <h3 className="font-semibold text-lg">Act II: The Fire</h3>
                <p className="text-muted-foreground">
                  How survival strategies—addiction, hypervigilance, chaotic relationships—became self-destructive patterns.
                </p>
              </div>

              <div className="space-y-2">
                <h3 className="font-semibold text-lg">Act III: The Map</h3>
                <p className="text-muted-foreground">
                  Understanding Polyvagal Theory, the Window of Tolerance, and why symptoms aren't the root cause.
                </p>
              </div>

              <div className="space-y-2">
                <h3 className="font-semibold text-lg">Act IV: The Cost</h3>
                <p className="text-muted-foreground">
                  The quiet grief of lost years, lost identity, and the loneliness beneath the noise.
                </p>
              </div>

              <div className="space-y-2">
                <h3 className="font-semibold text-lg">Act V: The Ember</h3>
                <p className="text-muted-foreground">
                  Grounded healing—not toxic hope, but real footing. Still burning, still here.
                </p>
              </div>
            </div>

            <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90">
              <BookOpen className="w-4 h-4 mr-2" />
              Get the Book
            </Button>
          </div>
        </div>
      </section>

      {/* Section Divider */}
      <div className="section-divider" />

      {/* The Seminar */}
      <section className="py-20 bg-gradient-to-b from-background to-muted/20">
        <div className="container space-y-12">
          <div className="max-w-3xl">
            <h2 className="text-4xl md:text-5xl mb-6 text-balance">
              Harvard-Style Seminar: 90 Minutes of Interactive Learning
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              A complete, ready-to-deliver seminar for educators, clinicians, and trainers. Structured with lecture bursts, discussion prompts, breakout activities, role-plays, and reflections.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Seminar Feature 1 */}
            <div className="space-y-4">
              <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center">
                <Brain className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-2xl font-semibold">Six Thematic Parts</h3>
              <p className="text-muted-foreground leading-relaxed">
                Early wiring, hyperarousal, hypoarousal, addiction as regulation, relationships, and healing. Each part includes lecture, activity, and integrated discussion.
              </p>
            </div>

            {/* Seminar Feature 2 */}
            <div className="space-y-4">
              <div className="w-12 h-12 bg-accent/20 rounded-lg flex items-center justify-center">
                <Users className="w-6 h-6 text-accent" />
              </div>
              <h3 className="text-2xl font-semibold">Interactive Format</h3>
              <p className="text-muted-foreground leading-relaxed">
                Breakout groups, role-plays, debates, and reflective writing. Students don't just learn—they wrestle with concepts through embodied practice.
              </p>
            </div>

            {/* Seminar Feature 3 */}
            <div className="space-y-4">
              <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center">
                <BookOpen className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-2xl font-semibold">Complete Package</h3>
              <p className="text-muted-foreground leading-relaxed">
                Full transcript, activity instructions, discussion prompts, key terms study guide, and assignments. Drop it into any classroom or training setting.
              </p>
            </div>

            {/* Seminar Feature 4 */}
            <div className="space-y-4">
              <div className="w-12 h-12 bg-accent/20 rounded-lg flex items-center justify-center">
                <Leaf className="w-6 h-6 text-accent" />
              </div>
              <h3 className="text-2xl font-semibold">Trauma-Informed</h3>
              <p className="text-muted-foreground leading-relaxed">
                Grounded in Polyvagal Theory, the Window of Tolerance, and somatic practices. Teaches both neurobiology and systemic critique.
              </p>
            </div>
          </div>

          <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90">
            Access the Seminar <ArrowRight className="w-4 h-4 ml-2" />
          </Button>
        </div>
      </section>

      {/* Section Divider */}
      <div className="section-divider" />

      {/* Key Concepts */}
      <section className="py-20">
        <div className="container space-y-12">
          <h2 className="text-4xl md:text-5xl text-balance">
            Key Concepts You'll Understand
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Concept 1 */}
            <div className="bg-card rounded-lg p-8 border border-border">
              <h3 className="text-xl font-semibold mb-3">Polyvagal Theory</h3>
              <p className="text-muted-foreground leading-relaxed">
                How the vagus nerve regulates survival states: ventral vagal (safety and social engagement), sympathetic (fight-or-flight), and dorsal vagal (collapse/shutdown).
              </p>
            </div>

            {/* Concept 2 */}
            <div className="bg-card rounded-lg p-8 border border-border">
              <h3 className="text-xl font-semibold mb-3">Window of Tolerance</h3>
              <p className="text-muted-foreground leading-relaxed">
                The optimal zone where we can manage stress. Trauma shrinks this window, leaving people vulnerable to extreme swings between hyperarousal and hypoarousal.
              </p>
            </div>

            {/* Concept 3 */}
            <div className="bg-card rounded-lg p-8 border border-border">
              <h3 className="text-xl font-semibold mb-3">Nervous System Dysregulation</h3>
              <p className="text-muted-foreground leading-relaxed">
                The chronic state where the body remains locked in survival mode—hypervigilant, anxious, or shut down—even when the threat has passed.
              </p>
            </div>

            {/* Concept 4 */}
            <div className="bg-card rounded-lg p-8 border border-border">
              <h3 className="text-xl font-semibold mb-3">Addiction as Regulation</h3>
              <p className="text-muted-foreground leading-relaxed">
                Addiction isn't the primary problem—it's a desperate attempt to regulate an overwhelmed nervous system. Understanding this shifts treatment and stigma.
              </p>
            </div>

            {/* Concept 5 */}
            <div className="bg-card rounded-lg p-8 border border-border">
              <h3 className="text-xl font-semibold mb-3">Embodied Trauma</h3>
              <p className="text-muted-foreground leading-relaxed">
                The body learns and remembers before the mind. Sleep paralysis, bedwetting, sensory overload, and hypervigilance are physiological, not psychological failures.
              </p>
            </div>

            {/* Concept 6 */}
            <div className="bg-card rounded-lg p-8 border border-border">
              <h3 className="text-xl font-semibold mb-3">Healing Through Regulation</h3>
              <p className="text-muted-foreground leading-relaxed">
                Recovery happens through somatic practices, co-regulation, and neuroplasticity—not just insight. The body must feel safe before the mind can heal.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Section Divider */}
      <div className="section-divider" />

      {/* Who This Is For */}
      <section className="py-20 bg-gradient-to-b from-background to-muted/20">
        <div className="container space-y-12">
          <h2 className="text-4xl md:text-5xl text-balance">
            Who This Is For
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="space-y-4">
              <h3 className="text-xl font-semibold">Readers & Survivors</h3>
              <p className="text-muted-foreground leading-relaxed">
                If you've felt "off" your whole life, struggled with anxiety or addiction, or wondered why your body won't relax—this book explains why and shows you a path forward.
              </p>
            </div>

            <div className="space-y-4">
              <h3 className="text-xl font-semibold">Educators & Clinicians</h3>
              <p className="text-muted-foreground leading-relaxed">
                The seminar is ready to teach. Use it in psychology courses, trauma training, social work programs, or clinical settings. Complete with activities and discussion prompts.
              </p>
            </div>

            <div className="space-y-4">
              <h3 className="text-xl font-semibold">Organizations & Trainers</h3>
              <p className="text-muted-foreground leading-relaxed">
                Deliver trauma-informed training to your team. The seminar is structured, evidence-based, and designed for real engagement—not passive learning.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Section Divider */}
      <div className="section-divider" />

      {/* CTA Section */}
      <section className="py-20">
        <div className="container max-w-3xl text-center space-y-8">
          <h2 className="text-4xl md:text-5xl text-balance">
            Ready to Understand the Body's Wisdom?
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            The body keeps the score—but healing is possible. Start with the book, teach with the seminar, or both.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
            <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90">
              <BookOpen className="w-4 h-4 mr-2" />
              Get the Book
            </Button>
            <Button size="lg" variant="outline">
              Access the Seminar
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-muted/30 border-t border-border py-12">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            <div className="space-y-2">
              <h4 className="font-semibold">About</h4>
              <p className="text-sm text-muted-foreground">
                Resources for understanding nervous system dysregulation and healing.
              </p>
            </div>

            <div className="space-y-2">
              <h4 className="font-semibold">Resources</h4>
              <ul className="text-sm text-muted-foreground space-y-1">
                <li><a href="#" className="hover:text-foreground transition">The Book</a></li>
                <li><a href="#" className="hover:text-foreground transition">The Seminar</a></li>
                <li><a href="#" className="hover:text-foreground transition">Key Concepts</a></li>
              </ul>
            </div>

            <div className="space-y-2">
              <h4 className="font-semibold">Contact</h4>
              <p className="text-sm text-muted-foreground">
                Questions? Reach out to learn more.
              </p>
            </div>
          </div>

          <div className="border-t border-border pt-8 text-center text-sm text-muted-foreground">
            <p>&copy; 2025 From the Storm to the Fire. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

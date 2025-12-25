import { ArrowRight, BookOpen, Users, Brain, Leaf, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";

/**
 * Ivy League Masterclass Design Philosophy:
 * - Academic elegance with refined typography hierarchy (Crimson Text serif + Inter sans-serif)
 * - Deep forest green (#2d5a47), burgundy (#6b3e2e), ivory (#fefcf8) palette
 * - Premium whitespace and intentional breathing room
 * - Sophisticated color use and refined visual hierarchy
 * - Subtle depth through refined shadows and refined borders
 * - Refined interactions without visual noise
 * - Letter-spacing and kerning for typographic refinement
 */

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Navigation - Refined */}
      <nav className="sticky top-0 z-50 bg-background/98 backdrop-blur-md border-b border-border/30">
        <div className="container py-5 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-sm bg-primary flex items-center justify-center">
              <Brain className="w-5 h-5 text-primary-foreground" />
            </div>
            <span className="font-serif text-lg font-semibold tracking-tight">From the Storm to the Fire</span>
          </div>
          <div className="flex gap-6 items-center">
            <button className="text-sm font-sans font-medium hover-subtle">
              About
            </button>
            <button className="text-sm font-sans font-medium hover-subtle">
              Seminar
            </button>
            <Button className="btn-primary text-sm">
              Learn More
            </Button>
          </div>
        </div>
      </nav>

      {/* Hero Section - Refined */}
      <section className="relative min-h-screen flex items-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url(${import.meta.env.BASE_URL}images/hero-banner.png)`,
            opacity: 0.5,
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/85 to-transparent" />

        <div className="container relative z-10 grid grid-cols-1 md:grid-cols-2 gap-16 items-center py-24">
          <div className="space-y-10">
            <div className="space-y-6">
              <h1 className="text-6xl md:text-7xl font-serif font-bold leading-tight text-balance tracking-tight">
                From the Storm to the Fire
              </h1>
              <p className="text-xl font-serif italic text-muted-foreground leading-relaxed max-w-lg">
                A survival story told backwards: from damage → meaning → agency.
              </p>
            </div>

            <p className="text-lg leading-relaxed max-w-lg text-muted-foreground">
              Understand how early trauma shapes the nervous system, why survival strategies become self-destructive, and how healing actually happens—through grounded, embodied recovery.
            </p>

            <div className="flex flex-col sm:flex-row gap-5 pt-6">
              <Button className="btn-primary">
                Explore the Book <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
              <Button className="btn-secondary">
                View the Seminar
              </Button>
            </div>
          </div>

          <div className="hidden md:block relative">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/8 to-accent/8 rounded-sm" />
            <img
              src={`${import.meta.env.BASE_URL}images/section-healing.png`}
              alt="Healing and growth"
              className="w-full h-auto rounded-sm shadow-premium-lg"
            />
          </div>
        </div>
      </section>

      {/* Section Divider */}
      <div className="section-divider" />

      {/* The Problem: Nervous System Dysregulation */}
      <section className="py-24 gradient-subtle">
        <div className="container space-y-16">
          <div className="max-w-3xl">
            <h2 className="text-5xl md:text-6xl font-serif font-bold mb-8 text-balance tracking-tight">
              The Body Keeps the Score
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed max-w-2xl">
              When trauma happens early—whether through medical isolation, domestic violence, or other overwhelming experiences—the nervous system learns to stay on high alert. It becomes dysregulated: caught between hyperarousal (fight-or-flight) and hypoarousal (freeze-or-shutdown). This isn't a choice. It's physiology.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {/* Card 1: Early Wiring */}
            <div className="card-premium space-y-4">
              <div className="w-12 h-12 bg-primary/12 rounded-sm flex items-center justify-center">
                <Brain className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-2xl font-serif font-semibold">Early Wiring</h3>
              <p className="text-muted-foreground leading-relaxed text-sm">
                The first years shape the nervous system's baseline. NICU isolation, domestic violence, or medical trauma create a "Glass Box Blueprint"—a system wired for danger even when safe.
              </p>
            </div>

            {/* Card 2: Hyperarousal */}
            <div className="card-premium space-y-4">
              <div className="w-12 h-12 bg-accent/12 rounded-sm flex items-center justify-center">
                <Users className="w-6 h-6 text-accent" />
              </div>
              <h3 className="text-2xl font-serif font-semibold">Hyperarousal</h3>
              <p className="text-muted-foreground leading-relaxed text-sm">
                Chronic anxiety, panic attacks, irritability, and the "fawn response"—people-pleasing masquerading as compliance. The body stays in fight-or-flight, exhausting itself.
              </p>
            </div>

            {/* Card 3: Maladaptive Coping */}
            <div className="card-premium space-y-4">
              <div className="w-12 h-12 bg-primary/12 rounded-sm flex items-center justify-center">
                <Leaf className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-2xl font-serif font-semibold">Maladaptive Coping</h3>
              <p className="text-muted-foreground leading-relaxed text-sm">
                Addiction, workaholism, and isolation become regulation strategies. Not because of weakness, but because the dysregulated nervous system desperately seeks relief.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Section Divider */}
      <div className="section-divider" />

      {/* The Book: From the Storm to the Fire */}
      <section className="py-24">
        <div className="container grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <div className="order-2 md:order-1">
            <img
              src={`${import.meta.env.BASE_URL}images/section-wiring.png`}
              alt="Early nervous system wiring"
              className="w-full h-auto rounded-sm shadow-premium-lg"
            />
          </div>

          <div className="order-1 md:order-2 space-y-10">
            <div className="space-y-4">
              <h2 className="text-5xl md:text-6xl font-serif font-bold text-balance tracking-tight">
                A Memoir That Explains Everything
              </h2>
              <p className="text-lg font-serif italic text-muted-foreground">
                This isn't just a survival story. It's a map.
              </p>
            </div>

            <div className="space-y-6">
              {/* Act I */}
              <div className="space-y-2">
                <h4 className="font-serif text-xl font-semibold">Act I: The Wiring</h4>
                <p className="text-muted-foreground leading-relaxed text-sm">
                  NICU isolation, domestic violence, and early trauma that shaped a nervous system wired for survival.
                </p>
              </div>

              {/* Act II */}
              <div className="space-y-2">
                <h4 className="font-serif text-xl font-semibold">Act II: The Fire</h4>
                <p className="text-muted-foreground leading-relaxed text-sm">
                  How survival strategies—addiction, hypervigilance, chaotic relationships—became self-destructive patterns.
                </p>
              </div>

              {/* Act III */}
              <div className="space-y-2">
                <h4 className="font-serif text-xl font-semibold">Act III: The Map</h4>
                <p className="text-muted-foreground leading-relaxed text-sm">
                  Understanding Polyvagal Theory, the Window of Tolerance, and why symptoms aren't the root cause.
                </p>
              </div>

              {/* Act IV */}
              <div className="space-y-2">
                <h4 className="font-serif text-xl font-semibold">Act IV: The Cost</h4>
                <p className="text-muted-foreground leading-relaxed text-sm">
                  The quiet grief of lost years, lost identity, and the loneliness beneath the noise.
                </p>
              </div>

              {/* Act V */}
              <div className="space-y-2">
                <h4 className="font-serif text-xl font-semibold">Act V: The Ember</h4>
                <p className="text-muted-foreground leading-relaxed text-sm">
                  Grounded healing—not toxic hope, but real footing. Still burning, still here.
                </p>
              </div>
            </div>

            <Button className="btn-primary">
              Get the Book <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </div>
        </div>
      </section>

      {/* Section Divider */}
      <div className="section-divider" />

      {/* The Seminar */}
      <section className="py-24 gradient-subtle">
        <div className="container space-y-16">
          <div className="max-w-3xl">
            <h2 className="text-5xl md:text-6xl font-serif font-bold mb-8 text-balance tracking-tight">
              Harvard-Style Seminar
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              90 minutes of interactive learning. A complete, ready-to-deliver seminar for educators, clinicians, and trainers. Structured with lecture bursts, discussion prompts, breakout activities, role-plays, and reflections.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {/* Seminar Feature 1 */}
            <div className="card-premium space-y-4">
              <div className="w-12 h-12 bg-primary/12 rounded-sm flex items-center justify-center">
                <Brain className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-2xl font-serif font-semibold">Six Thematic Parts</h3>
              <p className="text-muted-foreground leading-relaxed text-sm">
                Early wiring, hyperarousal, hypoarousal, addiction as regulation, relationships, and healing. Each part includes lecture, activity, and integrated discussion.
              </p>
            </div>

            {/* Seminar Feature 2 */}
            <div className="card-premium space-y-4">
              <div className="w-12 h-12 bg-accent/12 rounded-sm flex items-center justify-center">
                <Users className="w-6 h-6 text-accent" />
              </div>
              <h3 className="text-2xl font-serif font-semibold">Interactive Format</h3>
              <p className="text-muted-foreground leading-relaxed text-sm">
                Breakout groups, role-plays, debates, and reflective writing. Students don't just learn—they wrestle with concepts through embodied practice.
              </p>
            </div>

            {/* Seminar Feature 3 */}
            <div className="card-premium space-y-4">
              <div className="w-12 h-12 bg-primary/12 rounded-sm flex items-center justify-center">
                <BookOpen className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-2xl font-serif font-semibold">Complete Package</h3>
              <p className="text-muted-foreground leading-relaxed text-sm">
                Full transcript, activity instructions, discussion prompts, key terms study guide, and assignments. Drop it into any classroom or training setting.
              </p>
            </div>

            {/* Seminar Feature 4 */}
            <div className="card-premium space-y-4">
              <div className="w-12 h-12 bg-accent/12 rounded-sm flex items-center justify-center">
                <Leaf className="w-6 h-6 text-accent" />
              </div>
              <h3 className="text-2xl font-serif font-semibold">Trauma-Informed</h3>
              <p className="text-muted-foreground leading-relaxed text-sm">
                Grounded in Polyvagal Theory, the Window of Tolerance, and somatic practices. Teaches both neurobiology and systemic critique.
              </p>
            </div>
          </div>

          <Button className="btn-primary">
            Access the Seminar <ArrowRight className="w-4 h-4 ml-2" />
          </Button>
        </div>
      </section>

      {/* Section Divider */}
      <div className="section-divider" />

      {/* Learning Objectives Section */}
      <section className="py-24">
        <div className="container space-y-16">
          <div className="max-w-3xl">
            <h2 className="text-5xl md:text-6xl font-serif font-bold mb-8 text-balance tracking-tight">
              What Participants Will Learn
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              By the end of this 90-minute seminar, participants will be able to:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Objective 1 */}
            <div className="card-premium space-y-4">
              <div className="flex gap-4">
                <div className="badge-number flex-shrink-0">1</div>
                <div className="space-y-2">
                  <h4 className="font-serif text-lg font-semibold">Understand Nervous System Basics</h4>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    Grasp how the vagus nerve regulates survival states and why early trauma creates dysregulation that persists into adulthood.
                  </p>
                </div>
              </div>
            </div>

            {/* Objective 2 */}
            <div className="card-premium space-y-4">
              <div className="flex gap-4">
                <div className="badge-number-accent flex-shrink-0">2</div>
                <div className="space-y-2">
                  <h4 className="font-serif text-lg font-semibold">Recognize Dysregulation Patterns</h4>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    Identify hyperarousal, hypoarousal, and freeze responses in clients, students, or themselves—and understand the physiology behind each.
                  </p>
                </div>
              </div>
            </div>

            {/* Objective 3 */}
            <div className="card-premium space-y-4">
              <div className="flex gap-4">
                <div className="badge-number flex-shrink-0">3</div>
                <div className="space-y-2">
                  <h4 className="font-serif text-lg font-semibold">Reframe Addiction & Coping</h4>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    Shift from shame-based narratives to understanding addiction, workaholism, and isolation as nervous system regulation attempts.
                  </p>
                </div>
              </div>
            </div>

            {/* Objective 4 */}
            <div className="card-premium space-y-4">
              <div className="flex gap-4">
                <div className="badge-number-accent flex-shrink-0">4</div>
                <div className="space-y-2">
                  <h4 className="font-serif text-lg font-semibold">Apply the Window of Tolerance</h4>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    Use this framework to assess clients' capacity for stress and design interventions that expand their window rather than push beyond it.
                  </p>
                </div>
              </div>
            </div>

            {/* Objective 5 */}
            <div className="card-premium space-y-4">
              <div className="flex gap-4">
                <div className="badge-number flex-shrink-0">5</div>
                <div className="space-y-2">
                  <h4 className="font-serif text-lg font-semibold">Integrate Somatic Practices</h4>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    Understand why talk therapy alone is insufficient and how embodied practices support real nervous system healing.
                  </p>
                </div>
              </div>
            </div>

            {/* Objective 6 */}
            <div className="card-premium space-y-4">
              <div className="flex gap-4">
                <div className="badge-number-accent flex-shrink-0">6</div>
                <div className="space-y-2">
                  <h4 className="font-serif text-lg font-semibold">Teach with Confidence</h4>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    Leave with a complete, ready-to-deliver framework for teaching trauma and dysregulation to any audience—from clinicians to community groups.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section Divider */}
      <div className="section-divider" />

      {/* Key Concepts */}
      <section className="py-24 gradient-subtle">
        <div className="container space-y-16">
          <h2 className="text-5xl md:text-6xl font-serif font-bold text-balance tracking-tight">
            Key Concepts You'll Understand
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {/* Concept 1 */}
            <div className="space-y-3">
              <h3 className="text-2xl font-serif font-semibold">Polyvagal Theory</h3>
              <p className="text-muted-foreground leading-relaxed text-sm">
                How the vagus nerve regulates survival states: ventral vagal (safety and social engagement), sympathetic (fight-or-flight), and dorsal vagal (collapse/shutdown).
              </p>
            </div>

            {/* Concept 2 */}
            <div className="space-y-3">
              <h3 className="text-2xl font-serif font-semibold">Window of Tolerance</h3>
              <p className="text-muted-foreground leading-relaxed text-sm">
                The optimal zone where we can manage stress. Trauma shrinks this window, leaving people vulnerable to extreme swings between hyperarousal and hypoarousal.
              </p>
            </div>

            {/* Concept 3 */}
            <div className="space-y-3">
              <h3 className="text-2xl font-serif font-semibold">Nervous System Dysregulation</h3>
              <p className="text-muted-foreground leading-relaxed text-sm">
                The chronic state where the body remains locked in survival mode—hypervigilant, anxious, or shut down—even when the threat has passed.
              </p>
            </div>

            {/* Concept 4 */}
            <div className="space-y-3">
              <h3 className="text-2xl font-serif font-semibold">Addiction as Regulation</h3>
              <p className="text-muted-foreground leading-relaxed text-sm">
                Addiction isn't the primary problem—it's a desperate attempt to regulate an overwhelmed nervous system. Understanding this shifts treatment and stigma.
              </p>
            </div>

            {/* Concept 5 */}
            <div className="space-y-3">
              <h3 className="text-2xl font-serif font-semibold">Embodied Trauma</h3>
              <p className="text-muted-foreground leading-relaxed text-sm">
                The body learns and remembers before the mind. Sleep paralysis, bedwetting, sensory overload, and hypervigilance are physiological, not psychological failures.
              </p>
            </div>

            {/* Concept 6 */}
            <div className="space-y-3">
              <h3 className="text-2xl font-serif font-semibold">Healing Through Regulation</h3>
              <p className="text-muted-foreground leading-relaxed text-sm">
                Recovery happens through somatic practices, co-regulation, and neuroplasticity—not just insight. The body must feel safe before the mind can heal.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Section Divider */}
      <div className="section-divider" />

      {/* Who This Is For */}
      <section className="py-24">
        <div className="container space-y-16">
          <h2 className="text-5xl md:text-6xl font-serif font-bold text-balance tracking-tight">
            Who This Is For
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {/* Readers & Survivors */}
            <div className="space-y-4">
              <h3 className="text-2xl font-serif font-semibold">Readers & Survivors</h3>
              <p className="text-muted-foreground leading-relaxed text-sm">
                If you've felt "off" your whole life, struggled with anxiety or addiction, or wondered why your body won't relax—this book explains why and shows you a path forward.
              </p>
            </div>

            {/* Educators & Clinicians */}
            <div className="space-y-4">
              <h3 className="text-2xl font-serif font-semibold">Educators & Clinicians</h3>
              <p className="text-muted-foreground leading-relaxed text-sm">
                The seminar is ready to teach. Use it in psychology courses, trauma training, social work programs, or clinical settings. Complete with activities and discussion prompts.
              </p>
            </div>

            {/* Organizations & Trainers */}
            <div className="space-y-4">
              <h3 className="text-2xl font-serif font-semibold">Organizations & Trainers</h3>
              <p className="text-muted-foreground leading-relaxed text-sm">
                Deliver trauma-informed training to your team. The seminar is structured, evidence-based, and designed for real engagement—not passive learning.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Section Divider */}
      <div className="section-divider" />

      {/* Testimonials Section */}
      <section className="py-24 gradient-subtle">
        <div className="container space-y-16">
          <div className="max-w-3xl">
            <h2 className="text-5xl md:text-6xl font-serif font-bold mb-6 text-balance tracking-tight">
              Voices of Healing & Recognition
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Readers, clinicians, and educators share how this work has shifted their understanding of trauma, dysregulation, and recovery.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {/* Testimonial 1 */}
            <div className="card-premium space-y-4">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-primary/15 flex items-center justify-center flex-shrink-0 font-serif font-bold text-primary">
                  JM
                </div>
                <div className="space-y-1">
                  <h4 className="font-serif font-semibold">Jennifer M.</h4>
                  <p className="text-xs text-muted-foreground">Reader, Trauma Survivor</p>
                </div>
              </div>
              <p className="text-muted-foreground leading-relaxed text-sm italic">
                "I've been in therapy for years, but this book finally explained why my body won't relax. Reading about the Glass Box Blueprint—the NICU isolation—felt like someone was describing my entire life. For the first time, I don't feel broken. I feel adapted. That shift changed everything."
              </p>
            </div>

            {/* Testimonial 2 */}
            <div className="card-premium space-y-4">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-accent/15 flex items-center justify-center flex-shrink-0 font-serif font-bold text-accent">
                  DR
                </div>
                <div className="space-y-1">
                  <h4 className="font-serif font-semibold">Dr. Rachel Torres</h4>
                  <p className="text-xs text-muted-foreground">Licensed Clinical Psychologist</p>
                </div>
              </div>
              <p className="text-muted-foreground leading-relaxed text-sm italic">
                "The seminar is exceptional. My students finally understand why trauma isn't just a memory problem—it's a nervous system problem. The case study approach makes Polyvagal Theory accessible without dumbing it down. I've already taught it twice and plan to make it annual."
              </p>
            </div>

            {/* Testimonial 3 */}
            <div className="card-premium space-y-4">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-primary/15 flex items-center justify-center flex-shrink-0 font-serif font-bold text-primary">
                  MC
                </div>
                <div className="space-y-1">
                  <h4 className="font-serif font-semibold">Marcus C.</h4>
                  <p className="text-xs text-muted-foreground">Reader, In Recovery</p>
                </div>
              </div>
              <p className="text-muted-foreground leading-relaxed text-sm italic">
                "The chapter on addiction as regulation stopped me cold. I've been sober for three years, but I never understood that my drinking wasn't about pleasure—it was about turning down the volume. This reframe has transformed how I work with my sponsor and my therapist."
              </p>
            </div>

            {/* Testimonial 4 */}
            <div className="card-premium space-y-4">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-accent/15 flex items-center justify-center flex-shrink-0 font-serif font-bold text-accent">
                  SK
                </div>
                <div className="space-y-1">
                  <h4 className="font-serif font-semibold">Sophia K.</h4>
                  <p className="text-xs text-muted-foreground">Social Work Educator, University</p>
                </div>
              </div>
              <p className="text-muted-foreground leading-relaxed text-sm italic">
                "I've taught trauma for fifteen years. This seminar is the most integrated approach I've seen—it bridges neurobiology, lived experience, and systemic critique. My students leave understanding not just the theory, but the humanity behind it."
              </p>
            </div>

            {/* Testimonial 5 */}
            <div className="card-premium space-y-4">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-primary/15 flex items-center justify-center flex-shrink-0 font-serif font-bold text-primary">
                  AH
                </div>
                <div className="space-y-1">
                  <h4 className="font-serif font-semibold">Amanda H.</h4>
                  <p className="text-xs text-muted-foreground">Reader, Parent & Therapist</p>
                </div>
              </div>
              <p className="text-muted-foreground leading-relaxed text-sm italic">
                "As a parent working through my own trauma, this book gave me language for what I see in my kids—and permission to heal without shame. The chapter on parenting from dysregulation was devastating and liberating at once."
              </p>
            </div>

            {/* Testimonial 6 */}
            <div className="card-premium space-y-4">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-accent/15 flex items-center justify-center flex-shrink-0 font-serif font-bold text-accent">
                  JL
                </div>
                <div className="space-y-1">
                  <h4 className="font-serif font-semibold">James L.</h4>
                  <p className="text-xs text-muted-foreground">Addiction Counselor, Treatment Center</p>
                </div>
              </div>
              <p className="text-muted-foreground leading-relaxed text-sm italic">
                "We've integrated this framework into our treatment program. Clients finally understand their addiction isn't a moral failure—it's a nervous system seeking regulation. Recovery rates have improved because shame has decreased."
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Section Divider */}
      <div className="section-divider" />

      {/* FAQ Section */}
      <section className="py-24 gradient-subtle">
        <div className="container space-y-16">
          <div className="max-w-3xl">
            <h2 className="text-5xl md:text-6xl font-serif font-bold mb-8 text-balance tracking-tight">
              Frequently Asked Questions
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Questions about the book, seminar, and how they fit into your life or practice.
            </p>
          </div>

          <div className="space-y-8 max-w-4xl">
            {/* FAQ 1 */}
            <div className="space-y-4">
              <h3 className="text-2xl font-serif font-semibold">Is this book for trauma survivors only?</h3>
              <p className="text-muted-foreground leading-relaxed text-sm">
                No. While the book speaks directly to trauma survivors, it is also essential reading for anyone working with trauma—clinicians, educators, parents, and organizational leaders. If you have ever wondered why your body will not relax, why you struggle with anxiety, or why you reach for maladaptive coping strategies, this book explains the why behind it all. Many readers without diagnosed trauma find it deeply resonant.
              </p>
            </div>

            {/* FAQ 2 */}
            <div className="space-y-4">
              <h3 className="text-2xl font-serif font-semibold">Can I teach the seminar without formal training in trauma?</h3>
              <p className="text-muted-foreground leading-relaxed text-sm">
                Yes. The seminar is designed to be taught by educators, clinicians, trainers, and even motivated facilitators without formal trauma credentials. It includes complete instructions, discussion prompts, activity guidance, and a full transcript. That said, if you are working with actively traumatized populations, some clinical training is recommended. For general audiences, educators, or organizational settings, the seminar stands alone.
              </p>
            </div>

            {/* FAQ 3 */}
            <div className="space-y-4">
              <h3 className="text-2xl font-serif font-semibold">How is this different from other trauma books?</h3>
              <p className="text-muted-foreground leading-relaxed text-sm">
                This work bridges lived experience, neurobiology, and systemic critique. It is not just theory—it is a survival story told backwards, grounded in Polyvagal Theory and the Window of Tolerance framework. The five-act structure creates a narrative arc that explains both the damage and the path forward. Many readers say it is the first book that made them feel understood rather than pathologized.
              </p>
            </div>

            {/* FAQ 4 */}
            <div className="space-y-4">
              <h3 className="text-2xl font-serif font-semibold">What is included in the seminar package?</h3>
              <p className="text-muted-foreground leading-relaxed text-sm">
                The complete 90-minute seminar includes: full transcript, detailed activity instructions for all six thematic parts, discussion prompts for each section, breakout group scenarios, role-play guidance, key terms study guide, reflection questions, and post-seminar assignments. You can teach it verbatim or adapt it to your audience. All materials are ready to use immediately.
              </p>
            </div>

            {/* FAQ 5 */}
            <div className="space-y-4">
              <h3 className="text-2xl font-serif font-semibold">Is this appropriate for diverse audiences?</h3>
              <p className="text-muted-foreground leading-relaxed text-sm">
                Yes. The seminar is designed to be trauma-informed and culturally responsive. It acknowledges systemic trauma, intergenerational impact, and the intersection of nervous system dysregulation with marginalization. The book speaks to individual experience while the seminar includes discussion prompts that invite systemic analysis. Both are appropriate for clinical settings, academic courses, community organizations, and corporate training.
              </p>
            </div>

            {/* FAQ 6 */}
            <div className="space-y-4">
              <h3 className="text-2xl font-serif font-semibold">How long does it take to read the book?</h3>
              <p className="text-muted-foreground leading-relaxed text-sm">
                Most readers complete the book in 4-6 hours of focused reading. However, many choose to read it slowly, chapter by chapter, allowing time for reflection and integration. Some readers revisit sections multiple times. The pace depends on your engagement with the material and whether you are reading for personal insight or professional preparation.
              </p>
            </div>

            {/* FAQ 7 */}
            <div className="space-y-4">
              <h3 className="text-2xl font-serif font-semibold">Can I use this in my therapy practice or training program?</h3>
              <p className="text-muted-foreground leading-relaxed text-sm">
                Absolutely. Many therapists recommend the book to clients as psychoeducation. Many training programs integrate the seminar into their curriculum. The framework is evidence-based and practical. If you are using it in a clinical or educational setting, we recommend reviewing the content with your team first to ensure it aligns with your approach.
              </p>
            </div>

            {/* FAQ 8 */}
            <div className="space-y-4">
              <h3 className="text-2xl font-serif font-semibold">What if I am triggered by the content?</h3>
              <p className="text-muted-foreground leading-relaxed text-sm">
                The book and seminar are trauma-informed but do address difficult topics: medical trauma, domestic violence, addiction, and survival responses. If you are actively in crisis or early in your healing journey, consider reading with a therapist support or in a facilitated group. The seminar includes guidance for facilitators on creating psychological safety and offering opt-out options for triggering activities.
              </p>
            </div>

            {/* FAQ 9 */}
            <div className="space-y-4">
              <h3 className="text-2xl font-serif font-semibold">Is there a refund policy?</h3>
              <p className="text-muted-foreground leading-relaxed text-sm">
                Please contact us directly with questions about refunds or returns. We stand behind the quality of both the book and seminar, and we are happy to discuss your needs.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Section Divider */}
      <div className="section-divider" />

      {/* CTA Section */}
      <section className="py-24">
        <div className="container max-w-3xl text-center space-y-12">
          <div className="space-y-6">
            <h2 className="text-5xl md:text-6xl font-serif font-bold text-balance tracking-tight">
              Ready to Understand the Body's Wisdom?
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              The body keeps the score—but healing is possible. Start with the book, teach with the seminar, or both.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-5 justify-center">
            <Button className="btn-primary">
              Get the Book <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
            <Button className="btn-secondary">
              Access the Seminar
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border/30 bg-gradient-to-b from-background to-muted/10 py-16">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
            <div className="space-y-4">
              <div className="flex items-center gap-2">
                <div className="w-6 h-6 rounded-sm bg-primary flex items-center justify-center">
                  <Brain className="w-4 h-4 text-primary-foreground" />
                </div>
                <span className="font-serif font-semibold">From the Storm to the Fire</span>
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed">
                A survival story told backwards. Understanding trauma, dysregulation, and healing.
              </p>
            </div>

            <div className="space-y-4">
              <h4 className="font-serif font-semibold">The Book</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="#" className="hover-subtle">Overview</a></li>
                <li><a href="#" className="hover-subtle">Five Acts</a></li>
                <li><a href="#" className="hover-subtle">Get the Book</a></li>
              </ul>
            </div>

            <div className="space-y-4">
              <h4 className="font-serif font-semibold">The Seminar</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="#" className="hover-subtle">Overview</a></li>
                <li><a href="#" className="hover-subtle">Learning Objectives</a></li>
                <li><a href="#" className="hover-subtle">Access Seminar</a></li>
              </ul>
            </div>

            <div className="space-y-4">
              <h4 className="font-serif font-semibold">Resources</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="#" className="hover-subtle">Key Concepts</a></li>
                <li><a href="#" className="hover-subtle">Testimonials</a></li>
                <li><a href="#" className="hover-subtle">Contact</a></li>
              </ul>
            </div>
          </div>

          <div className="border-t border-border/30 pt-8">
            <p className="text-center text-sm text-muted-foreground">
              © 2025 From the Storm to the Fire. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

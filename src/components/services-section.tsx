import { CheckCircle2 } from "lucide-react";
import { services } from "@/lib/registration-data";

export function ServicesSection({ tone = "light" }: { tone?: "light" | "muted" }) {
  return (
    <section className={tone === "muted" ? "bg-secondary/50 py-20" : "bg-background py-20"}>
      <div className="container-page">
        <span className="eyebrow">Sports development &amp; programme management</span>
        <h2 className="mt-3 max-w-3xl text-3xl font-bold text-primary sm:text-4xl">
          {services.statement}
        </h2>
        <p className="mt-4 max-w-2xl text-sm leading-relaxed text-muted-foreground">
          Our work covers the full cycle of sports development — from designing a programme
          to registering the athletes and running the competition.
        </p>

        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {services.areas.map((a) => (
            <article
              key={a.title}
              className="rounded-2xl border border-border bg-card p-6 shadow-sm transition-shadow hover:shadow-md"
            >
              <CheckCircle2 className="h-6 w-6 text-gold" />
              <h3 className="mt-4 text-base font-bold text-primary">{a.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{a.detail}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

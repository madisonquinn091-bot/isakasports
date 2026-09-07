import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { registrations } from "@/lib/registration-data";
import { images } from "@/lib/site-data";

export const Route = createFileRoute("/register/")({
  head: () => ({
    meta: [
      { title: "Sports Registration | ISAKA Sports Global Ventures Ltd" },
      {
        name: "description",
        content:
          "Register a club, school, athlete or team for ISAKA Sports programmes — football, basketball, athletics, marathon, cycling and individual sports.",
      },
      { property: "og:title", content: "Sports Registration — ISAKA Sports Global Ventures Ltd" },
      {
        property: "og:description",
        content:
          "Choose a registration form: club, basketball, athlete, marathon, cycling, individual sports or school sports.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: RegisterIndex,
});

function RegisterIndex() {
  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />

      <section className="relative isolate overflow-hidden bg-primary py-20 text-primary-foreground">
        <img
          src={images.youthMatches}
          alt=""
          aria-hidden
          className="absolute inset-0 -z-20 h-full w-full object-cover opacity-25"
        />
        <div className="container-page">
          <span className="eyebrow text-gold">Registration</span>
          <h1 className="mt-3 max-w-3xl text-4xl font-bold sm:text-5xl">
            Register for ISAKA Sports programmes and events
          </h1>
          <p className="mt-4 max-w-2xl text-sm leading-relaxed opacity-90">
            Each sport and event has its own short form. Choose the one that applies to you,
            fill it in and submit — our team receives every registration directly.
          </p>
        </div>
      </section>

      <section className="container-page py-20">
        <span className="eyebrow">Choose a form</span>
        <h2 className="mt-3 text-3xl font-bold text-primary sm:text-4xl">Registration options</h2>

        <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {registrations.map((r) => (
            <Link
              key={r.slug}
              to="/register/$type"
              params={{ type: r.slug }}
              className="group flex flex-col rounded-2xl border border-border bg-card p-7 shadow-sm transition-all hover:-translate-y-0.5 hover:shadow-md"
            >
              {r.capacity && (
                <span className="mb-3 w-fit rounded-full bg-secondary px-3 py-1 text-xs font-semibold uppercase tracking-[0.12em] text-primary">
                  Limited to {r.capacity}
                </span>
              )}
              <h3 className="text-lg font-bold text-primary">{r.title}</h3>
              <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">
                {r.description}
              </p>
              <span className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-gold-foreground">
                Register Now
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </span>
            </Link>
          ))}
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}

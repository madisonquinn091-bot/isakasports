import { createFileRoute } from "@tanstack/react-router";
import { Building2, Mail, MapPin, Phone } from "lucide-react";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { coach, company, images } from "@/lib/site-data";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact | ISAKA Sports Global Ventures Ltd" },
      {
        name: "description",
        content:
          "Get in touch with ISAKA Sports Global Ventures Ltd for coaching, player development and sports management in Port Harcourt, Nigeria.",
      },
      { property: "og:title", content: "Contact — ISAKA Sports Global Ventures Ltd" },
      {
        property: "og:description",
        content:
          "Reach ISAKA Sports Global Ventures Ltd for coaching, player development and sports management enquiries.",
      },
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />

      <section className="bg-primary py-16 text-primary-foreground">
        <div className="container-page">
          <span className="eyebrow text-gold">Contact</span>
          <h1 className="mt-3 text-4xl font-bold sm:text-5xl">Let's talk football</h1>
          <p className="mt-4 max-w-2xl text-sm opacity-90 sm:text-base">
            For coaching, player development, corporate sports programmes and consultancy
            enquiries.
          </p>
        </div>
      </section>

      <section className="container-page py-16">
        <div className="grid gap-8 md:grid-cols-3">
          <a
            href={coach.phoneHref}
            className="rounded-2xl border border-border bg-card p-7 transition-shadow hover:shadow-md"
          >
            <Phone className="h-6 w-6 text-gold" />
            <h2 className="mt-4 text-lg font-bold text-primary">Phone</h2>
            <p className="mt-1 text-sm text-foreground/85">{coach.phone}</p>
          </a>
          <a
            href={`mailto:${coach.email}`}
            className="rounded-2xl border border-border bg-card p-7 transition-shadow hover:shadow-md"
          >
            <Mail className="h-6 w-6 text-gold" />
            <h2 className="mt-4 text-lg font-bold text-primary">Email</h2>
            <p className="mt-1 break-words text-sm text-foreground/85">{coach.email}</p>
          </a>
          <div className="rounded-2xl border border-border bg-card p-7">
            <MapPin className="h-6 w-6 text-gold" />
            <h2 className="mt-4 text-lg font-bold text-primary">Location</h2>
            <p className="mt-1 text-sm text-foreground/85">{coach.location}</p>
          </div>
        </div>

        <div className="mt-14 grid items-start gap-10 md:grid-cols-2">
          <div className="rounded-2xl border border-border bg-secondary/50 p-8">
            <h2 className="flex items-center gap-2 text-2xl font-bold text-primary">
              <Building2 className="h-6 w-6 text-gold" /> Company details
            </h2>
            <dl className="mt-6 space-y-4 text-sm">
              {[
                ["Registered name", company.fullName],
                ["Registration number (RC)", company.rc],
                ["Status", company.status],
                ["Incorporation date", company.incorporated],
                ["Jurisdiction", company.jurisdiction],
                ["Legal address", company.address],
                ["Head Coach", coach.name],
              ].map(([k, v]) => (
                <div key={k}>
                  <dt className="text-xs font-semibold uppercase tracking-[0.12em] text-muted-foreground">
                    {k}
                  </dt>
                  <dd className="mt-1 font-medium text-foreground/90">{v}</dd>
                </div>
              ))}
            </dl>
          </div>

          <div className="overflow-hidden rounded-2xl border border-border bg-card">
            <img
              src={images.consultingEvents}
              alt="ISAKA Sports consulting and events"
              className="aspect-[4/3] w-full object-cover"
            />
            <div className="flex items-center gap-4 border-t border-border p-6">
              <img
                src={images.logo}
                alt={`${company.fullName} logo`}
                className="h-20 w-20 rounded-xl border border-border object-contain p-1.5"
              />
              <div>
                <p className="font-display text-lg font-bold text-primary">
                  {company.fullName}
                </p>
                <p className="text-sm text-muted-foreground">
                  Sports development &amp; consultancy · Nigeria
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}

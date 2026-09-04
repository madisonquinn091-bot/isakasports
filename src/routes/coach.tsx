import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { GraduationCap, Mail, MapPin, Phone, X } from "lucide-react";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { certificates, coach, education, images } from "@/lib/site-data";

export const Route = createFileRoute("/coach")({
  head: () => ({
    meta: [
      { title: "Dr. Ben Iwu Robert — Coach Profile & Certificates | ISAKA Sports" },
      {
        name: "description",
        content:
          "Coach profile, certifications and academic background of Dr. Ben Iwu Robert, Head Coach at ISAKA Sports Global Ventures Ltd.",
      },
      { property: "og:title", content: "Coach Profile & Certificates — Dr. Ben Iwu Robert" },
      {
        property: "og:description",
        content:
          "Every certificate on record, plus the coaching and academic background of Dr. Ben Iwu Robert.",
      },
    ],
  }),
  component: CoachPage,
});

function CoachPage() {
  const [zoom, setZoom] = useState<{ src: string; title: string } | null>(null);

  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />

      <section className="bg-primary py-16 text-primary-foreground">
        <div className="container-page grid items-center gap-10 md:grid-cols-[16rem_1fr]">
          <img
            src={images.coachPortrait}
            alt={`Portrait of ${coach.name}`}
            className="w-full max-w-[16rem] rounded-2xl border border-primary-foreground/20 object-cover"
          />
          <div>
            <span className="eyebrow text-gold">Coach profile</span>
            <h1 className="mt-3 text-4xl font-bold sm:text-5xl">{coach.name}</h1>
            <p className="mt-3 text-base opacity-90">{coach.title}</p>
            <ul className="mt-6 flex flex-wrap gap-x-6 gap-y-3 text-sm">
              <li className="flex items-center gap-2">
                <Phone className="h-4 w-4 text-gold" />
                <a href={coach.phoneHref} className="hover:underline">
                  {coach.phone}
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="h-4 w-4 text-gold" />
                <a href={`mailto:${coach.email}`} className="hover:underline">
                  {coach.email}
                </a>
              </li>
              <li className="flex items-center gap-2">
                <MapPin className="h-4 w-4 text-gold" />
                <span className="opacity-90">{coach.location}</span>
              </li>
            </ul>
            <p className="mt-6 max-w-2xl text-sm leading-relaxed opacity-90">{coach.bio}</p>
          </div>
        </div>
      </section>

      <section className="container-page py-20">
        <span className="eyebrow">Certifications &amp; credentials</span>
        <h2 className="mt-3 text-3xl font-bold text-primary sm:text-4xl">
          Every certificate on record
        </h2>
        <p className="mt-3 max-w-2xl text-sm text-muted-foreground">
          Click any certificate to view it full size. Names and dates are reproduced exactly
          as they appear on the original documents.
        </p>

        <div className="mt-10 grid gap-8 md:grid-cols-2">
          {certificates.map((c) => (
            <article
              key={c.title}
              className="overflow-hidden rounded-2xl border border-border bg-card shadow-sm"
            >
              <button
                type="button"
                onClick={() => setZoom({ src: c.image, title: c.title })}
                className="block w-full cursor-zoom-in bg-secondary/40"
              >
                <img
                  src={c.image}
                  alt={c.title}
                  loading="lazy"
                  className="max-h-[32rem] w-full object-contain"
                />
              </button>
              <div className="border-t border-border p-6">
                <h3 className="text-lg font-bold text-primary">{c.title}</h3>
                <p className="mt-1 text-sm font-medium text-foreground/80">{c.issuer}</p>
                <ul className="mt-3 space-y-1 text-sm text-muted-foreground">
                  {c.lines.map((l) => (
                    <li key={l}>{l}</li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="bg-secondary/50 py-20">
        <div className="container-page">
          <span className="eyebrow">Education</span>
          <h2 className="mt-3 text-3xl font-bold text-primary sm:text-4xl">
            Academic background
          </h2>
          <div className="mt-8 grid gap-5 sm:grid-cols-2">
            {education.map((e) => (
              <div key={e.school} className="rounded-2xl border border-border bg-card p-6">
                <p className="text-xs font-semibold uppercase tracking-[0.14em] text-gold-foreground">
                  {e.period}
                </p>
                <h3 className="mt-2 flex items-start gap-2 text-lg font-bold text-primary">
                  <GraduationCap className="mt-1 h-5 w-5 shrink-0 text-gold" />
                  {e.school}
                </h3>
                <p className="mt-2 text-sm text-muted-foreground">{e.detail}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {zoom && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-foreground/90 p-4"
          onClick={() => setZoom(null)}
        >
          <button
            type="button"
            aria-label="Close"
            className="absolute right-5 top-5 rounded-full bg-background/90 p-2 text-foreground"
            onClick={() => setZoom(null)}
          >
            <X className="h-5 w-5" />
          </button>
          <img
            src={zoom.src}
            alt={zoom.title}
            className="max-h-[92vh] max-w-full rounded-lg object-contain"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}

      <SiteFooter />
    </div>
  );
}

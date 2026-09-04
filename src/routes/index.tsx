import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, BadgeCheck, Building2, Trophy } from "lucide-react";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { awards, coach, company, experience, gallery, images } from "@/lib/site-data";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "ISAKA Sports Global Ventures Ltd | Football Coaching Nigeria" },
      {
        name: "description",
        content:
          "ISAKA Sports Global Ventures Ltd — high-performance football coaching, player development and sports management led by Dr. Ben Iwu Robert.",
      },
      { property: "og:title", content: "ISAKA Sports Global Ventures Ltd" },
      {
        property: "og:description",
        content:
          "High-performance football coaching, player development and strategic sports management in Nigeria.",
      },
    ],
  }),
  component: Home,
});

function Home() {
  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />

      <section className="relative isolate overflow-hidden">
        <img
          src={images.heroMedals}
          alt="Young players receiving medals at an ISAKA Sports tournament"
          className="absolute inset-0 -z-10 h-full w-full object-cover object-center"
        />
        <div className="absolute inset-0 -z-10 bg-gradient-to-b from-primary/85 via-primary/70 to-primary/90" />

        <div className="container-page flex min-h-[34rem] flex-col items-center justify-center py-24 text-center text-primary-foreground md:min-h-[40rem]">
          <span className="rounded-full border border-gold/60 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-gold">
            Sports Development &amp; Consultancy
          </span>
          <h1 className="mt-6 max-w-4xl text-4xl font-bold leading-[1.05] sm:text-5xl md:text-6xl">
            ISAKA Sports Global Ventures Ltd
          </h1>
          <p className="mt-6 max-w-2xl text-base leading-relaxed opacity-95 sm:text-lg">
            Building winning teams and disciplined young athletes across Nigeria — from
            grassroots academies to the Nigeria Oil and Gas Industry Games. Led by Head
            Coach {coach.name}.
          </p>
          <div className="mt-9 flex flex-wrap items-center justify-center gap-3">
            <Link
              to="/coach"
              className="inline-flex items-center gap-2 rounded-full bg-gold px-6 py-3 text-sm font-semibold text-gold-foreground transition-transform hover:-translate-y-0.5"
            >
              Coach Profile &amp; Certificates <ArrowRight className="h-4 w-4" />
            </Link>
            <Link
              to="/gallery"
              className="inline-flex items-center gap-2 rounded-full border border-primary-foreground/50 px-6 py-3 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary-foreground/10"
            >
              View Gallery
            </Link>
          </div>

          <dl className="mt-14 grid w-full max-w-3xl grid-cols-2 gap-6 border-t border-primary-foreground/25 pt-8 sm:grid-cols-4">
            {[
              ["2023", "Incorporated"],
              ["35+", "Years in football"],
              ["7", "Certifications"],
              ["NOGIG", "Since 2018"],
            ].map(([value, label]) => (
              <div key={label}>
                <dt className="font-display text-2xl font-bold text-gold">{value}</dt>
                <dd className="mt-1 text-xs uppercase tracking-[0.12em] opacity-85">
                  {label}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      <section className="container-page py-20">
        <div className="grid items-center gap-12 md:grid-cols-2">
          <div className="overflow-hidden rounded-2xl border border-border bg-card shadow-sm">
            <img
              src={images.coachPortrait}
              alt={`Portrait of ${coach.name}`}
              className="w-full object-cover"
            />
            <div className="border-t border-border px-5 py-4">
              <p className="font-display text-lg font-bold text-primary">{coach.name}</p>
              <p className="text-sm text-muted-foreground">Head Coach · NEPL since 2018</p>
            </div>
          </div>
          <div>
            <span className="eyebrow">About the company</span>
            <h2 className="mt-3 text-3xl font-bold text-primary sm:text-4xl">
              Football expertise meets entrepreneurial insight
            </h2>
            <p className="mt-5 text-base leading-relaxed text-foreground/85">
              {company.fullName} is a Nigerian sports development and consultancy company.
              Under Head Coach {coach.name} — holder of a Doctor of Football and
              Entrepreneurship Development Technology — we combine deep football expertise
              with entrepreneurial insight and technology to elevate team performance and
              develop winning players.
            </p>
            <ul className="mt-6 space-y-3 text-sm">
              {[
                "High-performance team coaching & player development",
                "Strategic sports management & corporate sports",
                "Grassroots and youth academy development",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <BadgeCheck className="mt-0.5 h-5 w-5 shrink-0 text-gold" />
                  <span className="text-foreground/85">{item}</span>
                </li>
              ))}
            </ul>
            <blockquote className="mt-8 border-l-4 border-gold bg-secondary/70 px-5 py-4 text-sm italic text-foreground/85">
              “True leadership isn't just about the big moment — it's forged on the training
              field and carried onto the stage of competition.”
            </blockquote>
          </div>
        </div>
      </section>

      <section className="bg-secondary/50 py-20">
        <div className="container-page">
          <span className="eyebrow">Work experience</span>
          <h2 className="mt-3 text-3xl font-bold text-primary sm:text-4xl">
            Coaching career
          </h2>
          <div className="mt-10 grid gap-6 sm:grid-cols-2">
            {experience.map((item) => (
              <article
                key={item.org + item.period}
                className="overflow-hidden rounded-2xl border border-border bg-card shadow-sm"
              >
                <img
                  src={item.image}
                  alt={`${item.role}, ${item.org}`}
                  loading="lazy"
                  className="aspect-[4/3] w-full object-cover"
                />
                <div className="p-6">
                  <p className="text-xs font-semibold uppercase tracking-[0.14em] text-gold-foreground">
                    {item.period}
                  </p>
                  <h3 className="mt-2 text-xl font-bold text-primary">{item.role}</h3>
                  <p className="text-sm font-medium text-foreground/80">{item.org}</p>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                    {item.detail}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="container-page py-20">
        <div className="grid gap-12 md:grid-cols-2">
          <div>
            <span className="eyebrow">Awards &amp; honour</span>
            <h2 className="mt-3 text-3xl font-bold text-primary sm:text-4xl">
              Recognition on and off the pitch
            </h2>
            <ul className="mt-8 space-y-4">
              {awards.map((a) => (
                <li key={a} className="flex items-start gap-3 text-sm text-foreground/85">
                  <Trophy className="mt-0.5 h-5 w-5 shrink-0 text-gold" />
                  <span>{a}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            <img
              src={images.awardsHonour}
              alt="Awards and honour event"
              loading="lazy"
              className="h-full w-full rounded-2xl border border-border object-cover sm:col-span-2"
            />
            <img
              src={images.intlSchoolsSoccer}
              alt="International Schools Soccer Tournament winning team"
              loading="lazy"
              className="w-full rounded-2xl border border-border object-cover"
            />
            <img
              src={images.riversAngelsTravel}
              alt="Rivers Angels Football Club team travel"
              loading="lazy"
              className="w-full rounded-2xl border border-border object-cover"
            />
          </div>
        </div>
      </section>

      <section className="bg-secondary/50 py-20">
        <div className="container-page grid gap-10 md:grid-cols-[auto_1fr] md:items-start">
          <img
            src={images.logo}
            alt={`${company.fullName} logo`}
            className="h-32 w-32 rounded-2xl border border-border bg-card object-contain p-3"
          />
          <div>
            <span className="eyebrow">Company</span>
            <h2 className="mt-3 text-3xl font-bold text-primary sm:text-4xl">
              {company.fullName}
            </h2>
            <dl className="mt-8 grid gap-5 sm:grid-cols-2">
              {[
                ["Registration number (RC)", company.rc],
                ["Status", company.status],
                ["Incorporation date", company.incorporated],
                ["Jurisdiction", company.jurisdiction],
                ["Legal address", company.address],
              ].map(([k, v]) => (
                <div key={k}>
                  <dt className="text-xs font-semibold uppercase tracking-[0.12em] text-muted-foreground">
                    {k}
                  </dt>
                  <dd className="mt-1 text-sm font-medium text-foreground/90">{v}</dd>
                </div>
              ))}
            </dl>

            <h3 className="mt-10 flex items-center gap-2 text-lg font-bold text-primary">
              <Building2 className="h-5 w-5 text-gold" /> Officers
            </h3>
            <div className="mt-4 grid gap-4 sm:grid-cols-2">
              {company.officers.map((o) => (
                <div
                  key={o.name}
                  className="rounded-2xl border border-border bg-card p-5 text-sm"
                >
                  <p className="font-semibold text-primary">{o.name}</p>
                  <p className="mt-1 text-foreground/80">{o.role}</p>
                  <p className="mt-2 text-xs text-muted-foreground">{o.detail}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="container-page py-20">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div>
            <span className="eyebrow">Gallery</span>
            <h2 className="mt-3 text-3xl font-bold text-primary sm:text-4xl">
              Moments from the journey
            </h2>
          </div>
          <Link
            to="/gallery"
            className="inline-flex items-center gap-2 text-sm font-semibold text-primary hover:underline"
          >
            See full gallery <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {gallery.slice(0, 4).map((g) => (
            <figure key={g.image} className="overflow-hidden rounded-2xl border border-border bg-card">
              <img
                src={g.image}
                alt={g.caption}
                loading="lazy"
                className="aspect-square w-full object-cover"
              />
              <figcaption className="px-4 py-3 text-xs text-muted-foreground">
                {g.caption}
              </figcaption>
            </figure>
          ))}
        </div>
      </section>

      <section className="container-page pb-4">
        <div className="rounded-3xl bg-primary px-8 py-14 text-center text-primary-foreground">
          <h2 className="text-3xl font-bold sm:text-4xl">Work with us</h2>
          <p className="mx-auto mt-4 max-w-2xl text-sm opacity-90 sm:text-base">
            High-performance team coaching, player development and strategic sports
            management.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <a
              href={`mailto:${coach.email}`}
              className="rounded-full bg-gold px-6 py-3 text-sm font-semibold text-gold-foreground"
            >
              {coach.email}
            </a>
            <Link
              to="/contact"
              className="rounded-full border border-primary-foreground/50 px-6 py-3 text-sm font-semibold"
            >
              Contact page
            </Link>
          </div>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}

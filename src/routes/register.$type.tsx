import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ArrowLeft } from "lucide-react";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { RegistrationForm } from "@/components/registration-form";
import { getRegistration, registrations } from "@/lib/registration-data";

export const Route = createFileRoute("/register/$type")({
  loader: ({ params }) => {
    const config = getRegistration(params.type);
    if (!config) throw notFound();
    return { config };
  },
  head: ({ loaderData }) => {
    if (!loaderData) {
      return {
        meta: [
          { title: "Registration not found | ISAKA Sports" },
          { name: "robots", content: "noindex" },
        ],
      };
    }
    const { config } = loaderData;
    return {
      meta: [
        { title: `${config.title} | ISAKA Sports Global Ventures Ltd` },
        { name: "description", content: config.description },
        { property: "og:title", content: `${config.title} — ISAKA Sports` },
        { property: "og:description", content: config.description },
        { property: "og:type", content: "website" },
        { name: "twitter:card", content: "summary_large_image" },
      ],
    };
  },
  notFoundComponent: RegistrationNotFound,
  errorComponent: RegistrationNotFound,
  component: RegisterFormPage,
});

function RegistrationNotFound() {
  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />
      <div className="container-page py-24 text-center">
        <h1 className="text-3xl font-bold text-primary">Registration form not found</h1>
        <p className="mt-3 text-sm text-muted-foreground">
          Please pick one of the available registration forms.
        </p>
        <Link
          to="/register"
          className="mt-6 inline-flex rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground"
        >
          All registration options
        </Link>
      </div>
      <SiteFooter />
    </div>
  );
}

function RegisterFormPage() {
  const { config } = Route.useLoaderData();

  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />

      <section className="bg-primary py-14 text-primary-foreground">
        <div className="container-page">
          <Link
            to="/register"
            className="inline-flex items-center gap-2 text-sm font-medium opacity-90 hover:underline"
          >
            <ArrowLeft className="h-4 w-4" /> All registration options
          </Link>
          <h1 className="mt-4 text-3xl font-bold sm:text-4xl">{config.title}</h1>
          <p className="mt-3 max-w-2xl text-sm leading-relaxed opacity-90">{config.intro}</p>
          {config.capacity && (
            <p className="mt-3 inline-block rounded-full bg-gold px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.12em] text-gold-foreground">
              Limited to {config.capacity}
            </p>
          )}
        </div>
      </section>

      <section className="container-page py-14">
        <div className="mx-auto max-w-3xl">
          <RegistrationForm config={config} />

          <div className="mt-12 border-t border-border pt-8">
            <p className="text-sm font-semibold text-primary">Other registration forms</p>
            <div className="mt-3 flex flex-wrap gap-2">
              {registrations
                .filter((r) => r.slug !== config.slug)
                .map((r) => (
                  <Link
                    key={r.slug}
                    to="/register/$type"
                    params={{ type: r.slug }}
                    className="rounded-full border border-border bg-card px-4 py-2 text-sm text-foreground/80 transition-colors hover:border-primary hover:text-primary"
                  >
                    {r.short}
                  </Link>
                ))}
            </div>
          </div>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}

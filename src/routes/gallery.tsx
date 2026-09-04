import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { X } from "lucide-react";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { gallery } from "@/lib/site-data";

export const Route = createFileRoute("/gallery")({
  head: () => ({
    meta: [
      { title: "Gallery | ISAKA Sports Global Ventures Ltd" },
      {
        name: "description",
        content:
          "Photos from tournaments, training sessions, grassroots football and awards events with ISAKA Sports Global Ventures Ltd.",
      },
      { property: "og:title", content: "Gallery — ISAKA Sports Global Ventures Ltd" },
      {
        property: "og:description",
        content:
          "Tournaments, training sessions, grassroots football and awards events in pictures.",
      },
    ],
  }),
  component: GalleryPage,
});

function GalleryPage() {
  const [zoom, setZoom] = useState<{ image: string; caption: string } | null>(null);

  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />

      <section className="bg-primary py-16 text-primary-foreground">
        <div className="container-page">
          <span className="eyebrow text-gold">Gallery</span>
          <h1 className="mt-3 text-4xl font-bold sm:text-5xl">Moments in focus</h1>
          <p className="mt-4 max-w-2xl text-sm opacity-90 sm:text-base">
            Tournaments, training sessions, grassroots football and awards events. Click any
            photo to view it larger.
          </p>
        </div>
      </section>

      <section className="container-page py-16">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {gallery.map((g) => (
            <figure
              key={g.image}
              className="overflow-hidden rounded-2xl border border-border bg-card shadow-sm"
            >
              <button
                type="button"
                onClick={() => setZoom(g)}
                className="block w-full cursor-zoom-in"
              >
                <img
                  src={g.image}
                  alt={g.caption}
                  loading="lazy"
                  className="aspect-[4/3] w-full object-cover transition-transform duration-500 hover:scale-[1.03]"
                />
              </button>
              <figcaption className="border-t border-border px-5 py-4 text-sm text-foreground/85">
                {g.caption}
              </figcaption>
            </figure>
          ))}
        </div>
      </section>

      {zoom && (
        <div
          className="fixed inset-0 z-[100] flex flex-col items-center justify-center gap-4 bg-foreground/90 p-4"
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
            src={zoom.image}
            alt={zoom.caption}
            className="max-h-[85vh] max-w-full rounded-lg object-contain"
            onClick={(e) => e.stopPropagation()}
          />
          <p className="text-center text-sm text-background/90">{zoom.caption}</p>
        </div>
      )}

      <SiteFooter />
    </div>
  );
}

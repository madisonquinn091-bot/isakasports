import { Link } from "@tanstack/react-router";
import { Mail, MapPin, Phone } from "lucide-react";
import { coach, company, images } from "@/lib/site-data";

export function SiteFooter() {
  return (
    <footer className="mt-24 border-t border-border bg-primary text-primary-foreground">
      <div className="container-page grid gap-10 py-14 md:grid-cols-3">
        <div>
          <div className="flex items-center gap-3">
            <img
              src={images.logo}
              alt={`${company.fullName} logo`}
              className="h-16 w-16 rounded-lg bg-background/95 object-contain p-1"
            />
            <div>
              <p className="font-display text-lg font-bold">ISAKA Sports</p>
              <p className="text-xs uppercase tracking-[0.16em] opacity-80">
                Global Ventures Ltd
              </p>
            </div>
          </div>
          <p className="mt-4 max-w-xs text-sm opacity-85">
            High-performance team coaching, player development and strategic sports
            management.
          </p>
        </div>

        <div className="text-sm">
          <p className="eyebrow text-gold">Contact</p>
          <ul className="mt-4 space-y-3">
            <li className="flex items-start gap-2">
              <Phone className="mt-0.5 h-4 w-4 shrink-0 text-gold" />
              <a href={coach.phoneHref} className="hover:underline">
                {coach.phone}
              </a>
            </li>
            <li className="flex items-start gap-2">
              <Mail className="mt-0.5 h-4 w-4 shrink-0 text-gold" />
              <a href={`mailto:${coach.email}`} className="hover:underline">
                {coach.email}
              </a>
            </li>
            <li className="flex items-start gap-2">
              <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-gold" />
              <span className="opacity-90">{company.address}</span>
            </li>
          </ul>
        </div>

        <div className="text-sm">
          <p className="eyebrow text-gold">Pages</p>
          <ul className="mt-4 space-y-2">
            <li>
              <Link to="/" className="hover:underline">
                Home
              </Link>
            </li>
            <li>
              <Link to="/coach" className="hover:underline">
                Coach &amp; Certificates
              </Link>
            </li>
            <li>
              <Link to="/gallery" className="hover:underline">
                Gallery
              </Link>
            </li>
            <li>
              <Link to="/contact" className="hover:underline">
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-primary-foreground/15 py-6 text-center text-xs opacity-80">
        © {new Date().getFullYear()} {company.fullName} · {company.rc} · Coach:{" "}
        {coach.name}
      </div>
    </footer>
  );
}

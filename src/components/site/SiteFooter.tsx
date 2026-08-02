import { Link } from "@tanstack/react-router";
import { Mail, Phone, MapPin, Linkedin, ArrowUpRight } from "lucide-react";
import { navItems, profile } from "@/lib/portfolio";

export function SiteFooter() {
  return (
    <footer className="mt-8 border-t border-border bg-surface">
      <div className="mx-auto max-w-7xl px-6 py-20 lg:px-10">
        <div className="grid gap-14 lg:grid-cols-[1.4fr_0.8fr_1fr]">
          <div>
            <p className="display-xl text-[clamp(2rem,4vw,3rem)]">
              Santosh <span className="text-primary">Yadav</span>
            </p>
            <p className="mt-5 max-w-sm text-sm leading-relaxed text-muted-foreground">
              {profile.longTitle}
            </p>
            <Link
              to="/contact"
              className="mt-8 inline-flex items-center gap-2 rounded-full bg-foreground px-6 py-3 text-sm font-medium text-background transition-transform duration-300 hover:scale-[1.04]"
            >
              Start a conversation <ArrowUpRight className="size-4" />
            </Link>
          </div>

          <div>
            <p className="eyebrow">Navigate</p>
            <div className="mt-5 grid grid-cols-2 gap-y-2.5 text-sm">
              {navItems.map((item) => (
                <Link
                  key={item.to}
                  to={item.to}
                  className="text-muted-foreground transition-colors hover:text-primary"
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>

          <div>
            <p className="eyebrow">Contact</p>
            <ul className="mt-5 space-y-3.5 text-sm text-muted-foreground">
              <li className="flex items-center gap-3">
                <Mail className="size-4 text-primary" />
                <a href={`mailto:${profile.email}`} className="hover:text-foreground">
                  {profile.email}
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="size-4 text-primary" />
                <a href={`tel:${profile.phone.replace(/\s/g, "")}`} className="hover:text-foreground">
                  {profile.phone}
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Linkedin className="size-4 text-primary" />
                <a
                  href={profile.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-foreground"
                >
                  linkedin.com/in/santosh-yadav-k
                </a>
              </li>
              <li className="flex items-center gap-3">
                <MapPin className="size-4 text-primary" />
                {profile.location}
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-16 flex flex-col gap-2 border-t border-border pt-8 text-xs text-muted-foreground sm:flex-row sm:items-center sm:justify-between">
          <span>© {new Date().getFullYear()} Santosh Yadav</span>
          <span>Civil Engineering · Structures · Estimation · GIS</span>
        </div>
      </div>
    </footer>
  );
}

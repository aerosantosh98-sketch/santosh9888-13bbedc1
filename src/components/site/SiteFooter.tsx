import { Link } from "@tanstack/react-router";
import { Mail, Phone, MapPin, Linkedin } from "lucide-react";
import { navItems, profile } from "@/lib/portfolio";

export function SiteFooter() {
  return (
    <footer className="mt-24 border-t border-border navy-gradient text-navy-foreground">
      <div className="grid-blueprint">
        <div className="mx-auto grid max-w-7xl gap-10 px-5 py-14 lg:grid-cols-3 lg:px-8">
          <div>
            <p className="font-display text-2xl font-bold">{profile.name}</p>
            <p className="mt-3 max-w-sm text-sm text-navy-foreground/70">{profile.longTitle}</p>
          </div>

          <div>
            <p className="font-mono text-xs uppercase tracking-[0.2em] text-navy-foreground/60">
              Navigate
            </p>
            <div className="mt-4 grid grid-cols-2 gap-y-2 text-sm">
              {navItems.map((item) => (
                <Link
                  key={item.to}
                  to={item.to}
                  className="text-navy-foreground/75 transition-colors hover:text-accent"
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>

          <div>
            <p className="font-mono text-xs uppercase tracking-[0.2em] text-navy-foreground/60">
              Contact
            </p>
            <ul className="mt-4 space-y-3 text-sm text-navy-foreground/80">
              <li className="flex items-center gap-2">
                <Mail className="size-4 text-accent" />
                <a href={`mailto:${profile.email}`} className="hover:text-accent">
                  {profile.email}
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="size-4 text-accent" />
                <a href={`tel:${profile.phone.replace(/\s/g, "")}`} className="hover:text-accent">
                  {profile.phone}
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Linkedin className="size-4 text-accent" />
                <a
                  href={profile.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-accent"
                >
                  linkedin.com/in/santosh-yadav-k
                </a>
              </li>
              <li className="flex items-center gap-2">
                <MapPin className="size-4 text-accent" />
                {profile.location}
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-navy-foreground/10">
          <div className="mx-auto flex max-w-7xl flex-col gap-2 px-5 py-5 font-mono text-[11px] uppercase tracking-[0.16em] text-navy-foreground/50 sm:flex-row sm:items-center sm:justify-between lg:px-8">
            <span>© {new Date().getFullYear()} Santosh Yadav</span>
            <span>Designed & Engineered with precision</span>
          </div>
        </div>
      </div>
    </footer>
  );
}

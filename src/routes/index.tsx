import { createFileRoute, Link } from "@tanstack/react-router";
import {
  ArrowRight,
  Download,
  FileText,
  FolderKanban,
  Mail,
  Ruler,
  Building2,
  Globe2,
  Calculator,
} from "lucide-react";
import portrait from "@/assets/portrait.jpg";
import { Button } from "@/components/ui/button";
import { Section, SectionTitle } from "@/components/site/Page";
import { profile, projects, skillGroups } from "@/lib/portfolio";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Santosh Yadav | Civil Engineer Portfolio" },
      {
        name: "description",
        content:
          "Civil Engineering undergraduate specialising in quantity surveying, structural engineering, and GIS & remote sensing. Explore projects, resume and certifications.",
      },
      { property: "og:title", content: "Santosh Yadav | Civil Engineer Portfolio" },
      {
        property: "og:description",
        content:
          "Quantity surveying, structural design, surveying and GIS work by Santosh Yadav, Civil Engineering undergraduate at NMIT Bengaluru.",
      },
    ],
  }),
  component: Home,
});

const highlights = [
  { icon: Calculator, label: "Quantity Surveying", value: "BOQ · Rate Analysis" },
  { icon: Building2, label: "Structural Design", value: "STAAD.Pro · ETABS" },
  { icon: Globe2, label: "GIS & Remote Sensing", value: "ArcGIS · DEM · Contours" },
  { icon: Ruler, label: "Surveying", value: "Total Station · GPS" },
];

function Home() {
  return (
    <>
      <section className="relative overflow-hidden hero-gradient">
        <div className="absolute inset-0 grid-blueprint animate-drift opacity-80" aria-hidden />
        <div className="pointer-events-none absolute -right-24 top-10 hidden h-[520px] w-[520px] rounded-full bg-primary/10 blur-3xl lg:block" />
        <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-5 py-16 lg:grid-cols-[1.15fr_0.85fr] lg:px-8 lg:py-24">
          <div>
            <span className="animate-rise inline-flex items-center gap-2 rounded-full border border-border bg-card/70 px-4 py-1.5 text-xs font-medium backdrop-blur">
              <span className="size-2 animate-pulse rounded-full bg-accent" />
              Available for internships & graduate roles
            </span>
            <h1 className="animate-rise mt-6 text-5xl font-bold leading-[1.05] sm:text-6xl lg:text-7xl">
              Santosh
              <span className="block text-primary">Yadav</span>
            </h1>
            <p className="animate-rise mt-6 max-w-xl font-mono text-xs uppercase leading-relaxed tracking-[0.16em] text-muted-foreground sm:text-sm">
              {profile.title}
            </p>
            <p className="animate-rise mt-6 max-w-2xl text-base leading-relaxed text-muted-foreground">
              {profile.bio}
            </p>

            <div className="animate-rise mt-9 flex flex-wrap gap-3">
              <Button asChild size="lg">
                <Link to="/resume">
                  <FileText /> View Resume
                </Link>
              </Button>
              <Button asChild size="lg" variant="secondary">
                <Link to="/projects">
                  <FolderKanban /> View Projects
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline">
                <Link to="/downloads">
                  <Download /> Download CV
                </Link>
              </Button>
              <Button asChild size="lg" variant="ghost">
                <Link to="/contact">
                  <Mail /> Contact Me
                </Link>
              </Button>
            </div>
          </div>

          <div className="relative">
            <div className="absolute -inset-4 rounded-3xl grid-blueprint-fine opacity-60" aria-hidden />
            <div className="relative overflow-hidden rounded-3xl border border-border glass-card">
              <img
                src={portrait}
                alt="Santosh Yadav, civil engineering undergraduate"
                width={1024}
                height={1280}
                className="h-full w-full object-cover"
              />
            </div>
            <div className="glass-card absolute -bottom-6 left-1/2 w-[86%] -translate-x-1/2 rounded-2xl px-5 py-4">
              <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
                B.E. Civil · NMIT Bengaluru
              </p>
              <p className="mt-1 font-display text-lg font-bold">CGPA 9.26 / 10</p>
            </div>
          </div>
        </div>
      </section>

      <Section className="pt-24">
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {highlights.map((h) => (
            <div key={h.label} className="lift rounded-2xl border border-border bg-card p-6">
              <h.icon className="size-6 text-primary" />
              <p className="mt-5 font-display text-lg font-semibold">{h.label}</p>
              <p className="mt-1 font-mono text-xs uppercase tracking-[0.14em] text-muted-foreground">
                {h.value}
              </p>
            </div>
          ))}
        </div>
      </Section>

      <Section className="py-8">
        <SectionTitle kicker="Selected work" title="Featured Projects" />
        <div className="grid gap-6 md:grid-cols-2">
          {projects.slice(0, 4).map((p) => (
            <Link
              key={p.slug}
              to="/projects/$slug"
              params={{ slug: p.slug }}
              className="lift group relative overflow-hidden rounded-2xl border border-border bg-card p-7"
            >
              <div className="absolute inset-0 grid-blueprint-fine opacity-0 transition-opacity group-hover:opacity-100" />
              <div className="relative">
                <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-accent">
                  {p.category} · {p.year}
                </p>
                <h3 className="mt-3 text-xl font-semibold">{p.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{p.summary}</p>
                <span className="mt-5 inline-flex items-center gap-2 text-sm font-medium text-primary">
                  View case study <ArrowRight className="size-4" />
                </span>
              </div>
            </Link>
          ))}
        </div>
      </Section>

      <Section className="py-8">
        <SectionTitle kicker="Toolbox" title="Core Technical Capability" />
        <div className="flex flex-wrap gap-2">
          {skillGroups.flatMap((g) => g.items).map((s) => (
            <span
              key={s}
              className="rounded-full border border-border bg-card px-4 py-2 text-sm text-muted-foreground transition-colors hover:border-primary hover:text-primary"
            >
              {s}
            </span>
          ))}
        </div>
      </Section>

      <Section>
        <div className="relative overflow-hidden rounded-3xl navy-gradient px-8 py-14 text-navy-foreground sm:px-14">
          <div className="absolute inset-0 grid-blueprint opacity-40" aria-hidden />
          <div className="relative max-w-2xl">
            <h2 className="text-3xl font-bold sm:text-4xl">
              Let's build something that stands for decades.
            </h2>
            <p className="mt-4 text-navy-foreground/75">
              Open to internships, graduate engineer roles and collaborative research in
              construction management, estimation and geospatial engineering.
            </p>
            <Button asChild size="lg" className="mt-8">
              <Link to="/contact">
                Start a conversation <ArrowRight />
              </Link>
            </Button>
          </div>
        </div>
      </Section>
    </>
  );
}

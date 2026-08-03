import { createFileRoute, Link } from "@tanstack/react-router";
import {
  ArrowRight,
  ArrowUpRight,
  Download,
  FolderKanban,
  Mail,
  Ruler,
  Building2,
  Globe2,
  Calculator,
} from "lucide-react";
import portrait from "@/assets/profile-pic.jpg.asset.json";
import { Section, SectionTitle } from "@/components/site/Page";
import { Counter, Magnetic, Reveal } from "@/components/site/Motion";
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
  { icon: HardHat, label: "Site Engineering", value: "Execution · Supervision" },
  { icon: Leaf, label: "Sustainable Engineering", value: "Low-carbon design" },
  { icon: Recycle, label: "Green Technology", value: "Efficient materials" },
  { icon: Building2, label: "Structural Engineering", value: "STAAD.Pro · ETABS" },
  { icon: Calculator, label: "Quantity Surveying", value: "BOQ · Rate Analysis" },
  { icon: ClipboardList, label: "Construction Management", value: "Planning · Cost control" },
  { icon: Globe2, label: "GIS & Remote Sensing", value: "ArcGIS · DEM · Contours" },
  { icon: Ruler, label: "Surveying", value: "Total Station · GPS" },
  { icon: Users, label: "Site Management", value: "Quality · Safety · Teams" },
];


function Home() {
  return (
    <>
      {/* HERO */}
      <section className="relative overflow-hidden hero-gradient">
        <div className="relative mx-auto grid max-w-7xl items-center gap-14 px-6 pb-20 pt-32 lg:grid-cols-[1.05fr_0.95fr] lg:gap-10 lg:px-10 lg:pb-28 lg:pt-44">
          <div>
            <Reveal>
              <span className="inline-flex items-center gap-2.5 rounded-full bg-muted px-4 py-2 text-xs font-medium text-muted-foreground">
                <span className="size-2 animate-pulse rounded-full bg-primary" />
                Available for internships & graduate roles
              </span>
            </Reveal>

            <Reveal delay={0.06}>
              <h1 className="display-xl mt-8 text-[clamp(3.2rem,10vw,7rem)]">
                Santosh
                <span className="block text-primary">Yadav</span>
              </h1>
            </Reveal>

            <Reveal delay={0.14}>
              <p className="mt-8 max-w-xl text-lg leading-relaxed text-muted-foreground">
                {profile.bio}
              </p>
            </Reveal>

            <Reveal delay={0.2}>
              <p className="mt-6 max-w-md text-sm font-medium leading-relaxed">
                Structural Engineering · Quantity Surveying · Construction Management · GIS &amp;
                Remote Sensing
              </p>
            </Reveal>

            <Reveal delay={0.28}>
              <div className="mt-10 flex flex-wrap items-center gap-3">
                <Magnetic>
                  <Link
                    to="/downloads"
                    className="inline-flex items-center gap-2 rounded-full bg-foreground px-7 py-3.5 text-sm font-medium text-background transition-transform duration-300 hover:scale-[1.04]"
                  >
                    <Download className="size-4" /> Download Resume
                  </Link>
                </Magnetic>
                <Magnetic>
                  <Link
                    to="/projects"
                    className="inline-flex items-center gap-2 rounded-full bg-primary px-7 py-3.5 text-sm font-medium text-primary-foreground transition-transform duration-300 hover:scale-[1.04]"
                  >
                    <FolderKanban className="size-4" /> View Projects
                  </Link>
                </Magnetic>
                <Magnetic>
                  <Link
                    to="/contact"
                    className="inline-flex items-center gap-2 rounded-full border border-border px-7 py-3.5 text-sm font-medium transition-colors duration-300 hover:bg-muted"
                  >
                    <Mail className="size-4" /> Contact Me
                  </Link>
                </Magnetic>
              </div>
            </Reveal>
          </div>

          <Reveal delay={0.18} y={40}>
            <div className="relative">
              <div className="animate-floaty overflow-hidden rounded-[2.5rem] shadow-[var(--shadow-elegant)]">
                <img
                  src={portrait.url}
                  alt="Santosh Yadav, civil engineering undergraduate"
                  width={800}
                  height={800}
                  className="h-full w-full object-cover"
                />
              </div>
              <div className="glass-card absolute -bottom-6 left-6 rounded-3xl px-6 py-4">
                <p className="eyebrow">B.E. Civil · NMIT Bengaluru</p>
                <p className="mt-1.5 font-display text-2xl font-bold">
                  <Counter value={9.26} decimals={2} /> <span className="text-muted-foreground text-base font-medium">/ 10 CGPA</span>
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* STATS */}
      <Section className="py-16 sm:py-20">
        <div className="grid gap-10 sm:grid-cols-3">
          {stats.map((s, i) => (
            <Reveal key={s.label} delay={i * 0.08}>
              <p className="display-xl text-[clamp(2.6rem,5vw,4rem)] text-primary">
                <Counter value={s.value} decimals={s.decimals} suffix={s.suffix} />
              </p>
              <p className="mt-3 text-sm text-muted-foreground">{s.label}</p>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* CAPABILITIES */}
      <Section className="pt-0">
        <SectionTitle kicker="Disciplines" title="What I engineer." />
        <div className="grid gap-x-10 gap-y-12 sm:grid-cols-2 lg:grid-cols-4">
          {highlights.map((h, i) => (
            <Reveal key={h.label} delay={i * 0.07}>
              <h.icon className="size-6 text-primary" strokeWidth={1.5} />
              <p className="mt-6 font-display text-xl font-semibold">{h.label}</p>
              <p className="mt-2 text-sm text-muted-foreground">{h.value}</p>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* FEATURED PROJECTS */}
      <Section className="pt-0">
        <SectionTitle kicker="Selected work" title="Case studies, documented end to end." />
        <div className="space-y-4">
          {projects.slice(0, 4).map((p, i) => (
            <Reveal key={p.slug} delay={i * 0.05}>
              <Link
                to="/projects/$slug"
                params={{ slug: p.slug }}
                className="group grid items-center gap-6 rounded-3xl px-2 py-8 transition-colors duration-500 hover:bg-surface sm:grid-cols-[auto_minmax(0,1fr)_auto] sm:px-8"
              >
                <span className="font-display text-sm text-muted-foreground">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <div className="min-w-0">
                  <p className="eyebrow text-primary">
                    {p.category} · {p.year}
                  </p>
                  <h3 className="mt-3 text-2xl font-semibold transition-transform duration-500 group-hover:translate-x-1.5 sm:text-3xl">
                    {p.title}
                  </h3>
                  <p className="mt-3 max-w-2xl text-sm leading-relaxed text-muted-foreground">
                    {p.summary}
                  </p>
                  <div className="mt-5 flex flex-wrap gap-2">
                    {p.tools.slice(0, 4).map((t) => (
                      <span
                        key={t}
                        className="rounded-full bg-muted px-3 py-1 text-[11px] text-muted-foreground"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
                <span className="grid size-12 shrink-0 place-items-center rounded-full border border-border text-primary transition-all duration-500 group-hover:border-primary group-hover:bg-primary group-hover:text-primary-foreground">
                  <ArrowUpRight className="size-5" />
                </span>
              </Link>
            </Reveal>
          ))}
        </div>
        <Reveal delay={0.1}>
          <Link
            to="/projects"
            className="mt-10 inline-flex items-center gap-2 text-sm font-medium text-primary hover:underline"
          >
            All projects <ArrowRight className="size-4" />
          </Link>
        </Reveal>
      </Section>

      {/* TOOLBOX */}
      <Section className="pt-0">
        <SectionTitle kicker="Toolbox" title="Core technical capability." />
        <div className="flex flex-wrap gap-2.5">
          {skillGroups
            .flatMap((g) => g.items)
            .map((s, i) => (
              <Reveal key={s} delay={Math.min(i * 0.02, 0.4)} y={12}>
                <span className="inline-block rounded-full bg-muted px-4 py-2 text-sm text-muted-foreground transition-colors hover:bg-primary hover:text-primary-foreground">
                  {s}
                </span>
              </Reveal>
            ))}
        </div>
      </Section>

      {/* CTA */}
      <Section className="pt-0">
        <Reveal>
          <div className="rounded-[2.5rem] bg-foreground px-8 py-20 text-background sm:px-16">
            <h2 className="display-xl max-w-3xl text-[clamp(2.2rem,5.5vw,4rem)]">
              Let's build something that stands for decades.
            </h2>
            <p className="mt-6 max-w-xl text-base leading-relaxed text-background/70">
              Open to internships, graduate engineer roles and collaborative research in
              construction management, estimation and geospatial engineering.
            </p>
            <Magnetic className="mt-10">
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 rounded-full bg-background px-7 py-3.5 text-sm font-medium text-foreground transition-transform duration-300 hover:scale-[1.04]"
              >
                Start a conversation <ArrowRight className="size-4" />
              </Link>
            </Magnetic>
          </div>
        </Reveal>
      </Section>
    </>
  );
}

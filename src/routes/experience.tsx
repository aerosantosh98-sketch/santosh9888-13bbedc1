import { createFileRoute } from "@tanstack/react-router";
import { Briefcase, MapPin, CheckCircle2 } from "lucide-react";
import { PageHeader, Section } from "@/components/site/Page";
import { experience } from "@/lib/portfolio";

export const Route = createFileRoute("/experience")({
  head: () => ({
    meta: [
      { title: "Experience | Santosh Yadav, Civil Site Engineer Intern" },
      {
        name: "description",
        content:
          "Site engineering internship at Lolang Construction, Kathmandu — supervision, coordination, QA/QC and documentation.",
      },
      { property: "og:title", content: "Experience | Santosh Yadav" },
      {
        property: "og:description",
        content: "Civil site engineering internship experience and responsibilities.",
      },
    ],
  }),
  component: Experience,
});

function Experience() {
  return (
    <>
      <PageHeader
        eyebrow="Experience"
        title="On site, where drawings meet reality."
        description="Practical exposure to supervision, coordination and quality control on active construction works."
      />

      <Section>
        <ol className="relative border-l border-border pl-8">
          {experience.map((x) => (
            <li key={x.role} className="relative pb-12 last:pb-0">
              <span className="absolute -left-[41px] grid size-8 place-items-center rounded-full border border-primary bg-background text-primary">
                <Briefcase className="size-4" />
              </span>
              <div className="lift soft-card p-8">
                <p className="font-mono text-xs uppercase tracking-[0.2em] text-accent">
                  {x.period}
                </p>
                <h2 className="mt-3 text-2xl font-bold">{x.role}</h2>
                <p className="mt-2 flex items-center gap-2 text-sm text-muted-foreground">
                  <MapPin className="size-4" /> {x.org} — {x.location}
                </p>
                <ul className="mt-6 grid gap-3 sm:grid-cols-2">
                  {x.points.map((p) => (
                    <li key={p} className="flex gap-3 text-sm text-muted-foreground">
                      <CheckCircle2 className="mt-0.5 size-4 shrink-0 text-primary" />
                      {p}
                    </li>
                  ))}
                </ul>
              </div>
            </li>
          ))}
        </ol>
      </Section>
    </>
  );
}

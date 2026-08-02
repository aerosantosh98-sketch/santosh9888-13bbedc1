import { createFileRoute } from "@tanstack/react-router";
import {
  PenTool,
  Building2,
  CalendarRange,
  HardHat,
  Ruler,
  Globe2,
  Users,
  type LucideIcon,
} from "lucide-react";
import { PageHeader, Section } from "@/components/site/Page";
import { skillGroups } from "@/lib/portfolio";

const icons: Record<string, LucideIcon> = {
  PenTool,
  Building2,
  CalendarRange,
  HardHat,
  Ruler,
  Globe2,
  Users,
};

export const Route = createFileRoute("/skills")({
  head: () => ({
    meta: [
      { title: "Skills Dashboard | Santosh Yadav" },
      {
        name: "description",
        content:
          "Technical skill dashboard covering BIM, structural analysis, planning, site engineering, surveying, estimation and GIS & remote sensing.",
      },
      { property: "og:title", content: "Skills Dashboard | Santosh Yadav" },
      {
        property: "og:description",
        content: "AutoCAD, Revit, STAAD.Pro, ETABS, Primavera P6, ArcGIS and site engineering skills.",
      },
    ],
  }),
  component: Skills,
});

function Skills() {
  return (
    <>
      <PageHeader
        eyebrow="Skills"
        title="A working toolkit — design, analysis, estimation and geospatial."
        description="Software and field competencies applied across academic projects, site internship and survey campaigns."
      />

      <Section>
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {skillGroups.map((g, gi) => {
            const Icon = icons[g.icon] ?? PenTool;
            return (
              <article
                key={g.title}
                className="lift group relative overflow-hidden rounded-3xl border border-border bg-card p-7"
              >
                <div className="absolute inset-0 grid-blueprint-fine opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                <div className="relative">
                  <div className="flex items-center justify-between">
                    <span className="grid size-11 place-items-center rounded-xl bg-primary/10 text-primary">
                      <Icon className="size-5" />
                    </span>
                    <span className="font-mono text-[11px] uppercase tracking-[0.18em] text-muted-foreground">
                      {String(gi + 1).padStart(2, "0")}
                    </span>
                  </div>
                  <h2 className="mt-6 text-lg font-semibold">{g.title}</h2>
                  <ul className="mt-5 space-y-2.5">
                    {g.items.map((item) => (
                      <li
                        key={item}
                        className="flex items-center gap-3 border-b border-border/70 pb-2.5 text-sm text-muted-foreground last:border-0"
                      >
                        <span className="size-1.5 rounded-full bg-accent" />
                        <span className="transition-colors group-hover:text-foreground">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </article>
            );
          })}
        </div>
      </Section>
    </>
  );
}

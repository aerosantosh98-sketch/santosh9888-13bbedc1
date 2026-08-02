import { useMemo, useState } from "react";
import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Search } from "lucide-react";
import { PageHeader, Section } from "@/components/site/Page";
import { Input } from "@/components/ui/input";
import { projects } from "@/lib/portfolio";
import { cn } from "@/lib/utils";

export const Route = createFileRoute("/projects/")({
  head: () => ({
    meta: [
      { title: "Projects | Santosh Yadav Civil Engineering Portfolio" },
      {
        name: "description",
        content:
          "Detailed civil engineering case studies: smart concrete with piezoelectric sensors, earthquake resistant design, Total Station surveys and GIS mapping.",
      },
      { property: "og:title", content: "Civil Engineering Projects | Santosh Yadav" },
      {
        property: "og:description",
        content: "Case studies with drawings, calculations, BOQ, timeline and downloads.",
      },
    ],
  }),
  component: Projects,
});

function Projects() {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState("All");

  const categories = useMemo(
    () => ["All", ...Array.from(new Set(projects.map((p) => p.category)))],
    [],
  );

  const filtered = projects.filter((p) => {
    const matchesCategory = category === "All" || p.category === category;
    const q = query.toLowerCase().trim();
    const matchesQuery =
      !q ||
      p.title.toLowerCase().includes(q) ||
      p.summary.toLowerCase().includes(q) ||
      p.tools.some((t) => t.toLowerCase().includes(q));
    return matchesCategory && matchesQuery;
  });

  return (
    <>
      <PageHeader
        eyebrow="Projects"
        title="Case studies in structures, estimation and geospatial engineering."
        description="Each project is documented end to end — design intent, drawings, calculations, bill of quantities, timeline and downloadable deliverables."
      />

      <Section>
        <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
          <div className="relative w-full lg:max-w-sm">
            <Search className="absolute left-3 top-1/2 size-4 -translate-y-1/2 text-muted-foreground" />
            <Input
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search projects, tools, keywords..."
              className="pl-9"
            />
          </div>
          <div className="flex flex-wrap gap-2">
            {categories.map((c) => (
              <button
                key={c}
                onClick={() => setCategory(c)}
                className={cn(
                  "rounded-full border border-border px-4 py-2 text-sm transition-colors",
                  category === c
                    ? "border-primary bg-primary text-primary-foreground"
                    : "text-muted-foreground hover:border-primary hover:text-primary",
                )}
              >
                {c}
              </button>
            ))}
          </div>
        </div>

        <div className="mt-10 grid gap-6 lg:grid-cols-2">
          {filtered.map((p, i) => (
            <Link
              key={p.slug}
              to="/projects/$slug"
              params={{ slug: p.slug }}
              className="lift group relative overflow-hidden rounded-3xl border border-border bg-card"
            >
              <div className="relative h-40 overflow-hidden navy-gradient">
                <div className="absolute inset-0 grid-blueprint opacity-60" />
                <span className="absolute left-6 top-6 font-mono text-[11px] uppercase tracking-[0.2em] text-navy-foreground/70">
                  {String(i + 1).padStart(2, "0")} / {p.category}
                </span>
                <span className="absolute bottom-6 left-6 font-mono text-xs text-accent">
                  {p.year}
                </span>
              </div>
              <div className="p-7">
                <h2 className="text-xl font-semibold leading-snug">{p.title}</h2>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{p.summary}</p>
                <div className="mt-5 flex flex-wrap gap-2">
                  {p.tools.slice(0, 4).map((t) => (
                    <span
                      key={t}
                      className="rounded-full border border-border bg-muted px-3 py-1 text-[11px] text-muted-foreground"
                    >
                      {t}
                    </span>
                  ))}
                </div>
                <span className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-primary">
                  Open case study
                  <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
                </span>
              </div>
            </Link>
          ))}
        </div>

        {filtered.length === 0 && (
          <p className="mt-16 text-center text-muted-foreground">
            No projects match that search. Try another keyword.
          </p>
        )}
      </Section>
    </>
  );
}

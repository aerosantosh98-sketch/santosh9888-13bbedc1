import { useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { Award, Search, BadgeCheck } from "lucide-react";
import { PageHeader, Section } from "@/components/site/Page";
import { Input } from "@/components/ui/input";
import { certifications } from "@/lib/portfolio";
import { cn } from "@/lib/utils";

export const Route = createFileRoute("/certifications")({
  head: () => ({
    meta: [
      { title: "Certifications | Santosh Yadav" },
      {
        name: "description",
        content:
          "Certifications in ArcGIS, GIS, 3D printing, metro/tunnel/pile engineering, project management and risk mitigation.",
      },
      { property: "og:title", content: "Certifications | Santosh Yadav" },
      {
        property: "og:description",
        content: "Verified engineering and management certifications with search and filters.",
      },
    ],
  }),
  component: Certifications,
});

function Certifications() {
  const [query, setQuery] = useState("");
  const [cat, setCat] = useState("All");
  const cats = ["All", ...Array.from(new Set(certifications.map((c) => c.category)))];

  const filtered = certifications.filter(
    (c) =>
      (cat === "All" || c.category === cat) &&
      (c.name + c.issuer).toLowerCase().includes(query.toLowerCase().trim()),
  );

  return (
    <>
      <PageHeader
        eyebrow="Certifications"
        title="Verified training across GIS, construction and project management."
        description="Continuous upskilling through industry programmes from L&T EduTech, Infosys, Esri and NMIT."
      />

      <Section>
        <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
          <div className="relative w-full lg:max-w-sm">
            <Search className="absolute left-3 top-1/2 size-4 -translate-y-1/2 text-muted-foreground" />
            <Input
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search certifications..."
              className="pl-9"
            />
          </div>
          <div className="flex flex-wrap gap-2">
            {cats.map((c) => (
              <button
                key={c}
                onClick={() => setCat(c)}
                className={cn(
                  "rounded-full border border-border px-4 py-2 text-sm transition-colors",
                  cat === c
                    ? "border-primary bg-primary text-primary-foreground"
                    : "text-muted-foreground hover:border-primary hover:text-primary",
                )}
              >
                {c}
              </button>
            ))}
          </div>
        </div>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((c) => (
            <article
              key={c.name}
              className="lift relative overflow-hidden soft-card p-7"
            >
              <div className="absolute inset-0 grid-blueprint-fine opacity-40" aria-hidden />
              <div className="relative">
                <div className="flex items-center justify-between">
                  <Award className="size-6 text-primary" />
                  <BadgeCheck className="size-5 text-accent" />
                </div>
                <h2 className="mt-6 text-lg font-semibold leading-snug">{c.name}</h2>
                <p className="mt-2 text-sm text-muted-foreground">{c.issuer}</p>
                <p className="mt-5 font-mono text-[11px] uppercase tracking-[0.16em] text-muted-foreground">
                  {c.category}
                </p>
              </div>
            </article>
          ))}
        </div>

        {filtered.length === 0 && (
          <p className="mt-16 text-center text-muted-foreground">No certifications found.</p>
        )}
      </Section>
    </>
  );
}

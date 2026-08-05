import { useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { Award, Search, BadgeCheck, Eye, Download } from "lucide-react";
import { PageHeader, Section } from "@/components/site/Page";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { certifications, type Certification } from "@/lib/portfolio";
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
  const [preview, setPreview] = useState<Certification | null>(null);
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
              className="lift relative flex flex-col overflow-hidden soft-card p-7"
            >
              <div className="absolute inset-0 grid-blueprint-fine opacity-40" aria-hidden />
              <div className="relative flex flex-1 flex-col">
                <div className="flex items-center justify-between">
                  <Award className="size-6 text-primary" />
                  <BadgeCheck className="size-5 text-accent" />
                </div>
                <h2 className="mt-6 text-lg font-semibold leading-snug">{c.name}</h2>
                <p className="mt-2 text-sm text-muted-foreground">{c.issuer}</p>
                <p className="mt-5 font-mono text-[11px] uppercase tracking-[0.16em] text-muted-foreground">
                  {c.category}
                </p>

                <div className="mt-6 flex flex-wrap gap-2 border-t border-border pt-5">
                  {c.file ? (
                    <>
                      <Button size="sm" variant="outline" onClick={() => setPreview(c)}>
                        <Eye /> View Certificate
                      </Button>
                      <Button asChild size="sm">
                        <a href={c.file} download>
                          <Download /> Download
                        </a>
                      </Button>
                    </>
                  ) : (
                    <span className="font-mono text-[11px] uppercase tracking-[0.16em] text-muted-foreground">
                      Certificate file coming soon
                    </span>
                  )}
                </div>
              </div>
            </article>
          ))}
        </div>

        {filtered.length === 0 && (
          <p className="mt-16 text-center text-muted-foreground">No certifications found.</p>
        )}
      </Section>

      <Dialog open={!!preview} onOpenChange={(open) => !open && setPreview(null)}>
        <DialogContent className="max-w-4xl">
          <DialogHeader>
            <DialogTitle className="pr-8 text-left text-lg leading-snug">
              {preview?.name}
            </DialogTitle>
            <DialogDescription className="text-left">{preview?.issuer}</DialogDescription>
          </DialogHeader>
          {preview?.file && (
            <>
              <div className="h-[65vh] w-full overflow-hidden rounded-xl border border-border bg-background">
                <object data={preview.file} type="application/pdf" className="h-full w-full">
                  <div className="grid h-full place-items-center p-6 text-center text-sm text-muted-foreground">
                    Inline preview isn&apos;t supported here — open or download the PDF instead.
                  </div>
                </object>
              </div>
              <div className="flex flex-wrap gap-3">
                <Button asChild variant="outline">
                  <a href={preview.file} target="_blank" rel="noreferrer">
                    <Eye /> Open in new tab
                  </a>
                </Button>
                <Button asChild>
                  <a href={preview.file} download>
                    <Download /> Download Certificate
                  </a>
                </Button>
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>
    </>
  );
}

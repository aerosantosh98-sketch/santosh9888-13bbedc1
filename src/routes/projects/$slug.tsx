import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ArrowLeft, Download, FileSpreadsheet, PenLine, Table2 } from "lucide-react";
import { Section } from "@/components/site/Page";
import { Button } from "@/components/ui/button";
import { projects, type Project } from "@/lib/portfolio";

export const Route = createFileRoute("/projects/$slug")({
  loader: ({ params }): Project => {
    const project = projects.find((p) => p.slug === params.slug);
    if (!project) throw notFound();
    return project;
  },
  head: ({ loaderData }) => ({
    meta: loaderData
      ? [
          { title: `${loaderData.title} | Santosh Yadav` },
          { name: "description", content: loaderData.summary },
          { property: "og:title", content: loaderData.title },
          { property: "og:description", content: loaderData.summary },
          { property: "og:type", content: "article" },
        ]
      : [],
  }),
  errorComponent: ({ error }) => (
    <div className="p-16 text-center" role="alert">
      {error.message}
    </div>
  ),
  notFoundComponent: () => (
    <div className="p-16 text-center text-muted-foreground">Project not found.</div>
  ),
  component: ProjectDetail,
});

function ProjectDetail() {
  const p = Route.useLoaderData() as Project;

  return (
    <>
      <section className="relative overflow-hidden navy-gradient text-navy-foreground">
        <div className="absolute inset-0 grid-blueprint animate-drift opacity-50" aria-hidden />
        <div className="relative mx-auto max-w-7xl px-5 py-16 lg:px-8 lg:py-20">
          <Link
            to="/projects"
            className="inline-flex items-center gap-2 text-sm text-navy-foreground/70 transition-colors hover:text-accent"
          >
            <ArrowLeft className="size-4" /> All projects
          </Link>
          <p className="mt-8 font-mono text-xs uppercase tracking-[0.24em] text-accent">
            {p.category} · {p.year}
          </p>
          <h1 className="mt-4 max-w-4xl text-4xl font-bold leading-tight sm:text-5xl">{p.title}</h1>
          <p className="mt-5 max-w-2xl text-navy-foreground/75">{p.summary}</p>
          <div className="mt-8 flex flex-wrap gap-2">
            {p.tools.map((t) => (
              <span
                key={t}
                className="rounded-full border border-navy-foreground/20 px-3 py-1.5 text-xs text-navy-foreground/80"
              >
                {t}
              </span>
            ))}
          </div>
        </div>
      </section>

      <Section>
        <div className="grid gap-12 lg:grid-cols-[1.2fr_0.8fr]">
          <div>
            <h2 className="text-2xl font-bold">Overview</h2>
            <div className="mt-5 space-y-4 leading-relaxed text-muted-foreground">
              {p.description.map((d) => (
                <p key={d}>{d}</p>
              ))}
            </div>

            <h2 className="mt-14 text-2xl font-bold">Drawings & Deliverables</h2>
            <div className="mt-5 grid gap-4 sm:grid-cols-3">
              {p.drawings.map((d) => (
                <div
                  key={d}
                  className="lift relative overflow-hidden soft-card p-5"
                >
                  <div className="absolute inset-0 grid-blueprint-fine opacity-50" aria-hidden />
                  <div className="relative">
                    <PenLine className="size-5 text-primary" />
                    <p className="mt-4 text-sm leading-snug">{d}</p>
                  </div>
                </div>
              ))}
            </div>

            <h2 className="mt-14 text-2xl font-bold">Bill of Quantities</h2>
            <div className="mt-5 overflow-x-auto rounded-2xl border border-border">
              <table className="w-full min-w-[560px] text-sm">
                <thead className="bg-muted text-left font-mono text-[11px] uppercase tracking-[0.14em] text-muted-foreground">
                  <tr>
                    <th className="px-4 py-3">Item</th>
                    <th className="px-4 py-3">Unit</th>
                    <th className="px-4 py-3">Qty</th>
                    <th className="px-4 py-3">Rate (₹)</th>
                    <th className="px-4 py-3">Amount (₹)</th>
                  </tr>
                </thead>
                <tbody>
                  {p.boq.map((r) => (
                    <tr key={r.item} className="border-t border-border">
                      <td className="px-4 py-3">{r.item}</td>
                      <td className="px-4 py-3 text-muted-foreground">{r.unit}</td>
                      <td className="px-4 py-3 text-muted-foreground">{r.qty}</td>
                      <td className="px-4 py-3 text-muted-foreground">{r.rate}</td>
                      <td className="px-4 py-3 font-medium">{r.amount}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <h2 className="mt-14 text-2xl font-bold">Project Timeline</h2>
            <ol className="mt-6 border-l border-border pl-6">
              {p.timeline.map((t, i) => (
                <li key={t.phase} className="relative pb-8 last:pb-0">
                  <span className="absolute -left-[31px] grid size-5 place-items-center rounded-full border border-primary bg-background font-mono text-[10px] text-primary">
                    {i + 1}
                  </span>
                  <p className="font-semibold">{t.phase}</p>
                  <p className="mt-1 text-sm text-muted-foreground">{t.detail}</p>
                </li>
              ))}
            </ol>
          </div>

          <aside className="space-y-6 lg:sticky lg:top-24 lg:h-fit">
            <div className="soft-card p-7">
              <div className="flex items-center gap-2">
                <Table2 className="size-5 text-accent" />
                <h3 className="font-semibold">Key Calculations</h3>
              </div>
              <dl className="mt-5 space-y-4">
                {p.calculations.map((c) => (
                  <div key={c.label} className="border-b border-border pb-3 last:border-0">
                    <dt className="font-mono text-[11px] uppercase tracking-[0.14em] text-muted-foreground">
                      {c.label}
                    </dt>
                    <dd className="mt-1 text-sm font-medium">{c.value}</dd>
                  </div>
                ))}
              </dl>
            </div>

            <div className="soft-card p-7">
              <div className="flex items-center gap-2">
                <FileSpreadsheet className="size-5 text-accent" />
                <h3 className="font-semibold">Downloads</h3>
              </div>
              <ul className="mt-5 space-y-3">
                {p.downloads.map((d) => (
                  <li
                    key={d.label}
                    className="flex items-center justify-between gap-3 rounded-xl border border-border px-4 py-3 text-sm transition-colors hover:border-primary"
                  >
                    <span className="min-w-0 truncate">{d.label}</span>
                    <span className="font-mono text-[10px] uppercase tracking-[0.14em] text-muted-foreground">
                      {d.type}
                    </span>
                  </li>
                ))}
              </ul>
              <Button asChild variant="outline" className="mt-5 w-full">
                <Link to="/downloads">
                  <Download /> All downloads
                </Link>
              </Button>
            </div>

            <div className="rounded-2xl border border-border bg-muted/40 p-7">
              <h3 className="font-semibold">Gallery</h3>
              <div className="mt-4 grid grid-cols-2 gap-3">
                {[0, 1, 2, 3].map((i) => (
                  <div
                    key={i}
                    className="aspect-square rounded-xl border border-border grid-blueprint-fine bg-card"
                  />
                ))}
              </div>
              <p className="mt-4 text-xs text-muted-foreground">
                Site photographs and rendered drawings can be added to this gallery.
              </p>
            </div>
          </aside>
        </div>
      </Section>
    </>
  );
}

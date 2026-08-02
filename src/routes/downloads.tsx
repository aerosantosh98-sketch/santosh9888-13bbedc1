import { createFileRoute } from "@tanstack/react-router";
import { Download, FileText, FileSpreadsheet, PenLine } from "lucide-react";
import { PageHeader, Section } from "@/components/site/Page";
import { Button } from "@/components/ui/button";
import { downloads } from "@/lib/portfolio";

export const Route = createFileRoute("/downloads")({
  head: () => ({
    meta: [
      { title: "Downloads | Resume, BOQs & Drawings — Santosh Yadav" },
      {
        name: "description",
        content:
          "Download the resume, certificate bundle, BOQ spreadsheets, estimation workbooks, drawings and project reports.",
      },
      { property: "og:title", content: "Downloads | Santosh Yadav" },
      {
        property: "og:description",
        content: "Resume, certificates, BOQs, Excel workbooks, drawings and project reports.",
      },
    ],
  }),
  component: Downloads,
});

const iconFor = (type: string) =>
  type === "XLSX" ? FileSpreadsheet : type === "DWG" ? PenLine : FileText;

function Downloads() {
  return (
    <>
      <PageHeader
        eyebrow="Downloads"
        title="Documents, drawings and data — ready to review."
        description="Everything a recruiter or project lead might need, in one place."
      />

      <Section>
        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {downloads.map((d) => {
            const Icon = iconFor(d.type);
            return (
              <article
                key={d.label}
                className="lift flex flex-col rounded-2xl border border-border bg-card p-7"
              >
                <div className="grid grid-cols-[minmax(0,1fr)_auto] items-start gap-3">
                  <div className="min-w-0">
                    <span className="grid size-11 place-items-center rounded-xl bg-primary/10 text-primary">
                      <Icon className="size-5" />
                    </span>
                    <h2 className="mt-5 text-lg font-semibold">{d.label}</h2>
                    <p className="mt-2 text-sm text-muted-foreground">{d.desc}</p>
                  </div>
                  <span className="shrink-0 rounded-full border border-border px-3 py-1 font-mono text-[10px] uppercase tracking-[0.16em] text-muted-foreground">
                    {d.type}
                  </span>
                </div>
                <div className="mt-6 flex items-center justify-between gap-3 border-t border-border pt-5">
                  <span className="font-mono text-[11px] uppercase tracking-[0.16em] text-muted-foreground">
                    {d.size}
                  </span>
                  <Button asChild size="sm" variant="outline">
                    <a href="/resume.pdf" download>
                      <Download /> Download
                    </a>
                  </Button>
                </div>
              </article>
            );
          })}
        </div>

        <p className="mt-10 text-sm text-muted-foreground">
          Files are served from the public folder — replace the placeholders with your final PDFs,
          spreadsheets and drawings to make every download live.
        </p>
      </Section>
    </>
  );
}

import { createFileRoute } from "@tanstack/react-router";
import { GraduationCap } from "lucide-react";
import { PageHeader, Section } from "@/components/site/Page";
import { education } from "@/lib/portfolio";

export const Route = createFileRoute("/education")({
  head: () => ({
    meta: [
      { title: "Education | Santosh Yadav, NMIT Bengaluru" },
      {
        name: "description",
        content:
          "B.E. Civil Engineering at NMIT Bengaluru (CGPA 9.26), higher secondary and secondary education in Kathmandu, Nepal.",
      },
      { property: "og:title", content: "Education | Santosh Yadav" },
      {
        property: "og:description",
        content: "Academic timeline from SLC to B.E. Civil Engineering at NMIT Bengaluru.",
      },
    ],
  }),
  component: Education,
});

function Education() {
  return (
    <>
      <PageHeader
        eyebrow="Education"
        title="An academic record built on consistency."
        description="From a 98.75% secondary result in Kathmandu to a 9.26 CGPA in Civil Engineering at NMIT Bengaluru."
      />

      <Section>
        <ol className="relative border-l border-border pl-8">
          {education.map((e) => (
            <li key={e.degree} className="relative pb-12 last:pb-0">
              <span className="absolute -left-[41px] grid size-8 place-items-center rounded-full border border-primary bg-background text-primary">
                <GraduationCap className="size-4" />
              </span>
              <div className="lift rounded-3xl border border-border bg-card p-8">
                <div className="grid gap-2 sm:grid-cols-[1fr_auto] sm:items-start">
                  <div className="min-w-0">
                    <h2 className="text-xl font-bold sm:text-2xl">{e.degree}</h2>
                    <p className="mt-2 text-sm text-muted-foreground">{e.org}</p>
                  </div>
                  <span className="font-mono text-xs uppercase tracking-[0.18em] text-accent">
                    {e.period}
                  </span>
                </div>
                <p className="mt-5 inline-block rounded-full bg-primary/10 px-4 py-1.5 text-sm font-medium text-primary">
                  {e.score}
                </p>
                <p className="mt-5 text-sm leading-relaxed text-muted-foreground">{e.detail}</p>
              </div>
            </li>
          ))}
        </ol>
      </Section>
    </>
  );
}

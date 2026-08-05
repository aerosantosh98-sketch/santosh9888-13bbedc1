import { createFileRoute, Link } from "@tanstack/react-router";
import { Download, Printer, FileText, Eye } from "lucide-react";
import { PageHeader, Section } from "@/components/site/Page";
import { Button } from "@/components/ui/button";
import {
  certifications,
  education,
  experience,
  profile,
  projects,
  resumeFile,
  skillGroups,
} from "@/lib/portfolio";

export const Route = createFileRoute("/resume")({
  head: () => ({
    meta: [
      { title: "Resume | Santosh Yadav, Civil Engineer" },
      {
        name: "description",
        content:
          "Full resume of Santosh Yadav: education, internship, projects, certifications and technical skills. View online or download the PDF.",
      },
      { property: "og:title", content: "Resume | Santosh Yadav" },
      {
        property: "og:description",
        content: "Education, internship, projects and technical skills in one engineering resume.",
      },
    ],
  }),
  component: Resume,
});

function Row({ title, sub, right }: { title: string; sub: string; right: string }) {
  return (
    <div className="grid gap-1 border-b border-border py-4 sm:grid-cols-[1fr_auto] sm:items-baseline">
      <div className="min-w-0">
        <p className="font-semibold">{title}</p>
        <p className="text-sm text-muted-foreground">{sub}</p>
      </div>
      <p className="font-mono text-xs uppercase tracking-[0.14em] text-muted-foreground">{right}</p>
    </div>
  );
}

function Resume() {
  return (
    <>
      <PageHeader
        eyebrow="Resume"
        title="Curriculum Vitae"
        description="A structured summary of academic record, site experience, technical tooling and certifications."
      >
        <div className="flex flex-wrap gap-3">
          <Button asChild variant="outline">
            <a href={resumeFile} target="_blank" rel="noreferrer">
              <Eye /> View Resume
            </a>
          </Button>
          <Button asChild>
            <a href={resumeFile} download>
              <Download /> Download Resume
            </a>
          </Button>
          <Button variant="outline" onClick={() => window.print()}>
            <Printer /> Print
          </Button>
        </div>
      </PageHeader>

      <Section>
        <div className="grid gap-10 lg:grid-cols-[1fr_320px]">
          <article className="soft-card p-8 shadow-[var(--shadow-elegant)] sm:p-12">
            <header className="border-b border-border pb-6">
              <h2 className="text-3xl font-bold">{profile.name}</h2>
              <p className="mt-2 text-sm text-muted-foreground">{profile.longTitle}</p>
              <p className="mt-3 font-mono text-xs text-muted-foreground">
                {profile.email} · {profile.phone} · {profile.location}
              </p>
            </header>

            <section className="mt-8">
              <h3 className="font-mono text-xs uppercase tracking-[0.24em] text-primary">
                Objective
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                {profile.objective}
              </p>
            </section>

            <section className="mt-8">
              <h3 className="font-mono text-xs uppercase tracking-[0.24em] text-primary">
                Education
              </h3>
              <div className="mt-3">
                {education.map((e) => (
                  <Row key={e.degree} title={e.degree} sub={`${e.org} · ${e.score}`} right={e.period} />
                ))}
              </div>
            </section>

            <section className="mt-8">
              <h3 className="font-mono text-xs uppercase tracking-[0.24em] text-primary">
                Experience
              </h3>
              {experience.map((x) => (
                <div key={x.role} className="mt-3">
                  <Row title={x.role} sub={`${x.org}, ${x.location}`} right={x.period} />
                  <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
                    {x.points.map((p) => (
                      <li key={p} className="flex gap-3">
                        <span className="mt-2 size-1.5 shrink-0 rounded-full bg-accent" />
                        {p}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </section>

            <section className="mt-8">
              <h3 className="font-mono text-xs uppercase tracking-[0.24em] text-primary">
                Projects
              </h3>
              <div className="mt-3">
                {projects.map((p) => (
                  <Row key={p.slug} title={p.title} sub={p.summary} right={p.year} />
                ))}
              </div>
            </section>

            <section className="mt-8">
              <h3 className="font-mono text-xs uppercase tracking-[0.24em] text-primary">
                Technical Skills
              </h3>
              <div className="mt-4 grid gap-4 sm:grid-cols-2">
                {skillGroups.map((g) => (
                  <div key={g.title}>
                    <p className="text-sm font-semibold">{g.title}</p>
                    <p className="mt-1 text-sm text-muted-foreground">{g.items.join(", ")}</p>
                  </div>
                ))}
              </div>
            </section>

            <section className="mt-8">
              <h3 className="font-mono text-xs uppercase tracking-[0.24em] text-primary">
                Certifications
              </h3>
              <ul className="mt-3 grid gap-2 text-sm text-muted-foreground sm:grid-cols-2">
                {certifications.map((c) => (
                  <li key={c.name}>
                    {c.name} — <span className="text-foreground/70">{c.issuer}</span>
                  </li>
                ))}
              </ul>
            </section>
          </article>

          <aside className="h-fit rounded-3xl border border-border bg-muted/40 p-7 lg:sticky lg:top-24">
            <FileText className="size-6 text-primary" />
            <h3 className="mt-4 text-lg font-semibold">Resume PDF</h3>
            <p className="mt-2 text-sm text-muted-foreground">
              Served locally from the project — no external links.
            </p>
            <div className="mt-5 aspect-[3/4] overflow-hidden rounded-xl border border-border bg-background">
              <object data={resumeFile} type="application/pdf" className="h-full w-full">
                <div className="grid h-full place-items-center p-6 text-center text-sm text-muted-foreground">
                  PDF preview unavailable in this browser — use View or Download.
                </div>
              </object>
            </div>
            <div className="mt-5 grid gap-3">
              <Button asChild variant="outline">
                <a href={resumeFile} target="_blank" rel="noreferrer">
                  <Eye /> View Resume
                </a>
              </Button>
              <Button asChild>
                <a href={resumeFile} download>
                  <Download /> Download Resume
                </a>
              </Button>
            </div>
          </aside>
        </div>
      </Section>
    </>
  );
}

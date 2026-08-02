import { createFileRoute } from "@tanstack/react-router";
import { Target, Languages, Heart, Trophy } from "lucide-react";
import { PageHeader, Section, SectionTitle } from "@/components/site/Page";
import { achievements, interests, languages, profile } from "@/lib/portfolio";
import portrait from "@/assets/portrait.jpg";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Santosh Yadav | Civil Engineering Undergraduate" },
      {
        name: "description",
        content:
          "Career objective, achievements, interests and languages of Santosh Yadav, Civil Engineering undergraduate at NMIT Bengaluru.",
      },
      { property: "og:title", content: "About Santosh Yadav" },
      {
        property: "og:description",
        content: "Career objective, achievements and interests of a future construction project engineer.",
      },
    ],
  }),
  component: About,
});

function About() {
  return (
    <>
      <PageHeader
        eyebrow="About"
        title="Engineering discipline, from first principles to site execution."
        description={profile.longTitle}
      />

      <Section>
        <div className="grid gap-12 lg:grid-cols-[0.85fr_1.15fr]">
          <div className="relative">
            <div className="absolute -inset-3 rounded-3xl grid-blueprint-fine opacity-70" aria-hidden />
            <img
              src={portrait}
              alt="Portrait of Santosh Yadav"
              loading="lazy"
              width={1024}
              height={1280}
              className="relative rounded-3xl border border-border object-cover shadow-[var(--shadow-elegant)]"
            />
          </div>
          <div>
            <SectionTitle kicker="Profile" title="Who I am" />
            <p className="text-base leading-relaxed text-muted-foreground">{profile.bio}</p>

            <div className="mt-8 rounded-2xl border border-border bg-card p-7">
              <div className="flex items-center gap-3">
                <Target className="size-5 text-accent" />
                <h3 className="text-lg font-semibold">Career Objective</h3>
              </div>
              <p className="mt-4 leading-relaxed text-muted-foreground">{profile.objective}</p>
            </div>
          </div>
        </div>
      </Section>

      <Section className="pt-0">
        <div className="grid gap-6 lg:grid-cols-3">
          <div className="lift rounded-2xl border border-border bg-card p-7">
            <Trophy className="size-5 text-accent" />
            <h3 className="mt-4 text-lg font-semibold">Achievements</h3>
            <ul className="mt-4 space-y-3 text-sm text-muted-foreground">
              {achievements.map((a) => (
                <li key={a} className="flex gap-3">
                  <span className="mt-2 size-1.5 shrink-0 rounded-full bg-primary" />
                  {a}
                </li>
              ))}
            </ul>
          </div>

          <div className="lift rounded-2xl border border-border bg-card p-7">
            <Heart className="size-5 text-accent" />
            <h3 className="mt-4 text-lg font-semibold">Interests</h3>
            <div className="mt-4 flex flex-wrap gap-2">
              {interests.map((i) => (
                <span
                  key={i}
                  className="rounded-full border border-border bg-muted px-3 py-1.5 text-xs text-muted-foreground"
                >
                  {i}
                </span>
              ))}
            </div>
          </div>

          <div className="lift rounded-2xl border border-border bg-card p-7">
            <Languages className="size-5 text-accent" />
            <h3 className="mt-4 text-lg font-semibold">Languages</h3>
            <ul className="mt-4 space-y-3">
              {languages.map((l) => (
                <li
                  key={l}
                  className="flex items-center justify-between border-b border-border pb-2 text-sm"
                >
                  <span>{l}</span>
                  <span className="font-mono text-[11px] uppercase tracking-[0.16em] text-muted-foreground">
                    Fluent
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Section>
    </>
  );
}

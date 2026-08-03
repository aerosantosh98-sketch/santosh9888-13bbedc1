import type { ReactNode } from "react";
import { Reveal } from "./Motion";

export function PageHeader({
  eyebrow,
  title,
  description,
  children,
}: {
  eyebrow: string;
  title: string;
  description?: string;
  children?: ReactNode;
}) {
  return (
    <section className="relative overflow-hidden hero-gradient">
      <div className="relative mx-auto max-w-7xl px-6 pb-14 pt-28 sm:pt-32 lg:px-10 lg:pb-20 lg:pt-40">
        <Reveal>
          <p className="eyebrow text-primary">{eyebrow}</p>
        </Reveal>
        <Reveal delay={0.08}>
          <h1 className="display-xl mt-6 max-w-4xl text-[clamp(2.5rem,7vw,5rem)]">{title}</h1>
        </Reveal>
        {description && (
          <Reveal delay={0.16}>
            <p className="mt-7 max-w-2xl text-lg leading-relaxed text-muted-foreground">
              {description}
            </p>
          </Reveal>
        )}
        {children && (
          <Reveal delay={0.24}>
            <div className="mt-10">{children}</div>
          </Reveal>
        )}
      </div>
    </section>
  );
}

export function Section({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <section className={`mx-auto max-w-7xl px-6 py-14 sm:py-16 lg:px-10 ${className}`}>
      {children}
    </section>
  );
}

export function SectionTitle({ kicker, title }: { kicker?: string; title: string }) {
  return (
    <Reveal className="mb-9 max-w-3xl">
      {kicker && <p className="eyebrow text-primary">{kicker}</p>}
      <h2 className="mt-3 text-[clamp(1.8rem,4vw,3rem)] font-bold">{title}</h2>
    </Reveal>
  );
}

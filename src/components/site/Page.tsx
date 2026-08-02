import type { ReactNode } from "react";

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
    <section className="relative overflow-hidden border-b border-border hero-gradient">
      <div className="absolute inset-0 grid-blueprint opacity-70" aria-hidden />
      <div className="relative mx-auto max-w-7xl px-5 py-16 sm:py-20 lg:px-8">
        <p className="animate-rise font-mono text-xs uppercase tracking-[0.28em] text-primary">
          {eyebrow}
        </p>
        <h1 className="animate-rise mt-4 max-w-3xl text-4xl font-bold sm:text-5xl">{title}</h1>
        {description && (
          <p className="animate-rise mt-5 max-w-2xl text-base leading-relaxed text-muted-foreground">
            {description}
          </p>
        )}
        {children && <div className="mt-8">{children}</div>}
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
    <section className={`mx-auto max-w-7xl px-5 py-16 lg:px-8 ${className}`}>{children}</section>
  );
}

export function SectionTitle({ kicker, title }: { kicker?: string; title: string }) {
  return (
    <div className="mb-10">
      {kicker && (
        <p className="font-mono text-xs uppercase tracking-[0.24em] text-accent">{kicker}</p>
      )}
      <h2 className="mt-2 text-3xl font-bold sm:text-4xl">{title}</h2>
      <div className="mt-4 h-px w-24 bg-primary/60" />
    </div>
  );
}

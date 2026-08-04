import { useEffect, useState } from "react";
import { Link, useRouterState } from "@tanstack/react-router";
import { Menu, Moon, Sun, X } from "lucide-react";
import { navItems } from "@/lib/portfolio";
import { cn } from "@/lib/utils";

function ThemeToggle() {
  const [dark, setDark] = useState(true);

  useEffect(() => {
    const stored = localStorage.getItem("theme");
    const isDark = stored ? stored === "dark" : true;
    setDark(isDark);
    document.documentElement.classList.toggle("dark", isDark);
  }, []);

  const toggle = () => {
    const next = !dark;
    setDark(next);
    document.documentElement.classList.toggle("dark", next);
    localStorage.setItem("theme", next ? "dark" : "light");
  };

  return (
    <button
      onClick={toggle}
      aria-label="Toggle dark mode"
      className="grid size-9 shrink-0 place-items-center rounded-full text-foreground/70 transition-all hover:bg-muted hover:text-foreground"
    >
      {dark ? <Sun className="size-4" /> : <Moon className="size-4" />}
    </button>
  );
}

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = useRouterState({ select: (s) => s.location.pathname });

  useEffect(() => setOpen(false), [pathname]);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className="pointer-events-none fixed inset-x-0 top-0 z-50 px-4 pt-4 sm:px-6">
      <div
        className={cn(
          "pointer-events-auto mx-auto flex max-w-6xl items-center gap-3 rounded-full px-3 py-2 transition-all duration-500",
          scrolled
            ? "glass-card shadow-[var(--shadow-soft)]"
            : "border border-transparent bg-background/40 backdrop-blur-sm",
        )}
      >
        <Link
          to="/"
          className="ml-2 min-w-0 shrink-0 font-display text-base font-bold tracking-tight sm:text-lg"
        >
          Santosh<span className="text-primary">.</span>
        </Link>

        <nav className="mx-auto hidden items-center xl:flex">
          {navItems.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              preload="intent"
              activeOptions={{ exact: item.to === "/" }}
              className={cn(
                "relative rounded-full px-3.5 py-2 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground",
                "data-[status=active]:bg-primary/10 data-[status=active]:text-primary",
              )}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="ml-auto flex items-center gap-1.5 xl:ml-0">
          <ThemeToggle />
          <Link
            to="/contact"
            preload="intent"
            className="hidden rounded-full bg-foreground px-5 py-2.5 text-sm font-medium text-background transition-transform duration-300 hover:scale-[1.04] sm:inline-flex"
          >
            Let's talk
          </Link>
          <button
            onClick={() => setOpen((v) => !v)}
            aria-label="Toggle navigation"
            className="grid size-9 place-items-center rounded-full text-foreground transition-colors hover:bg-muted xl:hidden"
          >
            {open ? <X className="size-4" /> : <Menu className="size-4" />}
          </button>
        </div>
      </div>

      {open && (
        <nav className="glass-card pointer-events-auto mx-auto mt-2 max-w-6xl rounded-3xl p-3 xl:hidden">
          <div className="grid grid-cols-2 gap-1 sm:grid-cols-3">
            {navItems.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                preload="intent"
                activeOptions={{ exact: item.to === "/" }}
                className="rounded-2xl px-4 py-2.5 text-sm text-muted-foreground transition-colors hover:bg-muted data-[status=active]:bg-primary/10 data-[status=active]:text-primary"
              >
                {item.label}
              </Link>
            ))}
          </div>
        </nav>
      )}
    </header>
  );
}

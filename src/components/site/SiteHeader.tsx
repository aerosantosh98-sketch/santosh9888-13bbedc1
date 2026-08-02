import { useEffect, useState } from "react";
import { Link, useRouterState } from "@tanstack/react-router";
import { Menu, Moon, Sun, X, Compass } from "lucide-react";
import { navItems } from "@/lib/portfolio";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

function ThemeToggle() {
  const [dark, setDark] = useState(false);

  useEffect(() => {
    const stored = localStorage.getItem("theme");
    const isDark = stored ? stored === "dark" : false;
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
      className="grid size-9 shrink-0 place-items-center rounded-full border border-border bg-card text-foreground transition-colors hover:border-primary hover:text-primary"
    >
      {dark ? <Sun className="size-4" /> : <Moon className="size-4" />}
    </button>
  );
}

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const pathname = useRouterState({ select: (s) => s.location.pathname });

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  return (
    <header className="sticky top-0 z-50 border-b border-border/70 bg-background/80 backdrop-blur-xl">
      <div className="mx-auto grid max-w-7xl grid-cols-[minmax(0,1fr)_auto] items-center gap-4 px-5 py-3 lg:px-8">
        <Link to="/" className="flex min-w-0 items-center gap-3">
          <span className="grid size-9 shrink-0 place-items-center rounded-md navy-gradient text-navy-foreground">
            <Compass className="size-4" />
          </span>
          <span className="min-w-0">
            <span className="block truncate font-display text-base font-bold leading-tight">
              Santosh Yadav
            </span>
            <span className="block truncate font-mono text-[10px] uppercase tracking-[0.18em] text-muted-foreground">
              Civil Engineering
            </span>
          </span>
        </Link>

        <div className="flex items-center gap-2">
          <nav className="hidden items-center gap-0.5 xl:flex">
            {navItems.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                activeOptions={{ exact: item.to === "/" }}
                className={cn(
                  "rounded-full px-3 py-2 text-sm font-medium text-muted-foreground transition-colors hover:text-primary",
                  "data-[status=active]:bg-primary/10 data-[status=active]:text-primary",
                )}
              >
                {item.label}
              </Link>
            ))}
          </nav>
          <ThemeToggle />
          <Button asChild size="sm" className="hidden sm:inline-flex">
            <Link to="/contact">Hire Me</Link>
          </Button>
          <button
            onClick={() => setOpen((v) => !v)}
            aria-label="Toggle navigation"
            className="grid size-9 place-items-center rounded-full border border-border xl:hidden"
          >
            {open ? <X className="size-4" /> : <Menu className="size-4" />}
          </button>
        </div>
      </div>

      {open && (
        <nav className="border-t border-border bg-background px-5 pb-5 pt-2 xl:hidden">
          <div className="grid grid-cols-2 gap-1 sm:grid-cols-3">
            {navItems.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                activeOptions={{ exact: item.to === "/" }}
                className="rounded-md px-3 py-2 text-sm text-muted-foreground transition-colors hover:bg-muted data-[status=active]:bg-primary/10 data-[status=active]:text-primary"
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

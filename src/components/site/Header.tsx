import { useState } from "react";
import { Link } from "@tanstack/react-router";
import { Menu, X, Compass } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const navItems = [
  { to: "/", label: "Início" },
  { to: "/sobre", label: "Sobre" },
  { to: "/acervo", label: "Acervo Digital" },
  { to: "/roteiros", label: "Roteiros" },
  { to: "/eventos", label: "Eventos" },
  { to: "/materiais", label: "Educativo" },
  { to: "/galeria", label: "Galeria" },
  { to: "/blog", label: "Blog" },
  { to: "/transparencia", label: "Transparência" },
  { to: "/contato", label: "Contato" },
] as const;

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-border/70 bg-background/90 backdrop-blur">
      <div className="mx-auto grid max-w-7xl grid-cols-[minmax(0,1fr)_auto] items-center gap-4 px-4 py-3 lg:flex lg:justify-between">
        <Link to="/" className="flex min-w-0 items-center gap-3" onClick={() => setOpen(false)}>
          <span className="grid h-11 w-11 shrink-0 place-items-center rounded-full bg-gradient-terra font-display text-lg font-bold text-foreground">
            Q
          </span>
          <span className="min-w-0">
            <span className="block truncate font-display text-base leading-tight font-bold sm:text-lg">
              Museu Virtual Quilombola
            </span>
            <span className="block truncate text-[11px] tracking-widest text-muted-foreground uppercase">
              Jorge Pereira da Cunha · Piripiri-PI
            </span>
          </span>
        </Link>

        <nav className="hidden items-center gap-1 xl:flex">
          {navItems.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              activeOptions={{ exact: item.to === "/" }}
              className="rounded-md px-2.5 py-2 text-sm font-medium text-foreground/80 transition-colors hover:bg-accent/30 hover:text-foreground data-[status=active]:bg-accent/40 data-[status=active]:text-foreground"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex shrink-0 items-center gap-2">
          <Button asChild variant="hero" size="sm" className="hidden sm:inline-flex">
            <Link to="/tour">
              <Compass /> Tour 360°
            </Link>
          </Button>
          <button
            type="button"
            aria-label={open ? "Fechar menu" : "Abrir menu"}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
            className="grid h-10 w-10 place-items-center rounded-md border border-border xl:hidden"
          >
            {open ? <X className="size-5" /> : <Menu className="size-5" />}
          </button>
        </div>
      </div>

      <div
        className={cn(
          "overflow-hidden border-t border-border/70 bg-background transition-[max-height] duration-300 xl:hidden",
          open ? "max-h-[32rem]" : "max-h-0",
        )}
      >
        <nav className="mx-auto flex max-w-7xl flex-col px-4 py-2">
          {navItems.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              onClick={() => setOpen(false)}
              activeOptions={{ exact: item.to === "/" }}
              className="rounded-md px-2 py-3 text-sm font-medium text-foreground/85 data-[status=active]:text-secondary"
            >
              {item.label}
            </Link>
          ))}
          <Button asChild variant="hero" className="my-3 sm:hidden">
            <Link to="/tour" onClick={() => setOpen(false)}>
              <Compass /> Iniciar Tour 360°
            </Link>
          </Button>
        </nav>
      </div>
    </header>
  );
}

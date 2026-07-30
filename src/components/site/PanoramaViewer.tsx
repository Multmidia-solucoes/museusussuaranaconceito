import { useCallback, useEffect, useRef, useState } from "react";
import { Link } from "@tanstack/react-router";
import { Info, Minus, Plus, MousePointer2, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { hotspots as defaultHotspots, panorama, type Hotspot } from "@/data/museu";
import { cn } from "@/lib/utils";

type Props = {
  hotspots?: Hotspot[];
  startX?: number; // 0-100
  className?: string;
};

export function PanoramaViewer({ hotspots = defaultHotspots, startX = 0, className }: Props) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [offset, setOffset] = useState(0); // px
  const [zoom, setZoom] = useState(1);
  const [width, setWidth] = useState(0);
  const [active, setActive] = useState<Hotspot | null>(null);
  const drag = useRef<{ x: number; start: number } | null>(null);

  const sceneWidth = width * 2.6 * zoom;

  const clamp = useCallback(
    (v: number) => Math.min(0, Math.max(-(sceneWidth - width), v)),
    [sceneWidth, width],
  );

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;
    const ro = new ResizeObserver(() => setWidth(el.clientWidth));
    ro.observe(el);
    setWidth(el.clientWidth);
    return () => ro.disconnect();
  }, []);

  useEffect(() => {
    if (!width) return;
    setOffset((o) => clamp(o || -(startX / 100) * sceneWidth));
  }, [width, sceneWidth, startX, clamp]);

  const onPointerDown = (e: React.PointerEvent) => {
    drag.current = { x: e.clientX, start: offset };
    (e.target as Element).setPointerCapture?.(e.pointerId);
  };
  const onPointerMove = (e: React.PointerEvent) => {
    if (!drag.current) return;
    setOffset(clamp(drag.current.start + (e.clientX - drag.current.x)));
  };
  const onPointerUp = () => {
    drag.current = null;
  };

  return (
    <div className={cn("relative overflow-hidden rounded-2xl bg-carvao shadow-terra", className)}>
      <div
        ref={containerRef}
        role="application"
        aria-label="Visualizador panorâmico 360 graus do terreiro"
        tabIndex={0}
        onKeyDown={(e) => {
          if (e.key === "ArrowRight") setOffset((o) => clamp(o - 80));
          if (e.key === "ArrowLeft") setOffset((o) => clamp(o + 80));
        }}
        onPointerDown={onPointerDown}
        onPointerMove={onPointerMove}
        onPointerUp={onPointerUp}
        onPointerLeave={onPointerUp}
        className="relative h-[58vh] min-h-[320px] w-full cursor-grab touch-pan-y overflow-hidden select-none active:cursor-grabbing"
      >
        <div
          className="absolute inset-y-0 left-0 h-full will-change-transform"
          style={{ width: sceneWidth, transform: `translateX(${offset}px)` }}
        >
          <img
            src={panorama}
            alt="Panorâmica 360° do terreiro central da comunidade quilombola Sussuarana"
            draggable={false}
            className="h-full w-full object-cover"
          />
          {hotspots.map((h) => (
            <button
              key={h.id}
              type="button"
              onClick={() => setActive(h)}
              aria-label={`Ponto de interesse: ${h.titulo}`}
              className="absolute -translate-x-1/2 -translate-y-1/2"
              style={{ left: `${h.x}%`, top: `${h.y}%` }}
            >
              <span className="relative grid size-9 place-items-center rounded-full bg-primary/90 text-foreground shadow-terra transition-transform hover:scale-110">
                <span className="absolute inset-0 animate-ping rounded-full bg-primary/50" />
                <Info className="relative size-4" />
              </span>
            </button>
          ))}
        </div>

        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-foreground/70 to-transparent" />

        <div className="pointer-events-none absolute bottom-4 left-4 flex items-center gap-2 rounded-full bg-foreground/70 px-3 py-1.5 text-xs text-background">
          <MousePointer2 className="size-3.5" /> Arraste para girar · use ← → no teclado
        </div>

        <div className="absolute right-4 bottom-4 flex gap-2">
          <Button
            size="icon"
            variant="hero"
            aria-label="Aproximar"
            onClick={() => setZoom((z) => Math.min(2, +(z + 0.25).toFixed(2)))}
          >
            <Plus />
          </Button>
          <Button
            size="icon"
            variant="hero"
            aria-label="Afastar"
            onClick={() => setZoom((z) => Math.max(1, +(z - 0.25).toFixed(2)))}
          >
            <Minus />
          </Button>
        </div>
      </div>

      {active && (
        <div className="absolute top-4 left-4 max-w-sm animate-fade-in rounded-xl border border-border bg-card/95 p-4 shadow-terra backdrop-blur">
          <div className="grid grid-cols-[minmax(0,1fr)_auto] items-start gap-3">
            <h3 className="font-display text-lg font-bold">{active.titulo}</h3>
            <button
              type="button"
              aria-label="Fechar informação"
              onClick={() => setActive(null)}
              className="shrink-0 text-muted-foreground hover:text-foreground"
            >
              <X className="size-4" />
            </button>
          </div>
          <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{active.texto}</p>
          {active.itemAcervo && (
            <Button asChild size="sm" variant="terra" className="mt-3">
              <Link to="/acervo/$itemId" params={{ itemId: active.itemAcervo }}>
                Ver item do acervo
              </Link>
            </Button>
          )}
        </div>
      )}
    </div>
  );
}

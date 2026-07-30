import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { PlayCircle } from "lucide-react";
import { PageHeader } from "@/components/site/Section";
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";
import { Card, CardContent } from "@/components/ui/card";
import { galeria, videos } from "@/data/museu";

export const Route = createFileRoute("/galeria")({
  head: () => ({
    meta: [
      { title: "Galeria de Fotos e Vídeos | Museu Virtual Quilombola" },
      {
        name: "description",
        content:
          "Imagens e vídeos do cotidiano, das festas e do acervo da Comunidade Quilombola Sussuarana.",
      },
      { property: "og:title", content: "Galeria do Museu Quilombola Sussuarana" },
      { property: "og:description", content: "Fotografias e vídeos da comunidade e do acervo." },
    ],
  }),
  component: GaleriaPage,
});

const filtros = ["Todos", "Eventos", "Cotidiano", "Acervo"];

function GaleriaPage() {
  const [filtro, setFiltro] = useState("Todos");
  const [aberta, setAberta] = useState<(typeof galeria)[number] | null>(null);
  const fotos = galeria.filter((f) => filtro === "Todos" || f.categoria === filtro);

  return (
    <>
      <PageHeader
        eyebrow="Imagens"
        title="Galeria de Fotos e Vídeos"
        description="Um retrato visual da comunidade: o cotidiano, as festas, o trabalho e as peças do acervo."
      />

      <section className="mx-auto max-w-7xl px-4 py-14">
        <div className="flex flex-wrap gap-2">
          {filtros.map((f) => (
            <button
              key={f}
              onClick={() => setFiltro(f)}
              className={
                "rounded-full border px-3 py-1.5 text-sm transition-colors " +
                (filtro === f
                  ? "border-transparent bg-secondary text-secondary-foreground"
                  : "border-border bg-card hover:bg-accent/30")
              }
            >
              {f}
            </button>
          ))}
        </div>

        <div className="mt-8 columns-1 gap-4 sm:columns-2 lg:columns-3">
          {fotos.map((f) => (
            <button
              key={f.id}
              onClick={() => setAberta(f)}
              className="group mb-4 block w-full overflow-hidden rounded-xl shadow-terra"
            >
              <img
                src={f.imagem}
                alt={f.titulo}
                loading="lazy"
                className="w-full transition-transform duration-500 group-hover:scale-105"
              />
            </button>
          ))}
        </div>

        <h2 className="mt-16 font-display text-2xl font-bold">Vídeos</h2>
        <div className="mt-6 grid gap-6 sm:grid-cols-2">
          {videos.map((v) => (
            <Card key={v.id} className="overflow-hidden pt-0">
              <div className="relative aspect-video overflow-hidden">
                <img src={v.thumb} alt={v.titulo} loading="lazy" className="h-full w-full object-cover" />
                <span className="absolute inset-0 grid place-items-center bg-foreground/40">
                  <PlayCircle className="size-14 text-primary" />
                </span>
              </div>
              <CardContent>
                <h3 className="font-display text-lg font-bold">{v.titulo}</h3>
                <p className="text-sm text-muted-foreground">Duração: {v.duracao}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <Dialog open={!!aberta} onOpenChange={(o) => !o && setAberta(null)}>
        <DialogContent className="max-w-4xl">
          <DialogTitle className="font-display">{aberta?.titulo}</DialogTitle>
          {aberta && (
            <img src={aberta.imagem} alt={aberta.titulo} className="w-full rounded-lg" />
          )}
        </DialogContent>
      </Dialog>
    </>
  );
}

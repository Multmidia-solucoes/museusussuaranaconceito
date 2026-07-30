import { createFileRoute, Link } from "@tanstack/react-router";
import { PanoramaViewer } from "@/components/site/PanoramaViewer";
import { PageHeader } from "@/components/site/Section";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { hotspots, roteiros } from "@/data/museu";
import { useState } from "react";

export const Route = createFileRoute("/tour")({
  head: () => ({
    meta: [
      { title: "Tour Virtual 360° | Museu Virtual Quilombola Sussuarana" },
      {
        name: "description",
        content:
          "Caminhe em 360° pelo terreiro da Comunidade Quilombola Sussuarana e descubra hotspots com histórias e itens do acervo.",
      },
      { property: "og:title", content: "Tour Virtual 360° — Museu Quilombola Sussuarana" },
      {
        property: "og:description",
        content: "Visita imersiva ao terreiro quilombola com pontos interativos.",
      },
    ],
  }),
  component: TourPage,
});

function TourPage() {
  const [startX, setStartX] = useState(0);
  const [key, setKey] = useState(0);

  const irPara = (x: number) => {
    setStartX(x);
    setKey((k) => k + 1);
  };

  return (
    <>
      <PageHeader
        eyebrow="Imersão"
        title="Tour Virtual 360°"
        description="Arraste a imagem para girar o olhar pelo terreiro central, aproxime com os botões de zoom e clique nos pontos laranja para abrir histórias, depoimentos e itens do acervo."
      />

      <section className="mx-auto max-w-7xl px-4 py-10">
        <PanoramaViewer key={key} startX={startX} />

        <div className="mt-10 grid gap-8 lg:grid-cols-[minmax(0,2fr)_minmax(0,1fr)]">
          <div>
            <h2 className="font-display text-2xl font-bold">Pontos de interesse</h2>
            <div className="mt-4 grid gap-3 sm:grid-cols-2">
              {hotspots.map((h) => (
                <Card key={h.id}>
                  <CardContent className="space-y-2">
                    <h3 className="font-display text-base font-bold">{h.titulo}</h3>
                    <p className="text-sm text-muted-foreground">{h.texto}</p>
                    <Button size="sm" variant="contorno" onClick={() => irPara(h.x)}>
                      Ir para este ponto
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          <aside className="space-y-4">
            <Card className="bg-muted/60">
              <CardContent>
                <h3 className="font-display text-lg font-bold">Como navegar</h3>
                <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
                  <li>1. Clique e arraste (ou deslize o dedo) para girar a vista.</li>
                  <li>2. Use as setas ← → do teclado para percorrer o cenário.</li>
                  <li>3. Toque nos círculos laranja para abrir informações.</li>
                  <li>4. Use + e − para aproximar e afastar.</li>
                </ul>
              </CardContent>
            </Card>
            <Card>
              <CardContent>
                <h3 className="font-display text-lg font-bold">Roteiros temáticos</h3>
                <p className="mt-2 text-sm text-muted-foreground">
                  Prefere uma visita guiada? Escolha um percurso.
                </p>
                <div className="mt-3 flex flex-wrap gap-2">
                  {roteiros.map((r) => (
                    <Button key={r.id} asChild size="sm" variant="secondary">
                      <Link to="/roteiros" hash={r.id}>
                        {r.titulo}
                      </Link>
                    </Button>
                  ))}
                </div>
              </CardContent>
            </Card>
          </aside>
        </div>
      </section>
    </>
  );
}

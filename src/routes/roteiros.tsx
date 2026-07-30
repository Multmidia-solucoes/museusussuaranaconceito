import { createFileRoute, Link } from "@tanstack/react-router";
import { Clock, Compass, MapPin } from "lucide-react";
import { PageHeader } from "@/components/site/Section";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { roteiros } from "@/data/museu";

export const Route = createFileRoute("/roteiros")({
  head: () => ({
    meta: [
      { title: "Roteiros do Circuito | Museu Virtual Quilombola" },
      {
        name: "description",
        content:
          "Quatro percursos temáticos pelo território quilombola: memória, resistência, cultura material e festa.",
      },
      { property: "og:title", content: "Roteiros do Circuito Quilombola" },
      {
        property: "og:description",
        content: "Visitas guiadas em 360° por temas da comunidade Sussuarana.",
      },
    ],
  }),
  component: RoteirosPage,
});

function RoteirosPage() {
  return (
    <>
      <PageHeader
        eyebrow="Circuito"
        title="Roteiro do Circuito"
        description="Percursos temáticos que organizam a visita ao território. Cada roteiro reúne pontos do tour 360°, depoimentos e itens do acervo."
      />

      <section className="mx-auto grid max-w-7xl gap-8 px-4 py-14 lg:grid-cols-2">
        {roteiros.map((r) => (
          <Card
            key={r.id}
            id={r.id}
            className="group overflow-hidden pt-0 transition-shadow hover:shadow-terra"
          >
            <div className="aspect-[16/9] overflow-hidden">
              <img
                src={r.imagem}
                alt={r.titulo}
                loading="lazy"
                className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </div>
            <CardContent className="space-y-3">
              <h2 className="font-display text-2xl font-bold">{r.titulo}</h2>
              <p className="flex items-center gap-2 text-sm text-laranja-queimado">
                <Clock className="size-4" /> Duração estimada: {r.duracao}
              </p>
              <p className="leading-relaxed text-muted-foreground">{r.descricao}</p>
              <ul className="space-y-1 text-sm text-muted-foreground">
                {r.pontos.map((p) => (
                  <li key={p} className="flex items-center gap-2">
                    <MapPin className="size-4 text-secondary" /> {p}
                  </li>
                ))}
              </ul>
              <Button asChild variant="hero" className="mt-2">
                <Link to="/tour">
                  <Compass /> Iniciar tour neste roteiro
                </Link>
              </Button>
            </CardContent>
          </Card>
        ))}
      </section>
    </>
  );
}

import { createFileRoute, Link } from "@tanstack/react-router";
import { CalendarDays, MapPin, Images } from "lucide-react";
import { PageHeader } from "@/components/site/Section";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { eventos } from "@/data/museu";

export const Route = createFileRoute("/eventos")({
  head: () => ({
    meta: [
      { title: "Calendário de Eventos | Museu Virtual Quilombola" },
      {
        name: "description",
        content:
          "Rodas de memória, oficinas, seminários e festas da Comunidade Quilombola Sussuarana em Piripiri-PI.",
      },
      { property: "og:title", content: "Calendário de Eventos do Museu Quilombola" },
      {
        property: "og:description",
        content: "Agenda de encontros presenciais e virtuais da comunidade.",
      },
    ],
  }),
  component: EventosPage,
});

function EventosPage() {
  const proximos = eventos.filter((e) => !e.encerrado);
  const passados = eventos.filter((e) => e.encerrado);

  return (
    <>
      <PageHeader
        eyebrow="Agenda"
        title="Calendário de Eventos"
        description="Encontros que mantêm o museu vivo: rodas de memória, oficinas de saberes, formações para professores e as festas do calendário comunitário."
      />

      <section className="mx-auto max-w-7xl px-4 py-14">
        <h2 className="font-display text-2xl font-bold">Próximos eventos</h2>
        <div className="mt-6 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {proximos.map((e) => (
            <Card key={e.id} className="border-t-4 border-t-primary">
              <CardContent className="space-y-2">
                <Badge variant="secondary">{e.modalidade}</Badge>
                <p className="flex items-center gap-2 text-sm font-semibold text-laranja-queimado">
                  <CalendarDays className="size-4" /> {e.data}
                </p>
                <h3 className="font-display text-lg font-bold">{e.titulo}</h3>
                <p className="text-sm text-muted-foreground">{e.descricao}</p>
                <p className="flex items-start gap-2 text-xs text-muted-foreground">
                  <MapPin className="mt-0.5 size-3.5 shrink-0" /> {e.local}
                </p>
                <Button asChild size="sm" variant="hero" className="mt-2">
                  <Link to="/contato">Inscrever-se</Link>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <h2 className="mt-16 font-display text-2xl font-bold">Eventos realizados</h2>
        <div className="mt-6 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {passados.map((e) => (
            <Card key={e.id} className="opacity-90">
              <CardContent className="space-y-2">
                <Badge className="border-none bg-carvao text-background">Encerrado</Badge>
                <p className="text-sm text-muted-foreground">{e.data}</p>
                <h3 className="font-display text-lg font-bold">{e.titulo}</h3>
                <p className="text-sm text-muted-foreground">{e.descricao}</p>
                <Button asChild size="sm" variant="contorno" className="mt-2">
                  <Link to="/galeria">
                    <Images /> Galeria do evento
                  </Link>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>
    </>
  );
}

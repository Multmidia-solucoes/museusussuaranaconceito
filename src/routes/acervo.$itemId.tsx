import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ArrowLeft, Share2 } from "lucide-react";
import { PageHeader } from "@/components/site/Section";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { acervo } from "@/data/museu";
import { toast } from "sonner";

export const Route = createFileRoute("/acervo/$itemId")({
  loader: ({ params }) => {
    const item = acervo.find((i) => i.id === params.itemId);
    if (!item) throw notFound();
    return { item };
  },
  head: ({ loaderData }) => {
    if (!loaderData) {
      return {
        meta: [{ title: "Item não encontrado | Acervo" }, { name: "robots", content: "noindex" }],
      };
    }
    const { item } = loaderData;
    return {
      meta: [
        { title: `${item.titulo} | Acervo Digital Quilombola` },
        { name: "description", content: item.resumo },
        { property: "og:title", content: item.titulo },
        { property: "og:description", content: item.resumo },
      ],
    };
  },
  component: ItemPage,
});

function ItemPage() {
  const { item } = Route.useLoaderData();
  const relacionados = acervo.filter((i) => i.id !== item.id).slice(0, 3);

  return (
    <>
      <PageHeader eyebrow={item.categoria} title={item.titulo} description={item.resumo}>
        <Button asChild variant="contorno" size="sm">
          <Link to="/acervo">
            <ArrowLeft /> Voltar ao acervo
          </Link>
        </Button>
      </PageHeader>

      <article className="mx-auto grid max-w-7xl gap-10 px-4 py-12 lg:grid-cols-[minmax(0,3fr)_minmax(0,2fr)]">
        <img
          src={item.imagem}
          alt={item.titulo}
          loading="lazy"
          className="w-full rounded-2xl object-cover shadow-terra"
        />

        <div className="space-y-6">
          <div>
            <h2 className="font-display text-2xl font-bold">Descrição</h2>
            <p className="mt-2 leading-relaxed text-muted-foreground">{item.descricao}</p>
          </div>
          <div>
            <h2 className="font-display text-2xl font-bold">Contexto histórico</h2>
            <p className="mt-2 leading-relaxed text-muted-foreground">{item.contexto}</p>
          </div>

          <Card className="bg-muted/60">
            <CardContent className="space-y-2 text-sm">
              <h3 className="font-display text-lg font-bold">Dados técnicos</h3>
              <p>
                <strong>Data / período:</strong> {item.data}
              </p>
              <p>
                <strong>Técnica:</strong> {item.tecnica}
              </p>
              <p>
                <strong>Dimensões:</strong> {item.dimensoes}
              </p>
              <p>
                <strong>Guardião / doação:</strong> {item.doador}
              </p>
            </CardContent>
          </Card>

          <Button
            variant="terra"
            onClick={() => {
              const url = typeof window !== "undefined" ? window.location.href : "";
              navigator.clipboard?.writeText(url);
              toast.success("Link do item copiado!");
            }}
          >
            <Share2 /> Compartilhar
          </Button>
        </div>
      </article>

      <section className="mx-auto max-w-7xl px-4 pb-16">
        <h2 className="font-display text-2xl font-bold">Outros itens do acervo</h2>
        <div className="mt-6 grid gap-6 sm:grid-cols-3">
          {relacionados.map((r) => (
            <Link key={r.id} to="/acervo/$itemId" params={{ itemId: r.id }}>
              <Card className="group h-full overflow-hidden pt-0 transition-shadow hover:shadow-terra">
                <div className="aspect-[4/3] overflow-hidden">
                  <img
                    src={r.imagem}
                    alt={r.titulo}
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <CardContent className="space-y-2">
                  <Badge variant="secondary">{r.categoria}</Badge>
                  <h3 className="font-display text-base font-bold">{r.titulo}</h3>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </section>
    </>
  );
}

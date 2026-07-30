import { createFileRoute, Link } from "@tanstack/react-router";
import { PageHeader } from "@/components/site/Section";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { posts } from "@/data/museu";

export const Route = createFileRoute("/blog/")({
  head: () => ({
    meta: [
      { title: "Blog | Museu Virtual Quilombola Sussuarana" },
      {
        name: "description",
        content:
          "Notícias do acervo, eventos, vida na comunidade, parcerias e educação quilombola em Piripiri-PI.",
      },
      { property: "og:title", content: "Blog do Museu Quilombola Sussuarana" },
      { property: "og:description", content: "Histórias e novidades da comunidade Sussuarana." },
    ],
  }),
  component: BlogPage,
});

function BlogPage() {
  const categorias = [...new Set(posts.map((p) => p.categoria))];

  return (
    <>
      <PageHeader
        eyebrow="Comunicação"
        title="Blog do Museu"
        description="Novidades do acervo, bastidores do tour virtual, educação e vida na comunidade."
      />

      <section className="mx-auto grid max-w-7xl gap-10 px-4 py-14 lg:grid-cols-[minmax(0,3fr)_minmax(0,1fr)]">
        <div className="space-y-8">
          {posts.map((p) => (
            <Link key={p.slug} to="/blog/$slug" params={{ slug: p.slug }} className="block">
              <Card className="group overflow-hidden pt-0 transition-shadow hover:shadow-terra md:grid md:grid-cols-[16rem_minmax(0,1fr)]">
                <div className="aspect-[4/3] overflow-hidden md:aspect-auto md:h-full">
                  <img
                    src={p.imagem}
                    alt={p.titulo}
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <CardContent className="space-y-2 py-6">
                  <Badge variant="secondary">{p.categoria}</Badge>
                  <h2 className="font-display text-2xl leading-snug font-bold">{p.titulo}</h2>
                  <p className="text-xs text-muted-foreground">
                    {p.data} · {p.autor}
                  </p>
                  <p className="text-muted-foreground">{p.resumo}</p>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>

        <aside className="space-y-6">
          <Card className="bg-muted/60">
            <CardContent>
              <h2 className="font-display text-lg font-bold">Posts recentes</h2>
              <ul className="mt-3 space-y-2 text-sm">
                {posts.map((p) => (
                  <li key={p.slug}>
                    <Link
                      to="/blog/$slug"
                      params={{ slug: p.slug }}
                      className="text-muted-foreground hover:text-laranja-queimado"
                    >
                      {p.titulo}
                    </Link>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
          <Card>
            <CardContent>
              <h2 className="font-display text-lg font-bold">Categorias</h2>
              <div className="mt-3 flex flex-wrap gap-2">
                {categorias.map((c) => (
                  <Badge key={c} variant="outline">
                    {c}
                  </Badge>
                ))}
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent>
              <h2 className="font-display text-lg font-bold">Arquivo</h2>
              <ul className="mt-3 space-y-1 text-sm text-muted-foreground">
                <li>Julho de 2026</li>
                <li>Junho de 2026</li>
              </ul>
            </CardContent>
          </Card>
        </aside>
      </section>
    </>
  );
}

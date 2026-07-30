import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ArrowLeft } from "lucide-react";
import { PageHeader } from "@/components/site/Section";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { posts } from "@/data/museu";

export const Route = createFileRoute("/blog/$slug")({
  loader: ({ params }) => {
    const post = posts.find((p) => p.slug === params.slug);
    if (!post) throw notFound();
    return { post };
  },
  head: ({ loaderData }) => {
    if (!loaderData) {
      return {
        meta: [{ title: "Post não encontrado | Blog" }, { name: "robots", content: "noindex" }],
      };
    }
    const { post } = loaderData;
    return {
      meta: [
        { title: `${post.titulo} | Blog do Museu Quilombola` },
        { name: "description", content: post.resumo },
        { property: "og:title", content: post.titulo },
        { property: "og:description", content: post.resumo },
      ],
    };
  },
  component: PostPage,
});

function PostPage() {
  const { post } = Route.useLoaderData();
  const relacionados = posts.filter((p) => p.slug !== post.slug);

  return (
    <>
      <PageHeader eyebrow={post.categoria} title={post.titulo} description={post.resumo}>
        <Button asChild variant="contorno" size="sm">
          <Link to="/blog">
            <ArrowLeft /> Voltar ao blog
          </Link>
        </Button>
      </PageHeader>

      <article className="mx-auto max-w-3xl px-4 py-12">
        <p className="text-sm text-muted-foreground">
          {post.data} · por {post.autor}
        </p>
        <img
          src={post.imagem}
          alt={post.titulo}
          loading="lazy"
          className="mt-6 w-full rounded-2xl shadow-terra"
        />
        <div className="mt-8 space-y-5 text-lg leading-relaxed text-foreground/90">
          {post.conteudo.map((par, i) => (
            <p key={i}>{par}</p>
          ))}
        </div>
        <div className="mt-8 flex flex-wrap gap-2">
          {post.tags.map((t) => (
            <Badge key={t} variant="outline">
              #{t}
            </Badge>
          ))}
        </div>
      </article>

      <section className="mx-auto max-w-7xl px-4 pb-16">
        <h2 className="font-display text-2xl font-bold">Leia também</h2>
        <div className="mt-6 grid gap-6 sm:grid-cols-2">
          {relacionados.map((p) => (
            <Link key={p.slug} to="/blog/$slug" params={{ slug: p.slug }}>
              <Card className="h-full overflow-hidden pt-0 transition-shadow hover:shadow-terra">
                <div className="aspect-[16/9] overflow-hidden">
                  <img src={p.imagem} alt={p.titulo} loading="lazy" className="h-full w-full object-cover" />
                </div>
                <CardContent>
                  <Badge variant="secondary">{p.categoria}</Badge>
                  <h3 className="mt-2 font-display text-lg font-bold">{p.titulo}</h3>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </section>
    </>
  );
}

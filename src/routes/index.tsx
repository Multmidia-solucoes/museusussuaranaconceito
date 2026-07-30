import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "motion/react";
import { ArrowRight, Compass, CalendarDays, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { SectionHeading } from "@/components/site/Section";
import { CountUp } from "@/components/site/CountUp";
import { acervo, eventos, posts, numeros, panorama } from "@/data/museu";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Museu Virtual Quilombola Jorge Pereira da Cunha | Sussuarana, Piripiri-PI" },
      {
        name: "description",
        content:
          "Tour virtual 360°, acervo digital e memória viva da Comunidade Quilombola Sussuarana em Piripiri, Piauí.",
      },
      { property: "og:title", content: "Museu Virtual Quilombola Jorge Pereira da Cunha" },
      {
        property: "og:description",
        content: "Tour 360°, inventário digital e centro de memória quilombola em Piripiri-PI.",
      },
    ],
  }),
  component: Home,
});

function Home() {
  const destaques = acervo.slice(0, 4);
  const proximos = eventos.filter((e) => !e.encerrado).slice(0, 3);

  return (
    <>
      {/* Hero */}
      <section className="relative isolate overflow-hidden">
        <img
          src={panorama}
          alt="Terreiro da comunidade quilombola Sussuarana ao entardecer"
          width={1920}
          height={640}
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-foreground/60 via-foreground/55 to-foreground/85" />
        <div className="relative mx-auto max-w-7xl px-4 py-24 sm:py-32">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl"
          >
            <Badge className="border-none bg-accent text-accent-foreground">
              Comunidade Quilombola Sussuarana · Piripiri — PI
            </Badge>
            <h1 className="mt-5 font-display text-4xl font-bold text-balance text-background sm:text-6xl">
              A memória do quilombo, guardada pela própria comunidade
            </h1>
            <p className="mt-5 max-w-2xl text-lg leading-relaxed text-background/85">
              Museu digital, centro de memória e portal de comunicação do Museu Virtual Quilombola
              Jorge Pereira da Cunha. Caminhe pelo terreiro em 360°, explore o inventário do acervo
              e escute as vozes que sustentam este território.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Button asChild variant="hero" size="lg">
                <Link to="/tour">
                  <Compass /> Iniciar Tour Virtual 360°
                </Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-background/50 bg-transparent text-background hover:bg-background hover:text-foreground"
              >
                <Link to="/acervo">Explorar acervo digital</Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Números */}
      <section className="border-b border-border bg-secondary text-secondary-foreground">
        <div className="mx-auto grid max-w-7xl grid-cols-2 gap-6 px-4 py-12 lg:grid-cols-4">
          {numeros.map((n) => (
            <div key={n.rotulo}>
              <p className="font-display text-3xl font-bold text-primary sm:text-4xl">
                <CountUp to={n.valor} suffix={n.sufixo} />
              </p>
              <p className="mt-1 text-sm text-secondary-foreground/80">{n.rotulo}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Acervo em destaque */}
      <section className="mx-auto max-w-7xl px-4 py-20">
        <div className="grid gap-6 sm:grid-cols-[minmax(0,1fr)_auto] sm:items-end">
          <SectionHeading
            eyebrow="Inventário digital"
            title="Acervo em destaque"
            description="Objetos, imagens e depoimentos catalogados por jovens documentadores da comunidade."
          />
          <Button asChild variant="contorno">
            <Link to="/acervo">
              Ver todo o acervo <ArrowRight />
            </Link>
          </Button>
        </div>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {destaques.map((item, i) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: i * 0.08 }}
            >
              <Card className="group h-full overflow-hidden pt-0 transition-shadow hover:shadow-terra">
                <div className="aspect-[4/3] overflow-hidden">
                  <img
                    src={item.imagem}
                    alt={item.titulo}
                    loading="lazy"
                    width={1200}
                    height={900}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <CardContent className="space-y-2">
                  <Badge variant="secondary">{item.categoria}</Badge>
                  <h3 className="font-display text-lg leading-snug font-bold">{item.titulo}</h3>
                  <p className="line-clamp-2 text-sm text-muted-foreground">{item.resumo}</p>
                  <Button asChild variant="link" className="h-auto px-0 text-laranja-queimado">
                    <Link to="/acervo/$itemId" params={{ itemId: item.id }}>
                      Ver detalhes <ArrowRight />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Eventos + Blog */}
      <section className="bg-muted/60 pattern-adire">
        <div className="mx-auto grid max-w-7xl gap-12 px-4 py-20 lg:grid-cols-2">
          <div>
            <SectionHeading eyebrow="Agenda" title="Próximos eventos" />
            <div className="mt-8 space-y-4">
              {proximos.map((e) => (
                <Card key={e.id} className="border-l-4 border-l-primary">
                  <CardContent className="space-y-1">
                    <p className="flex items-center gap-2 text-sm font-semibold text-laranja-queimado">
                      <CalendarDays className="size-4" /> {e.data}
                    </p>
                    <h3 className="font-display text-lg font-bold">{e.titulo}</h3>
                    <p className="text-sm text-muted-foreground">{e.descricao}</p>
                    <p className="flex items-center gap-2 text-xs text-muted-foreground">
                      <MapPin className="size-3.5" /> {e.local} · {e.modalidade}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
            <Button asChild variant="contorno" className="mt-6">
              <Link to="/eventos">Calendário completo</Link>
            </Button>
          </div>

          <div>
            <SectionHeading eyebrow="Blog" title="Últimas do museu" />
            <div className="mt-8 space-y-4">
              {posts.slice(0, 3).map((p) => (
                <Link key={p.slug} to="/blog/$slug" params={{ slug: p.slug }} className="block">
                  <Card className="overflow-hidden transition-shadow hover:shadow-terra">
                    <CardContent className="grid grid-cols-[6rem_minmax(0,1fr)] gap-4">
                      <img
                        src={p.imagem}
                        alt={p.titulo}
                        loading="lazy"
                        className="h-24 w-24 rounded-md object-cover"
                      />
                      <div className="min-w-0">
                        <p className="text-xs text-muted-foreground">
                          {p.data} · {p.categoria}
                        </p>
                        <h3 className="mt-1 font-display text-base leading-snug font-bold">
                          {p.titulo}
                        </h3>
                        <p className="mt-1 line-clamp-2 text-sm text-muted-foreground">
                          {p.resumo}
                        </p>
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              ))}
            </div>
            <Button asChild variant="contorno" className="mt-6">
              <Link to="/blog">Ler o blog</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* CTA tour */}
      <section className="mx-auto max-w-7xl px-4 py-20">
        <div className="overflow-hidden rounded-3xl bg-gradient-terra p-8 shadow-terra sm:p-14">
          <div className="max-w-2xl">
            <h2 className="font-display text-3xl font-bold text-balance sm:text-4xl">
              Entre no terreiro sem sair de casa
            </h2>
            <p className="mt-3 text-foreground/80">
              O tour virtual 360° leva você aos espaços da comunidade com hotspots que abrem
              depoimentos, fotografias e itens do acervo.
            </p>
            <Button asChild size="lg" variant="terra" className="mt-6">
              <Link to="/tour">
                <Compass /> Iniciar tour agora
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}

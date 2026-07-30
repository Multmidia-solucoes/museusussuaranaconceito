import { createFileRoute } from "@tanstack/react-router";
import { motion } from "motion/react";
import { Heart, Eye, Sparkles, MapPin } from "lucide-react";
import { PageHeader, SectionHeading } from "@/components/site/Section";
import { Card, CardContent } from "@/components/ui/card";
import { comunidade, panorama, festa } from "@/data/museu";

export const Route = createFileRoute("/sobre")({
  head: () => ({
    meta: [
      { title: "Sobre o Museu | Quilombo Sussuarana, Piripiri-PI" },
      {
        name: "description",
        content:
          "História da Comunidade Quilombola Sussuarana e do Museu Virtual Jorge Pereira da Cunha: missão, valores e linha do tempo.",
      },
      { property: "og:title", content: "Sobre o Museu Virtual Quilombola Sussuarana" },
      {
        property: "og:description",
        content: "Memória, território e resistência quilombola no Piauí.",
      },
    ],
  }),
  component: SobrePage,
});

const timeline = [
  { ano: "1873", texto: "Chegada das primeiras famílias negras livres ao território de Sussuarana." },
  { ano: "1940", texto: "Construção da casa de farinha coletiva, centro do trabalho comunitário." },
  { ano: "1988", texto: "Constituição Federal reconhece o direito das comunidades quilombolas." },
  { ano: "2006", texto: "Certificação da comunidade pela Fundação Cultural Palmares." },
  { ano: "2019", texto: "Criação do centro de memória em homenagem a Jorge Pereira da Cunha." },
  { ano: "2026", texto: "Lançamento do museu virtual com tour 360° e inventário digital." },
];

const valores = [
  {
    icone: Heart,
    titulo: "Missão",
    texto:
      "Preservar, documentar e difundir a memória, os saberes e a luta da Comunidade Quilombola Sussuarana, com protagonismo comunitário.",
  },
  {
    icone: Eye,
    titulo: "Visão",
    texto:
      "Ser referência no Piauí em museologia social digital, apoiando escolas, pesquisadores e outras comunidades quilombolas.",
  },
  {
    icone: Sparkles,
    titulo: "Valores",
    texto:
      "Ancestralidade, escuta, trabalho coletivo, acesso livre ao conhecimento e enfrentamento ao racismo.",
  },
];

function SobrePage() {
  return (
    <>
      <PageHeader
        eyebrow="Quem somos"
        title="Sobre o Museu"
        description="O Museu Virtual Quilombola Jorge Pereira da Cunha nasce do desejo da Comunidade Sussuarana de contar a própria história — com suas mãos, suas vozes e seu tempo."
      />

      <section className="mx-auto max-w-7xl space-y-16 px-4 py-16">
        <div className="grid items-center gap-10 lg:grid-cols-2">
          <img
            src={comunidade}
            alt="Mestra tecelã trabalhando a palha de carnaúba"
            loading="lazy"
            className="rounded-2xl shadow-terra"
          />
          <div>
            <SectionHeading eyebrow="Território" title="A comunidade Sussuarana" />
            <p className="mt-4 leading-relaxed text-muted-foreground">
              Situada na zona rural de Piripiri, no norte do Piauí, a comunidade se formou a partir
              de famílias negras que ocuparam o território ainda no século XIX. A vida se organiza
              em torno do terreiro central, da roça, da casa de farinha e das festas de agosto.
            </p>
            <p className="mt-4 leading-relaxed text-muted-foreground">
              Jorge Pereira da Cunha, lavrador e contador de histórias, guardou por décadas a
              memória oral do território. O museu leva seu nome como compromisso com a continuidade
              desse trabalho.
            </p>
          </div>
        </div>

        <div className="grid items-center gap-10 lg:grid-cols-2">
          <div className="lg:order-2">
            <img
              src={festa}
              alt="Festa comunitária com tambores"
              loading="lazy"
              className="rounded-2xl shadow-terra"
            />
          </div>
          <div className="lg:order-1">
            <SectionHeading eyebrow="Museologia social" title="Um museu feito de escuta" />
            <p className="mt-4 leading-relaxed text-muted-foreground">
              Não há vitrines aqui: o acervo permanece com as famílias guardiãs. O que digitalizamos
              são registros, fotografias e depoimentos — sempre com autorização e curadoria
              comunitária.
            </p>
            <p className="mt-4 leading-relaxed text-muted-foreground">
              O museu também é ferramenta pedagógica, apoiando o cumprimento da Lei 10.639/03 nas
              escolas do município.
            </p>
          </div>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {valores.map((v) => (
            <Card key={v.titulo} className="border-t-4 border-t-primary">
              <CardContent>
                <v.icone className="size-8 text-laranja-queimado" />
                <h3 className="mt-3 font-display text-xl font-bold">{v.titulo}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{v.texto}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div>
          <SectionHeading eyebrow="Linha do tempo" title="Marcos da comunidade" align="center" />
          <ol className="relative mt-10 border-l-2 border-primary/40 pl-6">
            {timeline.map((t, i) => (
              <motion.li
                key={t.ano}
                initial={{ opacity: 0, x: -12 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.05 }}
                className="mb-8 last:mb-0"
              >
                <span className="absolute -left-[11px] mt-1.5 grid size-5 place-items-center rounded-full bg-gradient-terra" />
                <p className="font-display text-xl font-bold text-secondary">{t.ano}</p>
                <p className="mt-1 text-muted-foreground">{t.texto}</p>
              </motion.li>
            ))}
          </ol>
        </div>

        <div className="grid gap-8 lg:grid-cols-2">
          <div>
            <SectionHeading eyebrow="Onde estamos" title="Localização" />
            <p className="mt-4 flex items-start gap-2 text-muted-foreground">
              <MapPin className="mt-1 size-5 shrink-0 text-laranja-queimado" />
              Comunidade Quilombola Sussuarana, zona rural de Piripiri — Piauí, Brasil. Visitas
              presenciais mediante agendamento com a associação comunitária.
            </p>
            <img
              src={panorama}
              alt="Vista panorâmica do território"
              loading="lazy"
              className="mt-6 rounded-2xl shadow-terra"
            />
          </div>
          <div className="overflow-hidden rounded-2xl border border-border shadow-terra">
            <iframe
              title="Mapa de Piripiri, Piauí"
              src="https://www.openstreetmap.org/export/embed.html?bbox=-41.85%2C-4.35%2C-41.68%2C-4.22&layer=mapnik"
              className="h-full min-h-[400px] w-full"
              loading="lazy"
            />
          </div>
        </div>
      </section>
    </>
  );
}

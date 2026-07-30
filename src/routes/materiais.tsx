import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Download, FileText, PlayCircle, GraduationCap } from "lucide-react";
import { PageHeader } from "@/components/site/Section";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { materiais } from "@/data/museu";
import { toast } from "sonner";

export const Route = createFileRoute("/materiais")({
  head: () => ({
    meta: [
      { title: "Materiais Educativos | Museu Virtual Quilombola" },
      {
        name: "description",
        content:
          "Cadernos pedagógicos, planos de aula e vídeos para trabalhar história e cultura afro-brasileira (Lei 10.639/03).",
      },
      { property: "og:title", content: "Materiais Educativos do Museu Quilombola" },
      {
        property: "og:description",
        content: "Recursos gratuitos para professores, estudantes e pesquisadores.",
      },
    ],
  }),
  component: MateriaisPage,
});

const publicos = [
  "Todos",
  "Ensino Fundamental",
  "Ensino Médio",
  "Formação de Professores",
  "Público Geral",
];

const icones = {
  PDF: FileText,
  Vídeo: PlayCircle,
  "Plano de aula": GraduationCap,
} as const;

function MateriaisPage() {
  const [publico, setPublico] = useState("Todos");
  const lista = materiais.filter((m) => publico === "Todos" || m.publico === publico);

  return (
    <>
      <PageHeader
        eyebrow="Educativo"
        title="Materiais Educativos"
        description="Recursos gratuitos produzidos com a comunidade para apoiar o ensino de história e cultura afro-brasileira, conforme a Lei 10.639/03."
      />

      <section className="mx-auto max-w-7xl px-4 py-14">
        <div className="flex flex-wrap gap-2">
          {publicos.map((p) => (
            <button
              key={p}
              onClick={() => setPublico(p)}
              className={
                "rounded-full border px-3 py-1.5 text-sm transition-colors " +
                (publico === p
                  ? "border-transparent bg-secondary text-secondary-foreground"
                  : "border-border bg-card hover:bg-accent/30")
              }
            >
              {p}
            </button>
          ))}
        </div>

        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {lista.map((m) => {
            const Icone = icones[m.tipo];
            return (
              <Card key={m.id} className="group h-full overflow-hidden pt-0">
                <div className="aspect-[4/3] overflow-hidden">
                  <img
                    src={m.imagem}
                    alt={m.titulo}
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <CardContent className="space-y-2">
                  <div className="flex flex-wrap items-center gap-2">
                    <Badge variant="secondary">
                      <Icone className="mr-1 size-3.5" />
                      {m.tipo}
                    </Badge>
                    <span className="text-xs text-muted-foreground">{m.publico}</span>
                  </div>
                  <h2 className="font-display text-base leading-snug font-bold">{m.titulo}</h2>
                  <p className="text-sm text-muted-foreground">{m.descricao}</p>
                  <Button
                    size="sm"
                    variant="hero"
                    className="mt-2"
                    onClick={() =>
                      toast.info("Material demonstrativo — o arquivo será disponibilizado em breve.")
                    }
                  >
                    <Download /> {m.tipo === "Vídeo" ? "Acessar" : "Baixar"}
                  </Button>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </section>
    </>
  );
}

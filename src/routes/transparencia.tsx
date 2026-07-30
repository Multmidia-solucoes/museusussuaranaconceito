import { createFileRoute } from "@tanstack/react-router";
import { FileDown } from "lucide-react";
import { PageHeader } from "@/components/site/Section";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

export const Route = createFileRoute("/transparencia")({
  head: () => ({
    meta: [
      { title: "Transparência | Museu Virtual Quilombola" },
      {
        name: "description",
        content:
          "Financiadores, parceiros, relatórios anuais, política de privacidade e termos de uso do museu.",
      },
      { property: "og:title", content: "Transparência — Museu Quilombola Sussuarana" },
      { property: "og:description", content: "Prestação de contas e políticas do projeto." },
    ],
  }),
  component: TransparenciaPage,
});

const parceiros = [
  "Associação Comunitária Quilombola Sussuarana",
  "Prefeitura de Piripiri — Secretaria de Cultura",
  "Universidade Federal do Piauí",
  "Fundação Cultural Palmares",
];

const relatorios = ["Relatório anual 2024", "Relatório anual 2025", "Plano de trabalho 2026"];

function TransparenciaPage() {
  return (
    <>
      <PageHeader
        eyebrow="Prestação de contas"
        title="Transparência"
        description="O museu é um bem coletivo. Aqui reunimos informações sobre o projeto, seus apoiadores, relatórios e políticas."
      />

      <section className="mx-auto max-w-5xl space-y-10 px-4 py-14">
        <Card>
          <CardContent>
            <h2 className="font-display text-2xl font-bold">Sobre o projeto</h2>
            <p className="mt-2 leading-relaxed text-muted-foreground">
              O Museu Virtual Quilombola Jorge Pereira da Cunha é um projeto de museologia social
              conduzido pela Associação Comunitária Quilombola Sussuarana, com apoio técnico de
              pesquisadores e financiamento público de editais culturais.
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardContent>
            <h2 className="font-display text-2xl font-bold">Financiadores e parceiros</h2>
            <ul className="mt-4 grid gap-3 sm:grid-cols-2">
              {parceiros.map((p) => (
                <li
                  key={p}
                  className="rounded-lg border border-border bg-muted/50 px-4 py-3 text-sm font-medium"
                >
                  {p}
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>

        <Card>
          <CardContent>
            <h2 className="font-display text-2xl font-bold">Relatórios anuais</h2>
            <div className="mt-4 space-y-3">
              {relatorios.map((r) => (
                <div
                  key={r}
                  className="grid grid-cols-[minmax(0,1fr)_auto] items-center gap-3 rounded-lg border border-border px-4 py-3"
                >
                  <span className="truncate text-sm font-medium">{r}</span>
                  <Button size="sm" variant="contorno">
                    <FileDown /> PDF
                  </Button>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <Card id="privacidade">
          <CardContent>
            <h2 className="font-display text-2xl font-bold">Política de privacidade</h2>
            <p className="mt-2 leading-relaxed text-muted-foreground">
              Coletamos apenas os dados necessários para responder mensagens e enviar a newsletter.
              Nenhuma informação é vendida ou compartilhada com terceiros. Imagens e depoimentos da
              comunidade são publicados somente com autorização expressa das pessoas retratadas.
            </p>
          </CardContent>
        </Card>

        <Card id="termos">
          <CardContent>
            <h2 className="font-display text-2xl font-bold">Termos de uso</h2>
            <p className="mt-2 leading-relaxed text-muted-foreground">
              O conteúdo do acervo pode ser usado para fins educativos e de pesquisa, com citação da
              fonte e do nome da comunidade. Usos comerciais dependem de autorização prévia da
              associação comunitária.
            </p>
          </CardContent>
        </Card>
      </section>
    </>
  );
}

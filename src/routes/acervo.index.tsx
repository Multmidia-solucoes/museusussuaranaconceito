import { createFileRoute, Link } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { motion } from "motion/react";
import { Search, ArrowRight } from "lucide-react";
import { PageHeader } from "@/components/site/Section";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { acervo, categorias } from "@/data/museu";

export const Route = createFileRoute("/acervo/")({
  head: () => ({
    meta: [
      { title: "Acervo Digital | Museu Virtual Quilombola Sussuarana" },
      {
        name: "description",
        content:
          "Inventário digital do acervo quilombola: objetos, fotografias e memória oral com filtros por categoria e busca.",
      },
      { property: "og:title", content: "Acervo Digital do Museu Quilombola Sussuarana" },
      {
        property: "og:description",
        content: "Explore o inventário digital com filtros, busca e fichas detalhadas.",
      },
    ],
  }),
  component: AcervoPage,
});

function AcervoPage() {
  const [busca, setBusca] = useState("");
  const [categoria, setCategoria] = useState<string>("Todos");
  const [ordem, setOrdem] = useState("recentes");

  const itens = useMemo(() => {
    const filtrados = acervo.filter(
      (i) =>
        (categoria === "Todos" || i.categoria === categoria) &&
        (i.titulo.toLowerCase().includes(busca.toLowerCase()) ||
          i.resumo.toLowerCase().includes(busca.toLowerCase())),
    );
    return [...filtrados].sort((a, b) =>
      ordem === "nome"
        ? a.titulo.localeCompare(b.titulo, "pt-BR")
        : ordem === "antigos"
          ? a.data.localeCompare(b.data)
          : b.data.localeCompare(a.data),
    );
  }, [busca, categoria, ordem]);

  return (
    <>
      <PageHeader
        eyebrow={`${acervo.length} registros catalogados`}
        title="Acervo Digital"
        description="Cada ficha nasce da escuta da comunidade: objeto, história, contexto e a família que guarda a memória."
      />

      <section className="mx-auto max-w-7xl px-4 py-10">
        <div className="grid gap-3 rounded-2xl border border-border bg-card p-4 md:grid-cols-[minmax(0,1fr)_12rem_12rem]">
          <div className="relative">
            <Search className="absolute top-1/2 left-3 size-4 -translate-y-1/2 text-muted-foreground" />
            <Input
              value={busca}
              onChange={(e) => setBusca(e.target.value)}
              placeholder="Buscar por título ou descrição..."
              aria-label="Buscar no acervo"
              className="pl-9"
            />
          </div>
          <Select value={categoria} onValueChange={setCategoria}>
            <SelectTrigger aria-label="Filtrar por categoria">
              <SelectValue placeholder="Categoria" />
            </SelectTrigger>
            <SelectContent>
              {categorias.map((c) => (
                <SelectItem key={c} value={c}>
                  {c}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
          <Select value={ordem} onValueChange={setOrdem}>
            <SelectTrigger aria-label="Ordenar">
              <SelectValue placeholder="Ordenar" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="recentes">Mais recentes</SelectItem>
              <SelectItem value="antigos">Mais antigos</SelectItem>
              <SelectItem value="nome">Nome (A–Z)</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className="mt-4 flex flex-wrap gap-2">
          {categorias.map((c) => (
            <button
              key={c}
              onClick={() => setCategoria(c)}
              className={
                "rounded-full border px-3 py-1.5 text-sm transition-colors " +
                (categoria === c
                  ? "border-transparent bg-secondary text-secondary-foreground"
                  : "border-border bg-card hover:bg-accent/30")
              }
            >
              {c}
            </button>
          ))}
        </div>

        <p className="mt-6 text-sm text-muted-foreground">
          {itens.length} {itens.length === 1 ? "item encontrado" : "itens encontrados"}
        </p>

        <div className="mt-4 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {itens.map((item, i) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.35, delay: Math.min(i * 0.05, 0.3) }}
            >
              <Card className="group h-full overflow-hidden pt-0 transition-shadow hover:shadow-terra">
                <div className="aspect-[4/3] overflow-hidden">
                  <img
                    src={item.imagem}
                    alt={item.titulo}
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <CardContent className="space-y-2">
                  <div className="flex flex-wrap items-center gap-2">
                    <Badge variant="secondary">{item.categoria}</Badge>
                    <span className="text-xs text-muted-foreground">{item.data}</span>
                  </div>
                  <h2 className="font-display text-lg leading-snug font-bold">{item.titulo}</h2>
                  <p className="line-clamp-2 text-sm text-muted-foreground">{item.resumo}</p>
                  <Button asChild variant="hero" size="sm" className="mt-2">
                    <Link to="/acervo/$itemId" params={{ itemId: item.id }}>
                      Ver mais <ArrowRight />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {itens.length === 0 && (
          <p className="py-16 text-center text-muted-foreground">
            Nenhum item encontrado com esses filtros.
          </p>
        )}
      </section>
    </>
  );
}

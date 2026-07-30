import { createFileRoute } from "@tanstack/react-router";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Mail, Instagram, Youtube, Facebook, Loader2 } from "lucide-react";
import { PageHeader } from "@/components/site/Section";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { toast } from "sonner";

export const Route = createFileRoute("/contato")({
  head: () => ({
    meta: [
      { title: "Contato | Museu Virtual Quilombola Sussuarana" },
      {
        name: "description",
        content:
          "Fale com o Museu Virtual Quilombola Jorge Pereira da Cunha: agendamentos, pesquisa, parcerias e imprensa.",
      },
      { property: "og:title", content: "Contato — Museu Quilombola Sussuarana" },
      { property: "og:description", content: "Envie sua mensagem para a equipe do museu." },
    ],
  }),
  component: ContatoPage,
});

const schema = z.object({
  nome: z.string().min(3, "Informe seu nome completo."),
  email: z.string().email("Informe um e-mail válido."),
  assunto: z.string().min(3, "Informe o assunto."),
  mensagem: z.string().min(10, "Escreva ao menos 10 caracteres."),
});

type FormData = z.infer<typeof schema>;

function ContatoPage() {
  const form = useForm<FormData>({
    resolver: zodResolver(schema),
    defaultValues: { nome: "", email: "", assunto: "", mensagem: "" },
  });

  const onSubmit = async (data: FormData) => {
    await new Promise((r) => setTimeout(r, 700));
    toast.success(`Obrigado, ${data.nome.split(" ")[0]}! Sua mensagem foi enviada.`);
    form.reset();
  };

  return (
    <>
      <PageHeader
        eyebrow="Fale conosco"
        title="Contato"
        description="Agendamento de visitas, pesquisa acadêmica, parcerias, imprensa ou apenas para dizer olá — a comunidade responde."
      />

      <section className="mx-auto grid max-w-6xl gap-10 px-4 py-14 lg:grid-cols-[minmax(0,3fr)_minmax(0,2fr)]">
        <Card>
          <CardContent>
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-5">
                <FormField
                  control={form.control}
                  name="nome"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Nome</FormLabel>
                      <FormControl>
                        <Input placeholder="Seu nome completo" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>E-mail</FormLabel>
                      <FormControl>
                        <Input type="email" placeholder="seu@email.com" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="assunto"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Assunto</FormLabel>
                      <FormControl>
                        <Input placeholder="Sobre o que deseja falar?" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="mensagem"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Mensagem</FormLabel>
                      <FormControl>
                        <Textarea rows={6} placeholder="Escreva sua mensagem..." {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <Button
                  type="submit"
                  variant="hero"
                  size="lg"
                  disabled={form.formState.isSubmitting}
                >
                  {form.formState.isSubmitting && <Loader2 className="animate-spin" />}
                  Enviar mensagem
                </Button>
              </form>
            </Form>
          </CardContent>
        </Card>

        <div className="space-y-6">
          <Card className="bg-muted/60">
            <CardContent className="space-y-3">
              <h2 className="font-display text-xl font-bold">Informações</h2>
              <p className="flex items-center gap-2 text-sm text-muted-foreground">
                <Mail className="size-4 text-laranja-queimado" /> contato@museuquilombola.org.br
              </p>
              <p className="text-sm text-muted-foreground">
                Comunidade Quilombola Sussuarana, zona rural de Piripiri — PI. Visitas presenciais
                mediante agendamento.
              </p>
              <div className="flex gap-3 pt-2">
                <a href="#" aria-label="Instagram" className="text-secondary hover:text-laranja-queimado">
                  <Instagram />
                </a>
                <a href="#" aria-label="YouTube" className="text-secondary hover:text-laranja-queimado">
                  <Youtube />
                </a>
                <a href="#" aria-label="Facebook" className="text-secondary hover:text-laranja-queimado">
                  <Facebook />
                </a>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent>
              <h2 className="font-display text-xl font-bold">Newsletter</h2>
              <p className="mt-2 text-sm text-muted-foreground">
                Receba novidades do acervo e da agenda comunitária.
              </p>
              <form
                className="mt-4 flex flex-col gap-2 sm:flex-row"
                onSubmit={(e) => {
                  e.preventDefault();
                  e.currentTarget.reset();
                  toast.success("Inscrição realizada!");
                }}
              >
                <Input type="email" required aria-label="E-mail para newsletter" placeholder="seu@email.com" />
                <Button type="submit" variant="terra">
                  Inscrever-se
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </section>
    </>
  );
}

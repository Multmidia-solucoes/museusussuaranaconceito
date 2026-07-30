import { Link } from "@tanstack/react-router";
import { Instagram, Youtube, Facebook, Mail, MapPin } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";

export function Footer() {
  return (
    <footer className="mt-24 bg-foreground text-background">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-14 md:grid-cols-2 lg:grid-cols-4">
        <div>
          <h3 className="font-display text-xl font-bold text-primary">
            Museu Virtual Quilombola Jorge Pereira da Cunha
          </h3>
          <p className="mt-3 text-sm leading-relaxed text-background/70">
            Museu digital e centro de memória da Comunidade Quilombola Sussuarana, em Piripiri,
            Piauí. Memória, território e resistência.
          </p>
          <p className="mt-4 flex items-start gap-2 text-sm text-background/70">
            <MapPin className="mt-0.5 size-4 shrink-0 text-primary" />
            Comunidade Sussuarana, zona rural de Piripiri — PI
          </p>
        </div>

        <nav className="text-sm">
          <h4 className="mb-3 font-display text-base font-semibold text-primary">Navegação</h4>
          <ul className="space-y-2 text-background/75">
            <li>
              <Link to="/sobre">Sobre o museu</Link>
            </li>
            <li>
              <Link to="/acervo">Acervo digital</Link>
            </li>
            <li>
              <Link to="/tour">Tour virtual 360°</Link>
            </li>
            <li>
              <Link to="/roteiros">Roteiros do circuito</Link>
            </li>
            <li>
              <Link to="/materiais">Materiais educativos</Link>
            </li>
          </ul>
        </nav>

        <nav className="text-sm">
          <h4 className="mb-3 font-display text-base font-semibold text-primary">Institucional</h4>
          <ul className="space-y-2 text-background/75">
            <li>
              <Link to="/transparencia">Transparência</Link>
            </li>
            <li>
              <Link to="/transparencia" hash="privacidade">
                Política de privacidade
              </Link>
            </li>
            <li>
              <Link to="/transparencia" hash="termos">
                Termos de uso
              </Link>
            </li>
            <li>
              <Link to="/contato">Contato</Link>
            </li>
          </ul>
          <div className="mt-4 flex gap-3">
            <a href="#" aria-label="Instagram" className="text-primary hover:text-accent">
              <Instagram className="size-5" />
            </a>
            <a href="#" aria-label="YouTube" className="text-primary hover:text-accent">
              <Youtube className="size-5" />
            </a>
            <a href="#" aria-label="Facebook" className="text-primary hover:text-accent">
              <Facebook className="size-5" />
            </a>
            <a
              href="mailto:contato@museuquilombola.org.br"
              aria-label="E-mail"
              className="text-primary hover:text-accent"
            >
              <Mail className="size-5" />
            </a>
          </div>
        </nav>

        <div>
          <h4 className="mb-3 font-display text-base font-semibold text-primary">Newsletter</h4>
          <p className="text-sm text-background/70">
            Receba novidades do acervo, eventos e materiais educativos.
          </p>
          <form
            className="mt-4 flex flex-col gap-2 sm:flex-row"
            onSubmit={(e) => {
              e.preventDefault();
              const form = e.currentTarget;
              toast.success("Inscrição registrada! Obrigado por caminhar com o museu.");
              form.reset();
            }}
          >
            <Input
              type="email"
              required
              name="email"
              aria-label="Seu e-mail"
              placeholder="seu@email.com"
              className="border-background/25 bg-background/10 text-background placeholder:text-background/50"
            />
            <Button type="submit" variant="hero">
              Inscrever-se
            </Button>
          </form>
        </div>
      </div>

      <div className="border-t border-background/15">
        <p className="mx-auto max-w-7xl px-4 py-5 text-xs text-background/55">
          © {new Date().getFullYear()} Museu Virtual Quilombola Jorge Pereira da Cunha · Conteúdo
          produzido pela Comunidade Quilombola Sussuarana. Dados demonstrativos.
        </p>
      </div>
    </footer>
  );
}

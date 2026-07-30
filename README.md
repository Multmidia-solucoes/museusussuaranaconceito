# Museu Quilombola Jorge P Cunha (conceito)

**1. Contexto e Objetivo:**

Desenvolver um site moderno, responsivo e imersivo para o **Museu Virtual Quilombola Jorge Pereira da Cunha**, localizada em Piripiri - PI. A plataforma deve funcionar como museu digital, centro de memória e portal de comunicação, priorizando a experiência do **tour virtual 360°** e a acessibilidade do **inventário digital do acervo**. O design deve transmitir acolhimento, identidade cultural e história vibrante.

**2. Público-Alvo:**

Pesquisadores, estudantes, turistas, membros da comunidade quilombola, professores (atendendo à Lei 10.639/03) e público em geral interessado em história e cultura afro-brasileira.

---

**3. Paleta de Cores (Obrigatória):**

- **Cores Primárias:** Laranja claro (#FFB347 ou similar), Amarelo (#FFD700 ou #F5C518), Preto (#1A1A1A), Marrom (#8B4513 ou #A0522D).

- **Cores Análogas:** Utilize tons como terracota (#E07A5F), ocre (#C28B3E), caramelo (#D4A373), amarelo-queimado (#DAA520), laranja-queimado (#CC5500), bege (#F5E6D3) e cinza-escuro (#2D2D2D) para criar harmonia, profundidade, destaque de elementos interativos e acessibilidade de contraste.

**4. Tecnologias e Framework (Lovable):**

- **Frontend:** React com TypeScript.

- **Estilização:** Tailwind CSS com temas personalizados.

- **Componentes UI:** Shadcn/ui para componentes acessíveis e modernos.

- **Animações:** Framer Motion para transições suaves e microinterações.

- **Roteamento:** React Router DOM para navegação entre páginas.

- **Formulários:** React Hook Form com Zod para validação.

- **Ícones:** Lucide React ou React Icons.

- **Tour Virtual 360°:** Integração com componente baseado em Three.js ou biblioteca de visualização 360° (ex: Pannellum, Marzipano) ou iframe do Matterport.

---

**5. Estrutura de Páginas e Componentes:**

**Layout Base (Root Layout):**

- **Header:** Logo (texto ou SVG), menu de navegação principal (responsive com hambúrguer para mobile), barra de busca (opcional), botão de acesso rápido ao Tour Virtual.

- **Footer:** Informações institucionais, links para redes sociais, newsletter (campo de e-mail + botão), créditos, política de privacidade.

---

**Página Principal (Home):**

- **Hero Section:** Banner com imagem panorâmica da comunidade ou acervo em destaque, sobreposição com gradiente suave, título principal, subtítulo e **CTA principal** ("Iniciar Tour Virtual 360°") estilizado com cor laranja claro.

- **Seção "Acervo em Destaque":** Cards horizontais com 3-4 itens do acervo (imagem, título, categoria, botão "Ver Detalhes").

- **Seção "Próximos Eventos":** Lista com 2-3 eventos (data, título, descrição resumida).

- **Seção "Últimas do Blog":** Prévia das 2-3 últimas postagens.

- **Seção "Números do Museu":** Contadores animados (ex: itens no acervo, visitantes virtuais, eventos realizados).

---

**Página "Sobre o Museu":**

- História da comunidade e do museu (texto com imagens alternadas).

- Missão, visão e valores em cards.

- Linha do tempo interativa da comunidade Sussuarana.

- Mapa de localização (integração com Leaflet ou Google Maps).

---

**Página "Acervo Digital" (Inventário):**

- **Cabeçalho:** Título, descrição, contador total de itens.

- **Barra de Filtros:** Filtros por categoria (dropdown ou pills), busca por texto (input), ordenação (data, nome).

- **Grid de Cards:** Exibição em grid responsivo (2-3 colunas em desktop, 1-2 em mobile), cada card com imagem, título, categoria, data e botão "Ver Mais".

- **Página de Detalhe do Item:** Modal ou página dedicada com imagem ampliada, descrição completa, contexto histórico, dados técnicos, botões de compartilhamento.

---

**Página "Tour Virtual 360°":**

- **Player 360° em tela cheia ou quase cheia:** Visualizador panorâmico com navegação por arraste e zoom.

- **Hotspots interativos:** Pontos clicáveis no tour que exibem cards com informações sobre o local, áudio descritivo ou link para item do acervo relacionado.

- **Menu de navegação do tour:** Lista de ambientes/pontos de interesse para salto rápido.

- **Instruções:** Texto curto sobre como navegar (para usuários menos experientes).

---

**Página "Roteiro do Circuito":**

- Apresentação de 3-4 roteiros temáticos (ex: "Roteiro da Memória", "Roteiro da Resistência", "Roteiro da Cultura Material").

- Cada roteiro com: imagem de capa, descrição, duração estimada, pontos inclusos e botão "Iniciar Tour neste Roteiro" (link para o tour já posicionado).

---

**Página "Calendário de Eventos":**

- Visualização em lista ou grade mensal.

- Cards de evento com: data, título, descrição, local (virtual/presencial), link para inscrição ou mais informações.

- Eventos passados com rótulo "Encerrado" e link para galeria de fotos do evento.

---

**Página "Materiais Educativos":**

- Grid de cards com recursos (PDF, vídeo, plano de aula).

- Cada card com: imagem ilustrativa, título, tipo de recurso, faixa etária indicada, botão de download ou "Acessar".

- Categorias: Ensino Fundamental, Ensino Médio, Formação de Professores, Público Geral.

---

**Página "Galeria de Fotos e Vídeos":**

- **Grid em mosaico** com imagens da comunidade, eventos, acervo.

- **Lightbox:** Ao clicar na imagem, abrir em visualização ampliada com navegação.

- **Seção de Vídeos:** Grid ou lista com thumbnails de vídeos (YouTube/Vimeo embed).

- Filtros por categoria (eventos, cotidiano, acervo, depoimentos).

---

**Página "Transparência":**

- Seções: Sobre o Projeto, Financiadores e Parceiros (com logos), Política de Privacidade, Termos de Uso, Relatórios Anuais (download em PDF).

- Cards ou listas organizadas.

---

**Página "Contato":**

- **Formulário de Contato:** Campos: Nome, E-mail, Assunto, Mensagem. Validação com React Hook Form + Zod.

- **Informações adicionais:** E-mail institucional, links para redes sociais (Instagram, YouTube, Facebook).

- **Newsletter:** Campo de e-mail com botão "Inscrever-se" (integrado com serviço de e-mail marketing).

---

**Blog:**

- Página principal com listagem de posts (título, data, resumo, imagem, categorias).

- Página de detalhe do post com conteúdo completo, autor, data, tags e links para posts relacionados.

- Categorias: Eventos, Novidades do Acervo, Vida na Comunidade, Parcerias, Educação.

- Sidebar com posts recentes, categorias populares, arquivo por mês.

---

**6. Requisitos de Design e UX:**

- **Responsividade:** Mobile-first, adaptação para tablets e desktops com Tailwind breakpoints (sm, md, lg, xl).

- **Tipografia:** Fonte principal (ex: Montserrat ou Inter) para títulos e corpo; fonte secundária com personalidade (ex: Georgia ou Playfair Display) para citações e elementos históricos.

- **Espaçamento:** Uso consistente de padding/margin (Tailwind spacing).

- **Contraste:** Garantir acessibilidade WCAG (ex: texto preto sobre fundo claro, texto branco sobre fundo escuro/marrom).

- **Microinterações:** Hover effects, transições suaves (Framer Motion), botões com feedback visual.

- **Loading States:** Skeletons ou spinners para carregamento de conteúdo assíncrono.

---

**7. Requisitos Técnicos Específicos para Lovable:**

- Utilizar a estrutura de páginas do React Router.

- Componentes reutilizáveis (ex: Card, Button, Input, Modal, Navbar, Footer) com Shadcn/ui.

- Gerenciamento de estado com useState/useEffect ou Context API para dados do acervo e eventos.

- Dados mockados em arquivos JSON (para acervo, eventos, posts) que possam ser facilmente substituídos por API futura.

- Integração com o componente de Tour Virtual via iframe ou wrapper React.

- Otimização de imagens com lazy loading e formatos modernos (WebP).

- Deploy via Lovable com variáveis de ambiente para integrações.

---

**8. Entregáveis Esperados:**

- Código-fonte completo e funcional.

- Estrutura de pastas organizada (src/components, src/pages, src/assets, src/hooks, src/utils, src/data).

- Responsividade testada.

- Design consistente com a paleta de cores definida.

- Páginas principais (mínimo: Home, Sobre, Acervo, Tour 360°, Blog, Contato) navegáveis.

---

**9. Observações Finais:**

- O site deve transmitir **calor humano**, **acolhimento** e **orgulho cultural**, utilizando as cores laranja claro e amarelo para energia e otimismo, e marrom/preto para enraizamento e seriedade.

- Priorizar a **imersão** do usuário no tour virtual e a **facilidade de navegação** no acervo.

- Manter uma linguagem visual limpa, mas com toques de textura ou padrões inspirados na cultura quilombola (opcional, via SVG ou CSS).

---

Desenvolva um site responsivo para o Museu Virtual da Comunidade Quilombola Sussuarana (Piripiri-PI) usando React, TypeScript, Tailwind CSS, Shadcn/ui e Framer Motion. O site deve ter páginas: Home, Sobre, Acervo Digital, Tour Virtual 360°, Roteiro do Circuito, Calendário de Eventos, Materiais Educativos, Galeria, Transparência, Contato e Blog. Utilize as cores: laranja claro (#FFB347), amarelo (#FFD700), preto (#1A1A1A), marrom (#8B4513) e análogas (terracota, ocre, caramelo, bege, cinza-escuro). Priorize o tour virtual 360° e o inventário digital com filtros. O design deve ser mobile-first, acessível, com microinterações e dados mockados. A navegação deve ser clara e o header deve ter acesso rápido ao tour. Use componentes Shadcn/ui para cards, botões, inputs e modais. Estruture o código com pastas organizadas e componentes reutilizáveis.

```

This project was built with [Lovable](https://lovable.dev).

**Live app**: https://museusussuaranaconceito.lovable.app

## Build with Lovable

Continue developing this project in the [Lovable editor](https://lovable.dev/projects/90d71061-03d6-4eb8-b80d-5da0dc5dc0b3).

- **Ship faster**: describe what you want to build and Lovable handles the code.
- **Stay in sync**: every change made in Lovable is committed straight to this repository.
- **Full ownership**: this code is yours. Push to `main` on GitHub and your changes sync back into Lovable, ready for your next prompt.

## Development

Prefer working locally? You need Node.js and npm — [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating).

```sh
git clone <this-repository-url>
cd <repository-name>
npm i
npm run dev
```

import ceramica from "@/assets/acervo-ceramica.jpg";
import tambor from "@/assets/acervo-tambor.jpg";
import cestaria from "@/assets/acervo-cestaria.jpg";
import festa from "@/assets/galeria-festa.jpg";
import comunidade from "@/assets/hero-comunidade.jpg";
import panorama from "@/assets/panorama-terreiro.jpg";

export { ceramica, tambor, cestaria, festa, comunidade, panorama };

export type ItemAcervo = {
  id: string;
  titulo: string;
  categoria: string;
  data: string;
  imagem: string;
  resumo: string;
  descricao: string;
  contexto: string;
  tecnica: string;
  dimensoes: string;
  doador: string;
};

export const categorias = [
  "Todos",
  "Cultura Material",
  "Instrumentos",
  "Trabalho e Roça",
  "Memória Oral",
] as const;

export const acervo: ItemAcervo[] = [
  {
    id: "panela-de-barro",
    titulo: "Panela de barro e pilão de madeira",
    categoria: "Cultura Material",
    data: "1958",
    imagem: ceramica,
    resumo: "Utensílios de cozinha usados por três gerações da família Pereira da Cunha.",
    descricao:
      "Conjunto formado por panela de barro queimada em fogueira de chão e pilão entalhado em madeira de aroeira. Peças centrais da cozinha coletiva da comunidade, usadas em festas de padroeiro e mutirões.",
    contexto:
      "A cerâmica de barro do território de Sussuarana é feita com argila retirada das margens do riacho, secada ao sol e queimada a céu aberto — técnica transmitida por mulheres mais velhas às netas.",
    tecnica: "Modelagem manual, queima a céu aberto; madeira entalhada",
    dimensoes: "32 × 28 cm (panela) / 41 cm (pilão)",
    doador: "Família Pereira da Cunha",
  },
  {
    id: "tambor-de-couro",
    titulo: "Tambor de couro e pandeiro de festa",
    categoria: "Instrumentos",
    data: "1971",
    imagem: tambor,
    resumo: "Instrumentos que acompanham o samba de roda e as rezas da comunidade.",
    descricao:
      "Tambor de tronco escavado com pele de bode presa por cordas de sisal, ao lado de pandeiro artesanal com platinelas de lata. Ainda são tocados nas festas de agosto.",
    contexto:
      "O toque do tambor marca o calendário quilombola: nascimento, colheita, despedida. Cada batida guarda um código de resistência herdado dos antepassados africanos.",
    tecnica: "Tronco escavado, couro curtido, amarração em sisal",
    dimensoes: "45 × 45 cm",
    doador: "Mestre Zé do Tambor",
  },
  {
    id: "cestaria-de-palha",
    titulo: "Peneira e balaio de palha de carnaúba",
    categoria: "Trabalho e Roça",
    data: "1984",
    imagem: cestaria,
    resumo: "Trançados usados na limpeza do arroz e no transporte da colheita.",
    descricao:
      "Peneira de talos finos e balaio de trama fechada, produzidos com palha de carnaúba colhida no período seco e trançada durante as noites de conversa no terreiro.",
    contexto:
      "A cestaria organiza o trabalho da roça e é também linguagem: cada tipo de trama identifica a família que a produziu.",
    tecnica: "Trançado manual em palha de carnaúba",
    dimensoes: "48 cm de diâmetro",
    doador: "Dona Raimunda da Conceição",
  },
  {
    id: "registro-festa-agosto",
    titulo: "Registro fotográfico da Festa de Agosto",
    categoria: "Memória Oral",
    data: "2019",
    imagem: festa,
    resumo: "Documentação da maior celebração do calendário comunitário.",
    descricao:
      "Série fotográfica que acompanha três dias de celebração: novena, cortejo, samba de roda e almoço coletivo no terreiro central.",
    contexto:
      "A Festa de Agosto reúne famílias que migraram para Teresina e São Paulo, reafirmando o vínculo com o território quilombola.",
    tecnica: "Fotografia digital documental",
    dimensoes: "Arquivo digital, 124 imagens",
    doador: "Coletivo de Jovens de Sussuarana",
  },
  {
    id: "retrato-mestra-tecela",
    titulo: "Retrato de mestra tecelã",
    categoria: "Memória Oral",
    data: "2021",
    imagem: comunidade,
    resumo: "Depoimento em vídeo e retrato de uma das guardiãs do saber da palha.",
    descricao:
      "Retrato acompanhado de depoimento de 42 minutos sobre a chegada das primeiras famílias ao território e o aprendizado do trançado.",
    contexto:
      "As mestras são a principal fonte documental do museu: o acervo nasce da escuta e não da coleta.",
    tecnica: "Fotografia e áudio documental",
    dimensoes: "Arquivo digital",
    doador: "Projeto Memória Viva",
  },
  {
    id: "terreiro-central",
    titulo: "Terreiro central da comunidade",
    categoria: "Cultura Material",
    data: "2022",
    imagem: panorama,
    resumo: "Panorâmica 360° do coração social do quilombo.",
    descricao:
      "Captura panorâmica do terreiro onde acontecem assembleias, festas e a roda de conversa dos mais velhos ao fim da tarde.",
    contexto:
      "O terreiro é o espaço político da comunidade: ali se decidem as pautas de território, saúde e educação.",
    tecnica: "Fotografia panorâmica equiretangular",
    dimensoes: "Arquivo digital 360°",
    doador: "Museu Virtual Quilombola",
  },
];

export type Evento = {
  id: string;
  titulo: string;
  data: string;
  dataISO: string;
  local: string;
  modalidade: "Presencial" | "Virtual" | "Híbrido";
  descricao: string;
  encerrado?: boolean;
};

export const eventos: Evento[] = [
  {
    id: "roda-memoria",
    titulo: "Roda de Memória com os Mais Velhos",
    data: "12 de setembro de 2026",
    dataISO: "2026-09-12",
    local: "Terreiro Central, Sussuarana — Piripiri/PI",
    modalidade: "Híbrido",
    descricao:
      "Encontro intergeracional com transmissão ao vivo: depoimentos sobre a formação do território e a luta pela titulação.",
  },
  {
    id: "oficina-cestaria",
    titulo: "Oficina de Cestaria em Palha de Carnaúba",
    data: "27 de setembro de 2026",
    dataISO: "2026-09-27",
    local: "Casa de Farinha Comunitária",
    modalidade: "Presencial",
    descricao:
      "Oficina prática conduzida por mestras tecelãs, com vagas gratuitas para estudantes da rede pública.",
  },
  {
    id: "seminario-1063903",
    titulo: "Seminário Lei 10.639/03 na Prática",
    data: "18 de outubro de 2026",
    dataISO: "2026-10-18",
    local: "Transmissão online",
    modalidade: "Virtual",
    descricao:
      "Formação para professores sobre uso do acervo digital em sala de aula, com certificação de 8 horas.",
  },
  {
    id: "festa-agosto-2026",
    titulo: "Festa de Agosto 2026",
    data: "08 a 10 de agosto de 2026",
    dataISO: "2026-08-08",
    local: "Comunidade Quilombola Sussuarana",
    modalidade: "Presencial",
    descricao: "Três dias de novena, cortejo, samba de roda e almoço coletivo.",
    encerrado: true,
  },
];

export type Post = {
  slug: string;
  titulo: string;
  data: string;
  autor: string;
  categoria: string;
  resumo: string;
  imagem: string;
  conteudo: string[];
  tags: string[];
};

export const posts: Post[] = [
  {
    slug: "novo-inventario-digital",
    titulo: "Museu conclui inventário digital de 320 peças do acervo",
    data: "22 de julho de 2026",
    autor: "Equipe de Documentação",
    categoria: "Novidades do Acervo",
    resumo:
      "Após dois anos de trabalho comunitário, o inventário do acervo material e imaterial está disponível online.",
    imagem: cestaria,
    conteudo: [
      "O inventário digital do Museu Virtual Quilombola Jorge Pereira da Cunha reúne agora 320 registros entre objetos, fotografias, gravações de depoimentos e cadernos de campo.",
      "Todo o processo foi conduzido por jovens da própria comunidade, formados em oficinas de documentação museológica, fotografia de acervo e escuta de memória oral.",
      "Cada ficha traz descrição, contexto histórico, dados técnicos e o nome da família guardiã da peça — princípio central do projeto: nada entra no acervo sem que a comunidade conte a sua história.",
    ],
    tags: ["acervo", "documentação", "memória"],
  },
  {
    slug: "tour-360-terreiro",
    titulo: "Tour 360° do terreiro central já pode ser visitado",
    data: "05 de julho de 2026",
    autor: "Coletivo de Jovens de Sussuarana",
    categoria: "Eventos",
    resumo:
      "A primeira etapa do tour virtual permite caminhar pelo terreiro e acessar hotspots com depoimentos.",
    imagem: panorama,
    conteudo: [
      "A captura panorâmica foi feita ao entardecer, horário em que o terreiro se enche de conversa e o sol acende as paredes de barro.",
      "Os hotspots interativos ligam pontos do espaço a itens do acervo digital e a trechos de depoimentos gravados com os mais velhos.",
      "Nas próximas etapas serão incluídos a casa de farinha, a capela e o caminho do riacho.",
    ],
    tags: ["tour virtual", "tecnologia", "território"],
  },
  {
    slug: "formacao-professores",
    titulo: "Formação de professores alcança 12 escolas de Piripiri",
    data: "18 de junho de 2026",
    autor: "Núcleo Educativo",
    categoria: "Educação",
    resumo:
      "Programa de formação continuada usa o acervo do museu como material didático para a Lei 10.639/03.",
    imagem: comunidade,
    conteudo: [
      "Doze escolas da rede municipal participaram da formação sobre história e cultura afro-brasileira a partir do acervo quilombola.",
      "Os planos de aula produzidos estão disponíveis gratuitamente na seção de Materiais Educativos.",
    ],
    tags: ["educação", "lei 10.639", "professores"],
  },
];

export type Roteiro = {
  id: string;
  titulo: string;
  duracao: string;
  descricao: string;
  pontos: string[];
  imagem: string;
};

export const roteiros: Roteiro[] = [
  {
    id: "memoria",
    titulo: "Roteiro da Memória",
    duracao: "18 minutos",
    descricao:
      "Um percurso pelas vozes dos mais velhos: da chegada das primeiras famílias à formação do território.",
    pontos: ["Terreiro central", "Casa da Mestra", "Árvore das conversas"],
    imagem: comunidade,
  },
  {
    id: "resistencia",
    titulo: "Roteiro da Resistência",
    duracao: "22 minutos",
    descricao:
      "A luta pela titulação do território, as assembleias comunitárias e as conquistas coletivas.",
    pontos: ["Assembleia no terreiro", "Marco do território", "Sede da associação"],
    imagem: panorama,
  },
  {
    id: "cultura-material",
    titulo: "Roteiro da Cultura Material",
    duracao: "15 minutos",
    descricao: "Barro, palha e madeira: os saberes das mãos que sustentam a vida no quilombo.",
    pontos: ["Casa de farinha", "Ateliê de cestaria", "Forno de barro"],
    imagem: cestaria,
  },
  {
    id: "festa",
    titulo: "Roteiro da Festa",
    duracao: "12 minutos",
    descricao: "Tambor, cortejo e samba de roda: o calendário festivo que reúne a comunidade.",
    pontos: ["Capela", "Terreiro de dança", "Cozinha coletiva"],
    imagem: festa,
  },
];

export type Material = {
  id: string;
  titulo: string;
  tipo: "PDF" | "Vídeo" | "Plano de aula";
  publico: string;
  descricao: string;
  imagem: string;
};

export const materiais: Material[] = [
  {
    id: "caderno-fundamental",
    titulo: "Caderno Pedagógico: Quilombos do Piauí",
    tipo: "PDF",
    publico: "Ensino Fundamental",
    descricao: "Atividades ilustradas sobre território, oralidade e cultura material.",
    imagem: cestaria,
  },
  {
    id: "plano-aula-medio",
    titulo: "Plano de Aula: Resistência e Territorialidade",
    tipo: "Plano de aula",
    publico: "Ensino Médio",
    descricao: "Sequência didática de 4 aulas usando itens do acervo digital.",
    imagem: panorama,
  },
  {
    id: "video-formacao",
    titulo: "Vídeo-formação: Lei 10.639/03 na Prática",
    tipo: "Vídeo",
    publico: "Formação de Professores",
    descricao: "Aula gravada de 52 minutos com museólogos e lideranças quilombolas.",
    imagem: comunidade,
  },
  {
    id: "guia-visita",
    titulo: "Guia de Visita ao Museu Virtual",
    tipo: "PDF",
    publico: "Público Geral",
    descricao: "Passo a passo para explorar o tour 360° e o inventário digital.",
    imagem: festa,
  },
];

export type Foto = { id: string; titulo: string; categoria: string; imagem: string };

export const galeria: Foto[] = [
  { id: "g1", titulo: "Samba de roda na Festa de Agosto", categoria: "Eventos", imagem: festa },
  { id: "g2", titulo: "Mestra tecelã em seu ateliê", categoria: "Cotidiano", imagem: comunidade },
  { id: "g3", titulo: "Terreiro ao entardecer", categoria: "Cotidiano", imagem: panorama },
  { id: "g4", titulo: "Cerâmica de barro do acervo", categoria: "Acervo", imagem: ceramica },
  { id: "g5", titulo: "Tambores da comunidade", categoria: "Acervo", imagem: tambor },
  { id: "g6", titulo: "Peneiras de carnaúba", categoria: "Acervo", imagem: cestaria },
];

export const videos = [
  {
    id: "v1",
    titulo: "Depoimento: a chegada das primeiras famílias",
    duracao: "12:40",
    thumb: comunidade,
  },
  { id: "v2", titulo: "Festa de Agosto — documentário curto", duracao: "18:05", thumb: festa },
];

export type Hotspot = {
  id: string;
  titulo: string;
  texto: string;
  x: number; // 0-100 (% da largura do panorama)
  y: number; // 0-100 (% da altura)
  itemAcervo?: string;
};

export const hotspots: Hotspot[] = [
  {
    id: "roda-conversa",
    titulo: "Roda de conversa",
    texto:
      "Ao fim da tarde, as mais velhas sentam sob a mangueira para contar histórias do território. É daqui que nasce boa parte do acervo de memória oral.",
    x: 11,
    y: 62,
    itemAcervo: "retrato-mestra-tecela",
  },
  {
    id: "casa-barro",
    titulo: "Casa de barro e telha",
    texto:
      "Construção em adobe erguida em mutirão. As paredes de terra mantêm a casa fresca no calor do Piauí.",
    x: 58,
    y: 45,
  },
  {
    id: "varal",
    titulo: "Varal de tecidos",
    texto:
      "Os tecidos estampados secam ao sol e marcam a paisagem visual da comunidade em dias de festa.",
    x: 78,
    y: 50,
    itemAcervo: "registro-festa-agosto",
  },
  {
    id: "terreiro",
    titulo: "Chão do terreiro",
    texto:
      "Espaço político e festivo: assembleias, cortejos e o samba de roda acontecem sobre esta terra batida.",
    x: 40,
    y: 78,
    itemAcervo: "terreiro-central",
  },
];

export const numeros = [
  { valor: 320, sufixo: "", rotulo: "Itens no acervo digital" },
  { valor: 14500, sufixo: "+", rotulo: "Visitantes virtuais" },
  { valor: 48, sufixo: "", rotulo: "Depoimentos gravados" },
  { valor: 26, sufixo: "", rotulo: "Eventos realizados" },
];

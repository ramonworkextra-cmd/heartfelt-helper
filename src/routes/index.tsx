import { createFileRoute } from "@tanstack/react-router";
import {
  ArrowRight,
  Check,
  ChevronDown,
  Headphones,
  Lock,
  Scale,
  Search,
  SlidersHorizontal,
  TestTube,
  X,
} from "lucide-react";
import { useState } from "react";

import { AssetPlaceholder, TextPlaceholder } from "@/components/Placeholder";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Política Sem Torcida | Entenda o jogo antes de escolher um lado" },
      {
        name: "description",
        content:
          "Material apartidário para entender como a política brasileira funciona, reconhecer narrativas e comparar candidatos com critérios próprios nas Eleições 2026.",
      },
      { property: "og:title", content: "Política Sem Torcida | Entenda o jogo antes de escolher um lado" },
      {
        property: "og:description",
        content:
          "Entenda como a política funciona, reconheça narrativas e forme sua própria opinião com o Método V.O.T.O.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

/* Substituir por [LINK CHECKOUT] real */
const CHECKOUT_URL = "#oferta";
const PRECO = "R$ 37,90";

function CTA({
  children,
  tone = "gold",
}: {
  children: string;
  tone?: "gold" | "outline";
}) {
  const base =
    "inline-flex w-full max-w-xl items-center justify-center gap-2 rounded-full px-7 py-4 text-center text-sm font-semibold uppercase tracking-[0.08em] transition sm:text-base";
  return (
    <a
      href={CHECKOUT_URL}
      className={
        tone === "gold"
          ? `${base} bg-gold text-ink shadow-[0_18px_40px_-18px] shadow-gold/70 hover:brightness-105`
          : `${base} border border-gold/60 text-gold hover:bg-gold/10`
      }
    >
      {children}
      <ArrowRight className="size-4 shrink-0" aria-hidden />
    </a>
  );
}

function Eyebrow({ children }: { children: string }) {
  return (
    <p className="text-[0.7rem] font-semibold uppercase tracking-[0.28em] text-gold">{children}</p>
  );
}

const chips = ["Linguagem clara", "Apartidário", "Atualizado para 2026", "Conteúdo + ferramentas práticas"];

const perguntasSoltas = [
  "“Quem realmente pode fazer isso?”",
  "“Essa proposta é possível?”",
  "“Esse número está completo?”",
  "“Isso é fato ou interpretação?”",
  "“Essa notícia está fora de contexto?”",
  "“Direita e esquerda significam o quê, afinal?”",
  "“Estou analisando todos com a mesma régua?”",
];

const metodo = [
  {
    letra: "V",
    titulo: "Verifique",
    icone: Search,
    pergunta: "De onde veio essa informação?",
    itens: ["fontes", "dados", "contexto", "evidências", "números", "origem da afirmação"],
    msg: "Nem tudo que parece convincente está completo.",
  },
  {
    letra: "O",
    titulo: "Observe",
    icone: Scale,
    pergunta: "Esse cargo realmente pode fazer isso?",
    itens: ["competências", "instituições", "níveis de governo", "dependências", "limites do cargo"],
    msg: "Uma promessa só pode ser analisada corretamente quando você entende quem realmente tem poder para executá-la.",
  },
  {
    letra: "T",
    titulo: "Teste",
    icone: TestTube,
    pergunta: "Como isso funcionaria na prática?",
    itens: ["custos", "execução", "viabilidade", "consequências", "trade-offs", "barreiras jurídicas e políticas"],
    msg: "Uma ideia pode parecer excelente até chegar a pergunta: “Como?”",
  },
  {
    letra: "O",
    titulo: "Organize",
    icone: SlidersHorizontal,
    pergunta: "Estou usando a mesma régua?",
    itens: ["prioridades", "valores", "critérios", "alternativas", "comparações"],
    msg: "O objetivo não é eliminar suas preferências. É tornar seus critérios mais claros.",
  },
];

const jornada = [
  {
    n: "01",
    titulo: "Entenda o jogo",
    topicos: ["Política no cotidiano", "Estado e governo", "Como funciona o poder", "Quem realmente pode fazer o quê"],
    beneficio: "Antes de julgar quem ocupa o cargo, entenda o que o cargo realmente pode fazer.",
  },
  {
    n: "02",
    titulo: "Entenda as ideias",
    topicos: [
      "Direita e esquerda",
      "Liberalismo",
      "Conservadorismo",
      "Social-democracia",
      "Socialismo",
      "Libertarianismo",
      "Progressismo",
      "Nacionalismo",
      "Centrismo",
      "Populismo",
      "Mapa Político de 6 Eixos",
    ],
    beneficio:
      "Perceba por que opiniões políticas reais raramente cabem perfeitamente em apenas duas caixas.",
  },
  {
    n: "03",
    titulo: "Entenda os grandes debates",
    topicos: [
      "Economia",
      "Inflação",
      "Juros",
      "Impostos",
      "Gastos",
      "Emprego",
      "Segurança",
      "Saúde",
      "Políticas sociais",
      "Liberdade",
      "Direitos",
      "Costumes",
    ],
    beneficio: "Finalmente entenda os conceitos que aparecem todos os dias nos debates políticos.",
  },
  {
    n: "04",
    titulo: "Entenda como tentam convencer você",
    topicos: [
      "Vieses",
      "Polarização",
      "Tribalismo",
      "Medo",
      "Indignação",
      "Algoritmos",
      "Manchetes",
      "Vídeos cortados",
      "Gráficos",
      "Pesquisas",
      "Fake news",
      "IA e deepfakes",
    ],
    beneficio:
      "Aprenda a analisar não apenas o que está sendo dito, mas também como a informação está sendo apresentada.",
  },
  {
    n: "05",
    titulo: "Chegue mais preparado a 2026",
    topicos: [
      "Sistema eleitoral",
      "Cargos",
      "Propostas",
      "Investigação de candidatos",
      "Método V.O.T.O.",
      "Fiscalização depois da urna",
    ],
    beneficio: "Transforme conhecimento em critérios para analisar suas próprias escolhas.",
  },
];

const prints = [
  "[PRINT REAL — PÁGINA INTERNA 01]",
  "[PRINT REAL — PÁGINA INTERNA 02]",
  "[PRINT REAL — INFOGRÁFICO]",
  "[PRINT REAL — MÉTODO V.O.T.O.]",
  "[PRINT REAL — CAPÍTULO ELEIÇÕES 2026]",
  "[PRINT REAL — PÁGINA ECONOMIA]",
];

const antes = [
  "“Direita e esquerda parecem apenas dois times.”",
  "“Não sei quem realmente pode fazer o quê.”",
  "“Vejo muita notícia, mas continuo sem contexto.”",
  "“Não sei se uma promessa é viável.”",
  "“Tenho dificuldade para separar informação de narrativa.”",
  "“Cada pessoa usa uma régua diferente.”",
];

const depois = [
  "“Entendo melhor as diferenças entre ideias políticas.”",
  "“Sei analisar a competência de cada cargo.”",
  "“Tenho perguntas para investigar informações.”",
  "“Consigo olhar além da promessa.”",
  "“Reconheço quando preciso verificar antes de concluir.”",
  "“Tenho critérios mais claros para comparar.”",
];

const stack = [
  { n: "01", titulo: "Política Sem Torcida", desc: "Material principal completo." },
  { n: "02", titulo: "Experiência em Podcast", desc: "Conteúdo complementar em áudio." },
  { n: "03", titulo: "Raio-X do Candidato", desc: "Ferramenta prática de análise." },
  { n: "04", titulo: "Kit Anti-Manipulação Política", desc: "Ferramenta prática de verificação." },
  { n: "05", titulo: "Método V.O.T.O.", desc: "O processo prático usado ao longo da experiência." },
];

const paraQuem = [
  "...acompanha política, mas frequentemente sente que falta contexto.",
  "...quer entender direita e esquerda sem precisar entrar em militância.",
  "...está cansado de transformar política em torcida.",
  "...quer chegar às Eleições de 2026 com critérios mais claros.",
  "...recebe muita informação política por redes sociais.",
  "...não quer depender de influencers para formar sua opinião.",
  "...quer entender economia, governo e instituições sem linguagem acadêmica.",
  "...quer identificar conteúdos fora de contexto e manipulações.",
  "...sempre pensou: “Eu deveria entender política melhor, mas não sei por onde começar.”",
];

const naoE = [
  "Você procura alguém para dizer em quem votar.",
  "Quer apenas confirmar que o seu lado está sempre certo.",
  "Procura munição para atacar quem pensa diferente.",
  "Quer propaganda de algum partido ou candidato.",
  "Espera uma fórmula pronta que substitua sua própria análise.",
];

const faq: { q: string; a: string; placeholder?: string }[] = [
  {
    q: "O Política Sem Torcida é de direita ou de esquerda?",
    a: "Nenhum dos dois. O material apresenta conceitos, argumentos, instituições e ferramentas de análise sem pedir que você adote uma posição específica. O princípio do projeto é simples: não dizer o que você deve pensar, mas oferecer melhores ferramentas para pensar sobre política.",
  },
  {
    q: "Preciso entender de política antes de começar?",
    a: "Não. O material começa pelos fundamentos e avança progressivamente até temas mais complexos e aplicação prática nas Eleições de 2026.",
  },
  {
    q: "O produto indica em quem devo votar?",
    a: "Não. Nem o ebook nem as ferramentas recomendam candidatos ou partidos. O objetivo é ajudar você a construir seus próprios critérios.",
  },
  {
    q: "É apenas sobre as Eleições de 2026?",
    a: "Não. A parte eleitoral foi pensada para 2026, mas os fundamentos sobre instituições, economia, ideologias, informação, narrativas e pensamento crítico continuam úteis além deste período eleitoral.",
  },
  {
    q: "Não gosto muito de ler. Ainda faz sentido?",
    a: "Sim. A oferta também inclui uma experiência complementar em podcast para que você possa consumir os principais conteúdos em áudio.",
  },
  {
    q: "Quais bônus estão incluídos?",
    a: "Você recebe o Raio-X do Candidato e o Kit Anti-Manipulação Política, duas ferramentas práticas para aplicar os conceitos do material.",
  },
  { q: "Posso acessar pelo celular?", a: "", placeholder: "[CONFIRMAR FORMATO DE ENTREGA]" },
  { q: "Por quanto tempo terei acesso?", a: "", placeholder: "[INSERIR PRAZO REAL DE ACESSO]" },
  { q: "Existe garantia?", a: "", placeholder: "[INSERIR GARANTIA REAL]" },
];

function Index() {
  const [aberto, setAberto] = useState<number | null>(0);

  return (
    <main className="bg-ink font-sans text-cream">
      {/* 01 — HERO */}
      <section className="relative overflow-hidden px-5 pb-16 pt-14 sm:pt-20">
        <div className="pointer-events-none absolute -top-40 left-1/2 size-[36rem] -translate-x-1/2 rounded-full bg-gold/10 blur-3xl" />
        <div className="relative mx-auto max-w-5xl text-center">
          <Eyebrow>Edição especial • Eleições 2026</Eyebrow>
          <h1 className="mx-auto mt-5 max-w-3xl font-display text-[2rem] font-black uppercase leading-[1.05] tracking-tight sm:text-5xl lg:text-6xl">
            Antes de escolher um lado,{" "}
            <span className="block text-gold">entenda o jogo.</span>
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-cream-dim sm:text-lg">
            Entenda como a política brasileira funciona, reconheça narrativas, compare ideias e candidatos
            com mais critério e forme sua própria opinião — sem precisar terceirizar seu pensamento para
            político, influencer ou comentarista.
          </p>

          <div className="mx-auto mt-10 max-w-lg">
            <AssetPlaceholder label="[INSERIR MOCKUP PRINCIPAL DO POLÍTICA SEM TORCIDA]" ratio="4 / 3" />
          </div>

          <ul className="mx-auto mt-8 flex max-w-2xl flex-wrap justify-center gap-2">
            {chips.map((c) => (
              <li
                key={c}
                className="flex items-center gap-1.5 rounded-full border border-ink-line bg-ink-soft/60 px-3 py-1.5 text-xs text-cream-dim"
              >
                <Check className="size-3.5 text-gold" aria-hidden />
                {c}
              </li>
            ))}
          </ul>

          <div className="mt-10 flex flex-col items-center gap-3">
            <CTA>Quero entender política com mais clareza</CTA>
            <p className="max-w-md text-xs text-cream-dim/80">
              Acesso digital ao Política Sem Torcida + experiência em áudio + ferramentas práticas.
            </p>
          </div>
        </div>
      </section>

      {/* 02 — IDENTIFICAÇÃO */}
      <section className="border-t border-ink-line/40 bg-ink-soft/30 px-5 py-16 sm:py-20">
        <div className="mx-auto max-w-3xl">
          <h2 className="font-display text-2xl font-bold uppercase leading-tight sm:text-4xl">
            Você recebe mais informação política do que nunca.
            <span className="mt-2 block text-cream-dim">
              E ainda assim pode ser difícil saber no que acreditar.
            </span>
          </h2>
          <div className="mt-8 space-y-5 text-base leading-relaxed text-cream-dim">
            <p>Abra qualquer rede social. Em poucos minutos você encontra:</p>
            <ul className="grid gap-2 sm:grid-cols-2">
              {[
                "um político dizendo uma coisa",
                "um comentarista dizendo outra",
                "um corte de vídeo sem contexto",
                "um gráfico que parece provar tudo",
                "uma pesquisa eleitoral",
                "um print de WhatsApp",
                "um influencer indignado",
                "dezenas de pessoas certas de que o outro lado está errado",
              ].map((i) => (
                <li key={i} className="rounded-xl border border-ink-line/60 bg-ink/60 px-4 py-3 text-sm">
                  {i}
                </li>
              ))}
            </ul>
            <p>
              O problema não é simplesmente falta de informação. É informação demais — e critérios de menos
              para organizar tudo isso.
            </p>
            <p>Você pode acompanhar política todos os dias e ainda continuar se perguntando:</p>
            <ul className="space-y-2 border-l-2 border-gold/50 pl-5 font-display text-lg text-cream">
              {perguntasSoltas.map((p) => (
                <li key={p}>{p}</li>
              ))}
            </ul>
            <p>E quanto mais perto chegam as eleições, mais difícil fica separar:</p>
            <div className="grid gap-3 sm:grid-cols-3">
              {[
                ["Informação", "Narrativa"],
                ["Argumento", "Torcida"],
                ["Proposta", "Promessa"],
              ].map(([a, b]) => (
                <div
                  key={a}
                  className="rounded-2xl border border-ink-line bg-ink px-4 py-5 text-center font-display uppercase"
                >
                  <p className="text-gold">{a}</p>
                  <p className="my-1 text-xs tracking-widest text-cream-dim/60">de</p>
                  <p className="text-cream">{b}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 03 — A DOR REAL */}
      <section className="px-5 py-16 sm:py-20">
        <div className="mx-auto max-w-3xl">
          <h2 className="font-display text-2xl font-bold uppercase leading-tight sm:text-4xl">
            O problema não é você não saber tudo sobre política.
          </h2>
          <div className="mt-8 space-y-4 text-base leading-relaxed text-cream-dim">
            <p>
              Ninguém precisa conhecer cada lei, cada votação, cada indicador econômico ou cada discussão de
              Brasília.
            </p>
            <p>O problema começa quando você precisa tomar uma decisão... mas não sabe quais perguntas fazer.</p>
            <p>
              Quando você aceita ou rejeita uma proposta sem saber se aquele cargo pode executá-la. Quando um
              vídeo de 30 segundos passa a definir sua opinião sobre um assunto que levou anos para se formar.
            </p>
            <p>
              Quando “direita” e “esquerda” deixam de representar ideias e começam a funcionar apenas como
              times. Quando você vê dois lados usando números diferentes e não sabe como avaliar nenhum deles.
            </p>
            <p>
              E principalmente: quando outras pessoas acabam escolhendo por você quais critérios usar para
              interpretar a realidade.
            </p>
          </div>
          <p className="mt-10 border-y border-gold/30 py-8 text-center font-display text-xl font-bold uppercase leading-snug text-gold sm:text-3xl">
            Informação sem critério não é clareza.
            <span className="block text-cream">É apenas mais ruído.</span>
          </p>
        </div>
      </section>

      {/* 04 — VIRADA */}
      <section className="border-y border-ink-line/40 bg-ink-soft/30 px-5 py-16 sm:py-20">
        <div className="mx-auto max-w-3xl">
          <h2 className="font-display text-2xl font-bold uppercase leading-tight sm:text-4xl">
            Você não precisa saber tudo.
            <span className="block text-gold">Precisa saber fazer as perguntas certas.</span>
          </h2>
          <p className="mt-6 text-base text-cream-dim">
            Imagine olhar para uma promessa política e conseguir perguntar:
          </p>
          <ul className="mt-6 grid gap-2 sm:grid-cols-2">
            {[
              "Quem tem competência para fazer isso?",
              "De onde veio essa informação?",
              "Existe fonte?",
              "Quanto custa?",
              "Quem paga?",
              "Depende de Congresso, governador, prefeito ou outra instituição?",
              "Quais consequências podem surgir?",
              "Existe diferença entre o que foi dito e o que pode ser executado?",
            ].map((q) => (
              <li
                key={q}
                className="flex items-start gap-2 rounded-xl border border-ink-line/60 bg-ink/60 p-4 text-sm text-cream-dim"
              >
                <Check className="mt-0.5 size-4 shrink-0 text-gold" aria-hidden />
                {q}
              </li>
            ))}
          </ul>
          <p className="mt-6 text-base leading-relaxed text-cream-dim">
            Agora imagine aplicar a mesma lógica independentemente de gostar ou não de quem está falando. É aí
            que política começa a deixar de parecer torcida... e passa a fazer mais sentido.
          </p>
        </div>
      </section>

      {/* 05 — MÉTODO V.O.T.O. */}
      <section className="px-5 py-16 sm:py-24">
        <div className="mx-auto max-w-5xl">
          <div className="text-center">
            <Eyebrow>O método que organiza a análise</Eyebrow>
            <h2 className="mt-4 font-display text-2xl font-bold uppercase sm:text-4xl">
              Conheça o Método V.O.T.O.
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-cream-dim">
              Um processo simples para sair da reação imediata e começar a analisar política com critérios.
            </p>
          </div>
          <div className="mt-12 grid gap-5 md:grid-cols-2">
            {metodo.map((m, i) => (
              <article
                key={i}
                className="rounded-3xl border border-ink-line bg-ink-soft/50 p-6 sm:p-8"
              >
                <div className="flex items-center gap-4">
                  <span className="flex size-14 items-center justify-center rounded-2xl border border-gold/40 bg-gold/10 font-display text-2xl font-black text-gold">
                    {m.letra}
                  </span>
                  <div>
                    <h3 className="font-display text-xl font-bold uppercase">{m.titulo}</h3>
                    <m.icone className="mt-1 size-4 text-gold/70" aria-hidden />
                  </div>
                </div>
                <p className="mt-6 font-display text-lg leading-snug text-cream">{m.pergunta}</p>
                <ul className="mt-4 flex flex-wrap gap-2">
                  {m.itens.map((it) => (
                    <li
                      key={it}
                      className="rounded-full border border-ink-line bg-ink px-3 py-1 text-xs text-cream-dim"
                    >
                      {it}
                    </li>
                  ))}
                </ul>
                <p className="mt-6 border-t border-ink-line/70 pt-4 text-sm leading-relaxed text-cream-dim">
                  {m.msg}
                </p>
              </article>
            ))}
          </div>
          <p className="mx-auto mt-10 max-w-2xl text-center text-base text-cream-dim">
            O Método V.O.T.O. não diz qual conclusão você deve ter. Ele ajuda você a construir melhor o
            caminho até ela.
          </p>
          <div className="mt-8 flex justify-center">
            <CTA>Quero aprender o Método V.O.T.O.</CTA>
          </div>
        </div>
      </section>

      {/* 06 — PRODUTO */}
      <section className="border-y border-ink-line/40 bg-ink-soft/30 px-5 py-16 sm:py-20">
        <div className="mx-auto max-w-3xl text-center">
          <Eyebrow>Apresentando</Eyebrow>
          <h2 className="mt-4 font-display text-3xl font-black uppercase tracking-tight text-gold sm:text-5xl">
            Política Sem Torcida
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-cream-dim">
            Uma jornada criada para transformar assuntos políticos complexos em conhecimento claro,
            organizado e aplicável à vida real.
          </p>
        </div>
        <div className="mx-auto mt-10 max-w-2xl space-y-4 text-base leading-relaxed text-cream-dim">
          <p>
            Você começa pelos fundamentos. Entende como o poder funciona. Descobre quem realmente pode fazer o
            quê. Aprende de onde vieram direita e esquerda.
          </p>
          <p>
            Conhece diferentes correntes políticas sem precisar escolher uma delas. Entende economia sem
            economês. Passa pelos grandes debates sobre segurança, saúde, desigualdade, liberdade e sociedade.
          </p>
          <p>
            Descobre como vieses, algoritmos, campanhas e narrativas influenciam a forma como você interpreta
            política. Aprende a reconhecer problemas em conteúdos, números, vídeos e informações.
          </p>
          <p>
            E finalmente aplica tudo isso às Eleições de 2026. Não como alguém procurando alguém para dizer em
            quem votar, mas como alguém que desenvolveu critérios próprios para analisar.
          </p>
        </div>
      </section>

      {/* 07 — JORNADA */}
      <section className="px-5 py-16 sm:py-24">
        <div className="mx-auto max-w-5xl">
          <h2 className="mx-auto max-w-3xl text-center font-display text-2xl font-bold uppercase leading-tight sm:text-4xl">
            Do “eu não entendo isso” <span className="block text-gold">ao “agora eu sei o que perguntar”</span>
          </h2>
          <div className="mt-12 space-y-4">
            {jornada.map((j) => (
              <article
                key={j.n}
                className="rounded-3xl border border-ink-line bg-ink-soft/40 p-6 sm:flex sm:gap-8 sm:p-8"
              >
                <p className="font-display text-4xl font-black text-gold/40 sm:text-5xl">{j.n}</p>
                <div className="mt-3 flex-1 sm:mt-0">
                  <h3 className="font-display text-xl font-bold uppercase">{j.titulo}</h3>
                  <ul className="mt-4 flex flex-wrap gap-2">
                    {j.topicos.map((t) => (
                      <li
                        key={t}
                        className="rounded-full border border-ink-line bg-ink px-3 py-1 text-xs text-cream-dim"
                      >
                        {t}
                      </li>
                    ))}
                  </ul>
                  <p className="mt-5 border-l-2 border-gold/50 pl-4 text-sm leading-relaxed text-cream">
                    {j.beneficio}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* 08 — PROVA VISUAL */}
      <section className="border-y border-ink-line/40 bg-ink-soft/30 px-5 py-16 sm:py-20">
        <div className="mx-auto max-w-5xl">
          <div className="text-center">
            <Eyebrow>Veja por dentro</Eyebrow>
            <h2 className="mt-4 font-display text-2xl font-bold uppercase sm:text-4xl">
              Não precisa imaginar o que você vai receber.
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-cream-dim">
              O Política Sem Torcida foi construído para tornar assuntos complexos visuais, claros e
              agradáveis de consumir.
            </p>
          </div>
          <div className="mt-10 flex snap-x snap-mandatory gap-4 overflow-x-auto pb-4 sm:grid sm:grid-cols-3 sm:overflow-visible">
            {prints.map((p) => (
              <div key={p} className="w-[72%] shrink-0 snap-center sm:w-auto">
                <AssetPlaceholder label={p} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 09 — ANTES E DEPOIS */}
      <section className="px-5 py-16 sm:py-20">
        <div className="mx-auto max-w-4xl">
          <h2 className="mx-auto max-w-3xl text-center font-display text-2xl font-bold uppercase leading-tight sm:text-4xl">
            O objetivo não é fazer você pensar como alguém.
            <span className="block text-gold">É ajudar você a pensar com mais clareza.</span>
          </h2>
          <div className="mt-10 grid gap-5 sm:grid-cols-2">
            <div className="rounded-3xl border border-ink-line bg-ink-soft/40 p-6">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-cream-dim/70">Antes</p>
              <ul className="mt-4 space-y-3">
                {antes.map((a) => (
                  <li key={a} className="flex items-start gap-2 text-sm text-cream-dim">
                    <X className="mt-0.5 size-4 shrink-0 text-cream-dim/50" aria-hidden />
                    {a}
                  </li>
                ))}
              </ul>
            </div>
            <div className="rounded-3xl border border-gold/40 bg-gold/5 p-6">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-gold">Depois</p>
              <ul className="mt-4 space-y-3">
                {depois.map((d) => (
                  <li key={d} className="flex items-start gap-2 text-sm text-cream">
                    <Check className="mt-0.5 size-4 shrink-0 text-gold" aria-hidden />
                    {d}
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <p className="mt-6 text-center text-xs text-cream-dim/70">
            O objetivo é ajudar você a desenvolver critérios próprios — resultados dependem do seu uso do
            material.
          </p>
        </div>
      </section>

      {/* 10 — PODCAST */}
      <section className="border-y border-ink-line/40 bg-ink-soft/30 px-5 py-16 sm:py-20">
        <div className="mx-auto grid max-w-5xl items-center gap-10 md:grid-cols-2">
          <div>
            <Eyebrow>Não quer parar para ler?</Eyebrow>
            <h2 className="mt-4 font-display text-2xl font-bold uppercase leading-tight sm:text-4xl">
              Coloque o Política Sem Torcida no fone.
            </h2>
            <p className="mt-4 text-cream-dim">
              Os principais conteúdos do material também estão disponíveis em uma experiência complementar em
              áudio.
            </p>
            <div className="mt-5 space-y-3 text-sm leading-relaxed text-cream-dim">
              <p>
                Não é simplesmente alguém lendo o PDF. Os capítulos foram transformados em conversas
                educacionais com dois apresentadores. Um explica. O outro questiona.
              </p>
              <p>
                Conceitos são aprofundados, dúvidas são levantadas e elementos visuais são traduzidos para a
                linguagem falada.
              </p>
              <p>
                Assim, você pode continuar aprendendo no carro, caminhando, treinando, fazendo tarefas ou
                simplesmente longe da tela.
              </p>
            </div>
            <p className="mt-6 flex items-center gap-3 font-display text-xl font-bold uppercase text-gold">
              <Headphones className="size-5" aria-hidden /> Leia. Ouça. Aplique.
            </p>
          </div>
          <AssetPlaceholder label="[INSERIR MOCKUP REAL DO PODCAST]" ratio="1 / 1" />
        </div>
      </section>

      {/* 11 / 12 — BÔNUS */}
      <section className="px-5 py-16 sm:py-20">
        <div className="mx-auto max-w-5xl space-y-12">
          <div className="grid items-center gap-8 md:grid-cols-2">
            <div>
              <Eyebrow>Bônus prático</Eyebrow>
              <h2 className="mt-4 font-display text-2xl font-bold uppercase sm:text-3xl">
                Raio-X do Candidato
              </h2>
              <p className="mt-3 text-cream-dim">
                Pare de analisar candidatos apenas por simpatia, cortes ou discursos.
              </p>
              <p className="mt-4 text-sm text-cream-dim">Use uma estrutura para investigar e organizar:</p>
              <ul className="mt-3 flex flex-wrap gap-2">
                {[
                  "cargo",
                  "competências",
                  "histórico",
                  "experiência",
                  "propostas",
                  "fontes",
                  "viabilidade",
                  "coerência",
                  "prioridades",
                ].map((t) => (
                  <li
                    key={t}
                    className="rounded-full border border-ink-line bg-ink-soft/60 px-3 py-1 text-xs text-cream-dim"
                  >
                    {t}
                  </li>
                ))}
              </ul>
              <p className="mt-5 border-l-2 border-gold/50 pl-4 text-sm text-cream">
                O Raio-X não diz em quem você deve votar. Ele ajuda você a analisar diferentes opções usando
                critérios mais consistentes — aplicando o Método V.O.T.O. às informações encontradas.
              </p>
            </div>
            <AssetPlaceholder label="[INSERIR MOCKUP REAL — RAIO-X DO CANDIDATO]" ratio="4 / 3" />
          </div>

          <div className="grid items-center gap-8 md:grid-cols-2">
            <AssetPlaceholder
              label="[INSERIR MOCKUP REAL — KIT ANTI-MANIPULAÇÃO]"
              ratio="4 / 3"
              className="md:order-2"
            />
            <div>
              <Eyebrow>Bônus prático</Eyebrow>
              <h2 className="mt-4 font-display text-2xl font-bold uppercase sm:text-3xl">
                Kit Anti-Manipulação Política
              </h2>
              <p className="mt-3 text-cream-dim">Antes de acreditar. Antes de compartilhar. Verifique.</p>
              <p className="mt-4 text-sm text-cream-dim">
                Um sistema de consulta rápida para analisar:
              </p>
              <ul className="mt-3 flex flex-wrap gap-2">
                {[
                  "notícias",
                  "prints",
                  "vídeos",
                  "manchetes",
                  "gráficos",
                  "estatísticas",
                  "pesquisas eleitorais",
                  "imagens",
                  "conteúdo produzido por IA",
                ].map((t) => (
                  <li
                    key={t}
                    className="rounded-full border border-ink-line bg-ink-soft/60 px-3 py-1 text-xs text-cream-dim"
                  >
                    {t}
                  </li>
                ))}
              </ul>
              <ul className="mt-5 space-y-1.5 text-sm text-cream-dim">
                {[
                  "Qual é a fonte?",
                  "Qual é o contexto?",
                  "O número está completo?",
                  "O vídeo foi cortado?",
                  "A comparação faz sentido?",
                  "Existe informação suficiente para concluir?",
                ].map((q) => (
                  <li key={q}>— {q}</li>
                ))}
              </ul>
              <p className="mt-6 font-display text-lg font-bold uppercase leading-snug text-gold">
                Desconfiar de tudo não é pensamento crítico.
                <span className="block text-cream">Verificar antes de concluir, sim.</span>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 13 — STACK */}
      <section className="border-y border-ink-line/40 bg-ink-soft/30 px-5 py-16 sm:py-20">
        <div className="mx-auto max-w-3xl">
          <h2 className="text-center font-display text-2xl font-bold uppercase sm:text-4xl">
            Tudo o que você recebe ao entrar
          </h2>
          <ul className="mt-10 space-y-3">
            {stack.map((s) => (
              <li
                key={s.n}
                className="flex items-start gap-4 rounded-2xl border border-ink-line bg-ink p-5"
              >
                <span className="font-display text-lg font-black text-gold/60">{s.n}</span>
                <div>
                  <h3 className="font-display text-lg font-bold uppercase">{s.titulo}</h3>
                  <p className="mt-1 text-sm text-cream-dim">{s.desc}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* 14 / 15 — PARA QUEM É / NÃO É */}
      <section className="px-5 py-16 sm:py-20">
        <div className="mx-auto max-w-5xl">
          <h2 className="text-center font-display text-2xl font-bold uppercase sm:text-4xl">
            O Política Sem Torcida foi criado para quem...
          </h2>
          <ul className="mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {paraQuem.map((p) => (
              <li
                key={p}
                className="rounded-2xl border border-ink-line bg-ink-soft/40 p-5 text-sm leading-relaxed text-cream-dim"
              >
                {p}
              </li>
            ))}
          </ul>

          <div className="mx-auto mt-16 max-w-2xl rounded-3xl border border-ink-line bg-ink-soft/40 p-6 sm:p-8">
            <h2 className="font-display text-xl font-bold uppercase sm:text-2xl">
              Mas talvez não seja para você se...
            </h2>
            <ul className="mt-5 space-y-2.5">
              {naoE.map((n) => (
                <li key={n} className="flex items-start gap-2 text-sm text-cream-dim">
                  <X className="mt-0.5 size-4 shrink-0 text-cream-dim/50" aria-hidden />
                  {n}
                </li>
              ))}
            </ul>
            <p className="mt-6 border-t border-ink-line pt-5 text-sm text-cream">
              O Política Sem Torcida não entrega uma opinião pronta. Entrega ferramentas para você construir a
              sua.
            </p>
          </div>
        </div>
      </section>

      {/* 17 — AUTOR */}
      <section className="border-y border-ink-line/40 bg-ink-soft/30 px-5 py-16 sm:py-20">
        <div className="mx-auto grid max-w-4xl items-center gap-8 sm:grid-cols-[minmax(0,240px)_1fr]">
          <AssetPlaceholder label="[INSERIR FOTO REAL DO AUTOR / RESPONSÁVEL]" ratio="1 / 1" />
          <div>
            <h2 className="font-display text-2xl font-bold uppercase leading-tight sm:text-3xl">
              Quem está por trás do Política Sem Torcida?
            </h2>
            <p className="mt-4 text-base leading-relaxed text-cream-dim">
              O Política Sem Torcida nasceu com uma proposta simples: tornar assuntos políticos complexos mais
              compreensíveis para quem quer formar a própria opinião sem depender de militância, torcida ou
              respostas prontas.
            </p>
            <p className="mt-4">
              <TextPlaceholder>[INSERIR BIO REAL DO AUTOR]</TextPlaceholder>
            </p>
          </div>
        </div>
      </section>

      {/* 18 — OFERTA */}
      <section id="oferta" className="scroll-mt-8 px-5 py-16 sm:py-24">
        <div className="mx-auto max-w-2xl rounded-[2rem] border border-gold/50 bg-ink-soft/60 p-7 text-center shadow-[0_40px_90px_-50px] shadow-gold/40 sm:p-10">
          <h2 className="font-display text-2xl font-black uppercase leading-tight sm:text-4xl">
            Entenda primeiro.
            <span className="block text-gold">Decida depois.</span>
          </h2>
          <p className="mx-auto mt-4 max-w-lg text-sm text-cream-dim sm:text-base">
            Tenha acesso ao Política Sem Torcida e comece a construir uma forma mais clara de entender o que
            acontece na política brasileira.
          </p>
          <ul className="mt-8 space-y-2 text-left">
            {[
              "Política Sem Torcida",
              "Experiência complementar em Podcast",
              "Raio-X do Candidato",
              "Kit Anti-Manipulação Política",
              "Método V.O.T.O.",
            ].map((i) => (
              <li
                key={i}
                className="flex items-center gap-3 rounded-xl border border-ink-line bg-ink px-4 py-3 text-sm"
              >
                <Check className="size-4 shrink-0 text-gold" aria-hidden />
                {i}
              </li>
            ))}
          </ul>
          <p className="mt-9 text-xs uppercase tracking-[0.2em] text-cream-dim/70">Acesso digital por</p>
          <p className="mt-2 font-display text-5xl font-black text-gold sm:text-6xl">{PRECO}</p>
          <p className="mt-3 text-sm text-cream-dim">
            Condição de pagamento: <TextPlaceholder>[INSERIR CONDIÇÃO REAL]</TextPlaceholder>
          </p>
          <div className="mt-8 flex flex-col items-center gap-3">
            <CTA>Quero entender política com mais clareza</CTA>
            <p className="flex items-center gap-1.5 text-xs text-cream-dim/80">
              <Lock className="size-3.5" aria-hidden /> Acesso digital • Pagamento seguro
            </p>
            <p className="text-[0.7rem] text-cream-dim/60">
              Botão aguardando <TextPlaceholder>[LINK CHECKOUT]</TextPlaceholder>
            </p>
          </div>
        </div>

        {/* 19 — GARANTIA */}
        <div className="mx-auto mt-8 max-w-2xl rounded-3xl border border-ink-line bg-ink-soft/40 p-6 sm:p-8">
          <Eyebrow>Seu risco é menor</Eyebrow>
          <h3 className="mt-3 font-display text-xl font-bold uppercase sm:text-2xl">
            Conheça o material com tranquilidade.
          </h3>
          <p className="mt-3 text-sm leading-relaxed text-cream-dim">
            Você terá <TextPlaceholder>[X DIAS]</TextPlaceholder> para acessar e conhecer o Política Sem
            Torcida. Se dentro desse período entender que o material não é para você, poderá solicitar o
            reembolso de acordo com as condições da plataforma.
          </p>
          <p className="mt-4">
            <TextPlaceholder>[INSERIR GARANTIA REAL]</TextPlaceholder>
          </p>
        </div>
      </section>

      {/* 20 — FAQ */}
      <section className="border-t border-ink-line/40 bg-ink-soft/30 px-5 py-16 sm:py-20">
        <div className="mx-auto max-w-2xl">
          <h2 className="text-center font-display text-2xl font-bold uppercase sm:text-4xl">
            Ainda tem alguma dúvida?
          </h2>
          <div className="mt-8 space-y-3">
            {faq.map((item, i) => (
              <div key={item.q} className="rounded-2xl border border-ink-line bg-ink">
                <button
                  type="button"
                  onClick={() => setAberto(aberto === i ? null : i)}
                  aria-expanded={aberto === i}
                  className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left text-sm font-semibold"
                >
                  {item.q}
                  <ChevronDown
                    className={`size-4 shrink-0 text-gold transition-transform ${aberto === i ? "rotate-180" : ""}`}
                    aria-hidden
                  />
                </button>
                {aberto === i && (
                  <div className="px-5 pb-5 text-sm leading-relaxed text-cream-dim">
                    {item.a ? item.a : <TextPlaceholder>{item.placeholder!}</TextPlaceholder>}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 21 — CTA FINAL */}
      <section className="px-5 py-16 sm:py-24">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="font-display text-2xl font-bold uppercase leading-tight sm:text-4xl">
            Nas eleições, todo mundo vai tentar convencer você de alguma coisa.
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-cream-dim">
            A diferença é chegar a esse momento sabendo quais perguntas fazer.
          </p>
          <div className="mx-auto mt-8 max-w-xl space-y-3 text-sm leading-relaxed text-cream-dim">
            <p>
              Você não precisa concordar com todo mundo. Não precisa saber tudo. Não precisa transformar
              política em torcida.
            </p>
            <p>
              Mas pode entender melhor como o sistema funciona, investigar melhor o que recebe, comparar usando
              critérios mais claros e assumir mais responsabilidade pela forma como constrói sua própria
              opinião.
            </p>
          </div>
          <p className="mt-12 font-display text-2xl font-black uppercase leading-tight text-gold sm:text-4xl">
            Entenda o jogo.
            <span className="block text-cream">Compare as ideias.</span>
            <span className="block">Decida por você.</span>
          </p>
          <div className="mt-10 flex flex-col items-center gap-3">
            <CTA>Quero o Política Sem Torcida</CTA>
            <p className="text-xs text-cream-dim/80">{PRECO} • Acesso digital</p>
          </div>
        </div>
      </section>

      <footer className="border-t border-ink-line/40 px-5 py-10 text-center text-xs text-cream-dim/60">
        <p>Política Sem Torcida — conteúdo educacional e apartidário.</p>
        <p className="mt-1">© {new Date().getFullYear()} Todos os direitos reservados.</p>
      </footer>
    </main>
  );
}

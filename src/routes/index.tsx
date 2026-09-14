import { createFileRoute } from "@tanstack/react-router";
import { Check, ShieldCheck, Star, Lock, ChevronDown } from "lucide-react";
import { useState } from "react";

import kitMockup from "@/assets/kit-mockup.jpg";
import preview1 from "@/assets/preview-1.jpg";
import preview2 from "@/assets/preview-2.jpg";
import preview3 from "@/assets/preview-3.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Kit Completo em PDF | Material prático para estudar todo dia" },
      {
        name: "description",
        content:
          "Material digital organizado e ilustrado para estudar pelo celular, tablet ou impresso. Acesso imediato e 7 dias de garantia.",
      },
      { property: "og:title", content: "Kit Completo em PDF | Material prático para estudar todo dia" },
      {
        property: "og:description",
        content:
          "Material digital organizado e ilustrado para estudar pelo celular, tablet ou impresso. Acesso imediato e 7 dias de garantia.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const CHECKOUT_URL = "#oferta";

const beneficios = [
  "Conteúdo organizado do básico ao avançado",
  "Material ilustrado, leve e fácil de revisar",
  "Use no celular, no tablet ou imprima em casa",
  "Acesso imediato após a confirmação do pagamento",
  "Atualizações futuras sem custo adicional",
  "Suporte por e-mail para tirar dúvidas",
];

const depoimentos = [
  {
    nome: "Mariana S.",
    papel: "Aluna",
    texto:
      "Esperava um PDF simples e recebi um material muito bem organizado. Consigo revisar em poucos minutos por dia.",
  },
  {
    nome: "Lucas F.",
    papel: "Aluno",
    texto:
      "Uso tudo pelo celular, sem precisar imprimir nada. Fica legível e dá pra estudar em qualquer lugar.",
  },
  {
    nome: "Camila R.",
    papel: "Aluna",
    texto:
      "Minha rotina é corrida, então o plano diário ajudou muito. Sei exatamente o que abrir em cada dia.",
  },
];

const bonus = [
  { titulo: "Bônus 1", desc: "Guia rápido de primeiros passos para começar hoje mesmo." },
  { titulo: "Bônus 2", desc: "Plano de estudo diário para manter a constância." },
  { titulo: "Bônus 3", desc: "Checklist de revisão para fixar o conteúdo." },
];

const faq = [
  {
    q: "Como recebo o material?",
    a: "Logo após a confirmação do pagamento você recebe o acesso por e-mail, com todos os arquivos em PDF.",
  },
  { q: "Preciso imprimir?", a: "Não. Você pode usar tudo pelo celular ou tablet, e imprimir apenas se quiser." },
  { q: "Por quanto tempo tenho acesso?", a: "O acesso é vitalício, e as atualizações futuras estão incluídas." },
  {
    q: "E se eu não gostar?",
    a: "Você tem 7 dias de garantia. Basta pedir o reembolso dentro do prazo e devolvemos 100% do valor.",
  },
];

function Estrelas() {
  return (
    <div className="flex gap-0.5 text-amber-500" aria-label="5 de 5 estrelas">
      {Array.from({ length: 5 }).map((_, i) => (
        <Star key={i} className="size-4 fill-current" />
      ))}
    </div>
  );
}

function CTA({ children = "Quero garantir agora" }: { children?: string }) {
  return (
    <a
      href={CHECKOUT_URL}
      className="inline-flex w-full max-w-md items-center justify-center rounded-full bg-emerald-600 px-8 py-4 text-center text-base font-bold text-white shadow-lg shadow-emerald-600/25 transition hover:bg-emerald-700 sm:text-lg"
    >
      {children}
    </a>
  );
}

function Index() {
  const [aberto, setAberto] = useState<number | null>(0);

  return (
    <main className="min-h-screen bg-[#fffdf7] text-slate-900">
      <div className="bg-slate-900 px-4 py-2.5 text-center text-xs text-white sm:text-sm">
        Oferta por tempo limitado — condição especial de lançamento
      </div>

      {/* Hero */}
      <section className="mx-auto max-w-5xl px-4 pb-12 pt-10 text-center">
        <div className="mx-auto mb-4 flex w-fit items-center gap-2 rounded-full border border-amber-200 bg-amber-50 px-3 py-1.5 text-xs font-semibold text-amber-900">
          <Estrelas />
          +1.000 alunos
        </div>
        <h1 className="mx-auto max-w-3xl text-3xl font-extrabold leading-tight tracking-tight sm:text-5xl">
          Seu produto digital completo, pronto para usar todos os dias
        </h1>
        <p className="mx-auto mt-4 max-w-2xl text-base text-slate-600 sm:text-lg">
          Material organizado, ilustrado e fácil de revisar no celular, no tablet ou impresso — feito para quem
          tem pouco tempo e quer evoluir de verdade.
        </p>
        <img
          src={kitMockup}
          alt="Mockup do kit digital em tablet, celular e material impresso"
          width={1024}
          height={1024}
          className="mx-auto mt-8 w-full max-w-xl rounded-2xl"
        />
        <div className="mt-8 flex flex-col items-center gap-3">
          <CTA />
          <p className="flex items-center gap-1.5 text-xs text-slate-500">
            <Lock className="size-3.5" /> Compra 100% segura · 7 dias de garantia
          </p>
        </div>
      </section>

      {/* Prévia */}
      <section className="border-y border-slate-200/70 bg-white py-14">
        <div className="mx-auto max-w-5xl px-4">
          <p className="text-center text-xs font-bold uppercase tracking-widest text-emerald-700">
            O material por dentro
          </p>
          <h2 className="mt-2 text-center text-2xl font-bold sm:text-3xl">Veja como é por dentro</h2>
          <p className="mx-auto mt-3 max-w-xl text-center text-slate-600">
            Páginas ilustradas e organizadas para facilitar o estudo e as revisões rápidas.
          </p>
          <div className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-3">
            {[preview1, preview2, preview3].map((src, i) => (
              <img
                key={i}
                src={src}
                alt={`Prévia da página ${i + 1} do material`}
                loading="lazy"
                width={768}
                height={1024}
                className="w-full rounded-xl border border-slate-200 shadow-sm"
              />
            ))}
          </div>
        </div>
      </section>

      {/* Benefícios */}
      <section className="mx-auto max-w-4xl px-4 py-14">
        <h2 className="text-center text-2xl font-bold sm:text-3xl">O que você recebe</h2>
        <ul className="mt-8 grid gap-3 sm:grid-cols-2">
          {beneficios.map((b) => (
            <li
              key={b}
              className="flex items-start gap-3 rounded-xl border border-slate-200 bg-white p-4 text-sm text-slate-700"
            >
              <Check className="mt-0.5 size-5 shrink-0 text-emerald-600" />
              {b}
            </li>
          ))}
        </ul>
      </section>

      {/* Depoimentos */}
      <section className="border-y border-slate-200/70 bg-white py-14">
        <div className="mx-auto max-w-5xl px-4">
          <p className="text-center text-xs font-bold uppercase tracking-widest text-emerald-700">
            Depoimentos
          </p>
          <h2 className="mt-2 text-center text-2xl font-bold sm:text-3xl">O que os alunos dizem</h2>
          <div className="mt-8 grid gap-4 sm:grid-cols-3">
            {depoimentos.map((d) => (
              <figure key={d.nome} className="rounded-2xl border border-slate-200 bg-[#fffdf7] p-5">
                <Estrelas />
                <blockquote className="mt-3 text-sm leading-relaxed text-slate-700">“{d.texto}”</blockquote>
                <figcaption className="mt-4 text-sm font-semibold">
                  {d.nome}
                  <span className="block text-xs font-normal text-slate-500">{d.papel}</span>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      {/* Oferta */}
      <section id="oferta" className="mx-auto max-w-2xl scroll-mt-8 px-4 py-14">
        <div className="rounded-3xl border-2 border-emerald-600 bg-white p-6 text-center shadow-xl sm:p-10">
          <h2 className="text-2xl font-bold sm:text-3xl">Tudo isso por um valor único</h2>
          <div className="mt-6 space-y-2 text-left">
            {bonus.map((b) => (
              <div key={b.titulo} className="flex items-start gap-3 rounded-xl bg-emerald-50/70 p-3 text-sm">
                <Check className="mt-0.5 size-5 shrink-0 text-emerald-600" />
                <span>
                  <strong>{b.titulo}:</strong> {b.desc}
                </span>
              </div>
            ))}
          </div>
          <p className="mt-8 text-sm text-slate-500">
            De <span className="line-through">R$ 197</span> por apenas
          </p>
          <p className="text-5xl font-extrabold text-emerald-700">R$ 47</p>
          <p className="mt-1 text-sm text-slate-500">pagamento único · acesso imediato</p>
          <div className="mt-6 flex flex-col items-center gap-3">
            <CTA>Comprar com acesso imediato</CTA>
            <p className="flex items-center gap-1.5 text-xs text-slate-500">
              <Lock className="size-3.5" /> Pagamento seguro
            </p>
          </div>
        </div>

        <div className="mt-8 flex items-start gap-4 rounded-2xl border border-slate-200 bg-white p-5">
          <ShieldCheck className="size-10 shrink-0 text-emerald-600" />
          <div>
            <h3 className="font-bold">Garantia de 7 dias</h3>
            <p className="mt-1 text-sm text-slate-600">
              Se não for para você, é só pedir o reembolso dentro de 7 dias e devolvemos todo o valor.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="mx-auto max-w-2xl px-4 pb-16">
        <h2 className="text-center text-2xl font-bold sm:text-3xl">Perguntas frequentes</h2>
        <div className="mt-6 space-y-3">
          {faq.map((item, i) => (
            <div key={item.q} className="rounded-xl border border-slate-200 bg-white">
              <button
                type="button"
                onClick={() => setAberto(aberto === i ? null : i)}
                className="flex w-full items-center justify-between gap-4 px-4 py-4 text-left text-sm font-semibold"
                aria-expanded={aberto === i}
              >
                {item.q}
                <ChevronDown
                  className={`size-4 shrink-0 transition-transform ${aberto === i ? "rotate-180" : ""}`}
                />
              </button>
              {aberto === i && <p className="px-4 pb-4 text-sm text-slate-600">{item.a}</p>}
            </div>
          ))}
        </div>
        <div className="mt-10 flex justify-center">
          <CTA />
        </div>
      </section>

      <footer className="border-t border-slate-200 py-8 text-center text-xs text-slate-500">
        <p>© {new Date().getFullYear()} — Todos os direitos reservados.</p>
      </footer>
    </main>
  );
}

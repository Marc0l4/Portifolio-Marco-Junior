import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Marco Junior — Backend Developer",
};

const LINKS = {
  github: "https://github.com/Marc0l4",
  linkedin: "https://www.linkedin.com/in/marco-junior-7781472a8/",
  email: "mailto:mj991982@gmail.com",
} as const;

const STACK: string[] = [
  "Python",
  "C#",
  "JavaScript",
  "React / Next.js",
  "Node.js",
  "SQL",
  "Supabase",
  "Git",
];

interface LiveProject {
  ref: string;
  title: string;
  desc: string;
  lang: string;
  liveUrl: string;
  repoUrl: string;
}

interface RepoProject {
  ref: string;
  title: string;
  desc: string;
  lang: string;
  url: string;
  featured?: boolean;
}

// Projetos com deploy ao vivo na Vercel — entram como "janela de navegador"
const LIVE_PROJECTS: LiveProject[] = [
  {
    ref: "url-shortener",
    title: "Encurtador de URLs",
    desc: "Encurtador de URLs com contagem de cliques, API REST em Node.js e banco Postgres (Neon).",
    lang: "Node.js",
    liveUrl: "https://url-shortener-0dhz.onrender.com",
    repoUrl: `${LINKS.github}/url-shortener`,
  },
  {
    ref: "dev-memory-react-next-app",
    title: "Jogo da Memória",
    desc: "Jogo da memória com React e Next.js — controle de cartas viradas, pares e pontuação.",
    lang: "Next.js",
    liveUrl: "https://dev-memory-react-next.vercel.app",
    repoUrl: `${LINKS.github}/dev-memory-react-next-app`,
  },
  {
    ref: "devsfood",
    title: "DevsFood",
    desc: "Aplicação de cardápio/delivery construída com React e Next.js.",
    lang: "Next.js",
    liveUrl: "https://devsfood-one.vercel.app",
    repoUrl: `${LINKS.github}/devsfood`,
  },
  {
    ref: "react-next-node-loja-sushi",
    title: "Loja de Sushi",
    desc: "E-commerce full-stack com Next.js no front e Node no back, com carrinho de compras.",
    lang: "Full-stack",
    liveUrl: "https://react-next-node-loja-sushi.vercel.app",
    repoUrl: `${LINKS.github}/react-next-node-loja-sushi`,
  },
  {
    ref: "imc-react-next",
    title: "Calculadora de IMC",
    desc: "Calculadora de Índice de Massa Corporal em React e Next.js.",
    lang: "Next.js",
    liveUrl: "https://imc-react-next.vercel.app",
    repoUrl: `${LINKS.github}/imc-React-Next`,
  },
  {
    ref: "node-react-next-photo-gallery",
    title: "Galeria de Fotos",
    desc: "Galeria de fotos full-stack com upload e listagem de imagens via backend em Node.",
    lang: "Full-stack",
    liveUrl: "https://node-react-next-photo-gallery.vercel.app",
    repoUrl: `${LINKS.github}/node-react-next-photo_gallery`,
  },
];

// Projetos sem deploy — só repositório no GitHub, seguem em formato de log
const REPO_PROJECTS: RepoProject[] = [
  {
    ref: "b2bflow",
    title: "Integração Supabase + Z-API",
    desc: "Desafio técnico de estágio: leitura de contatos no Supabase e envio de mensagens personalizadas via WhatsApp, com arquitetura em camadas.",
    lang: "Python",
    featured: true,
    url: LINKS.github,
  },
  {
    ref: "js-weather",
    title: "Js--weather",
    desc: "Consulta de previsão do tempo em tempo real a partir de uma API pública.",
    lang: "CSS",
    url: `${LINKS.github}/Js--weather`,
  },
  {
    ref: "js-paint",
    title: "Js--paint",
    desc: "Editor de desenho no canvas com seleção de cores e ferramentas.",
    lang: "JavaScript",
    url: `${LINKS.github}/Js--paint`,
  },
  {
    ref: "js-tictactoe",
    title: "Js--tic-tac-toe",
    desc: "Jogo da velha com lógica de vitória e reinício de partida.",
    lang: "JavaScript",
    url: `${LINKS.github}/Js--tic-tac-toe`,
  },
  {
    ref: "js-drums",
    title: "Js-drums",
    desc: "Bateria virtual acionada pelo teclado, com sons por tecla.",
    lang: "HTML",
    url: `${LINKS.github}/Js-drums`,
  },
  {
    ref: "js-clock",
    title: "Js--clock",
    desc: "Relógio digital atualizado em tempo real.",
    lang: "HTML",
    url: `${LINKS.github}/Js--clock`,
  },
  {
    ref: "js-pizzas",
    title: "Js--pizzas",
    desc: "Cardápio interativo de pizzaria com seleção de itens.",
    lang: "CSS",
    url: `${LINKS.github}/Js--pizzas`,
  },
];

const LANG_COLOR: Record<string, string> = {
  Python: "var(--color-teal)",
  JavaScript: "var(--color-amber)",
  CSS: "#6c8cff",
  HTML: "#e8664a",
  "Next.js": "var(--color-paper)",
  "Full-stack": "var(--color-teal)",
  "Node.js": "var(--color-amber)",
};

function hostFromUrl(url: string): string {
  return url.replace(/^https?:\/\//, "");
}

export default function Home() {
  return (
    <main className="mx-auto max-w-[1080px] px-6 pb-24">
      {/* TOPBAR */}
      <header className="sticky top-0 z-10 mb-2 flex items-center justify-between bg-ink/90 py-5 backdrop-blur-sm">
        <span className="font-mono text-sm font-semibold text-amber">
          marco_junior
        </span>
        <nav className="flex gap-3.5 font-mono text-xs text-muted md:gap-[22px] md:text-[13px]">
          <a href="#live" className="transition-colors hover:text-paper">
            projetos
          </a>
          <a href="#stack" className="transition-colors hover:text-paper">
            stack
          </a>
          <a
            href={LINKS.github}
            target="_blank"
            rel="noreferrer"
            className="transition-colors hover:text-paper"
          >
            github
          </a>
          <a
            href={LINKS.linkedin}
            target="_blank"
            rel="noreferrer"
            className="transition-colors hover:text-paper"
          >
            linkedin
          </a>
        </nav>
      </header>

      {/* HERO */}
      <section className="mx-auto max-w-[880px] pt-14 pb-3">
        <p className="mb-3.5 font-mono text-[13px] text-teal">$ whoami</p>
        <h1 className="mb-[18px] font-mono text-[clamp(32px,6vw,52px)] leading-[1.12] font-extrabold tracking-[-0.02em] text-paper">
          Marco Francisco <br />
          de Oliveira Junior
        </h1>
        <p className="mb-5 flex items-center font-mono text-[clamp(16px,2.4vw,19px)] text-amber">
          Desenvolvedor backend em formação
          <span
            aria-hidden="true"
            className="animate-blink ml-1.5 h-[1.1em] w-[9px] bg-amber"
          />
        </p>
        <p className="mb-[34px] max-w-[58ch] text-base text-muted">
          Estudante de tecnologia construindo integrações de dados e
          automações — de consultas SQL a APIs de mensageria — com foco em
          Python, C# e arquitetura de sistemas.
        </p>
        <div className="flex flex-wrap gap-3.5">
          <a
            href="#live"
            className="rounded-md bg-amber px-5 py-3 font-mono text-sm font-semibold text-ink transition hover:-translate-y-0.5"
          >
            Ver projetos
          </a>
          <a
            href={LINKS.linkedin}
            target="_blank"
            rel="noreferrer"
            className="rounded-md border border-line-strong px-5 py-3 font-mono text-sm text-paper transition hover:border-amber hover:text-amber"
          >
            Conectar no LinkedIn
          </a>
        </div>
      </section>

      {/* ABOUT */}
      <section className="mx-auto max-w-[880px] border-t border-line pt-[52px] md:pt-[72px]">
        <p className="mb-3.5 font-mono text-[13px] text-teal">
          $ cat sobre.md
        </p>
        <p className="max-w-[68ch] text-base text-paper">
          Sou estudante de tecnologia no Brasil, com experiência prática
          construindo desde jogos e utilitários em JavaScript até
          integrações backend com bancos de dados e APIs externas. Meu
          trabalho mais recente conecta o Supabase a um serviço de WhatsApp
          para automatizar o envio de mensagens personalizadas — passando
          por leitura de dados, regras de negócio e controle de versão em
          arquitetura em camadas.
        </p>
      </section>

      {/* STACK */}
      <section
        id="stack"
        className="mx-auto max-w-[880px] border-t border-line pt-[52px] md:pt-[72px]"
      >
        <p className="mb-3.5 font-mono text-[13px] text-teal">
          $ cat stack.json
        </p>
        <ul className="m-0 flex list-none flex-wrap gap-2.5 p-0">
          {STACK.map((tech) => (
            <li
              key={tech}
              className="rounded-md border border-line bg-ink-soft px-3.5 py-2 font-mono text-[13px] text-paper"
            >
              {tech}
            </li>
          ))}
        </ul>
      </section>

      {/* LIVE PROJECTS — janelas de navegador com preview ao vivo */}
      <section
        id="live"
        className="border-t border-line pt-[52px] md:pt-[72px]"
      >
        <p className="mb-3.5 font-mono text-[13px] text-teal">
          $ curl --status deployments/*
        </p>
        <div className="grid grid-cols-[repeat(auto-fit,minmax(300px,1fr))] gap-[22px]">
          {LIVE_PROJECTS.map((p) => (
            <article
              key={p.ref}
              className="flex flex-col overflow-hidden rounded-[10px] border border-line bg-ink-soft transition hover:-translate-y-[3px] hover:border-line-strong"
            >
              <div className="flex items-center gap-[7px] border-b border-line bg-ink px-3 py-2.5">
                <span className="h-2 w-2 flex-shrink-0 rounded-full bg-amber" />
                <span className="h-2 w-2 flex-shrink-0 rounded-full bg-teal" />
                <span className="h-2 w-2 flex-shrink-0 rounded-full bg-line-strong" />
                <span className="ml-2 overflow-hidden text-ellipsis whitespace-nowrap font-mono text-[11.5px] text-muted">
                  {hostFromUrl(p.liveUrl)}
                </span>
              </div>
              <div className="relative aspect-[16/10] overflow-hidden bg-ink">
                <iframe
                  src={p.liveUrl}
                  title={p.title}
                  loading="lazy"
                  tabIndex={-1}
                  className="pointer-events-none absolute top-0 left-0 h-[250%] w-[250%] origin-top-left scale-[0.4] border-0"
                />
                <a
                  href={p.liveUrl}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={`Abrir ${p.title} em nova aba`}
                  className="absolute inset-0 bg-transparent transition-colors hover:bg-amber/[0.06]"
                />
              </div>
              <div className="p-[18px]">
                <div className="mb-2 flex items-center gap-3.5 font-mono text-xs">
                  <span className="text-muted">#{p.ref}</span>
                  <span style={{ color: LANG_COLOR[p.lang] ?? "var(--color-muted)" }}>
                    ● {p.lang}
                  </span>
                </div>
                <h3 className="mb-1.5 font-mono text-base font-semibold text-paper">
                  {p.title}
                </h3>
                <p className="max-w-[62ch] text-[14.5px] text-muted">
                  {p.desc}
                </p>
                <div className="mt-3.5 flex gap-4 font-mono text-[12.5px]">
                  <a
                    href={p.liveUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="border-b border-transparent text-teal hover:border-teal"
                  >
                    abrir projeto ↗
                  </a>
                  <a
                    href={p.repoUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="border-b border-transparent text-teal hover:border-teal"
                  >
                    código-fonte
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* REPO PROJECTS — sem deploy, estilo git log */}
      <section className="mx-auto max-w-[880px] border-t border-line pt-[52px] md:pt-[72px]">
        <p className="mb-3.5 font-mono text-[13px] text-teal">
          $ git log --oneline --stat
        </p>
        <ol className="m-0 list-none p-0">
          {REPO_PROJECTS.map((p) => (
            <li key={p.ref} className="border-b border-line first:border-t">
              <a
                href={p.url}
                target="_blank"
                rel="noreferrer"
                className="block px-1 py-5 text-inherit no-underline transition hover:bg-ink-soft hover:pl-3"
              >
                <div className="mb-2 flex items-center gap-3.5 font-mono text-xs">
                  <span
                    className={p.featured ? "text-amber" : "text-muted"}
                  >
                    #{p.ref}
                  </span>
                  <span style={{ color: LANG_COLOR[p.lang] ?? "var(--color-muted)" }}>
                    ● {p.lang}
                  </span>
                </div>
                <div className="mb-1.5 font-mono text-[17px] font-semibold text-paper">
                  {p.title}
                </div>
                <div className="max-w-[62ch] text-[14.5px] text-muted">
                  {p.desc}
                </div>
              </a>
            </li>
          ))}
        </ol>
      </section>

      {/* CONTACT */}
      <footer className="mx-auto max-w-[880px] border-t border-line pt-[52px] md:pt-[72px]">
        <p className="mb-3.5 font-mono text-[13px] text-teal">
          $ echo contato
        </p>
        <div className="mb-7 flex gap-5 font-mono text-[15px]">
          <a
            href={LINKS.email}
            className="border-b border-line-strong pb-0.5 text-paper transition-colors hover:border-amber hover:text-amber"
          >
            email
          </a>
          <a
            href={LINKS.github}
            target="_blank"
            rel="noreferrer"
            className="border-b border-line-strong pb-0.5 text-paper transition-colors hover:border-amber hover:text-amber"
          >
            github
          </a>
          <a
            href={LINKS.linkedin}
            target="_blank"
            rel="noreferrer"
            className="border-b border-line-strong pb-0.5 text-paper transition-colors hover:border-amber hover:text-amber"
          >
            linkedin
          </a>
        </div>
        <p className="font-mono text-xs text-muted">
          Signed-off-by: Marco Junior
        </p>
      </footer>
    </main>
  );
}

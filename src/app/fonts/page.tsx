import {
  IBM_Plex_Mono,
  IBM_Plex_Serif,
  JetBrains_Mono,
  Literata,
  Newsreader,
  Source_Serif_4,
} from "next/font/google";

const literata = Literata({ subsets: ["latin"] });
const newsreader = Newsreader({ subsets: ["latin"] });
const sourceSerif = Source_Serif_4({ subsets: ["latin"] });
const plexSerif = IBM_Plex_Serif({ subsets: ["latin"], weight: ["400", "600"] });

const jetbrainsMono = JetBrains_Mono({ subsets: ["latin"] });
const plexMono = IBM_Plex_Mono({ subsets: ["latin"], weight: ["400", "600"] });

const HEADING = "Building things for the web";

const PROSE = `I'm André, a software engineer. I care about the boring parts — the ones that decide whether a system still works at 3am. Most of what I build lives behind an interface someone else takes for granted, and that's the point. Typography is the same kind of problem: it disappears when it works.`;

const CODE = `const theme = { bg: "#03060d", fg: "#c9d4e3" };

export const useTheme = (mode) => {
  if (mode !== "light" && ratio >= 4.5) return theme;
};`;

const serifs = [
  {
    name: "Literata",
    className: literata.className,
    note: "Google's ebook typeface. Sturdiest on dark backgrounds.",
  },
  {
    name: "Newsreader",
    className: newsreader.className,
    note: "Editorial, optical sizing. More personality, more magazine.",
  },
  {
    name: "Source Serif 4",
    className: sourceSerif.className,
    note: "Screen-first and neutral. Safest, least character.",
  },
  {
    name: "IBM Plex Serif",
    className: plexSerif.className,
    note: "Designed to pair with IBM Plex Mono.",
  },
];

const monos = [
  {
    name: "Fira Code",
    className: "font-mono",
    note: "Current pick. Wide, even rhythm.",
  },
  {
    name: "JetBrains Mono",
    className: jetbrainsMono.className,
    note: "Taller x-height. Most legible at small sizes.",
  },
  {
    name: "IBM Plex Mono",
    className: plexMono.className,
    note: "Warmer, less geometric.",
  },
];

function Label({ name, note }: { name: string; note: string }) {
  return (
    <div className="mb-4 border-b border-border pb-3 font-mono">
      <div className="text-sm text-accent">{name}</div>
      <div className="mt-1 text-xs text-muted">{note}</div>
    </div>
  );
}

export default function FontsPage() {
  return (
    <main className="mx-auto w-full max-w-6xl px-6 py-16">
      <header className="mb-14 font-mono">
        <h1 className="text-accent">Type specimen</h1>
        <p className="mt-2 max-w-2xl text-muted">
          Same text, same size, same color. Only the typeface changes. Body
          serifs first, then monos for code.
        </p>
      </header>

      <h2 className="mb-6 font-mono text-muted">Body serifs</h2>
      <div className="grid gap-10 md:grid-cols-2">
        {serifs.map((font) => (
          <section key={font.name} className="rounded-sm bg-surface p-6">
            <Label name={font.name} note={font.note} />
            <h3 className={`${font.className} text-2xl`}>{HEADING}</h3>
            <p className={`${font.className} mt-4 text-lg leading-relaxed`}>
              {PROSE}
            </p>
            <p className={`${font.className} mt-4 text-sm text-muted`}>
              {PROSE}
            </p>
          </section>
        ))}
      </div>

      <h2 className="mt-16 mb-6 font-mono text-muted">Code monos</h2>
      <div className="grid gap-10 md:grid-cols-3">
        {monos.map((font) => (
          <section key={font.name} className="rounded-sm bg-surface p-6">
            <Label name={font.name} note={font.note} />
            <pre className={`${font.className} overflow-x-auto text-sm`}>
              {CODE}
            </pre>
            <p className={`${font.className} mt-6 text-sm text-muted`}>
              Il1 O0 {"{}"} [] &lt;&gt; =&gt; != &gt;= --- 8B6G
            </p>
          </section>
        ))}
      </div>

      <h2 className="mt-16 mb-6 font-mono text-muted">
        Pairings — serif prose over mono code
      </h2>
      <div className="grid gap-10 md:grid-cols-2">
        {serifs.map((font) => (
          <section key={font.name} className="rounded-sm bg-surface p-6">
            <Label name={`${font.name} + Fira Code`} note="" />
            <p className={`${font.className} text-lg leading-relaxed`}>
              {PROSE}
            </p>
            <pre className="mt-4 overflow-x-auto font-mono text-sm text-muted">
              {CODE}
            </pre>
          </section>
        ))}
      </div>
    </main>
  );
}

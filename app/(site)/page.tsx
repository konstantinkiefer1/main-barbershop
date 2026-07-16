import Image from "next/image";
import Link from "next/link";
import Reveal from "@/components/reveal";
import { BOOKSY_URL, NAV_LINKS } from "@/lib/site";

export default function Home() {
  return (
    <div className="page-enter">
      {/* Cover — full-bleed duotone storefront under a protection gradient */}
      <section className="relative flex min-h-[min(86vh,760px)] flex-col justify-end overflow-hidden bg-ink text-paper">
        <Image
          src="/ladenfront-2.jpeg"
          alt=""
          fill
          preload
          sizes="100vw"
          className="duotone-hero object-cover"
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(180deg, rgba(21,17,13,0.55) 0%, rgba(21,17,13,0.2) 35%, rgba(21,17,13,0.85) 100%)",
          }}
        />
        <div className="relative mx-auto w-full max-w-7xl px-6 pb-10 pt-32 sm:px-10 sm:pb-16">
          <Reveal>
            <p className="rise kicker mb-6 text-gold-bright">
              Saarbrücken — Bahnhofstraße 40
            </p>
            <h1 className="rise display max-w-[14ch] text-6xl sm:text-8xl lg:text-9xl">
              Main Barbershop
            </h1>
            <div className="rise mt-6 flex flex-wrap items-end justify-between gap-8">
              <p className="serif-accent max-w-[26ch] text-2xl leading-snug text-paper/60 sm:text-3xl">
                Präzision, Stil und Handwerk – mitten in Saarbrücken.
              </p>
              <div className="flex flex-wrap items-center gap-4">
                <a
                  href={BOOKSY_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-3 border border-gold bg-gold px-9 py-4 text-[0.7rem] font-semibold uppercase tracking-[0.24em] text-ink transition-colors duration-300 hover:border-paper hover:bg-paper"
                >
                  Termin buchen <span aria-hidden>→</span>
                </a>
                <Link
                  href="/services"
                  className="link-reveal text-[0.72rem] font-semibold uppercase tracking-[0.2em] transition-colors hover:text-gold-bright"
                >
                  Services
                </Link>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Index — the editorial table of contents */}
      <section className="bg-ink py-20 text-paper sm:py-32">
        <div className="mx-auto max-w-7xl px-6 sm:px-10">
          <Reveal className="mb-10 flex items-baseline justify-between">
            <span className="rise kicker text-gold-bright">Das Haus</span>
            <span className="rise serif-accent text-sm tabular-nums text-paper/40">
              N° 01 — 03
            </span>
          </Reveal>
          <div className="h-px bg-paper/15" />
          {NAV_LINKS.map((link, i) => (
            <Reveal key={link.href}>
              <Link
                href={link.href}
                className="rise group grid grid-cols-[auto_1fr_auto] items-center gap-6 border-b border-paper/15 py-7 sm:gap-12 sm:py-10"
              >
                <span className="display text-2xl tabular-nums text-gold sm:text-3xl">
                  0{i + 1}
                </span>
                <span className="display text-4xl transition-colors duration-300 group-hover:text-gold-bright sm:text-6xl">
                  {link.label}
                </span>
                <span
                  aria-hidden
                  className="text-2xl text-gold transition-transform duration-300 group-hover:translate-x-1.5"
                >
                  →
                </span>
              </Link>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Pull-quote band */}
      <section className="bg-ink pb-24 pt-4 text-center text-paper sm:pb-36">
        <div className="mx-auto max-w-3xl px-6">
          <Reveal>
            <p className="rise kicker mb-8 block text-gold-bright">
              Die Philosophie
            </p>
            <p className="rise serif-accent text-3xl leading-tight sm:text-5xl">
              „Ein guter Schnitt braucht <em>Zeit</em> — und ein{" "}
              <em>geschultes</em> Auge.“
            </p>
            <div className="rise mx-auto mt-10 h-px w-14 bg-gold" />
          </Reveal>
        </div>
      </section>
    </div>
  );
}

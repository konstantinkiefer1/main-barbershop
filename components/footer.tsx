import Link from "next/link";
import { ADDRESS, HOURS, NAV_LINKS, PHONE, SITE_NAME } from "@/lib/site";

export default function Footer() {
  return (
    <footer className="bg-ink pt-16 text-paper sm:pt-24">
      <div className="mx-auto max-w-7xl px-6 sm:px-10">
        <div className="grid gap-12 pb-16 md:grid-cols-[1.4fr_1fr_1fr]">
          <div>
            <p className="display text-2xl leading-none">
              Main
              <span className="serif-accent ml-1 normal-case text-gold-bright">
                barbershop
              </span>
            </p>
            <p className="serif-accent mt-6 max-w-[22rem] text-[0.9rem] leading-relaxed text-paper/40">
              Präzision, Stil und Handwerk – mitten in Saarbrücken.
            </p>
            <div className="mt-6 h-px w-14 bg-gold" />
            <p className="mt-6 text-sm leading-relaxed text-paper/60">
              {ADDRESS.street}
              <br />
              {ADDRESS.city}
            </p>
            <a
              href={PHONE.href}
              className="mt-1 inline-block text-sm text-paper/60 transition-colors hover:text-gold-bright"
            >
              {PHONE.display}
            </a>
          </div>

          <div>
            <p className="kicker text-gold-bright">Öffnungszeiten</p>
            <ul className="mt-6 space-y-3 text-sm text-paper/60">
              {HOURS.map((entry) => (
                <li key={entry.days} className="flex justify-between gap-6">
                  <span>{entry.days}</span>
                  <span className="text-paper/40">{entry.time}</span>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="kicker text-gold-bright">Navigation</p>
            <ul className="mt-6 space-y-3 text-sm">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-paper/60 transition-colors hover:text-gold-bright"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  href="/impressum"
                  className="text-paper/40 transition-colors hover:text-gold-bright"
                >
                  Impressum
                </Link>
              </li>
              <li>
                <Link
                  href="/datenschutz"
                  className="text-paper/40 transition-colors hover:text-gold-bright"
                >
                  Datenschutzerklärung
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="h-px bg-paper/15" />
        <div className="flex flex-wrap items-center justify-between gap-4 py-7">
          <p className="text-[0.7rem] uppercase tracking-[0.16em] text-paper/40">
            © {new Date().getFullYear()} {SITE_NAME}
          </p>
          <p className="text-[0.7rem] uppercase tracking-[0.16em] text-paper/40">
            Saarbrücken — Bahnhofstraße 40
          </p>
        </div>
      </div>
    </footer>
  );
}

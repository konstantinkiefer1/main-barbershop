import Image from "next/image";
import Link from "next/link";
import {
  ADDRESS,
  BOOKSY_SHORT_URL,
  HOURS,
  INSTAGRAM_URL,
  NAV_LINKS,
  PHONE,
  SITE_NAME,
} from "@/lib/site";

function InstagramIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden className={className}>
      <rect
        x="3"
        y="3"
        width="18"
        height="18"
        rx="5"
        stroke="currentColor"
        strokeWidth="1.5"
      />
      <circle cx="12" cy="12" r="4" stroke="currentColor" strokeWidth="1.5" />
      <circle cx="17.4" cy="6.6" r="1.1" fill="currentColor" />
    </svg>
  );
}

function CalendarIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden className={className}>
      <rect
        x="3"
        y="5"
        width="18"
        height="16"
        rx="3"
        stroke="currentColor"
        strokeWidth="1.5"
      />
      <path
        d="M3 10h18M8 3v4M16 3v4M9.5 15.5l1.8 1.8 3.4-3.6"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default function Footer() {
  return (
    <footer className="bg-ink pt-16 text-paper sm:pt-24">
      <div className="mx-auto max-w-7xl px-6 sm:px-10">
        <div className="grid gap-12 pb-16 md:grid-cols-[1.3fr_1fr_1fr] lg:grid-cols-[1.3fr_1fr_1fr_auto]">
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

            <ul className="mt-7 flex flex-wrap gap-3">
              <li>
                <a
                  href={INSTAGRAM_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-2.5 rounded-full border border-paper/20 px-4 py-2 text-[0.7rem] uppercase tracking-[0.16em] text-paper/60 transition-colors hover:border-gold hover:text-gold-bright"
                >
                  <InstagramIcon className="h-4 w-4" />
                  Instagram
                </a>
              </li>
              <li>
                <a
                  href={BOOKSY_SHORT_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-2.5 rounded-full border border-paper/20 px-4 py-2 text-[0.7rem] uppercase tracking-[0.16em] text-paper/60 transition-colors hover:border-gold hover:text-gold-bright"
                >
                  <CalendarIcon className="h-4 w-4" />
                  Booksy
                </a>
              </li>
            </ul>
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

          <div className="hidden lg:block">
            <p className="kicker text-gold-bright">Termin scannen</p>
            <a
              href={BOOKSY_SHORT_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-block rounded-sm bg-paper-card p-3 transition-transform hover:-translate-y-0.5"
            >
              <Image
                src="/booksy-qr.svg"
                alt="QR-Code zur Online-Terminbuchung bei Main Barbershop"
                width={132}
                height={132}
                unoptimized
                className="h-[132px] w-[132px]"
              />
            </a>
            <p className="mt-4 max-w-[9.5rem] text-[0.7rem] leading-relaxed text-paper/40">
              Kamera öffnen, scannen, direkt bei Booksy buchen.
            </p>
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

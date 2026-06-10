import Image from "next/image";
import Link from "next/link";
import { ADDRESS, HOURS, PHONE, SITE_NAME } from "@/lib/site";

export default function Footer() {
  return (
    <footer className="bg-ink text-paper">
      <div className="mx-auto max-w-6xl px-6 py-16">
        <div className="grid gap-12 md:grid-cols-3">
          <div>
            <Image
              src="/logo3.jpeg"
              alt="Main Barbershop"
              width={1024}
              height={1024}
              className="h-24 w-24 mix-blend-screen"
            />
            <div className="mt-6 h-px w-10 bg-gold" />
            <p className="mt-6 text-sm leading-relaxed text-paper/70">
              {ADDRESS.street}
              <br />
              {ADDRESS.city}
            </p>
            <a
              href={PHONE.href}
              className="mt-2 inline-block text-sm text-paper/70 transition-colors hover:text-gold"
            >
              {PHONE.display}
            </a>
          </div>

          <div>
            <p className="text-xs uppercase tracking-[0.25em] text-paper/50">
              Öffnungszeiten
            </p>
            <ul className="mt-6 space-y-3 text-sm text-paper/70">
              {HOURS.map((entry) => (
                <li key={entry.days} className="flex justify-between gap-6">
                  <span>{entry.days}</span>
                  <span>{entry.time}</span>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="text-xs uppercase tracking-[0.25em] text-paper/50">
              Rechtliches
            </p>
            <ul className="mt-6 space-y-3 text-sm">
              <li>
                <Link
                  href="/impressum"
                  className="text-paper/70 transition-colors hover:text-gold"
                >
                  Impressum
                </Link>
              </li>
              <li>
                <Link
                  href="/datenschutz"
                  className="text-paper/70 transition-colors hover:text-gold"
                >
                  Datenschutzerklärung
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-16 border-t border-paper/10 pt-6">
          <p className="text-xs text-paper/40">
            © {new Date().getFullYear()} {SITE_NAME}. Alle Rechte vorbehalten.
          </p>
        </div>
      </div>
    </footer>
  );
}

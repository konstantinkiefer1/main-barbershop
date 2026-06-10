import type { Metadata } from "next";
import Image from "next/image";
import { ADDRESS, BOOKSY_URL, HOURS, PHONE } from "@/lib/site";

export const metadata: Metadata = {
  title: "Kontakt",
  description:
    "Main Barbershop Saarbrücken – Bahnhofstraße 40, 66111 Saarbrücken. Öffnungszeiten, Anfahrt und Terminbuchung.",
};

const MAPS_EMBED_URL =
  "https://www.google.com/maps?q=Main%20Barbershop%2C%20Bahnhofstra%C3%9Fe%2040%2C%2066111%20Saarbr%C3%BCcken&output=embed";

export default function ContactPage() {
  return (
    <>
      {/* Intro */}
      <section className="bg-ink px-6 py-20 text-paper sm:py-28">
        <div className="mx-auto max-w-6xl">
          <p className="text-xs uppercase tracking-[0.35em] text-paper/50">
            So finden Sie uns
          </p>
          <h1 className="mt-6 font-display text-5xl uppercase sm:text-7xl">
            Kontakt
          </h1>
          <div className="mt-8 h-px w-16 bg-gold" />
        </div>
      </section>

      {/* Info + storefront */}
      <section className="px-6 py-20 sm:py-24">
        <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-2">
          <div className="flex flex-col justify-center">
            <div className="border-t border-ink/10 py-6">
              <p className="text-xs uppercase tracking-[0.25em] text-ink/40">
                Adresse
              </p>
              <p className="mt-3 text-lg">
                {ADDRESS.street}
                <br />
                {ADDRESS.city}
              </p>
            </div>
            <div className="border-t border-ink/10 py-6">
              <p className="text-xs uppercase tracking-[0.25em] text-ink/40">
                Telefon
              </p>
              <a
                href={PHONE.href}
                className="mt-3 inline-block text-lg transition-colors hover:text-gold"
              >
                {PHONE.display}
              </a>
            </div>
            <div className="border-y border-ink/10 py-6">
              <p className="text-xs uppercase tracking-[0.25em] text-ink/40">
                Öffnungszeiten
              </p>
              <ul className="mt-3 space-y-1 text-lg">
                {HOURS.map((entry) => (
                  <li key={entry.days} className="flex justify-between gap-6">
                    <span>{entry.days}</span>
                    <span className="text-ink/60">{entry.time}</span>
                  </li>
                ))}
              </ul>
            </div>
            <a
              href={BOOKSY_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-10 inline-block self-start border border-ink px-10 py-4 text-sm uppercase tracking-[0.25em] transition-colors hover:border-gold hover:bg-gold"
            >
              Jetzt Termin buchen
            </a>
            <p className="mt-4 text-xs text-ink/40">
              Bezahlung vor Ort – bar oder mit Karte.
            </p>
          </div>

          <div className="relative aspect-square w-full overflow-hidden lg:justify-self-end lg:w-[28rem]">
            <Image
              src="/ladenfront.jpeg"
              alt="Ladenfront des Main Barbershop in der Bahnhofstraße"
              fill
              sizes="(max-width: 1024px) 100vw, 448px"
              className="object-cover"
            />
          </div>
        </div>
      </section>

      {/* Map */}
      <section className="bg-ink px-6 py-20 sm:py-24">
        <div className="mx-auto max-w-6xl">
          <p className="text-xs uppercase tracking-[0.35em] text-paper/50">
            Anfahrt
          </p>
          <div className="mt-8 h-px w-16 bg-gold" />
          <div className="mt-10 aspect-[4/3] w-full sm:aspect-[16/9]">
            <iframe
              src={MAPS_EMBED_URL}
              title="Google Maps – Main Barbershop, Bahnhofstraße 40, 66111 Saarbrücken"
              className="h-full w-full border-0 grayscale"
              loading="lazy"
              allowFullScreen
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </section>
    </>
  );
}

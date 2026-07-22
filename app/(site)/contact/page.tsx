import type { Metadata } from "next";
import Image from "next/image";
import PageMasthead from "@/components/page-masthead";
import Reveal from "@/components/reveal";
import BookingButton from "@/components/booking-button";
import { ADDRESS, HOURS, PHONE } from "@/lib/site";

export const metadata: Metadata = {
  title: "Kontakt",
  description:
    "Main Barbershop Saarbrücken – Bahnhofstraße 40, 66111 Saarbrücken. Öffnungszeiten, Anfahrt und Terminbuchung.",
};

const MAPS_EMBED_URL =
  "https://www.google.com/maps?q=Main%20Barbershop%2C%20Bahnhofstra%C3%9Fe%2040%2C%2066111%20Saarbr%C3%BCcken&output=embed";

export default function ContactPage() {
  return (
    <div className="page-enter">
      <PageMasthead
        folio="N° 04"
        kicker="So finden Sie uns"
        title="Kontakt"
        lead="Mitten in Saarbrücken – nur wenige Gehminuten vom Hauptbahnhof."
      />

      {/* Numbered details + storefront figure */}
      <section className="pb-20 sm:pb-28">
        <div className="mx-auto grid max-w-7xl items-start gap-12 px-6 sm:px-10 lg:grid-cols-2 lg:gap-20">
          <Reveal>
            <div className="rise">
              <div className="grid grid-cols-[auto_1fr] items-baseline gap-6 border-t border-ink/15 py-6">
                <span className="display text-base tabular-nums text-gold">
                  01
                </span>
                <div>
                  <p className="kicker text-ink-mute">Adresse</p>
                  <p className="display mt-2 text-xl normal-case tracking-normal sm:text-2xl !leading-normal">
                    {ADDRESS.street}
                    <br />
                    {ADDRESS.city}
                  </p>
                </div>
              </div>
              <div className="grid grid-cols-[auto_1fr] items-baseline gap-6 border-t border-ink/15 py-6">
                <span className="display text-base tabular-nums text-gold">
                  02
                </span>
                <div>
                  <p className="kicker text-ink-mute">Telefon</p>
                  <a
                    href={PHONE.href}
                    className="display mt-2 inline-block text-xl normal-case tracking-normal transition-colors hover:text-gold sm:text-2xl"
                  >
                    {PHONE.display}
                  </a>
                </div>
              </div>
              <div className="grid grid-cols-[auto_1fr] items-baseline gap-6 border-y border-ink/15 py-6">
                <span className="display text-base tabular-nums text-gold">
                  03
                </span>
                <div>
                  <p className="kicker text-ink-mute">Öffnungszeiten</p>
                  <ul className="mt-3 space-y-2">
                    {HOURS.map((entry) => (
                      <li
                        key={entry.days}
                        className="flex justify-between gap-6 text-[0.95rem] text-ink-soft"
                      >
                        <span>{entry.days}</span>
                        <span className="text-ink-mute">{entry.time}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <BookingButton className="mt-10 inline-flex items-center gap-3 border border-gold bg-gold px-9 py-4 text-[0.7rem] font-semibold uppercase tracking-[0.24em] text-paper transition-colors duration-300 hover:border-ink hover:bg-ink">
                Jetzt Termin buchen <span aria-hidden>→</span>
              </BookingButton>
              <p className="serif-accent mt-4 text-[0.85rem] text-ink-mute">
                Bezahlung vor Ort – bar oder mit Karte.
              </p>
            </div>
          </Reveal>

          <Reveal>
            <figure className="rise">
              <div className="figure-zoom relative aspect-[4/5] overflow-hidden bg-paper-deep">
                <Image
                  src="/barbershop.jpg"
                  alt="Ladenfront des Main Barbershop in der Bahnhofstraße"
                  fill
                  sizes="(max-width: 1024px) 100vw, 600px"
                  className=" object-cover object-top"
                />
              </div>
              <figcaption className="serif-accent mt-3 flex justify-between text-[0.9rem] text-ink-mute">
                <span>Bahnhofstraße 40</span>
                <span className="tabular-nums">Fig. 03</span>
              </figcaption>
            </figure>
          </Reveal>
        </div>
      </section>

      {/* Map — dark band */}
      <section className="bg-ink py-16 text-paper sm:py-24">
        <div className="mx-auto max-w-7xl px-6 sm:px-10">
          <Reveal className="mb-8 flex items-baseline justify-between">
            <span className="rise kicker text-gold-bright">Anfahrt</span>
            <span className="rise serif-accent text-sm text-paper/40">
              66111 Saarbrücken
            </span>
          </Reveal>
          <Reveal>
            <div className="rise aspect-[4/3] w-full border border-paper/15 sm:aspect-[21/9]">
              <iframe
                src={MAPS_EMBED_URL}
                title="Google Maps – Main Barbershop, Bahnhofstraße 40, 66111 Saarbrücken"
                className="h-full w-full border-0 brightness-90 contrast-110 grayscale"
                loading="lazy"
                allowFullScreen
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </Reveal>
        </div>
      </section>
    </div>
  );
}

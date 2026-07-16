import type { Metadata } from "next";
import Image from "next/image";
import Faq from "@/components/faq";
import PageMasthead from "@/components/page-masthead";
import Reveal from "@/components/reveal";
import { BOOKSY_URL, SERVICES } from "@/lib/site";

export const metadata: Metadata = {
  title: "Services & Preise",
  description:
    "Alle Leistungen und Preise im Main Barbershop Saarbrücken – Haarschnitt, Bart, Augenbrauen und Komplettpaket.",
};

const FAQ_ITEMS = [
  {
    question: "Brauche ich einen Termin?",
    answer:
      "Wir empfehlen, einen Termin über Booksy zu buchen – so vermeiden Sie Wartezeiten. Spontane Besuche sind möglich, wenn ein Platz frei ist.",
  },
  {
    question: "Welche Zahlungsmethoden werden akzeptiert?",
    answer:
      "Sie können bei uns bar oder mit Karte bezahlen. Eine Online-Zahlung ist nicht möglich – bezahlt wird direkt vor Ort.",
  },
  {
    question: "Wie lange dauert ein Haarschnitt?",
    answer:
      "Ein Herrenhaarschnitt dauert in der Regel 30 bis 45 Minuten. Für das Komplettpaket sollten Sie etwa eine Stunde einplanen.",
  },
  {
    question: "Schneidet ihr auch Kinderhaare?",
    answer:
      "Ja, wir bieten Kinderhaarschnitte für 17 € an – geduldig, sorgfältig und mit viel Erfahrung.",
  },
  {
    question: "Wie kann ich einen Termin verschieben oder absagen?",
    answer:
      "Termine können Sie direkt über Booksy verwalten. Bitte sagen Sie rechtzeitig ab, damit der Platz neu vergeben werden kann.",
  },
  {
    question: "Wo finde ich euch?",
    answer:
      "Mitten in Saarbrücken: Bahnhofstraße 40, 66111 Saarbrücken – nur wenige Gehminuten vom Hauptbahnhof entfernt.",
  },
];

export default function ServicesPage() {
  return (
    <div className="page-enter">
      <PageMasthead
        folio="N° 01"
        kicker="Leistungen & Preise"
        title="Services"
        lead="Eine kleine, klare Karte. Jeder Schnitt präzise auf Sie abgestimmt."
      />

      {/* Numbered price list + sticky figure */}
      <section className="pb-20 sm:pb-28">
        <div className="mx-auto grid max-w-7xl items-start gap-12 px-6 sm:px-10 lg:grid-cols-[1.7fr_1fr] lg:gap-20">
          <ul>
            {SERVICES.map((service, i) => (
              <Reveal key={service.name}>
                <li className="rise grid grid-cols-[auto_1fr_auto] items-baseline gap-5 border-t border-ink/15 py-7 sm:gap-8 sm:py-9">
                  <span className="display text-lg tabular-nums text-gold sm:text-2xl">
                    0{i + 1}
                  </span>
                  <div>
                    <h2 className="display text-2xl sm:text-3xl">
                      {service.name}
                    </h2>
                    <p className="serif-accent mt-2 max-w-[44ch] text-[0.9rem] text-ink-mute">
                      {service.description}
                    </p>
                  </div>
                  <span className="display text-2xl text-gold sm:text-4xl">
                    {service.price.replace(" €", "")}
                    <span className="serif-accent text-[0.6em]"> €</span>
                  </span>
                </li>
              </Reveal>
            ))}
            <li aria-hidden className="border-t border-ink/15" />
          </ul>

          <Reveal className="hidden lg:block">
            <div className="rise sticky top-24">
              <figure>
                <div className="figure-zoom relative aspect-[4/5] overflow-hidden bg-paper-deep">
                  <Image
                    src="/haarschnitt1.jpeg"
                    alt="Frischer Haarschnitt im Main Barbershop"
                    fill
                    sizes="(max-width: 1024px) 100vw, 400px"
                    className="duotone object-cover"
                  />
                </div>
                <figcaption className="serif-accent mt-3 flex justify-between text-[0.9rem] text-ink-mute">
                  <span>Fade &amp; Kontur</span>
                  <span className="tabular-nums">Fig. 02</span>
                </figcaption>
              </figure>
              <a
                href={BOOKSY_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-7 flex items-center justify-center gap-3 border border-ink px-9 py-4 text-[0.7rem] font-semibold uppercase tracking-[0.24em] transition-colors duration-300 hover:bg-ink hover:text-paper"
              >
                Termin buchen <span aria-hidden>→</span>
              </a>
            </div>
          </Reveal>

          {/* Mobile CTA — sticky rail above is desktop-only */}
          <a
            href={BOOKSY_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-3 border border-ink px-9 py-4 text-[0.7rem] font-semibold uppercase tracking-[0.24em] transition-colors duration-300 hover:bg-ink hover:text-paper lg:hidden"
          >
            Jetzt Termin buchen <span aria-hidden>→</span>
          </a>
        </div>
      </section>

      {/* FAQ — dark band */}
      <section className="bg-ink py-20 text-paper sm:py-32">
        <div className="mx-auto max-w-3xl px-6">
          <Reveal className="mb-10 flex items-baseline justify-between">
            <span className="rise kicker text-gold-bright">Gut zu wissen</span>
            <span className="rise display text-3xl sm:text-5xl">Fragen</span>
          </Reveal>
          <Faq items={FAQ_ITEMS} />
          <a
            href={BOOKSY_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-14 inline-flex items-center gap-3 border border-gold bg-gold px-9 py-4 text-[0.7rem] font-semibold uppercase tracking-[0.24em] text-ink transition-colors duration-300 hover:border-paper hover:bg-paper"
          >
            Jetzt Termin buchen <span aria-hidden>→</span>
          </a>
        </div>
      </section>
    </div>
  );
}

import type { Metadata } from "next";
import Image from "next/image";
import { BOOKSY_URL, SERVICES } from "@/lib/site";

export const metadata: Metadata = {
  title: "Services & Preise",
  description:
    "Alle Leistungen und Preise im Main Barbershop Saarbrücken – Haarschnitt, Bart, Augenbrauen und Komplettpaket.",
};

const FAQ = [
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
    <>
      {/* Intro */}
      <section className="bg-ink px-6 py-20 text-paper sm:py-28">
        <div className="mx-auto max-w-6xl">
          <p className="text-xs uppercase tracking-[0.35em] text-paper/50">
            Leistungen & Preise
          </p>
          <h1 className="mt-6 font-display text-5xl uppercase sm:text-7xl">
            Services
          </h1>
          <div className="mt-8 h-px w-16 bg-gold" />
        </div>
      </section>

      {/* Price list */}
      <section className="px-6 py-20 sm:py-24">
        <div className="mx-auto grid max-w-6xl gap-16 lg:grid-cols-[1fr_auto]">
          <ul>
            {SERVICES.map((service) => (
              <li
                key={service.name}
                className="border-t border-ink/10 py-8 last:border-b"
              >
                <div className="flex items-baseline justify-between gap-6">
                  <h2 className="font-display text-2xl uppercase sm:text-3xl">
                    {service.name}
                  </h2>
                  <span className="font-display text-2xl text-gold sm:text-3xl">
                    {service.price}
                  </span>
                </div>
                <p className="mt-2 max-w-md text-sm text-ink/60">
                  {service.description}
                </p>
              </li>
            ))}
          </ul>

          <div className="hidden lg:block">
            <div className="sticky top-28 w-72">
              <div className="relative aspect-square overflow-hidden">
                <Image
                  src="/haarschnitt1.jpeg"
                  alt="Frischer Haarschnitt im Main Barbershop"
                  fill
                  sizes="288px"
                  className="object-cover"
                />
              </div>
              <a
                href={BOOKSY_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 block border border-ink px-6 py-4 text-center text-xs uppercase tracking-[0.25em] transition-colors hover:border-gold hover:bg-gold hover:text-ink"
              >
                Jetzt Termin buchen
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-ink px-6 py-20 text-paper sm:py-24">
        <div className="mx-auto max-w-3xl">
          <p className="text-xs uppercase tracking-[0.35em] text-paper/50">
            Gut zu wissen
          </p>
          <h2 className="mt-6 font-display text-4xl uppercase sm:text-5xl">
            Häufige Fragen
          </h2>
          <div className="mt-8 h-px w-16 bg-gold" />

          <div className="mt-12">
            {FAQ.map((item) => (
              <details
                key={item.question}
                className="group border-t border-paper/10 last:border-b"
              >
                <summary className="flex cursor-pointer list-none items-center justify-between gap-6 py-6 text-lg [&::-webkit-details-marker]:hidden">
                  {item.question}
                  <span className="text-gold transition-transform duration-200 group-open:rotate-45">
                    +
                  </span>
                </summary>
                <p className="pb-6 text-sm leading-relaxed text-paper/60">
                  {item.answer}
                </p>
              </details>
            ))}
          </div>

          <a
            href={BOOKSY_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-14 inline-block border border-gold px-10 py-4 text-sm uppercase tracking-[0.25em] text-gold transition-colors hover:bg-gold hover:text-ink"
          >
            Jetzt Termin buchen
          </a>
        </div>
      </section>
    </>
  );
}

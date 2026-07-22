import type { Metadata } from "next";
import Image from "next/image";
import PageMasthead from "@/components/page-masthead";
import Reveal from "@/components/reveal";
import BookingButton from "@/components/booking-button";

export const metadata: Metadata = {
  title: "Team",
  description:
    "Das Team vom Main Barbershop Saarbrücken – Azat Ektiren und Ridvan Erinc.",
};

function BarberFeature({
  photo,
  name,
  role,
  text,
  quote,
  cta,
  n,
  flip,
}: {
  photo: string;
  name: string;
  role: string;
  text: string;
  quote: string;
  cta: string;
  n: number;
  flip?: boolean;
}) {
  return (
    <section className="py-12 sm:py-16">
      <div className="mx-auto max-w-7xl px-6 sm:px-10">
        <Reveal className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
          <figure className={`rise ${flip ? "lg:order-2" : ""}`}>
            <div className="figure-zoom clip relative aspect-[4/5] overflow-hidden bg-paper-deep">
              <Image
                src={photo}
                alt={`${name} im Main Barbershop`}
                fill
                sizes="(max-width: 1024px) 100vw, 600px"
                className=" object-cover object-top"
              />
            </div>
            <figcaption className="serif-accent mt-3 flex justify-between text-[0.9rem] text-ink-mute">
              <span>{name}, im Atelier</span>
              <span className="tabular-nums">Portrait 0{n}</span>
            </figcaption>
          </figure>
          <div className={`rise ${flip ? "lg:order-1" : ""}`}>
            <div className="flex items-baseline gap-4">
              <span className="display text-3xl tabular-nums text-gold sm:text-5xl">
                0{n}
              </span>
              <span className="kicker text-gold">{role}</span>
            </div>
            <h2 className="display mt-4 text-5xl sm:text-7xl">{name}</h2>
            <div className="my-7 h-px w-14 bg-gold" />
            <p className="max-w-[42ch] text-[0.95rem] leading-relaxed text-ink-soft">
              {text}
            </p>
            <p className="serif-accent mt-7 max-w-[26ch] text-2xl leading-snug">
              „{quote}“
            </p>
            <BookingButton className="mt-9 inline-flex items-center gap-3 border border-ink px-9 py-4 text-[0.7rem] font-semibold uppercase tracking-[0.24em] transition-colors duration-300 hover:bg-ink hover:text-paper">
              {cta} <span aria-hidden>→</span>
            </BookingButton>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

export default function TeamPage() {
  return (
    <div className="page-enter">
      <PageMasthead
        folio="N° 02"
        kicker="Die Barber"
        title="Team"
        lead="Zwei Hände, ein Anspruch: ein Ergebnis, das im Alltag genauso gut sitzt wie frisch aus dem Shop."
      />

      <BarberFeature
        n={1}
        photo="/azat.jpg"
        name="Azat"
        role="Barber & Gründer"
        text="Azat steht für Präzision bis ins Detail. Ob klassischer Herrenhaarschnitt, sauberer Fade oder akkurate Bartkontur – er nimmt sich die Zeit, die ein guter Schnitt braucht. Mit langjähriger Erfahrung und einem geschulten Auge findet er für jeden Kunden den Look, der wirklich passt."
        quote="Der richtige Look ist der, der wirklich passt."
        cta="Termin bei Azat"
      />

      <div className="mx-auto max-w-7xl px-6 sm:px-10">
        <div className="h-px bg-ink/15" />
      </div>

      <BarberFeature
        n={2}
        flip
        photo="/barbershop.jpg"
        name="Ridvan"
        role="Barber"
        text="Ridvan verbindet modernes Styling mit klassischem Barbier-Handwerk. Von zeitgemäßen Schnitten bis zur entspannten Bartpflege – bei ihm sitzt jedes Detail. Sein Anspruch: Jeder Kunde verlässt den Stuhl mit einem Ergebnis, das im Alltag genauso gut aussieht wie frisch aus dem Shop."
        quote="Jedes Detail muss sitzen."
        cta="Termin bei Ridvan"
      />

      {/* CTA band */}
      <section className="mt-12 bg-paper-deep py-20 text-center sm:py-28">
        <div className="mx-auto max-w-3xl px-6">
          <Reveal>
            <p className="rise serif-accent text-3xl leading-tight sm:text-5xl">
              Ihr Termin beim Barber Ihrer <em>Wahl</em>.
            </p>
            <div className="rise mt-10 flex justify-center">
              <BookingButton className="inline-flex items-center gap-3 border border-gold bg-gold px-9 py-4 text-[0.7rem] font-semibold uppercase tracking-[0.24em] text-paper transition-colors duration-300 hover:border-ink hover:bg-ink">
                Jetzt Termin buchen <span aria-hidden>→</span>
              </BookingButton>
            </div>
          </Reveal>
        </div>
      </section>
    </div>
  );
}

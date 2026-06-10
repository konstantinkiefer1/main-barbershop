import type { Metadata } from "next";
import Image from "next/image";
import { BOOKSY_URL } from "@/lib/site";

export const metadata: Metadata = {
  title: "Team",
  description:
    "Das Team vom Main Barbershop Saarbrücken – Azat Ektiren und Ridvan Erinc.",
};

export default function TeamPage() {
  return (
    <>
      {/* Intro */}
      <section className="bg-ink px-6 py-20 text-paper sm:py-28">
        <div className="mx-auto max-w-6xl">
          <p className="text-xs uppercase tracking-[0.35em] text-paper/50">
            Die Barber
          </p>
          <h1 className="mt-6 font-display text-5xl uppercase sm:text-7xl">
            Team
          </h1>
          <div className="mt-8 h-px w-16 bg-gold" />
        </div>
      </section>

      {/* Azat — photo left, text right */}
      <section className="px-6 py-20 sm:py-28">
        <div className="mx-auto grid max-w-6xl items-center gap-12 lg:grid-cols-2">
          <div className="relative mx-auto aspect-square w-full max-w-md overflow-hidden">
            <Image
              src="/azat.jpg"
              alt="Azat Ektiren bei der Arbeit im Main Barbershop"
              fill
              sizes="(max-width: 1024px) 100vw, 448px"
              className="object-cover  object-top"
            />
          </div>
          <div>
            <p className="text-xs uppercase tracking-[0.35em] text-ink/40">
              Barber
            </p>
            <h2 className="mt-4 font-display text-4xl uppercase sm:text-5xl">
              Azat Ektiren
            </h2>
            <div className="mt-6 h-px w-12 bg-gold" />
            <p className="mt-6 max-w-md leading-relaxed text-ink/70">
              Azat steht für Präzision bis ins Detail. Ob klassischer
              Herrenhaarschnitt, sauberer Fade oder akkurate Bartkontur – er
              nimmt sich die Zeit, die ein guter Schnitt braucht. Mit
              langjähriger Erfahrung und einem geschulten Auge findet er für
              jeden Kunden den Look, der wirklich passt.
            </p>
          </div>
        </div>
      </section>

      {/* Ridvan — text left, monogram panel right */}
      <section className="bg-ink px-6 py-20 text-paper sm:py-28">
        <div className="mx-auto grid max-w-6xl items-center gap-12 lg:grid-cols-2">
          <div className="order-2 lg:order-1">
            <p className="text-xs uppercase tracking-[0.35em] text-paper/50">
              Barber
            </p>
            <h2 className="mt-4 font-display text-4xl uppercase sm:text-5xl">
              Ridvan Erinc
            </h2>
            <div className="mt-6 h-px w-12 bg-gold" />
            <p className="mt-6 max-w-md leading-relaxed text-paper/70">
              Ridvan verbindet modernes Styling mit klassischem
              Barbier-Handwerk. Von zeitgemäßen Schnitten bis zur entspannten
              Bartpflege – bei ihm sitzt jedes Detail. Sein Anspruch: Jeder
              Kunde verlässt den Stuhl mit einem Ergebnis, das im Alltag genauso
              gut aussieht wie frisch aus dem Shop.
            </p>
          </div>
          <div className="order-1 relative mx-auto aspect-square w-full max-w-md overflow-hidden lg:order-2 lg:justify-self-end">
            <Image
              src="/barber2.jpg"
              alt="Ridvan Erinc im Main Barbershop"
              fill
              sizes="(max-width: 1024px) 100vw, 448px"
              className="object-cover object-top"
            />
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-6 py-20 text-center sm:py-24">
        <p className="font-display text-3xl uppercase sm:text-4xl">
          Ihr Termin beim Barber Ihrer Wahl.
        </p>
        <a
          href={BOOKSY_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-10 inline-block border border-ink px-10 py-4 text-sm uppercase tracking-[0.25em] transition-colors hover:border-gold hover:bg-gold"
        >
          Jetzt Termin buchen
        </a>
      </section>
    </>
  );
}

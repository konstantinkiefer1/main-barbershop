import type { Metadata } from "next";
import { ADDRESS, PHONE, SITE_NAME } from "@/lib/site";

export const metadata: Metadata = {
  title: "Impressum",
};

export default function ImpressumPage() {
  return (
    <section className="px-6 py-20 sm:py-24">
      <div className="prose-sm mx-auto max-w-3xl">
        <p className="text-xs uppercase tracking-[0.35em] text-ink/40">
          Rechtliches
        </p>
        <h1 className="mt-6 font-display text-4xl uppercase sm:text-5xl">
          Impressum
        </h1>
        <div className="mt-8 h-px w-16 bg-gold" />

        <div className="mt-12 space-y-10 text-sm leading-relaxed text-ink/70">
          <div>
            <h2 className="font-display text-xl uppercase text-ink">
              Angaben gemäß § 5 DDG
            </h2>
            <p className="mt-3">
              {SITE_NAME}
              <br />
              {ADDRESS.street}
              <br />
              {ADDRESS.city}
            </p>
          </div>

          <div>
            <h2 className="font-display text-xl uppercase text-ink">Kontakt</h2>
            <p className="mt-3">
              Telefon: {PHONE.display}
              <br />
              [E-Mail-Adresse einfügen]
            </p>
          </div>

          <div>
            <h2 className="font-display text-xl uppercase text-ink">
              Vertreten durch
            </h2>
            <p className="mt-3">[Name des Inhabers / der Inhaberin einfügen]</p>
          </div>

          <div>
            <h2 className="font-display text-xl uppercase text-ink">
              Umsatzsteuer-ID
            </h2>
            <p className="mt-3">
              Umsatzsteuer-Identifikationsnummer gemäß § 27 a
              Umsatzsteuergesetz: [USt-IdNr. einfügen, falls vorhanden]
            </p>
          </div>

          <div>
            <h2 className="font-display text-xl uppercase text-ink">
              Aufsichtsbehörde / Kammer
            </h2>
            <p className="mt-3">
              Handwerkskammer des Saarlandes
              <br />
              Hohenzollernstraße 47–49, 66117 Saarbrücken
            </p>
          </div>

          <div>
            <h2 className="font-display text-xl uppercase text-ink">
              Verantwortlich für den Inhalt nach § 18 Abs. 2 MStV
            </h2>
            <p className="mt-3">
              [Name einfügen]
              <br />
              {ADDRESS.street}, {ADDRESS.city}
            </p>
          </div>

          <div>
            <h2 className="font-display text-xl uppercase text-ink">
              Streitschlichtung
            </h2>
            <p className="mt-3">
              Die Europäische Kommission stellt eine Plattform zur
              Online-Streitbeilegung (OS) bereit:{" "}
              <a
                href="https://ec.europa.eu/consumers/odr/"
                target="_blank"
                rel="noopener noreferrer"
                className="underline transition-colors hover:text-gold"
              >
                https://ec.europa.eu/consumers/odr/
              </a>
              . Wir sind nicht bereit oder verpflichtet, an
              Streitbeilegungsverfahren vor einer
              Verbraucherschlichtungsstelle teilzunehmen.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

import type { Metadata } from "next";
import { ADDRESS, PHONE, SITE_NAME } from "@/lib/site";

export const metadata: Metadata = {
  title: "Datenschutzerklärung",
};

export default function DatenschutzPage() {
  return (
    <section className="px-6 py-20 sm:py-24">
      <div className="mx-auto max-w-3xl">
        <p className="text-xs uppercase tracking-[0.35em] text-ink/40">
          Rechtliches
        </p>
        <h1 className="mt-6 font-display text-4xl uppercase sm:text-5xl">
          Datenschutzerklärung
        </h1>
        <div className="mt-8 h-px w-16 bg-gold" />

        <div className="mt-12 space-y-10 text-sm leading-relaxed text-ink/70">
          <div>
            <h2 className="font-display text-xl uppercase text-ink">
              1. Verantwortlicher
            </h2>
            <p className="mt-3">
              {SITE_NAME}
              <br />
              {ADDRESS.street}, {ADDRESS.city}
              <br />
              Telefon: {PHONE.display}
              <br />
              [E-Mail-Adresse einfügen]
            </p>
          </div>

          <div>
            <h2 className="font-display text-xl uppercase text-ink">
              2. Allgemeines zur Datenverarbeitung
            </h2>
            <p className="mt-3">
              Der Schutz Ihrer persönlichen Daten ist uns wichtig. Wir
              verarbeiten personenbezogene Daten ausschließlich im Rahmen der
              gesetzlichen Bestimmungen, insbesondere der
              Datenschutz-Grundverordnung (DSGVO) und des
              Bundesdatenschutzgesetzes (BDSG). Diese Website dient der reinen
              Information über unser Geschäft; ein Kundenkonto oder eine
              Online-Bezahlung gibt es nicht.
            </p>
          </div>

          <div>
            <h2 className="font-display text-xl uppercase text-ink">
              3. Hosting und Server-Logfiles
            </h2>
            <p className="mt-3">
              Beim Aufruf dieser Website werden durch den Hosting-Anbieter
              automatisch Informationen in sogenannten Server-Logfiles
              gespeichert (z.&nbsp;B. IP-Adresse, Datum und Uhrzeit des
              Zugriffs, Browsertyp). Diese Daten dienen der Sicherstellung
              eines störungsfreien Betriebs und werden nicht mit anderen
              Datenquellen zusammengeführt. Rechtsgrundlage ist Art. 6 Abs. 1
              lit. f DSGVO (berechtigtes Interesse an der sicheren
              Bereitstellung der Website).
            </p>
          </div>

          <div>
            <h2 className="font-display text-xl uppercase text-ink">
              4. Google Maps
            </h2>
            <p className="mt-3">
              Auf unserer Kontaktseite ist eine Karte von Google Maps
              eingebunden. Anbieter ist die Google Ireland Limited, Gordon
              House, Barrow Street, Dublin 4, Irland. Beim Laden der Karte
              werden Daten (u.&nbsp;a. Ihre IP-Adresse) an Server von Google
              übertragen. Weitere Informationen finden Sie in der
              Datenschutzerklärung von Google:{" "}
              <a
                href="https://policies.google.com/privacy"
                target="_blank"
                rel="noopener noreferrer"
                className="underline transition-colors hover:text-gold"
              >
                https://policies.google.com/privacy
              </a>
              .
            </p>
          </div>

          <div>
            <h2 className="font-display text-xl uppercase text-ink">
              5. Terminbuchung über Booksy
            </h2>
            <p className="mt-3">
              Für die Online-Terminbuchung verlinken wir auf die externe
              Plattform Booksy. Wenn Sie dem Link folgen, gelten die
              Datenschutzbestimmungen von Booksy. Auf die dortige
              Datenverarbeitung haben wir keinen Einfluss.
            </p>
          </div>

          <div>
            <h2 className="font-display text-xl uppercase text-ink">
              6. Ihre Rechte
            </h2>
            <p className="mt-3">
              Sie haben das Recht auf Auskunft (Art. 15 DSGVO), Berichtigung
              (Art. 16 DSGVO), Löschung (Art. 17 DSGVO), Einschränkung der
              Verarbeitung (Art. 18 DSGVO), Datenübertragbarkeit (Art. 20
              DSGVO) sowie Widerspruch gegen die Verarbeitung (Art. 21 DSGVO).
              Außerdem steht Ihnen ein Beschwerderecht bei der zuständigen
              Aufsichtsbehörde zu – im Saarland ist dies das Unabhängige
              Datenschutzzentrum Saarland.
            </p>
          </div>

          <div>
            <h2 className="font-display text-xl uppercase text-ink">
              7. Aktualität
            </h2>
            <p className="mt-3">
              Diese Datenschutzerklärung hat den Stand Juni 2026. Durch die
              Weiterentwicklung unserer Website kann eine Anpassung
              erforderlich werden.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

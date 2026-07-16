import Reveal from "@/components/reveal";

/* Editorial page opener: kicker + folio over a hairline, then the
   oversized Anton title with an optional serif lead beside it. */
export default function PageMasthead({
  folio,
  kicker,
  title,
  lead,
}: {
  folio: string;
  kicker: string;
  title: string;
  lead?: string;
}) {
  return (
    <section className="pb-10 pt-12 sm:pb-16 sm:pt-20">
      <div className="mx-auto max-w-7xl px-6 sm:px-10">
        <Reveal className="mb-6 flex items-baseline justify-between sm:mb-10">
          <span className="rise kicker text-gold">{kicker}</span>
          <span className="rise display text-4xl tabular-nums text-gold sm:text-6xl">
            {folio}
          </span>
        </Reveal>
        <div className="mb-6 h-px bg-ink/15 sm:mb-10" />
        <Reveal className="grid items-end gap-6 lg:grid-cols-[1.6fr_1fr] lg:gap-16">
          <h1 className="rise display text-6xl sm:text-8xl lg:text-9xl">
            {title}
          </h1>
          {lead ? (
            <p className="rise serif-accent max-w-[34ch] pb-2 text-xl leading-normal text-ink-soft sm:text-2xl">
              {lead}
            </p>
          ) : null}
        </Reveal>
      </div>
    </section>
  );
}

import Image from "next/image";
import Link from "next/link";
import { BOOKSY_URL, NAV_LINKS } from "@/lib/site";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-ink text-paper lg:flex-row">
      {/* Right on desktop, top on mobile: image, logo, CTA */}
      <section className="relative order-1 flex min-h-[65vh] flex-1 flex-col items-center justify-center overflow-hidden px-8 py-20 lg:order-2 lg:min-h-screen lg:border-l lg:border-paper/10">
        <Image
          src="/ladenfront-2.jpeg"
          alt=""
          fill
          preload
          sizes="(max-width: 1024px) 100vw, 50vw"
          className="scale-105 object-cover opacity-30 blur-sm object-top"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/40 to-ink/70" />
        <div className="relative flex flex-col items-center text-center">
          <Image
            src="/logo3.jpeg"
            alt="Main Barbershop Logo"
            width={1024}
            height={1024}
            preload
            sizes="(max-width: 640px) 260px, 320px"
            className="w-[260px] mix-blend-screen sm:w-[320px]"
          />
          <p className="mt-2 max-w-xs text-sm leading-relaxed text-paper/60">
            Präzision, Stil und Handwerk – mitten in Saarbrücken.
          </p>
          <a
            href={BOOKSY_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-10 inline-block bg-gold px-12 py-5 font-display text-base uppercase tracking-wider text-ink transition-colors hover:bg-paper"
          >
            Jetzt Termin buchen
          </a>
          <p className="mt-4 text-[10px] uppercase tracking-[0.3em] text-paper/40">
            Booking über Booksy
          </p>
        </div>
      </section>

      {/* Left on desktop, bottom on mobile: oversized navigation */}
      <section className="order-2 flex flex-1 flex-col justify-between px-8 py-12 sm:px-14 lg:order-1 lg:min-h-screen lg:py-16">
        <p className="text-[10px] uppercase tracking-[0.4em] text-paper/40">
          Main Barbershop — Saarbrücken
        </p>

        <nav className="my-16 flex flex-col gap-2">
          {NAV_LINKS.map((link, index) => (
            <Link
              key={link.href}
              href={link.href}
              className="group flex items-baseline gap-5"
            >
              <span className="text-xs tabular-nums text-gold">
                0{index + 1}
              </span>
              <span className="font-display text-6xl uppercase leading-none text-paper/30 transition-colors duration-300 group-hover:text-paper sm:text-7xl lg:text-8xl">
                {link.label}
              </span>
            </Link>
          ))}
        </nav>

        <div className="flex items-end justify-between gap-6 text-xs text-paper/50">
          <p>
            Bahnhofstraße 40
            <br />
            66111 Saarbrücken
          </p>
          <p className="text-right">
            Mo – Sa
            <br />
            09:00 – 19:30
          </p>
        </div>
      </section>
    </main>
  );
}

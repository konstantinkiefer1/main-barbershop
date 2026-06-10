import Image from "next/image";
import Link from "next/link";
import { BOOKSY_URL, NAV_LINKS } from "@/lib/site";

export default function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-paper/10 bg-ink text-paper">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-6 py-3">
        <Link href="/" className="flex items-center">
          <Image
            src="/logo3.jpeg"
            alt="Main Barbershop"
            width={1024}
            height={1024}
            className="h-16 w-16 mix-blend-screen"
          />
        </Link>

        <nav className="flex items-center gap-5 sm:gap-8">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-xs uppercase tracking-[0.2em] text-paper/70 transition-colors hover:text-gold"
            >
              {link.label}
            </Link>
          ))}
          <a
            href={BOOKSY_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden border border-gold px-4 py-2 text-xs uppercase tracking-[0.2em] text-gold transition-colors hover:bg-gold hover:text-ink md:inline-block"
          >
            Termin buchen
          </a>
        </nav>
      </div>
    </header>
  );
}

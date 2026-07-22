"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import BookingButton from "@/components/booking-button";
import { NAV_LINKS } from "@/lib/site";

/* Slim editorial masthead. Carries a solid ink ground on the home cover
   (so it reads seamless with the dark hero) and bone paper elsewhere. */
export default function SiteHeader() {
  const pathname = usePathname();
  const overDark = pathname === "/";

  return (
    <header
      className={`sticky top-0 z-50 border-b ${
        overDark
          ? "border-paper/15 bg-ink text-paper"
          : "border-ink/15 bg-paper text-ink"
      }`}
    >
      <div className="mx-auto flex h-[72px] max-w-7xl items-center justify-between px-6 sm:px-10">
        <Link href="/" className="flex items-center gap-3">
          <Image
            src={overDark ? "/logo-mark.png" : "/logo-mark-ink.png"}
            alt=""
            width={128}
            height={128}
            className="h-[26px] w-[26px] object-contain"
          />
          <span className="display text-lg leading-none tracking-[0.04em]">
            Main
            <span className="serif-accent ml-1 text-[0.95em] normal-case text-gold">
              barbershop
            </span>
          </span>
        </Link>

        <nav className="flex items-center gap-5 sm:gap-9">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`text-[0.7rem] font-medium uppercase tracking-[0.2em] transition-colors duration-300 hover:text-gold ${
                pathname === link.href ? "text-gold" : ""
              }`}
            >
              {link.label}
            </Link>
          ))}
          <BookingButton
            className={`hidden border px-5 py-2.5 text-[0.65rem] font-semibold uppercase tracking-[0.24em] transition-colors duration-300 md:inline-block ${
              overDark
                ? "border-paper/20 hover:border-gold hover:bg-gold hover:text-ink"
                : "border-ink hover:bg-ink hover:text-paper"
            }`}
          >
            Termin buchen
          </BookingButton>
        </nav>
      </div>
    </header>
  );
}

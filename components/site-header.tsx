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
      <div className="mx-auto flex h-[64px] max-w-7xl items-center justify-between px-4 sm:h-[72px] sm:px-10">
        <Link href="/" className="flex items-center gap-2.5 sm:gap-3">
          <Image
            src={overDark ? "/logo-mark.png" : "/logo-mark-ink.png"}
            alt=""
            width={128}
            height={128}
            className="h-[26px] w-[26px] object-contain"
          />
          <span className="display text-lg leading-none tracking-[0.04em]">
            Main
            <span className="serif-accent ml-1 hidden text-[0.95em] normal-case text-gold sm:inline">
              barbershop
            </span>
          </span>
        </Link>

        <nav className="flex items-center gap-3.5 sm:gap-9">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`text-[0.6rem] font-medium uppercase tracking-[0.1em] transition-colors duration-300 hover:text-gold sm:text-[0.7rem] sm:tracking-[0.2em] ${
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

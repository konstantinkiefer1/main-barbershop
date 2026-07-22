"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import BookingButton from "@/components/booking-button";

/* Mobile-only floating booking button. On the home cover it stays hidden
   until the visitor has scrolled well past the hero's static CTA. */
export default function FloatingCta() {
  const pathname = usePathname();
  const isHome = pathname === "/";
  const [pastHero, setPastHero] = useState(false);

  useEffect(() => {
    if (!isHome) return;
    const onScroll = () =>
      setPastHero(window.scrollY > window.innerHeight * 1.1);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [isHome]);

  const visible = !isHome || pastHero;

  return (
    <BookingButton
      className={`fixed bottom-5 right-5 z-50 bg-gold px-6 py-4 text-[0.7rem] font-semibold uppercase tracking-[0.24em] text-ink shadow-xl shadow-ink/40 transition-all duration-500 md:hidden ${
        visible
          ? "translate-y-0 opacity-100"
          : "pointer-events-none translate-y-4 opacity-0"
      }`}
    >
      Termin buchen
    </BookingButton>
  );
}

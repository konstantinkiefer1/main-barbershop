"use client";

import { usePathname } from "next/navigation";
import BookingButton from "@/components/booking-button";

/* Mobile-only floating booking button. Hidden on the home cover, where
   the hero already carries the same CTA in the same corner. */
export default function FloatingCta() {
  const pathname = usePathname();
  if (pathname === "/") return null;

  return (
    <BookingButton className="fixed bottom-5 right-5 z-50 bg-gold px-6 py-4 text-[0.7rem] font-semibold uppercase tracking-[0.24em] text-ink shadow-xl shadow-ink/40 md:hidden">
      Termin buchen
    </BookingButton>
  );
}

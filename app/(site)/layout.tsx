import BookingButton from "@/components/booking-button";
import SiteHeader from "@/components/site-header";

export default function SiteLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <SiteHeader />
      <main>{children}</main>
      {/* Mobile-only floating booking button — header CTA is hidden below md */}
      <BookingButton className="fixed bottom-5 right-5 z-50 bg-gold px-6 py-4 text-[0.7rem] font-semibold uppercase tracking-[0.24em] text-ink shadow-xl shadow-ink/40 md:hidden">
        Termin buchen
      </BookingButton>
    </>
  );
}

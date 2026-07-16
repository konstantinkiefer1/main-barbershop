import SiteHeader from "@/components/site-header";
import { BOOKSY_URL } from "@/lib/site";

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
      <a
        href={BOOKSY_URL}
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-5 right-5 z-50 bg-gold px-6 py-4 font-display text-sm uppercase tracking-wider text-ink shadow-xl shadow-ink/40 md:hidden"
      >
        Termin buchen
      </a>
    </>
  );
}

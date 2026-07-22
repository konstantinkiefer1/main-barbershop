import FloatingCta from "@/components/floating-cta";
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
      <FloatingCta />
    </>
  );
}

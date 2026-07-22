import type { Metadata } from "next";
import PageMasthead from "@/components/page-masthead";
import Reveal from "@/components/reveal";
import { galleryImageUrl, getGalleryImages } from "@/lib/gallery";

export const metadata: Metadata = {
  title: "Galerie",
  description:
    "Einblicke aus dem Main Barbershop Saarbrücken – Schnitte, Handwerk und der Shop in der Bahnhofstraße 40.",
};

/* New Cloudinary uploads appear without a redeploy. */
export const revalidate = 60;

export default async function GaleriePage() {
  const images = await getGalleryImages();

  return (
    <div className="page-enter">
      <PageMasthead
        folio="N° 03"
        kicker="Impressionen"
        title="Galerie"
        lead="Schnitte, Handwerk, der Shop – Einblicke aus der Bahnhofstraße."
      />

      <section className="pb-20 sm:pb-28">
        <div className="mx-auto max-w-7xl px-6 sm:px-10">
          {images.length === 0 ? (
            <div className="border-y border-ink/15 py-16 text-center">
              <p className="serif-accent text-2xl text-ink-mute">
                Neue Einblicke folgen in Kürze.
              </p>
            </div>
          ) : (
            <div className="columns-2 gap-6 lg:columns-3">
              {images.map((image, i) => (
                <Reveal key={image.publicId} className="mb-6 break-inside-avoid">
                  <figure className="rise">
                    <div className="figure-zoom overflow-hidden bg-paper-deep">
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img
                        src={galleryImageUrl(image, 1000)}
                        srcSet={`${galleryImageUrl(image, 600)} 600w, ${galleryImageUrl(image, 1000)} 1000w, ${galleryImageUrl(image, 1600)} 1600w`}
                        sizes="(max-width: 1024px) 50vw, 33vw"
                        width={image.width}
                        height={image.height}
                        alt={`Main Barbershop – Impression ${i + 1}`}
                        loading={i < 6 ? "eager" : "lazy"}
                        className="h-auto w-full"
                      />
                    </div>
                    <figcaption className="serif-accent mt-2 flex justify-end text-[0.85rem] text-ink-mute">
                      <span className="tabular-nums">
                        Fig. {String(i + 1).padStart(2, "0")}
                      </span>
                    </figcaption>
                  </figure>
                </Reveal>
              ))}
            </div>
          )}
        </div>
      </section>
    </div>
  );
}

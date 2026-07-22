export type GalleryImage = {
  publicId: string;
  width: number;
  height: number;
  format: string;
};

function parseCloudinaryUrl() {
  const raw = process.env.CLOUDINARY_URL;
  if (!raw) return null;
  const m = raw.match(/^cloudinary:\/\/([^:]+):([^@]+)@(.+)$/);
  if (!m) return null;
  return { apiKey: m[1], apiSecret: m[2], cloudName: m[3] };
}

export const GALLERY_FOLDER = "galerie";

/* Lists images the client dropped into the "galerie" folder of the
   Cloudinary Media Library, newest first. Cached via ISR on the page. */
export async function getGalleryImages(): Promise<GalleryImage[]> {
  const config = parseCloudinaryUrl();
  if (!config) return [];

  const auth = Buffer.from(`${config.apiKey}:${config.apiSecret}`).toString(
    "base64"
  );
  const res = await fetch(
    `https://api.cloudinary.com/v1_1/${config.cloudName}/resources/search`,
    {
      method: "POST",
      headers: {
        Authorization: `Basic ${auth}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        expression: `resource_type:image AND (folder:${GALLERY_FOLDER} OR asset_folder:${GALLERY_FOLDER})`,
        sort_by: [{ created_at: "desc" }],
        max_results: 100,
      }),
    }
  );
  if (!res.ok) return [];

  const data = (await res.json()) as {
    resources?: {
      public_id: string;
      width: number;
      height: number;
      format: string;
    }[];
  };
  return (data.resources ?? []).map((r) => ({
    publicId: r.public_id,
    width: r.width,
    height: r.height,
    format: r.format,
  }));
}

/* Delivery URL with on-the-fly optimization (format/quality/size). */
export function galleryImageUrl(image: GalleryImage, width: number) {
  const config = parseCloudinaryUrl();
  const cloudName = config?.cloudName ?? "";
  return `https://res.cloudinary.com/${cloudName}/image/upload/f_auto,q_auto,w_${width}/${image.publicId}.${image.format}`;
}

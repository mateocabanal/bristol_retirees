import Image from "next/image";
import metadata from "@/lib/metadata.json";
import { withBasePath } from "@/lib/paths";

type GalleryImage = {
  src: string;
  width: number;
  height: number;
};

const galleryImages = metadata as GalleryImage[];

export default function Gallery() {
  return (
    <main className="bg-slate-50 text-slate-950">
      <section className="border-b border-slate-200 bg-white">
        <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold text-slate-950">Photo Gallery</h1>
          <p className="mt-4 max-w-3xl text-lg leading-8 text-slate-700">
            Chapter photos with captions, including a place for funeral,
            luncheon, strike, and history photos.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="columns-1 gap-4 sm:columns-2 lg:columns-3">
          {galleryImages.map((image, index) => (
            <figure
              className="mb-4 break-inside-avoid overflow-hidden rounded-lg border border-slate-200 bg-white shadow-sm"
              key={image.src}
            >
              <Image
                alt={`3005 Retirees Chapter gallery photo ${index + 1}`}
                className="h-auto w-full"
                height={image.height}
                sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                src={withBasePath(image.src)}
                width={image.width}
              />
              <figcaption className="p-3 text-sm leading-6 text-slate-600">
                Chapter archive photo {index + 1}
              </figcaption>
            </figure>
          ))}
        </div>
      </section>
    </main>
  );
}

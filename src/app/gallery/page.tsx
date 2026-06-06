import Image from "next/image";
import metadata from "@/lib/metadata.json";
import { withBasePath } from "@/lib/paths";
import {
  additionalHistoryDocuments,
  orvilleHistoryPhotos,
} from "@/lib/site-content";

type GalleryImage = {
  src: string;
  fullSrc?: string;
  width: number;
  height: number;
  caption?: string;
};

const galleryImages: GalleryImage[] = [
  ...(metadata as GalleryImage[]).map((image, index) => ({
    ...image,
    caption: `Chapter archive photo ${index + 1}`,
  })),
  ...additionalHistoryDocuments.map((document) => ({
    src: document.href,
    fullSrc: document.href,
    width: document.width,
    height: document.height,
    caption: document.title,
  })),
  ...orvilleHistoryPhotos.map((photo) => ({
    src: photo.href,
    fullSrc: photo.href,
    width: photo.width,
    height: photo.height,
    caption: photo.title,
  })),
];

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
        <GalleryGrid images={galleryImages} label="Chapter archive gallery" />
      </section>
    </main>
  );
}

function GalleryGrid({
  images,
  label,
}: {
  images: GalleryImage[];
  label: string;
}) {
  return (
    <ul
      aria-label={label}
      className="columns-1 gap-4 sm:columns-2 lg:columns-3"
    >
      {images.map((image, index) => (
        <li className="mb-4 break-inside-avoid" key={`${image.src}-${index}`}>
          <figure className="overflow-hidden rounded-lg border border-slate-200 bg-white shadow-sm">
            <a
              className="block transition hover:opacity-90"
              href={withBasePath(image.fullSrc ?? image.src)}
              rel="noreferrer"
              target="_blank"
            >
              <Image
                alt={`${label} item ${index + 1}`}
                className="h-auto w-full"
                height={image.height}
                sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                src={withBasePath(image.src)}
                width={image.width}
              />
            </a>
            <figcaption className="p-3 text-sm leading-6 text-slate-600">
              {image.caption}
            </figcaption>
          </figure>
        </li>
      ))}
    </ul>
  );
}

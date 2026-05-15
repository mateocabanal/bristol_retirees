import Image from "next/image";
import { additionalHistoryDocuments, historyHighlights } from "@/lib/site-content";

export default function History() {
  return (
    <main className="bg-slate-50 text-slate-950">
      <section className="border-b border-slate-200 bg-white">
        <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold text-slate-950">Chapter History</h1>
          <p className="mt-4 max-w-3xl text-lg leading-8 text-slate-700">
            Archive photos, strike material, and chapter memories collected for
            the 3005 Retirees Chapter.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid gap-6 md:grid-cols-3">
          {historyHighlights.map((item) => (
            <figure
              className="rounded-lg border border-slate-200 bg-white p-4 shadow-sm"
              key={item.title}
            >
              <div className="relative aspect-[4/3] overflow-hidden rounded-md bg-slate-200">
                <Image
                  alt={item.title}
                  className="object-cover"
                  fill
                  sizes="(min-width: 768px) 33vw, 100vw"
                  src={item.image}
                />
              </div>
              <figcaption className="mt-4">
                <h2 className="text-xl font-bold text-slate-950">
                  {item.title}
                </h2>
                <p className="mt-2 text-sm leading-6 text-slate-600">
                  {item.caption}
                </p>
              </figcaption>
            </figure>
          ))}
        </div>

        <div className="mt-8 rounded-lg border border-slate-200 bg-white p-6 shadow-sm">
          <h2 className="text-2xl font-bold">John Marlow Video</h2>
          <p className="mt-3 text-slate-700">
            Orville asked to include this video link with the John Marlow
            material.
          </p>
          <a
            className="mt-4 inline-flex min-h-11 items-center justify-center rounded-md bg-sky-800 px-5 py-2.5 text-sm font-bold text-white transition hover:bg-sky-900"
            href="https://www.youtube.com/watch?v=YkQ90cBdo50"
            rel="noreferrer"
            target="_blank"
          >
            Open John Marlow Video
          </a>
        </div>

        <div className="mt-8 rounded-lg border border-slate-200 bg-white p-6 shadow-sm">
          <h2 className="text-2xl font-bold">Additional Local History Documents</h2>
          <p className="mt-3 max-w-2xl text-slate-700">
            Extra scans and event photos from local folders so the full history
            archive is represented.
          </p>
          <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {additionalHistoryDocuments.map((item) => (
              <a
                className="group block rounded-md border border-slate-200 bg-slate-50 p-3 transition hover:border-sky-700 hover:bg-white"
                href={item.href}
                key={item.title}
              >
                <div className="relative aspect-[4/3] overflow-hidden rounded-md bg-slate-200">
                  <Image
                    alt={item.title}
                    className="object-cover transition duration-200 group-hover:scale-105"
                    fill
                    sizes="(min-width: 1024px) 25vw, (min-width: 640px) 33vw, 100vw"
                    src={item.href}
                  />
                </div>
                <h3 className="mt-3 text-base font-semibold text-slate-900">
                  {item.title}
                </h3>
                <p className="mt-1 text-sm text-slate-600">{item.description}</p>
              </a>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}

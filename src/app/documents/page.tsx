import { withBasePath } from "@/lib/paths";
import {
  additionalHistoryDocuments,
  eventDocuments,
  rhtfDocuments,
} from "@/lib/site-content";

const galleryDocuments = [
  {
    title: "Top-level chapter history photos",
    description:
      "All 55 images from the main history archive are available in the gallery.",
    href: withBasePath("/gallery"),
  },
];

export default function Documents() {
  return (
    <main className="bg-slate-50 text-slate-950">
      <section className="border-b border-slate-200 bg-white">
        <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold text-slate-950">Local Documents</h1>
          <p className="mt-4 max-w-3xl text-lg leading-8 text-slate-700">
            A single place to find every local document currently added to the
            site.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <h2 className="text-2xl font-bold text-slate-950">Event Documents</h2>
        <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {eventDocuments.map((document) => (
            <a
              className="rounded-lg border border-slate-200 bg-white p-5 shadow-sm hover:border-sky-700"
              href={document.href}
              key={document.href}
            >
              <h3 className="text-lg font-bold text-slate-950">
                {document.title}
              </h3>
              <p className="mt-2 text-sm leading-6 text-slate-600">
                {document.description}
              </p>
            </a>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <h2 className="text-2xl font-bold text-slate-950">RHTF Documents</h2>
        <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {rhtfDocuments.map((document) => (
            <a
              className="rounded-lg border border-slate-200 bg-white p-5 shadow-sm hover:border-sky-700"
              href={document.href}
              key={document.href}
            >
              <h3 className="text-lg font-bold text-slate-950">
                {document.title}
              </h3>
              <p className="mt-2 text-sm leading-6 text-slate-600">
                {document.description}
              </p>
            </a>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <h2 className="text-2xl font-bold text-slate-950">History Documents</h2>
        <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {galleryDocuments.map((document) => (
            <a
              className="rounded-lg border border-slate-200 bg-white p-5 shadow-sm hover:border-sky-700"
              href={document.href}
              key={document.title}
            >
              <h3 className="text-lg font-bold text-slate-950">
                {document.title}
              </h3>
              <p className="mt-2 text-sm leading-6 text-slate-600">
                {document.description}
              </p>
            </a>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <h2 className="text-2xl font-bold text-slate-950">
          Additional History Files
        </h2>
        <p className="mt-3 max-w-3xl text-slate-700">
          Extra local scans from subfolders that were not part of the original
          24-photo gallery.
        </p>
        <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {additionalHistoryDocuments.map((document) => (
            <a
              className="rounded-lg border border-slate-200 bg-white p-5 shadow-sm hover:border-sky-700"
              href={document.href}
              key={document.href}
            >
              <h3 className="text-lg font-bold text-slate-950">
                {document.title}
              </h3>
              <p className="mt-2 text-sm leading-6 text-slate-600">
                {document.description}
              </p>
            </a>
          ))}
        </div>
      </section>
    </main>
  );
}

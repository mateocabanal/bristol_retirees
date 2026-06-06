import Image from "next/image";
import { withBasePath } from "@/lib/paths";
import { historyHighlights, primaryLinks } from "@/lib/site-content";
import FeedbackForm from "./feedback-form";

export default function Home() {
  return (
    <main className="bg-slate-50 text-slate-950">
      <section className="border-b border-slate-200 bg-white">
        <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
          <div className="relative aspect-[807/250] overflow-hidden rounded-lg bg-red-900 shadow-sm">
            <Image
              alt="UNIFOR 3005 Retiree Chapter banner"
              className="object-cover object-bottom"
              fill
              priority
              sizes="(min-width: 1280px) 1280px, 100vw"
              src={withBasePath("/retiree-chapter-banner.png")}
            />
          </div>

          <div className="mt-8 grid items-start gap-8 lg:grid-cols-[0.9fr_1.1fr]">
            <div className="max-w-3xl">
              <h1 className="text-4xl font-bold leading-tight text-slate-950 sm:text-5xl">
                3005 Retirees Chapter
              </h1>
              <p className="mt-5 max-w-2xl text-lg leading-8 text-slate-700">
                A home for chapter events, history, health resources, by-laws,
                memorial notes, and member photos.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <a
                  className="inline-flex min-h-11 items-center justify-center rounded-md bg-sky-800 px-5 py-2.5 text-sm font-bold text-white transition hover:bg-sky-900"
                  href={withBasePath("/events")}
                >
                  View Events
                </a>
                <a
                  className="inline-flex min-h-11 items-center justify-center rounded-md border border-slate-300 bg-white px-5 py-2.5 text-sm font-bold text-slate-900 transition hover:border-sky-800 hover:text-sky-900"
                  href={withBasePath("/by-laws")}
                >
                  Open By-laws
                </a>
              </div>
            </div>

            <div className="grid gap-3">
              <div className="relative aspect-[4/3] overflow-hidden rounded-lg bg-slate-200 shadow-sm">
                <Image
                  alt="3005 Retirees Chapter historical photo"
                  className="object-cover"
                  fill
                  sizes="(min-width: 1024px) 42vw, 100vw"
                  src={withBasePath("/1000009773.jpg")}
                />
              </div>
              <div className="grid grid-cols-2 gap-3">
                <div className="relative aspect-[4/3] overflow-hidden rounded-lg bg-slate-200">
                  <Image
                    alt="Chapter archive photo"
                    className="object-cover"
                    fill
                    sizes="(min-width: 1024px) 20vw, 50vw"
                    src={withBasePath("/1000009772.jpg")}
                  />
                </div>
                <div className="relative aspect-[4/3] overflow-hidden rounded-lg bg-slate-200">
                  <Image
                    alt="Chapter archive scan"
                    className="object-cover"
                    fill
                    sizes="(min-width: 1024px) 20vw, 50vw"
                    src={withBasePath("/scan_260131-102931_1.jpg")}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
        <h2 className="text-2xl font-bold text-slate-950">Chapter Resources</h2>
        <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {primaryLinks.map((link) => (
            <a
              className="rounded-lg border border-slate-200 bg-white p-5 shadow-sm transition hover:-translate-y-0.5 hover:border-sky-700 hover:shadow-md"
              href={link.href}
              key={link.href}
            >
              {"image" in link && link.image ? (
                <div className="mb-4 flex h-24 items-center justify-center rounded-md border border-slate-200 bg-white p-3">
                  <Image
                    alt={`${link.title} logo`}
                    className="max-h-full w-auto object-contain"
                    height={492}
                    src={link.image}
                    width={1066}
                  />
                </div>
              ) : null}
              <h3 className="text-lg font-bold text-slate-950">{link.title}</h3>
              <p className="mt-2 text-sm leading-6 text-slate-600">
                {link.description}
              </p>
            </a>
          ))}
        </div>
      </section>

      <section className="border-y border-slate-200 bg-white">
        <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
          <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr]">
            <div>
              <h2 className="text-2xl font-bold text-slate-950">
                Recent Additions
              </h2>
              <p className="mt-3 text-slate-700">
                The site now includes the requested by-laws button, chapter
                meeting dates, health links, memorial entries, executive spot,
                gallery, and a direct admin email link.
              </p>
            </div>
            <div className="grid gap-4 sm:grid-cols-3">
              {historyHighlights.map((item) => (
                <figure
                  className="rounded-lg border border-slate-200 bg-slate-50 p-3"
                  key={item.title}
                >
                  <div className="relative aspect-[4/3] overflow-hidden rounded-md bg-slate-200">
                    <Image
                      alt={item.title}
                      className="object-cover"
                      fill
                      sizes="(min-width: 1024px) 20vw, 100vw"
                      src={item.image}
                    />
                  </div>
                  <figcaption className="mt-3 text-sm font-semibold text-slate-800">
                    {item.caption}
                  </figcaption>
                </figure>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-4xl px-4 py-14 sm:px-6 lg:px-8">
        <h2 className="text-2xl font-bold text-slate-950">
          Constructive Comments
        </h2>
        <p className="mt-3 text-slate-700">
          Members can email helpful comments about the website or its content.
        </p>
        <div className="mt-6">
          <FeedbackForm />
        </div>
      </section>
    </main>
  );
}

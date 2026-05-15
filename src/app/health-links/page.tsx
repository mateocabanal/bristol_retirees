import { healthLinks } from "@/lib/site-content";

export default function HealthLinks() {
  return (
    <main className="bg-slate-50 text-slate-950">
      <section className="border-b border-slate-200 bg-white">
        <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold text-slate-950">
            Health Links for Seniors
          </h1>
          <p className="mt-4 max-w-3xl text-lg leading-8 text-slate-700">
            Government and health resources for members, including the E.R.I.K.
            Kits link Orville requested.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid gap-4 md:grid-cols-2">
          {healthLinks.map((link) => (
            <a
              className="rounded-lg border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-0.5 hover:border-sky-700 hover:shadow-md"
              href={link.href}
              key={link.href}
              rel="noreferrer"
              target="_blank"
            >
              <h2 className="text-xl font-bold text-slate-950">{link.title}</h2>
              <p className="mt-3 text-sm leading-6 text-slate-600">
                {link.description}
              </p>
            </a>
          ))}
        </div>
      </section>
    </main>
  );
}

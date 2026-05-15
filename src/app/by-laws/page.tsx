import { withBasePath } from "@/lib/paths";
import { rhtfDocuments } from "@/lib/site-content";

export default function ByLaws() {
  return (
    <main className="bg-slate-50 text-slate-950">
      <section className="border-b border-slate-200 bg-white">
        <div className="mx-auto max-w-5xl px-4 py-12 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold text-slate-950">Retiree By-laws</h1>
          <p className="mt-4 max-w-3xl text-lg leading-8 text-slate-700">
            A dedicated button for the 3005 Retirees Chapter by-laws, plus all
            RHTF-related local documents found in the archive.
          </p>
          <a
            className="mt-8 inline-flex min-h-11 items-center justify-center rounded-md bg-sky-800 px-5 py-2.5 text-sm font-bold text-white transition hover:bg-sky-900"
            href={withBasePath("/documents/retiree-by-laws.pdf")}
          >
            Open Retiree By-laws PDF
          </a>
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="rounded-lg border border-slate-200 bg-white p-6 shadow-sm">
          <h2 className="text-2xl font-bold">RHTF Documents</h2>
          <div className="mt-5 grid gap-3 sm:grid-cols-2">
            {rhtfDocuments.map((document) => (
              <a
                className="rounded-md border border-slate-200 p-4 text-sm leading-6 text-slate-700 transition hover:border-sky-700 hover:text-sky-900"
                href={document.href}
                key={document.href}
              >
                <p className="font-semibold text-slate-900">{document.title}</p>
                <p className="mt-1">{document.description}</p>
              </a>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}

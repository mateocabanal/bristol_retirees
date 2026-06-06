import Image from "next/image";
import { memorialEntries } from "@/lib/site-content";

export default function Memorial() {
  const sections = [
    {
      title: "Passed While Still Working",
      description: "Members who passed away while still working.",
      entries: memorialEntries.filter((entry) =>
        entry.group.toLowerCase().includes("work"),
      ),
    },
    {
      title: "Retired Members",
      description: "Members remembered after retirement.",
      entries: memorialEntries.filter((entry) =>
        entry.group.toLowerCase().includes("retired"),
      ),
    },
    {
      title: "Members Who Gave Up Employment",
      description:
        "Members remembered for taking a voluntary layoff so someone else could keep working.",
      entries: memorialEntries.filter((entry) =>
        entry.group.toLowerCase().includes("remembered"),
      ),
    },
  ];

  return (
    <main className="bg-slate-50 text-slate-950">
      <section className="border-b border-slate-200 bg-white">
        <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
          <div className="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-end">
            <div>
              <p className="text-sm font-bold uppercase tracking-wide text-sky-800">
                Chapter remembrance
              </p>
              <h1 className="mt-3 text-4xl font-bold text-slate-950">
                Memorial
              </h1>
              <p className="mt-4 max-w-3xl text-lg leading-8 text-slate-700">
                Remembering members whose obituary and remembrance entries have
                been submitted for the chapter website.
              </p>
            </div>
            <dl className="grid w-full gap-3 sm:w-auto sm:grid-cols-3">
              {sections.map((section) => (
                <div
                  className="rounded-md border border-slate-200 bg-slate-50 px-4 py-3 text-center"
                  key={section.title}
                >
                  <dt className="text-xs font-semibold uppercase tracking-wide text-slate-500">
                    {section.title}
                  </dt>
                  <dd className="mt-1 text-2xl font-bold text-slate-950">
                    {section.entries.length}
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </section>

      <section className="mx-auto grid max-w-7xl gap-10 px-4 py-12 sm:px-6 lg:px-8">
        {sections.map((section) => (
          <MemorialSection
            description={section.description}
            entries={section.entries}
            key={section.title}
            title={section.title}
          />
        ))}
      </section>
    </main>
  );
}

function MemorialSection({
  description,
  entries,
  title,
}: {
  description: string;
  entries: typeof memorialEntries;
  title: string;
}) {
  return (
    <section>
      <div className="flex items-end justify-between gap-4 border-b border-slate-200 pb-3">
        <div>
          <h2 className="text-2xl font-bold text-slate-950">{title}</h2>
          <p className="mt-1 text-sm leading-6 text-slate-600">
            {entries.length} {entries.length === 1 ? "entry" : "entries"}
          </p>
          <p className="mt-2 max-w-3xl text-sm leading-6 text-slate-600">
            {description}
          </p>
        </div>
      </div>
      <div className="mt-5 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {entries.map((entry) => (
          <article
            className="rounded-lg border border-slate-200 bg-white p-5 shadow-sm"
            key={entry.name}
          >
            <div className="flex gap-4">
              <MemorialMarker entry={entry} />
              <div>
                <h3 className="text-lg font-bold text-slate-950">
                  {entry.name}
                </h3>
                <p className="mt-1 text-sm leading-6 text-slate-600">
                  {entry.detail}
                </p>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

function MemorialMarker({
  entry,
}: {
  entry: (typeof memorialEntries)[number];
}) {
  if (entry.image) {
    return (
      <div className="relative size-16 shrink-0 overflow-hidden rounded-md bg-slate-200">
        <Image
          alt={`${entry.name} memorial photo`}
          className="object-cover"
          fill
          sizes="64px"
          src={entry.image}
        />
      </div>
    );
  }

  return (
    <div
      aria-hidden="true"
      className="flex size-12 shrink-0 items-center justify-center rounded-full bg-amber-100"
    >
      <span className="block h-8 w-5 rounded-b-sm bg-amber-400 [clip-path:polygon(50%_0,100%_22%,70%_100%,50%_74%,30%_100%,0_22%)]" />
    </div>
  );
}

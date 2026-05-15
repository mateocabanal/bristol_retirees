import { memorialEntries } from "@/lib/site-content";

export default function Memorial() {
  const activeMembers = memorialEntries.filter((entry) =>
    entry.group.toLowerCase().includes("work"),
  );
  const retiredMembers = memorialEntries.filter((entry) =>
    entry.group.toLowerCase().includes("retired"),
  );
  const rememberedMembers = memorialEntries.filter((entry) =>
    entry.group.toLowerCase().includes("remembered"),
  );

  return (
    <main className="bg-slate-50 text-slate-950">
      <section className="border-b border-slate-200 bg-white">
        <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold text-slate-950">Memorial</h1>
          <p className="mt-4 max-w-3xl text-lg leading-8 text-slate-700">
            Obituary and remembrance entries requested for the chapter website.
          </p>
        </div>
      </section>

      <section className="mx-auto grid max-w-7xl gap-6 px-4 py-12 sm:px-6 lg:grid-cols-3 lg:px-8">
        <MemorialColumn title="Passed While at Work" entries={activeMembers} />
        <MemorialColumn title="Retired Members" entries={retiredMembers} />
        <MemorialColumn
          title="Remembered Members"
          entries={rememberedMembers}
        />
      </section>
    </main>
  );
}

function MemorialColumn({
  entries,
  title,
}: {
  entries: typeof memorialEntries;
  title: string;
}) {
  return (
    <section className="rounded-lg border border-slate-200 bg-white p-5 shadow-sm">
      <h2 className="text-xl font-bold text-slate-950">{title}</h2>
      <div className="mt-4 grid gap-3">
        {entries.map((entry) => (
          <article
            className="rounded-md border border-slate-200 bg-slate-50 p-4"
            key={entry.name}
          >
            <div className="mb-3 flex size-12 items-center justify-center rounded-full bg-amber-100">
              <span className="block h-8 w-5 rounded-b-sm bg-amber-400 [clip-path:polygon(50%_0,100%_22%,70%_100%,50%_74%,30%_100%,0_22%)]" />
            </div>
            <h3 className="text-lg font-bold text-slate-950">{entry.name}</h3>
            <p className="mt-1 text-sm leading-6 text-slate-600">
              {entry.detail}
            </p>
          </article>
        ))}
      </div>
    </section>
  );
}

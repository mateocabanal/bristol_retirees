import Image from "next/image";
import { executiveMembers } from "@/lib/site-content";

export default function Executive() {
  return (
    <main className="bg-slate-50 text-slate-950">
      <section className="border-b border-slate-200 bg-white">
        <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold text-slate-950">
            Retiree Executive
          </h1>
          <p className="mt-4 max-w-3xl text-lg leading-8 text-slate-700">
            A dedicated place for executive names, positions, and photos.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          {executiveMembers.map((member) => (
            <article
              className="rounded-lg border border-slate-200 bg-white p-4 shadow-sm"
              key={member.name}
            >
              <div className="relative aspect-[4/3] overflow-hidden border border-slate-200 bg-slate-50">
                {member.image ? (
                  <Image
                    alt={member.name}
                    className="object-cover"
                    fill
                    sizes="(min-width: 1280px) 25vw, (min-width: 768px) 50vw, 100vw"
                    src={member.image}
                  />
                ) : (
                  <div className="flex h-full items-center justify-center px-4 text-center text-sm font-semibold text-slate-600">
                    {member.note}
                  </div>
                )}
              </div>

              <h2 className="mt-4 text-xl font-bold text-slate-950">
                {member.name}
              </h2>
              <p className="mt-2 text-sm leading-6 text-slate-700">
                {member.role}
              </p>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}

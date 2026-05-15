import Image from "next/image";
import { withBasePath } from "@/lib/paths";

export default function Events() {
  return (
    <main className="bg-slate-50 text-slate-950">
      <section className="border-b border-slate-200 bg-white">
        <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold text-slate-950">Upcoming Events</h1>
          <p className="mt-4 max-w-3xl text-lg leading-8 text-slate-700">
            Chapter meeting dates and breakfast gatherings for members.
          </p>
        </div>
      </section>

      <section className="mx-auto grid max-w-7xl gap-8 px-4 py-12 sm:px-6 lg:grid-cols-[0.7fr_1.3fr] lg:px-8">
        <div className="rounded-lg border border-slate-200 bg-white p-6 shadow-sm">
          <h2 className="text-2xl font-bold">Next Retiree Chapter Meeting</h2>
          <p className="mt-3 text-slate-700">
            The next retiree chapter meeting is scheduled for June 8, 2026.
          </p>
          <p className="mt-4 text-sm leading-6 text-slate-600">
            This date was called out by Orville as the meeting where he hoped to
            show the website.
          </p>
        </div>

        <div className="rounded-lg border border-slate-200 bg-white p-4 shadow-sm">
          <div className="mb-4 flex flex-wrap items-center justify-between gap-3">
            <h2 className="text-2xl font-bold">Smitty's Breakfast Schedule</h2>
            <a
              className="inline-flex min-h-10 items-center justify-center rounded-md bg-sky-800 px-4 py-2 text-sm font-bold text-white transition hover:bg-sky-900"
              href={withBasePath("/documents/smittys-breakfast-schedule.png")}
            >
              Open Schedule
            </a>
          </div>
          <Image
            alt="Smitty's breakfast schedule"
            className="h-auto w-full rounded-md border border-slate-200"
            height={568}
            src={withBasePath("/documents/smittys-breakfast-schedule.png")}
            width={1011}
          />
        </div>
      </section>
    </main>
  );
}

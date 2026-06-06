import { chapterMeetings, retireeBreakfasts } from "@/lib/site-content";

export default function Events() {
  return (
    <main className="bg-slate-50 text-slate-950">
      <section className="border-b border-slate-200 bg-white">
        <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold text-slate-950">Upcoming Events</h1>
          <p className="mt-4 max-w-3xl text-lg leading-8 text-slate-700">
            Chapter meeting dates and retiree breakfast gatherings.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="rounded-lg border border-slate-200 bg-white p-6 shadow-sm">
          <h2 className="text-2xl font-bold">Chapter Meetings</h2>
          <p className="mt-3 text-slate-700">
            The next retiree chapter meeting is scheduled for June 8, 2026.
          </p>
          <p className="mt-4 text-sm leading-6 text-slate-600">
            This date was called out by Orville as the meeting where he hoped to
            show the website.
          </p>

          <div className="mt-6 grid gap-4 md:grid-cols-2">
            {chapterMeetings.map((meeting) => (
              <article
                className="rounded-md border border-slate-200 bg-slate-50 p-4"
                key={meeting.date}
              >
                <h3 className="text-lg font-bold text-slate-950">
                  {meeting.date}
                </h3>
                <p className="mt-2 text-sm font-semibold text-slate-700">
                  {meeting.place}
                </p>
                <p className="mt-2 text-sm leading-6 text-slate-600">
                  {meeting.doors}
                </p>
                <p className="text-sm leading-6 text-slate-600">
                  {meeting.starts}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 pb-12 sm:px-6 lg:px-8">
        <div className="rounded-lg border border-slate-200 bg-white p-6 shadow-sm">
          <h2 className="text-2xl font-bold">Retirees Breakfast</h2>
          <p className="mt-3 text-slate-700">
            Breakfast gatherings at Smitty's and Altos, as sent by Orville.
          </p>

          <div className="mt-6 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {retireeBreakfasts.map((breakfast) => (
              <article
                className="rounded-md border border-slate-200 bg-slate-50 p-4"
                key={`${breakfast.date}-${breakfast.location}`}
              >
                <h3 className="text-lg font-bold text-slate-950">
                  {breakfast.date}
                </h3>
                <p className="mt-2 text-sm font-semibold text-slate-700">
                  {breakfast.venue}
                </p>
                <p className="mt-2 text-sm leading-6 text-slate-600">
                  {breakfast.time}
                </p>
                <p className="text-sm leading-6 text-slate-600">
                  {breakfast.location}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}

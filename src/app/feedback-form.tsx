const adminEmail = "orville2180@gmail.com";
const emailSubject = "3005 Retirees Chapter website comment";

export default function FeedbackForm() {
  const mailtoHref = `mailto:${adminEmail}?subject=${encodeURIComponent(
    emailSubject,
  )}`;

  return (
    <div className="rounded-lg border border-red-500/20 bg-[#0b0505] p-5 shadow-sm">
      <a
        className="inline-flex min-h-11 items-center justify-center rounded-md bg-red-600 px-5 py-2.5 text-sm font-bold text-red-50 transition hover:-translate-y-0.5 hover:bg-red-700"
        href={mailtoHref}
      >
        Email Website Admin
      </a>
    </div>
  );
}

import { withBasePath } from "./paths";

export const primaryLinks = [
  {
    title: "Upcoming Events",
    href: withBasePath("/events"),
    description: "Breakfast dates, chapter meetings, and member gatherings.",
  },
  {
    title: "By-laws",
    href: withBasePath("/by-laws"),
    description: "A dedicated button for the retiree chapter by-laws.",
  },
  {
    title: "Health Links for Seniors",
    href: withBasePath("/health-links"),
    description: "Government and health resources gathered for members.",
  },
  {
    title: "Memorial",
    href: withBasePath("/memorial"),
    description: "A respectful place for obituaries and remembered members.",
  },
  {
    title: "Photo Gallery",
    href: withBasePath("/gallery"),
    description: "Chapter history photos with room for captions.",
  },
  {
    title: "Document Center",
    href: withBasePath("/documents"),
    description: "Every local archive file connected to this site.",
  },
  {
    title: "History",
    href: withBasePath("/history"),
    description: "Photos and notes from the chapter's past.",
  },
];

export const healthLinks = [
  {
    title: "City of Winnipeg E.R.I.K. Kits",
    href: "https://professionals.wrha.mb.ca/community-resources/community-support/city-of-winnipeg-erik-kits/",
    description:
      "Emergency Response Information Kits help responders find medical details quickly in an emergency.",
  },
  {
    title: "Programs and services for seniors",
    href: "https://www.canada.ca/seniors",
    description:
      "Canada.ca hub for pensions, benefits, health, caregiving, fraud prevention, and safe living resources.",
  },
  {
    title: "Aging and seniors",
    href: "https://www.canada.ca/en/public-health/services/health-promotion/aging-seniors.html",
    description:
      "Public Health Agency of Canada information on healthy aging, falls prevention, dementia, and wellbeing.",
  },
  {
    title: "Manitoba seniors resources",
    href: "https://www.gov.mb.ca/seniors/resources/housing-options-and-care-planning.html",
    description:
      "Provincial resources for home care, housing options, community supports, and planning.",
  },
];

export const memorialEntries = [
  {
    name: "Rey De Castro",
    detail: "Photo and remembrance requested by Orville.",
    group: "Remembered member",
  },
  {
    name: "Kevin Donald Baker",
    detail: "August 9, 1960 - October 20, 2024",
    group: "Passed away while still at work",
  },
  {
    name: "Ronald McMillian",
    detail: "Died July 21, 2017",
    group: "Passed away while still at work",
  },
  {
    name: "Roman Demczyszak",
    detail: "Died in 2023",
    group: "Retired member",
  },
  {
    name: "Wayne Fritzler",
    detail: "Died in 2011",
    group: "Retired member",
  },
  {
    name: "Joven Jobo",
    detail: "Died in 2020",
    group: "Retired member",
  },
];

export const eventDocuments = [
  {
    title: "Smitty's Breakfast Schedule",
    href: withBasePath("/documents/smittys-breakfast-schedule.png"),
    description:
      "Upcoming events attachment Orville sent for breakfast gatherings.",
  },
];

export const rhtfDocuments = [
  {
    title: "Retiree By-laws",
    href: withBasePath("/documents/retiree-by-laws.pdf"),
    description: "Main chapter by-laws document.",
  },
  {
    title: "RHTF Policy",
    href: withBasePath("/documents/rhtf-policy.pdf"),
    description: "The most recent retiree handbook policy.",
  },
  {
    title: "RHTF Claim Form",
    href: withBasePath("/documents/rhtf-claim-form.pdf"),
    description: "Current RHTF claim form in use for chapter support.",
  },
  {
    title: "Retiree Registration Form",
    href: withBasePath("/documents/retiree-registration-form.pdf"),
    description: "Registration and membership form for chapter filing.",
  },
  {
    title: "Amended RHTF Trust Agreement",
    href: withBasePath("/documents/rhtf/amended-rhtf-trust-agreement.pdf"),
    description: "Signed amendment package for the trust agreement.",
  },
  {
    title: "Amendment 1 (P1)",
    href: withBasePath("/documents/rhtf/amendment-1-p1.png"),
    description: "First page of RHTF amendment 1.",
  },
  {
    title: "Amendment 1 (P2)",
    href: withBasePath("/documents/rhtf/amendment-1-p2.png"),
    description: "Second page of RHTF amendment 1.",
  },
  {
    title: "Amendment 2 (P1)",
    href: withBasePath("/documents/rhtf/amendment-2-p1.png"),
    description: "First page of RHTF amendment 2.",
  },
  {
    title: "Amendment 2 (P2)",
    href: withBasePath("/documents/rhtf/amendment-2-p2.png"),
    description: "Second page of RHTF amendment 2.",
  },
  {
    title: "Signed Trust Agreement",
    href: withBasePath("/documents/rhtf/signed-trust-agreement.pdf"),
    description: "Signed copy of the trust agreement document.",
  },
  {
    title: "UNIFOR Local RHTF Claim Form",
    href: withBasePath("/documents/rhtf/unifor-rhtf-claim-form.pdf"),
    description: "Alternate format of the RHTF claim form from local files.",
  },
];

export const historyHighlights = [
  {
    title: "Christmas Luncheon",
    image: withBasePath("/1000009773.jpg"),
    caption: "A chapter gathering from the history archive.",
  },
  {
    title: "Retiree Chapter Photos",
    image: withBasePath("/1000009772.jpg"),
    caption: "Images collected for the history section.",
  },
  {
    title: "Strike History",
    image: withBasePath("/scan_260131-102931_1.jpg"),
    caption: "Scanned material from the chapter history files.",
  },
];

export const additionalHistoryDocuments = [
  {
    title: "Retiree Group 2026",
    href: withBasePath("/documents/history/retiree-group-2026.png"),
    description: "Christmas Luncheon 2025 group photo.",
  },
  {
    title: "Donation Table",
    href: withBasePath("/documents/history/donation-table.png"),
    description: "Christmas Luncheon 2025 donation table photo.",
  },
  {
    title: "2024 Retirees Luncheon",
    href: withBasePath("/documents/history/2024-retirees-luncheon.jpg"),
    description: "Luncheon group shot from 2024.",
  },
  {
    title: "Strike Scan 1",
    href: withBasePath("/documents/history/scan-260131-102725-1.jpg"),
    description: "Strikes archive scan and annotation.",
  },
  {
    title: "Strike Screenshot 1",
    href: withBasePath("/documents/history/strikes-3-04-17-pm.png"),
    description: "Strikes archive screenshot.",
  },
  {
    title: "Strike Screenshot 2",
    href: withBasePath("/documents/history/strikes-3-04-54-pm.png"),
    description: "Strikes archive screenshot.",
  },
  {
    title: "Strike Scan 2",
    href: withBasePath("/documents/history/scan-260131-102830-1.jpg"),
    description: "Strikes archive scan and annotation.",
  },
  {
    title: "Strike Screenshot 3",
    href: withBasePath("/documents/history/strikes-3-05-50-pm.png"),
    description: "Strikes archive screenshot.",
  },
];

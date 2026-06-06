import { withBasePath } from "@/lib/paths";
import Hamburger from "./hamburger";

type NavLink = { label: string; href: string };

export default async function TailwindNavbar({
  links = [
    { label: "Home", href: "/" },
    { label: "Events", href: "/events" },
    { label: "By-laws", href: "/by-laws" },
    { label: "Health Links", href: "/health-links" },
    { label: "Memorial", href: "/memorial" },
    { label: "Executive", href: "/executive" },
    { label: "Gallery", href: "/gallery" },
    { label: "Documents", href: "/documents" },
    { label: "History", href: "/history" },
  ],
  logo = "3005 Retirees Chapter",
  className = "",
}: {
  links?: NavLink[];
  logo?: React.ReactNode;
  className?: string;
}) {
  return (
    <nav
      className={`sticky top-0 z-30 border-b border-red-500/20 bg-[#080303]/90 text-white shadow-sm shadow-red-950/20 backdrop-blur-xl ${className}`}
      aria-label="Primary navigation"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex min-h-16 items-center justify-between gap-4">
          <a
            className="flex-shrink-0 font-bold text-lg tracking-normal text-red-50 transition hover:text-red-300 md:text-xl"
            href={withBasePath("/")}
          >
            {logo}
          </a>

          <div className="hidden lg:block">
            <div className="flex items-center gap-1">
              {links.map((link) => (
                <a
                  key={link.href}
                  href={withBasePath(link.href)}
                  className="rounded-md px-3 py-2 text-sm font-semibold text-red-100/80 transition hover:bg-red-600/18 hover:text-red-50"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>

          <Hamburger links={links} />
        </div>
      </div>
    </nav>
  );
}

"use client";

import { useEffect, useState } from "react";
import { withBasePath } from "@/lib/paths";

type NavLink = { label: string; href: string };

export default function Hamburger({ links }: { links: NavLink[] }) {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleEsc = (event: KeyboardEvent) => {
      if (event.key === "Escape" && isOpen) {
        setIsOpen(false);
      }
    };

    document.addEventListener("keydown", handleEsc);
    return () => document.removeEventListener("keydown", handleEsc);
  }, [isOpen]);

  return (
    <>
      <div className="flex items-center lg:hidden">
        <button
          className="inline-flex size-10 items-center justify-center rounded-md text-red-50 transition hover:bg-red-600/18 focus:outline-none focus:ring-2 focus:ring-red-400/40"
          onClick={() => setIsOpen((prev) => !prev)}
          aria-expanded={isOpen}
          aria-controls="mobile-navigation"
          aria-label={isOpen ? "Close menu" : "Open menu"}
          type="button"
        >
          <svg
            className="size-6"
            stroke="currentColor"
            fill="none"
            viewBox="0 0 24 24"
            aria-hidden="true"
          >
            {isOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>
      </div>

      {isOpen && (
        <div className="absolute top-full right-0 left-0 border-t border-red-500/20 bg-[#080303]/95 shadow-lg shadow-red-950/20 backdrop-blur-xl lg:hidden">
          <nav
            className="mx-auto max-w-7xl px-4 py-3 sm:px-6"
            id="mobile-navigation"
            aria-label="Mobile navigation"
          >
            <ul className="grid gap-1">
              {links.map((link) => (
                <li key={link.href}>
                  <a
                    href={withBasePath(link.href)}
                    className="block rounded-md px-3 py-3 text-base font-semibold text-red-100/80 transition hover:bg-red-600/18 hover:text-red-50"
                    onClick={() => setIsOpen(false)}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      )}
    </>
  );
}

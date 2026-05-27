"use client";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import { Button } from "../ui/button";

const NAV_LINKS: any[] = [
  // { label: "About", href: "/about" },
  // { label: "Features", href: "/features" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  // Close menu on route change
  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  // Close on outside click
  useEffect(() => {
    if (!isOpen) return;
    const handler = (e: MouseEvent) => {
      const nav = document.getElementById("main-nav");
      if (nav && !nav.contains(e.target as Node)) setIsOpen(false);
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, [isOpen]);

  return (
    <nav
      id="main-nav"
      className="fixed top-0 left-0 right-0 z-10 mx-3 mt-3 md:mx-56"
    >
      <div className="bg-white/90 backdrop-blur-md border border-gray-200 rounded-lg px-6 h-12 flex justify-between items-center">
        <h2 className="text-[17px] text-neutral-500 hover:text-neutral-900 transition-colors duration-300 hover:cursor-default!">
          Alrnamee
        </h2>

        {/* Desktop */}
        <div className="hidden md:flex items-center gap-6">
          {NAV_LINKS.map(({ label, href }) => (
            <Link
              key={href}
              href={href}
              className={`text-sm transition-colors duration-200 ${
                pathname === href
                  ? "text-neutral-900"
                  : "text-neutral-500 hover:text-neutral-900"
              }`}
            >
              {label}
            </Link>
          ))}

          {/*  Login Button for desktop */}
          <Link href="/auth">
            <Button type="submit" variant="default" className="bg-neutral-800">
              Log In
            </Button>
          </Link>
        </div>

        {/* Mobile toggle */}
        <button
          className="md:hidden text-neutral-500 hover:text-neutral-900 transition-colors"
          onClick={() => setIsOpen((v) => !v)}
          aria-label={isOpen ? "Close menu" : "Open menu"}
          aria-expanded={isOpen}
        >
          {isOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden bg-white border border-t-0 border-gray-200 rounded-b-lg shadow-sm">
          {NAV_LINKS.map(({ label, href }) => (
            <Link
              key={href}
              href={href}
              className="block px-6 py-3 text-sm text-neutral-500 hover:text-neutral-900 hover:bg-gray-50 transition-all"
            >
              {label}
            </Link>
          ))}
          <div className="px-6 py-3">
            <Link
              href="/auth"
              className="block text-center text-sm text-neutral-900 border border-gray-200 px-3 py-2 rounded-md hover:bg-neutral-900 hover:text-white transition-all duration-200"
            >
              Log In
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;

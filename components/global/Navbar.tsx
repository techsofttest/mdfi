"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, useRef, useEffect } from "react";
import { ArrowUpRight, ChevronDown, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/Button";

export interface NavigationSubItem {
  label: string;
  href: string;
}

export interface NavigationItem {
  label: string;
  href: string;
  children?: NavigationSubItem[];
}

interface NavbarProps {
  navigation: NavigationItem[];
}

export function Navbar({ navigation }: NavbarProps) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Close dropdown on outside click
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setDropdownOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <header className="sticky top-0 z-50 border-b border-line bg-white">
      <div className="container-shell flex h-20 items-center justify-between">
        {/* Logo inside circular white background overflowing navbar */}
        <Link href="/" className="relative z-10 mt-12 flex h-32 w-32 items-center justify-center rounded-full bg-white">
          <Image
            src="/logo/logo-m.png"
            alt="MDFI Social Foundation"
            width={160}
            height={50}
            priority
            className="h-28 w-auto object-contain"
          />
        </Link>

        {/* Center Navigation Links */}
        <nav className="hidden items-center gap-7 lg:flex">
          {navigation.map((item) => {
            if (item.children && item.children.length > 0) {
              return (
                <div
                  key={item.label}
                  ref={dropdownRef}
                  className="relative group"
                  onMouseEnter={() => setDropdownOpen(true)}
                  onMouseLeave={() => setDropdownOpen(false)}
                >
                  <Link
                    href={item.href}
                    onClick={() => setDropdownOpen(false)}
                    className="inline-flex items-center gap-1.5 text-xs font-semibold tracking-wider text-neutral-800 uppercase transition hover:text-red py-2"
                  >
                    <span>{item.label}</span>
                    <ChevronDown
                      size={13}
                      className={`transition-transform duration-200 ${
                        dropdownOpen ? "rotate-180 text-red" : "text-neutral-500"
                      }`}
                    />
                  </Link>

                  {/* Simple Dropdown Menu */}
                  <div
                    className={`absolute left-0 top-full pt-1.5 transition-all duration-200 ${
                      dropdownOpen
                        ? "opacity-100 visible translate-y-0"
                        : "opacity-0 invisible -translate-y-2 pointer-events-none"
                    }`}
                  >
                    <div className="min-w-[240px] rounded-xl border border-line bg-white p-2 shadow-xl">
                      {item.children.map((subItem) => (
                        <Link
                          key={subItem.label}
                          href={subItem.href}
                          onClick={() => setDropdownOpen(false)}
                          className="flex items-center justify-between rounded-lg px-3.5 py-2.5 text-sm font-semibold text-neutral-800 transition hover:bg-neutral-50 hover:text-red"
                        >
                          <span>{subItem.label}</span>
                          <ArrowUpRight size={18} className="opacity-40" />
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              );
            }

            return (
              <Link
                key={item.label}
                href={item.href}
                className="text-xs font-semibold tracking-wider text-neutral-800 uppercase transition hover:text-red py-2"
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        {/* Right Action Icons & Apply / Enquire Button */}
        <div className="hidden items-center gap-5 lg:flex">
          <Button
            href="#connect"
            variant="primary-red"
            size="sm"
            className="gap-2"
          >
            <span>Enquire Now</span>
            <ArrowUpRight size={15} />
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
          className="flex h-10 w-10 items-center justify-center rounded-md text-neutral-900 lg:hidden"
        >
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Dropdown */}
      {menuOpen && (
        <div className="border-b border-line bg-white px-6 py-6 shadow-xl lg:hidden">
          <div className="flex flex-col gap-4">
            <span className="text-xs font-bold uppercase tracking-widest text-red">
              MDFI SOCIAL FOUNDATION / WOMEN · HEALTH · LIVELIHOODS
            </span>
            {navigation.map((item) => {
              if (item.children && item.children.length > 0) {
                return (
                  <div key={item.label} className="border-b border-neutral-100 pb-2">
                    <div className="flex items-center justify-between py-1">
                      <Link
                        href={item.href}
                        onClick={() => setMenuOpen(false)}
                        className="text-sm font-semibold tracking-wider text-neutral-900 uppercase hover:text-red"
                      >
                        {item.label}
                      </Link>
                      <button
                        onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
                        aria-label="Toggle services submenu"
                        className="p-1 text-neutral-500"
                      >
                        <ChevronDown
                          size={16}
                          className={`transition-transform duration-200 ${
                            mobileServicesOpen ? "rotate-180 text-red" : ""
                          }`}
                        />
                      </button>
                    </div>

                    {mobileServicesOpen && (
                      <div className="mt-2 space-y-2 pl-3 border-l-2 border-red/40">
                        {item.children.map((subItem) => (
                          <Link
                            key={subItem.label}
                            href={subItem.href}
                            onClick={() => setMenuOpen(false)}
                            className="block py-1 text-xs font-semibold text-neutral-700 hover:text-red"
                          >
                            {subItem.label}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                );
              }

              return (
                <Link
                  key={item.label}
                  href={item.href}
                  onClick={() => setMenuOpen(false)}
                  className="py-1 text-sm font-semibold tracking-wider text-neutral-900 uppercase hover:text-red"
                >
                  {item.label}
                </Link>
              );
            })}
            <Button
              href="#connect"
              onClick={() => setMenuOpen(false)}
              variant="primary-red"
              size="md"
              className="mt-2 w-full gap-2"
            >
              <span>Enquire Now</span>
              <ArrowUpRight size={16} />
            </Button>
          </div>
        </div>
      )}
    </header>
  );
}

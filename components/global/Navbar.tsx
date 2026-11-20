"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { ArrowUpRight, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/Button";

export interface NavigationItem {
  label: string;
  href: string;
}

interface NavbarProps {
  navigation: NavigationItem[];
}

export function Navbar({ navigation }: NavbarProps) {
  const [menuOpen, setMenuOpen] = useState(false);

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
          {navigation.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className="text-xs font-semibold tracking-wider text-neutral-800 uppercase transition hover:text-red"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        {/* Right Action Icons & Get Involved Button */}
        <div className="hidden items-center gap-5 lg:flex">
          <Button
            href="#connect"
            variant="primary-red"
            size="sm"
            className="gap-2"
          >
            <span>Get involved</span>
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
            {navigation.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                onClick={() => setMenuOpen(false)}
                className="py-1 text-sm font-semibold tracking-wider text-neutral-900 uppercase hover:text-red"
              >
                {item.label}
              </Link>
            ))}
            <Button
              href="#connect"
              onClick={() => setMenuOpen(false)}
              variant="primary-red"
              size="md"
              className="mt-2 w-full gap-2"
            >
              <span>Get involved</span>
              <ArrowUpRight size={16} />
            </Button>
          </div>
        </div>
      )}
    </header>
  );
}

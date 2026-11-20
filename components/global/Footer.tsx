import Image from "next/image";
import Link from "next/link";
import { MessageCircle } from "lucide-react";
import { FaLinkedinIn, FaXTwitter, FaInstagram, FaYoutube } from "react-icons/fa6";

export function Footer() {
  return (
    <footer id="footer-speak-to-team" className="border-t border-line bg-[#f4f2ee]">
      <div className="container-shell pt-16 pb-12">
        {/* Main Footer Navigation Columns */}
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-5">
          {/* Column 1: Brand Info (Main Logo, Description, Social Media) */}
          <div className="space-y-4">
            <Link href="/" className="inline-block">
              <Image
                src="/logo/logo-m.png"
                alt="MDFI Social Foundation"
                width={160}
                height={50}
                className="h-28 w-auto object-contain"
              />
            </Link>
            <p className="text-xs text-neutral-600 leading-relaxed max-w-xs">
              MDFI Social Foundation drives inclusive progress across Kannur and Kerala through women-led collectives, livelihood programs, and grassroots empowerment.
            </p>
            {/* Social Media Icons below description */}
            <div className="flex items-center gap-2.5 pt-2">
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="flex h-8 w-8 items-center justify-center rounded-full bg-white text-neutral-700 shadow-sm border border-neutral-200 transition hover:bg-red hover:text-white hover:border-red"
              >
                <FaLinkedinIn size={14} />
              </a>
              <a
                href="https://x.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Twitter / X"
                className="flex h-8 w-8 items-center justify-center rounded-full bg-white text-neutral-700 shadow-sm border border-neutral-200 transition hover:bg-red hover:text-white hover:border-red"
              >
                <FaXTwitter size={14} />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="flex h-8 w-8 items-center justify-center rounded-full bg-white text-neutral-700 shadow-sm border border-neutral-200 transition hover:bg-red hover:text-white hover:border-red"
              >
                <FaInstagram size={14} />
              </a>
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="YouTube"
                className="flex h-8 w-8 items-center justify-center rounded-full bg-white text-neutral-700 shadow-sm border border-neutral-200 transition hover:bg-red hover:text-white hover:border-red"
              >
                <FaYoutube size={14} />
              </a>
            </div>
          </div>

          {/* Column 2: Quick Links (replaced Interventions) */}
          <div>
            <h4 className="text-xs font-bold tracking-wider uppercase text-neutral-900">
              QUICK LINKS
            </h4>
            <ul className="mt-4 space-y-2.5 text-xs text-neutral-600">
              <li>
                <Link href="#why" className="hover:text-red">
                  Our Purpose
                </Link>
              </li>
              <li>
                <Link href="#what-we-do" className="hover:text-red">
                  What We Do
                </Link>
              </li>
              <li>
                <Link href="#approach" className="hover:text-red">
                  Our Approach
                </Link>
              </li>
              <li>
                <Link href="#companies" className="hover:text-red">
                  MDFI Ecosystem
                </Link>
              </li>
              <li>
                <Link href="#impact" className="hover:text-red">
                  Impact & Numbers
                </Link>
              </li>
              <li>
                <Link href="#connect" className="hover:text-red">
                  Work With Us
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-xs font-bold tracking-wider uppercase text-neutral-900">
              MDFI ECOSYSTEM
            </h4>
            <ul className="mt-4 space-y-2.5 text-xs text-neutral-600">
              <li>
                <Link href="#companies" className="hover:text-red">
                  MDFI Agro & Marketing
                </Link>
              </li>
              <li>
                <Link href="#companies" className="hover:text-red">
                  MDFI Finance
                </Link>
              </li>
              <li>
                <Link href="#companies" className="hover:text-red">
                  MDFI Gold Loan
                </Link>
              </li>
              <li>
                <Link href="#connect" className="hover:text-red">
                  Community Partners
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-xs font-bold tracking-wider uppercase text-neutral-900">
              STORIES & IMPACT
            </h4>
            <div className="mt-4 space-y-3">
              <div>
                <p className="text-sm font-bold text-neutral-900">15,000+</p>
                <p className="text-[11px] text-neutral-600">Women in Collectives</p>
              </div>
              <div>
                <p className="text-sm font-bold text-neutral-900">120+</p>
                <p className="text-[11px] text-neutral-600">Community Initiatives</p>
              </div>
              <div>
                <p className="text-sm font-bold text-neutral-900">85%+</p>
                <p className="text-[11px] text-neutral-600">Nutrition & Health Aware</p>
              </div>
              <div>
                <p className="text-sm font-bold text-neutral-900">100%</p>
                <p className="text-[11px] text-neutral-600">Dignity-Centred</p>
              </div>
            </div>
          </div>

          <div>
            <h4 className="text-xs font-bold tracking-wider uppercase text-neutral-900">
              CONTACT US
            </h4>
            <div className="mt-4 space-y-2 text-xs text-neutral-600 leading-relaxed">
              <p className="font-semibold text-neutral-900">Regd. Office:</p>
              <p>
                Vijaya Square, 2nd Floor, Thezhukkilpeedika, Edapally-Panvel Highway, Chova PO, Dist. Kannur-670006, Kerala
              </p>
              <p className="pt-1">
                Mob:{" "}
                <a href="tel:9292323916" className="hover:text-red font-semibold text-neutral-900">
                  92923 23916
                </a>
              </p>
              <p>
                Landline:{" "}
                <a href="tel:04972727916" className="hover:text-red font-semibold text-neutral-900">
                  0497-2727916
                </a>
              </p>
              <p>
                Toll-Free:{" "}
                <a href="tel:18002334335" className="hover:text-red font-semibold text-neutral-900">
                  1800-233-4335
                </a>
              </p>
              <p>
                Email:{" "}
                <a href="mailto:info@mdfigroup.in" className="hover:text-red font-semibold text-neutral-900">
                  info@mdfigroup.in
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Floating Support/Contact Icon Pill on Bottom Left */}
      <div className="fixed bottom-6 left-6 z-40">
        <a
          href="tel:9292323916"
          aria-label="Contact helpline"
          className="flex h-12 w-12 items-center justify-center rounded-full bg-red text-white shadow-2xl transition hover:scale-110 hover:bg-red-dark"
        >
          <MessageCircle size={22} />
        </a>
      </div>

      {/* Full-Width Solid Red Bottom Strip */}
      <div className="bg-red py-3 text-white text-xs font-semibold">
        <div className="container-shell flex flex-col justify-between gap-2 sm:flex-row items-center">
          <div className="flex items-center gap-4 text-white/80">
            <span className="hover:underline cursor-pointer">Disclaimer</span>
            <span>·</span>
            <span className="hover:underline cursor-pointer">Privacy Policy</span>
            <span>·</span>
            <span className="hover:underline cursor-pointer">Terms of Service</span>
          </div>
          <p className="text-white/90">
            © 2026 MDFI Social Foundation. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

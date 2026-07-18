import Link from "next/link";
import { FaFacebookF, FaLinkedinIn, FaTwitter } from "react-icons/fa";

const NAV_LINKS = [
  { label: "Home", href: "/" },
  { label: "Divisions", href: "/#divisions" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/#contact" },
];

const QUICK_LINKS = [
  "Divisions",
  "Sustainability",
  "Careers",
  "Investor Relations",
];

const SOCIAL_LINKS = [
  {
    label: "Facebook",
    href: "https://facebook.com/cossyrulesholdings",
    icon: <FaFacebookF className="size-4" />,
  },
  {
    label: "LinkedIn",
    href: "https://linkedin.com/company/cossyrulesholdings",
    icon: <FaLinkedinIn className="size-4" />,
  },
  {
    label: "Twitter",
    href: "https://twitter.com/cossyrules",
    icon: <FaTwitter className="size-4" />,
  },
];

export function Logo() {
  return (
    <Link href="/" className="flex items-center gap-2.5">
      <span className="flex size-10 items-center justify-center rounded-full bg-brand-light text-brand">
        <svg viewBox="0 0 24 24" fill="currentColor" className="size-6">
          <path d="M19.14 12.94c.04-.3.06-.61.06-.94 0-.32-.02-.64-.07-.94l2.03-1.58c.18-.14.23-.41.12-.61l-1.92-3.32c-.12-.22-.37-.29-.59-.22l-2.39.96c-.5-.38-1.03-.7-1.62-.94l-.36-2.54c-.04-.24-.24-.41-.48-.41h-3.84c-.24 0-.43.17-.47.41l-.36 2.54c-.59.24-1.13.57-1.62.94l-2.39-.96c-.22-.08-.47 0-.59.22L2.74 8.87c-.12.21-.08.47.12.61l2.03 1.58c-.05.3-.09.63-.09.94s.02.64.07.94l-2.03 1.58c-.18.14-.23.41-.12.61l1.92 3.32c.12.22.37.29.59.22l2.39-.96c.5.38 1.03.7 1.62.94l.36 2.54c.05.24.24.41.48.41h3.84c.24 0 .44-.17.47-.41l.36-2.54c.59-.24 1.13-.56 1.62-.94l2.39.96c.22.08.47 0 .59-.22l1.92-3.32c.12-.22.07-.47-.12-.61l-2.01-1.58zM12 15.6c-1.98 0-3.6-1.62-3.6-3.6s1.62-3.6 3.6-3.6 3.6 1.62 3.6 3.6-1.62 3.6-3.6 3.6z" />
        </svg>
      </span>
      <span className="leading-tight font-display">
        <span className="block text-lg font-bold text-brand">Cossy Rules</span>
        <span className="block text-xs text-foreground/70">Holdings</span>
      </span>
    </Link>
  );
}

export function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-black/5 bg-white/90 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6">
        <Logo />
        <nav className="hidden items-center gap-8 text-sm font-medium text-foreground/80 md:flex">
          {NAV_LINKS.map((link) => (
            <Link key={link.label} href={link.href} className="hover:text-brand">
              {link.label}
            </Link>
          ))}
        </nav>
        <Link
          href="/#contact"
          className="rounded-md bg-brand px-4 py-2 text-sm font-semibold text-white transition-colors hover:bg-brand-dark"
        >
          Investor Portal
        </Link>
      </div>
    </header>
  );
}

export function Footer() {
  return (
    <footer className="mt-8 border-t border-black/10 bg-white">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-14 sm:px-6 md:grid-cols-5">
        <div className="md:col-span-2">
          <Logo />
          <p className="mt-5 max-w-sm text-sm leading-7 text-foreground/60">
            Industrial solutions in mining, logistics, construction materials,
            manufacturing and property development across Zimbabwe.
          </p>
          <div className="mt-6 flex gap-2.5">
            {SOCIAL_LINKS.map((social) => (
              <a
                key={social.label}
                href={social.href}
                aria-label={social.label}
                target="_blank"
                rel="noopener noreferrer"
                className="flex size-10 items-center justify-center rounded-full border border-black/10 text-zinc-900 transition-all hover:-translate-y-0.5 hover:border-zinc-900 hover:bg-zinc-900 hover:text-white"
              >
                {social.icon}
              </a>
            ))}
          </div>
        </div>
        <div className="text-sm">
          <h3 className="text-xs font-bold uppercase tracking-widest text-foreground/40">
            Contact
          </h3>
          <ul className="mt-4 space-y-3 text-foreground/70">
            <li>
              <a href="tel:+263771234567" className="hover:text-brand">
                Hotline: +263 77 123 4567
              </a>
            </li>
            <li>
              <a href="tel:+2634234567" className="hover:text-brand">
                Office: +263 4 234 567
              </a>
            </li>
            <li>
              <a href="mailto:info@cossyrules.co.zw" className="hover:text-brand">
                info@cossyrules.co.zw
              </a>
            </li>
          </ul>
        </div>
        <div className="text-sm">
          <h3 className="text-xs font-bold uppercase tracking-widest text-foreground/40">
            Quick Links
          </h3>
          <ul className="mt-4 space-y-3 text-foreground/70">
            {QUICK_LINKS.map((link) => (
              <li key={link}>
                <Link href="/#divisions" className="hover:text-brand">
                  {link}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div className="text-sm">
          <h3 className="text-xs font-bold uppercase tracking-widest text-foreground/40">
            Head Office
          </h3>
          <ul className="mt-4 space-y-3 text-foreground/70">
            <li>Cossy Rules Industrial Park</li>
            <li>Kadoma, Zimbabwe</li>
            <li>Mon - Fri 08:00 - 17:00</li>
          </ul>
        </div>
      </div>
      <div className="border-t border-black/5">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-2 px-4 py-5 text-xs text-foreground/50 sm:flex-row sm:px-6">
          <p>
            © {new Date().getFullYear()} Cossy Rules Holdings. All rights
            reserved.
          </p>
          <p className="font-display">Where there is a will, there is a way.</p>
        </div>
      </div>
    </footer>
  );
}

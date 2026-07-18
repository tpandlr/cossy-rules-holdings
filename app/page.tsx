import Image from "next/image";
import {
  Armchair,
  FlaskConical,
  Layers3,
  PackageOpen,
  Pickaxe,
  Truck,
} from "lucide-react";
import { FaFacebookF, FaLinkedinIn, FaTwitter } from "react-icons/fa";

const NAV_LINKS = [
  { label: "Home", href: "#home" },
  { label: "Divisions", href: "#divisions" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];

const DIVISIONS = [
  {
    name: "Mining & Milling",
    description:
      "Large-scale extraction and processing with modern milling circuits delivering consistently high throughput and ore recovery.",
    image:
      "https://images.unsplash.com/photo-1587293852726-70cdb56c2866?w=800&q=70",
    icon: <Pickaxe className="size-5" strokeWidth={2.5} />,
  },
  {
    name: "Cyanidation & Elution",
    description:
      "Specialized gold recovery and elution plants with strict environmental controls.",
    image:
      "https://images.unsplash.com/photo-1610375461246-83df859d849d?w=800&q=70",
    icon: <FlaskConical className="size-5" strokeWidth={2.5} />,
  },
  {
    name: "Construction Aggregates",
    description:
      "Quarries and material supply for major infrastructure and building projects.",
    image:
      "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=800&q=70",
    icon: <Layers3 className="size-5" strokeWidth={2.5} />,
  },
  {
    name: "Transport & Logistics",
    description:
      "Fleet management and heavy haulage across Southern Africa, specialized for mining and construction loads.",
    image:
      "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=800&q=70",
    icon: <Truck className="size-5" strokeWidth={2.5} />,
  },
  {
    name: "Furniture Retailing",
    description:
      "Contemporary and durable furniture lines, showroom presence and wholesale supply for commercial fit-outs.",
    image:
      "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=800&q=70",
    icon: <Armchair className="size-5" strokeWidth={2.5} />,
  },
  {
    name: "Tissue Production & Supply",
    description:
      "High-capacity tissue manufacturing and distribution for retail and institutional customers.",
    image:
      "https://images.unsplash.com/photo-1553413077-190dd305871c?w=800&q=70",
    icon: <PackageOpen className="size-5" strokeWidth={2.5} />,
  },
];

const INSIGHTS = [
  {
    title: "Fleet Expansion",
    description:
      "Investing in modern haulage capacity to improve delivery times and reduce downtime.",
    image:
      "https://images.unsplash.com/photo-1519003722824-194d4455a60c?w=800&q=70",
  },
  {
    title: "Showroom Launch",
    description:
      "New Kadoma showroom showcasing durable commercial furniture lines.",
    image:
      "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=800&q=70",
  },
  {
    title: "Aggregate Supply",
    description:
      "Reliable quarry supply for regional infrastructure projects.",
    image:
      "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=800&q=70",
  },
];

const GALLERY = [
  "https://images.unsplash.com/photo-1578319439584-104c94d37305?w=600&q=70",
  "https://images.unsplash.com/photo-1610375461246-83df859d849d?w=600&q=70",
  "https://images.unsplash.com/photo-1553413077-190dd305871c?w=600&q=70",
  "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=600&q=70",
];

function Logo() {
  return (
    <a href="#home" className="flex items-center gap-2.5">
      <span className="flex size-10 items-center justify-center rounded-full bg-brand-light text-brand">
        <svg viewBox="0 0 24 24" fill="currentColor" className="size-6">
          <path d="M19.14 12.94c.04-.3.06-.61.06-.94 0-.32-.02-.64-.07-.94l2.03-1.58c.18-.14.23-.41.12-.61l-1.92-3.32c-.12-.22-.37-.29-.59-.22l-2.39.96c-.5-.38-1.03-.7-1.62-.94l-.36-2.54c-.04-.24-.24-.41-.48-.41h-3.84c-.24 0-.43.17-.47.41l-.36 2.54c-.59.24-1.13.57-1.62.94l-2.39-.96c-.22-.08-.47 0-.59.22L2.74 8.87c-.12.21-.08.47.12.61l2.03 1.58c-.05.3-.09.63-.09.94s.02.64.07.94l-2.03 1.58c-.18.14-.23.41-.12.61l1.92 3.32c.12.22.37.29.59.22l2.39-.96c.5.38 1.03.7 1.62.94l.36 2.54c.05.24.24.41.48.41h3.84c.24 0 .44-.17.47-.41l.36-2.54c.59-.24 1.13-.56 1.62-.94l2.39.96c.22.08.47 0 .59-.22l1.92-3.32c.12-.22.07-.47-.12-.61l-2.01-1.58zM12 15.6c-1.98 0-3.6-1.62-3.6-3.6s1.62-3.6 3.6-3.6 3.6 1.62 3.6 3.6-1.62 3.6-3.6 3.6z" />
        </svg>
      </span>
      <span className="leading-tight font-display">
        <span className="block text-lg font-bold text-brand">Cossy Rules</span>
        <span className="block text-xs text-foreground/70">Holdings</span>
      </span>
    </a>
  );
}

function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-black/5 bg-white/90 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6">
        <Logo />
        <nav className="hidden items-center gap-8 text-sm font-medium text-foreground/80 md:flex">
          {NAV_LINKS.map((link) => (
            <a key={link.label} href={link.href} className="hover:text-brand">
              {link.label}
            </a>
          ))}
        </nav>
        <a
          href="#contact"
          className="rounded-md bg-brand px-4 py-2 text-sm font-semibold text-white transition-colors hover:bg-brand-dark"
        >
          Investor Portal
        </a>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section id="home" className="mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:py-16">
      <div className="grid items-center gap-10 lg:grid-cols-[1.1fr_1fr]">
        <div>
          <h1 className="font-display text-4xl font-bold tracking-tight sm:text-5xl">
            Cossy Rules Holdings
          </h1>
          <p className="mt-3 font-display text-lg font-semibold text-brand">
            Where there is a will, there is a way.
          </p>
          <p className="mt-4 max-w-xl text-sm leading-6 text-foreground/70">
            A Zimbabwe-based industrial conglomerate operating across mining &
            milling, cyanidation & elution, construction aggregates, transport
            logistics, furniture retailing, tissue production & supply, and a
            strategic real estate arm. We deliver scale, reliability and local
            expertise to partners across Southern Africa.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <a
              href="#divisions"
              className="rounded-md bg-brand px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-brand-dark"
            >
              Explore Divisions
            </a>
            <a
              href="#about"
              className="rounded-md border border-black/15 px-5 py-2.5 text-sm font-semibold transition-colors hover:border-brand hover:text-brand"
            >
              Our Sustainability Report
            </a>
          </div>
          <div className="mt-8 flex flex-wrap gap-10 text-sm">
            <div className="flex items-start gap-2.5">
              <svg viewBox="0 0 24 24" fill="currentColor" className="mt-0.5 size-4 text-brand">
                <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" />
              </svg>
              <div>
                <p className="text-xs text-foreground/60">24/7 Hotline</p>
                <p className="font-semibold">+263 77 123 4567</p>
              </div>
            </div>
            <div className="flex items-start gap-2.5">
              <svg viewBox="0 0 24 24" fill="currentColor" className="mt-0.5 size-4 text-brand">
                <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
              </svg>
              <div>
                <p className="text-xs text-foreground/60">Head Office</p>
                <p className="font-semibold">Kadoma, Zimbabwe</p>
              </div>
            </div>
          </div>
        </div>
        <div className="overflow-hidden rounded-xl border border-black/10 shadow-lg">
          <Image
            src="https://images.unsplash.com/photo-1523848309072-c199db53f137?w=1200&q=75"
            alt="Open-pit mining operation with heavy machinery"
            width={1200}
            height={800}
            priority
            className="h-72 w-full object-cover lg:h-96"
          />
        </div>
      </div>
    </section>
  );
}

function Divisions() {
  return (
    <section id="divisions" className="mx-auto max-w-6xl px-4 py-12 sm:px-6">
      <h2 className="font-display text-2xl font-bold">Our Divisions</h2>
      <div className="mt-6 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {DIVISIONS.map((division) => (
          <article
            key={division.name}
            className="group flex flex-col overflow-hidden rounded-xl border border-black/10 bg-white shadow-sm transition-shadow hover:shadow-md"
          >
            <div className="max-h-40 overflow-hidden transition-all duration-500 ease-in-out group-hover:max-h-0 group-hover:opacity-0">
              <Image
                src={division.image}
                alt={division.name}
                width={800}
                height={500}
                className="h-40 w-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </div>
            <div className="flex flex-1 flex-col p-5">
              <div className="flex items-center gap-3">
                <span className="flex size-9 shrink-0 items-center justify-center rounded-lg bg-brand-light text-brand">
                  {division.icon}
                </span>
                <h3 className="font-display font-bold">{division.name}</h3>
              </div>
              <p className="mt-3 flex-1 text-sm leading-6 text-foreground/70">
                {division.description}
              </p>
              <a
                href="#contact"
                className="mt-4 inline-block w-fit rounded-md bg-brand px-4 py-2 text-xs font-semibold text-white transition-colors hover:bg-brand-dark"
              >
                View Division
              </a>
            </div>
          </article>
        ))}
      </div>

      <div className="mt-5 flex flex-col gap-4 rounded-xl border border-black/10 bg-white p-6 shadow-sm sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h3 className="font-display font-bold">Real Estate</h3>
          <p className="mt-2 max-w-3xl text-sm leading-6 text-foreground/70">
            Strategic land holdings and property development focused on
            industrial estates, commercial facilities and mixed-use projects
            supporting our operations and regional growth.
          </p>
        </div>
        <a
          href="#contact"
          className="shrink-0 rounded-md bg-brand px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-brand-dark"
        >
          Explore Properties
        </a>
      </div>
    </section>
  );
}

const STATS = [
  { label: "Years in Operation", value: "18+" },
  { label: "Fleet", value: "120+ Trucks" },
  { label: "Annual Throughput", value: "450k Tons" },
];

function TrustAndLocations() {
  return (
    <section className="mx-auto max-w-6xl px-4 py-12 sm:px-6">
      <div className="grid gap-5 lg:grid-cols-[1.6fr_1fr]">
        <div className="rounded-xl border border-black/10 bg-white p-6 shadow-sm">
          <h2 className="font-display text-xl font-bold">
            Trusted Industrial Partner
          </h2>
          <p className="mt-3 text-sm leading-6 text-foreground/70">
            Operating with a strong compliance ethos, modern equipment and
            qualified teams, Cossy Rules Holdings has built long-term
            partnerships with local and international stakeholders. Our
            operations are designed to meet rigorous safety and environmental
            standards.
          </p>
          <div className="mt-6 grid gap-4 sm:grid-cols-3">
            {STATS.map((stat) => (
              <div
                key={stat.label}
                className="rounded-lg border border-black/10 p-4"
              >
                <p className="text-xs text-foreground/60">{stat.label}</p>
                <p className="mt-1 font-display text-2xl font-bold">
                  {stat.value}
                </p>
              </div>
            ))}
          </div>
          <div className="mt-6 flex flex-wrap gap-3 text-xs font-semibold text-foreground/60">
            <span className="rounded border border-black/10 px-3 py-2">
              ISO Certified
            </span>
            <span className="rounded border border-black/10 px-3 py-2">
              Chamber of Mines
            </span>
            <span className="rounded border border-black/10 px-3 py-2">
              Logistics Assoc.
            </span>
          </div>
        </div>

        <div className="rounded-xl border border-black/10 bg-white p-6 shadow-sm">
          <h2 className="font-display text-xl font-bold">Locations</h2>
          <p className="mt-3 text-sm leading-6 text-foreground/70">
            Head Office: Kadoma, Zimbabwe. Regional operations across Midlands
            and Mashonaland provinces with project sites distributed across the
            country.
          </p>
          <div className="mt-4 space-y-3 text-sm">
            <div>
              <p className="text-xs text-foreground/60">Primary Office</p>
              <p className="font-semibold">
                Cossy Rules Industrial Park, Kadoma
              </p>
            </div>
            <div>
              <p className="text-xs text-foreground/60">Contact</p>
              <p className="font-semibold">Office: +263 4 234 567</p>
              <p className="font-semibold">Hotline: +263 77 123 4567</p>
            </div>
          </div>
          <a
            href="#contact"
            className="mt-5 inline-block rounded-md bg-brand px-4 py-2 text-sm font-semibold text-white transition-colors hover:bg-brand-dark"
          >
            Request Site Visit
          </a>
        </div>
      </div>
    </section>
  );
}

function Insights() {
  return (
    <section className="mx-auto max-w-6xl px-4 py-12 sm:px-6">
      <h2 className="font-display text-2xl font-bold">Recent Insights</h2>
      <div className="mt-6 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {INSIGHTS.map((insight) => (
          <article
            key={insight.title}
            className="overflow-hidden rounded-xl border border-black/10 bg-white shadow-sm transition-shadow hover:shadow-md"
          >
            <Image
              src={insight.image}
              alt={insight.title}
              width={800}
              height={500}
              className="h-44 w-full object-cover"
            />
            <div className="p-5">
              <h3 className="font-display font-bold">{insight.title}</h3>
              <p className="mt-2 text-sm leading-6 text-foreground/70">
                {insight.description}
              </p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

function FeaturedDivision() {
  return (
    <section className="mx-auto max-w-6xl px-4 py-12 sm:px-6">
      <div className="overflow-hidden rounded-xl border border-black/10 shadow-lg">
        <Image
          src="https://images.unsplash.com/photo-1516937941344-00b4e0337589?w=1600&q=75"
          alt="Mining and milling operations panorama"
          width={1600}
          height={600}
          className="h-56 w-full object-cover sm:h-72"
        />
      </div>
      <div className="mt-6 grid gap-5 lg:grid-cols-[1.6fr_1fr]">
        <div className="rounded-xl border border-black/10 bg-white p-6 shadow-sm">
          <h2 className="font-display text-2xl font-bold">Mining & Milling</h2>
          <p className="mt-3 text-sm leading-6 text-foreground/70">
            Our Mining & Milling division handles exploration, extraction and
            comminution with modern plant design and experienced metallurgical
            teams. We manage the full value chain from pit to concentrate,
            ensuring quality control and optimized recovery rates.
          </p>
          <h3 className="mt-5 text-sm font-bold">Services</h3>
          <ul className="mt-2 space-y-1.5 text-sm text-foreground/70">
            <li>- Open-pit extraction and site rehabilitation</li>
            <li>- Crushing, milling and mineral processing</li>
            <li>- Ore haulage and stockpile management</li>
          </ul>
          <a
            href="https://wa.me/263771234567"
            className="mt-6 inline-block rounded-md bg-brand px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-brand-dark"
          >
            Inquire via WhatsApp
          </a>
        </div>
        <div className="rounded-xl border border-black/10 bg-white p-6 shadow-sm">
          <h3 className="font-display font-bold">Gallery</h3>
          <div className="mt-4 grid grid-cols-2 gap-3">
            {GALLERY.map((src, index) => (
              <Image
                key={src}
                src={src}
                alt={`Mining and milling gallery image ${index + 1}`}
                width={600}
                height={450}
                className="h-28 w-full rounded-lg object-cover"
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

const VALUES_CARDS = [
  {
    title: "Our Mission",
    body: "Deliver sustainable industrial solutions that support national development and create economic opportunities for communities.",
  },
  {
    title: "Our Vision",
    body: "To be the leading industrial partner in Southern Africa known for reliability, safety and responsible growth.",
  },
  {
    title: "Values",
    body: "Safety, Integrity, Reliability and Sustainability guide every decision across our divisions.",
  },
];

function About() {
  return (
    <section id="about" className="mx-auto max-w-6xl px-4 py-12 sm:px-6">
      <div className="rounded-xl border border-black/10 bg-white p-6 shadow-sm sm:p-8">
        <h2 className="font-display text-2xl font-bold">
          About Cossy Rules Holdings
        </h2>
        <p className="mt-4 text-sm leading-6 text-foreground/70">
          Cossy Rules Holdings is a diversified industrial conglomerate
          headquartered in Kadoma, Zimbabwe. Since inception, we have grown
          into a multi-division enterprise providing critical resources and
          services across mining, processing, construction materials,
          logistics, manufacturing and property development. Our strategic
          focus is to build resilient local capacity while maintaining
          international standards of safety, environmental stewardship and
          operational excellence.
        </p>
        <div className="mt-6 grid gap-4 sm:grid-cols-3">
          {VALUES_CARDS.map((card) => (
            <div
              key={card.title}
              className="rounded-lg border border-black/10 p-5"
            >
              <h3 className="font-display text-sm font-bold text-brand">
                {card.title}
              </h3>
              <p className="mt-2 text-sm leading-6 text-foreground/70">
                {card.body}
              </p>
            </div>
          ))}
        </div>
        <div className="mt-6 grid items-center gap-6 sm:grid-cols-[1fr_1.4fr]">
          <Image
            src="https://images.unsplash.com/photo-1605152276897-4f618f831968?w=800&q=70"
            alt="Industrial facilities in Kadoma"
            width={800}
            height={500}
            className="h-48 w-full rounded-lg object-cover"
          />
          <div>
            <h3 className="font-display font-bold">Kadoma, Zimbabwe</h3>
            <p className="mt-2 text-sm leading-6 text-foreground/70">
              Our headquarters and primary industrial park are located in
              Kadoma, enabling strategic access to major road and rail networks
              for efficient distribution across the region.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

function Contact() {
  return (
    <section id="contact" className="mx-auto max-w-6xl px-4 py-12 sm:px-6">
      <div className="grid gap-5 lg:grid-cols-2">
        <div className="rounded-xl border border-black/10 bg-white p-6 shadow-sm">
          <h2 className="font-display text-2xl font-bold">Contact Us</h2>
          <div className="mt-5 space-y-4 text-sm">
            <div>
              <p className="text-xs text-foreground/60">Hotline</p>
              <p className="font-display text-xl font-bold">+263 77 123 4567</p>
            </div>
            <div>
              <p className="text-xs text-foreground/60">General Inquiries</p>
              <p className="font-semibold">+263 4 234 567</p>
            </div>
            <div>
              <p className="text-xs text-foreground/60">Email</p>
              <p className="font-semibold">info@cossyrules.co.zw</p>
            </div>
            <div>
              <p className="text-xs text-foreground/60">Office Hours</p>
              <p className="font-semibold">Mon - Fri 08:00 - 17:00</p>
            </div>
          </div>
          <div className="mt-6 flex flex-wrap gap-3">
            <a
              href="https://wa.me/263771234567"
              className="flex items-center gap-2 rounded-md bg-green-600 px-4 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-green-700"
            >
              <svg viewBox="0 0 24 24" fill="currentColor" className="size-4">
                <path d="M17.47 14.38c-.3-.15-1.76-.87-2.03-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.94 1.17-.17.2-.35.22-.64.07-.3-.15-1.26-.46-2.4-1.47-.88-.79-1.48-1.76-1.65-2.06-.17-.3-.02-.46.13-.61.13-.13.3-.35.44-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.08-.15-.67-1.62-.92-2.22-.24-.58-.49-.5-.67-.51h-.57c-.2 0-.52.07-.79.37-.27.3-1.04 1.02-1.04 2.48s1.06 2.88 1.21 3.08c.15.2 2.1 3.2 5.08 4.49.71.3 1.26.49 1.7.63.71.22 1.36.19 1.87.12.57-.09 1.76-.72 2.01-1.42.25-.7.25-1.29.17-1.42-.07-.13-.27-.2-.57-.35zM12.05 21.79h-.01c-1.77 0-3.51-.48-5.03-1.38l-.36-.21-3.74.98 1-3.65-.24-.37a9.87 9.87 0 01-1.51-5.26c0-5.45 4.44-9.88 9.9-9.88 2.64 0 5.13 1.03 7 2.9a9.83 9.83 0 012.89 7c0 5.45-4.44 9.87-9.9 9.87zm8.42-18.29A11.82 11.82 0 0012.05 0C5.5 0 .16 5.34.16 11.9c0 2.1.55 4.14 1.59 5.95L.06 24l6.3-1.65a11.9 11.9 0 005.68 1.45h.01c6.55 0 11.89-5.34 11.89-11.9a11.82 11.82 0 00-3.47-8.4z" />
              </svg>
              Chat on WhatsApp
            </a>
            <a
              href="tel:+263771234567"
              className="rounded-md bg-brand px-4 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-brand-dark"
            >
              Request a Call Back
            </a>
          </div>
        </div>

        <div className="overflow-hidden rounded-xl border border-black/10 bg-white shadow-sm">
          <p className="px-6 pt-6 font-display font-bold">Office Location</p>
          <div className="p-6 pt-4">
            <iframe
              title="Kadoma, Zimbabwe map"
              src="https://www.openstreetmap.org/export/embed.html?bbox=29.85%2C-18.38%2C29.98%2C-18.29&layer=mapnik&marker=-18.335%2C29.915"
              className="h-72 w-full rounded-lg border border-black/10"
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

const QUICK_LINKS = ["Divisions", "Sustainability", "Careers", "Investor Relations"];

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

function Footer() {
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
                <a href="#divisions" className="hover:text-brand">
                  {link}
                </a>
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

export default function Home() {
  return (
    <div className="flex flex-1 flex-col bg-zinc-50">
      <Header />
      <main className="flex-1">
        <Hero />
        <Divisions />
        <TrustAndLocations />
        <Insights />
        <FeaturedDivision />
        <About />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

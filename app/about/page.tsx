import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Building2, Factory, MapPin, Mountain } from "lucide-react";
import { Footer, Header } from "../components/site";

export const metadata: Metadata = {
  title: "About | Cossy Rules Holdings",
  description:
    "The story of Cossy Rules Holdings: our history, our 'Where there is a will, there is a way' philosophy, and our locations across Zimbabwe.",
};

function AboutHero() {
  return (
    <section className="mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:py-16">
      <div className="grid items-center gap-10 lg:grid-cols-[1.1fr_1fr]">
        <div>
          <p className="text-xs font-bold uppercase tracking-widest text-brand">
            About the Group
          </p>
          <h1 className="mt-3 font-display text-4xl font-bold tracking-tight sm:text-5xl">
            Built in Kadoma. Trusted across Southern Africa.
          </h1>
          <p className="mt-4 max-w-xl text-sm leading-6 text-foreground/70">
            Cossy Rules Holdings is a diversified industrial conglomerate that
            grew from a single gold milling operation into seven divisions
            spanning mining, processing, construction materials, logistics,
            manufacturing, retail and property. This is our story.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <a
              href="#history"
              className="rounded-md bg-brand px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-brand-dark"
            >
              Our History
            </a>
            <a
              href="#locations"
              className="rounded-md border border-black/15 px-5 py-2.5 text-sm font-semibold transition-colors hover:border-brand hover:text-brand"
            >
              Our Locations
            </a>
          </div>
        </div>
        <div className="overflow-hidden rounded-xl border border-black/10 shadow-lg">
          <Image
            src="https://images.unsplash.com/photo-1605152276897-4f618f831968?w=1200&q=75"
            alt="Cossy Rules industrial facilities"
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

function Positioning() {
  return (
    <section className="mx-auto max-w-6xl px-4 py-12 sm:px-6">
      <div className="rounded-xl bg-brand p-8 text-white shadow-lg sm:p-12">
        <p className="text-xs font-bold uppercase tracking-widest text-white/70">
          Our Philosophy
        </p>
        <h2 className="mt-4 font-display text-3xl font-bold leading-tight sm:text-4xl">
          &ldquo;Where there is a will, there is a way.&rdquo;
        </h2>
        <p className="mt-5 max-w-3xl text-sm leading-7 text-white/85">
          This motto has guided the group since day one. Operating in a
          demanding environment taught us that capability is built, not
          bought: when equipment was scarce, we engineered our own solutions;
          when supply chains failed, we built our own fleet; when markets
          shifted, we diversified. Every division in the group exists because
          we found a way where others saw a dead end.
        </p>
        <div className="mt-8 grid gap-4 sm:grid-cols-3">
          {[
            {
              title: "Resourcefulness",
              body: "We solve problems with what is available and invest until it is world-class.",
            },
            {
              title: "Resilience",
              body: "Diversified revenue and local capacity keep us delivering through every cycle.",
            },
            {
              title: "Responsibility",
              body: "Growth is only worth having when communities and the environment grow with us.",
            },
          ].map((item) => (
            <div key={item.title} className="rounded-lg bg-white/10 p-5">
              <h3 className="font-display font-bold">{item.title}</h3>
              <p className="mt-2 text-sm leading-6 text-white/80">
                {item.body}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

const MILESTONES = [
  {
    year: "2008",
    title: "Founded in Kadoma",
    body: "Cossy Rules begins as a single custom gold milling plant serving small-scale miners in the Kadoma district.",
  },
  {
    year: "2012",
    title: "Transport & Logistics division",
    body: "Frustrated by unreliable haulage, we buy our first five trucks. The internal fleet grows into a full logistics business serving external clients.",
  },
  {
    year: "2015",
    title: "Cyanidation & Elution plants",
    body: "We move up the value chain with our first cyanidation plant and elution circuit, bringing gold recovery in-house under strict environmental controls.",
  },
  {
    year: "2018",
    title: "Construction Aggregates",
    body: "The group opens its first quarry, supplying crushed stone and aggregates to regional road and infrastructure projects.",
  },
  {
    year: "2021",
    title: "Manufacturing & Retail",
    body: "Diversification beyond mining: tissue production lines are commissioned and the first furniture showroom opens in Kadoma.",
  },
  {
    year: "2024",
    title: "Real Estate arm",
    body: "Strategic land holdings are consolidated into a property division developing industrial estates and commercial facilities.",
  },
];

function History() {
  return (
    <section id="history" className="mx-auto max-w-6xl px-4 py-12 sm:px-6">
      <h2 className="font-display text-2xl font-bold">Company History</h2>
      <p className="mt-3 max-w-2xl text-sm leading-6 text-foreground/70">
        Eighteen years of finding a way — from one milling plant to a
        seven-division industrial group.
      </p>
      <ol className="relative mt-8 space-y-6 border-l-2 border-brand/20 pl-8">
        {MILESTONES.map((milestone) => (
          <li key={milestone.year} className="relative">
            <span className="absolute -left-[41px] top-1 size-4 rounded-full border-4 border-brand-light bg-brand" />
            <div className="rounded-xl border border-black/10 bg-white p-5 shadow-sm">
              <p className="font-display text-sm font-bold text-brand">
                {milestone.year}
              </p>
              <h3 className="mt-1 font-display font-bold">{milestone.title}</h3>
              <p className="mt-2 text-sm leading-6 text-foreground/70">
                {milestone.body}
              </p>
            </div>
          </li>
        ))}
      </ol>
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

function MissionVisionValues() {
  return (
    <section className="mx-auto max-w-6xl px-4 py-12 sm:px-6">
      <div className="grid gap-4 sm:grid-cols-3">
        {VALUES_CARDS.map((card) => (
          <div
            key={card.title}
            className="rounded-xl border border-black/10 bg-white p-6 shadow-sm"
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
    </section>
  );
}

const LOCATIONS = [
  {
    name: "Head Office & Industrial Park",
    area: "Kadoma",
    description:
      "Group headquarters, milling and elution plants, tissue production lines and the flagship furniture showroom.",
    icon: <Building2 className="size-5" strokeWidth={2.5} />,
  },
  {
    name: "Mining & Quarry Operations",
    area: "Midlands Province",
    description:
      "Open-pit mining sites and aggregate quarries supplying regional infrastructure projects.",
    icon: <Mountain className="size-5" strokeWidth={2.5} />,
  },
  {
    name: "Processing & Project Sites",
    area: "Mashonaland West",
    description:
      "Cyanidation plants and project sites distributed along the Harare-Bulawayo corridor.",
    icon: <Factory className="size-5" strokeWidth={2.5} />,
  },
];

function Locations() {
  return (
    <section id="locations" className="mx-auto max-w-6xl px-4 py-12 sm:px-6">
      <h2 className="font-display text-2xl font-bold">Locations</h2>
      <p className="mt-3 max-w-2xl text-sm leading-6 text-foreground/70">
        Headquartered in Kadoma with operations across the Midlands and
        Mashonaland provinces, positioned on major road and rail networks for
        efficient distribution.
      </p>
      <div className="mt-6 grid gap-5 lg:grid-cols-[1fr_1.2fr]">
        <div className="space-y-4">
          {LOCATIONS.map((location) => (
            <div
              key={location.name}
              className="flex gap-4 rounded-xl border border-black/10 bg-white p-5 shadow-sm"
            >
              <span className="flex size-10 shrink-0 items-center justify-center rounded-lg bg-brand-light text-brand">
                {location.icon}
              </span>
              <div>
                <h3 className="font-display font-bold">{location.name}</h3>
                <p className="mt-0.5 flex items-center gap-1 text-xs font-semibold text-brand">
                  <MapPin className="size-3.5" /> {location.area}
                </p>
                <p className="mt-2 text-sm leading-6 text-foreground/70">
                  {location.description}
                </p>
              </div>
            </div>
          ))}
        </div>
        <div className="overflow-hidden rounded-xl border border-black/10 bg-white shadow-sm">
          <iframe
            title="Cossy Rules Holdings locations map"
            src="https://www.openstreetmap.org/export/embed.html?bbox=29.85%2C-18.38%2C29.98%2C-18.29&layer=mapnik&marker=-18.335%2C29.915"
            className="h-full min-h-80 w-full"
            loading="lazy"
          />
        </div>
      </div>
    </section>
  );
}

function ContactCta() {
  return (
    <section className="mx-auto max-w-6xl px-4 py-12 sm:px-6">
      <div className="flex flex-col gap-4 rounded-xl border border-black/10 bg-white p-6 shadow-sm sm:flex-row sm:items-center sm:justify-between sm:p-8">
        <div>
          <h2 className="font-display text-xl font-bold">
            Want to work with the group?
          </h2>
          <p className="mt-2 text-sm leading-6 text-foreground/70">
            Talk to us about partnerships, supply contracts or site visits.
          </p>
        </div>
        <Link
          href="/#contact"
          className="shrink-0 rounded-md bg-brand px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-brand-dark"
        >
          Contact Us
        </Link>
      </div>
    </section>
  );
}

export default function AboutPage() {
  return (
    <div className="flex flex-1 flex-col bg-zinc-50">
      <Header />
      <main className="flex-1">
        <AboutHero />
        <Positioning />
        <History />
        <MissionVisionValues />
        <Locations />
        <ContactCta />
      </main>
      <Footer />
    </div>
  );
}

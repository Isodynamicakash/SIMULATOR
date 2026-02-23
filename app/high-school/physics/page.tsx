import Link from "next/link";

const chapterCards = [
  {
    slug: "motion",
    title: "Motion",
    description:
      "Kinematics basics with interactive visualizations for displacement, speed, velocity, and acceleration.",
    badge: "Live simulation",
    accent: "sky",
  },
  {
    slug: "work-energy-power",
    title: "Work, Energy & Power",
    description:
      "Understand work done, kinetic and potential energy, conservation principles, and power.",
    badge: "Live simulation",
    accent: "cyan",
  },
  {
    slug: "sound",
    title: "Sound",
    description:
      "Explore wave behavior, frequency, wavelength, speed of sound, reflection, echo, and reverberation.",
    badge: "New",
    accent: "teal",
  },
  {
    slug: "sources-of-energy",
    title: "Sources of Energy",
    description:
      "Compare renewable and non-renewable energy systems, efficiency, and real-world environmental impact.",
    badge: "New",
    accent: "emerald",
  },
  {
    slug: "light",
    title: "Light",
    description:
      "Learn reflection, refraction, optical effects, and geometric optics through interactive scenes.",
    badge: "Live simulation",
    accent: "amber",
  },
  {
    slug: "electricity",
    title: "Electricity",
    description:
      "Build intuition for current, voltage, resistance, and electric circuits with hands-on controls.",
    badge: "Live simulation",
    accent: "violet",
  },
  {
    slug: "magnetism",
    title: "Magnetism",
    description:
      "Visualize magnetic fields, electromagnets, and induction concepts with interactive models.",
    badge: "Live simulation",
    accent: "fuchsia",
  },
  {
    slug: "gravitation-fluids",
    title: "Gravitation & Fluids",
    description:
      "From gravity and pressure to buoyancy and fluid flow, connect formulas to interactive experiments.",
    badge: "Live simulation",
    accent: "indigo",
  },
  {
    slug: "matter-density-states",
    title: "Matter, Density & States",
    description:
      "Study particle models, density, phase changes, and thermal behavior with visual simulations.",
    badge: "Live simulation",
    accent: "lime",
  },
] as const;

const accentClasses: Record<(typeof chapterCards)[number]["accent"], string> = {
  sky: "border-sky-500/40 bg-sky-500/10 text-sky-300",
  cyan: "border-cyan-500/40 bg-cyan-500/10 text-cyan-300",
  teal: "border-teal-500/40 bg-teal-500/10 text-teal-300",
  emerald: "border-emerald-500/40 bg-emerald-500/10 text-emerald-300",
  amber: "border-amber-500/40 bg-amber-500/10 text-amber-300",
  violet: "border-violet-500/40 bg-violet-500/10 text-violet-300",
  fuchsia: "border-fuchsia-500/40 bg-fuchsia-500/10 text-fuchsia-300",
  indigo: "border-indigo-500/40 bg-indigo-500/10 text-indigo-300",
  lime: "border-lime-500/40 bg-lime-500/10 text-lime-300",
};

export const metadata = {
  title: "High School Physics | Illustrate.live",
  description: "Explore High School Physics chapters with interactive simulations and guided subtopics.",
};

export default function HighSchoolPhysicsPage() {
  return (
    <main className="relative min-h-screen overflow-hidden">
      <div className="absolute inset-0 -z-10 bg-gradient-to-br from-neutral-950 via-neutral-900 to-black" />

      <section className="mx-auto max-w-7xl px-6 pt-28 pb-24">
        <h1 className="text-5xl font-bold tracking-tight text-white">High School Physics</h1>
        <p className="mt-4 max-w-3xl text-lg text-neutral-300">
          Choose a chapter to open simulations and topic-wise interactive pages.
        </p>

        <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {chapterCards.map((chapter) => (
            <Link
              key={chapter.slug}
              href={`/high-school/physics/${chapter.slug}`}
              className="rounded-3xl border border-neutral-800 bg-neutral-900/80 p-6 transition hover:-translate-y-0.5 hover:border-neutral-600 hover:bg-neutral-900"
            >
              <h2 className="text-xl font-semibold text-white">{chapter.title}</h2>
              <p className="mt-2 text-sm leading-relaxed text-neutral-400">{chapter.description}</p>
              <span
                className={`mt-4 inline-flex rounded-full border px-3 py-1 text-xs font-medium ${accentClasses[chapter.accent]}`}
              >
                {chapter.badge}
              </span>
            </Link>
          ))}
        </div>

        <Link
          href="/"
          className="mt-10 inline-block rounded-xl border border-neutral-600 px-6 py-3 text-neutral-300 transition hover:bg-neutral-800"
        >
          Back to Illustrate
        </Link>
      </section>
    </main>
  );
}

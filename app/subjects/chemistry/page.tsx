import Link from "next/link";

const topics = [
  {
    title: "Chemical Reactions",
    description:
      "Observe how reactants transform into products and how conditions affect reactions.",
    href: "/subjects/chemistry/chemical-reactions",
  },
  {
    title: "Reaction Rate",
    description:
      "See how temperature, concentration, and catalysts affect reaction speed.",
    href: "/subjects/chemistry/reaction-rate",
  },
  {
    title: "Chemical Equilibrium",
    description:
      "Understand reversible reactions and Le Chatelier’s principle visually.",
    href: "/subjects/chemistry/equilibrium",
  },
  {
    title: "Acids & Bases",
    description:
      "Explore pH, strength, and neutralization using interactive scales.",
    href: "/subjects/chemistry/acids-bases",
  },
];

export default function ChemistryPage() {
  return (
    <main className="relative overflow-hidden">
      <div className="absolute inset-0 -z-10 bg-gradient-to-br from-neutral-950 via-neutral-900 to-black" />

      {/* Header */}
      <section className="mx-auto max-w-7xl px-6 pt-28 pb-20">
        <div className="max-w-3xl">
          <h1 className="text-5xl font-bold tracking-tight text-white">
            Chemistry
          </h1>

          <p className="mt-6 text-xl text-neutral-400">
            Watch matter change.
            Adjust conditions and see chemical behavior unfold in real time.
          </p>
        </div>
      </section>

      {/* Topics */}
      <section className="mx-auto max-w-7xl px-6 pb-28">
        <div className="grid gap-8 md:grid-cols-2">
          {topics.map((topic) => (
            <Link
              key={topic.title}
              href={topic.href}
              className="group rounded-3xl border border-neutral-800 bg-neutral-900 p-8 transition hover:-translate-y-1 hover:border-neutral-600 hover:bg-neutral-800"
            >
              <h2 className="text-2xl font-semibold text-white">
                {topic.title}
              </h2>

              <p className="mt-4 text-neutral-400 leading-relaxed">
                {topic.description}
              </p>

              <div className="mt-6 text-sm font-medium text-neutral-300 group-hover:text-white">
                Explore →
              </div>
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
}

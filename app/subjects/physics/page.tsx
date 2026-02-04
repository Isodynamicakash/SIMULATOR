import Link from "next/link";

const topics = [
  {
    title: "Gravity",
    description:
      "Understand gravitational force, free fall, and weight through interactive visualizations.",
    href: "/subjects/physics/gravity",
  },
  {
    title: "Rutherford Gold Foil Experiment",
    description:
      "Visualize alpha-particle scattering to see evidence for a tiny, dense atomic nucleus.",
    href: "/subjects/physics/rutherford-gold-foil",
  },
  {
    title: "Motion",
    description:
      "Explore displacement, velocity, acceleration, and motion graphs intuitively.",
    href: "/subjects/physics/motion",
  },
  {
    title: "Laws of Motion",
    description:
      "See how forces affect motion with real-time simulations of Newton’s laws.",
    href: "/subjects/physics/laws-of-motion",
  },
  {
    title: "Work & Energy",
    description:
      "Visualize work, kinetic energy, potential energy, and conservation laws.",
    href: "/subjects/physics/work-energy",
  },
];

export default function PhysicsPage() {
  return (
    <main className="relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-br from-neutral-950 via-neutral-900 to-black" />

      {/* Header */}
      <section className="mx-auto max-w-7xl px-6 pt-28 pb-20">
        <div className="max-w-3xl">
          <h1 className="text-5xl font-bold tracking-tight text-white">
            Physics
          </h1>

          <p className="mt-6 text-xl text-neutral-400">
            Learn physics by seeing how the world actually works.
            Change values. Observe motion. Build intuition.
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

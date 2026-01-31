import Link from "next/link";

const subjects = [
  {
    title: "Physics",
    description:
      "Motion, forces, energy, gravity, electricity — explored through interactive visual simulations.",
    href: "/subjects/physics",
  },
  {
    title: "Chemistry",
    description:
      "Reactions, equilibrium, kinetics, acids & bases — see chemistry change in real time.",
    href: "/subjects/chemistry",
  },
  {
    title: "Biology",
    description:
      "Cells, enzymes, genetics, and life processes explained visually and intuitively.",
    href: "/subjects/biology",
  },
];

export default function SubjectsPage() {
  return (
    <main className="relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-br from-neutral-950 via-neutral-900 to-black" />

      <section className="mx-auto max-w-7xl px-6 pt-28 pb-24">
        {/* Header */}
        <div className="max-w-2xl">
          <h1 className="text-5xl font-bold tracking-tight text-white">
            Subjects
          </h1>

          <p className="mt-4 text-lg text-neutral-400">
            Choose a subject and explore concepts through interactive
            illustrations and simulations.
          </p>
        </div>

        {/* Cards */}
        <div className="mt-16 grid gap-8 md:grid-cols-3">
          {subjects.map((subject) => (
            <Link
              key={subject.title}
              href={subject.href}
              className="group rounded-3xl border border-neutral-800 bg-neutral-900 p-8 transition hover:-translate-y-1 hover:border-neutral-600 hover:bg-neutral-800"
            >
              <h2 className="text-2xl font-semibold text-white">
                {subject.title}
              </h2>

              <p className="mt-4 text-neutral-400 leading-relaxed">
                {subject.description}
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

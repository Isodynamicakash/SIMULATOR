import Link from "next/link";

const subjects = [
  {
    title: "Physics",
    description: "Mechanics, waves, heat, and more with interactive simulations.",
    href: "/subjects/class-11/physics",
  },
  {
    title: "Mathematics",
    description: "Algebra, calculus, and coordinate geometry visualized clearly.",
    href: "/subjects/class-11/maths",
  },
  {
    title: "Chemistry",
    description: "Structure, bonding, and reactions explained visually.",
    href: "/subjects/class-11/chemistry",
  },
  {
    title: "Biology",
    description: "Cells, physiology, and genetics through diagrams and animations.",
    href: "/subjects/class-11/biology",
  },
];

export default function Class11SubjectsPage() {
  return (
    <main className="relative overflow-hidden">
      <div className="absolute inset-0 -z-10 bg-gradient-to-br from-neutral-950 via-neutral-900 to-black" />

      <section className="mx-auto max-w-7xl px-6 pt-28 pb-24">
        <div className="max-w-2xl">
          <h1 className="text-5xl font-bold tracking-tight text-white">
            Class 11
          </h1>
          <p className="mt-4 text-lg text-neutral-400">
            Choose a subject to explore its chapters and interactive topics.
          </p>
        </div>

        <div className="mt-16 grid gap-8 md:grid-cols-2">
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
                Open →
              </div>
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
}


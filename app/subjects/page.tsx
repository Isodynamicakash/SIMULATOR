import Link from "next/link";

const classes = [
  {
    title: "Class 9",
    description: "Foundation concepts with simple, visual explanations.",
    href: "/subjects/class-9",
  },
  {
    title: "Class 10",
    description: "Key board exam topics with intuitive illustrations.",
    href: "/subjects/class-10",
  },
  {
    title: "Class 11",
    description: "Core senior-secondary physics, chemistry, maths, and biology.",
    href: "/subjects/class-11",
  },
  {
    title: "Class 12",
    description: "Advanced topics preparing you for boards and entrance exams.",
    href: "/subjects/class-12",
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
            Explore Concepts
          </h1>

          <p className="mt-4 text-lg text-neutral-400">
            Start by choosing your class, then pick a subject and chapter to
            dive into interactive topics.
          </p>
        </div>

        {/* Class cards */}
        <div className="mt-16 grid gap-8 md:grid-cols-2">
          {classes.map((item) => (
            <Link
              key={item.title}
              href={item.href}
              className="group rounded-3xl border border-neutral-800 bg-neutral-900 p-8 transition hover:-translate-y-1 hover:border-neutral-600 hover:bg-neutral-800"
            >
              <h2 className="text-2xl font-semibold text-white">
                {item.title}
              </h2>

              <p className="mt-4 text-neutral-400 leading-relaxed">
                {item.description}
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

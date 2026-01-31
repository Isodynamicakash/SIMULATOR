import Link from "next/link";

export default function HomePage() {
  return (
    <main className="relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-br from-neutral-950 via-neutral-900 to-black" />

      {/* HERO */}
      <section className="mx-auto max-w-7xl px-6 pt-28 pb-20 text-center">
        <h1 className="text-6xl md:text-7xl font-extrabold tracking-tight text-white">
          Illustrated Concepts
        </h1>

        <p className="mx-auto mt-6 max-w-2xl text-xl text-neutral-400">
          See science in action.
          <span className="block">
            Change parameters. Watch concepts come alive.
          </span>
        </p>

        <div className="mt-10 flex justify-center">
          <Link
            href="/subjects"
            className="rounded-2xl bg-white px-10 py-4 text-black font-semibold hover:bg-neutral-200 transition"
          >
            Explore Concepts →
          </Link>
        </div>
      </section>

      {/* FEATURES */}
      <section className="mx-auto max-w-7xl px-6 pb-24">
        <div className="grid gap-8 md:grid-cols-3">
          {[
            {
              title: "Interactive",
              desc: "Adjust values and instantly see changes in behavior, motion, or reactions.",
            },
            {
              title: "Visual First",
              desc: "Designed to build intuition before formulas and definitions.",
            },
            {
              title: "Concept Focused",
              desc: "Each page explains one idea deeply, not superficially.",
            },
          ].map((item) => (
            <div
              key={item.title}
              className="rounded-3xl border border-neutral-800 bg-neutral-900 p-8"
            >
              <h3 className="text-xl font-semibold text-white">
                {item.title}
              </h3>
              <p className="mt-3 text-neutral-400 text-base">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="border-t border-neutral-800">
        <div className="mx-auto max-w-7xl px-6 py-20 text-center">
          <h2 className="text-4xl font-bold text-white">
            Start with one concept.
          </h2>

          <p className="mt-4 text-lg text-neutral-400">
            Understanding begins with seeing.
          </p>

          <Link
            href="/subjects/physics/gravity"
            className="inline-block mt-8 rounded-2xl bg-white px-10 py-4 text-black font-semibold hover:bg-neutral-200 transition"
          >
            Try Gravity →
          </Link>
        </div>
      </section>
    </main>
  );
}

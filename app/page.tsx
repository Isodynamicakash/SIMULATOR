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

      {/* Interactive demos – at bottom of landing page */}
      <section className="border-t border-neutral-800">
        <div className="mx-auto max-w-7xl px-6 py-20">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-white">
              Start with one concept.
            </h2>
            <p className="mt-4 text-lg text-neutral-400">
              Understanding begins with seeing. Try these interactive demos.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 max-w-4xl mx-auto">
            <Link
              href="/subjects/physics/gravity"
              className="group rounded-2xl border border-neutral-800 bg-neutral-900/80 p-6 transition hover:-translate-y-0.5 hover:border-neutral-600 hover:bg-neutral-900 text-left"
            >
              <div className="text-lg font-semibold text-white">
                Gravity – Free fall & bounces
              </div>
              <p className="mt-2 text-sm text-neutral-400">
                Visualize motion under gravity with live control of g, height, and initial velocity.
              </p>
              <span className="mt-4 inline-flex items-center rounded-full border border-emerald-500/40 bg-emerald-500/10 px-3 py-1.5 text-xs font-medium text-emerald-300 group-hover:border-emerald-400 group-hover:bg-emerald-500/15">
                Live illustration · Open simulator
              </span>
            </Link>

            <Link
              href="/subjects/physics/rutherford-gold-foil"
              className="group rounded-2xl border border-neutral-800 bg-neutral-900/80 p-6 transition hover:-translate-y-0.5 hover:border-neutral-600 hover:bg-neutral-900 text-left"
            >
              <div className="text-lg font-semibold text-white">
                Rutherford gold foil experiment
              </div>
              <p className="mt-2 text-sm text-neutral-400">
                Watch α-particles scatter from a tiny nucleus with controllable Z and energy.
              </p>
              <span className="mt-4 inline-flex items-center rounded-full border border-sky-500/40 bg-sky-500/10 px-3 py-1.5 text-xs font-medium text-sky-300 group-hover:border-sky-400 group-hover:bg-sky-500/15">
                Live illustration · Open simulator
              </span>
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}

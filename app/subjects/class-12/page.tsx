export default function Class12Page() {
  return (
    <main className="relative overflow-hidden">
      <div className="absolute inset-0 -z-10 bg-gradient-to-br from-neutral-950 via-neutral-900 to-black" />
      <section className="mx-auto max-w-7xl px-6 pt-28 pb-24">
        <h1 className="text-5xl font-bold tracking-tight text-white">Class 12</h1>
        <p className="mt-4 text-lg text-neutral-400">
          Choose a subject to explore its chapters and interactive topics.
        </p>

        <div className="mt-12 grid gap-8 md:grid-cols-2">
          <a
            href="/subjects/class-12/physics"
            className="group rounded-3xl border border-neutral-800 bg-neutral-900 p-8 transition hover:-translate-y-1 hover:border-neutral-600 hover:bg-neutral-800"
          >
            <h2 className="text-2xl font-semibold text-white">Physics</h2>
            <p className="mt-4 text-neutral-400 leading-relaxed">
              Electrostatics, magnetism, optics, and modern physics with
              structured chapter-wise navigation.
            </p>
            <div className="mt-6 text-sm font-medium text-neutral-300 group-hover:text-white">
              Open →
            </div>
          </a>

          <a
            href="/subjects/class-12/chemistry"
            className="group rounded-3xl border border-neutral-800 bg-neutral-900 p-8 transition hover:-translate-y-1 hover:border-neutral-600 hover:bg-neutral-800"
          >
            <h2 className="text-2xl font-semibold text-white">Chemistry</h2>
            <p className="mt-4 text-neutral-400 leading-relaxed">
              Solid state, solutions, electrochemistry, kinetics, organic and
              inorganic chemistry with chapter-wise topics and subtopics.
            </p>
            <div className="mt-6 text-sm font-medium text-neutral-300 group-hover:text-white">
              Open →
            </div>
          </a>

          <div className="rounded-3xl border border-neutral-900/80 bg-neutral-950/60 p-8">
            <h2 className="text-2xl font-semibold text-neutral-300">
              Other subjects
            </h2>
            <p className="mt-4 text-neutral-500">
              Mathematics and Biology content for Class 12 is{" "}
              <span className="font-semibold text-neutral-200">coming soon</span>.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}


import Link from "next/link";

export default function SubjectsPage() {
  return (
    <main className="relative overflow-hidden">
      <div className="absolute inset-0 -z-10 bg-gradient-to-br from-neutral-950 via-neutral-900 to-black" />
      <section className="mx-auto max-w-7xl px-6 pt-28 pb-24">
        <h1 className="text-5xl font-bold tracking-tight text-white">
          Explore by class
        </h1>
        <p className="mt-4 text-lg text-neutral-400">
          Choose a class to see subjects and chapters.
        </p>
        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {["class-9", "class-10", "class-11", "class-12"].map((cls) => (
            <Link
              key={cls}
              href={`/subjects/${cls}`}
              className="rounded-3xl border border-neutral-800 bg-neutral-900/80 p-6 transition hover:-translate-y-0.5 hover:border-neutral-600"
            >
              <h2 className="text-xl font-semibold text-white">
                {cls === "class-9" ? "Class 9" : cls === "class-10" ? "Class 10" : cls === "class-11" ? "Class 11" : "Class 12"}
              </h2>
              <p className="mt-2 text-sm text-neutral-400">Open →</p>
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
}

import Link from "next/link";
import { mathsChapters } from "./chapters-data";

export default function Class11MathsPage() {
  return (
    <main className="relative overflow-hidden">
      <div className="absolute inset-0 -z-10 bg-gradient-to-br from-neutral-950 via-neutral-900 to-black" />

      <section className="mx-auto max-w-7xl px-6 pt-28 pb-24">
        <div className="max-w-3xl">
          <h1 className="text-5xl font-bold tracking-tight text-white">
            Class 11 Mathematics
          </h1>
          <p className="mt-4 text-lg text-neutral-400">
            Choose a chapter to see topics and subtopics. Use the breadcrumb and
            topic buttons to navigate deeper. Blank pages are marked{" "}
            <span className="font-semibold text-neutral-100">coming soon</span>.
          </p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {mathsChapters.map((chapter) => (
            <Link
              key={chapter.id}
              href={`/subjects/class-11/maths/${chapter.id}`}
              className="group rounded-3xl border border-neutral-800 bg-neutral-900/80 p-6 transition hover:-translate-y-0.5 hover:border-neutral-600 hover:bg-neutral-800"
            >
              <h2 className="text-xl font-semibold text-white">
                {chapter.title}
              </h2>
              <div className="mt-4 text-sm font-medium text-neutral-300 group-hover:text-white">
                Open chapter →
              </div>
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
}


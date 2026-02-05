import Link from "next/link";
import { class12ChemistryChapters } from "./chapters-data";

export default function Class12ChemistryPage() {
  return (
    <main className="relative overflow-hidden">
      <div className="absolute inset-0 -z-10 bg-gradient-to-br from-neutral-950 via-neutral-900 to-black" />
      <section className="mx-auto max-w-7xl px-6 pt-28 pb-24">
        <h1 className="text-5xl font-bold tracking-tight text-white">
          Class 12 Chemistry
        </h1>
        <p className="mt-4 text-lg text-neutral-400">
          Choose a chapter to explore topics and subtopics.
        </p>
        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {class12ChemistryChapters.map((chapter) => (
            <Link
              key={chapter.id}
              href={`/subjects/class-12/chemistry/${chapter.id}`}
              className="rounded-3xl border border-neutral-800 bg-neutral-900/80 p-6 transition hover:border-neutral-600"
            >
              <h2 className="text-xl font-semibold text-white">{chapter.title}</h2>
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
}

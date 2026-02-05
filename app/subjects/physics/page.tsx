import Link from "next/link";
import { physicsChapters } from "@/app/subjects/class-11/physics/chapters-data";

export default function PhysicsSubjectPage() {
  return (
    <main className="relative min-h-screen overflow-hidden">
      <div className="absolute inset-0 -z-10 bg-gradient-to-br from-neutral-950 via-neutral-900 to-black" />
      <section className="mx-auto max-w-7xl px-6 pt-28 pb-12">
        <h1 className="text-5xl font-bold tracking-tight text-white">
          Physics – Interactive demos
        </h1>
        <p className="mt-4 text-lg text-neutral-400">
          Ready-to-use simulators and Class 11 chapters below.
        </p>
        <div className="mt-10 grid gap-4 md:grid-cols-2">
          <Link
            href="/subjects/physics/gravity"
            className="rounded-2xl border border-neutral-800 bg-neutral-950/80 p-6 transition hover:border-emerald-500/50 hover:bg-neutral-900"
          >
            <div className="font-semibold text-white">Gravity – Free fall & bounces</div>
            <p className="mt-2 text-sm text-neutral-400">
              Control g, height, mass and see motion under gravity.
            </p>
            <span className="mt-4 inline-block rounded-full border border-emerald-500/40 bg-emerald-500/10 px-3 py-1.5 text-xs font-medium text-emerald-300">
              Live illustration
            </span>
          </Link>
          <Link
            href="/subjects/physics/rutherford-gold-foil"
            className="rounded-2xl border border-neutral-800 bg-neutral-950/80 p-6 transition hover:border-sky-500/50 hover:bg-neutral-900"
          >
            <div className="font-semibold text-white">Rutherford gold foil experiment</div>
            <p className="mt-2 text-sm text-neutral-400">
              α-particles, gold foil, nucleus. Adjust Z, energy, emission rate.
            </p>
            <span className="mt-4 inline-block rounded-full border border-sky-500/40 bg-sky-500/10 px-3 py-1.5 text-xs font-medium text-sky-300">
              Live illustration
            </span>
          </Link>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-24 pt-8 border-t border-neutral-800">
        <h2 className="text-2xl font-bold tracking-tight text-white">
          Class 11 Physics – Chapters
        </h2>
        <p className="mt-2 text-neutral-400">
          Choose a chapter to see topics and subtopics.
        </p>
        <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {physicsChapters.map((chapter) => (
            <Link
              key={chapter.id}
              href={`/subjects/class-11/physics/${chapter.id}`}
              className="group rounded-2xl border border-neutral-800 bg-neutral-900/80 p-4 transition hover:-translate-y-0.5 hover:border-neutral-600 hover:bg-neutral-800"
            >
              <div className="font-semibold text-white group-hover:text-white">
                {chapter.title}
              </div>
              <span className="mt-2 inline-block text-sm text-neutral-400 group-hover:text-neutral-300">
                Open chapter →
              </span>
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
}

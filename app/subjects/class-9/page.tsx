import Link from "next/link";

export default function Class9Page() {
  return (
    <main className="relative overflow-hidden">
      <div className="absolute inset-0 -z-10 bg-gradient-to-br from-neutral-950 via-neutral-900 to-black" />
      <section className="mx-auto max-w-7xl px-6 pt-28 pb-24">
        <h1 className="text-5xl font-bold tracking-tight text-white">Class 9</h1>
        <p className="mt-4 text-lg text-neutral-400">Choose a subject.</p>
        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {["physics", "chemistry", "biology", "maths"].map((subject) => (
            <Link
              key={subject}
              href={`/subjects/class-9/${subject}`}
              className="rounded-3xl border border-neutral-800 bg-neutral-900/80 p-6 transition hover:border-neutral-600"
            >
              <h2 className="text-xl font-semibold text-white capitalize">{subject}</h2>
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
}

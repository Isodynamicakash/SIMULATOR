import Link from "next/link";

export default function TopicPage() {
  return (
    <main className="relative min-h-screen overflow-hidden">
      <div className="absolute inset-0 -z-10 bg-gradient-to-br from-neutral-950 via-neutral-900 to-black" />
      <section className="mx-auto max-w-7xl px-6 pt-28 pb-24">
      <nav className="flex flex-wrap items-center gap-1 text-sm mb-6">
        <Link href="/subjects/class-12" className="text-neutral-400 hover:text-white transition">{"Class 12"}</Link>
        <span className="text-neutral-600">/</span>
        <Link href="/subjects/class-12/physics" className="text-neutral-400 hover:text-white transition">{"Physics"}</Link>
        <span className="text-neutral-600">/</span>
        <Link href="/subjects/class-12/physics/chapter-4-moving-charges-and-magnetism" className="text-neutral-400 hover:text-white transition">{"Chapter 4: Moving Charges and Magnetism"}</Link>
        <span className="text-neutral-600">/</span>
        <span className="text-white">{"Force between Two Parallel Currents"}</span>
      </nav>
        <h1 className="text-3xl font-bold tracking-tight text-white">{"Force between Two Parallel Currents"}</h1>

        <div className="mt-8">
        <div className="rounded-2xl border border-neutral-800 bg-neutral-950/80 p-6">
          <p className="text-neutral-400">Illustration for this topic is <span className="font-semibold text-emerald-300">coming soon</span>.</p>
        </div>
        </div>
      </section>
    </main>
  );
}

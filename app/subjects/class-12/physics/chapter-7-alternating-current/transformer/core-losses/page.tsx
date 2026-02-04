import Link from "next/link";

export default function SubtopicPage() {
  return (
    <main className="relative min-h-screen overflow-hidden">
      <div className="absolute inset-0 -z-10 bg-gradient-to-br from-neutral-950 via-neutral-900 to-black" />
      <section className="mx-auto max-w-4xl px-6 pt-28 pb-24">
      <nav className="flex flex-wrap items-center gap-1 text-sm mb-6">
        <Link href="/subjects/class-12" className="text-neutral-400 hover:text-white transition">{"Class 12"}</Link>
        <span className="text-neutral-600">/</span>
        <Link href="/subjects/class-12/physics" className="text-neutral-400 hover:text-white transition">{"Physics"}</Link>
        <span className="text-neutral-600">/</span>
        <Link href="/subjects/class-12/physics/chapter-7-alternating-current" className="text-neutral-400 hover:text-white transition">{"Chapter 7: Alternating Current"}</Link>
        <span className="text-neutral-600">/</span>
        <Link href="/subjects/class-12/physics/chapter-7-alternating-current/transformer" className="text-neutral-400 hover:text-white transition">{"Transformer"}</Link>
        <span className="text-neutral-600">/</span>
        <span className="text-white">{"Core Losses"}</span>
      </nav>
        <h1 className="text-3xl font-bold tracking-tight text-white">{"Core Losses"}</h1>
        <div className="mt-6 rounded-2xl border border-neutral-800 bg-neutral-950/80 p-6">
          <p className="text-neutral-400">Illustration for this subtopic is <span className="font-semibold text-emerald-300">coming soon</span>.</p>
        </div>
      </section>
    </main>
  );
}

import Link from "next/link";

export default function SubtopicPage() {
  return (
    <main className="relative min-h-screen overflow-hidden">
      <div className="absolute inset-0 -z-10 bg-gradient-to-br from-neutral-950 via-neutral-900 to-black" />
      <section className="mx-auto max-w-4xl px-6 pt-28 pb-24">
      <nav className="flex flex-wrap items-center gap-1 text-sm mb-6">
        <Link href="/subjects/class-11" className="text-neutral-400 hover:text-white transition">{"Class 11"}</Link>
        <span className="text-neutral-600">/</span>
        <Link href="/subjects/class-11/chemistry" className="text-neutral-400 hover:text-white transition">{"Chemistry"}</Link>
        <span className="text-neutral-600">/</span>
        <Link href="/subjects/class-11/chemistry/chapter-11-the-p-block-elements" className="text-neutral-400 hover:text-white transition">{"Chapter 11: The p-Block Elements"}</Link>
        <span className="text-neutral-600">/</span>
        <Link href="/subjects/class-11/chemistry/chapter-11-the-p-block-elements/group-14-elements-the-carbon-family" className="text-neutral-400 hover:text-white transition">{"Group 14 Elements: The Carbon Family"}</Link>
        <span className="text-neutral-600">/</span>
        <span className="text-white">{"Chemical Properties"}</span>
      </nav>
        <h1 className="text-3xl font-bold tracking-tight text-white">{"Chemical Properties"}</h1>
        <div className="mt-6 rounded-2xl border border-neutral-800 bg-neutral-950/80 p-6">
          <p className="text-neutral-400">Illustration for this subtopic is <span className="font-semibold text-emerald-300">coming soon</span>.</p>
        </div>
      </section>
    </main>
  );
}

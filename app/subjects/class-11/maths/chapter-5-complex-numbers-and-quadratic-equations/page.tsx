import Link from "next/link";

export default function ChapterPage() {
  return (
    <main className="relative min-h-screen overflow-hidden">
      <div className="absolute inset-0 -z-10 bg-gradient-to-br from-neutral-950 via-neutral-900 to-black" />
      <section className="mx-auto max-w-7xl px-6 pt-28 pb-24">
      <nav className="flex flex-wrap items-center gap-1 text-sm mb-6">
        <Link href="/subjects/class-11" className="text-neutral-400 hover:text-white transition">{"Class 11"}</Link>
        <span className="text-neutral-600">/</span>
        <Link href="/subjects/class-11/maths" className="text-neutral-400 hover:text-white transition">{"Mathematics"}</Link>
        <span className="text-neutral-600">/</span>
        <span className="text-white">{"Chapter 5: Complex Numbers and Quadratic Equations"}</span>
      </nav>
        <h1 className="text-3xl font-bold tracking-tight text-white">{"Chapter 5: Complex Numbers and Quadratic Equations"}</h1>
        <p className="mt-2 text-neutral-400">Choose a topic to explore.</p>
        <div className="mt-8 grid gap-3 md:grid-cols-2">
            <Link href="/subjects/class-11/maths/chapter-5-complex-numbers-and-quadratic-equations/complex-numbers" className="group rounded-2xl border border-neutral-800 bg-neutral-950/70 p-4 transition hover:-translate-y-0.5 hover:border-neutral-600 hover:bg-neutral-900">
              <div className="text-sm font-semibold text-white">{"Complex Numbers"}</div>
              <div className="mt-3 inline-flex items-center rounded-full border border-neutral-800 bg-neutral-900 px-2.5 py-1 text-[11px] font-medium text-neutral-300 group-hover:border-emerald-500/50 group-hover:bg-emerald-500/10 group-hover:text-emerald-200">
                Open topic
              </div>
            </Link>
            <Link href="/subjects/class-11/maths/chapter-5-complex-numbers-and-quadratic-equations/algebra-of-complex-numbers" className="group rounded-2xl border border-neutral-800 bg-neutral-950/70 p-4 transition hover:-translate-y-0.5 hover:border-neutral-600 hover:bg-neutral-900">
              <div className="text-sm font-semibold text-white">{"Algebra of Complex Numbers"}</div>
              <div className="mt-3 inline-flex items-center rounded-full border border-neutral-800 bg-neutral-900 px-2.5 py-1 text-[11px] font-medium text-neutral-300 group-hover:border-emerald-500/50 group-hover:bg-emerald-500/10 group-hover:text-emerald-200">
                Open topic
              </div>
            </Link>
            <Link href="/subjects/class-11/maths/chapter-5-complex-numbers-and-quadratic-equations/the-square-roots-of-a-complex-number" className="group rounded-2xl border border-neutral-800 bg-neutral-950/70 p-4 transition hover:-translate-y-0.5 hover:border-neutral-600 hover:bg-neutral-900">
              <div className="text-sm font-semibold text-white">{"The Square Roots of a Complex Number"}</div>
              <div className="mt-3 inline-flex items-center rounded-full border border-neutral-800 bg-neutral-900 px-2.5 py-1 text-[11px] font-medium text-neutral-300 group-hover:border-emerald-500/50 group-hover:bg-emerald-500/10 group-hover:text-emerald-200">
                Open topic
              </div>
            </Link>
            <Link href="/subjects/class-11/maths/chapter-5-complex-numbers-and-quadratic-equations/argand-plane-and-polar-representation" className="group rounded-2xl border border-neutral-800 bg-neutral-950/70 p-4 transition hover:-translate-y-0.5 hover:border-neutral-600 hover:bg-neutral-900">
              <div className="text-sm font-semibold text-white">{"Argand Plane and Polar Representation"}</div>
              <div className="mt-3 inline-flex items-center rounded-full border border-neutral-800 bg-neutral-900 px-2.5 py-1 text-[11px] font-medium text-neutral-300 group-hover:border-emerald-500/50 group-hover:bg-emerald-500/10 group-hover:text-emerald-200">
                Open topic
              </div>
            </Link>
            <Link href="/subjects/class-11/maths/chapter-5-complex-numbers-and-quadratic-equations/quadratic-equations" className="group rounded-2xl border border-neutral-800 bg-neutral-950/70 p-4 transition hover:-translate-y-0.5 hover:border-neutral-600 hover:bg-neutral-900">
              <div className="text-sm font-semibold text-white">{"Quadratic Equations"}</div>
              <div className="mt-3 inline-flex items-center rounded-full border border-neutral-800 bg-neutral-900 px-2.5 py-1 text-[11px] font-medium text-neutral-300 group-hover:border-emerald-500/50 group-hover:bg-emerald-500/10 group-hover:text-emerald-200">
                Open topic
              </div>
            </Link>
        </div>
      </section>
    </main>
  );
}

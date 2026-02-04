import Link from "next/link";

export default function TopicPage() {
  return (
    <main className="relative min-h-screen overflow-hidden">
      <div className="absolute inset-0 -z-10 bg-gradient-to-br from-neutral-950 via-neutral-900 to-black" />
      <section className="mx-auto max-w-7xl px-6 pt-28 pb-24">
      <nav className="flex flex-wrap items-center gap-1 text-sm mb-6">
        <Link href="/subjects/class-11" className="text-neutral-400 hover:text-white transition">{"Class 11"}</Link>
        <span className="text-neutral-600">/</span>
        <Link href="/subjects/class-11/maths" className="text-neutral-400 hover:text-white transition">{"Mathematics"}</Link>
        <span className="text-neutral-600">/</span>
        <Link href="/subjects/class-11/maths/chapter-5-complex-numbers-and-quadratic-equations" className="text-neutral-400 hover:text-white transition">{"Chapter 5: Complex Numbers and Quadratic Equations"}</Link>
        <span className="text-neutral-600">/</span>
        <span className="text-white">{"Complex Numbers"}</span>
      </nav>
        <h1 className="text-3xl font-bold tracking-tight text-white">{"Complex Numbers"}</h1>
<p className="mt-2 text-neutral-400">Choose a subtopic.</p>
        <div className="mt-8 grid gap-3 md:grid-cols-2">
            <Link href="/subjects/class-11/maths/chapter-5-complex-numbers-and-quadratic-equations/complex-numbers/introduction-to-complex-numbers" className="group rounded-2xl border border-neutral-800 bg-neutral-950/70 p-4 transition hover:-translate-y-0.5 hover:border-neutral-600 hover:bg-neutral-900">
              <div className="text-sm font-semibold text-white">{"Introduction to Complex Numbers"}</div>
              <div className="mt-3 inline-flex items-center rounded-full border border-neutral-800 bg-neutral-900 px-2.5 py-1 text-[11px] font-medium text-neutral-300 group-hover:border-emerald-500/50 group-hover:bg-emerald-500/10 group-hover:text-emerald-200">
                Open subtopic
              </div>
            </Link>
            <Link href="/subjects/class-11/maths/chapter-5-complex-numbers-and-quadratic-equations/complex-numbers/imaginary-numbers" className="group rounded-2xl border border-neutral-800 bg-neutral-950/70 p-4 transition hover:-translate-y-0.5 hover:border-neutral-600 hover:bg-neutral-900">
              <div className="text-sm font-semibold text-white">{"Imaginary Numbers"}</div>
              <div className="mt-3 inline-flex items-center rounded-full border border-neutral-800 bg-neutral-900 px-2.5 py-1 text-[11px] font-medium text-neutral-300 group-hover:border-emerald-500/50 group-hover:bg-emerald-500/10 group-hover:text-emerald-200">
                Open subtopic
              </div>
            </Link>
            <Link href="/subjects/class-11/maths/chapter-5-complex-numbers-and-quadratic-equations/complex-numbers/definition-of-complex-number" className="group rounded-2xl border border-neutral-800 bg-neutral-950/70 p-4 transition hover:-translate-y-0.5 hover:border-neutral-600 hover:bg-neutral-900">
              <div className="text-sm font-semibold text-white">{"Definition of Complex Number"}</div>
              <div className="mt-3 inline-flex items-center rounded-full border border-neutral-800 bg-neutral-900 px-2.5 py-1 text-[11px] font-medium text-neutral-300 group-hover:border-emerald-500/50 group-hover:bg-emerald-500/10 group-hover:text-emerald-200">
                Open subtopic
              </div>
            </Link>
            <Link href="/subjects/class-11/maths/chapter-5-complex-numbers-and-quadratic-equations/complex-numbers/real-part-and-imaginary-part" className="group rounded-2xl border border-neutral-800 bg-neutral-950/70 p-4 transition hover:-translate-y-0.5 hover:border-neutral-600 hover:bg-neutral-900">
              <div className="text-sm font-semibold text-white">{"Real Part and Imaginary Part"}</div>
              <div className="mt-3 inline-flex items-center rounded-full border border-neutral-800 bg-neutral-900 px-2.5 py-1 text-[11px] font-medium text-neutral-300 group-hover:border-emerald-500/50 group-hover:bg-emerald-500/10 group-hover:text-emerald-200">
                Open subtopic
              </div>
            </Link>
            <Link href="/subjects/class-11/maths/chapter-5-complex-numbers-and-quadratic-equations/complex-numbers/purely-real-and-purely-imaginary-numbers" className="group rounded-2xl border border-neutral-800 bg-neutral-950/70 p-4 transition hover:-translate-y-0.5 hover:border-neutral-600 hover:bg-neutral-900">
              <div className="text-sm font-semibold text-white">{"Purely Real and Purely Imaginary Numbers"}</div>
              <div className="mt-3 inline-flex items-center rounded-full border border-neutral-800 bg-neutral-900 px-2.5 py-1 text-[11px] font-medium text-neutral-300 group-hover:border-emerald-500/50 group-hover:bg-emerald-500/10 group-hover:text-emerald-200">
                Open subtopic
              </div>
            </Link>
        </div>
      </section>
    </main>
  );
}

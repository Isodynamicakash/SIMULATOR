import Link from "next/link";

export default function ChapterPage() {
  return (
    <main className="relative min-h-screen overflow-hidden">
      <div className="absolute inset-0 -z-10 bg-gradient-to-br from-neutral-950 via-neutral-900 to-black" />
      <section className="mx-auto max-w-7xl px-6 pt-28 pb-24">
      <nav className="flex flex-wrap items-center gap-1 text-sm mb-6">
        <Link href="/subjects/class-12" className="text-neutral-400 hover:text-white transition">{"Class 12"}</Link>
        <span className="text-neutral-600">/</span>
        <Link href="/subjects/class-12/physics" className="text-neutral-400 hover:text-white transition">{"Physics"}</Link>
        <span className="text-neutral-600">/</span>
        <span className="text-white">{"Chapter 4: Moving Charges and Magnetism"}</span>
      </nav>
        <h1 className="text-3xl font-bold tracking-tight text-white">{"Chapter 4: Moving Charges and Magnetism"}</h1>
        <p className="mt-2 text-neutral-400">Choose a topic to explore.</p>
        <div className="mt-8 grid gap-3 md:grid-cols-2">
            <Link href="/subjects/class-12/physics/chapter-4-moving-charges-and-magnetism/magnetic-force" className="group rounded-2xl border border-neutral-800 bg-neutral-950/70 p-4 transition hover:-translate-y-0.5 hover:border-neutral-600 hover:bg-neutral-900">
              <div className="text-sm font-semibold text-white">{"Magnetic Force"}</div>
              <div className="mt-3 inline-flex items-center rounded-full border border-neutral-800 bg-neutral-900 px-2.5 py-1 text-[11px] font-medium text-neutral-300 group-hover:border-emerald-500/50 group-hover:bg-emerald-500/10 group-hover:text-emerald-200">
                Open topic
              </div>
            </Link>
            <Link href="/subjects/class-12/physics/chapter-4-moving-charges-and-magnetism/motion-in-a-magnetic-field" className="group rounded-2xl border border-neutral-800 bg-neutral-950/70 p-4 transition hover:-translate-y-0.5 hover:border-neutral-600 hover:bg-neutral-900">
              <div className="text-sm font-semibold text-white">{"Motion in a Magnetic Field"}</div>
              <div className="mt-3 inline-flex items-center rounded-full border border-neutral-800 bg-neutral-900 px-2.5 py-1 text-[11px] font-medium text-neutral-300 group-hover:border-emerald-500/50 group-hover:bg-emerald-500/10 group-hover:text-emerald-200">
                Open topic
              </div>
            </Link>
            <Link href="/subjects/class-12/physics/chapter-4-moving-charges-and-magnetism/motion-in-a-uniform-magnetic-field" className="group rounded-2xl border border-neutral-800 bg-neutral-950/70 p-4 transition hover:-translate-y-0.5 hover:border-neutral-600 hover:bg-neutral-900">
              <div className="text-sm font-semibold text-white">{"Motion in a Uniform Magnetic Field"}</div>
              <div className="mt-3 inline-flex items-center rounded-full border border-neutral-800 bg-neutral-900 px-2.5 py-1 text-[11px] font-medium text-neutral-300 group-hover:border-emerald-500/50 group-hover:bg-emerald-500/10 group-hover:text-emerald-200">
                Open topic
              </div>
            </Link>
            <Link href="/subjects/class-12/physics/chapter-4-moving-charges-and-magnetism/magnetic-force-on-a-current-carrying-conductor" className="group rounded-2xl border border-neutral-800 bg-neutral-950/70 p-4 transition hover:-translate-y-0.5 hover:border-neutral-600 hover:bg-neutral-900">
              <div className="text-sm font-semibold text-white">{"Magnetic Force on a Current-Carrying Conductor"}</div>
              <div className="mt-3 inline-flex items-center rounded-full border border-neutral-800 bg-neutral-900 px-2.5 py-1 text-[11px] font-medium text-neutral-300 group-hover:border-emerald-500/50 group-hover:bg-emerald-500/10 group-hover:text-emerald-200">
                Open topic
              </div>
            </Link>
            <Link href="/subjects/class-12/physics/chapter-4-moving-charges-and-magnetism/torque-on-a-current-loop" className="group rounded-2xl border border-neutral-800 bg-neutral-950/70 p-4 transition hover:-translate-y-0.5 hover:border-neutral-600 hover:bg-neutral-900">
              <div className="text-sm font-semibold text-white">{"Torque on a Current Loop"}</div>
              <div className="mt-3 inline-flex items-center rounded-full border border-neutral-800 bg-neutral-900 px-2.5 py-1 text-[11px] font-medium text-neutral-300 group-hover:border-emerald-500/50 group-hover:bg-emerald-500/10 group-hover:text-emerald-200">
                Open topic
              </div>
            </Link>
            <Link href="/subjects/class-12/physics/chapter-4-moving-charges-and-magnetism/the-moving-coil-galvanometer" className="group rounded-2xl border border-neutral-800 bg-neutral-950/70 p-4 transition hover:-translate-y-0.5 hover:border-neutral-600 hover:bg-neutral-900">
              <div className="text-sm font-semibold text-white">{"The Moving Coil Galvanometer"}</div>
              <div className="mt-3 inline-flex items-center rounded-full border border-neutral-800 bg-neutral-900 px-2.5 py-1 text-[11px] font-medium text-neutral-300 group-hover:border-emerald-500/50 group-hover:bg-emerald-500/10 group-hover:text-emerald-200">
                Open topic
              </div>
            </Link>
            <Link href="/subjects/class-12/physics/chapter-4-moving-charges-and-magnetism/magnetic-field-due-to-a-current-element" className="group rounded-2xl border border-neutral-800 bg-neutral-950/70 p-4 transition hover:-translate-y-0.5 hover:border-neutral-600 hover:bg-neutral-900">
              <div className="text-sm font-semibold text-white">{"Magnetic Field due to a Current Element"}</div>
              <div className="mt-3 inline-flex items-center rounded-full border border-neutral-800 bg-neutral-900 px-2.5 py-1 text-[11px] font-medium text-neutral-300 group-hover:border-emerald-500/50 group-hover:bg-emerald-500/10 group-hover:text-emerald-200">
                Open topic
              </div>
            </Link>
            <Link href="/subjects/class-12/physics/chapter-4-moving-charges-and-magnetism/magnetic-field-on-the-axis-of-a-circular-current-loop" className="group rounded-2xl border border-neutral-800 bg-neutral-950/70 p-4 transition hover:-translate-y-0.5 hover:border-neutral-600 hover:bg-neutral-900">
              <div className="text-sm font-semibold text-white">{"Magnetic Field on the Axis of a Circular Current Loop"}</div>
              <div className="mt-3 inline-flex items-center rounded-full border border-neutral-800 bg-neutral-900 px-2.5 py-1 text-[11px] font-medium text-neutral-300 group-hover:border-emerald-500/50 group-hover:bg-emerald-500/10 group-hover:text-emerald-200">
                Open topic
              </div>
            </Link>
            <Link href="/subjects/class-12/physics/chapter-4-moving-charges-and-magnetism/ampere-s-circuital-law" className="group rounded-2xl border border-neutral-800 bg-neutral-950/70 p-4 transition hover:-translate-y-0.5 hover:border-neutral-600 hover:bg-neutral-900">
              <div className="text-sm font-semibold text-white">{"Ampere's Circuital Law"}</div>
              <div className="mt-3 inline-flex items-center rounded-full border border-neutral-800 bg-neutral-900 px-2.5 py-1 text-[11px] font-medium text-neutral-300 group-hover:border-emerald-500/50 group-hover:bg-emerald-500/10 group-hover:text-emerald-200">
                Open topic
              </div>
            </Link>
            <Link href="/subjects/class-12/physics/chapter-4-moving-charges-and-magnetism/the-solenoid-and-the-toroid" className="group rounded-2xl border border-neutral-800 bg-neutral-950/70 p-4 transition hover:-translate-y-0.5 hover:border-neutral-600 hover:bg-neutral-900">
              <div className="text-sm font-semibold text-white">{"The Solenoid and the Toroid"}</div>
              <div className="mt-3 inline-flex items-center rounded-full border border-neutral-800 bg-neutral-900 px-2.5 py-1 text-[11px] font-medium text-neutral-300 group-hover:border-emerald-500/50 group-hover:bg-emerald-500/10 group-hover:text-emerald-200">
                Open topic
              </div>
            </Link>
            <Link href="/subjects/class-12/physics/chapter-4-moving-charges-and-magnetism/force-between-two-parallel-currents" className="group rounded-2xl border border-neutral-800 bg-neutral-950/70 p-4 transition hover:-translate-y-0.5 hover:border-neutral-600 hover:bg-neutral-900">
              <div className="text-sm font-semibold text-white">{"Force between Two Parallel Currents"}</div>
              <div className="mt-3 inline-flex items-center rounded-full border border-neutral-800 bg-neutral-900 px-2.5 py-1 text-[11px] font-medium text-neutral-300 group-hover:border-emerald-500/50 group-hover:bg-emerald-500/10 group-hover:text-emerald-200">
                Open topic
              </div>
            </Link>
        </div>
      </section>
    </main>
  );
}

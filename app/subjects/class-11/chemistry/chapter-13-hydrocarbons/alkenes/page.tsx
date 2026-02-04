import Link from "next/link";

export default function TopicPage() {
  return (
    <main className="relative min-h-screen overflow-hidden">
      <div className="absolute inset-0 -z-10 bg-gradient-to-br from-neutral-950 via-neutral-900 to-black" />
      <section className="mx-auto max-w-7xl px-6 pt-28 pb-24">
      <nav className="flex flex-wrap items-center gap-1 text-sm mb-6">
        <Link href="/subjects/class-11" className="text-neutral-400 hover:text-white transition">{"Class 11"}</Link>
        <span className="text-neutral-600">/</span>
        <Link href="/subjects/class-11/chemistry" className="text-neutral-400 hover:text-white transition">{"Chemistry"}</Link>
        <span className="text-neutral-600">/</span>
        <Link href="/subjects/class-11/chemistry/chapter-13-hydrocarbons" className="text-neutral-400 hover:text-white transition">{"Chapter 13: Hydrocarbons"}</Link>
        <span className="text-neutral-600">/</span>
        <span className="text-white">{"Alkenes"}</span>
      </nav>
        <h1 className="text-3xl font-bold tracking-tight text-white">{"Alkenes"}</h1>
<p className="mt-2 text-neutral-400">Choose a subtopic.</p>
        <div className="mt-8 grid gap-3 md:grid-cols-2">
            <Link href="/subjects/class-11/chemistry/chapter-13-hydrocarbons/alkenes/nomenclature" className="group rounded-2xl border border-neutral-800 bg-neutral-950/70 p-4 transition hover:-translate-y-0.5 hover:border-neutral-600 hover:bg-neutral-900">
              <div className="text-sm font-semibold text-white">{"Nomenclature"}</div>
              <div className="mt-3 inline-flex items-center rounded-full border border-neutral-800 bg-neutral-900 px-2.5 py-1 text-[11px] font-medium text-neutral-300 group-hover:border-emerald-500/50 group-hover:bg-emerald-500/10 group-hover:text-emerald-200">
                Open subtopic
              </div>
            </Link>
            <Link href="/subjects/class-11/chemistry/chapter-13-hydrocarbons/alkenes/isomerism" className="group rounded-2xl border border-neutral-800 bg-neutral-950/70 p-4 transition hover:-translate-y-0.5 hover:border-neutral-600 hover:bg-neutral-900">
              <div className="text-sm font-semibold text-white">{"Isomerism"}</div>
              <div className="mt-3 inline-flex items-center rounded-full border border-neutral-800 bg-neutral-900 px-2.5 py-1 text-[11px] font-medium text-neutral-300 group-hover:border-emerald-500/50 group-hover:bg-emerald-500/10 group-hover:text-emerald-200">
                Open subtopic
              </div>
            </Link>
            <Link href="/subjects/class-11/chemistry/chapter-13-hydrocarbons/alkenes/structural-isomerism" className="group rounded-2xl border border-neutral-800 bg-neutral-950/70 p-4 transition hover:-translate-y-0.5 hover:border-neutral-600 hover:bg-neutral-900">
              <div className="text-sm font-semibold text-white">{"Structural Isomerism"}</div>
              <div className="mt-3 inline-flex items-center rounded-full border border-neutral-800 bg-neutral-900 px-2.5 py-1 text-[11px] font-medium text-neutral-300 group-hover:border-emerald-500/50 group-hover:bg-emerald-500/10 group-hover:text-emerald-200">
                Open subtopic
              </div>
            </Link>
            <Link href="/subjects/class-11/chemistry/chapter-13-hydrocarbons/alkenes/geometrical-isomerism" className="group rounded-2xl border border-neutral-800 bg-neutral-950/70 p-4 transition hover:-translate-y-0.5 hover:border-neutral-600 hover:bg-neutral-900">
              <div className="text-sm font-semibold text-white">{"Geometrical Isomerism"}</div>
              <div className="mt-3 inline-flex items-center rounded-full border border-neutral-800 bg-neutral-900 px-2.5 py-1 text-[11px] font-medium text-neutral-300 group-hover:border-emerald-500/50 group-hover:bg-emerald-500/10 group-hover:text-emerald-200">
                Open subtopic
              </div>
            </Link>
            <Link href="/subjects/class-11/chemistry/chapter-13-hydrocarbons/alkenes/preparation" className="group rounded-2xl border border-neutral-800 bg-neutral-950/70 p-4 transition hover:-translate-y-0.5 hover:border-neutral-600 hover:bg-neutral-900">
              <div className="text-sm font-semibold text-white">{"Preparation"}</div>
              <div className="mt-3 inline-flex items-center rounded-full border border-neutral-800 bg-neutral-900 px-2.5 py-1 text-[11px] font-medium text-neutral-300 group-hover:border-emerald-500/50 group-hover:bg-emerald-500/10 group-hover:text-emerald-200">
                Open subtopic
              </div>
            </Link>
            <Link href="/subjects/class-11/chemistry/chapter-13-hydrocarbons/alkenes/from-alkynes" className="group rounded-2xl border border-neutral-800 bg-neutral-950/70 p-4 transition hover:-translate-y-0.5 hover:border-neutral-600 hover:bg-neutral-900">
              <div className="text-sm font-semibold text-white">{"From Alkynes"}</div>
              <div className="mt-3 inline-flex items-center rounded-full border border-neutral-800 bg-neutral-900 px-2.5 py-1 text-[11px] font-medium text-neutral-300 group-hover:border-emerald-500/50 group-hover:bg-emerald-500/10 group-hover:text-emerald-200">
                Open subtopic
              </div>
            </Link>
            <Link href="/subjects/class-11/chemistry/chapter-13-hydrocarbons/alkenes/from-alkyl-halides" className="group rounded-2xl border border-neutral-800 bg-neutral-950/70 p-4 transition hover:-translate-y-0.5 hover:border-neutral-600 hover:bg-neutral-900">
              <div className="text-sm font-semibold text-white">{"From Alkyl Halides"}</div>
              <div className="mt-3 inline-flex items-center rounded-full border border-neutral-800 bg-neutral-900 px-2.5 py-1 text-[11px] font-medium text-neutral-300 group-hover:border-emerald-500/50 group-hover:bg-emerald-500/10 group-hover:text-emerald-200">
                Open subtopic
              </div>
            </Link>
            <Link href="/subjects/class-11/chemistry/chapter-13-hydrocarbons/alkenes/from-alcohols" className="group rounded-2xl border border-neutral-800 bg-neutral-950/70 p-4 transition hover:-translate-y-0.5 hover:border-neutral-600 hover:bg-neutral-900">
              <div className="text-sm font-semibold text-white">{"From Alcohols"}</div>
              <div className="mt-3 inline-flex items-center rounded-full border border-neutral-800 bg-neutral-900 px-2.5 py-1 text-[11px] font-medium text-neutral-300 group-hover:border-emerald-500/50 group-hover:bg-emerald-500/10 group-hover:text-emerald-200">
                Open subtopic
              </div>
            </Link>
            <Link href="/subjects/class-11/chemistry/chapter-13-hydrocarbons/alkenes/properties" className="group rounded-2xl border border-neutral-800 bg-neutral-950/70 p-4 transition hover:-translate-y-0.5 hover:border-neutral-600 hover:bg-neutral-900">
              <div className="text-sm font-semibold text-white">{"Properties"}</div>
              <div className="mt-3 inline-flex items-center rounded-full border border-neutral-800 bg-neutral-900 px-2.5 py-1 text-[11px] font-medium text-neutral-300 group-hover:border-emerald-500/50 group-hover:bg-emerald-500/10 group-hover:text-emerald-200">
                Open subtopic
              </div>
            </Link>
            <Link href="/subjects/class-11/chemistry/chapter-13-hydrocarbons/alkenes/physical-properties" className="group rounded-2xl border border-neutral-800 bg-neutral-950/70 p-4 transition hover:-translate-y-0.5 hover:border-neutral-600 hover:bg-neutral-900">
              <div className="text-sm font-semibold text-white">{"Physical Properties"}</div>
              <div className="mt-3 inline-flex items-center rounded-full border border-neutral-800 bg-neutral-900 px-2.5 py-1 text-[11px] font-medium text-neutral-300 group-hover:border-emerald-500/50 group-hover:bg-emerald-500/10 group-hover:text-emerald-200">
                Open subtopic
              </div>
            </Link>
            <Link href="/subjects/class-11/chemistry/chapter-13-hydrocarbons/alkenes/chemical-reactions" className="group rounded-2xl border border-neutral-800 bg-neutral-950/70 p-4 transition hover:-translate-y-0.5 hover:border-neutral-600 hover:bg-neutral-900">
              <div className="text-sm font-semibold text-white">{"Chemical Reactions"}</div>
              <div className="mt-3 inline-flex items-center rounded-full border border-neutral-800 bg-neutral-900 px-2.5 py-1 text-[11px] font-medium text-neutral-300 group-hover:border-emerald-500/50 group-hover:bg-emerald-500/10 group-hover:text-emerald-200">
                Open subtopic
              </div>
            </Link>
            <Link href="/subjects/class-11/chemistry/chapter-13-hydrocarbons/alkenes/addition-of-dihydrogen" className="group rounded-2xl border border-neutral-800 bg-neutral-950/70 p-4 transition hover:-translate-y-0.5 hover:border-neutral-600 hover:bg-neutral-900">
              <div className="text-sm font-semibold text-white">{"Addition of Dihydrogen"}</div>
              <div className="mt-3 inline-flex items-center rounded-full border border-neutral-800 bg-neutral-900 px-2.5 py-1 text-[11px] font-medium text-neutral-300 group-hover:border-emerald-500/50 group-hover:bg-emerald-500/10 group-hover:text-emerald-200">
                Open subtopic
              </div>
            </Link>
            <Link href="/subjects/class-11/chemistry/chapter-13-hydrocarbons/alkenes/addition-of-halogens" className="group rounded-2xl border border-neutral-800 bg-neutral-950/70 p-4 transition hover:-translate-y-0.5 hover:border-neutral-600 hover:bg-neutral-900">
              <div className="text-sm font-semibold text-white">{"Addition of Halogens"}</div>
              <div className="mt-3 inline-flex items-center rounded-full border border-neutral-800 bg-neutral-900 px-2.5 py-1 text-[11px] font-medium text-neutral-300 group-hover:border-emerald-500/50 group-hover:bg-emerald-500/10 group-hover:text-emerald-200">
                Open subtopic
              </div>
            </Link>
            <Link href="/subjects/class-11/chemistry/chapter-13-hydrocarbons/alkenes/addition-of-hydrogen-halides" className="group rounded-2xl border border-neutral-800 bg-neutral-950/70 p-4 transition hover:-translate-y-0.5 hover:border-neutral-600 hover:bg-neutral-900">
              <div className="text-sm font-semibold text-white">{"Addition of Hydrogen Halides"}</div>
              <div className="mt-3 inline-flex items-center rounded-full border border-neutral-800 bg-neutral-900 px-2.5 py-1 text-[11px] font-medium text-neutral-300 group-hover:border-emerald-500/50 group-hover:bg-emerald-500/10 group-hover:text-emerald-200">
                Open subtopic
              </div>
            </Link>
            <Link href="/subjects/class-11/chemistry/chapter-13-hydrocarbons/alkenes/addition-of-water" className="group rounded-2xl border border-neutral-800 bg-neutral-950/70 p-4 transition hover:-translate-y-0.5 hover:border-neutral-600 hover:bg-neutral-900">
              <div className="text-sm font-semibold text-white">{"Addition of Water"}</div>
              <div className="mt-3 inline-flex items-center rounded-full border border-neutral-800 bg-neutral-900 px-2.5 py-1 text-[11px] font-medium text-neutral-300 group-hover:border-emerald-500/50 group-hover:bg-emerald-500/10 group-hover:text-emerald-200">
                Open subtopic
              </div>
            </Link>
            <Link href="/subjects/class-11/chemistry/chapter-13-hydrocarbons/alkenes/oxidation" className="group rounded-2xl border border-neutral-800 bg-neutral-950/70 p-4 transition hover:-translate-y-0.5 hover:border-neutral-600 hover:bg-neutral-900">
              <div className="text-sm font-semibold text-white">{"Oxidation"}</div>
              <div className="mt-3 inline-flex items-center rounded-full border border-neutral-800 bg-neutral-900 px-2.5 py-1 text-[11px] font-medium text-neutral-300 group-hover:border-emerald-500/50 group-hover:bg-emerald-500/10 group-hover:text-emerald-200">
                Open subtopic
              </div>
            </Link>
            <Link href="/subjects/class-11/chemistry/chapter-13-hydrocarbons/alkenes/ozonolysis" className="group rounded-2xl border border-neutral-800 bg-neutral-950/70 p-4 transition hover:-translate-y-0.5 hover:border-neutral-600 hover:bg-neutral-900">
              <div className="text-sm font-semibold text-white">{"Ozonolysis"}</div>
              <div className="mt-3 inline-flex items-center rounded-full border border-neutral-800 bg-neutral-900 px-2.5 py-1 text-[11px] font-medium text-neutral-300 group-hover:border-emerald-500/50 group-hover:bg-emerald-500/10 group-hover:text-emerald-200">
                Open subtopic
              </div>
            </Link>
            <Link href="/subjects/class-11/chemistry/chapter-13-hydrocarbons/alkenes/polymerisation" className="group rounded-2xl border border-neutral-800 bg-neutral-950/70 p-4 transition hover:-translate-y-0.5 hover:border-neutral-600 hover:bg-neutral-900">
              <div className="text-sm font-semibold text-white">{"Polymerisation"}</div>
              <div className="mt-3 inline-flex items-center rounded-full border border-neutral-800 bg-neutral-900 px-2.5 py-1 text-[11px] font-medium text-neutral-300 group-hover:border-emerald-500/50 group-hover:bg-emerald-500/10 group-hover:text-emerald-200">
                Open subtopic
              </div>
            </Link>
        </div>
      </section>
    </main>
  );
}

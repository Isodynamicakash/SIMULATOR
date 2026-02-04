import Link from "next/link";

export const metadata = {
  title: "Nomenclature and Structure of Carbonyl Group | Chapter 12: Aldehydes, Ketones and Carboxylic Acids | Class 12 Chemistry",
  description: "Nomenclature and Structure of Carbonyl Group - Chapter 12: Aldehydes, Ketones and Carboxylic Acids. Class 12 Chemistry.",
  openGraph: {
    title: "Nomenclature and Structure of Carbonyl Group | Chapter 12: Aldehydes, Ketones and Carboxylic Acids | Class 12 Chemistry",
    description: "Nomenclature and Structure of Carbonyl Group - Chapter 12: Aldehydes, Ketones and Carboxylic Acids. Class 12 Chemistry.",
  },
};


export default function TopicPage() {
  return (
    <main className="relative min-h-screen overflow-hidden">
      <div className="absolute inset-0 -z-10 bg-gradient-to-br from-neutral-950 via-neutral-900 to-black" />
      <section className="mx-auto max-w-7xl px-6 pt-28 pb-24">
      <nav className="flex flex-wrap items-center gap-1 text-sm mb-6">
        <Link href="/subjects/class-12" className="text-neutral-400 hover:text-white transition">{"Class 12"}</Link>
        <span className="text-neutral-600">/</span>
        <Link href="/subjects/class-12/chemistry" className="text-neutral-400 hover:text-white transition">{"Chemistry"}</Link>
        <span className="text-neutral-600">/</span>
        <Link href="/subjects/class-12/chemistry/chapter-12-aldehydes-ketones-and-carboxylic-acids" className="text-neutral-400 hover:text-white transition">{"Chapter 12: Aldehydes, Ketones and Carboxylic Acids"}</Link>
        <span className="text-neutral-600">/</span>
        <span className="text-white">{"Nomenclature and Structure of Carbonyl Group"}</span>
      </nav>
        <h1 className="text-3xl font-bold tracking-tight text-white">{"Nomenclature and Structure of Carbonyl Group"}</h1>
<p className="mt-2 text-neutral-400">Choose a subtopic.</p>
        <div className="mt-8 grid gap-3 md:grid-cols-2">
            <Link href="/subjects/class-12/chemistry/chapter-12-aldehydes-ketones-and-carboxylic-acids/nomenclature-and-structure-of-carbonyl-group/common-names" className="group rounded-2xl border border-neutral-800 bg-neutral-950/70 p-4 transition hover:-translate-y-0.5 hover:border-neutral-600 hover:bg-neutral-900">
              <div className="text-sm font-semibold text-white">{"Common Names"}</div>
              <div className="mt-3 inline-flex items-center rounded-full border border-neutral-800 bg-neutral-900 px-2.5 py-1 text-[11px] font-medium text-neutral-300 group-hover:border-emerald-500/50 group-hover:bg-emerald-500/10 group-hover:text-emerald-200">
                Open subtopic
              </div>
            </Link>
            <Link href="/subjects/class-12/chemistry/chapter-12-aldehydes-ketones-and-carboxylic-acids/nomenclature-and-structure-of-carbonyl-group/iupac-names" className="group rounded-2xl border border-neutral-800 bg-neutral-950/70 p-4 transition hover:-translate-y-0.5 hover:border-neutral-600 hover:bg-neutral-900">
              <div className="text-sm font-semibold text-white">{"IUPAC Names"}</div>
              <div className="mt-3 inline-flex items-center rounded-full border border-neutral-800 bg-neutral-900 px-2.5 py-1 text-[11px] font-medium text-neutral-300 group-hover:border-emerald-500/50 group-hover:bg-emerald-500/10 group-hover:text-emerald-200">
                Open subtopic
              </div>
            </Link>
        </div>
      </section>
    </main>
  );
}

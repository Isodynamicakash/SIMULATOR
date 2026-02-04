import Link from "next/link";

export const metadata = {
  title: "Chemical Reactions of Haloalkanes | Chapter 10: Haloalkanes and Haloarenes | Class 12 Chemistry",
  description: "Chemical Reactions of Haloalkanes - Chapter 10: Haloalkanes and Haloarenes. Class 12 Chemistry.",
  openGraph: {
    title: "Chemical Reactions of Haloalkanes | Chapter 10: Haloalkanes and Haloarenes | Class 12 Chemistry",
    description: "Chemical Reactions of Haloalkanes - Chapter 10: Haloalkanes and Haloarenes. Class 12 Chemistry.",
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
        <Link href="/subjects/class-12/chemistry/chapter-10-haloalkanes-and-haloarenes" className="text-neutral-400 hover:text-white transition">{"Chapter 10: Haloalkanes and Haloarenes"}</Link>
        <span className="text-neutral-600">/</span>
        <span className="text-white">{"Chemical Reactions of Haloalkanes"}</span>
      </nav>
        <h1 className="text-3xl font-bold tracking-tight text-white">{"Chemical Reactions of Haloalkanes"}</h1>
<p className="mt-2 text-neutral-400">Choose a subtopic.</p>
        <div className="mt-8 grid gap-3 md:grid-cols-2">
            <Link href="/subjects/class-12/chemistry/chapter-10-haloalkanes-and-haloarenes/chemical-reactions-of-haloalkanes/nucleophilic-substitution-reactions" className="group rounded-2xl border border-neutral-800 bg-neutral-950/70 p-4 transition hover:-translate-y-0.5 hover:border-neutral-600 hover:bg-neutral-900">
              <div className="text-sm font-semibold text-white">{"Nucleophilic Substitution Reactions"}</div>
              <div className="mt-3 inline-flex items-center rounded-full border border-neutral-800 bg-neutral-900 px-2.5 py-1 text-[11px] font-medium text-neutral-300 group-hover:border-emerald-500/50 group-hover:bg-emerald-500/10 group-hover:text-emerald-200">
                Open subtopic
              </div>
            </Link>
            <Link href="/subjects/class-12/chemistry/chapter-10-haloalkanes-and-haloarenes/chemical-reactions-of-haloalkanes/sn1-mechanism" className="group rounded-2xl border border-neutral-800 bg-neutral-950/70 p-4 transition hover:-translate-y-0.5 hover:border-neutral-600 hover:bg-neutral-900">
              <div className="text-sm font-semibold text-white">{"SN1 Mechanism"}</div>
              <div className="mt-3 inline-flex items-center rounded-full border border-neutral-800 bg-neutral-900 px-2.5 py-1 text-[11px] font-medium text-neutral-300 group-hover:border-emerald-500/50 group-hover:bg-emerald-500/10 group-hover:text-emerald-200">
                Open subtopic
              </div>
            </Link>
            <Link href="/subjects/class-12/chemistry/chapter-10-haloalkanes-and-haloarenes/chemical-reactions-of-haloalkanes/sn2-mechanism" className="group rounded-2xl border border-neutral-800 bg-neutral-950/70 p-4 transition hover:-translate-y-0.5 hover:border-neutral-600 hover:bg-neutral-900">
              <div className="text-sm font-semibold text-white">{"SN2 Mechanism"}</div>
              <div className="mt-3 inline-flex items-center rounded-full border border-neutral-800 bg-neutral-900 px-2.5 py-1 text-[11px] font-medium text-neutral-300 group-hover:border-emerald-500/50 group-hover:bg-emerald-500/10 group-hover:text-emerald-200">
                Open subtopic
              </div>
            </Link>
            <Link href="/subjects/class-12/chemistry/chapter-10-haloalkanes-and-haloarenes/chemical-reactions-of-haloalkanes/optical-activity" className="group rounded-2xl border border-neutral-800 bg-neutral-950/70 p-4 transition hover:-translate-y-0.5 hover:border-neutral-600 hover:bg-neutral-900">
              <div className="text-sm font-semibold text-white">{"Optical Activity"}</div>
              <div className="mt-3 inline-flex items-center rounded-full border border-neutral-800 bg-neutral-900 px-2.5 py-1 text-[11px] font-medium text-neutral-300 group-hover:border-emerald-500/50 group-hover:bg-emerald-500/10 group-hover:text-emerald-200">
                Open subtopic
              </div>
            </Link>
            <Link href="/subjects/class-12/chemistry/chapter-10-haloalkanes-and-haloarenes/chemical-reactions-of-haloalkanes/elimination-reactions" className="group rounded-2xl border border-neutral-800 bg-neutral-950/70 p-4 transition hover:-translate-y-0.5 hover:border-neutral-600 hover:bg-neutral-900">
              <div className="text-sm font-semibold text-white">{"Elimination Reactions"}</div>
              <div className="mt-3 inline-flex items-center rounded-full border border-neutral-800 bg-neutral-900 px-2.5 py-1 text-[11px] font-medium text-neutral-300 group-hover:border-emerald-500/50 group-hover:bg-emerald-500/10 group-hover:text-emerald-200">
                Open subtopic
              </div>
            </Link>
            <Link href="/subjects/class-12/chemistry/chapter-10-haloalkanes-and-haloarenes/chemical-reactions-of-haloalkanes/reaction-with-metals" className="group rounded-2xl border border-neutral-800 bg-neutral-950/70 p-4 transition hover:-translate-y-0.5 hover:border-neutral-600 hover:bg-neutral-900">
              <div className="text-sm font-semibold text-white">{"Reaction with Metals"}</div>
              <div className="mt-3 inline-flex items-center rounded-full border border-neutral-800 bg-neutral-900 px-2.5 py-1 text-[11px] font-medium text-neutral-300 group-hover:border-emerald-500/50 group-hover:bg-emerald-500/10 group-hover:text-emerald-200">
                Open subtopic
              </div>
            </Link>
        </div>
      </section>
    </main>
  );
}

import Link from "next/link";

export const metadata = {
  title: "Positive Deviation from Raoult's Law | Chapter 2: Solutions | Class 12 Chemistry",
  description: "Positive Deviation from Raoult's Law - Ideal and Non-Ideal Solutions, Chapter 2: Solutions. Class 12 Chemistry notes and illustrations.",
  openGraph: {
    title: "Positive Deviation from Raoult's Law | Chapter 2: Solutions | Class 12 Chemistry",
    description: "Positive Deviation from Raoult's Law - Ideal and Non-Ideal Solutions, Chapter 2: Solutions. Class 12 Chemistry notes and illustrations.",
  },
};


export default function SubtopicPage() {
  return (
    <main className="relative min-h-screen overflow-hidden">
      <div className="absolute inset-0 -z-10 bg-gradient-to-br from-neutral-950 via-neutral-900 to-black" />
      <section className="mx-auto max-w-4xl px-6 pt-28 pb-24">
      <nav className="flex flex-wrap items-center gap-1 text-sm mb-6">
        <Link href="/subjects/class-12" className="text-neutral-400 hover:text-white transition">{"Class 12"}</Link>
        <span className="text-neutral-600">/</span>
        <Link href="/subjects/class-12/chemistry" className="text-neutral-400 hover:text-white transition">{"Chemistry"}</Link>
        <span className="text-neutral-600">/</span>
        <Link href="/subjects/class-12/chemistry/chapter-2-solutions" className="text-neutral-400 hover:text-white transition">{"Chapter 2: Solutions"}</Link>
        <span className="text-neutral-600">/</span>
        <Link href="/subjects/class-12/chemistry/chapter-2-solutions/ideal-and-non-ideal-solutions" className="text-neutral-400 hover:text-white transition">{"Ideal and Non-Ideal Solutions"}</Link>
        <span className="text-neutral-600">/</span>
        <span className="text-white">{"Positive Deviation from Raoult's Law"}</span>
      </nav>
        <h1 className="text-3xl font-bold tracking-tight text-white">{"Positive Deviation from Raoult's Law"}</h1>
        <div className="mt-6 rounded-2xl border border-neutral-800 bg-neutral-950/80 p-6">
          <p className="text-neutral-400">Illustration for this subtopic is <span className="font-semibold text-emerald-300">coming soon</span>.</p>
        </div>
      </section>
    </main>
  );
}

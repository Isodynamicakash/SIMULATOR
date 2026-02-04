import Link from "next/link";

export const metadata = {
  title: "Neurologically Active Drugs | Chapter 16: Chemistry in Everyday Life | Class 12 Chemistry",
  description: "Neurologically Active Drugs - Therapeutic Action of Different Classes of Drugs, Chapter 16: Chemistry in Everyday Life. Class 12 Chemistry n",
  openGraph: {
    title: "Neurologically Active Drugs | Chapter 16: Chemistry in Everyday Life | Class 12 Chemistry",
    description: "Neurologically Active Drugs - Therapeutic Action of Different Classes of Drugs, Chapter 16: Chemistry in Everyday Life. Class 12 Chemistry n",
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
        <Link href="/subjects/class-12/chemistry/chapter-16-chemistry-in-everyday-life" className="text-neutral-400 hover:text-white transition">{"Chapter 16: Chemistry in Everyday Life"}</Link>
        <span className="text-neutral-600">/</span>
        <Link href="/subjects/class-12/chemistry/chapter-16-chemistry-in-everyday-life/therapeutic-action-of-different-classes-of-drugs" className="text-neutral-400 hover:text-white transition">{"Therapeutic Action of Different Classes of Drugs"}</Link>
        <span className="text-neutral-600">/</span>
        <span className="text-white">{"Neurologically Active Drugs"}</span>
      </nav>
        <h1 className="text-3xl font-bold tracking-tight text-white">{"Neurologically Active Drugs"}</h1>
        <div className="mt-6 rounded-2xl border border-neutral-800 bg-neutral-950/80 p-6">
          <p className="text-neutral-400">Illustration for this subtopic is <span className="font-semibold text-emerald-300">coming soon</span>.</p>
        </div>
      </section>
    </main>
  );
}

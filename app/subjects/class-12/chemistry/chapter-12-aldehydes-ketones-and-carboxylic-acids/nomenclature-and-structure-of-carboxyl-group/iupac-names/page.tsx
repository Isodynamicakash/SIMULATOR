import Link from "next/link";

export const metadata = {
  title: "IUPAC Names | Chapter 12: Aldehydes, Ketones and Carboxylic Acids | Class 12 Chemistry",
  description: "IUPAC Names - Nomenclature and Structure of Carboxyl Group, Chapter 12: Aldehydes, Ketones and Carboxylic Acids. Class 12 Chemistry notes an",
  openGraph: {
    title: "IUPAC Names | Chapter 12: Aldehydes, Ketones and Carboxylic Acids | Class 12 Chemistry",
    description: "IUPAC Names - Nomenclature and Structure of Carboxyl Group, Chapter 12: Aldehydes, Ketones and Carboxylic Acids. Class 12 Chemistry notes an",
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
        <Link href="/subjects/class-12/chemistry/chapter-12-aldehydes-ketones-and-carboxylic-acids" className="text-neutral-400 hover:text-white transition">{"Chapter 12: Aldehydes, Ketones and Carboxylic Acids"}</Link>
        <span className="text-neutral-600">/</span>
        <Link href="/subjects/class-12/chemistry/chapter-12-aldehydes-ketones-and-carboxylic-acids/nomenclature-and-structure-of-carboxyl-group" className="text-neutral-400 hover:text-white transition">{"Nomenclature and Structure of Carboxyl Group"}</Link>
        <span className="text-neutral-600">/</span>
        <span className="text-white">{"IUPAC Names"}</span>
      </nav>
        <h1 className="text-3xl font-bold tracking-tight text-white">{"IUPAC Names"}</h1>
        <div className="mt-6 rounded-2xl border border-neutral-800 bg-neutral-950/80 p-6">
          <p className="text-neutral-400">Illustration for this subtopic is <span className="font-semibold text-emerald-300">coming soon</span>.</p>
        </div>
      </section>
    </main>
  );
}

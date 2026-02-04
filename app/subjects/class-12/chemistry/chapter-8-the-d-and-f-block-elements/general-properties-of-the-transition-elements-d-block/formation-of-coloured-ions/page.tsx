import Link from "next/link";

export const metadata = {
  title: "Formation of Coloured Ions | Chapter 8: The d- and f-Block Elements | Class 12 Chemistry",
  description: "Formation of Coloured Ions - General Properties of the Transition Elements (d-Block), Chapter 8: The d- and f-Block Elements. Class 12 Chemi",
  openGraph: {
    title: "Formation of Coloured Ions | Chapter 8: The d- and f-Block Elements | Class 12 Chemistry",
    description: "Formation of Coloured Ions - General Properties of the Transition Elements (d-Block), Chapter 8: The d- and f-Block Elements. Class 12 Chemi",
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
        <Link href="/subjects/class-12/chemistry/chapter-8-the-d-and-f-block-elements" className="text-neutral-400 hover:text-white transition">{"Chapter 8: The d- and f-Block Elements"}</Link>
        <span className="text-neutral-600">/</span>
        <Link href="/subjects/class-12/chemistry/chapter-8-the-d-and-f-block-elements/general-properties-of-the-transition-elements-d-block" className="text-neutral-400 hover:text-white transition">{"General Properties of the Transition Elements (d-Block)"}</Link>
        <span className="text-neutral-600">/</span>
        <span className="text-white">{"Formation of Coloured Ions"}</span>
      </nav>
        <h1 className="text-3xl font-bold tracking-tight text-white">{"Formation of Coloured Ions"}</h1>
        <div className="mt-6 rounded-2xl border border-neutral-800 bg-neutral-950/80 p-6">
          <p className="text-neutral-400">Illustration for this subtopic is <span className="font-semibold text-emerald-300">coming soon</span>.</p>
        </div>
      </section>
    </main>
  );
}

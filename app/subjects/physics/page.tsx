import Link from "next/link";

export default function PhysicsSubjectPage() {
  return (
    <main className="relative overflow-hidden">
      <div className="absolute inset-0 -z-10 bg-gradient-to-br from-neutral-950 via-neutral-900 to-black" />
      <section className="mx-auto max-w-7xl px-6 pt-28 pb-24">
        <h1 className="text-5xl font-bold tracking-tight text-white">
          Physics – Interactive demos
        </h1>
        <p className="mt-4 text-lg text-neutral-400">
          Ready-to-use simulators. More topics available via Class 11 / Class 12.
        </p>
        <div className="mt-10 grid gap-4 md:grid-cols-2">
          <Link
            href="/subjects/physics/gravity"
            className="rounded-2xl border border-neutral-800 bg-neutral-950/80 p-6 transition hover:border-emerald-500/50 hover:bg-neutral-900"
          >
            <div className="font-semibold text-white">Gravity – Free fall & bounces</div>
            <p className="mt-2 text-sm text-neutral-400">
              Control g, height, mass and see motion under gravity.
            </p>
            <span className="mt-4 inline-block rounded-full border border-emerald-500/40 bg-emerald-500/10 px-3 py-1.5 text-xs font-medium text-emerald-300">
              Live illustration
            </span>
          </Link>
          <Link
            href="/subjects/physics/rutherford-gold-foil"
            className="rounded-2xl border border-neutral-800 bg-neutral-950/80 p-6 transition hover:border-sky-500/50 hover:bg-neutral-900"
          >
            <div className="font-semibold text-white">Rutherford gold foil experiment</div>
            <p className="mt-2 text-sm text-neutral-400">
              α-particles, gold foil, nucleus. Adjust Z, energy, emission rate.
            </p>
            <span className="mt-4 inline-block rounded-full border border-sky-500/40 bg-sky-500/10 px-3 py-1.5 text-xs font-medium text-sky-300">
              Live illustration
            </span>
          </Link>
        </div>
      </section>
    </main>
  );
}

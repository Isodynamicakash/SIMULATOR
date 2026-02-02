import NewtonsPlayground from "../../../components/NewtonsPlayground";

export default function NewtonsLawPage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-neutral-950 via-neutral-900 to-black text-white">
      <section className="max-w-7xl mx-auto px-6 py-16">
        <h1 className="text-4xl md:text-6xl font-extrabold mb-6 text-center">
          Newton’s Laws of Motion
        </h1>

        <p className="text-neutral-400 text-center max-w-3xl mx-auto mb-12">
          Learn physics by watching forces act, objects move, stop, collide,
          and push back — not by memorizing formulas.
        </p>

        <NewtonsPlayground />
      </section>
    </main>
  );
}

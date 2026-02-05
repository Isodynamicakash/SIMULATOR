import { notFound } from "next/navigation";
import { physicsTopicMeta } from "@/lib/registries/physics";
import PhysicsSimulationLoader from "@/components/PhysicsSimulationLoader";

export const dynamic = "force-dynamic";

type PageProps = {
  params: Promise<{ topic: string }>;
};

export async function generateMetadata({ params }: PageProps) {
  const { topic } = await params;
  const meta = physicsTopicMeta[topic];
  if (!meta) return { title: "Topic not found" };
  return {
    title: meta.title,
    description: meta.description,
    openGraph: {
      title: meta.title,
      description: meta.description,
    },
  };
}

export default async function PhysicsTopicPage({ params }: PageProps) {
  const { topic } = await params;
  const meta = physicsTopicMeta[topic];

  if (!meta || !(topic === "gravity" || topic === "rutherford-gold-foil")) {
    notFound();
  }

  const displayTitle =
    topic === "gravity"
      ? "Gravity – Free fall & bounces"
      : topic === "rutherford-gold-foil"
        ? "Rutherford Gold Foil Experiment"
        : topic;

  return (
    <>
      {/* SEO content: server-rendered so crawlers see it in first HTML */}
      <section className="mx-auto max-w-7xl px-6 pt-10 pb-4">
        <div className="mb-6">
          <h1 className="text-3xl font-bold tracking-tight text-white">
            {displayTitle}
          </h1>
          <p className="mt-2 max-w-3xl text-sm text-neutral-400">
            {meta.description}
          </p>
        </div>
      </section>

        {/* Client-only simulation (lazy-loaded, not run at build time) */}
        <PhysicsSimulationLoader topic={topic} />
    </>
  );
}

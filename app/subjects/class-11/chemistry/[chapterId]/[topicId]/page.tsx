import Link from "next/link";
import { notFound } from "next/navigation";
import { chemistry11Chapters } from "../../data";

type TopicPageProps = {
  params: Promise<{ chapterId: string; topicId: string }> | { chapterId: string; topicId: string };
};

export function generateStaticParams() {
  return chemistry11Chapters.flatMap((chapter) =>
    chapter.topics.map((topic) => ({
      chapterId: chapter.id,
      topicId: topic.id,
    }))
  );
}

export default async function Class11ChemistryTopicPage({ params }: TopicPageProps) {
  const resolved = await Promise.resolve(params);
  const chapter = chemistry11Chapters.find((c) => c.id === resolved.chapterId);
  const topic = chapter?.topics.find((t) => t.id === resolved.topicId);

  if (!chapter || !topic) {
    notFound();
  }

  return (
    <main className="relative overflow-hidden">
      <div className="absolute inset-0 -z-10 bg-gradient-to-br from-neutral-950 via-neutral-900 to-black" />

      <section className="mx-auto max-w-4xl px-6 pt-28 pb-24">
        <p className="text-xs font-medium uppercase tracking-[0.25em] text-neutral-500">
          Class 11 · Chemistry · {chapter.part} chemistry
        </p>
        <h1 className="mt-3 text-3xl font-bold tracking-tight text-white">
          {topic.title}
        </h1>
        <p className="mt-2 text-sm text-neutral-400">
          Chapter: <span className="font-medium text-neutral-100">{chapter.title}</span>
        </p>

        <div className="mt-6 rounded-3xl border border-neutral-800 bg-neutral-900/80 p-6">
          <h2 className="text-sm font-semibold text-white">
            Subtopics in this concept
          </h2>

          {topic.subtopics.length > 0 ? (
            <ul className="mt-3 space-y-1.5 text-sm text-neutral-300">
              {topic.subtopics.map((sub) => (
                <li key={sub.id} className="flex items-start gap-2">
                  <span className="mt-[6px] h-1.5 w-1.5 flex-shrink-0 rounded-full bg-emerald-400" />
                  <Link
                    href={`/subjects/class-11/chemistry/${chapter.id}/${topic.id}/${sub.id}`}
                    className="text-emerald-200 hover:text-emerald-100 underline decoration-emerald-500/60 underline-offset-2"
                  >
                    {sub.title}
                  </Link>
                </li>
              ))}
            </ul>
          ) : (
            <p className="mt-3 text-sm text-neutral-400">
              Detailed subtopics for this concept will be added soon.
            </p>
          )}

          <div className="mt-6 rounded-2xl border border-neutral-700 bg-neutral-950/80 p-4 text-sm text-neutral-300">
            Each subtopic opens its own page where a dedicated illustration or
            simulator can be added later. All subtopics are currently marked as{" "}
            <span className="font-semibold text-emerald-300">coming soon</span>.
          </div>
        </div>
      </section>
    </main>
  );
}


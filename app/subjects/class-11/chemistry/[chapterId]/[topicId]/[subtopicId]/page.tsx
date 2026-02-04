import { notFound } from "next/navigation";
import { chemistry11Chapters } from "../../../data";

type SubtopicPageProps = {
  params:
    | Promise<{ chapterId: string; topicId: string; subtopicId: string }>
    | { chapterId: string; topicId: string; subtopicId: string };
};

export function generateStaticParams() {
  return chemistry11Chapters.flatMap((chapter) =>
    chapter.topics.flatMap((topic) =>
      topic.subtopics.map((sub) => ({
        chapterId: chapter.id,
        topicId: topic.id,
        subtopicId: sub.id,
      }))
    )
  );
}

export default async function Class11ChemistrySubtopicPage({
  params,
}: SubtopicPageProps) {
  const resolved = await Promise.resolve(params);
  const chapter = chemistry11Chapters.find((c) => c.id === resolved.chapterId);
  const topic = chapter?.topics.find((t) => t.id === resolved.topicId);
  const subtopic = topic?.subtopics.find((s) => s.id === resolved.subtopicId);

  if (!chapter || !topic || !subtopic) {
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
          {subtopic.title}
        </h1>
        <p className="mt-2 text-sm text-neutral-400">
          Chapter:{" "}
          <span className="font-medium text-neutral-100">{chapter.title}</span>
          <br />
          Topic:{" "}
          <span className="font-medium text-neutral-100">{topic.title}</span>
        </p>

        <div className="mt-6 rounded-3xl border border-neutral-800 bg-neutral-900/80 p-6">
          <h2 className="text-sm font-semibold text-white">
            Illustration placeholder
          </h2>

          <p className="mt-3 text-sm text-neutral-300">
            A dedicated interactive illustration or simulator for{" "}
            <span className="font-semibold text-neutral-50">
              {subtopic.title}
            </span>{" "}
            will live on this page. Use this route when you are ready to build a
            focused visualization for this single concept.
          </p>

          <div className="mt-6 rounded-2xl border border-neutral-700 bg-neutral-950/80 p-4 text-xs text-neutral-400">
            Status:{" "}
            <span className="font-semibold text-emerald-300">
              Coming soon
            </span>
            . You can replace this placeholder with a full simulator by editing
            this `page.tsx` file in the{" "}
            <span className="font-mono text-neutral-200">
              [chapterId]/[topicId]/[subtopicId]
            </span>{" "}
            folder.
          </div>
        </div>
      </section>
    </main>
  );
}


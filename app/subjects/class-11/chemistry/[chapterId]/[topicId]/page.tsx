import Link from "next/link";
import { notFound } from "next/navigation";
import { chemistry11Chapters } from "@/app/subjects/class-11/data";
import TopicPageContent from "@/components/topics/TopicPageContent";

export const dynamic = "force-dynamic";

type TopicPageProps = {
  params: Promise<{ chapterId: string; topicId: string }>;
};

export async function generateMetadata({ params }: TopicPageProps) {
  const { chapterId, topicId } = await params;
  const chapter = chemistry11Chapters.find((c) => c.id === chapterId);
  const topic = chapter?.topics.find((t) => t.id === topicId);

  if (!chapter || !topic) {
    return {
      title: "Class 11 Chemistry – Topic not found",
      description: "The requested Class 11 Chemistry topic could not be found.",
    };
  }

  return {
    title: `Class 11 Chemistry – ${topic.title}`,
    description: `Explanation and subtopic list for ${topic.title} in ${chapter.title}.`,
  };
}

export default async function Class11ChemistryTopicPage({ params }: TopicPageProps) {
  const resolved = await params;
  const chapter = chemistry11Chapters.find((c) => c.id === resolved.chapterId);
  const topic = chapter?.topics.find((t) => t.id === resolved.topicId);

  if (!chapter || !topic) {
    notFound();
  }

  const base = "/subjects/class-11/chemistry";
  const breadcrumbs = [
    { label: chapter.title, href: `${base}/${chapter.id}` },
    { label: topic.title, href: `${base}/${chapter.id}/${topic.id}` },
  ];

  return (
    <TopicPageContent
      classSlug="class-11"
      subject="chemistry"
      breadcrumbs={breadcrumbs}
      title={topic.title}
      subtitle={
        <>
          Chapter: <span className="font-medium text-neutral-100">{chapter.title}</span>
        </>
      }
      part={`${chapter.part} chemistry`}
    >
      <div className="rounded-3xl border border-neutral-800 bg-neutral-900/80 p-6">
        <h2 className="text-sm font-semibold text-white">
          Subtopics in this concept
        </h2>
        {topic.subtopics.length > 0 ? (
          <ul className="mt-3 space-y-1.5 text-sm text-neutral-300">
            {topic.subtopics.map((sub) => (
              <li key={sub.id} className="flex items-start gap-2">
                <span className="mt-[6px] h-1.5 w-1.5 flex-shrink-0 rounded-full bg-emerald-400" />
                <Link
                  href={`${base}/${chapter.id}/${topic.id}/${sub.id}`}
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
          Each subtopic opens its own page. All subtopics are currently marked as{" "}
          <span className="font-semibold text-emerald-300">coming soon</span>.
        </div>
      </div>
    </TopicPageContent>
  );
}


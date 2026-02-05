import { notFound } from "next/navigation";
import Link from "next/link";
import { physicsChapters } from "../chapters-data";
import { physicsTopicsByChapter } from "../topics-data";
import TopicPageContent from "@/components/topics/TopicPageContent";

type ChapterPageProps = {
  params: Promise<{ chapterId: string }>;
};

export async function generateMetadata({ params }: ChapterPageProps) {
  const { chapterId } = await params;
  const chapter = physicsChapters.find((c) => c.id === chapterId);

  if (!chapter) {
    return {
      title: "Class 11 Physics – Chapter not found",
      description: "The requested Class 11 Physics chapter could not be found.",
    };
  }

  return {
    title: `Class 11 Physics – ${chapter.title}`,
    description: `Topics for ${chapter.title} in Class 11 Physics.`,
  };
}

export default async function Class11PhysicsChapterPage({
  params,
}: ChapterPageProps) {
  const { chapterId } = await params;
  const chapter = physicsChapters.find((c) => c.id === chapterId);

  if (!chapter) {
    notFound();
  }

  const topics = physicsTopicsByChapter[chapter.id] ?? [];
  const base = "/subjects/class-11/physics";
  const breadcrumbs = [{ label: chapter.title, href: `${base}/${chapter.id}` }];

  return (
    <TopicPageContent
      classSlug="class-11"
      subject="physics"
      breadcrumbs={breadcrumbs}
      title={chapter.title}
    >
      {topics.length === 0 ? (
        <p className="text-sm text-neutral-400">
          Topics for this chapter will be added soon.
        </p>
      ) : (
        <div className="grid gap-4 md:grid-cols-2">
          {topics.map((topic) => (
            <Link
              key={topic.id}
              href={`${base}/${chapter.id}/${topic.id}`}
              className="group rounded-2xl border border-neutral-800 bg-neutral-950/80 p-4 transition hover:-translate-y-0.5 hover:border-emerald-500/60 hover:bg-neutral-900"
            >
              <div className="text-sm font-semibold text-white">
                {topic.title}
              </div>
              <p className="mt-2 text-xs text-neutral-400">
                Open topic · illustration coming soon
              </p>
            </Link>
          ))}
        </div>
      )}
    </TopicPageContent>
  );
}


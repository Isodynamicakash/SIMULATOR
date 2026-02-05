import { notFound } from "next/navigation";
import { chemistry11Chapters } from "@/app/subjects/class-11/data";
import TopicPageContent from "@/components/topics/TopicPageContent";
import ComingSoonBlock from "@/components/topics/ComingSoonBlock";

export const dynamic = "force-dynamic";

type SubtopicPageProps = {
  params: Promise<{ chapterId: string; topicId: string; subtopicId: string }>;
};

export async function generateMetadata({ params }: SubtopicPageProps) {
  const { chapterId, topicId, subtopicId } = await params;
  const chapter = chemistry11Chapters.find((c) => c.id === chapterId);
  const topic = chapter?.topics.find((t) => t.id === topicId);
  const subtopic = topic?.subtopics.find((s) => s.id === subtopicId);

  if (!chapter || !topic || !subtopic) {
    return {
      title: "Class 11 Chemistry – Subtopic not found",
      description: "The requested Class 11 Chemistry subtopic could not be found.",
    };
  }

  return {
    title: `Class 11 Chemistry – ${subtopic.title}`,
    description: `Explanation and illustration placeholder for ${subtopic.title} in ${chapter.title} (${topic.title}).`,
  };
}

export default async function Class11ChemistrySubtopicPage({
  params,
}: SubtopicPageProps) {
  const resolved = await params;
  const chapter = chemistry11Chapters.find((c) => c.id === resolved.chapterId);
  const topic = chapter?.topics.find((t) => t.id === resolved.topicId);
  const subtopic = topic?.subtopics.find((s) => s.id === resolved.subtopicId);

  if (!chapter || !topic || !subtopic) {
    notFound();
  }

  const base = "/subjects/class-11/chemistry";
  const breadcrumbs = [
    { label: chapter.title, href: `${base}/${chapter.id}` },
    { label: topic.title, href: `${base}/${chapter.id}/${topic.id}` },
    { label: subtopic.title, href: `${base}/${chapter.id}/${topic.id}/${subtopic.id}` },
  ];

  return (
    <TopicPageContent
      classSlug="class-11"
      subject="chemistry"
      breadcrumbs={breadcrumbs}
      title={subtopic.title}
      subtitle={
        <>
          Chapter: <span className="font-medium text-neutral-100">{chapter.title}</span>
          <br />
          Topic: <span className="font-medium text-neutral-100">{topic.title}</span>
        </>
      }
      part={`${chapter.part} chemistry`}
    >
      <ComingSoonBlock topicTitle={subtopic.title} />
    </TopicPageContent>
  );
}


import { notFound } from "next/navigation";
import TopicPageContent from "@/components/topics/TopicPageContent";
import ComingSoonBlock from "@/components/topics/ComingSoonBlock";
import { slugToTitle } from "@/lib/data/slugToTitle";
import PhysicsSimulationLoader from "@/components/PhysicsSimulationLoader";

export const dynamic = "force-dynamic";

type PageProps = {
  params: Promise<{ class: string; subject: string; slug: string[] }>;
};

export async function generateMetadata({ params }: PageProps) {
  const { class: classSlug, subject, slug } = await params;
  if (!slug?.length) return { title: "Topic" };
  const title = slugToTitle(slug[slug.length - 1] ?? "");
  const classLabel =
    classSlug === "class-9"
      ? "Class 9"
      : classSlug === "class-10"
        ? "Class 10"
        : classSlug === "class-11"
          ? "Class 11"
          : classSlug === "class-12"
            ? "Class 12"
            : classSlug;
  const subjectLabel =
    subject === "physics"
      ? "Physics"
      : subject === "chemistry"
        ? "Chemistry"
        : subject === "biology"
          ? "Biology"
          : subject === "maths"
            ? "Mathematics"
            : subject;
  return {
    title: `${title} | ${subjectLabel} | ${classLabel}`,
    description: `Explanation and illustration for ${title} in ${classLabel} ${subjectLabel}.`,
  };
}

export default async function SubjectTopicPage({ params }: PageProps) {
  const { class: classSlug, subject, slug } = await params;

  if (!slug?.length || slug.length > 3) {
    notFound();
  }

  const base = `/subjects/${classSlug}/${subject}`;
  const breadcrumbs: { label: string; href: string }[] = [];
  let href = base;
  for (let i = 0; i < slug.length; i++) {
    href += `/${slug[i]}`;
    breadcrumbs.push({ label: slugToTitle(slug[i]), href });
  }
  const title = slugToTitle(slug[slug.length - 1] ?? "");

  return (
    <TopicPageContent
      classSlug={classSlug}
      subject={subject}
      breadcrumbs={breadcrumbs}
      title={title}
    >
      {classSlug === "class-11" &&
      subject === "physics" &&
      slug.length >= 2 &&
      slug[0] === "kinematics" &&
      slug[1] === "projectile-motion" ? (
        <div className="mt-2">
          <PhysicsSimulationLoader topic="projectile-motion" />
        </div>
      ) : (
        <ComingSoonBlock topicTitle={title} />
      )}
    </TopicPageContent>
  );
}

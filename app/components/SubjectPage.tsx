
import SubjectCard from "./SubjectCard";

export type Topic = {
  title: string;
  description: string;
  href: string;
};

type Props = {
  title: string;
  subtitle: string;
  topics: Topic[];
};

export default function SubjectPage({ title, subtitle, topics }: Props) {
  return (
    <div className="px-6 py-10">
      <h1 className="text-3xl font-bold mb-2">{title}</h1>
      <p className="text-gray-600 mb-6">{subtitle}</p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {topics.map((topic, index) => (
          <SubjectCard key={index} {...topic} />
        ))}
      </div>
    </div>
  );
}

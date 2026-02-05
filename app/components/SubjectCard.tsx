import Link from "next/link";

type SubjectCardProps = {
  title: string;
  description: string;
  href: string;
};

export default function SubjectCard({
  title,
  description,
  href,
}: SubjectCardProps) {
  return (
    <Link
      href={href}
      className="block rounded-2xl border border-neutral-800 bg-neutral-900/80 p-6 transition hover:-translate-y-0.5 hover:border-neutral-600 hover:bg-neutral-800"
    >
      <div className="text-lg font-semibold text-white">{title}</div>
      <p className="mt-2 text-sm text-neutral-400">{description}</p>
      <span className="mt-4 inline-block text-sm font-medium text-neutral-300 hover:text-white">
        Open →
      </span>
    </Link>
  );
}

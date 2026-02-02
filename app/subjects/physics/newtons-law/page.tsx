import SubjectPage, { Topic } from "../../../components/SubjectPage";

const newtonsLawsTopics: Topic[] = [
  {
    title: "First Law (Inertia)",
    description:
      "Understand why objects resist changes in motion and how inertia depends on mass.",
    href: "/subjects/physics/newtons-law/first-law",
  },
  {
    title: "Second Law (F = ma)",
    description:
      "See how force, mass, and acceleration are connected through interactive experiments.",
    href: "/subjects/physics/newtons-law/second-law",
  },
  {
    title: "Third Law (Action–Reaction)",
    description:
      "Explore how forces come in pairs and why motion still happens despite equal forces.",
    href: "/subjects/physics/newtons-law/third-law",
  },
  {
    title: "Applications & Examples",
    description:
      "Apply Newton’s laws to real-world systems like elevators, rockets, and collisions.",
    href: "/subjects/physics/newtons-law/applications",
  },
];

export default function NewtonsLawsPage() {
  return (
    <SubjectPage
      title="Newton’s Laws of Motion"
      subtitle="Forces don’t just push things around. They write the rules of motion itself."
      topics={newtonsLawsTopics}
    />
  );
}

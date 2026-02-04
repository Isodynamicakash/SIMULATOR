"use strict";

const fs = require("fs");
const path = require("path");

const structure = require("./class-12-physics-structure.js");
const BASE = path.join(__dirname, "..", "app", "subjects", "class-12", "physics");

function jsxText(s) {
  return "{" + JSON.stringify(s) + "}";
}

function breadcrumb(items) {
  const parts = [];
  items.forEach((item, i) => {
    const isLast = i === items.length - 1;
    if (i > 0) parts.push('\n        <span className="text-neutral-600">/</span>');
    if (isLast) {
      parts.push(`\n        <span className="text-white">${jsxText(item.label)}</span>`);
    } else {
      parts.push(
        `\n        <Link href="${item.href}" className="text-neutral-400 hover:text-white transition">${jsxText(
          item.label
        )}</Link>`
      );
    }
  });
  return `      <nav className="flex flex-wrap items-center gap-1 text-sm mb-6">${parts.join(
    ""
  )}\n      </nav>`;
}

function chapterPage(ch) {
  const topicLinks = ch.topics
    .map(
      (t) =>
        `            <Link href="/subjects/class-12/physics/${ch.id}/${t.id}" className="group rounded-2xl border border-neutral-800 bg-neutral-950/70 p-4 transition hover:-translate-y-0.5 hover:border-neutral-600 hover:bg-neutral-900">
              <div className="text-sm font-semibold text-white">${jsxText(t.title)}</div>
              <div className="mt-3 inline-flex items-center rounded-full border border-neutral-800 bg-neutral-900 px-2.5 py-1 text-[11px] font-medium text-neutral-300 group-hover:border-emerald-500/50 group-hover:bg-emerald-500/10 group-hover:text-emerald-200">
                Open topic
              </div>
            </Link>`
    )
    .join("\n");

  return `import Link from "next/link";

export default function ChapterPage() {
  return (
    <main className="relative min-h-screen overflow-hidden">
      <div className="absolute inset-0 -z-10 bg-gradient-to-br from-neutral-950 via-neutral-900 to-black" />
      <section className="mx-auto max-w-7xl px-6 pt-28 pb-24">
${breadcrumb([
  { label: "Class 12", href: "/subjects/class-12" },
  { label: "Physics", href: "/subjects/class-12/physics" },
  { label: ch.title, href: "#" },
])}
        <h1 className="text-3xl font-bold tracking-tight text-white">${jsxText(ch.title)}</h1>
        <p className="mt-2 text-neutral-400">Choose a topic to explore.</p>
        <div className="mt-8 grid gap-3 md:grid-cols-2">
${topicLinks}
        </div>
      </section>
    </main>
  );
}
`;
}

function topicPage(ch, t) {
  const hasSubtopics = t.subtopics && t.subtopics.length > 0;
  const content = hasSubtopics
    ? t.subtopics
        .map(
          (s) =>
            `            <Link href="/subjects/class-12/physics/${ch.id}/${t.id}/${s.id}" className="group rounded-2xl border border-neutral-800 bg-neutral-950/70 p-4 transition hover:-translate-y-0.5 hover:border-neutral-600 hover:bg-neutral-900">
              <div className="text-sm font-semibold text-white">${jsxText(s.title)}</div>
              <div className="mt-3 inline-flex items-center rounded-full border border-neutral-800 bg-neutral-900 px-2.5 py-1 text-[11px] font-medium text-neutral-300 group-hover:border-emerald-500/50 group-hover:bg-emerald-500/10 group-hover:text-emerald-200">
                Open subtopic
              </div>
            </Link>`
        )
        .join("\n")
    : `        <div className="rounded-2xl border border-neutral-800 bg-neutral-950/80 p-6">
          <p className="text-neutral-400">Illustration for this topic is <span className="font-semibold text-emerald-300">coming soon</span>.</p>
        </div>`;

  const gridOrBlock = hasSubtopics
    ? `        <div className="mt-8 grid gap-3 md:grid-cols-2">\n${content}\n        </div>`
    : `        <div className="mt-8">\n${content}\n        </div>`;

  return `import Link from "next/link";

export default function TopicPage() {
  return (
    <main className="relative min-h-screen overflow-hidden">
      <div className="absolute inset-0 -z-10 bg-gradient-to-br from-neutral-950 via-neutral-900 to-black" />
      <section className="mx-auto max-w-7xl px-6 pt-28 pb-24">
${breadcrumb([
  { label: "Class 12", href: "/subjects/class-12" },
  { label: "Physics", href: "/subjects/class-12/physics" },
  { label: ch.title, href: `/subjects/class-12/physics/${ch.id}` },
  { label: t.title, href: "#" },
])}
        <h1 className="text-3xl font-bold tracking-tight text-white">${jsxText(t.title)}</h1>
${hasSubtopics ? `<p className="mt-2 text-neutral-400">Choose a subtopic.</p>` : ""}
${gridOrBlock}
      </section>
    </main>
  );
}
`;
}

function subtopicPage(ch, t, s) {
  return `import Link from "next/link";

export default function SubtopicPage() {
  return (
    <main className="relative min-h-screen overflow-hidden">
      <div className="absolute inset-0 -z-10 bg-gradient-to-br from-neutral-950 via-neutral-900 to-black" />
      <section className="mx-auto max-w-4xl px-6 pt-28 pb-24">
${breadcrumb([
  { label: "Class 12", href: "/subjects/class-12" },
  { label: "Physics", href: "/subjects/class-12/physics" },
  { label: ch.title, href: `/subjects/class-12/physics/${ch.id}` },
  { label: t.title, href: `/subjects/class-12/physics/${ch.id}/${t.id}` },
  { label: s.title, href: "#" },
])}
        <h1 className="text-3xl font-bold tracking-tight text-white">${jsxText(s.title)}</h1>
        <div className="mt-6 rounded-2xl border border-neutral-800 bg-neutral-950/80 p-6">
          <p className="text-neutral-400">Illustration for this subtopic is <span className="font-semibold text-emerald-300">coming soon</span>.</p>
        </div>
      </section>
    </main>
  );
}
`;
}

let chapterCount = 0;
let topicCount = 0;
let subtopicCount = 0;

for (const ch of structure) {
  const chDir = path.join(BASE, ch.id);
  fs.mkdirSync(chDir, { recursive: true });
  fs.writeFileSync(path.join(chDir, "page.tsx"), chapterPage(ch), "utf8");
  chapterCount++;

  for (const t of ch.topics) {
    const topicDir = path.join(chDir, t.id);
    fs.mkdirSync(topicDir, { recursive: true });
    fs.writeFileSync(path.join(topicDir, "page.tsx"), topicPage(ch, t), "utf8");
    topicCount++;

    if (t.subtopics && t.subtopics.length > 0) {
      for (const s of t.subtopics) {
        const subDir = path.join(topicDir, s.id);
        fs.mkdirSync(subDir, { recursive: true });
        fs.writeFileSync(path.join(subDir, "page.tsx"), subtopicPage(ch, t, s), "utf8");
        subtopicCount++;
      }
    }
  }
}

const chaptersList = structure.map((ch) => ({ id: ch.id, title: ch.title }));
fs.writeFileSync(
  path.join(BASE, "chapters-data.ts"),
  "export const class12PhysicsChapters = " + JSON.stringify(chaptersList, null, 2) + ";\n",
  "utf8"
);
console.log(
  "Created:",
  chapterCount,
  "chapter pages,",
  topicCount,
  "topic pages,",
  subtopicCount,
  "subtopic pages."
);
console.log("Wrote chapters-data.ts for Class 12 physics index.");


export default function ComingSoonBlock({
  topicTitle,
  showSubtitleHint = true,
}: {
  topicTitle: string;
  showSubtitleHint?: boolean;
}) {
  return (
    <div className="rounded-3xl border border-neutral-800 bg-neutral-900/80 p-6">
      <h2 className="text-sm font-semibold text-white">
        {showSubtitleHint ? "Illustration coming soon" : "Content"}
      </h2>
      <p className="mt-3 text-sm text-neutral-300">
        A dedicated interactive illustration or simulator for{" "}
        <span className="font-semibold text-neutral-50">{topicTitle}</span> will
        be added here soon.
      </p>
      <div className="mt-6 rounded-2xl border border-neutral-700 bg-neutral-950/80 p-4 text-xs text-neutral-400">
        Status:{" "}
        <span className="font-semibold text-emerald-300">Coming soon</span>.
      </div>
    </div>
  );
}

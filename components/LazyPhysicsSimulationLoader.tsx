"use client";

import dynamic from "next/dynamic";

const PhysicsSimulationLoader = dynamic(
  () => import("@/components/PhysicsSimulationLoader"),
  { ssr: false }
);

export default function LazyPhysicsSimulationLoader({
  topic,
}: {
  topic: string;
}) {
  return <PhysicsSimulationLoader topic={topic} />;
}

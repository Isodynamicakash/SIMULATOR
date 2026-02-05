"use client";

import dynamic from "next/dynamic";
import type { ComponentType } from "react";

function SimulationLoading() {
  return (
    <div className="mx-auto max-w-7xl px-6 py-8">
      <div className="flex min-h-[280px] items-center justify-center rounded-2xl border border-neutral-700 bg-neutral-900/50">
        <p className="text-neutral-400">Loading simulation…</p>
      </div>
    </div>
  );
}

const GravitySimulation = dynamic(
  () => import("@/components/simulations/physics/GravitySimulation"),
  { ssr: false, loading: () => <SimulationLoading /> }
);

const RutherfordSimulation = dynamic(
  () => import("@/components/simulations/physics/RutherfordSimulation"),
  { ssr: false, loading: () => <SimulationLoading /> }
);

const ProjectileSimulation = dynamic(
  () =>
    import("@/components/simulations/physics/ProjectileMotionSimulation"),
  { ssr: false, loading: () => <SimulationLoading /> }
);

const registry: Record<string, ComponentType> = {
  gravity: GravitySimulation,
  "rutherford-gold-foil": RutherfordSimulation,
  "projectile-motion": ProjectileSimulation,
};

export default function PhysicsSimulationLoader({
  topic,
}: {
  topic: string;
}) {
  const Simulation = registry[topic];
  if (!Simulation) return null;
  return <Simulation />;
}

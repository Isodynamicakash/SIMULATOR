"use client";

import dynamic from "next/dynamic";
import type { ComponentType } from "react";

const GravitySimulation = dynamic(
  () => import("@/components/simulations/physics/GravitySimulation"),
  { ssr: false }
);

const RutherfordSimulation = dynamic(
  () => import("@/components/simulations/physics/RutherfordSimulation"),
  { ssr: false }
);

const ProjectileSimulation = dynamic(
  () =>
    import("@/components/simulations/physics/ProjectileMotionSimulation"),
  { ssr: false }
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

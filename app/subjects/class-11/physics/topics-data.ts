export type PhysicsTopic = {
  id: string;
  title: string;
};

export const physicsTopicsByChapter: Record<string, PhysicsTopic[]> = {
  kinematics: [
    { id: "frame-of-reference", title: "Frame of Reference" },
    {
      id: "motion-in-a-straight-line",
      title: "Motion in a Straight Line",
    },
    {
      id: "velocity-time-position-time-graphs",
      title: "Velocity-Time and Position-Time Graphs",
    },
    {
      id: "relations-for-uniformly-accelerated-motion",
      title: "Relations for Uniformly Accelerated Motion",
    },
    {
      id: "motion-in-a-plane",
      title: "Motion in a Plane",
    },
    {
      id: "projectile-motion",
      title: "Projectile Motion",
    },
    {
      id: "uniform-circular-motion",
      title: "Uniform Circular Motion",
    },
  ],
  // other chapters can be filled in gradually.
};


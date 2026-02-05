/**
 * Physics topic metadata for SEO. Simulation loading is done client-side
 * via PhysicsSimulationLoader (next/dynamic with ssr: false).
 */
export const physicsTopicMeta: Record<
  string,
  { title: string; description: string }
> = {
  gravity: {
    title: "Gravity – Free fall & bounces | Physics",
    description:
      "Explore motion under gravity with an interactive simulator. Change g, mass, initial height and velocity, and try different worlds (Moon, Earth, Mars, Jupiter).",
  },
  "rutherford-gold-foil": {
    title: "Rutherford Gold Foil Experiment | Physics",
    description:
      "Interactive Rutherford scattering: α-particles, gold foil, and a tiny nucleus. Adjust Z, energy, and emission rate to see passing, scattered, and backscattered counts.",
  },
  "projectile-motion": {
    title: "Projectile Motion Simulator | Physics",
    description:
      "Visualize 2D projectile motion with adjustable speed, launch angle, height and gravity. See the trajectory, time of flight, range and maximum height update in real time.",
  },
};

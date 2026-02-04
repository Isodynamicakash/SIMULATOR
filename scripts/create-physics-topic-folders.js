const fs = require("fs");
const path = require("path");

const BASE = path.join(__dirname, "..", "app", "subjects", "class-11", "physics");

function slugify(title) {
  return title
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");
}

const BLANK_TSX = `export default function Blank() {
  return null;
}
`;

function esc(s) {
  return s.replace(/\\/g, "\\\\").replace(/"/g, '\\"').replace(/\n/g, "\\n");
}

const chapters = [
  { id: "physical-world-and-measurement", title: "1. Physical World and Measurement", topics: ["Physics - Scope and excitement", "Physics, Technology, and Society", "Units of measurement", "System of Units (SI Units)", "Fundamental and derived units", "Length, mass, and time measurements", "Accuracy and precision of instruments", "Errors in measurement", "Significant figures", "Dimensions of physical quantities", "Dimensional analysis and applications"] },
  { id: "kinematics", title: "2. Kinematics", topics: ["Frame of reference", "Motion in a straight line", "Position-time graph", "Speed and velocity", "Elementary differentiation & integration", "Uniform & non-uniform motion", "Average speed & instantaneous velocity", "Uniformly accelerated motion", "Velocity-time & position-time graphs", "Relations for uniformly accelerated motion", "Scalars and vectors", "Motion in a plane", "Cases of uniform velocity & acceleration", "Projectile motion", "Uniform circular motion"] },
  { id: "laws-of-motion", title: "3. Laws of Motion", topics: ["Intuitive concept of force", "Inertia", "Newton's First Law of Motion", "Momentum and Newton's Second Law", "Impulse", "Newton's Third Law of Motion", "Law of conservation of linear momentum", "Equilibrium of concurrent forces", "Static and kinetic friction", "Laws of friction", "Rolling friction & lubrication", "Dynamics of uniform circular motion", "Centripetal force", "Examples: level and banked roads"] },
  { id: "work-energy-and-power", title: "4. Work, Energy and Power", topics: ["Work by constant & variable force", "Kinetic energy", "Work-energy theorem", "Power", "Potential energy", "Potential energy of a spring", "Conservative forces", "Conservation of mechanical energy", "Non-conservative forces", "Motion in a vertical circle", "Elastic & inelastic collisions"] },
  { id: "motion-of-system-of-particles-and-rigid-body", title: "5. Motion of System of Particles and Rigid Body", topics: ["Centre of mass of two-particle system", "Momentum conservation & centre of mass motion", "Centre of mass of a rigid body", "Centre of mass of a uniform rod", "Moment of a force and torque", "Angular momentum", "Conservation of angular momentum", "Equilibrium of rigid bodies", "Rigid body rotation & equations of motion", "Comparison of linear & rotational motion", "Moment of inertia & radius of gyration", "Moments of inertia of simple objects", "Parallel and perpendicular axes theorems"] },
  { id: "gravitation", title: "6. Gravitation", topics: ["Kepler's laws of planetary motion", "Universal law of gravitation", "Acceleration due to gravity (g)", "Variation of g with altitude & depth", "Gravitational potential energy", "Gravitational potential", "Escape velocity", "Orbital velocity of a satellite"] },
  { id: "properties-of-bulk-matter", title: "7. Properties of Bulk Matter", topics: ["Elastic behaviour & stress-strain", "Hooke's law & Young's modulus", "Bulk modulus & shear modulus", "Poisson's ratio & elastic energy", "Pressure in a fluid & Pascal's law", "Effect of gravity on fluid pressure", "Viscosity, Stokes' law & terminal velocity", "Streamline & turbulent flow, critical speed", "Bernoulli's theorem & applications", "Surface energy & surface tension", "Angle of contact & excess pressure", "Capillary rise & applications", "Heat, temperature & expansion", "Anomalous expansion of water", "Specific heat capacity & calorimetry", "Change of state & latent heat", "Heat transfer: conduction, convection, radiation", "Thermal conductivity", "Blackbody radiation, Wien's & Stefan's laws", "Greenhouse effect"] },
  { id: "thermodynamics", title: "8. Thermodynamics", topics: ["Thermal equilibrium & temperature", "Heat, work & internal energy", "First law of thermodynamics", "Isothermal & adiabatic processes", "Second law of thermodynamics", "Reversible & irreversible processes", "Heat engine & efficiency", "Refrigerator & coefficient of performance"] },
  { id: "kinetic-theory-and-gases", title: "9. Behaviour of Perfect Gases & Kinetic Theory", topics: ["Equation of state of a perfect gas", "Work done in compressing a gas", "Kinetic theory: assumptions", "Pressure from molecular collisions", "Kinetic interpretation of temperature", "RMS speed, mean speed, most probable speed", "Degrees of freedom", "Law of equipartition of energy", "Specific heats of gases", "Mean free path", "Avogadro's number"] },
  { id: "oscillations-and-waves", title: "10. Oscillations and Waves", topics: ["Periodic motion: period & frequency", "Displacement–time functions", "Simple harmonic motion & equation", "Phase and phase difference", "Oscillations of a spring–mass system", "Energy in SHM", "Simple pendulum & time period", "Free, forced & damped oscillations", "Resonance", "Wave motion & wave types", "Speed of a wave", "Displacement relation for a progressive wave", "Principle of superposition", "Standing waves in strings & pipes", "Beats", "Doppler effect"] },
  { id: "experimental-skills", title: "Section B: Experimental Skills", topics: ["Basic laboratory apparatus", "Vernier calipers", "Screw gauge", "Simple pendulum experiment", "Metre scale and principle of moments", "Young's modulus of a wire", "Surface tension by capillary rise", "Viscosity by terminal velocity", "Speed of sound by resonance column", "Specific heat capacity by mixtures", "Resistivity by metre bridge", "Resistance using Ohm's law", "Potentiometer: EMF comparison", "Potentiometer: internal resistance"] },
];

let count = 0;
for (const ch of chapters) {
  for (const topicTitle of ch.topics) {
    const topicId = slugify(topicTitle);
    const dir = path.join(BASE, ch.id, topicId);
    fs.mkdirSync(dir, { recursive: true });
    fs.writeFileSync(path.join(dir, "blank.tsx"), BLANK_TSX, "utf8");
    const pageContent =
      "export default function TopicPage() {\n" +
      "  return (\n" +
      '    <main className="relative min-h-screen bg-neutral-950">\n' +
      '      <div className="absolute inset-0 -z-10 bg-gradient-to-br from-neutral-950 via-neutral-900 to-black" />\n' +
      '      <section className="mx-auto max-w-4xl px-6 pt-28 pb-24">\n' +
      '        <h1 className="text-3xl font-bold tracking-tight text-white">\n' +
      '          {"' + esc(topicTitle) + '"}\n' +
      "        </h1>\n" +
      '        <p className="mt-2 text-neutral-400">Chapter: {"' + esc(ch.title) + '"}</p>\n' +
      '        <p className="mt-6 text-neutral-500">Illustration: coming soon</p>\n' +
      "      </section>\n" +
      "    </main>\n" +
      "  );\n" +
      "}\n";
    fs.writeFileSync(path.join(dir, "page.tsx"), pageContent, "utf8");
    count++;
  }
}
console.log("Created", count, "topic folders with page.tsx and blank.tsx");

import Link from "next/link";

type Topic = {
  title: string;
  description: string;
};

type Chapter = {
  id: string;
  title: string;
  description: string;
  topics: Topic[];
};

const chapters: Chapter[] = [
  {
    id: "physical-world-and-measurement",
    title: "1. Physical World and Measurement",
    description:
      "Scope of physics, units, dimensions, and how we measure physical quantities accurately.",
    topics: [
      { title: "Physics - Scope and excitement", description: "What physics studies and why it is exciting." },
      { title: "Physics, Technology, and Society", description: "How physics drives technology and impacts society." },
      { title: "Units of measurement", description: "Why we need standard units and how they are defined." },
      { title: "System of Units (SI Units)", description: "The international system of units used in physics." },
      { title: "Fundamental and derived units", description: "Base units vs. units built from them." },
      { title: "Length, mass, and time measurements", description: "Practical ways of measuring basic quantities." },
      { title: "Accuracy and precision of instruments", description: "How reliable a given measurement is." },
      { title: "Errors in measurement", description: "Random and systematic errors in experiment." },
      { title: "Significant figures", description: "Rules to write measured values neatly." },
      { title: "Dimensions of physical quantities", description: "Expressing quantities in terms of M, L, and T." },
      { title: "Dimensional analysis and applications", description: "Checking formulas and building relations using dimensions." },
    ],
  },
  {
    id: "kinematics",
    title: "2. Kinematics",
    description:
      "Study of motion in one and two dimensions using graphs and simple calculus ideas.",
    topics: [
      { title: "Frame of reference", description: "From where and how we describe motion." },
      { title: "Motion in a straight line", description: "1D motion and position-time description." },
      { title: "Position-time graph", description: "Visualizing motion using x–t graphs." },
      { title: "Speed and velocity", description: "Scalar vs. vector description of how fast something moves." },
      { title: "Elementary differentiation & integration", description: "Basic calculus ideas used in motion." },
      { title: "Uniform & non-uniform motion", description: "Motion with constant vs. changing speed." },
      { title: "Average speed & instantaneous velocity", description: "Over an interval vs. at an instant." },
      { title: "Uniformly accelerated motion", description: "Motion with constant acceleration." },
      { title: "Velocity-time & position-time graphs", description: "Using graphs to read acceleration and displacement." },
      { title: "Relations for uniformly accelerated motion", description: "Standard SUVAT-type equations." },
      { title: "Scalars and vectors", description: "Quantities with/without direction." },
      { title: "Motion in a plane", description: "2D motion using vectors." },
      { title: "Cases of uniform velocity & acceleration", description: "Special simple motions in a plane." },
      { title: "Projectile motion", description: "Motion of objects thrown with some angle." },
      { title: "Uniform circular motion", description: "Motion on a circle with constant speed." },
    ],
  },
  {
    id: "laws-of-motion",
    title: "3. Laws of Motion",
    description:
      "Newton’s laws, friction, and applications of forces in straight and circular motion.",
    topics: [
      { title: "Intuitive concept of force", description: "What we really mean by 'force'." },
      { title: "Inertia", description: "Tendency of a body to resist change in motion." },
      { title: "Newton's First Law of Motion", description: "Law of inertia stated precisely." },
      { title: "Momentum and Newton's Second Law", description: "Relating force with rate of change of momentum." },
      { title: "Impulse", description: "Effect of a large force acting for a short time." },
      { title: "Newton's Third Law of Motion", description: "Action–reaction force pairs." },
      { title: "Law of conservation of linear momentum", description: "Total momentum remains constant in an isolated system." },
      { title: "Equilibrium of concurrent forces", description: "When multiple forces keep a body at rest." },
      { title: "Static and kinetic friction", description: "Friction before and during motion." },
      { title: "Laws of friction", description: "How frictional force depends on normal reaction and surface." },
      { title: "Rolling friction & lubrication", description: "Why rolling is easier and how lubricants help." },
      { title: "Dynamics of uniform circular motion", description: "Forces needed to keep bodies in circular paths." },
      { title: "Centripetal force", description: "Inward force causing circular motion." },
      { title: "Examples: level and banked roads", description: "Vehicles turning safely on flat and banked roads." },
    ],
  },
  {
    id: "work-energy-and-power",
    title: "4. Work, Energy and Power",
    description:
      "Work–energy theorem, potential energy, conservation of energy, and types of collisions.",
    topics: [
      { title: "Work by constant & variable force", description: "Area under force–displacement graph idea." },
      { title: "Kinetic energy", description: "Energy of motion and its expression." },
      { title: "Work-energy theorem", description: "Net work equals change in kinetic energy." },
      { title: "Power", description: "Rate of doing work or transferring energy." },
      { title: "Potential energy", description: "Stored energy due to configuration." },
      { title: "Potential energy of a spring", description: "Energy stored in a stretched or compressed spring." },
      { title: "Conservative forces", description: "Forces with path-independent work." },
      { title: "Conservation of mechanical energy", description: "Kinetic + potential remains constant for conservative forces." },
      { title: "Non-conservative forces", description: "Forces like friction that dissipate energy." },
      { title: "Motion in a vertical circle", description: "Energy and forces in vertical circular motion." },
      { title: "Elastic & inelastic collisions", description: "Collisions with and without kinetic energy conservation." },
    ],
  },
  {
    id: "motion-of-system-of-particles-and-rigid-body",
    title: "5. Motion of System of Particles and Rigid Body",
    description:
      "Centre of mass, torque, angular momentum, and rotational motion of rigid bodies.",
    topics: [
      { title: "Centre of mass of two-particle system", description: "Weighted average position for two masses." },
      { title: "Momentum conservation & centre of mass motion", description: "How CM motion relates to external forces." },
      { title: "Centre of mass of a rigid body", description: "Extending CM ideas to continuous systems." },
      { title: "Centre of mass of a uniform rod", description: "Simple CM example for a rod." },
      { title: "Moment of a force and torque", description: "Rotational effect of forces." },
      { title: "Angular momentum", description: "Rotational analogue of linear momentum." },
      { title: "Conservation of angular momentum", description: "When and how angular momentum stays constant." },
      { title: "Equilibrium of rigid bodies", description: "Conditions for translational and rotational equilibrium." },
      { title: "Rigid body rotation & equations of motion", description: "α, τ and rotational analogues of F = ma." },
      { title: "Comparison of linear & rotational motion", description: "Mapping linear variables to rotational ones." },
      { title: "Moment of inertia & radius of gyration", description: "Rotational inertia of a body." },
      { title: "Moments of inertia of simple objects", description: "Standard MI values (no derivations)." },
      { title: "Parallel and perpendicular axes theorems", description: "Shifting and rotating axes for MI." },
    ],
  },
  {
    id: "gravitation",
    title: "6. Gravitation",
    description:
      "Gravitational law, variation of g, potentials, and motion of satellites and planets.",
    topics: [
      { title: "Kepler's laws of planetary motion", description: "Empirical laws for planets around the sun." },
      { title: "Universal law of gravitation", description: "Force between any two point masses." },
      { title: "Acceleration due to gravity (g)", description: "How g is related to mass and radius of Earth." },
      { title: "Variation of g with altitude & depth", description: "How g changes away from the surface." },
      { title: "Gravitational potential energy", description: "Energy due to gravitational interaction." },
      { title: "Gravitational potential", description: "Potential energy per unit mass." },
      { title: "Escape velocity", description: "Minimum speed to escape gravitational pull." },
      { title: "Orbital velocity of a satellite", description: "Speed needed for a stable circular orbit." },
    ],
  },
  {
    id: "properties-of-bulk-matter",
    title: "7. Properties of Bulk Matter",
    description:
      "Elasticity, fluid mechanics, and thermal properties of solids, liquids, and gases.",
    topics: [
      { title: "Elastic behaviour & stress-strain", description: "How solids deform under applied forces." },
      { title: "Hooke's law & Young's modulus", description: "Linear regime of stretching and stiffness." },
      { title: "Bulk modulus & shear modulus", description: "Volume and shape change under pressure and shear." },
      { title: "Poisson's ratio & elastic energy", description: "Lateral strain and stored energy in deformation." },
      { title: "Pressure in a fluid & Pascal's law", description: "Fluid pressure and hydraulic devices." },
      { title: "Effect of gravity on fluid pressure", description: "Hydrostatic pressure variation with depth." },
      { title: "Viscosity, Stokes' law & terminal velocity", description: "Resistance to flow and settling of spheres." },
      { title: "Streamline & turbulent flow, critical speed", description: "Flow patterns in real fluids." },
      { title: "Bernoulli's theorem & applications", description: "Energy conservation along a streamline." },
      { title: "Surface energy & surface tension", description: "Behaviour of liquid surfaces." },
      { title: "Angle of contact & excess pressure", description: "Drops, bubbles, and curved surfaces." },
      { title: "Capillary rise & applications", description: "Liquids climbing narrow tubes." },
      { title: "Heat, temperature & expansion", description: "Thermal response of solids, liquids, and gases." },
      { title: "Anomalous expansion of water", description: "Unusual behaviour of water near 4°C." },
      { title: "Specific heat capacity & calorimetry", description: "How much heat is needed to raise temperature." },
      { title: "Change of state & latent heat", description: "Melting, boiling, and associated energy." },
      { title: "Heat transfer: conduction, convection, radiation", description: "Three modes of heat flow." },
      { title: "Thermal conductivity", description: "Quantifying conduction ability." },
      { title: "Blackbody radiation, Wien's & Stefan's laws", description: "Ideal emitters and radiation laws." },
      { title: "Greenhouse effect", description: "Trapping of heat in the atmosphere." },
    ],
  },
  {
    id: "thermodynamics",
    title: "8. Thermodynamics",
    description:
      "Laws of thermodynamics, heat engines, refrigerators, and energy flow as heat and work.",
    topics: [
      { title: "Thermal equilibrium & temperature", description: "Zeroth law and the idea of temperature." },
      { title: "Heat, work & internal energy", description: "Different ways energy can be transferred and stored." },
      { title: "First law of thermodynamics", description: "Energy conservation in thermal processes." },
      { title: "Isothermal & adiabatic processes", description: "Special quasi-static processes for gases." },
      { title: "Second law of thermodynamics", description: "Direction of natural processes and heat flow." },
      { title: "Reversible & irreversible processes", description: "Ideal vs. real changes in thermodynamic systems." },
      { title: "Heat engine & efficiency", description: "Machines converting heat to work." },
      { title: "Refrigerator & coefficient of performance", description: "Devices that pump heat from cold to hot reservoirs." },
    ],
  },
  {
    id: "kinetic-theory-and-gases",
    title: "9. Behaviour of Perfect Gases & Kinetic Theory",
    description:
      "Equation of state for gases, kinetic theory, and microscopic interpretation of temperature.",
    topics: [
      { title: "Equation of state of a perfect gas", description: "pV = nRT relation for ideal gases." },
      { title: "Work done in compressing a gas", description: "Area under p–V curve." },
      { title: "Kinetic theory: assumptions", description: "Modeling gas as many tiny moving particles." },
      { title: "Pressure from molecular collisions", description: "How random impacts create macroscopic pressure." },
      { title: "Kinetic interpretation of temperature", description: "Average molecular energy and temperature." },
      { title: "RMS speed, mean speed, most probable speed", description: "Different ways to average molecular motion." },
      { title: "Degrees of freedom", description: "Independent ways a molecule can store energy." },
      { title: "Law of equipartition of energy", description: "Energy sharing among degrees of freedom." },
      { title: "Specific heats of gases", description: "Using equipartition to estimate Cp and Cv." },
      { title: "Mean free path", description: "Average distance between collisions." },
      { title: "Avogadro's number", description: "Relating microscopic particles to macroscopic amount of substance." },
    ],
  },
  {
    id: "oscillations-and-waves",
    title: "10. Oscillations and Waves",
    description:
      "Simple harmonic motion, wave motion, standing waves, beats, and Doppler effect.",
    topics: [
      { title: "Periodic motion: period & frequency", description: "Motion that repeats after equal intervals." },
      { title: "Displacement–time functions", description: "Using sine and cosine to describe oscillations." },
      { title: "Simple harmonic motion & equation", description: "Restoring force proportional to displacement." },
      { title: "Phase and phase difference", description: "Relative state of oscillators in time." },
      { title: "Oscillations of a spring–mass system", description: "Vertical and horizontal spring SHM." },
      { title: "Energy in SHM", description: "Kinetic and potential energies vs. time." },
      { title: "Simple pendulum & time period", description: "Approximate SHM of a pendulum." },
      { title: "Free, forced & damped oscillations", description: "Real-world oscillators with driving and damping." },
      { title: "Resonance", description: "Maximum response at a natural frequency." },
      { title: "Wave motion & wave types", description: "Transverse vs. longitudinal waves." },
      { title: "Speed of a wave", description: "Relation between frequency, wavelength, and speed." },
      { title: "Displacement relation for a progressive wave", description: "y(x, t) form for traveling waves." },
      { title: "Principle of superposition", description: "Adding displacements for overlapping waves." },
      { title: "Standing waves in strings & pipes", description: "Nodes, antinodes, and harmonics." },
      { title: "Beats", description: "Slow variation when two close frequencies interfere." },
      { title: "Doppler effect", description: "Apparent change in frequency when source or observer moves." },
    ],
  },
  {
    id: "experimental-skills",
    title: "Section B: Experimental Skills",
    description:
      "Common physics lab skills: measurements, instruments, and basic experiments.",
    topics: [
      { title: "Basic laboratory apparatus", description: "Getting familiar with common lab tools." },
      { title: "Vernier calipers", description: "Measuring internal, external diameters and depths." },
      { title: "Screw gauge", description: "Measuring very small thicknesses and diameters." },
      { title: "Simple pendulum experiment", description: "Studying dissipation using amplitude vs. time." },
      { title: "Metre scale and principle of moments", description: "Finding mass of objects using balancing." },
      { title: "Young's modulus of a wire", description: "Determining elasticity of materials." },
      { title: "Surface tension by capillary rise", description: "Measuring surface tension and effect of detergents." },
      { title: "Viscosity by terminal velocity", description: "Measuring viscosity using falling spheres." },
      { title: "Speed of sound by resonance column", description: "Using air column resonance to find velocity of sound." },
      { title: "Specific heat capacity by mixtures", description: "Finding specific heat of solids and liquids." },
      { title: "Resistivity by metre bridge", description: "Determining resistivity of a wire." },
      { title: "Resistance using Ohm's law", description: "Plotting V–I and extracting resistance." },
      { title: "Potentiometer: EMF comparison", description: "Comparing EMFs of two cells." },
      { title: "Potentiometer: internal resistance", description: "Finding internal resistance of a cell." },
    ],
  },
];

export default function Class11PhysicsChaptersPage() {
  return (
    <main className="relative overflow-hidden">
      <div className="absolute inset-0 -z-10 bg-gradient-to-br from-neutral-950 via-neutral-900 to-black" />

      <section className="mx-auto max-w-7xl px-6 pt-28 pb-24">
        <div className="max-w-3xl">
          <h1 className="text-5xl font-bold tracking-tight text-white">
            Class 11 Physics
          </h1>
          <p className="mt-4 text-lg text-neutral-400">
            Choose a chapter to see its NCERT topics. Each topic will link to an
            illustration page — topics marked here are{" "}
            <span className="font-semibold text-neutral-100">coming soon</span>.
          </p>
        </div>

        {/* Already-built interactive illustrations */}
        <section className="mt-10 rounded-3xl border border-neutral-800 bg-neutral-900/80 p-6 md:p-7">
          <div className="flex flex-col gap-3 md:flex-row md:items-baseline md:justify-between">
            <div>
              <h2 className="text-xl font-semibold text-white">
                Interactive demos (ready to explore)
              </h2>
              <p className="mt-1 text-sm text-neutral-400">
                These pages already have full illustrations and simulators. More
                topics from the list below will be added over time.
              </p>
            </div>
          </div>

          <div className="mt-5 grid gap-4 md:grid-cols-2">
            <Link
              href="/subjects/physics/gravity"
              className="group rounded-2xl border border-neutral-800 bg-neutral-950/80 p-4 transition hover:-translate-y-0.5 hover:border-neutral-600 hover:bg-neutral-900"
            >
              <div className="text-sm font-semibold text-white">
                Gravity – Free fall & bounces
              </div>
              <p className="mt-1 text-xs text-neutral-400">
                Visualize motion under gravity with live control of g, height, and
                initial velocity.
              </p>
              <div className="mt-3 inline-flex items-center rounded-full border border-emerald-500/40 bg-emerald-500/10 px-2.5 py-1 text-[11px] font-medium text-emerald-300 group-hover:border-emerald-400 group-hover:bg-emerald-500/15">
                Live illustration · Open simulator
              </div>
            </Link>

            <Link
              href="/subjects/physics/rutherford-gold-foil"
              className="group rounded-2xl border border-neutral-800 bg-neutral-950/80 p-4 transition hover:-translate-y-0.5 hover:border-neutral-600 hover:bg-neutral-900"
            >
              <div className="text-sm font-semibold text-white">
                Rutherford gold foil experiment
              </div>
              <p className="mt-1 text-xs text-neutral-400">
                Watch α-particles scatter from a tiny nucleus with controllable Z
                and energy.
              </p>
              <div className="mt-3 inline-flex items-center rounded-full border border-sky-500/40 bg-sky-500/10 px-2.5 py-1 text-[11px] font-medium text-sky-300 group-hover:border-sky-400 group-hover:bg-sky-500/15">
                Live illustration · Open simulator
              </div>
            </Link>
          </div>
        </section>

        <div className="mt-12 space-y-8">
          {chapters.map((chapter) => (
            <section
              key={chapter.id}
              className="rounded-3xl border border-neutral-800 bg-neutral-900/80 p-6 md:p-7"
            >
              <div className="flex flex-col gap-3 md:flex-row md:items-baseline md:justify-between">
                <div>
                  <h2 className="text-xl font-semibold text-white">
                    {chapter.title}
                  </h2>
                  <p className="mt-1 text-sm text-neutral-400">
                    {chapter.description}
                  </p>
                </div>
                <span className="inline-flex items-center rounded-full border border-neutral-700 bg-neutral-900 px-3 py-1 text-xs font-medium text-neutral-300">
                  {chapter.topics.length} topics · Coming soon
                </span>
              </div>

              <div className="mt-5 grid gap-3 md:grid-cols-2">
                {chapter.topics.map((topic) => (
                  <div
                    key={topic.title}
                    className="rounded-2xl border border-neutral-800 bg-neutral-950/70 p-4"
                  >
                    <div className="text-sm font-semibold text-white">
                      {topic.title}
                    </div>
                    <p className="mt-1 text-xs text-neutral-400">
                      {topic.description}
                    </p>
                    <div className="mt-3 inline-flex items-center rounded-full border border-neutral-800 bg-neutral-900 px-2.5 py-1 text-[11px] font-medium text-neutral-300">
                      Illustration: Coming soon
                    </div>
                  </div>
                ))}
              </div>
            </section>
          ))}
        </div>
      </section>
    </main>
  );
}


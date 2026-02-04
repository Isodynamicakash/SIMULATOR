"use strict";

function slug(s) {
  return s
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");
}

// Class 12 Physics: Chapter -> Topic -> [Subtopics]
module.exports = [
  {
    title: "Chapter 1: Electric Charges and Fields",
    topics: [
      { title: "Introduction to Electric Charges", subtopics: ["Historical Background"] },
      {
        title: "Electric Charge",
        subtopics: [
          "Basic Properties of Electric Charge",
          "Quantization of Charge",
          "Additivity of Charges",
          "Conservation of Charge",
        ],
      },
      { title: "Conductors and Insulators" },
      { title: "Charging by Induction" },
      {
        title: "Coulomb's Law",
        subtopics: [
          "Statement of Coulomb's Law",
          "Vector Form of Coulomb's Law",
          "Forces between Multiple Charges",
          "Principle of Superposition",
        ],
      },
      {
        title: "Electric Field",
        subtopics: [
          "Electric Field due to a Point Charge",
          "Physical Significance of Electric Field",
          "Electric Field Lines",
          "Properties of Electric Field Lines",
        ],
      },
      {
        title: "Electric Flux",
        subtopics: ["Definition of Electric Flux", "Calculation of Electric Flux"],
      },
      {
        title: "Electric Dipole",
        subtopics: [
          "Electric Field due to a Dipole",
          "Electric Field on Axial Line",
          "Electric Field on Equatorial Line",
          "Dipole in a Uniform Electric Field",
          "Torque on a Dipole",
        ],
      },
      {
        title: "Gauss's Law",
        subtopics: [
          "Statement of Gauss's Law",
          "Applications of Gauss's Law",
          "Field due to Infinitely Long Straight Uniformly Charged Wire",
          "Field due to Uniformly Charged Infinite Plane Sheet",
          "Field due to Uniformly Charged Thin Spherical Shell",
        ],
      },
    ],
  },
  {
    title: "Chapter 2: Electrostatic Potential and Capacitance",
    topics: [
      {
        title: "Electrostatic Potential",
        subtopics: [
          "Electric Potential",
          "Potential due to a Point Charge",
          "Potential due to an Electric Dipole",
          "Potential due to a System of Charges",
        ],
      },
      {
        title: "Potential Energy of a System of Charges",
        subtopics: [
          "Potential Energy in an External Field",
          "Potential Energy of a Single Charge",
          "Potential Energy of a System of Two Charges",
          "Potential Energy of a Dipole in an External Field",
        ],
      },
      {
        title: "Equipotential Surfaces",
        subtopics: ["Properties of Equipotential Surfaces"],
      },
      { title: "Relation between Field and Potential" },
      { title: "Potential Energy in an External Field" },
      {
        title: "Electrostatics of Conductors",
        subtopics: [
          "Electric Field inside a Conductor",
          "Electric Field at the Surface of a Conductor",
          "Electrostatic Shielding",
        ],
      },
      {
        title: "Dielectrics and Polarisation",
        subtopics: ["Dielectric Constant", "Polarisation"],
      },
      {
        title: "Capacitors and Capacitance",
        subtopics: ["Capacitance of a Parallel Plate Capacitor", "Effect of Dielectric on Capacitance"],
      },
      {
        title: "Combination of Capacitors",
        subtopics: ["Capacitors in Series", "Capacitors in Parallel"],
      },
      { title: "Energy Stored in a Capacitor" },
      { title: "Van de Graaff Generator" },
    ],
  },
  {
    title: "Chapter 3: Current Electricity",
    topics: [
      {
        title: "Electric Current",
        subtopics: ["Electric Current in Conductors", "Direction of Current"],
      },
      {
        title: "Ohm's Law",
        subtopics: ["Statement of Ohm's Law", "Limitations of Ohm's Law", "V-I Characteristics"],
      },
      {
        title: "Drift of Electrons and the Origin of Resistivity",
        subtopics: ["Drift Velocity", "Mobility", "Relation between Current and Drift Velocity"],
      },
      {
        title: "Resistance and Resistivity",
        subtopics: [
          "Resistance",
          "Resistivity",
          "Conductivity",
          "Temperature Dependence of Resistivity",
        ],
      },
      { title: "Limitations of Ohm's Law" },
      { title: "Resistivity of Various Materials" },
      { title: "Colour Code for Resistors" },
      {
        title: "Combination of Resistors",
        subtopics: ["Series Combination", "Parallel Combination"],
      },
      {
        title: "Cells, EMF, Internal Resistance",
        subtopics: ["Electromotive Force (EMF)", "Internal Resistance", "Terminal Voltage"],
      },
      {
        title: "Cells in Series and in Parallel",
        subtopics: ["Cells in Series", "Cells in Parallel"],
      },
      {
        title: "Kirchhoff's Laws",
        subtopics: [
          "Kirchhoff's Current Law (KCL)",
          "Kirchhoff's Voltage Law (KVL)",
          "Applications of Kirchhoff's Laws",
        ],
      },
      {
        title: "Wheatstone Bridge",
        subtopics: ["Principle of Wheatstone Bridge", "Balanced Condition", "Applications"],
      },
      { title: "Meter Bridge" },
      {
        title: "Potentiometer",
        subtopics: [
          "Principle of Potentiometer",
          "Applications of Potentiometer",
          "Comparison of EMF",
          "Measurement of Internal Resistance",
        ],
      },
      {
        title: "Electrical Energy and Power",
        subtopics: ["Electric Power", "Heating Effect of Current", "Joule's Law of Heating"],
      },
    ],
  },
  {
    title: "Chapter 4: Moving Charges and Magnetism",
    topics: [
      { title: "Magnetic Force", subtopics: ["Sources of Magnetic Field"] },
      {
        title: "Motion in a Magnetic Field",
        subtopics: [
          "Lorentz Force",
          "Magnetic Force on a Moving Charge",
          "Motion in Combined Electric and Magnetic Fields",
        ],
      },
      {
        title: "Motion in a Uniform Magnetic Field",
        subtopics: ["Circular Motion", "Helical Motion", "Cyclotron Frequency"],
      },
      {
        title: "Magnetic Force on a Current-Carrying Conductor",
        subtopics: [
          "Force on a Straight Current-Carrying Conductor",
          "Force between Two Parallel Current-Carrying Conductors",
        ],
      },
      {
        title: "Torque on a Current Loop",
        subtopics: [
          "Magnetic Dipole Moment",
          "Torque on a Rectangular Current Loop in Uniform Magnetic Field",
        ],
      },
      {
        title: "The Moving Coil Galvanometer",
        subtopics: [
          "Principle of Moving Coil Galvanometer",
          "Current Sensitivity",
          "Voltage Sensitivity",
          "Conversion to Ammeter",
          "Conversion to Voltmeter",
        ],
      },
      {
        title: "Magnetic Field due to a Current Element",
        subtopics: ["Biot-Savart Law"],
      },
      { title: "Magnetic Field on the Axis of a Circular Current Loop" },
      {
        title: "Ampere's Circuital Law",
        subtopics: [
          "Statement of Ampere's Law",
          "Applications of Ampere's Law",
          "Magnetic Field due to a Straight Infinite Current-Carrying Wire",
          "Magnetic Field due to a Solenoid",
          "Magnetic Field due to a Toroid",
        ],
      },
      { title: "The Solenoid and the Toroid" },
      { title: "Force between Two Parallel Currents" },
    ],
  },
  {
    title: "Chapter 5: Magnetism and Matter",
    topics: [
      {
        title: "The Bar Magnet",
        subtopics: [
          "Magnetic Field Lines",
          "Bar Magnet as an Equivalent Solenoid",
          "Magnetic Dipole Moment",
          "The Dipole in a Uniform Magnetic Field",
          "Torque on a Magnetic Dipole",
          "The Electrostatic Analogue",
        ],
      },
      {
        title: "Magnetism and Gauss's Law",
        subtopics: ["Gauss's Law in Magnetism"],
      },
      {
        title: "The Earth's Magnetism",
        subtopics: [
          "Magnetic Elements of Earth",
          "Magnetic Declination",
          "Angle of Dip or Inclination",
          "Horizontal Component of Earth's Magnetic Field",
        ],
      },
      {
        title: "Magnetisation and Magnetic Intensity",
        subtopics: [
          "Intensity of Magnetisation",
          "Magnetic Intensity",
          "Magnetic Susceptibility",
          "Magnetic Permeability",
        ],
      },
      {
        title: "Magnetic Properties of Materials",
        subtopics: [
          "Diamagnetism",
          "Paramagnetism",
          "Ferromagnetism",
          "Curie Temperature",
          "Hysteresis",
        ],
      },
      {
        title: "Permanent Magnets and Electromagnets",
        subtopics: ["Properties of Permanent Magnets", "Electromagnets"],
      },
    ],
  },
  {
    title: "Chapter 6: Electromagnetic Induction",
    topics: [
      { title: "The Experiments of Faraday and Henry" },
      {
        title: "Magnetic Flux",
        subtopics: ["Definition of Magnetic Flux", "Unit of Magnetic Flux"],
      },
      {
        title: "Faraday's Law of Induction",
        subtopics: ["First Law", "Second Law", "Mathematical Expression"],
      },
      {
        title: "Lenz's Law and Conservation of Energy",
        subtopics: ["Statement of Lenz's Law", "Direction of Induced Current"],
      },
      {
        title: "Motional Electromotive Force",
        subtopics: ["EMF Induced in a Moving Conductor", "Energy Consideration"],
      },
      { title: "Induced EMF and Current" },
      {
        title: "Eddy Currents",
        subtopics: ["Applications of Eddy Currents", "Disadvantages of Eddy Currents"],
      },
      {
        title: "Inductance",
        subtopics: ["Self-Inductance", "Mutual Inductance"],
      },
      {
        title: "Self-Inductance",
        subtopics: ["Self-Inductance of a Solenoid"],
      },
      {
        title: "Mutual Inductance",
        subtopics: ["Mutual Inductance of Two Coils"],
      },
      {
        title: "AC Generator",
        subtopics: [
          "Principle of AC Generator",
          "Working of AC Generator",
          "Expression for Induced EMF",
        ],
      },
    ],
  },
  {
    title: "Chapter 7: Alternating Current",
    topics: [
      {
        title: "Introduction to Alternating Current",
        subtopics: ["AC Voltage Applied to a Resistor", "Phasor Diagram"],
      },
      {
        title: "AC Voltage Applied to an Inductor",
        subtopics: ["Inductive Reactance", "Phasor Diagram for Inductor"],
      },
      {
        title: "AC Voltage Applied to a Capacitor",
        subtopics: ["Capacitive Reactance", "Phasor Diagram for Capacitor"],
      },
      {
        title: "AC Voltage Applied to a Series LCR Circuit",
        subtopics: [
          "Phasor Diagram for Series LCR Circuit",
          "Impedance",
          "Phase Angle",
          "Voltage across L, C, R",
        ],
      },
      {
        title: "Resonance in Series LCR Circuit",
        subtopics: [
          "Resonant Frequency",
          "Sharpness of Resonance",
          "Quality Factor",
          "Bandwidth",
        ],
      },
      {
        title: "Power in AC Circuit",
        subtopics: [
          "Instantaneous Power",
          "Average Power",
          "Power Factor",
          "Wattless Current",
        ],
      },
      {
        title: "LC Oscillations",
        subtopics: [
          "Energy in LC Oscillations",
          "Analogies between LC Oscillations and Simple Harmonic Motion",
        ],
      },
      {
        title: "Transformer",
        subtopics: [
          "Principle of Transformer",
          "Step-up Transformer",
          "Step-down Transformer",
          "Efficiency of Transformer",
          "Energy Losses in a Transformer",
          "Core Losses",
          "Copper Losses",
        ],
      },
    ],
  },
  {
    title: "Chapter 8: Electromagnetic Waves",
    topics: [
      { title: "Introduction to Electromagnetic Waves" },
      {
        title: "Displacement Current",
        subtopics: [
          "Inconsistency in Ampere's Law",
          "Modification of Ampere's Law",
          "Displacement Current",
        ],
      },
      {
        title: "Maxwell's Equations",
        subtopics: [
          "Gauss's Law in Electrostatics",
          "Gauss's Law in Magnetism",
          "Faraday's Law of Electromagnetic Induction",
          "Ampere-Maxwell Law",
        ],
      },
      {
        title: "Electromagnetic Waves",
        subtopics: [
          "Production of Electromagnetic Waves",
          "Nature of Electromagnetic Waves",
          "Sources of Electromagnetic Waves",
        ],
      },
      {
        title: "Characteristics of Electromagnetic Waves",
        subtopics: ["Transverse Nature", "Speed of EM Waves", "Relation between E and B"],
      },
      {
        title: "Electromagnetic Spectrum",
        subtopics: [
          "Radio Waves",
          "Microwaves",
          "Infrared Waves",
          "Visible Light",
          "Ultraviolet Rays",
          "X-rays",
          "Gamma Rays",
        ],
      },
      { title: "Applications of Electromagnetic Waves" },
    ],
  },
  {
    title: "Chapter 9: Ray Optics and Optical Instruments",
    topics: [
      {
        title: "Reflection of Light by Spherical Mirrors",
        subtopics: [
          "Concave Mirror",
          "Convex Mirror",
          "Sign Convention",
          "Mirror Formula",
          "Magnification",
        ],
      },
      {
        title: "Refraction",
        subtopics: [
          "Laws of Refraction",
          "Snell's Law",
          "Refractive Index",
          "Principle of Reversibility",
        ],
      },
      {
        title: "Total Internal Reflection",
        subtopics: [
          "Critical Angle",
          "Conditions for Total Internal Reflection",
          "Applications of Total Internal Reflection",
          "Optical Fibres",
          "Mirage",
          "Diamond",
        ],
      },
      {
        title: "Refraction at Spherical Surfaces",
        subtopics: [
          "Refraction at a Convex Surface",
          "Refraction at a Concave Surface",
          "Relation between n, u, v and R",
        ],
      },
      {
        title: "Refraction by Lenses",
        subtopics: [
          "Convex Lens",
          "Concave Lens",
          "Lens Maker's Formula",
          "Thin Lens Formula",
          "Magnification",
          "Power of a Lens",
        ],
      },
      { title: "Combination of Thin Lenses in Contact" },
      {
        title: "Refraction through a Prism",
        subtopics: [
          "Angle of Deviation",
          "Minimum Deviation",
          "Relation between Refractive Index and Angle of Prism",
        ],
      },
      {
        title: "Dispersion by a Prism",
        subtopics: ["Spectrum", "Angular Dispersion", "Dispersive Power"],
      },
      {
        title: "Scattering of Light",
        subtopics: [
          "Rayleigh Scattering",
          "Blue Colour of Sky",
          "Reddish Appearance of Sun",
        ],
      },
      {
        title: "Optical Instruments",
        subtopics: [
          "The Eye",
          "Structure of Eye",
          "Power of Accommodation",
          "Defects of Vision",
          "Myopia",
          "Hypermetropia",
          "Astigmatism",
          "Presbyopia",
        ],
      },
      {
        title: "The Microscope",
        subtopics: [
          "Simple Microscope",
          "Magnifying Power",
          "Compound Microscope",
          "Magnifying Power of Compound Microscope",
        ],
      },
      {
        title: "Telescope",
        subtopics: [
          "Refracting Telescope",
          "Magnifying Power of Telescope",
          "Reflecting Telescope",
        ],
      },
    ],
  },
  {
    title: "Chapter 10: Wave Optics",
    topics: [
      { title: "Introduction to Wave Optics" },
      {
        title: "Huygens Principle",
        subtopics: ["Wavefront", "Types of Wavefronts", "Huygens Construction of Wavefronts"],
      },
      {
        title: "Refraction and Reflection of Plane Waves Using Huygens Principle",
        subtopics: ["Refraction of a Plane Wave", "Reflection of a Plane Wave"],
      },
      {
        title: "Coherent and Incoherent Sources",
        subtopics: [
          "Coherent Sources",
          "Incoherent Sources",
          "Conditions for Sustained Interference",
        ],
      },
      {
        title: "Interference of Light Waves",
        subtopics: [
          "Young's Double Slit Experiment",
          "Theory of Interference Fringes",
          "Fringe Width",
          "Position of Bright and Dark Fringes",
          "Intensity Distribution",
        ],
      },
      {
        title: "Diffraction",
        subtopics: [
          "Diffraction of Light",
          "Fresnel Diffraction",
          "Fraunhofer Diffraction",
          "Single Slit Diffraction",
          "Width of Central Maximum",
          "Resolving Power",
        ],
      },
      {
        title: "Polarisation",
        subtopics: [
          "Polarisation of Light",
          "Polarisation by Scattering",
          "Polarisation by Reflection",
          "Brewster's Law",
          "Polarisation by Refraction",
          "Malus' Law",
          "Uses of Polaroids",
        ],
      },
    ],
  },
  {
    title: "Chapter 11: Dual Nature of Radiation and Matter",
    topics: [
      {
        title: "Electron Emission",
        subtopics: [
          "Thermionic Emission",
          "Photoelectric Emission",
          "Field Emission",
          "Secondary Emission",
        ],
      },
      {
        title: "Photoelectric Effect",
        subtopics: [
          "Experimental Study of Photoelectric Effect",
          "Effect of Intensity of Light",
          "Effect of Potential",
          "Effect of Frequency",
        ],
      },
      {
        title: "Photoelectric Effect and Wave Theory of Light",
        subtopics: ["Failures of Classical Theory"],
      },
      {
        title: "Einstein's Photoelectric Equation",
        subtopics: [
          "Energy Quantum of Radiation",
          "Photoelectric Equation",
          "Work Function",
          "Threshold Frequency",
          "Stopping Potential",
        ],
      },
      {
        title: "Particle Nature of Light: The Photon",
        subtopics: ["Photon Energy", "Photon Momentum"],
      },
      {
        title: "Wave Nature of Matter",
        subtopics: [
          "de Broglie Hypothesis",
          "de Broglie Wavelength",
          "Wave Nature of Electrons",
        ],
      },
      {
        title: "Davisson and Germer Experiment",
        subtopics: ["Experimental Verification of de Broglie Hypothesis"],
      },
    ],
  },
  {
    title: "Chapter 12: Atoms",
    topics: [
      { title: "Introduction to Atomic Models" },
      {
        title: "Alpha-Particle Scattering and Rutherford's Nuclear Model of Atom",
        subtopics: [
          "Geiger-Marsden Experiment",
          "Alpha Particle Scattering",
          "Rutherford's Model",
          "Distance of Closest Approach",
          "Impact Parameter",
          "Limitations of Rutherford Model",
        ],
      },
      {
        title: "Atomic Spectra",
        subtopics: [
          "Spectral Series",
          "Emission Spectrum",
          "Absorption Spectrum",
          "Line Spectrum",
        ],
      },
      {
        title: "Bohr Model of the Hydrogen Atom",
        subtopics: [
          "Postulates of Bohr's Theory",
          "Energy Levels",
          "Bohr's Radius",
          "Velocity of Electron",
          "Energy of Electron in nth Orbit",
        ],
      },
      {
        title: "The Line Spectra of the Hydrogen Atom",
        subtopics: [
          "Spectral Series of Hydrogen",
          "Lyman Series",
          "Balmer Series",
          "Paschen Series",
          "Brackett Series",
          "Pfund Series",
          "Rydberg Formula",
        ],
      },
      { title: "DE Broglie's Explanation of Bohr's Second Postulate of Quantisation" },
      { title: "Limitations of Bohr's Model" },
    ],
  },
  {
    title: "Chapter 13: Nuclei",
    topics: [
      { title: "Introduction to Nucleus" },
      {
        title: "Atomic Masses and Composition of Nucleus",
        subtopics: [
          "Atomic Number",
          "Mass Number",
          "Atomic Mass Unit",
          "Isotopes",
          "Isobars",
          "Isotones",
        ],
      },
      { title: "Size of the Nucleus" },
      {
        title: "Mass-Energy and Nuclear Binding Energy",
        subtopics: [
          "Einstein's Mass-Energy Relation",
          "Nuclear Binding Energy",
          "Binding Energy per Nucleon",
          "Nuclear Stability",
        ],
      },
      {
        title: "Nuclear Force",
        subtopics: ["Characteristics of Nuclear Forces"],
      },
      {
        title: "Radioactivity",
        subtopics: [
          "Alpha Decay",
          "Beta Decay",
          "Gamma Decay",
          "Law of Radioactive Decay",
          "Half-Life",
          "Mean Life",
          "Decay Constant",
        ],
      },
      {
        title: "Nuclear Energy",
        subtopics: [
          "Fission",
          "Nuclear Fission",
          "Chain Reaction",
          "Nuclear Reactor",
          "Fusion",
          "Nuclear Fusion",
          "Energy Generation in Stars",
        ],
      },
    ],
  },
  {
    title: "Chapter 14: Semiconductor Electronics: Materials, Devices and Simple Circuits",
    topics: [
      {
        title: "Classification of Metals, Conductors and Semiconductors",
        subtopics: [
          "Energy Bands in Solids",
          "Valence Band",
          "Conduction Band",
          "Forbidden Energy Gap",
          "Conductors",
          "Insulators",
          "Semiconductors",
        ],
      },
      {
        title: "Intrinsic Semiconductor",
        subtopics: [
          "Intrinsic Semiconductors",
          "Silicon",
          "Germanium",
          "Charge Carriers",
          "Electrons and Holes",
        ],
      },
      {
        title: "Extrinsic Semiconductor",
        subtopics: ["Doping", "n-type Semiconductor", "p-type Semiconductor"],
      },
      {
        title: "p-n Junction",
        subtopics: ["Formation of p-n Junction", "Depletion Region", "Barrier Potential"],
      },
      {
        title: "Semiconductor Diode",
        subtopics: [
          "p-n Junction Diode",
          "Forward Bias",
          "Reverse Bias",
          "V-I Characteristics",
          "Dynamic Resistance",
        ],
      },
      {
        title: "Application of Junction Diode as a Rectifier",
        subtopics: ["Half Wave Rectifier", "Full Wave Rectifier", "Bridge Rectifier"],
      },
      {
        title: "Special Purpose p-n Junction Diodes",
        subtopics: [
          "Zener Diode",
          "Voltage Regulation",
          "Optoelectronic Junction Devices",
          "Photodiode",
          "Light Emitting Diode (LED)",
          "Solar Cell",
        ],
      },
      {
        title: "Junction Transistor",
        subtopics: [
          "Transistor as a Device",
          "Types of Transistors",
          "n-p-n Transistor",
          "p-n-p Transistor",
          "Transistor Configuration",
          "Common Base (CB)",
          "Common Emitter (CE)",
          "Common Collector (CC)",
        ],
      },
      {
        title: "Basic Transistor Circuit Configurations and Characteristics",
        subtopics: [
          "Input and Output Characteristics",
          "Current Amplification Factor",
          "Alpha (α)",
          "Beta (β)",
          "Relation between α and β",
        ],
      },
      {
        title: "Transistor as an Amplifier",
        subtopics: [
          "Common Emitter Amplifier",
          "Voltage Gain",
          "Current Gain",
          "Power Gain",
        ],
      },
      { title: "Transistor as a Switch" },
      {
        title: "Digital Electronics and Logic Gates",
        subtopics: [
          "Logic Gates",
          "OR Gate",
          "AND Gate",
          "NOT Gate",
          "NAND Gate",
          "NOR Gate",
          "Integrated Circuits",
        ],
      },
    ],
  },
  {
    title: "Chapter 15: Communication Systems",
    topics: [
      {
        title: "Introduction to Communication Systems",
        subtopics: [
          "Elements of a Communication System",
          "Transmitter",
          "Communication Channel",
          "Receiver",
          "Transducer",
          "Signal",
          "Noise",
          "Transmitter and Receiver Antennas",
        ],
      },
      {
        title: "Basic Terminology Used in Electronic Communication Systems",
        subtopics: [
          "Bandwidth",
          "Modulation",
          "Demodulation",
          "Range",
          "Repeater",
          "Transmitter",
          "Receiver",
          "Attenuation",
          "Amplification",
        ],
      },
      {
        title: "Bandwidth of Signals",
        subtopics: ["Analog Signals", "Digital Signals"],
      },
      { title: "Bandwidth of Transmission Medium" },
      {
        title: "Propagation of Electromagnetic Waves",
        subtopics: [
          "Ground Wave Propagation",
          "Sky Wave Propagation",
          "Space Wave Propagation",
          "Critical Frequency",
          "Maximum Usable Frequency",
          "Skip Distance",
        ],
      },
      {
        title: "Modulation and its Necessity",
        subtopics: [
          "Need for Modulation",
          "Size of Antenna",
          "Effective Power Radiated",
          "Mixing Up of Signals",
        ],
      },
      {
        title: "Amplitude Modulation",
        subtopics: [
          "AM Wave",
          "Modulation Index",
          "Bandwidth of AM Wave",
          "Power in AM Wave",
          "Production of Amplitude Modulated Wave",
          "Detection of Amplitude Modulated Wave",
        ],
      },
      {
        title: "Frequency Modulation",
        subtopics: [
          "FM Wave",
          "Frequency Deviation",
          "Modulation Index",
          "Bandwidth of FM Wave",
          "Advantages of FM over AM",
        ],
      },
      { title: "Phase Modulation" },
      {
        title: "Pulse Modulation",
        subtopics: [
          "Pulse Amplitude Modulation (PAM)",
          "Pulse Width Modulation (PWM)",
          "Pulse Position Modulation (PPM)",
        ],
      },
    ],
  },
].map((ch) => ({
  id: slug(ch.title),
  title: ch.title,
  topics: ch.topics.map((t) => ({
    id: slug(t.title),
    title: t.title,
    subtopics: (t.subtopics || []).map((st) => ({ id: slug(st), title: st })),
  })),
}));

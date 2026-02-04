"use strict";

function slug(s) {
  return s
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");
}

// Final Class 11 Chemistry list: Chapter -> Topic -> [Subtopics if any]
module.exports = [
  {
    title: "Chapter 1: Some Basic Concepts of Chemistry",
    topics: [
      { title: "Importance of Chemistry" },
      {
        title: "Nature of Matter",
        subtopics: ["Physical Classification of Matter", "Chemical Classification of Matter"],
      },
      {
        title: "Properties of Matter and their Measurement",
        subtopics: ["Mass and Weight", "Volume", "Density", "Temperature", "SI Units"],
      },
      {
        title: "Uncertainty in Measurement",
        subtopics: ["Scientific Notation", "Significant Figures", "Dimensional Analysis"],
      },
      {
        title: "Laws of Chemical Combinations",
        subtopics: ["Law of Conservation of Mass", "Law of Definite Proportions", "Law of Multiple Proportions", "Gay Lussac's Law of Gaseous Volumes", "Avogadro Law"],
      },
      { title: "Dalton's Atomic Theory" },
      {
        title: "Atomic and Molecular Masses",
        subtopics: ["Atomic Mass", "Average Atomic Mass", "Molecular Mass", "Formula Mass"],
      },
      {
        title: "Mole Concept and Molar Masses",
        subtopics: ["Mole", "Molar Mass"],
      },
      { title: "Percentage Composition" },
      {
        title: "Stoichiometry and Stoichiometric Calculations",
        subtopics: ["Limiting Reagent", "Reactions in Solutions"],
      },
    ],
  },
  {
    title: "Chapter 2: Structure of Atom",
    topics: [
      {
        title: "Discovery of Electron",
        subtopics: ["Cathode Ray Discharge Tube Experiment", "Charge to Mass Ratio of Electron"],
      },
      {
        title: "Discovery of Proton and Neutron",
        subtopics: ["Discovery of Canal Rays", "Discovery of Neutron"],
      },
      {
        title: "Atomic Models",
        subtopics: ["Thomson Model of Atom", "Rutherford's Nuclear Model of Atom", "Atomic Number and Mass Number", "Isobars and Isotopes"],
      },
      {
        title: "Developments Leading to the Bohr's Model of Atom",
        subtopics: ["Wave Nature of Electromagnetic Radiation", "Particle Nature of Electromagnetic Radiation - Planck's Quantum Theory", "Photoelectric Effect", "Atomic Spectra"],
      },
      {
        title: "Bohr's Model for Hydrogen Atom",
        subtopics: ["Explanation of Line Spectrum of Hydrogen", "Limitations of Bohr's Model"],
      },
      {
        title: "Towards Quantum Mechanical Model of the Atom",
        subtopics: ["Dual Behaviour of Matter", "Heisenberg's Uncertainty Principle"],
      },
      {
        title: "Quantum Mechanical Model of Atom",
        subtopics: ["Orbitals and Quantum Numbers", "Shapes of Atomic Orbitals", "Energies of Orbitals", "Filling of Orbitals in Atom", "Aufbau Principle", "Pauli Exclusion Principle", "Hund's Rule of Maximum Multiplicity", "Electronic Configuration of Atoms", "Stability of Completely Filled and Half Filled Subshells"],
      },
    ],
  },
  {
    title: "Chapter 3: Classification of Elements and Periodicity in Properties",
    topics: [
      { title: "Why do we Need to Classify Elements" },
      {
        title: "Genesis of Periodic Classification",
        subtopics: ["Döbereiner's Triads", "Newlands' Law of Octaves", "Mendeleev's Periodic Table"],
      },
      { title: "Modern Periodic Law and the Present Form of the Periodic Table" },
      { title: "Nomenclature of Elements with Atomic Number > 100" },
      { title: "Electronic Configurations of Elements and the Periodic Table" },
      {
        title: "Electronic Configurations and Types of Elements",
        subtopics: ["s-Block Elements", "p-Block Elements", "d-Block Elements (Transition Elements)", "f-Block Elements (Inner-Transition Elements)", "Metals, Non-metals and Metalloids"],
      },
      {
        title: "Periodic Trends in Properties of Elements",
        subtopics: ["Trends in Physical Properties", "Atomic Radius", "Ionic Radius", "Ionization Enthalpy", "Electron Gain Enthalpy", "Electronegativity", "Valency", "Trends in Chemical Properties", "Anomalous Properties of Second Period Elements"],
      },
    ],
  },
  {
    title: "Chapter 4: Chemical Bonding and Molecular Structure",
    topics: [
      {
        title: "Kossel-Lewis Approach to Chemical Bonding",
        subtopics: ["Octet Rule", "Covalent Bond", "Lewis Representation of Simple Molecules (Lewis Structures)", "Formal Charge", "Limitations of the Octet Rule"],
      },
      {
        title: "Ionic or Electrovalent Bond",
        subtopics: ["Lattice Enthalpy"],
      },
      {
        title: "Bond Parameters",
        subtopics: ["Bond Length", "Bond Angle", "Bond Enthalpy", "Bond Order", "Resonance Structures", "Polarity of Bonds", "Dipole Moment"],
      },
      { title: "The Valence Shell Electron Pair Repulsion (VSEPR) Theory" },
      {
        title: "Valence Bond Theory",
        subtopics: ["Orbital Overlap Concept", "Directional Properties of Bonds", "Overlapping of Atomic Orbitals", "Types of Overlapping and Nature of Covalent Bonds", "Strength of Sigma and Pi Bonds"],
      },
      {
        title: "Hybridisation",
        subtopics: ["Types of Hybridisation", "sp Hybridisation", "sp² Hybridisation", "sp³ Hybridisation", "sp³d Hybridisation", "sp³d² Hybridisation"],
      },
      {
        title: "Molecular Orbital Theory",
        subtopics: ["Formation of Molecular Orbitals (LCAO Method)", "Types of Molecular Orbitals", "Energy Level Diagram for Molecular Orbitals", "Electronic Configuration and Molecular Behaviour"],
      },
      { title: "Bonding in Some Homonuclear Diatomic Molecules" },
      {
        title: "Hydrogen Bonding",
        subtopics: ["Cause of Formation of Hydrogen Bond", "Types of H-Bonds"],
      },
    ],
  },
  {
    title: "Chapter 5: States of Matter",
    topics: [
      {
        title: "Intermolecular Forces",
        subtopics: ["Dispersion Forces or London Forces", "Dipole-Dipole Forces", "Dipole-Induced Dipole Forces", "Hydrogen Bond"],
      },
      { title: "Thermal Energy" },
      { title: "Intermolecular Forces vs Thermal Interactions" },
      { title: "The Gaseous State" },
      {
        title: "The Gas Laws",
        subtopics: ["Boyle's Law (Pressure-Volume Relationship)", "Charles' Law (Temperature-Volume Relationship)", "Gay Lussac's Law (Pressure-Temperature Relationship)", "Avogadro Law (Volume-Amount Relationship)"],
      },
      {
        title: "Ideal Gas Equation",
        subtopics: ["Density and Molar Mass of a Gaseous Substance", "Dalton's Law of Partial Pressures"],
      },
      {
        title: "Kinetic Molecular Theory of Gases",
        subtopics: ["Kinetic Gas Equation"],
      },
      {
        title: "Behaviour of Real Gases: Deviation from Ideal Gas Behaviour",
        subtopics: ["Compressibility Factor", "van der Waals Equation"],
      },
      { title: "Liquefaction of Gases" },
      {
        title: "Liquid State",
        subtopics: ["Vapour Pressure", "Surface Tension", "Viscosity"],
      },
    ],
  },
  {
    title: "Chapter 6: Thermodynamics",
    topics: [
      {
        title: "Thermodynamic Terms",
        subtopics: ["The System and the Surroundings", "Types of the System", "The State of the System", "The Internal Energy as a State Function", "Work", "Heat"],
      },
      {
        title: "Applications of Thermodynamics",
        subtopics: ["First Law of Thermodynamics", "Enthalpy, H", "Extensive and Intensive Properties", "Heat Capacity", "The Relationship between Cp and Cv"],
      },
      { title: "Measurement of ∆U and ∆H: Calorimetry" },
      {
        title: "Enthalpy Change, ∆rH of a Reaction",
        subtopics: ["Standard Enthalpy of Reactions"],
      },
      {
        title: "Enthalpies for Different Types of Reactions",
        subtopics: ["Standard Enthalpy of Combustion", "Enthalpy of Atomization", "Bond Enthalpy", "Enthalpy of Solution", "Lattice Enthalpy", "Hess's Law of Constant Heat Summation", "Enthalpies of Formation"],
      },
      {
        title: "Spontaneity",
        subtopics: ["Is Decrease in Enthalpy a Criterion for Spontaneity?", "Entropy and Spontaneity", "Gibbs Energy and Spontaneity"],
      },
      {
        title: "Gibbs Energy Change and Equilibrium",
        subtopics: ["Standard Gibbs Energy Change"],
      },
    ],
  },
  {
    title: "Chapter 7: Equilibrium",
    topics: [
      {
        title: "Equilibrium in Physical Processes",
        subtopics: ["Solid-Liquid Equilibrium", "Liquid-Gas Equilibrium", "Solid-Gas Equilibrium", "Equilibrium Involving Dissolution of Solid or Gases in Liquids", "General Characteristics of Equilibria Involving Physical Processes"],
      },
      { title: "Equilibrium in Chemical Processes - Dynamic Equilibrium" },
      { title: "Law of Chemical Equilibrium and Equilibrium Constant" },
      {
        title: "Homogeneous Equilibria",
        subtopics: ["Equilibrium Constant in Gaseous Systems"],
      },
      { title: "Heterogeneous Equilibria" },
      {
        title: "Applications of Equilibrium Constants",
        subtopics: ["Predicting the Extent of a Reaction", "Predicting the Direction of the Reaction", "Calculating Equilibrium Concentrations"],
      },
      { title: "Relationship between Equilibrium Constant K, Reaction Quotient Q and Gibbs Energy G" },
      {
        title: "Factors Affecting Equilibria",
        subtopics: ["Effect of Concentration Change", "Effect of Pressure Change", "Effect of Inert Gas Addition", "Effect of Temperature Change", "Effect of a Catalyst"],
      },
      { title: "Ionic Equilibrium in Solution" },
      {
        title: "Acids, Bases and Salts",
        subtopics: ["Arrhenius Concept of Acids and Bases", "Brönsted-Lowry Acids and Bases", "Lewis Acids and Bases"],
      },
      {
        title: "Ionization of Acids and Bases",
        subtopics: ["The Ionization Constant of Water and its Ionic Product", "The pH Scale", "Ionization Constants of Weak Acids", "Ionization of Weak Bases", "Relation between Ka and Kb", "Di- and Polybasic Acids and Di- and Polyacidic Bases", "Factors Affecting Acid Strength", "Common Ion Effect in the Ionization of Acids and Bases", "Hydrolysis of Salts and the pH of their Solutions"],
      },
      { title: "Buffer Solutions" },
      {
        title: "Solubility Equilibria of Sparingly Soluble Salts",
        subtopics: ["Solubility Product Constant", "Common Ion Effect on Solubility of Ionic Salts"],
      },
    ],
  },
  {
    title: "Chapter 8: Redox Reactions",
    topics: [
      {
        title: "Classical Idea of Redox Reactions",
        subtopics: ["Oxidation", "Reduction"],
      },
      {
        title: "Redox Reactions in Terms of Electron Transfer Reactions",
        subtopics: ["Competitive Electron Transfer Reactions"],
      },
      {
        title: "Oxidation Number",
        subtopics: ["Types of Redox Reactions", "Combination Reactions", "Decomposition Reactions", "Displacement Reactions", "Disproportionation Reactions"],
      },
      {
        title: "Redox Reactions and Electrode Processes",
        subtopics: ["Balancing of Redox Reactions", "Oxidation Number Method", "Half Reaction Method", "Redox Reactions as the Basis for Titrations", "Limitations of Concept of Oxidation Number"],
      },
    ],
  },
  {
    title: "Chapter 9: Hydrogen",
    topics: [
      { title: "Position of Hydrogen in the Periodic Table" },
      {
        title: "Dihydrogen",
        subtopics: ["Occurrence"],
      },
      {
        title: "Preparation of Dihydrogen",
        subtopics: ["Laboratory Preparation", "Commercial Preparation"],
      },
      {
        title: "Properties of Dihydrogen",
        subtopics: ["Physical Properties", "Chemical Properties"],
      },
      {
        title: "Hydrides",
        subtopics: ["Ionic or Saline Hydrides", "Covalent or Molecular Hydrides", "Metallic or Interstitial Hydrides"],
      },
      {
        title: "Water",
        subtopics: ["Physical Properties", "Structure of Water", "Chemical Properties of Water", "Hard and Soft Water", "Temporary Hardness", "Permanent Hardness"],
      },
      {
        title: "Hydrogen Peroxide (H₂O₂)",
        subtopics: ["Preparation", "Physical Properties", "Structure", "Chemical Properties", "Storage", "Uses"],
      },
      { title: "Heavy Water (D₂O)" },
      {
        title: "Dihydrogen as a Fuel",
        subtopics: ["Hydrogen Economy"],
      },
    ],
  },
  {
    title: "Chapter 10: The s-Block Elements",
    topics: [
      {
        title: "Group 1 Elements: Alkali Metals",
        subtopics: ["Electronic Configuration", "Atomic and Ionic Radii", "Ionization Enthalpy", "Hydration Enthalpy", "Physical Properties", "Chemical Properties", "Reactivity towards Air", "Reactivity towards Water", "Reactivity towards Dihydrogen", "Reactivity towards Halogens", "Reducing Nature", "Solutions in Liquid Ammonia"],
      },
      {
        title: "General Characteristics of the Compounds of the Alkali Metals",
        subtopics: ["Oxides and Hydroxides", "Halides", "Salts of Oxo Acids"],
      },
      { title: "Anomalous Properties of Lithium" },
      {
        title: "Some Important Compounds of Sodium",
        subtopics: ["Sodium Carbonate", "Sodium Chloride", "Sodium Hydroxide", "Sodium Hydrogen Carbonate"],
      },
      { title: "Biological Importance of Sodium and Potassium" },
      {
        title: "Group 2 Elements: Alkaline Earth Metals",
        subtopics: ["Electronic Configuration", "Ionization Enthalpy", "Hydration Enthalpy", "Physical Properties", "Chemical Properties", "Reactivity towards Air and Water", "Reactivity towards the Halogens", "Reactivity towards Hydrogen", "Reducing Nature", "Solutions in Liquid Ammonia"],
      },
      {
        title: "General Characteristics of Compounds of the Alkaline Earth Metals",
        subtopics: ["Oxides and Hydroxides", "Halides", "Salts of Oxoacids"],
      },
      { title: "Anomalous Behaviour of Beryllium" },
      {
        title: "Some Important Compounds of Calcium",
        subtopics: ["Preparation of Calcium Oxide", "Preparation of Calcium Hydroxide", "Preparation of Calcium Carbonate", "Preparation of Calcium Sulphate (Plaster of Paris)", "Preparation of Cement"],
      },
      { title: "Biological Importance of Magnesium and Calcium" },
    ],
  },
  {
    title: "Chapter 11: The p-Block Elements",
    topics: [
      {
        title: "Group 13 Elements: The Boron Family",
        subtopics: ["Electronic Configuration", "Atomic Radii", "Ionization Enthalpy", "Electronegativity", "Physical Properties", "Chemical Properties", "Reactivity towards Air", "Reactivity towards Acids and Alkalies"],
      },
      { title: "Important Trends and Anomalous Properties of Boron" },
      {
        title: "Some Important Compounds of Boron",
        subtopics: ["Borax", "Orthoboric Acid", "Diborane"],
      },
      { title: "Uses of Boron and Aluminium and their Compounds" },
      {
        title: "Group 14 Elements: The Carbon Family",
        subtopics: ["Electronic Configuration", "Covalent Radius", "Ionization Enthalpy", "Electronegativity", "Physical Properties", "Chemical Properties", "Reactivity towards Oxygen", "Reactivity towards Water", "Reactivity towards Halogen"],
      },
      { title: "Important Trends and Anomalous Behaviour of Carbon" },
      {
        title: "Allotropes of Carbon",
        subtopics: ["Diamond", "Graphite", "Fullerenes"],
      },
      { title: "Uses of Carbon" },
      {
        title: "Some Important Compounds of Carbon and Silicon",
        subtopics: ["Carbon Monoxide", "Carbon Dioxide", "Silicon Dioxide", "Silicones", "Silicates"],
      },
      { title: "Zeolites" },
    ],
  },
  {
    title: "Chapter 12: Organic Chemistry - Some Basic Principles and Techniques",
    topics: [
      { title: "General Introduction" },
      { title: "Tetravalence of Carbon: Shapes of Organic Compounds" },
      {
        title: "Structural Representations of Organic Compounds",
        subtopics: ["Complete, Condensed and Bond-line Structural Formulas", "Three-Dimensional Representation of Organic Molecules"],
      },
      { title: "Classification of Organic Compounds" },
      {
        title: "Nomenclature of Organic Compounds",
        subtopics: ["IUPAC System of Nomenclature", "Nomenclature of Branched Chain Compounds", "Nomenclature of Compounds Containing Functional Groups", "Nomenclature of Substituted Benzene Compounds"],
      },
      {
        title: "Isomerism",
        subtopics: ["Structural Isomerism", "Stereoisomerism"],
      },
      {
        title: "Fundamental Concepts in Organic Reaction Mechanism",
        subtopics: ["Fission of a Covalent Bond", "Homolytic Cleavage", "Heterolytic Cleavage", "Nucleophiles and Electrophiles", "Electron Movement in Organic Reactions", "Electron Displacement Effects in Covalent Bonds", "Inductive Effect", "Resonance", "Electromeric Effect", "Hyperconjugation", "Types of Organic Reactions", "Substitution Reactions", "Addition Reactions", "Elimination Reactions"],
      },
      {
        title: "Methods of Purification of Organic Compounds",
        subtopics: ["Sublimation", "Crystallisation", "Distillation", "Differential Extraction", "Chromatography"],
      },
      {
        title: "Qualitative Analysis of Organic Compounds",
        subtopics: ["Detection of Carbon and Hydrogen", "Detection of Other Elements", "Lassaigne's Test", "Detection of Nitrogen", "Detection of Sulphur", "Detection of Halogens", "Detection of Phosphorus"],
      },
      {
        title: "Quantitative Analysis",
        subtopics: ["Carbon and Hydrogen", "Nitrogen", "Halogens", "Sulphur", "Phosphorus", "Oxygen"],
      },
    ],
  },
  {
    title: "Chapter 13: Hydrocarbons",
    topics: [
      { title: "Classification of Hydrocarbons" },
      {
        title: "Alkanes",
        subtopics: ["Nomenclature and Isomerism", "Preparation", "From Unsaturated Hydrocarbons", "From Alkyl Halides", "From Carboxylic Acids", "Properties", "Physical Properties", "Chemical Reactions", "Substitution Reactions", "Halogenation", "Combustion", "Controlled Oxidation", "Isomerisation", "Aromatization", "Reaction with Steam", "Pyrolysis", "Conformations"],
      },
      {
        title: "Alkenes",
        subtopics: ["Nomenclature", "Isomerism", "Structural Isomerism", "Geometrical Isomerism", "Preparation", "From Alkynes", "From Alkyl Halides", "From Alcohols", "Properties", "Physical Properties", "Chemical Reactions", "Addition of Dihydrogen", "Addition of Halogens", "Addition of Hydrogen Halides", "Addition of Water", "Oxidation", "Ozonolysis", "Polymerisation"],
      },
      {
        title: "Alkynes",
        subtopics: ["Nomenclature and Isomerism", "Preparation", "From Calcium Carbide", "From Vicinal Dihalides", "Properties", "Physical Properties", "Chemical Reactions", "Addition Reactions", "Addition of Dihydrogen", "Addition of Halogens", "Addition of Hydrogen Halides", "Addition of Water", "Polymerisation", "Acidity of Alkynes"],
      },
      {
        title: "Aromatic Hydrocarbons",
        subtopics: ["Nomenclature and Isomerism", "Structure of Benzene", "Resonance and Stability", "Aromaticity", "Hückel's Rule", "Preparation", "From Phenol", "From Benzene Sulphonic Acid", "From Decarboxylation of Aromatic Acids", "Properties", "Physical Properties", "Chemical Properties", "Electrophilic Substitution Reactions", "Mechanism of Electrophilic Substitution Reactions", "Halogenation", "Nitration", "Sulphonation", "Friedel-Crafts Alkylation Reaction", "Friedel-Crafts Acylation Reaction", "Directive Influence of a Functional Group in Monosubstituted Benzene", "Addition Reactions", "Combustion"],
      },
      { title: "Carcinogenicity and Toxicity" },
    ],
  },
  {
    title: "Chapter 14: Environmental Chemistry",
    topics: [
      { title: "Environmental Pollution" },
      {
        title: "Atmospheric Pollution",
        subtopics: ["Tropospheric Pollution", "Gaseous Air Pollutants", "Oxides of Sulphur", "Oxides of Nitrogen", "Hydrocarbons", "Oxides of Carbon", "Global Warming and Greenhouse Effect", "Acid Rain", "Particulate Pollutants", "Smog", "Classical Smog", "Photochemical Smog", "Stratospheric Pollution", "Formation and Breakdown of Ozone", "Ozone Hole", "Effects of Depletion of the Ozone Layer"],
      },
      {
        title: "Water Pollution",
        subtopics: ["Causes of Water Pollution", "International Standards for Drinking Water"],
      },
      {
        title: "Soil Pollution",
        subtopics: ["Pesticides"],
      },
      { title: "Industrial Waste" },
      {
        title: "Strategies to Control Environmental Pollution",
        subtopics: ["Waste Management"],
      },
      {
        title: "Green Chemistry",
        subtopics: ["Green Chemistry in Day-to-Day Life"],
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

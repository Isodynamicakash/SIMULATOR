"use strict";

function slug(s) {
  return s
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");
}

// Class 12 Chemistry: Chapter -> Topic -> [Subtopics]. Raw list; ids added at end.
const rawChapters = [
  {
    title: "Chapter 1: The Solid State",
    topics: [
      { title: "General Characteristics of Solid State" },
      {
        title: "Amorphous and Crystalline Solids",
        subtopics: ["Amorphous Solids", "Crystalline Solids", "Differences between Amorphous and Crystalline Solids"],
      },
      {
        title: "Classification of Crystalline Solids",
        subtopics: ["Molecular Solids", "Ionic Solids", "Metallic Solids", "Covalent or Network Solids"],
      },
      {
        title: "Crystal Lattices and Unit Cells",
        subtopics: ["Crystal Lattice", "Unit Cell", "Types of Unit Cells", "Primitive Unit Cells", "Centred Unit Cells"],
      },
      {
        title: "Number of Atoms in a Unit Cell",
        subtopics: ["Simple Cubic Unit Cell", "Body-Centred Cubic Unit Cell", "Face-Centred Cubic Unit Cell"],
      },
      {
        title: "Close Packed Structures",
        subtopics: [
          "Close Packing in One Dimension",
          "Close Packing in Two Dimensions",
          "Square Close Packing",
          "Hexagonal Close Packing",
          "Close Packing in Three Dimensions",
          "Hexagonal Close Packing (hcp)",
          "Cubic Close Packing (ccp) or Face-Centred Cubic (fcc)",
        ],
      },
      {
        title: "Packing Efficiency",
        subtopics: [
          "Packing Efficiency in Simple Cubic Lattice",
          "Packing Efficiency in Body-Centred Cubic Lattice",
          "Packing Efficiency in Face-Centred Cubic Lattice",
          "Packing Efficiency in hcp and ccp Lattice",
        ],
      },
      { title: "Calculations Involving Unit Cell Dimensions" },
      {
        title: "Imperfections in Solids",
        subtopics: [
          "Types of Point Defects",
          "Stoichiometric Defects",
          "Schottky Defect",
          "Frenkel Defect",
          "Non-Stoichiometric Defects",
          "Metal Excess Defect",
          "Metal Deficiency Defect",
          "Impurity Defects",
        ],
      },
      {
        title: "Electrical Properties",
        subtopics: ["Conductors", "Semiconductors", "Insulators"],
      },
      {
        title: "Magnetic Properties",
        subtopics: [
          "Diamagnetic Substances",
          "Paramagnetic Substances",
          "Ferromagnetic Substances",
          "Antiferromagnetic Substances",
          "Ferrimagnetic Substances",
        ],
      },
    ],
  },
  {
    title: "Chapter 2: Solutions",
    topics: [
      {
        title: "Types of Solutions",
        subtopics: ["Gaseous Solutions", "Liquid Solutions", "Solid Solutions"],
      },
      {
        title: "Expressing Concentration of Solutions",
        subtopics: [
          "Mass Percentage",
          "Volume Percentage",
          "Mass by Volume Percentage",
          "Parts per Million (ppm)",
          "Mole Fraction",
          "Molarity",
          "Molality",
        ],
      },
      {
        title: "Solubility",
        subtopics: [
          "Solubility of a Solid in a Liquid",
          "Effect of Temperature",
          "Effect of Pressure",
          "Solubility of a Gas in a Liquid",
          "Henry's Law",
          "Applications of Henry's Law",
        ],
      },
      {
        title: "Vapour Pressure of Liquid Solutions",
        subtopics: [
          "Vapour Pressure of Liquid-Liquid Solutions",
          "Raoult's Law",
          "Raoult's Law as a Special Case of Henry's Law",
          "Vapour Pressure of Solutions of Solids in Liquids",
        ],
      },
      {
        title: "Ideal and Non-Ideal Solutions",
        subtopics: [
          "Ideal Solutions",
          "Non-Ideal Solutions",
          "Positive Deviation from Raoult's Law",
          "Negative Deviation from Raoult's Law",
        ],
      },
      {
        title: "Colligative Properties",
        subtopics: [
          "Relative Lowering of Vapour Pressure",
          "Elevation of Boiling Point",
          "Depression of Freezing Point",
          "Osmotic Pressure",
        ],
      },
      {
        title: "Abnormal Molar Masses",
        subtopics: ["Association of Solute Particles", "Dissociation of Solute Particles", "Van't Hoff Factor"],
      },
    ],
  },
  {
    title: "Chapter 3: Electrochemistry",
    topics: [
      {
        title: "Electrochemical Cells",
        subtopics: ["Galvanic Cells", "Electrolytic Cells"],
      },
      {
        title: "Galvanic Cells",
        subtopics: ["Daniell Cell", "Representation of a Galvanic Cell"],
      },
      {
        title: "Nernst Equation",
        subtopics: [
          "Effect of Concentration on Cell Potential",
          "Nernst Equation for Single Electrode Potential",
          "Nernst Equation for Cell Potential",
          "Equilibrium Constant from Nernst Equation",
        ],
      },
      {
        title: "Conductance of Electrolytic Solutions",
        subtopics: [
          "Electrical Resistance and Conductance",
          "Conductivity and Molar Conductivity",
          "Variation of Conductivity and Molar Conductivity with Concentration",
        ],
      },
      {
        title: "Electrolytic Cells and Electrolysis",
        subtopics: ["Electrolysis", "Products of Electrolysis"],
      },
      {
        title: "Batteries",
        subtopics: [
          "Primary Batteries",
          "Dry Cell",
          "Mercury Cell",
          "Secondary Batteries",
          "Lead Storage Battery",
          "Nickel-Cadmium Cell",
          "Fuel Cells",
          "Hydrogen-Oxygen Fuel Cell",
        ],
      },
      {
        title: "Corrosion",
        subtopics: ["Electrochemical Theory of Corrosion", "Prevention of Corrosion"],
      },
    ],
  },
  {
    title: "Chapter 4: Chemical Kinetics",
    topics: [
      {
        title: "Rate of a Chemical Reaction",
        subtopics: ["Average Rate of Reaction", "Instantaneous Rate of Reaction"],
      },
      {
        title: "Factors Influencing Rate of a Reaction",
        subtopics: [
          "Concentration of Reactants",
          "Temperature",
          "Nature of Reactants and Products",
          "Catalyst",
          "Surface Area",
        ],
      },
      {
        title: "Integrated Rate Equations",
        subtopics: ["Zero Order Reactions", "First Order Reactions", "Half-Life of a Reaction"],
      },
      { title: "Pseudo First Order Reaction" },
      {
        title: "Temperature Dependence of the Rate of a Reaction",
        subtopics: ["Arrhenius Equation", "Activation Energy", "Effect of Temperature on Rate Constant"],
      },
      {
        title: "Collision Theory of Chemical Reactions",
        subtopics: [
          "Rate of Reaction and Molecular Collisions",
          "Activation Energy",
          "Proper Orientation",
        ],
      },
    ],
  },
  {
    title: "Chapter 5: Surface Chemistry",
    topics: [
      {
        title: "Adsorption",
        subtopics: [
          "Adsorption vs Absorption",
          "Mechanism of Adsorption",
          "Types of Adsorption",
          "Physisorption",
          "Chemisorption",
          "Adsorption of Gases on Solids",
          "Freundlich Adsorption Isotherm",
          "Adsorption from Solution Phase",
          "Applications of Adsorption",
        ],
      },
      {
        title: "Catalysis",
        subtopics: [
          "Catalysts",
          "Promoters and Poisons",
          "Homogeneous Catalysis",
          "Heterogeneous Catalysis",
          "Adsorption Theory of Heterogeneous Catalysis",
          "Shape Selective Catalysis by Zeolites",
          "Enzyme Catalysis",
          "Catalysts in Industry",
        ],
      },
      {
        title: "Colloids",
        subtopics: [
          "Classification of Colloids",
          "Classification Based on Physical State of Dispersed Phase and Dispersion Medium",
          "Classification Based on Nature of Interaction between Dispersed Phase and Dispersion Medium",
          "Lyophilic Colloids",
          "Lyophobic Colloids",
          "Classification Based on Type of Particles of the Dispersed Phase",
          "Multimolecular Colloids",
          "Macromolecular Colloids",
          "Associated Colloids (Micelles)",
        ],
      },
      {
        title: "Preparation of Colloids",
        subtopics: ["Dispersion Methods", "Condensation Methods"],
      },
      {
        title: "Purification of Colloidal Solutions",
        subtopics: ["Dialysis", "Electrodialysis", "Ultrafiltration"],
      },
      {
        title: "Properties of Colloidal Solutions",
        subtopics: [
          "Tyndall Effect",
          "Brownian Movement",
          "Electrophoresis",
          "Coagulation or Flocculation",
          "Hardy-Schulze Rule",
          "Protective Colloids",
        ],
      },
      {
        title: "Emulsions",
        subtopics: [
          "Types of Emulsions",
          "Oil in Water (O/W)",
          "Water in Oil (W/O)",
          "Emulsifying Agent",
          "Preparation of Emulsions",
          "Properties of Emulsions",
        ],
      },
      { title: "Applications of Colloids" },
    ],
  },
  {
    title: "Chapter 6: General Principles and Processes of Isolation of Elements",
    topics: [
      {
        title: "Occurrence of Metals",
        subtopics: ["Minerals", "Ores", "Gangue or Matrix"],
      },
      {
        title: "Concentration of Ores",
        subtopics: ["Hydraulic Washing", "Magnetic Separation", "Froth Flotation Method", "Leaching"],
      },
      {
        title: "Extraction of Crude Metal from Concentrated Ore",
        subtopics: [
          "Conversion to Oxide",
          "Calcination",
          "Roasting",
          "Reduction of Oxide to the Metal",
          "Reduction by Heating",
          "Reduction by Aluminium (Thermite Process)",
          "Reduction by Carbon",
          "Reduction by Carbon Monoxide",
          "Reduction by Hydrogen",
          "Electrolytic Reduction",
        ],
      },
      {
        title: "Thermodynamic Principles of Metallurgy",
        subtopics: ["Ellingham Diagram", "Limitations of Ellingham Diagram"],
      },
      { title: "Electrochemical Principles of Metallurgy" },
      { title: "Oxidation Reduction" },
      {
        title: "Refining",
        subtopics: [
          "Distillation",
          "Liquation",
          "Electrolytic Refining",
          "Zone Refining",
          "Vapour Phase Refining",
          "Chromatographic Methods",
        ],
      },
      { title: "Uses of Aluminium, Copper, Zinc and Iron" },
    ],
  },
  {
    title: "Chapter 7: The p-Block Elements",
    topics: [
      {
        title: "Group 15 Elements (Nitrogen Family)",
        subtopics: [
          "Electronic Configuration",
          "Atomic and Ionic Radii",
          "Ionization Enthalpy",
          "Electronegativity",
          "Physical Properties",
          "Chemical Properties",
          "Reactivity towards Hydrogen",
          "Reactivity towards Oxygen",
          "Reactivity towards Halogens",
          "Reactivity towards Metals",
          "Anomalous Properties of Nitrogen",
        ],
      },
      {
        title: "Dinitrogen",
        subtopics: ["Preparation", "Properties", "Uses"],
      },
      {
        title: "Ammonia",
        subtopics: ["Preparation", "Properties", "Uses"],
      },
      {
        title: "Oxides of Nitrogen",
        subtopics: [
          "Nitrous Oxide (N₂O)",
          "Nitric Oxide (NO)",
          "Dinitrogen Trioxide (N₂O₃)",
          "Nitrogen Dioxide (NO₂)",
          "Dinitrogen Pentoxide (N₂O₅)",
        ],
      },
      {
        title: "Nitric Acid",
        subtopics: ["Preparation", "Properties", "Uses"],
      },
      {
        title: "Phosphorus - Allotropic Forms",
        subtopics: ["White Phosphorus", "Red Phosphorus", "Black Phosphorus"],
      },
      {
        title: "Phosphine",
        subtopics: ["Preparation", "Properties"],
      },
      {
        title: "Phosphorus Halides",
        subtopics: ["Phosphorus Trichloride (PCl₃)", "Phosphorus Pentachloride (PCl₅)"],
      },
      {
        title: "Oxoacids of Phosphorus",
        subtopics: ["Phosphorous Acid (H₃PO₃)", "Phosphoric Acid (H₃PO₄)"],
      },
      {
        title: "Group 16 Elements (Oxygen Family)",
        subtopics: [
          "Electronic Configuration",
          "Atomic and Ionic Radii",
          "Ionization Enthalpy",
          "Electron Gain Enthalpy",
          "Electronegativity",
          "Physical Properties",
          "Chemical Properties",
          "Reactivity with Hydrogen",
          "Reactivity with Oxygen",
          "Reactivity with Halogens",
          "Anomalous Behaviour of Oxygen",
        ],
      },
      {
        title: "Dioxygen",
        subtopics: ["Preparation", "Properties", "Uses"],
      },
      { title: "Simple Oxides" },
      {
        title: "Ozone",
        subtopics: ["Preparation", "Properties", "Uses"],
      },
      {
        title: "Sulphur - Allotropic Forms",
        subtopics: ["Rhombic Sulphur (α-Sulphur)", "Monoclinic Sulphur (β-Sulphur)"],
      },
      {
        title: "Sulphur Dioxide",
        subtopics: ["Preparation", "Properties", "Uses"],
      },
      {
        title: "Oxoacids of Sulphur",
        subtopics: [
          "Sulphurous Acid (H₂SO₃)",
          "Sulphuric Acid (H₂SO₄)",
          "Preparation",
          "Properties",
          "Uses",
        ],
      },
      {
        title: "Group 17 Elements (Halogens)",
        subtopics: [
          "Electronic Configuration",
          "Atomic and Ionic Radii",
          "Ionization Enthalpy",
          "Electron Gain Enthalpy",
          "Electronegativity",
          "Physical Properties",
          "Chemical Properties",
          "Reactivity towards Hydrogen",
          "Reactivity towards Oxygen",
          "Reactivity towards Metals",
          "Reactivity towards Other Halogens",
          "Anomalous Behaviour of Fluorine",
        ],
      },
      {
        title: "Chlorine",
        subtopics: ["Preparation", "Properties", "Uses"],
      },
      {
        title: "Hydrogen Chloride",
        subtopics: ["Preparation", "Properties", "Uses"],
      },
      {
        title: "Oxoacids of Halogens",
        subtopics: [
          "Hypochlorous Acid (HOCl)",
          "Chlorous Acid (HClO₂)",
          "Chloric Acid (HClO₃)",
          "Perchloric Acid (HClO₄)",
        ],
      },
      {
        title: "Interhalogen Compounds",
        subtopics: ["Types", "Properties"],
      },
      {
        title: "Group 18 Elements (Noble Gases)",
        subtopics: [
          "Electronic Configuration",
          "Ionization Enthalpy",
          "Atomic Radii",
          "Electron Gain Enthalpy",
          "Physical Properties",
          "Chemical Properties",
        ],
      },
      {
        title: "Compounds of Xenon",
        subtopics: ["Xenon Fluorides", "Xenon Oxides", "Xenon Oxyfluorides"],
      },
      { title: "Uses of Noble Gases" },
    ],
  },
  {
    title: "Chapter 8: The d- and f-Block Elements",
    topics: [
      { title: "Position in the Periodic Table" },
      { title: "Electronic Configurations of the d-Block Elements" },
      {
        title: "General Properties of the Transition Elements (d-Block)",
        subtopics: [
          "Physical Properties",
          "Atomic and Ionic Radii",
          "Ionization Enthalpy",
          "Oxidation States",
          "Trends in M²⁺/M and M³⁺/M²⁺ Standard Electrode Potentials",
          "Magnetic Properties",
          "Catalytic Properties",
          "Formation of Coloured Ions",
          "Formation of Interstitial Compounds",
          "Formation of Complex Compounds",
          "Alloy Formation",
        ],
      },
      {
        title: "Some Important Compounds of Transition Elements",
        subtopics: [
          "Oxides and Oxoanions of Metals",
          "Potassium Dichromate (K₂Cr₂O₇)",
          "Potassium Permanganate (KMnO₄)",
        ],
      },
      {
        title: "The Lanthanoids",
        subtopics: [
          "Electronic Configuration",
          "Atomic and Ionic Radii (Lanthanoid Contraction)",
          "Oxidation States",
          "Chemical Reactivity",
          "Uses of Lanthanoids",
        ],
      },
      {
        title: "The Actinoids",
        subtopics: [
          "Electronic Configuration",
          "Ionic Radii (Actinoid Contraction)",
          "Oxidation States",
          "Chemical Reactivity",
        ],
      },
      { title: "Some Applications of d- and f-Block Elements" },
    ],
  },
  {
    title: "Chapter 9: Coordination Compounds",
    topics: [
      {
        title: "Werner's Theory of Coordination Compounds",
        subtopics: ["Primary Valency", "Secondary Valency"],
      },
      {
        title: "Definitions of Some Important Terms Pertaining to Coordination Compounds",
        subtopics: [
          "Coordination Entity",
          "Central Atom/Ion",
          "Ligands",
          "Coordination Number",
          "Coordination Sphere",
          "Coordination Polyhedron",
          "Oxidation Number of Central Atom",
          "Homoleptic and Heteroleptic Complexes",
        ],
      },
      {
        title: "Nomenclature of Coordination Compounds",
        subtopics: ["IUPAC Rules for Naming Coordination Compounds"],
      },
      {
        title: "Isomerism in Coordination Compounds",
        subtopics: [
          "Structural Isomerism",
          "Linkage Isomerism",
          "Coordination Isomerism",
          "Ionisation Isomerism",
          "Solvate Isomerism",
          "Stereoisomerism",
          "Geometrical Isomerism",
          "Optical Isomerism",
        ],
      },
      {
        title: "Bonding in Coordination Compounds",
        subtopics: [
          "Valence Bond Theory",
          "Inner Orbital Complexes",
          "Outer Orbital Complexes",
          "Magnetic Properties",
          "Crystal Field Theory",
          "Crystal Field Splitting in Octahedral Complexes",
          "Crystal Field Splitting in Tetrahedral Complexes",
          "Crystal Field Stabilization Energy",
          "Colour in Coordination Compounds",
          "Limitations of Crystal Field Theory",
        ],
      },
      { title: "Bonding in Metal Carbonyls" },
      { title: "Importance and Applications of Coordination Compounds" },
    ],
  },
  {
    title: "Chapter 10: Haloalkanes and Haloarenes",
    topics: [
      {
        title: "Classification of Halogen Derivatives",
        subtopics: [
          "On the Basis of Number of Halogen Atoms",
          "Compounds Containing sp³ C—X Bond (Haloalkanes)",
          "Compounds Containing sp² C—X Bond (Haloarenes and Vinyl Halides)",
        ],
      },
      {
        title: "Nomenclature",
        subtopics: ["Common Names", "IUPAC Names"],
      },
      { title: "Nature of C—X Bond" },
      {
        title: "Methods of Preparation of Haloalkanes",
        subtopics: [
          "From Alcohols",
          "From Hydrocarbons",
          "Halogenation",
          "Addition of Hydrogen Halides to Alkenes",
          "Halogen Exchange",
          "From Other Halogen Compounds",
        ],
      },
      {
        title: "Preparation of Haloarenes",
        subtopics: ["From Hydrocarbons", "From Amines (Sandmeyer's Reaction)"],
      },
      {
        title: "Physical Properties",
        subtopics: ["Boiling Points", "Density", "Solubility"],
      },
      {
        title: "Chemical Reactions of Haloalkanes",
        subtopics: [
          "Nucleophilic Substitution Reactions",
          "SN1 Mechanism",
          "SN2 Mechanism",
          "Optical Activity",
          "Elimination Reactions",
          "Reaction with Metals",
        ],
      },
      {
        title: "Chemical Reactions of Haloarenes",
        subtopics: [
          "Nucleophilic Substitution",
          "Electrophilic Substitution",
          "Halogenation",
          "Nitration",
          "Sulphonation",
          "Friedel-Crafts Alkylation",
          "Friedel-Crafts Acylation",
          "Reaction with Metals",
        ],
      },
      {
        title: "Polyhalogen Compounds",
        subtopics: [
          "Dichloromethane (Methylene Chloride)",
          "Trichloromethane (Chloroform)",
          "Triiodomethane (Iodoform)",
          "Tetrachloromethane (Carbon Tetrachloride)",
          "Freons",
          "DDT (p,p'-Dichlorodiphenyltrichloroethane)",
        ],
      },
    ],
  },
  {
    title: "Chapter 11: Alcohols, Phenols and Ethers",
    topics: [
      {
        title: "Classification of Alcohols and Phenols",
        subtopics: [
          "Classification of Alcohols",
          "Primary, Secondary, and Tertiary Alcohols",
          "Classification of Phenols",
        ],
      },
      {
        title: "Nomenclature of Alcohols and Phenols",
        subtopics: ["Common Names", "IUPAC Names"],
      },
      { title: "Structures of Functional Groups" },
      { title: "Alcohols and Phenols" },
      {
        title: "Preparation of Alcohols",
        subtopics: [
          "From Alkenes",
          "Acid-Catalysed Hydration",
          "Hydroboration-Oxidation",
          "From Carbonyl Compounds",
          "Reduction of Aldehydes and Ketones",
          "Reduction of Carboxylic Acids and Esters",
          "From Grignard Reagents",
        ],
      },
      {
        title: "Preparation of Phenols",
        subtopics: [
          "From Haloarenes",
          "From Benzene Sulphonic Acid",
          "From Diazonium Salts",
          "From Cumene",
        ],
      },
      {
        title: "Physical Properties of Alcohols and Phenols",
        subtopics: ["Boiling Points", "Solubility"],
      },
      {
        title: "Chemical Reactions of Alcohols and Phenols",
        subtopics: [
          "Reactions Involving Cleavage of O—H Bond",
          "Acidity of Alcohols and Phenols",
          "Esterification",
          "Reactions Involving Cleavage of C—O Bond",
          "Reaction with Hydrogen Halides",
          "Reaction with Phosphorus Halides",
          "Dehydration",
          "Oxidation",
          "Electrophilic Aromatic Substitution (in Phenols)",
          "Halogenation",
          "Nitration",
          "Sulphonation",
          "Kolbe's Reaction",
          "Reimer-Tiemann Reaction",
          "Coupling Reaction",
        ],
      },
      {
        title: "Some Commercially Important Alcohols",
        subtopics: ["Methanol", "Ethanol"],
      },
      { title: "Ethers" },
      {
        title: "Nomenclature of Ethers",
        subtopics: ["Common Names", "IUPAC Names"],
      },
      { title: "Structure of Ethers" },
      {
        title: "Preparation of Ethers",
        subtopics: ["Dehydration of Alcohols", "Williamson Synthesis"],
      },
      { title: "Physical Properties of Ethers" },
      {
        title: "Chemical Reactions of Ethers",
        subtopics: [
          "Cleavage of C—O Bond",
          "Electrophilic Substitution (Aromatic Ethers)",
          "Halogenation",
          "Friedel-Crafts Alkylation",
          "Friedel-Crafts Acylation",
          "Nitration",
        ],
      },
    ],
  },
  {
    title: "Chapter 12: Aldehydes, Ketones and Carboxylic Acids",
    topics: [
      {
        title: "Nomenclature and Structure of Carbonyl Group",
        subtopics: ["Common Names", "IUPAC Names"],
      },
      {
        title: "Preparation of Aldehydes and Ketones",
        subtopics: [
          "Oxidation of Alcohols",
          "Dehydrogenation of Alcohols",
          "From Hydrocarbons",
          "Ozonolysis of Alkenes",
          "Hydration of Alkynes",
          "From Calcium Salts of Carboxylic Acids",
          "From Acid Chlorides",
          "From Nitriles and Esters",
        ],
      },
      { title: "Physical Properties of Aldehydes and Ketones" },
      {
        title: "Chemical Reactions of Aldehydes and Ketones",
        subtopics: [
          "Nucleophilic Addition Reactions",
          "Addition of HCN",
          "Addition of Sodium Bisulphite",
          "Addition of Grignard Reagents",
          "Addition of Alcohols",
          "Addition of Ammonia and its Derivatives",
          "Reduction",
          "Oxidation",
          "Reactions due to α-Hydrogen",
          "Aldol Condensation",
          "Cross Aldol Condensation",
          "Cannizzaro Reaction",
          "Electrophilic Substitution Reaction (in Aromatic Aldehydes)",
        ],
      },
      {
        title: "Some Important Aldehydes and Ketones",
        subtopics: ["Formaldehyde", "Acetaldehyde", "Acetone", "Benzaldehyde"],
      },
      { title: "Carboxylic Acids" },
      {
        title: "Nomenclature and Structure of Carboxyl Group",
        subtopics: ["Common Names", "IUPAC Names"],
      },
      {
        title: "Preparation of Carboxylic Acids",
        subtopics: [
          "Oxidation of Primary Alcohols and Aldehydes",
          "From Nitriles and Amides",
          "Hydrolysis of Esters",
          "From Grignard Reagents",
          "Acidic Hydrolysis of Nitriles",
          "From Alkylbenzenes",
        ],
      },
      { title: "Physical Properties of Carboxylic Acids" },
      {
        title: "Chemical Reactions of Carboxylic Acids",
        subtopics: [
          "Acidity",
          "Reactions Involving Cleavage of O—H Bond",
          "Formation of Anhydride",
          "Esterification",
          "Reaction with PCl₃, PCl₅, and SOCl₂",
          "Reaction with Ammonia",
          "Decarboxylation",
          "Hell-Volhard-Zelinsky Reaction",
          "Electrophilic Substitution Reactions (in Aromatic Acids)",
        ],
      },
      {
        title: "Some Important Carboxylic Acids",
        subtopics: ["Formic Acid", "Acetic Acid", "Benzoic Acid"],
      },
    ],
  },
  {
    title: "Chapter 13: Amines",
    topics: [
      { title: "Structure of Amines" },
      {
        title: "Classification of Amines",
        subtopics: [
          "Primary Amines",
          "Secondary Amines",
          "Tertiary Amines",
          "Aliphatic and Aromatic Amines",
        ],
      },
      {
        title: "Nomenclature of Amines",
        subtopics: ["Common Names", "IUPAC Names"],
      },
      {
        title: "Preparation of Amines",
        subtopics: [
          "Reduction of Nitro Compounds",
          "Ammonolysis of Alkyl Halides",
          "Reduction of Nitriles",
          "Reduction of Amides",
          "Gabriel Phthalimide Synthesis",
          "Hoffmann Bromamide Degradation Reaction",
        ],
      },
      { title: "Physical Properties of Amines" },
      {
        title: "Chemical Reactions of Amines",
        subtopics: [
          "Basic Character of Amines",
          "Alkylation",
          "Acylation",
          "Carbylamine Reaction",
          "Reaction with Nitrous Acid",
          "Reaction with Arylsulphonyl Chloride (Hinsberg's Test)",
          "Electrophilic Substitution (Aromatic Amines)",
          "Bromination",
          "Nitration",
          "Sulphonation",
        ],
      },
      { title: "Method of Preparation of Diazonium Salts" },
      { title: "Physical Properties of Diazonium Salts" },
      {
        title: "Chemical Reactions of Diazonium Salts",
        subtopics: [
          "Reactions Involving Displacement of Nitrogen",
          "Sandmeyer Reaction",
          "Gattermann Reaction",
          "Replacement by Iodide and Fluoride Ion",
          "Replacement by Hydrogen",
          "Replacement by Hydroxyl Group",
          "Replacement by Nitro Group",
          "Reactions Involving Retention of Diazo Group",
          "Coupling Reactions",
        ],
      },
      { title: "Importance of Diazonium Salts in Synthesis of Aromatic Compounds" },
    ],
  },
  {
    title: "Chapter 14: Biomolecules",
    topics: [
      {
        title: "Carbohydrates",
        subtopics: [
          "Classification of Carbohydrates",
          "Monosaccharides",
          "Oligosaccharides",
          "Polysaccharides",
          "Glucose",
          "Fructose",
          "Preparation of Glucose",
          "Structure of Glucose",
          "Cyclic Structure",
          "Disaccharides",
          "Sucrose",
          "Maltose",
          "Lactose",
          "Starch",
          "Cellulose",
          "Glycogen",
          "Importance of Carbohydrates",
        ],
      },
      {
        title: "Proteins",
        subtopics: [
          "Amino Acids",
          "Classification of Amino Acids",
          "Acidic Amino Acids",
          "Basic Amino Acids",
          "Neutral Amino Acids",
          "Zwitter Ion",
          "Peptide Bond",
          "Structure of Proteins",
          "Primary Structure",
          "Secondary Structure",
          "α-Helix",
          "β-Pleated Sheet",
          "Tertiary Structure",
          "Quaternary Structure",
          "Denaturation of Proteins",
          "Enzymes",
        ],
      },
      {
        title: "Vitamins",
        subtopics: [
          "Classification of Vitamins",
          "Fat Soluble Vitamins",
          "Vitamin A",
          "Vitamin D",
          "Vitamin E",
          "Vitamin K",
          "Water Soluble Vitamins",
          "Vitamin B Complex",
          "Vitamin C",
        ],
      },
      {
        title: "Nucleic Acids",
        subtopics: [
          "Chemical Composition of Nucleic Acids",
          "Nucleosides and Nucleotides",
          "Structure of Nucleic Acids",
          "DNA (Deoxyribonucleic Acid)",
          "Structure of DNA",
          "DNA Fingerprinting",
          "RNA (Ribonucleic Acid)",
          "Types of RNA",
          "mRNA (Messenger RNA)",
          "tRNA (Transfer RNA)",
          "rRNA (Ribosomal RNA)",
          "Biological Functions of Nucleic Acids",
          "Replication",
          "Transcription",
          "Translation",
        ],
      },
      {
        title: "Hormones",
        subtopics: [
          "Classification of Hormones",
          "Steroid Hormones",
          "Peptide Hormones",
          "Amino Acid Derivatives",
        ],
      },
    ],
  },
  {
    title: "Chapter 15: Polymers",
    topics: [
      {
        title: "Classification of Polymers",
        subtopics: [
          "Classification Based on Source",
          "Natural Polymers",
          "Synthetic Polymers",
          "Semi-synthetic Polymers",
          "Classification Based on Structure",
          "Linear Polymers",
          "Branched Chain Polymers",
          "Cross-linked or Network Polymers",
          "Classification Based on Mode of Polymerisation",
          "Addition Polymers",
          "Condensation Polymers",
          "Classification Based on Molecular Forces",
          "Elastomers",
          "Fibres",
          "Thermoplastic Polymers",
          "Thermosetting Polymers",
        ],
      },
      {
        title: "Types of Polymerisation Reactions",
        subtopics: [
          "Addition Polymerisation or Chain Growth Polymerisation",
          "Free Radical Mechanism",
          "Ionic Mechanism",
          "Coordination Polymerisation",
          "Condensation Polymerisation or Step Growth Polymerisation",
        ],
      },
      {
        title: "Molecular Mass of Polymers",
        subtopics: [
          "Number Average Molecular Mass",
          "Weight Average Molecular Mass",
          "Polydispersity Index (PDI)",
        ],
      },
      {
        title: "Biodegradable Polymers",
        subtopics: ["PHBV (Poly-β-hydroxybutyrate-co-β-hydroxy valerate)", "Nylon 2-nylon 6"],
      },
      {
        title: "Polymers of Commercial Importance",
        subtopics: [
          "Polythene",
          "Low Density Polythene (LDP)",
          "High Density Polythene (HDP)",
          "Polytetrafluoroethylene (Teflon)",
          "Polyvinyl Chloride (PVC)",
          "Polystyrene",
          "Poly(methyl methacrylate) (PMMA)",
          "Nylon 6,6",
          "Nylon 6",
          "Terylene (Dacron)",
          "Bakelite",
          "Melamine-Formaldehyde Polymer",
          "Natural Rubber (Polyisoprene)",
          "Vulcanisation of Rubber",
          "Synthetic Rubbers",
          "Neoprene",
          "Buna-N",
          "Buna-S",
        ],
      },
    ],
  },
  {
    title: "Chapter 16: Chemistry in Everyday Life",
    topics: [
      {
        title: "Drugs and their Classification",
        subtopics: [
          "Classification Based on Pharmacological Effect",
          "Classification Based on Drug Action",
          "Classification Based on Chemical Structure",
          "Classification Based on Molecular Targets",
        ],
      },
      {
        title: "Drug-Target Interaction",
        subtopics: ["Enzymes as Drug Targets", "Receptors as Drug Targets"],
      },
      {
        title: "Therapeutic Action of Different Classes of Drugs",
        subtopics: [
          "Antacids",
          "Antihistamines",
          "Neurologically Active Drugs",
          "Tranquilizers",
          "Analgesics",
          "Antimicrobials",
          "Antibiotics",
          "Penicillin",
          "Aminoglycosides",
          "Ofloxacin",
          "Antiseptics",
          "Disinfectants",
          "Antifertility Drugs",
        ],
      },
      {
        title: "Chemicals in Food",
        subtopics: [
          "Artificial Sweetening Agents",
          "Aspartame",
          "Alitame",
          "Sucralose",
          "Saccharin",
          "Food Preservatives",
          "Salt",
          "Sugar",
          "Vegetable Oils",
          "Sodium Benzoate",
        ],
      },
      {
        title: "Cleansing Agents",
        subtopics: [
          "Soaps",
          "Structure of Soaps",
          "Cleansing Action of Soaps",
          "Detergents",
          "Anionic Detergents",
          "Cationic Detergents",
          "Non-ionic Detergents",
          "Advantages of Detergents over Soaps",
        ],
      },
    ],
  },
];

// Attach ids for routes and folder names
module.exports = rawChapters.map((ch) => ({
  id: slug(ch.title),
  title: ch.title,
  topics: ch.topics.map((t) => ({
    id: slug(t.title),
    title: t.title,
    subtopics: (t.subtopics || []).map((st) => ({ id: slug(st), title: st })),
  })),
}));

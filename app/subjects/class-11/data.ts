export type Chemistry11Subtopic = { id: string; title: string };
export type Chemistry11Topic = {
  id: string;
  title: string;
  subtopics: Chemistry11Subtopic[];
};
export type Chemistry11Chapter = {
  id: string;
  title: string;
  part: string;
  topics: Chemistry11Topic[];
};

/**
 * Class 11 Chemistry chapters with topics and subtopics.
 * Used by dynamic routes [chapterId]/[topicId] and [subtopicId].
 */
export const chemistry11Chapters: Chemistry11Chapter[] = [
  {
    id: "chapter-1-some-basic-concepts-of-chemistry",
    title: "Chapter 1: Some Basic Concepts of Chemistry",
    part: "Physical",
    topics: [
      {
        id: "uncertainty-in-measurement",
        title: "Uncertainty in Measurement",
        subtopics: [
          { id: "dimensional-analysis", title: "Dimensional Analysis" },
          { id: "scientific-notation", title: "Scientific Notation" },
          { id: "significant-figures", title: "Significant Figures" },
        ],
      },
    ],
  },
  {
    id: "chapter-2-structure-of-atom",
    title: "Chapter 2: Structure of Atom",
    part: "Physical",
    topics: [
      {
        id: "atomic-models",
        title: "Atomic Models",
        subtopics: [
          { id: "atomic-number-and-mass-number", title: "Atomic Number and Mass Number" },
        ],
      },
    ],
  },
  {
    id: "chapter-3-classification-of-elements-and-periodicity-in-properties",
    title: "Chapter 3: Classification of Elements and Periodicity in Properties",
    part: "Physical",
    topics: [
      { id: "genesis-of-periodic-classification", title: "Genesis of Periodic Classification", subtopics: [{ id: "mendeleev-s-periodic-table", title: "Mendeleev's Periodic Table" }, { id: "newlands-law-of-octaves", title: "Newlands Law of Octaves" }] },
      { id: "modern-periodic-law-and-the-present-form-of-the-periodic-table", title: "Modern Periodic Law and the Present Form of the Periodic Table", subtopics: [] },
    ],
  },
  {
    id: "chapter-4-chemical-bonding-and-molecular-structure",
    title: "Chapter 4: Chemical Bonding and Molecular Structure",
    part: "Physical",
    topics: [
      { id: "valence-bond-theory", title: "Valence Bond Theory", subtopics: [{ id: "types-of-overlapping-and-nature-of-covalent-bonds", title: "Types of Overlapping and Nature of Covalent Bonds" }] },
    ],
  },
  {
    id: "chapter-5-states-of-matter",
    title: "Chapter 5: States of Matter",
    part: "Physical",
    topics: [
      { id: "the-gas-laws", title: "The Gas Laws", subtopics: [] },
      { id: "the-gaseous-state", title: "The Gaseous State", subtopics: [] },
      { id: "thermal-energy", title: "Thermal Energy", subtopics: [] },
    ],
  },
  {
    id: "chapter-6-thermodynamics",
    title: "Chapter 6: Thermodynamics",
    part: "Physical",
    topics: [],
  },
  {
    id: "chapter-7-equilibrium",
    title: "Chapter 7: Equilibrium",
    part: "Physical",
    topics: [],
  },
  {
    id: "chapter-8-redox-reactions",
    title: "Chapter 8: Redox Reactions",
    part: "Physical",
    topics: [],
  },
  {
    id: "chapter-9-hydrogen",
    title: "Chapter 9: Hydrogen",
    part: "Physical",
    topics: [
      { id: "water", title: "Water", subtopics: [{ id: "structure-of-water", title: "Structure of Water" }, { id: "temporary-hardness", title: "Temporary Hardness" }] },
    ],
  },
  {
    id: "chapter-10-the-s-block-elements",
    title: "Chapter 10: The s-Block Elements",
    part: "Inorganic",
    topics: [
      { id: "some-important-compounds-of-sodium", title: "Some Important Compounds of Sodium", subtopics: [{ id: "sodium-carbonate", title: "Sodium Carbonate" }, { id: "sodium-chloride", title: "Sodium Chloride" }, { id: "sodium-hydrogen-carbonate", title: "Sodium Hydrogen Carbonate" }, { id: "sodium-hydroxide", title: "Sodium Hydroxide" }] },
    ],
  },
  {
    id: "chapter-11-the-p-block-elements",
    title: "Chapter 11: The p-Block Elements",
    part: "Inorganic",
    topics: [
      { id: "some-important-compounds-of-carbon-and-silicon", title: "Some Important Compounds of Carbon and Silicon", subtopics: [{ id: "silicones", title: "Silicones" }] },
      { id: "uses-of-boron-and-aluminium-and-their-compounds", title: "Uses of Boron and Aluminium and Their Compounds", subtopics: [] },
      { id: "uses-of-carbon", title: "Uses of Carbon", subtopics: [] },
      { id: "zeolites", title: "Zeolites", subtopics: [] },
    ],
  },
  {
    id: "chapter-12-organic-chemistry-some-basic-principles-and-techniques",
    title: "Chapter 12: Organic Chemistry - Some Basic Principles and Techniques",
    part: "Organic",
    topics: [
      { id: "structural-representations-of-organic-compounds", title: "Structural Representations of Organic Compounds", subtopics: [{ id: "three-dimensional-representation-of-organic-molecules", title: "Three-Dimensional Representation of Organic Molecules" }] },
      { id: "tetravalence-of-carbon-shapes-of-organic-compounds", title: "Tetravalence of Carbon - Shapes of Organic Compounds", subtopics: [] },
    ],
  },
  {
    id: "chapter-13-hydrocarbons",
    title: "Chapter 13: Hydrocarbons",
    part: "Organic",
    topics: [],
  },
  {
    id: "chapter-14-environmental-chemistry",
    title: "Chapter 14: Environmental Chemistry",
    part: "Physical",
    topics: [],
  },
];

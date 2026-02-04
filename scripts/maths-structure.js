"use strict";

function slug(s) {
  return s
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");
}

// Class 11 Mathematics: Chapter -> Topic -> [Subtopics]
module.exports = [
  {
    title: "Chapter 1: Sets",
    topics: [
      {
        title: "Sets and their Representations",
        subtopics: [
          "Introduction to Sets",
          "Representation of Sets",
          "Roster or Tabular Form",
          "Set-builder Form",
        ],
      },
      {
        title: "Types of Sets",
        subtopics: [
          "Empty Set",
          "Finite Set",
          "Infinite Set",
          "Equal Sets",
          "Equivalent Sets",
          "Universal Set",
          "Singleton Set",
        ],
      },
      {
        title: "Subsets",
        subtopics: ["Subsets", "Superset", "Proper Subset", "Power Set"],
      },
      { title: "Venn Diagrams" },
      {
        title: "Operations on Sets",
        subtopics: [
          "Union of Sets",
          "Intersection of Sets",
          "Difference of Sets",
          "Complement of a Set",
        ],
      },
      {
        title: "Laws of Algebra of Sets",
        subtopics: [
          "Idempotent Laws",
          "Identity Laws",
          "Commutative Laws",
          "Associative Laws",
          "Distributive Laws",
          "De Morgan's Laws",
        ],
      },
      { title: "Practical Problems on Union and Intersection of Sets" },
    ],
  },
  {
    title: "Chapter 2: Relations and Functions",
    topics: [
      {
        title: "Cartesian Product of Sets",
        subtopics: [
          "Ordered Pairs",
          "Cartesian Product of Two Sets",
          "Cartesian Product of n Sets",
        ],
      },
      {
        title: "Relations",
        subtopics: [
          "Definition of Relation",
          "Domain of a Relation",
          "Codomain of a Relation",
          "Range of a Relation",
        ],
      },
      {
        title: "Functions",
        subtopics: [
          "Definition of Function",
          "Domain of a Function",
          "Codomain of a Function",
          "Range of a Function",
          "Real Valued Functions",
          "Constant Function",
          "Identity Function",
          "Polynomial Function",
          "Rational Function",
          "Modulus Function",
          "Signum Function",
          "Greatest Integer Function",
        ],
      },
      {
        title: "Algebra of Real Functions",
        subtopics: [
          "Addition of Real Functions",
          "Subtraction of Real Functions",
          "Multiplication by a Scalar",
          "Multiplication of Real Functions",
          "Quotient of Real Functions",
        ],
      },
    ],
  },
  {
    title: "Chapter 3: Trigonometric Functions",
    topics: [
      {
        title: "Angles",
        subtopics: [
          "Measurement of Angles",
          "Degree Measure",
          "Radian Measure",
          "Relation between Radian and Degree",
          "Conversion from Degrees to Radians",
          "Conversion from Radians to Degrees",
        ],
      },
      {
        title: "Trigonometric Functions",
        subtopics: [
          "Signs of Trigonometric Functions",
          "Domain and Range of Trigonometric Functions",
        ],
      },
      { title: "Trigonometric Functions of Sum and Difference of Two Angles" },
      { title: "Trigonometric Equations" },
      { title: "Allied Angles" },
      { title: "Values of Trigonometric Functions at Different Angles" },
      {
        title: "Trigonometric Identities",
        subtopics: ["Fundamental Trigonometric Identities", "Conditional Trigonometric Identities"],
      },
      {
        title: "Multiple and Sub-multiple Angles",
        subtopics: [
          "Trigonometric Functions of 2A",
          "Trigonometric Functions of 3A",
          "Trigonometric Functions of A/2",
        ],
      },
      {
        title: "Transformation Formulae",
        subtopics: ["Product to Sum Formulae", "Sum to Product Formulae"],
      },
    ],
  },
  {
    title: "Chapter 4: Principle of Mathematical Induction",
    topics: [
      { title: "Introduction to Mathematical Induction" },
      { title: "Motivation" },
      {
        title: "The Principle of Mathematical Induction",
        subtopics: [
          "Statement of the Principle",
          "Proof by Induction",
          "Base Step",
          "Inductive Step",
          "Inductive Hypothesis",
        ],
      },
      {
        title: "Applications of Mathematical Induction",
        subtopics: [
          "Proving Statements about Natural Numbers",
          "Proving Divisibility Results",
          "Proving Inequalities",
        ],
      },
    ],
  },
  {
    title: "Chapter 5: Complex Numbers and Quadratic Equations",
    topics: [
      {
        title: "Complex Numbers",
        subtopics: [
          "Introduction to Complex Numbers",
          "Imaginary Numbers",
          "Definition of Complex Number",
          "Real Part and Imaginary Part",
          "Purely Real and Purely Imaginary Numbers",
        ],
      },
      {
        title: "Algebra of Complex Numbers",
        subtopics: [
          "Addition of Complex Numbers",
          "Subtraction of Complex Numbers",
          "Multiplication of Complex Numbers",
          "Division of Complex Numbers",
          "Multiplicative Inverse",
          "Conjugate of a Complex Number",
          "Properties of Conjugate",
          "Modulus of a Complex Number",
          "Properties of Modulus",
        ],
      },
      { title: "The Square Roots of a Complex Number" },
      {
        title: "Argand Plane and Polar Representation",
        subtopics: [
          "Argand Plane",
          "Modulus and Argument",
          "Polar Form of Complex Numbers",
          "Euler's Formula",
        ],
      },
      {
        title: "Quadratic Equations",
        subtopics: [
          "Solution of Quadratic Equations",
          "Nature of Roots",
          "Sum and Product of Roots",
          "Formation of Quadratic Equation",
        ],
      },
    ],
  },
  {
    title: "Chapter 6: Linear Inequalities",
    topics: [
      {
        title: "Inequalities",
        subtopics: [
          "Introduction to Inequalities",
          "Algebraic Solutions of Linear Inequalities in One Variable",
          "Rules for Solving Inequalities",
        ],
      },
      {
        title: "Graphical Solution of Linear Inequalities in Two Variables",
        subtopics: ["Graphical Representation", "Half Planes"],
      },
      {
        title: "Solution of System of Linear Inequalities in Two Variables",
      },
    ],
  },
  {
    title: "Chapter 7: Permutations and Combinations",
    topics: [
      {
        title: "Fundamental Principle of Counting",
        subtopics: ["Multiplication Principle", "Addition Principle"],
      },
      {
        title: "Permutations",
        subtopics: [
          "Factorial Notation",
          "Permutations when all Objects are Distinct",
          "Permutations when all Objects are not Distinct",
          "Permutations with Repetition",
          "Circular Permutations",
        ],
      },
      {
        title: "Combinations",
        subtopics: [
          "Difference between Permutation and Combination",
          "Combinations Formula",
          "Properties of Combinations",
        ],
      },
      {
        title: "Relationship between Permutation and Combination",
      },
      {
        title: "Applications of Permutations and Combinations",
        subtopics: ["Selection Problems", "Distribution Problems", "Arrangement Problems"],
      },
    ],
  },
  {
    title: "Chapter 8: Binomial Theorem",
    topics: [
      {
        title: "Binomial Theorem for Positive Integral Indices",
        subtopics: ["Statement of Binomial Theorem", "Binomial Coefficients", "Pascal's Triangle"],
      },
      {
        title: "General and Middle Terms",
        subtopics: [
          "General Term",
          "Middle Term",
          "Term Independent of x",
          "Numerically Greatest Term",
        ],
      },
      { title: "Properties of Binomial Coefficients" },
      { title: "Simple Applications of Binomial Theorem" },
    ],
  },
  {
    title: "Chapter 9: Sequences and Series",
    topics: [
      {
        title: "Sequences",
        subtopics: ["Introduction to Sequences", "Finite and Infinite Sequences"],
      },
      {
        title: "Series",
        subtopics: ["Introduction to Series", "Finite and Infinite Series"],
      },
      {
        title: "Arithmetic Progression (A.P.)",
        subtopics: [
          "General Term of an A.P.",
          "nth Term",
          "Selection of Terms in A.P.",
          "Sum to n Terms of an A.P.",
          "Arithmetic Mean",
          "Insertion of Arithmetic Means",
        ],
      },
      {
        title: "Geometric Progression (G.P.)",
        subtopics: [
          "General Term of a G.P.",
          "nth Term",
          "Selection of Terms in G.P.",
          "Sum to n Terms of a G.P.",
          "Sum of Infinite G.P.",
          "Geometric Mean",
          "Insertion of Geometric Means",
        ],
      },
      {
        title: "Relationship Between A.M. and G.M.",
      },
      {
        title: "Special Series",
        subtopics: [
          "Sum of First n Natural Numbers",
          "Sum of Squares of First n Natural Numbers",
          "Sum of Cubes of First n Natural Numbers",
        ],
      },
    ],
  },
  {
    title: "Chapter 10: Straight Lines",
    topics: [
      { title: "Introduction to Coordinate Geometry" },
      {
        title: "Distance Formula",
        subtopics: ["Distance between Two Points"],
      },
      {
        title: "Section Formula",
        subtopics: ["Internal Division", "External Division", "Midpoint Formula"],
      },
      { title: "Area of a Triangle" },
      {
        title: "Slope of a Line",
        subtopics: [
          "Angle of Inclination",
          "Slope",
          "Slope when Two Points are Given",
          "Conditions for Parallelism",
          "Conditions for Perpendicularity",
          "Angle between Two Lines",
          "Collinearity of Three Points",
        ],
      },
      {
        title: "Various Forms of the Equation of a Line",
        subtopics: [
          "Point-Slope Form",
          "Two-Point Form",
          "Slope-Intercept Form",
          "Intercept Form",
          "Normal Form",
          "General Equation of a Line",
        ],
      },
      {
        title: "Distance of a Point from a Line",
        subtopics: ["Perpendicular Distance Formula"],
      },
      {
        title: "Distance between Two Parallel Lines",
      },
      {
        title: "Equation of Family of Lines",
        subtopics: [
          "Equation of a Line Parallel to a Given Line",
          "Equation of a Line Perpendicular to a Given Line",
          "Equation of Lines Passing through Point of Intersection",
        ],
      },
    ],
  },
  {
    title: "Chapter 11: Conic Sections",
    topics: [
      {
        title: "Introduction to Conic Sections",
        subtopics: [
          "Sections of a Cone",
          "Circle",
          "Ellipse",
          "Parabola",
          "Hyperbola",
          "Degenerate Conic Sections",
        ],
      },
      {
        title: "Circle",
        subtopics: [
          "Standard Equation of a Circle",
          "General Equation of a Circle",
          "Diameter Form of a Circle",
        ],
      },
      {
        title: "Parabola",
        subtopics: [
          "Standard Equation of Parabola",
          "Parabola y² = 4ax",
          "Parabola y² = -4ax",
          "Parabola x² = 4ay",
          "Parabola x² = -4ay",
          "Latus Rectum",
          "Focus",
          "Directrix",
          "Axis",
          "Vertex",
          "Eccentricity",
        ],
      },
      {
        title: "Ellipse",
        subtopics: [
          "Standard Equation of Ellipse",
          "Major Axis",
          "Minor Axis",
          "Vertices",
          "Foci",
          "Centre",
          "Latus Rectum",
          "Eccentricity",
          "Relationship between a, b and e",
        ],
      },
      {
        title: "Hyperbola",
        subtopics: [
          "Standard Equation of Hyperbola",
          "Transverse Axis",
          "Conjugate Axis",
          "Vertices",
          "Foci",
          "Centre",
          "Latus Rectum",
          "Eccentricity",
          "Asymptotes",
          "Rectangular Hyperbola",
        ],
      },
    ],
  },
  {
    title: "Chapter 12: Introduction to Three Dimensional Geometry",
    topics: [
      {
        title: "Coordinate Axes and Coordinate Planes in Three Dimensional Space",
        subtopics: ["x-axis, y-axis, z-axis", "XY-plane, YZ-plane, ZX-plane", "Octants"],
      },
      {
        title: "Coordinates of a Point in Space",
        subtopics: ["Ordered Triplet", "Signs of Coordinates in Different Octants"],
      },
      {
        title: "Distance Formula in Three Dimensions",
        subtopics: ["Distance between Two Points"],
      },
      {
        title: "Section Formula in Three Dimensions",
        subtopics: ["Internal Division", "External Division", "Midpoint Formula"],
      },
    ],
  },
  {
    title: "Chapter 13: Limits and Derivatives",
    topics: [
      {
        title: "Limits",
        subtopics: [
          "Introduction to Limits",
          "Intuitive Idea of Limit",
          "Left Hand Limit",
          "Right Hand Limit",
          "Existence of Limit",
        ],
      },
      {
        title: "Algebra of Limits",
        subtopics: [
          "Limit of Sum",
          "Limit of Difference",
          "Limit of Product",
          "Limit of Quotient",
        ],
      },
      {
        title: "Limits of Trigonometric Functions",
        subtopics: [
          "Standard Limits",
          "lim (sin x)/x as x→0",
          "lim (1 - cos x)/x as x→0",
          "lim (tan x)/x as x→0",
        ],
      },
      { title: "Limits of Polynomial and Rational Functions" },
      { title: "Limits at Infinity" },
      {
        title: "Derivatives",
        subtopics: [
          "Introduction to Derivatives",
          "Derivative as Rate of Change",
          "Derivative at a Point",
          "Geometrical Meaning of Derivative",
        ],
      },
      {
        title: "Algebra of Derivative of Functions",
        subtopics: [
          "Derivative of Sum",
          "Derivative of Difference",
          "Derivative of Product",
          "Derivative of Quotient",
        ],
      },
      {
        title: "Derivative of Polynomial and Trigonometric Functions",
        subtopics: [
          "Derivative of xⁿ",
          "Derivative of sin x",
          "Derivative of cos x",
          "Derivative of tan x",
          "Derivative of cot x",
          "Derivative of sec x",
          "Derivative of cosec x",
        ],
      },
    ],
  },
  {
    title: "Chapter 14: Mathematical Reasoning",
    topics: [
      {
        title: "Statements",
        subtopics: ["Introduction to Statements", "Sentences and Statements", "Truth Value"],
      },
      {
        title: "New Statements from Old",
        subtopics: [
          "Negation of a Statement",
          "Compound Statements",
          "Conjunction (AND)",
          "Disjunction (OR)",
          "Conditional (If-Then)",
          "Biconditional (If and only if)",
        ],
      },
      {
        title: "Special Words/Phrases",
        subtopics: ["Quantifiers", "Universal Quantifier (For all)", "Existential Quantifier (There exists)"],
      },
      {
        title: "Implications",
        subtopics: ["Contrapositive", "Converse", "Inverse"],
      },
      {
        title: "Validating Statements",
        subtopics: [
          "Direct Method",
          "Contrapositive Method",
          "Method of Contradiction",
          "Using Counter Examples",
        ],
      },
    ],
  },
  {
    title: "Chapter 15: Statistics",
    topics: [
      {
        title: "Measures of Dispersion",
        subtopics: [
          "Range",
          "Mean Deviation",
          "Mean Deviation about Mean",
          "Mean Deviation about Median",
          "Variance",
          "Standard Deviation",
        ],
      },
      {
        title: "Analysis of Frequency Distributions",
        subtopics: [
          "Mean of Grouped Data",
          "Variance of Grouped Data",
          "Standard Deviation of Grouped Data",
        ],
      },
      { title: "Coefficient of Variation" },
      { title: "Comparison of Two Frequency Distributions" },
    ],
  },
  {
    title: "Chapter 16: Probability",
    topics: [
      {
        title: "Random Experiments",
        subtopics: ["Outcomes", "Sample Space", "Events"],
      },
      {
        title: "Types of Events",
        subtopics: [
          "Impossible Event",
          "Sure Event",
          "Simple Event",
          "Compound Event",
          "Complementary Event",
          "Mutually Exclusive Events",
          "Exhaustive Events",
        ],
      },
      {
        title: "Axiomatic Approach to Probability",
        subtopics: [
          "Probability of an Event",
          "Probability Axioms",
          "Properties of Probability",
        ],
      },
      {
        title: "Addition Theorem of Probability",
        subtopics: [
          "Probability of Union of Events",
          "Addition Theorem for Mutually Exclusive Events",
          "Addition Theorem for Non-Mutually Exclusive Events",
        ],
      },
      { title: "Probability of Complementary Event" },
      { title: "Equally Likely Outcomes" },
      { title: "Probability on a Sample Space" },
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


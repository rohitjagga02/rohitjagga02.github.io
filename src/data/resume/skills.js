// TODO: Add Athletic Skills, Office Skills,
// Data Engineering, Data Science, ML Engineering, ... ?

const skills = [
  {
    title: 'JavaScript',
    competency: 4,
    category: ['Languages'],
  },
  {
    title: 'Node.JS',
    competency: 3,
    category: ['Frameworks'],
  },
  {
    title: 'React',
    competency: 4,
    category: ['Frameworks'],
  },
  {
    title: 'AWS EC2',
    competency: 3,
    category: ['Tools', 'Data Science/ML'],
  },
  {
    title: 'SQL',
    competency: 4,
    category: ['Data Science/ML', 'Languages'],
  },
  {
    title: 'AWS S3',
    competency: 2,
    category: ['Tools', 'Data Science/ML'],
  },
  {
    title: 'Express.JS',
    competency: 2,
    category: ['Frameworks'],
  },
  {
    title: 'Flask',
    competency: 3,
    category: ['Frameworks', 'Python'],
  },
  {
    title: 'Git',
    competency: 3,
    category: ['Tools'],
  },
  {
    title: 'NumPy',
    competency: 4,
    category: ['Data Science/ML', 'Python'],
  },
  {
    title: 'TensorFlow + Keras',
    competency: 3,
    category: ['Data Science/ML', 'Python'],
  },
  {
    title: 'PyTorch',
    competency: 5,
    category: ['Data Science/ML', 'Python'],
  },
  {
    title: 'Jupyter',
    competency: 3,
    category: ['Data Science/ML', 'Python'],
  },
  {
    title: 'TypeScript',
    competency: 2,
    category: ['Languages'],
  },
  {
    title: 'HTML',
    competency: 3,
    category: ['Languages'],
  },
  {
    title: 'SASS/SCSS/CSS',
    competency: 3,
    category: ['Languages'],
  },
  {
    title: 'Python',
    competency: 5,
    category: ['Languages', 'Python'],
  },
  {
    title: 'MATLAB',
    competency: 2,
    category: ['Languages'],
  },
  {
    title: 'R',
    competency: 3,
    category: ['Languages'],
  },
  {
    title: 'Java',
    competency: 4,
    category: ['Languages'],
  },
  {
    title: 'OCaml',
    competency: 3,
    category: ['Languages'],
  },
  {
    title: 'React Native',
    competency: 3,
    category: ['Frameworks'],
  },
  {
    title: 'Pandas',
    competency: 4,
    category: ['Data Science/ML', 'Python'],
  },
  {
    title: 'Matplotlib',
    competency: 3,
    category: ['Data Science/ML', 'Python'],
  },
  {
    title: 'scikit-learn',
    competency: 4,
    category: ['Data Science/ML', 'Python'],
  },
  {
    title: 'Spark',
    competency: 3,
    category: ['Data Science/ML'],
  },
  {
    title: 'LaTeX',
    competency: 3,
    category: ['Tools'],
  },
].map((skill) => ({ ...skill, category: skill.category.sort() }));

const colors = [
  '#c3423f',
  '#64cb7b',
  '#747fff',
  '#40494e',
  '#cc7b94',
  // '#515dd4',
  // '#e47272',
  // '#3896e2',
  // '#64cb7b',
  // '#6968b3',
  // '#37b1f5',
];

const categories = [
  ...new Set(skills.reduce((acc, { category }) => acc.concat(category), [])),
]
  .sort()
  .map((category, index) => ({
    name: category,
    color: colors[index],
  }));

export { categories, skills };

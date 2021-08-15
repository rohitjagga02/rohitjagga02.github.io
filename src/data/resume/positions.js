/* eslint-disable operator-linebreak */
const positions = [
  {
    company: 'University of Pennsylvania',
    position: 'Teaching Assistant for CIS 545: Big Data Analytics',
    link: 'https://upenn.edu',
    daterange: 'Aug 2021 - Present',
    points: ['CIS 545 - Fall 2021, taught by Professor Zachary Ives'],
  },
  {
    company: "Children's Hospital of Philadelphia",
    position: 'Machine Learning Research Intern',
    link: 'https://chop.edu',
    daterange: 'May 2021 - Aug 2021',
    points: [
      'Developed an end-to-end PyTorch pipeline for Self-supervised contrastive learning on frontal chest X-ray images.',
      'Applied data augmentations proposed by Chen et al (SimCLR) to chest X-ray images for task-specific training of the ' +
        'SimCLR model, which was used for predicting Acute Respiratory Distress Syndrome (ARDS) diagnoses.',
      'Awarded a stipend through the Penn Undergraduate Research Mentoring (PURM) program.',
    ],
  },
  {
    company: 'OffWeGo',
    position: 'Software Engineering Intern',
    link: 'https://www.offwego.io/',
    daterange: 'Jun 2021 - Aug 2021',
    points: [
      'Develop a groupchat SMS feature using Twilio API to enable trip-based messaging among OffWeGo mobile users.',
      'Analyze and model the risk associated with OffWeGo student travelers based on peer surveys, response rates ' +
        'to check-in requests, etc. from internal student management database using Python, Javascript, and PostgreSQL.',
      'Make frontend and backend modifications to the company website using React, Django, PostgreSQL, and AWS.',
    ],
  },
  {
    company: 'Art of Problem Solving',
    position: 'Teaching Assistant, Grader',
    link: 'https://artofproblemsolving.com/',
    daterange: 'Feb 2020 - Aug 2021',
    points: [
      'Grade student-written proofs and assist in teaching courses in introductory/intermediate programming, combinatorics, ' +
        'number theory, algebra, etc. for contest math preparation at the advanced high school level.',
    ],
  },
  {
    company: 'NC State University',
    position: 'Research Intern',
    link: 'https://www.ncsu.edu/',
    daterange: 'Jun 2019 - Feb 2020',
    points: [
      'Computational modeling of cell morphology in epithelial tissue undergoing morphogenesis.',
      'Completed research at NC State through the NCSSM Mentorship program.',
    ],
  },
];

export default positions;

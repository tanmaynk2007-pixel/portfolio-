// All content lives here so components stay reusable.
// Everything below is taken straight from my original Week 04 HTML page.

export const profile = {
  name: 'Tanmay',
  tagline: 'Student & Aspiring Software Developer',
  about: [
    'Hello! I am Tanmay, a student interested in programming, software development, and learning new technologies.',
    'I enjoy improving my technical skills and exploring different areas of computer science.',
  ],
};

export const skillCategories = ['All', 'Web', 'Languages', 'Tools'];

export const skills = [
  { name: 'HTML', category: 'Web', level: 85 },
  { name: 'CSS', category: 'Web', level: 80 },
  { name: 'Git', category: 'Tools', level: 75 },
  { name: 'GitHub', category: 'Tools', level: 75 },
  { name: 'Java', category: 'Languages', level: 70 },
  { name: 'Python', category: 'Languages', level: 75 },
  { name: 'C', category: 'Languages', level: 70 },
  { name: 'C++', category: 'Languages', level: 65 },
];

export const projects = [
  {
    id: 1,
    title: 'Github Profile',
    description:
      'My GitHub profile bringing together all of my repositories and contributions in one place.',
    category: 'Version Control',
    stack: ['GitHub', 'Markdown'],
    url: 'https://github.com/tanmaynk2007-pixel',
  },
  {
    id: 2,
    title: 'Portfolio Website',
    description:
      'A personal portfolio website to showcase my skills and projects, rebuilt with React.',
    category: 'Web',
    stack: ['HTML', 'CSS', 'React'],
    url: 'https://github.com/tanmaynk2007-pixel/Portfolio-demo',
  },
  {
    id: 3,
    title: 'Python Calculator',
    description:
      'A simple calculator built in Python to practice logic and problem-solving.',
    category: 'Programming',
    stack: ['Python'],
    url: 'https://github.com/tanmaynk2007-pixel/Python-based-Basic-Calculator',
  },
  {
    id: 4,
    title: 'To-Do List',
    description:
      'An interactive to-do list app to practice front-end development and working with the DOM.',
    category: 'Web',
    stack: ['JavaScript'],
    url: 'https://github.com/tanmaynk2007-pixel/SimpleTodoList',
  },
];
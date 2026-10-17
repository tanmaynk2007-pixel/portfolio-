import { useEffect, useState } from 'react';
import Header from './components/Header.jsx';
import About from './components/About.jsx';
import Skills from './components/Skills.jsx';
import Projects from './components/Projects.jsx';
import Contact from './components/Contact.jsx';
import Footer from './components/Footer.jsx';
import { profile, skills, skillCategories, projects } from './data/portfolio.js';

const STORAGE_KEY = 'portfolio-theme';

function getInitialTheme() {
  const saved = localStorage.getItem(STORAGE_KEY);
  if (saved === 'light' || saved === 'dark') return saved;
  return window.matchMedia('(prefers-color-scheme: dark)').matches
    ? 'dark'
    : 'light';
}

// App owns the theme state and passes it down to Header via props.
export default function App() {
  const [theme, setTheme] = useState(getInitialTheme);

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
    localStorage.setItem(STORAGE_KEY, theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((current) => (current === 'light' ? 'dark' : 'light'));
  };

  return (
    <div id="top" className="page">
      <Header profile={profile} theme={theme} onToggleTheme={toggleTheme} />

      <main className="container">
        <About profile={profile} />
        <Skills skills={skills} categories={skillCategories} />
        <Projects projects={projects} />
        <Contact />
      </main>

      <Footer name={profile.name} />
    </div>
  );
}
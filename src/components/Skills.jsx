import { useState } from 'react';
import Section from './Section.jsx';

// Interactive skills section:
//  - category chips (state) filter the list
//  - clicking a skill (state) reveals its proficiency bar
export default function Skills({ skills, categories }) {
  const [activeCategory, setActiveCategory] = useState('All');
  const [selectedSkill, setSelectedSkill] = useState(null);

  const visibleSkills =
    activeCategory === 'All'
      ? skills
      : skills.filter((skill) => skill.category === activeCategory);

  const handleSelect = (skill) => {
    setSelectedSkill((current) => (current === skill.name ? null : skill.name));
  };

  const selected = skills.find((skill) => skill.name === selectedSkill);

  return (
    <Section id="skills" title="Skills" subtitle="Tap a skill to see proficiency">
      <div className="chips" role="group" aria-label="Filter skills by category">
        {categories.map((category) => (
          <button
            key={category}
            type="button"
            className={`chip ${activeCategory === category ? 'chip--active' : ''}`}
            onClick={() => setActiveCategory(category)}
            aria-pressed={activeCategory === category}
          >
            {category}
          </button>
        ))}
      </div>

      <ul className="skill-grid">
        {visibleSkills.map((skill) => (
          <li key={skill.name}>
            <button
              type="button"
              className={`skill-card ${selectedSkill === skill.name ? 'skill-card--active' : ''}`}
              onClick={() => handleSelect(skill)}
              aria-pressed={selectedSkill === skill.name}
            >
              <span className="skill-card__name">{skill.name}</span>
              <span className="skill-card__category">{skill.category}</span>
            </button>
          </li>
        ))}
      </ul>

      {selected && (
        <div className="skill-detail">
          <div className="skill-detail__head">
            <strong>{selected.name}</strong>
            <span>{selected.level}%</span>
          </div>
          <div
            className="progress"
            role="progressbar"
            aria-valuenow={selected.level}
            aria-valuemin="0"
            aria-valuemax="100"
            aria-label={`${selected.name} proficiency`}
          >
            <span className="progress__fill" style={{ width: `${selected.level}%` }} />
          </div>
        </div>
      )}
    </Section>
  );
}
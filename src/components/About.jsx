import Section from './Section.jsx';

// About receives the profile object as a prop and maps over
// the paragraph array.
export default function About({ profile }) {
  return (
    <Section id="about" title="About Me" subtitle="A quick intro">
      <div className="about">
        <div className="about__text">
          {profile.about.map((paragraph, index) => (
            <p key={index}>{paragraph}</p>
          ))}
        </div>
      </div>
    </Section>
  );
}
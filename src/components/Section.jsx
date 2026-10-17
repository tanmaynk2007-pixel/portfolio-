// Reusable section wrapper — every page section gets the same
// id (for nav anchors), heading and layout for free.
export default function Section({ id, title, subtitle, children }) {
  return (
    <section id={id} className="section">
      <div className="section__head">
        <h2 className="section__title">{title}</h2>
        {subtitle && <p className="section__subtitle">{subtitle}</p>}
      </div>
      {children}
    </section>
  );
}
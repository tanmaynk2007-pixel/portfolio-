export default function Footer({ name }) {
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <p>
        &copy; {year} {name}. All rights reserved.
      </p>
      <p className="footer__note">Built with React + Vite</p>
    </footer>
  );
}
const NAV_LINKS = [
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Contact', href: '#contact' },
];

// Header receives props from App: the profile data and the theme state.
export default function Header({ profile, theme, onToggleTheme }) {
  return (
    <header className="header">
      <div className="header__inner">
        <a className="brand" href="#top">
          <span className="brand__logo">{profile.name.charAt(0)}</span>
          <span className="brand__text">
            <strong>{profile.name}</strong>
            <small>{profile.tagline}</small>
          </span>
        </a>

        <div className="header__actions">
          <nav className="nav" aria-label="Main navigation">
            {NAV_LINKS.map((link) => (
              <a key={link.href} href={link.href}>
                {link.label}
              </a>
            ))}
          </nav>

          <button
            type="button"
            className="theme-toggle"
            onClick={onToggleTheme}
            aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
          >
            {theme === 'light' ? '🌙 Dark' : '☀️ Light'}
          </button>
        </div>
      </div>
    </header>
  );
}
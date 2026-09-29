import "../styles/Navbar.css";

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
];

export default function Navbar() {
  return (
    <header className="navbar">
      <div className="navbar-inner container">
        <a
          href="#home"
          className="navbar-brand"
          aria-label="Mihret Emeru, home"
        >
          <span className="navbar-logo">M.</span>
          <span className="navbar-name">Mihret Emeru</span>
        </a>

        <nav className="navbar-links" aria-label="Main navigation">
          {navLinks.map((link) => (
            <a key={link.href} href={link.href}>
              {link.label}
            </a>
          ))}
        </nav>

        <a className="navbar-contact" href="#contact">
          Let&apos;s talk <span aria-hidden="true">↗</span>
        </a>
      </div>
    </header>
  );
}

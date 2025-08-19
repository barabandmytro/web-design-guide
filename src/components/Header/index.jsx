import { Link } from "react-router-dom";
import { useState } from "react";
import "./Header.scss";

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="site-header">
      <div className="header-inner">
        <Link to="/" className="logo">WebDesign Guide</Link>

        <nav className={`nav ${open ? "open" : ""}`}>
          <Link to="/" onClick={() => setOpen(false)}>Головна</Link>
          <Link to="/about" onClick={() => setOpen(false)}>Про курс</Link>
          <Link to="/contacts" onClick={() => setOpen(false)}>Контакти</Link>
        </nav>

        <button
          className={`burger ${open ? "active" : ""}`}
          aria-label="Toggle navigation"
          onClick={() => setOpen(!open)}
        >
          <span></span><span></span><span></span>
        </button>
      </div>
    </header>
  );
}

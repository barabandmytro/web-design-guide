import { useState } from "react";
import { Link } from "react-router-dom";
import Container from "../UI/Container";
import "./Header.scss";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleLinkClick = () => {
    setMenuOpen(false);
  };

  return (
    <header className="site-header">
      <Container>
        <div className="header-inner">
          <div className="logo">WebDesign Guide</div>

          <button
            className={`burger ${menuOpen ? "active" : ""}`}
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <span></span>
            <span></span>
            <span></span>
          </button>

          <nav className={`nav ${menuOpen ? "open" : ""}`}>
            <Link to="/" onClick={handleLinkClick}>Головна</Link>
            <Link to="/about" onClick={handleLinkClick}>Про курс</Link>
            <Link to="/contacts" onClick={handleLinkClick}>Контакти</Link>
          </nav>
        </div>
      </Container>
    </header>
  );
};

export default Header;

import React from "react";
import { Link } from "react-router-dom";
import "./Footer.scss";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer__container">
        <p className="footer__copy">© {new Date().getFullYear()} Dmytro Baraban App. Всі права захищені.</p>
        <nav className="footer__nav">
          <Link to="/about">Про нас</Link>
          <Link to="/contacts">Контакти</Link>
          <Link to="/privacy">Політика конфіденційності</Link>
        </nav>
      </div>
    </footer>
  );
}

export default Footer;

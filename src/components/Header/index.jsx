import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import './Header.scss';

export default function Header() {
  const [open, setOpen] = useState(false);

  // керуємо body scroll lock
  useEffect(() => {
    if (open) {
      document.body.classList.add('menu-open');
    } else {
      document.body.classList.remove('menu-open');
    }
  }, [open]);

  return (
    <header className="site-header">
      <div className="header-inner">
        <Link to="/" className="logo">
          WebDesign Guide
        </Link>

        <nav className={`nav ${open ? 'open' : ''}`}>
          <Link to="/" onClick={() => setOpen(false)}>
            Головна
          </Link>
          <Link to="/about" onClick={() => setOpen(false)}>
            Про курс
          </Link>
          <Link to="/contacts" onClick={() => setOpen(false)}>
            Контакти
          </Link>
        </nav>

        <button
          className={`burger ${open ? 'active' : ''}`}
          aria-label="Toggle navigation"
          onClick={() => setOpen(!open)}
        >
          <span className="icon-wrapper">
            <img
              src="/images/burger-menu/menu.svg"
              alt="menu"
              className={`icon ${open ? 'hidden' : 'visible'}`}
            />
            <img
              src="/images/burger-menu/close.svg"
              alt="close"
              className={`icon ${open ? 'visible' : 'hidden'}`}
            />
          </span>
        </button>
      </div>
      {open && <div className="overlay" onClick={() => setOpen(false)} />}
    </header>
  );
}
